import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home({ productList }) { // <-- set props here in function will use it
  return (
    <div className={styles.container}>

      <Head>
        <title>Pizza Delivery in Seville</title>
        <meta name="description" content="Best pizza in the capital city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      <ProductList productList={productList} /> {/* <-- set props here in component will use it */}

    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products"); // it's going to fetch all data, so we're going to use this response as a prop here
  
  // so, to do that, we should return our props
  return {
    props: { // <-- define props here
      productList: res.data
    }
  }
}