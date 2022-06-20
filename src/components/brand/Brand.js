import React from "react"

import styles from "./brand.module.css"

import { google, slack, dropbox, shopify, atlassian } from "./imports"

export default function Brand() {
    return (
        <div className={`${styles.brand} section__padding`}>
            <div className={styles.brandContainer}>
                <div className={styles.brandContainerInner}>
                    <img src={google} alt="google" />
                    <img src={slack} alt="slack" />
                    <img src={atlassian} alt="atlassian" />
                    <img src={dropbox} alt="dropbox" />
                    <img src={shopify} alt="shopify" />
                </div>
            </div>
        </div>
    )
}