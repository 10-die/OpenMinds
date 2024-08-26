import { redirect, useRouter } from "next/navigation";
import styles from "./TopBanner.module.css"
import Image from "next/image";

const TopBanner = () =>
{
    // create a router object
    const router = useRouter();

    // route to home page
    const handleLogoClick = async () =>
    {
        return router.push("/")
        console.log("handleLogoClick");
    }

    // route to the page specified
    const handleAcademicsClick = async () =>
    {
        return router.push("/pages/academics")
        console.log("academicsClicked");
    };

    const handleOurTeamClick = async () =>
    {
        return router.push("/pages/ourTeam")
        console.log("ourTeamClicked");
    };

    const handleContactUsClick = async () =>
      {
          return router.push("/pages/contactUs")
          console.log("ourTeamClicked");
      };

    return(
        <div className={styles.topBannerContainer}>

           <div className={styles.topBannerLogoContainer}>
              <h1 onClick={handleLogoClick} >H</h1>
              <Image className={styles.logo}
                alt="Open Minds Logo 1"
                src="/OpenMindsLogoTwo.png"
                width={45}
                height={45}
                onClick={handleLogoClick}
              />
               <h5 onClick={handleLogoClick}>meschooling</h5>
            
              <h2>
                hub
              </h2>
          </div> 

          <div className={styles.topBannerLinksContainer}>
            <h1 onClick={handleAcademicsClick}>Academics</h1>
            <h2 onClick={handleOurTeamClick}>Our Team</h2>
            <h3 onClick={handleContactUsClick }>Contact Us</h3>
          </div>
            
        </div>
    );
};

export default TopBanner;