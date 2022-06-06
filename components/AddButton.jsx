import React from 'react'
import styles from '../styles/Add.module.css'

const AddButton = ({ setClose }) => {
  return (
    <div 
      className={styles.mainAddButton}
      onClick={() => setClose(false)} // when I click this button I'm going to update my state to false
    >
      Add New Product
    </div>
  )
}

export default AddButton