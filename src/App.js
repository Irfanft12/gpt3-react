import React from "react"
import { Footer, Header, Blog, Features, WhatGPT3, Possibility } from "./containers"
import { CTA, Brand, Navbar } from "./components"

import "./app.css"

export default function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}