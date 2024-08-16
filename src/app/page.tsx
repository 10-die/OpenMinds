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
    }, 5000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className={styles.mainContainer}>

        <div className={styles.topContainer}>
            <h1>
                Homeschooling Hub
            </h1>
            <h2>
                Crafting the keys that
            </h2>
            <h3>
                Open Minds
            </h3>
        </div>

        <div className={styles.midContainer}>
          <ImageText
            src="/Homeschooling1.jpg"
            alt="image1"
            width={400}
            height={400}
            text="Open Minds envisions a future where every child in South Africa has access to a transformative, personalized education that fosters creativity, critical thinking, and a love for learning. By embracing the unique potential of each learner, we empower students to excel academically while nurturing their individuality and passions. Our goal is to break down traditional barriers to education, offering flexible, inclusive, and innovative homeschooling solutions that respect cultural diversity and adapt to the evolving needs of families. At Open Minds, we believe in cultivating a generation of lifelong learners who are equipped to thrive in an ever-changing world."
                />
        
          <ImageText
            src="/Homeschooling2.jpg"
            alt="Image 2"
            width={400}
            height={400}
            text={"Our goals"}
            />
        </div>

        

    </main>
  );

};

export default Home;