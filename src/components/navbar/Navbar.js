import React, { useState } from "react"

import { RiCloseLine, RiMenu3Line } from "react-icons/ri"

import logo from "../../assets/logo.svg"

import styles from "./navbar.module.css"

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    const Menu = () => (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">what is GPT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )

    return (
        <div className={styles.gpt3Navbar}>
            <div className={styles.gpt3NavbarLinks}>
                <div className={styles.gpt3NavbarLinksLogo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.gpt3NavbarLinksContainer}>
                    <Menu />
                </div>
            </div>
            <div className={styles.gpt3NavbarSign}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className={styles.gpt3NavbarMenu}>
                {
                    toggleMenu
                        ? <RiCloseLine color="#ffffff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#ffffff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {
                    toggleMenu && <div className={`${styles.gpt3NavbarMenuContainer} ${styles.scaleUpCenter}` }>
                        <div className={styles.gpt3NavbarMenuContainerLinks}>
                            <Menu />
                            <div className={styles.mobileSign}>
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}