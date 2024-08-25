"use client"
import React from "react";
import styles from './ContactUsBox.module.css';

const ContactUsBox = () =>
{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.midContainerOne}>
            <input
                name="name"
                placeholder="Your Name"
                required
                />
            <input
                name="email"
                placeholder="Your Email"
                required
                />
            <textarea
                placeholder="Your Message"
                />
            <button type="button">
                Send
            </button>
            </div>
        </div>
    );
};

export default ContactUsBox;