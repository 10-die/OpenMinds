"use client"
import React, { useState } from "react";
import styles from './ContactUsBox.module.css';
import { supabase } from "@/lib/supabaseClient";

const ContactUsBox = () =>
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault()

        const { data, error } = await supabase
        .from("tbl_contact_us")
        .insert([
            { first_name: firstName, last_name: lastName, email, message}
        ])

        if (error)
        {
            console.error("Error submitting form: ", error)
        }
        else
        {
            console.log("Form submitted successfully:", data)
            //clear form fields
            setFirstName("");
            setLastName("");
            setEmail("");
            setMessage("");
        }
    }
    
    return(
        <div className={styles.mainContainer}>
            <div className={styles.midContainerOne}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        />
                    <input
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        />
                    <input
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUsBox;