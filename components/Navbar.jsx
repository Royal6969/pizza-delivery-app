import Image from 'next/image'
import React from 'react'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* we're going to create 3 elements */}
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" /> {/* Next.js wants we use its own tag for img, and you have to import it ... and very important define a width/height or a layout="fill" */}
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>954 70 17 01</div>
        </div>
      </div>
      
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo-no-bg.png" alt='' width="160px" height="110px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Constact</li>
        </ul>
      </div>
      
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt='' width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>

    </div>
  )
}

export default Navbar