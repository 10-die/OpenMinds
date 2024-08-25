"use client"
import React from "react";
import styles from './ContactUsBox.module.css';

const ContactUsBox = () =>
{
    return(
        <div className={styles.mainContainer}>
            <div className={styles.midContainerOne}>
            <input
                name="firstName"
                placeholder="First Name"
                required
                />
                <input
                name="lastName"
                placeholder="Last Name"
                required
                />
            <input
                name="email"
                placeholder="Email"
                required
                />
            <textarea
                placeholder="Message"
                />
            <button type="button">
                Send
            </button>
            </div>
        </div>
    );
};

export default ContactUsBox;