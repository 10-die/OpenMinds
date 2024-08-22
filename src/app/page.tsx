"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Loading from "./components/loading";
import React, { useState, useEffect } from 'react';
import ImageText from "./components/imageText";
import Link from "next/link";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const loadDuration = 2400; // duration of loading screen (in ms)

  // default loading screen when site is accessed
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, loadDuration);
    

    return () => clearTimeout(timer);
  }, []);

  // loading screen when logo is clicked
  const handleLogoClick = () =>
  {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, loadDuration);

    return () => clearTimeout(timer);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={styles.mainContainer}>
      
        <div className={styles.topContainer}>

          <div className={styles.logoContainer}>
              <Image className={styles.logo}
                alt="Open Minds Logo 1"
                src="/OpenMindsLogoOne.png"
                width={60}
                height={60}
                onClick={handleLogoClick}
              />
            
            <h1>
                Homeschooling Hub
            </h1>
          </div>
            
            <h2>
                Crafting the keys that...
            </h2>
            <h3>
                Open Minds
            </h3>
        </div>

        <div className={styles.midContainerOne}>

          <div className={styles.imageContainer}>

            <div className={styles.imageOne}>
              <ImageText
                alt="Image 1"
                src="/Homeschooling1.jpg"
                width={500}
                height={500}
                pre_text="Our Vision"
                text="Open Minds envisions a future where every child in South Africa has access to a transformative, personalized education that fosters creativity, critical thinking, and a love for learning. By embracing the unique potential of each learner, we empower students to excel academically while nurturing their individuality and passions. Our goal is to break down traditional barriers to education, offering flexible, inclusive, and innovative homeschooling solutions that respect cultural diversity and adapt to the evolving needs of families. At Open Minds, we believe in cultivating a generation of lifelong learners who are equipped to thrive in an ever-changing world."
              />
            </div>
            
        
            <div className={styles.imageTwo}>
              <ImageText
                alt="Image 2"
                src="/Homeschooling2.jpg"
                width={500}
                height={500}
                pre_text="Our Curriculum"
                text="Our goals"
              />
            </div>
          
          </div>
          
        </div>

        <div className={styles.midContainerTwo}>
          <h1>
            This is a place where you can be you
          </h1>
        </div>

        <div className={styles.midContainerThree}>
          <h1>
            More than just Academia
          </h1>
        </div>

        <div className={styles.slidingBannerContainer}>
          <div className={styles.slidingBanner}>
          Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub Homeschooling Hub 
          </div>
        </div>

    </main>
  );

};

export default Home;