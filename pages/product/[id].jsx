import Image from 'next/image';
import React from 'react'
import styles from '../../styles/Product.module.css'
import { useState } from 'react'

const Product = () => {

  const [size, setSize] = useState(0); // index 0 is first possible price (7.49 in the example object)

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "ANDRESMANIA",
    price: [7.49, 10.50, 12.25, 14.95],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident quis laborum repudiandae explicabo dolores error"
  };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <Image src={pizza.img} alt="" layout='fill' objectFit='contain' />
          </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>{pizza.name}</h1>
          <span className={styles.price}>${pizza.price[size]}</span>
          <p className={styles.description}>{pizza.description}</p>

          <h3 className={styles.choose}>Choose the size</h3>
          <div className={styles.sizes}>
            <div className={styles.size} onClick={() => setSize(0)}> {/* here, we define a Click event, to change the setSize state according to the pizza size */}
              <Image src="/img/size.png" alt="" layout='fill' />
              <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size} onClick={() => setSize(1)}> {/* here, we define a Click event, to change the setSize state according to the pizza size */}
              <Image src="/img/size.png" alt="" layout='fill' />
              <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size} onClick={() => setSize(2)}> {/* here, we define a Click event, to change the setSize state according to the pizza size */}
              <Image src="/img/size.png" alt="" layout='fill' />
              <span className={styles.number}>Large</span>
            </div>
          </div>

          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
            <div className={styles.option}>
              <input 
                type="checkbox"
                id='double'     // we're going to choose ingredients according to this id
                name='double'   // to update our state
                className={styles.checkbox}
              />
              <label htmlFor="double">Double Ingredients</label>  {/* in htmlFor="inputId" we have to write the id in previous input */}
            </div>

            <div className={styles.option}>
              <input 
                type="checkbox"
                id='cheese'     // we're going to choose ingredients according to this id
                name='cheese'   // to update our state
                className={styles.checkbox}
              />
              <label htmlFor="double">Extra Cheese</label>  {/* in htmlFor="inputId" we have to write the id in previous input */}
            </div>

            <div className={styles.option}>
              <input 
                type="checkbox"
                id='spicy'     // we're going to choose ingredients according to this id
                name='spicy'   // to update our state
                className={styles.checkbox}
              />
              <label htmlFor="double">Spicy Sauce</label>  {/* in htmlFor="inputId" we have to write the id in previous input */}
            </div>

            <div className={styles.option}>
              <input 
                type="checkbox"
                id='garlic'     // we're going to choose ingredients according to this id
                name='garlic'   // to update our state
                className={styles.checkbox}
              />
              <label htmlFor="double">Garlic Sauce</label>  {/* in htmlFor="inputId" we have to write the id in previous input */}
            </div>
          </div>
          
          <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add to Cart</button>
          </div>          
        </div>
    </div>
  )
}

export default Product