import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Add from '../components/Add'
import AddButton from '../components/AddButton'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home({ productList, admin }) { // <-- set props here in function will use it
  
  const [close, setClose] = useState(true); // basically if it's true we're not going to see our modal, and if it's false we're going to open it here in this home page
  
  return (
    <div className={styles.container}>

      <Head>
        <title>Pizza Delivery in Seville</title>
        <meta name="description" content="Best pizza in the capital city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />

      {admin && <AddButton setClose={setClose} />}

      <ProductList productList={productList} /> {/* <-- set props here in component will use it */}

      {!close && <Add setClose={setClose} />} {/* if it's not close call another component */}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products"); // it's going to fetch all data, so we're going to use this response as a prop here
  
  // so, to do that, we should return our props
  return {
    props: { // <-- define props here
      productList: res.data,
      admin // the new prop for admin logged
    }
  }
}