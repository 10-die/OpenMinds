"use client";
import React from "react";
import TopBanner from "../../components/topBanner/TopBanner";
import styles from "./page.module.css"
import OurTeamBox from "../../components/ourTeamBox/OurTeamBox";
import { PAGE_COLOR } from "@/src/customiseComponents/customisePage";

export default function ourTeam()
{
    return(
        <main className={styles.mainContainer} style={{ backgroundColor: PAGE_COLOR }}>
            <div className={styles.topContainer}>
                <TopBanner />
            </div>

            <div className={styles.midContainerOne}>
                <div className={styles.titleContainer}>
                    <h1>Our Team</h1>
                </div>
            </div>

            <div className={styles.midContainerTwo}>
                <div className={styles.teamMemberBoxContainerOne}>

                        <OurTeamBox
                            alt="Team member box"
                            src="/ourTeamPhotos/photoOne.jpg" 
                            nameText={"Jane Doe"} 
                            informationText={"With over 20 years of experience, Jane brings a plethora of experience and expertise..."}/>
                  
                        <OurTeamBox
                            alt="Team member box"
                            src="/ourTeamPhotos/photoTwo.jpg" 
                            nameText={"Jaku Muller"} 
                            informationText={"A consoisure of Afrikaans literature, Jaku strives to inspire young minds to explore..."}/>
                   
                        <OurTeamBox
                            alt="Team member box"
                            src="/ourTeamPhotos/photoThree.jpg" 
                            nameText={"Lois Lane"} 
                            informationText={"A distingueshed engineer, Lois has had a successfull career at various firms..."}/>
                    
                </div>
            </div>
        </main>
    );
};