import React, { useState, useEffect } from 'react';
import style from "./loading.module.css";

const Loading = () => {
  const [text, setText] = useState('');
  const phrase = 'Oppen Minds';

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + phrase.charAt(index));
      index += 1;

      if (index === phrase.length) {
        clearInterval(interval);
      }
    }, 200); // Adjust the speed here (200ms per letter)

    return () => clearInterval(interval); // Clean up the interval
  }, [phrase]);

  return (
    <div className={style.container}>
      <h1>
        {text}
        </h1>
    </div>
  );
};



export default Loading;
