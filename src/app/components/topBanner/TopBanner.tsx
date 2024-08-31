import { redirect, useRouter } from "next/navigation";
import styles from "./TopBanner.module.css"
import Image from "next/image";
import { TOP_BANNER_COLOR, TOP_BANNER_LINKS_FONT, TOP_BANNER_LINKS_COLOR } from "@/src/customiseComponents/customiseTopBanner";

  //color parameter
    interface setTopBannerColor
    {
      color?: string // individual color
    }
    
const TopBanner: React.FC<setTopBannerColor> = ({ color }) =>
{
    

    // create a router object
    const router = useRouter();

    // route to home page
    const handleLogoClick = async () =>
    {
        return router.push("/")
        console.log("logoClicked, topBanner");
    };

    // route to the page specified
    const handleAcademicsClick = async () =>
    {
        return router.push("/pages/academics")
        console.log("academicsClicked, topBanner");
    };

    const handleOurTeamClick = async () =>
    {
        return router.push("/pages/ourTeam")
        console.log("ourTeamClicked, topBanner");
    };

    const handleContactUsClick = async () =>
      {
          return router.push("/pages/contactUs")
          console.log("contactUsClicked, topBanner");
      };

    return(
        <div style={{ backgroundColor: color || TOP_BANNER_COLOR}} className={styles.topBannerContainer}>

           <div className={styles.topBannerLogoContainer}>
              <h1 onClick={handleLogoClick} >H</h1>
              <Image className={styles.logo}
                alt="Open Minds Logo 1"
                src="/logos/iconLogoTwo.png"
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
            <h1 style={{ color: color || TOP_BANNER_LINKS_COLOR, fontFamily: TOP_BANNER_LINKS_FONT}}  onClick={handleAcademicsClick}>Academics</h1>
            <h2 style={{ color: color || TOP_BANNER_LINKS_COLOR, fontFamily: TOP_BANNER_LINKS_FONT }} onClick={handleOurTeamClick}>Our Team</h2>
            <h3 style={{ color: color || TOP_BANNER_LINKS_COLOR, fontFamily: TOP_BANNER_LINKS_FONT }} onClick={handleContactUsClick }>Contact Us</h3>
          </div>
            
        </div>
    );
};

export default TopBanner;