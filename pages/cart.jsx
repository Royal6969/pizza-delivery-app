import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from 'axios';
import { useRouter } from 'next/router';
import { reset } from '../redux/cartSlice'
import CashModal from '../components/CashModal';

const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data); // what API use to create the order and the data sent
       
      // response control
      if (res.status === 201) {                 // if order is created
        dispatch(reset());                      // cart is reseted
        router.push(`/orders/${res.data._id}`); // redirect user to order page
      }
    
    } catch (err) {
      console.log(err);
    }
  }

  // This values are the props in the UI
  const amount = cart.total * 1.21;
  const currency = "EUR";
  const style = {"layout":"vertical"};

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]); // warning: missing dependenciess
    //, [currency, dispatch, options, showSpinner]);

    return (<>
      {(showSpinner && isPending) && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (details) {
            // Your code here after capture the order
            // console.log(details); // to check we're receiving customer data
            
            const shipping = details.purchase_units[0].shipping; // including customer name and address
            
            createOrder({ // go to order model file to remember the fields
              customer: shipping.name.full_name,
              address: shipping.address.address_line_1,
              total: cart.total,
              paymentMethod: 1
            });
          });
        }}
      />
    </>
    );
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>

          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
              <td>
                <div className={styles.imgContainer}>
                  <Image src={product.image} layout="fill" objectFit="cover" alt="" />
                </div>
              </td>
              <td>
                <span className={styles.name}>{product.title}</span>
              </td>
              <td>
                <span className={styles.extras}>
                  {product.extras.map((extra) => (
                    <span key={extra._id}>{extra.text}, </span>
                  ))}
                </span>
              </td>
              <td>
                <span className={styles.price}>{product.price}€</span>
              </td>
              <td>
                <span className={styles.quantity}>{product.quantity}</span>
              </td>
              <td>
                <span className={styles.total}>{product.price * product.quantity}€</span>
              </td>
            </tr>
            ))}   
          </tbody>  
        </table>
      </div>


      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>

          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b> {cart.total}€
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>IVA 21%:</b> {cart.total * 0.21}€
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> 0.00€
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> {cart.total * 1.21}€
          </div>

          {open ? (
            <div className={styles.paymentMethods}>
              <button className={styles.payButton} onClick={() => setCash(true)}>CASH ON DELIVERY</button>

              <PayPalScriptProvider
                options={{
                  "client-id": "AbqUJX-SBcsb3nyLFe1iY0JwpJocthebrLvadp4UtHDz_uPxxmp7CayR6DMWJ9JV2VMCijV9MH1D_oa1",
                  components: "buttons",
                  currency: "EUR",
                  // "disable-funding": "credit,card,p24", // to disable any other payment methods which collaborates with paypal
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW
            </button>
          )}

        </div>
      </div>

      {cash && ( // if cash state is true
        <CashModal total={cart.total} createOrder={createOrder} /> // call to CashModal component and pass order total to create an order
      )}

    </div>
  )
}

export default Cart