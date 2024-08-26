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
                <div>
                <TopBanner />
                </div>

                <div className={styles.midContainerOne}>
                    <ContactUsBox/>
                </div>
            </main>
    );
};