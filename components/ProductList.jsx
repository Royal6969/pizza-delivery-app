import React from 'react'
import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = ({ productList }) => { // <-- props here
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA FOR FAST FOOD LOVERS</h1>
      <p className={styles.description} id="products">
        🍕 The best selection of most popular pizzas in Seville 🍕<br />
        🍟🍔🌯 Also we have chips, burgers and kebaps 🍟🍔🌯<br />
        📱 Make your order here 📱 <br />
        💳 pay with paypal or cash in delivery 💶<br />
        🤩 and enjoy your moment with whoever and wherever 😋
      </p>
      
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