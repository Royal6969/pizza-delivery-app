import Image from 'next/image'
import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>7,99€</span>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsa.</p>
    </div>
  )
}

export default ProductCard