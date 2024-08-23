import React, { useState, useEffect } from 'react';
import styles from "./loading.module.css";

const Loading = () => {
  const [text, setText] = useState('');
  const phrase = 'OppenMinds';

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + phrase.charAt(index));
      index += 1;

      if (index === phrase.length) {
        clearInterval(interval);
      }
    }, 450); // Adjust the speed here (per letter)

    return () => clearInterval(interval); // Clean up the interval
  }, [phrase]);

  return (
    <div className={styles.container}>

      <div className={styles.auxiliaryText}>
        <h2>
          Crafting the keys that...
        </h2>
        <h3>
          Aspiring To...
        </h3>
      </div>

      <h1 className={styles.mainText}>
        {text}
        </h1>
    </div>
  );
};



export default Loading;
