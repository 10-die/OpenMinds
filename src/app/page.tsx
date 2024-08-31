"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Loading from "./components/loading/Loading";
import React, { useRef, useState, useEffect, Suspense } from 'react';
import ImageTextArea from "./components/imageText/ImageText";
import Link from "next/link";
import SlidingBanner from "./components/slidingBanner/SlidingBanner";
import { createClickListener } from "./components/scrollToTop/ScrollToTop";
import { redirect, useRouter } from "next/navigation";
import TopBanner from "./components/topBanner/TopBanner";
import router from "next/router";
import { PAGE_COLOR } from "../customiseComponents/customisePage";

export default function Home()
{
  const [loading, setLoading] = useState(true);

   // create a router object
   const router = useRouter();


  const handleContactUsClick = async () =>
    {
        return router.push("/pages/contactUs")
        console.log("ourTeamClicked");
    };
  
  useEffect(() =>
  {
    localStorage.setItem("hasLoadedOnce", "true");
    /*to reset the hasLoadedOnce variable in the system*/
    const hasLoadedOnce = localStorage.getItem("hasLoadedOnce");
    console.log(localStorage.getItem("hasLoadedOnce"));
    if (hasLoadedOnce == "true")
    {
      
      const loadDuration = 6000; // duration of loading screen (in ms)
      const timer = setTimeout(() => 
        {
          setLoading(false);
          localStorage.setItem("hasLoadedOnce", "false");
          console.log("1#loading = 0");
          console.log(localStorage.getItem("hasLoadedOnce"));
        }, loadDuration);
        return () => clearTimeout(timer);
    }
    else if (hasLoadedOnce == "false")
    {
      setLoading(false);
      console.log("2#loading > 0");
      console.log(localStorage.getItem("hasLoadedOnce"));
      
    }
  }, [])

  // this causes the site to stutter as it assesses the state of the loading construct, removing it makes the site run much smoother
  if (loading) 
  {
    return <Loading/>;
  }
  
  return (
    <main className={styles.mainContainer} style={{ backgroundColor: PAGE_COLOR }}>
      
        <div className={styles.topContainer}>
          <TopBanner/>
        </div>

        <div className={styles.sloganContainer}>
          <h1>
            
          </h1>
        </div>

        <div className={styles.videoContainer}>
          <video autoPlay loop muted>
            <source src="/homeScreen/videos/videoOne.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.midContainerOne}>

          
          <div className={styles.imageContainer}>

            <div className={styles.imageOne}>
              <ImageTextArea
                alt="Image 1"
                src="/homeScreen/images/imageOne.jpg"
                width={500}
                height={500}
                tOverlay="Our Vision"
                tArea="Open Minds envisions a future where every child in South Africa has access to a transformative, personalized education that fosters creativity, critical thinking, and a love for learning. By embracing the unique potential of each learner, we empower students to excel academically while nurturing their individuality and passions. Our goal is to break down traditional barriers to education, offering flexible, inclusive, and innovative homeschooling solutions that respect cultural diversity and adapt to the evolving needs of families. At Open Minds, we believe in cultivating a generation of lifelong learners who are equipped to thrive in an ever-changing world."
              />
            </div>
            
        
            <div className={styles.imageTwo}>
              <ImageTextArea
                alt="Image 2"
                src="/homeScreen/images/imageTwo.jpg"
                width={500}
                height={500}
                tOverlay="Our Curriculum"
                tArea="Our Goals"
              />
            </div>
          
          </div>
          
        </div>

        <div className={styles.midContainerTwo}>
          <h1>
            A place where <h2> you </h2> can be <h3> you! </h3>
          </h1>
        </div>

        <div className={styles.midContainerThree}>
          <h1>
            More than just Academia
          </h1>

          <div className={styles.buttons}>
            <button onClick={handleContactUsClick}>
              contact us
            </button>
            <button onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLScby0QaHcurnl21tUz_OAjXScRTvHdIMfEjxdFZvUZ5Rqz7ng/viewform?usp=sf_link'}>
              Express Intrest
            </button>
          </div>
        </div>

        <div className={styles.slidingBannerContainer}>
          <div className={styles.slidingBanner}>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
              <Image src="/logos/bannerLogo.png" alt="Banner 1" width={500} height={50} className={styles.bannerImage}/>
          </div>
        </div>

        <div className={styles.midContainerFour}>
          <h1>Academics</h1>
        </div>
        

        <div className={styles.bottomContainer}>
          <div>
          </div>
        </div>

    </main>
  );

};