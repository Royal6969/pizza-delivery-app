import Image from 'next/image';
import React from 'react'
import styles from '../../styles/Product.module.css'
import { useState } from 'react'
import axios from 'axios';

const Product = ({ product }) => { // <-- props which function will use

  const [size, setSize] = useState(0); // index 0 is first possible price (7.49 in the example object)
  const [price, setPrice] = useState(product.prices[0]);
  
  // when we select an ingredient, and we press AddTocart button, to see in cart the ingredients choosen:
  const [extras, setExtras] = useState([]); // empty array for when user refresh page, any ingredients are selected

  const [quantity, setQuantity] = useState(1); // start in 1 becasuse is the minimum allowed to buy

  const changePrice = (number) => {
    setPrice(price + number);
  }

  // Explanation (with pizza-1 for example):
  // our initial price is 12 euros, when I click any of those sizes we're going to send our sizeIndex,
  // and firstly we're going to take difference product prices and sizeIndex, for example, the medium one,
  // it's going to be prices and one = 13 euros, but we didn't update our size yet,
  // so when I say product prices and size, it's going to be still 0 when is 12 euros,
  // but 13 euros - 12 euros = 1 euro, and after that I'm going to set my size, 
  // and it's going to be 1 in this example, and finally, I'm going to update my price: 12€ + 1€ = 13€
  const handleSize = (sizeIndex) => { // I'm going to take this sizeIndex and then I'm going to increase this size but before I have to change this product price... to do that I have to create a new useState() and a function to change the price before this function
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);

    // finally I have to change price
    changePrice(difference);
  }

  const handleChange = (e, option) => {
    // firstly I'm going to check whether we check the checkbox or not
    const checked = e.target.checked;

    // we're going to have an initial price (smallest pizza price),
    // and when I click any size or when I click any ingredient we're going to add an additional price to initial price 
    /****************** read again explanation before if it's necessary *************/

    // Now I can do the same with ingredients,
    // for spicy sauce the difference will be 2€,
    // and when I uncheck we're going to substract these 2€ again,
    // so it's going to be: spicy sauce selected = 14€ ... spicy sauce unselected = 12€
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]); // ellipsis means spread values inside (prev) ... and after we add the new one ingredient choosens
    } else { // but if we uncheck...
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  }
  // Explanition of how to select and add ingredients
  // firstly if we check our item we're going to set extras,
  // and we're going to take (prev)ious items in our array
  // and we're going to add them again, and additionally,
  // we're going to add our option...
  // after in else part,
  // we're going to use filter method,
  // if this item and id is not equal to this option id,
  // just keep them inside if they are equal just removing using this filter

  // console.log(extras);  // ingredients test
  // console.log(product); // object test

  /*
  const product = { // static example object for frontend test at first
    id: 1,
    image: "/img/product.png",
    name: "ANDRESMANIA",
    price: [7.49, 10.50, 12.25, 14.95],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident quis laborum repudiandae explicabo dolores error"
  };
  */ // it was a simple test for frontend at first

  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={product.image} alt="" layout='fill' objectFit='contain' />
          </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>{product.title}</h1>
          {/* <span className={styles.price}>${product.prices[size]}</span> */}
          <span className={styles.price}>${price}</span>
          <p className={styles.description}>{product.description}</p>

          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
        {/* <div className={styles.size} onClick={() => setSize(0)}>  here, we define a Click event, to change the setSize state according to the product size */}
            <div className={styles.size} onClick={() => handleSize(0)}>
              <Image src="/img/size.png" alt="" layout='fill' />
              <span className={styles.number}>Small</span>
            </div>
        {/* <div className={styles.size} onClick={() => setSize(1)}>  here, we define a Click event, to change the setSize state according to the product size */}
            <div className={styles.size} onClick={() => handleSize(1)}>
              <Image src="/img/size.png" alt="" layout='fill' />
              <span className={styles.number}>Medium</span>
            </div>
        {/* <div className={styles.size} onClick={() => setSize(2)}>  here, we define a Click event, to change the setSize state according to the product size */}
            <div className={styles.size} onClick={() => handleSize(2)}>
              <Image src="/img/size.png" alt="" layout='fill' />
              <span className={styles.number}>Large</span>
            </div>
          </div>

          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>

            {product.extraOptions.map((option) => (
              <div className={styles.option} key={option._id}>
              <input 
                type="checkbox"
                id={option.text}     // we're going to choose ingredients according to this id
                name={option.text}   // to update our state
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)} // handleChange() function receives an (e)vent and the option 
              />
              <label htmlFor="double">{option.text}</label>  {/* in htmlFor="inputId" we have to write the id in previous input */}
            </div>
            ))}

            {/* <div className={styles.option}>
              <input 
                type="checkbox"
                id='cheese'     // we're going to choose ingredients according to this id
                name='cheese'   // to update our state
                className={styles.checkbox}
              />
              <label htmlFor="double">Extra Cheese</label>
            </div> */}

          </div>
          
          <div className={styles.add}>
            <input
              onChange={(e) => setQuantity(e.target.value)} 
              type="number" 
              defaultValue={1} 
              className={styles.quantity} 
            />
            <button className={styles.button}>Add to Cart</button>
          </div>          
        </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => { // params it's a type of prop which takes the product ID
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`); // it's going to fetch the specific product with its ID (params)
  
  return {
    props: { // <-- props here
      product: res.data
    }
  }
}

export default Product