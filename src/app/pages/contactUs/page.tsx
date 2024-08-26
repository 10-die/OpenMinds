"use client";
import React, { useState } from "react";
import TopBanner from "../../components/topBanner/TopBanner"
import ContactUsBox from "../../components/contactUsBox/ContactUsBox";
import styles from "./page.module.css";
import { supabase } from "@/lib/supabaseClient"

export default function contactUs()
{
    

    return(
            <main className={styles.mainContainer}>
                <div className={styles.topContainer}>
                    <TopBanner />
                </div>

                <div className={styles.midContainerOne}>
                    <div className={styles.titleContainer}>
                        <h1>Contact Us</h1>
                    </div>
                    <div className={styles.contactUsBoxContainer}>
                        <ContactUsBox/>
                    </div>
                </div>
            </main>
    );
};