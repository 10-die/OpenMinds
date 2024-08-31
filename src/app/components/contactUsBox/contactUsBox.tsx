"use client"
import React, { useRef, useState } from "react";
import styles from './ContactUsBox.module.css';
import { supabase } from "@/src/lib/supabaseClient";
import AutoResizingTextArea from "../autoResizingTextArea/autoResizingTextArea";

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
                <form onSubmit={handleSubmit} className={styles.formContainer}>

                    <div>
                    <input
                        name="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        />
                    </div>

                    <div>
                    <input
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        />
                    </div>

                    <div>
                    <input
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                    </div>

                    <div className={styles.textArea}>
                        <AutoResizingTextArea/>
                    </div>

                    <div className={styles.button}>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
    );
};

export default ContactUsBox;