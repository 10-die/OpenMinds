import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "@/app/components/imageText.module.css"

interface ImageTextHandler
{
    src: string;
    alt: string;
    width: number;
    height: number;
    tOverlay: string;
    tArea: string;
}


const ImageTextArea: React.FC<ImageTextHandler> = ({ src, alt, width, height, tOverlay, tArea }) =>
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
            className={styles.Image}
            onClick={handleImageClick}
          />
      
            {showOverlayText &&
                (
                    <div className={styles.textOverlay} onClick={handleImageClick}>
                        {tOverlay}
                        
                    </div>
                )}

            {showTextArea && 
                (
                    <textarea
                        className={styles.textArea} 
                        onClick={handleImageClick}
                        value={tArea}
                        readOnly
                    />
          )}
        </div>
      );
};

export default ImageTextArea;