"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Loading from "./components/loading";
import React, { useState, useEffect } from 'react';
import ImageText from "./components/imageText";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={styles.mainContainer}>
      
        <div className={styles.topContainer}>

          <div className={styles.logoContainer}>
            <Image
            alt="Open Minds Logo 1"
            src="/OpenMindsLogoOne.jpg"
            width={60}
            height={60}
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
            What we offer
          </h1>
        </div>

        

    </main>
  );

};

export default Home;