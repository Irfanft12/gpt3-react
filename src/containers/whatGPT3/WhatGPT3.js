import React from "react"
import Feature from "../../components/feature/Feature"

import styles from "./whatgpt3.module.css"

export default function WhatGPT3() {

    const text1 = "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."

    const chatbotsText = "We so opinion friends me message as delight. Whole front do of plate heard oh ought."

    const KnowledgebaseText = "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"

    const educationText = "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"

    return (
        <div className={`${styles.gpt3__whatgpt3} section__margin`} id="wgpt3">
            <div className={styles.wgpt3Feature}>
                <Feature title="What is GPT-3" text={text1} />
            </div>
            <div className={styles.wgpt3Heading}>
                <h1 className={`gradient__text`}>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className={`${styles.whatGPT3Container} multi-column`}>
                <Feature title="Chatbots" text={chatbotsText} />
                <Feature title="Knowledgebase" text={KnowledgebaseText} />
                <Feature title="Education"  text={educationText} />
            </div>
        </div>
    )
}