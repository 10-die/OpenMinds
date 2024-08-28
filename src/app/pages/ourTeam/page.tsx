"use client";
import React from "react";
import TopBanner from "../../components/topBanner/TopBanner";
import styles from "./page.module.css"
import TeamMemberBox from "@/app/components/teamMemberBox/TeamMemberBox";

export default function ourTeam()
{
    return(
        <main className={styles.mainContainer}>
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

                        <TeamMemberBox
                            alt="Team member box"
                            src="/TeacherPhotos/TeacherPhotoOne.jpg" 
                            nameText={"Jane Doe"} 
                            informationText={"With over 20 years of experience, Jane brings a plethora of experience and expertise..."}/>
                  

                    
                        <TeamMemberBox
                            alt="Team member box"
                            src="/TeacherPhotos/TeacherPhotoTwo.jpg" 
                            nameText={"Jaku Muller"} 
                            informationText={"A consoisure of Afrikaans literature, Jaku strives to inspire young minds to explore..."}/>
                   

                  
                        <TeamMemberBox
                            alt="Team member box"
                            src="/TeacherPhotos/TeacherPhotoThree.jpg" 
                            nameText={"Lois Lane"} 
                            informationText={"A distingueshed engineer, Lois has had a successfull career at various firms..."}/>
                    
                </div>
            </div>
        </main>
    )
}