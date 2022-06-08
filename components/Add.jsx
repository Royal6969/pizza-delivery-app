import React, { useState } from 'react'
import styles from '../styles/Add.module.css'
import axios from 'axios';

const Add = ({ setClose }) => { // we need the state to close/open modal as a prop
  
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);
  // you can use just one state and change every item in one function

  const handleExtraInput = (e) => {
    setExtra({
      ...extra, // previous version of extra
      [e.target.name]: e.target.value // name and price // we can search for how to handle multiple inputs in one handler
      // when we change those items it's going to update by using their value (name option in inputs)
    })
  }

  const handleExtra = (e) => {
    setExtraOptions((prev) => [ // previous one it's going to return
      ...prev, // previous extra options // this is how to set state using previous data
      extra // additionally these extra wich we have set in handleExtraInput function
    ]);
  }

  const changePrice = (e, index) => {
    // I'm going to find my current prices first and change its value and set prices after that 
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  }

  const handleCreate = async () => {
    const data = new FormData();
    
    data.append("file", file);
    data.append("upload_preset", "uploads") // to prevent 400 error bad request

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dxyivnn3n/image/upload", // https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload
        data
      );
      // console.log(uploadRes.data);

      const { url } = uploadRes.data; // to take the url from the image uoploaded
      const newProduct = {
        title,
        description,
        prices,
        extraOptions,
        image: url
      };

      await axios.post(
        "https://pizza-delivery-app-delta.vercel.app/api/products",
        newProduct
      );

      setClose(true); // we're receiving like a prop from Home function where it was a state hook

    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span
          onClick={() => setClose(true)} // if we click this button it's going to be true again and the modal will close
          className={styles.close}
        >
          X
        </span>

        <h1>Add a New Product</h1>

        <div className={styles.item}>
          <label className={styles.label}>
            Choose an image
          </label>

          <input type="file" onChange={(e) => setFile(e.target.files[0])} /> {/* [0] means we can't choose multiple files */}
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <div className={styles.priceContainer}>
            <input
              className={styles.input}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles.item}>
            <label className={styles.label}>Description</label>
            <textarea
              rows={10}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className={styles.item}>
            <label className={styles.label}>Prices</label>
            <div className={styles.priceContainer}>
              <input
                className={`${styles.input} ${styles.inputSmall}`} // we're creating one input for each pizza size
                type="number"
                placeholder="Small"
                onChange={(e) => changePrice(e, 0)}
              />
              <input
                className={`${styles.input} ${styles.inputSmall}`} // using multiple styles
                type="number"
                placeholder="Medium"
                onChange={(e) => changePrice(e, 1)}
              />
              <input
                className={`${styles.input} ${styles.inputSmall}`} // each input will be a litle bit smaller
                type="number"
                placeholder="Large"
                onChange={(e) => changePrice(e, 2)}
              />
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSmall}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />

            <button className={styles.extraButton} onClick={handleExtra}>
              Add
            </button>
          </div>
          
          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>

        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>

      </div>
    </div>
  )
}

export default Add