import Image from 'next/image'
import React from 'react'
import styles from '../styles/ProductCard.module.css'
import Link from 'next/link'

const ProductCard = ({ product }) => { // <-- prop here
  return (
    <div className={styles.container}> {/* now you can "interpolate object's attributes" */}
      
      {/* a warning advice us to write passHref param to navigate with the product ID (ObjectId in MongoDB) */}
      <Link href={`/product/${product._id}`} passHref>
        <Image src={product.image} alt="" width="500" height="500" />
      </Link>

      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>{product.prices[0]}€</span>
      <p className={styles.desc}>{product.description}</p>
    
    </div>
  )
}

export default ProductCard