"use client";
import React from "react";
import TopBanner from "../../components/topBanner/TopBanner"
import ContactUsBox from "../../components/contactUsBox/ContactUsBox";
import styles from "./page.module.css";

export default function contactUs()
{
    return(
            <main className={styles.mainContainer}>
                <div>
                <TopBanner />
                </div>

                <div>
                    <ContactUsBox/>
                </div>
            </main>
    );
};