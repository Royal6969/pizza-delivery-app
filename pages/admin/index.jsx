import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/Admin.module.css'

const Index = ({ orders, products }) => { // remember that file name begin in lower case, but the main function name, if it's a component, has to begin in upper case

  // we have to create here two state hooks, because when we delete any product or order, it will delete in MongoDB but we have to refresh the components to see the real changes in the view
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/api/products/" + id);
      setProductList(productList.filter((product) => product._id !== id)); // for each product it going to check its id, if it's equal it's going to delete the product, else it's going to let the product like it was

    } catch (err) {
      console.log(err);
    }
  }

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0]; // first, we have to find the order
    const currentStatus = item.status; // to save the (current) status for the order found before

    try {
      // it will return us the updated version of this order
      const res = await axios.put(
        "http://localhost:3000/api/orders/" + id,
        { // we should send here what we're going to change (status)
          status: currentStatus + 1 // order found before current status +1
        }
      );

      setOrderList([
        res.data, // the updated version of this order
        ...orderList.filter((order) => order._id !== id) // to delete the previous version of this order
      ])

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>

        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>

          {productList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.image}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>{product.prices[0]}€</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button 
                    className={styles.button}
                    onClick={() => handleDelete(product._id)} // we have to pass the id because we're going to delete it with its id
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
          
        </table>
      </div>

      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        
        <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tbody>
            
            {orderList.map((order) => (
              <tbody key={order._id}>
                <tr className={styles.trTitle}>
                  <td>{order._id.slice(0, 5)}...</td>
                  <td>{order.customer}</td>
                  <td>{order.total}€</td>
                  <td>
                    {order.paymentMethod === 0 // if paymentMethod is equal to 0, then render a span with cash word
                      ? <span>cash</span>
                      : <span>paid</span>
                    }
                  </td>
                  <td>{status[order.status]}</td>
                  <td>
                    <button 
                      className={styles.button}
                      onClick={() => handleStatus(order._id)}
                    >
                      Next Stage
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
      </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => { // ctx = context
  const myCookie = ctx.req?.cookies || ""; // if there's a request we're going to take cookie, and if there's no cookie it's going to be empty string

  if (myCookie.token !== process.env.TOKEN) { // if myCookie doesn't equal to token...
    // ... just block this process here and don't call any api request here
    return {
      redirect: { // this is a method for Next.js that we can use redirect and inside this object we can set:
        destination: "/admin/login",
        permanent: false
      }
    }
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data
    }
  }
}

export default Index