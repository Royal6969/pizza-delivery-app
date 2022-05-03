import Image from 'next/image'
import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <Image src="/img/bg.png" layout='fill' alt="" />
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>OH YES, WE DID. THE SUPER PIZZA, WELL BAKED SLICE OF PIZZA.</h2>
          </div>

          <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
            <p className={styles.text}>
              Edificio Parque Florida,<br />
              C. José María Moreno Galván, 2,<br />
              41003 Sevilla<br />
              954 70 17 01
            </p>
            <p className={styles.text}>
              Av. de España, n69,<br /> 
              41704 Dos Hermanas, Sevilla<br />
              958 07 86 50
            </p>
            <p className={styles.text}>
              Calle El Barbero de Sevilla, n1, <br /> 
              41006 Sevilla<br />
              954 64 58 00
            </p>
          </div>
          
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
              MONDAY- SATURDAY <br />
              13.00 - 17.00 <br />
              20.00 - 00.00
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer