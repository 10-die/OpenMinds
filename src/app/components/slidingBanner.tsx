import React, {useState, useEffect} from "react";
import Image from "next/image";
import styles from "./slidingBanner.module.css"



const SlidingLogoBanner = () =>
{
    
    return(
            <div>
                <Image 
                    src="/OpenMindsLogoTransparent.png"
                    alt="sliding banner"
                    width={1000}
                    height={50}
                    />
            </div>
    );
};

export default SlidingLogoBanner;