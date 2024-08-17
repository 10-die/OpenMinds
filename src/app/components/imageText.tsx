import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./imageText.module.css";

interface ImageTextHandler
{
    src: string;
    alt: string;
    width: number;
    height: number;
    text: string;
    pre_text: string;
}

const ImageTextArea: React.FC<ImageTextHandler> = ({ src, alt, width, height, pre_text, text }) =>
{
    const [showTextArea, setShowTextArea] = useState<boolean>(false);
    const [showOverlayText, setShowOverlayText] = useState<boolean>(true); 


    const handleImageClick = () =>
    {
        setShowTextArea(prevState => !prevState); // toggle visibility
        setShowOverlayText(prevState => !prevState);
    };


return (
        <div className={styles.textContainer}>
          <Image
            alt={alt}
            src={src}
            width={width}
            height={height}
            onClick={handleImageClick}
            className={styles.Image}
          />
      
            {showOverlayText &&
                (
                    <div className={styles.overlayText} onClick={handleImageClick}>
                        {pre_text}
                        
                    </div>
                )}

            {showTextArea && 
                (
                    <textarea
                        className={styles.textArea}
                        value={text}
                        readOnly
                    />
          )}
        </div>
      );
};

export default ImageTextArea;