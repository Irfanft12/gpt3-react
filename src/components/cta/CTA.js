import React from "react"

import styles from "./cta.module.css"

export default function CTA() {
    return (
        <div className={`${styles.gpt3CTA} section__margin`} id="cta">
            <div className={styles.gpt3CTAText}>
                <p>Request Early Access to Get Started</p>
                <h4>Register today & start exploring the endless possiblities.</h4>
            </div>
            <button className={styles.ctaBtn}>Get Started</button>
        </div>
    )
}