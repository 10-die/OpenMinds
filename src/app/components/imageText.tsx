import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "./imageText.module.css";

interface ImageTextHandler
{
    src: string;
    alt: string;
    width: number;
    height: number;
    defaultValue: string;
}

const ImageTextArea: React.FC<ImageTextHandler> = ({ src, alt, width, height, defaultValue}) =>
{
    const [showTextArea, setShowTextArea] = useState<boolean>(false);

    const handleImageClick = () =>
    {
        setShowTextArea(prevState => !prevState); // toggle visibility
    };


return(
    <div className={styles.textContainer} style={{ position: 'relative', display: 'inline-block' }}>
        <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        defaultValue={defaultValue}
        onClick={handleImageClick}
        style={{ cursor: 'pointer'}}
        />

        {showTextArea && (
            <textarea
                className={styles.textArea}
                style={{
                    position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            border: 'none',
                            resize: 'none',
                            pointerEvents: 'none' // Allows clicks to pass through the text area
                }}
            />
        )}
    </div>
    );
};

export default ImageTextArea;