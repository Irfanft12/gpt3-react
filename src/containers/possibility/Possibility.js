import React from "react"

import styles from "./possibility.module.css"

import possibilityImage from "../../assets/feature-image.png"

export default function Possibility() {
    return (
        <div className={`${styles.gptPossibility} section__padding`} id="possibility">
            <div className={styles.gpt3PossibilityImage}>
                <img src={possibilityImage} alt="Possibility image" />
            </div>
            <div className={styles.gpt3PossibilityContent}>
                <h5>Request Early Access to Get Started</h5>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
                </p>
                <p className={styles.subtext}>Request Early Access to Get Started</p>
            </div>
        </div>
    )
}