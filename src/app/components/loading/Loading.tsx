import React, { useState, useEffect } from 'react';
import styles from "./Loading.module.css";

const Loading = () => {
  

  

  const [text, setText] = useState('');
  const phrase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => phrase.charAt(index));
      index += 1;

      if (index === phrase.length - 1) {
        clearInterval(interval);
      }
    }, 80); // Adjust the speed here (per letter)

    return () => clearInterval(interval); // Clean up the interval
  }, [phrase]);
//
  


  return (
    <div className={styles.container}>

      <div className={styles.alphabetText}>
        <h1>
          {text}
        </h1>
      </div>

      <div className={styles.mainText}>
        <h4>
          Open Minds
        </h4>
      </div>
      
    </div>
  );
};



export default Loading;
