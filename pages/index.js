import Head from 'next/head'
import Image from 'next/image'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Pizza Delivery in Seville</title>
        <meta name="description" content="Best pizza in the capital city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      <ProductList />

    </div>
  )
}
