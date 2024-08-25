"use client";
import React, { useState } from "react";
import TopBanner from "../../components/topBanner/TopBanner"
import ContactUsBox from "../../components/contactUsBox/ContactUsBox";
import styles from "./page.module.css";
import { supabase } from "@/"

export default function contactUs()
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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