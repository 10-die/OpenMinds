"use client";
import React from "react";
import TopBanner from "../../components/topBanner/TopBanner";
import styles from "./page.module.css"

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
        </main>
    )
}