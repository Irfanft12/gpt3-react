import React from "react"

import styles from "./header.module.css"

import people from "../../assets/people.png"
import headerImage from "../../assets/ai.png"

export default function Header() {
    return (
        <div className={`${styles.gpt3Header} section__padding`}>
            <div className={styles.gpt3HeaderContent}>
                <h1 className={`gradient__text`}>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <div className={styles.emailbox}>
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Get Started</button>
                </div>
                <div className={styles.gpt3HeaderContentPeople}>
                    <img src={people} alt="People" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className={styles.gpt3HeaderImage}>
                <img src={headerImage} alt="Header Image" />
            </div>
        </div>
    )
}