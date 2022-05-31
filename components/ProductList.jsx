import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = ({ productList }) => { // <-- props here
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST FIZZA FOR GOLFOS</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident quis laborum repudiandae explicabo dolores error, illum inventore perferendis reiciendis placeat quaerat, rem eum laudantium similique itaque earum odio corporis modi. Laudantium, sint, voluptatem quasi veniam inventore voluptas sit officiis suscipit ipsa cumque ea id beatae itaque vel voluptates natus!</p>
      
      <div className={styles.wrapper}>
          {/* <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/> */}

          {/* now, we dont' need to repeat this ProductCard,  */}
          {productList.map((product) => (
            <ProductCard key={product._id} product={product} /> // for each pizza we have different ID, so you need to specify the key in component inside map() function
          ))}
      </div>
    </div>
  )
}

export default ProductList