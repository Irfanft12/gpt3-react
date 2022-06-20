import React, { useState } from "react"
import { FaAngleUp } from "react-icons/fa"

import styles from "./footer.module.css"

import logo from "../../assets/logo.svg"

export default function Footer() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            console.log(true)
            setVisible(true)
        } else {
            setVisible(false)
            console.log(false)
        }
    }

    window.addEventListener("scroll", toggleVisible)

    const scrollTopBtn = (
            <a href="#" className={styles.scrollToTop}>
                <FaAngleUp />
            </a>
    )

    return (
        <footer className={`${styles.gpt3Footer} section__padding gpt3Footer`}>
            <div className={styles.footerHeading}>
                <h1 className={`gradient__text`}>Do you want to step in to the future before others</h1>
                <p className={styles.footerHeadingLink}>
                    <a href="#!">Request Early Access</a>
                </p>
            </div>
            <div className={styles.footerContent}>
                <div className={styles.footerLogoWrapper}>
                    <img src={logo} alt="Logo" />
                    <p>
                        Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                    </p>
                </div>
                <div className={styles.footerContentLinksWrapper}>
                    <div className={styles.footerContentLinksGroup}>
                        <ul>
                            <li>Links</li>
                            <li><a href="#!">Overons</a></li>
                            <li><a href="#!">Social Media</a></li>
                            <li><a href="#!">Counters</a></li>
                            <li><a href="#!">Contact</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerContentLinksGroup}>
                        <ul>
                            <li>Company</li>
                            <li><a href="#!">Terms & Conditions</a></li>
                            <li><a href="#!">Privacy Policy</a></li>
                            <li><a href="#!">Contact</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerContentLinksGroup}>
                        <ul>
                            <li>Get in touch</li>
                            <li><a href="#!">Crechterwoord K12 182 DK Alknjkcb</a></li>
                            <li><a href="#!">085-132567</a></li>
                            <li><a href="#!">info@payme.net</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyrights}>
             © 2021 GPT-3. All rights reserved.
            </div>
            {
                visible && scrollTopBtn
            }
        </footer>
    )
}