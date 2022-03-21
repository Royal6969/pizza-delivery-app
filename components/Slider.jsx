import React from 'react'
import styles from '../styles/Slider.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Slider = () => {

  const [index, setIndex] = useState(0);

  const images = [ // I have created an images array for the slider
      "/img/featured.png",
      "/img/featured2.png",
      "/img/featured3.png",
  ]  

  const handleArrow = (direction) => { // here I define the handleArrow funcionality
    if (direction === "left") { // if we press the leftArrow button...
      setIndex(index !== 0 ? index-1 : 2) // if the current index is not 0, deduct one, else go last image
    }

    if (direction === "right") { // if we press the rightArrow button...
      setIndex(index !== 2 ? index+1 : 0) // if the current index is not 0, plus one, else go first image
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow("left")}>
            <Image src="/img/arrowl.png" alt="" layout='fill' objectFit='contain' /> {/* remember that to use Image Next tag, we need the width/height or the layout="fill" */}
        </div>

        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}> {/* for the tranlation effect, we set a dynamic template enclosing our css property with grave accents */}
            {images.map((img, index)=>( // for map function is neccesary to define a key and an index
            
                <div className={styles.imgContainer} key={index}> {/* here you can see the use for key and index */}
                    <Image src={img} alt="" layout='fill' objectFit='contain' /> 
                </div>
            ))}
        </div>

        <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow("right")}>
            <Image src="/img/arrowr.png" alt="" layout='fill' objectFit='contain' />
        </div>
    </div>
  )
}

export default Slider