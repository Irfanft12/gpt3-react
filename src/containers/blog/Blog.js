import React from "react"
import { Article } from "../../components/"

import styles from "./blog.module.css"

import { blog1, blog2, blog3, blog4, blog5 } from "./imports"

export default function Blog() {

    const blogData = [
        {
            id: 1,
            image: blog1,
            date: "sep 26 2021",
            content: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            id: 2,
            image: blog2,
            date: "July 10 2021",
            content: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            id: 3,
            image: blog3,
            date: "January 05 2021",
            content: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            id: 4,
            image: blog4,
            date: "April 16 2021",
            content: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        },
        {
            id: 5,
            image: blog5,
            date: "February 28 2021",
            content: "GPT-3 and Open  AI is the future. Let us exlore how it is?"
        }
    ]

    return (
        <div className={`${styles.gpt3Blog} section__margin`} id="blog">
            <h1 className="gradient__text">
                <span>A lot is happening,</span>
                <span>We are blogging about it.</span>
            </h1>
            <div className={styles.blogsContainer}>
                <div className={`${styles.blogsContainerGroupA} blogsContainerGroupA`}>
                        <Article image={blog1} date="April 16 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className={`${styles.blogsContainerGroupB} blogsContainerGroupB`}>
                        <Article image={blog2} date="April 16 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                        <Article image={blog3} date="April 16 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                        <Article image={blog4} date="April 16 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                        <Article image={blog5} date="April 16 2021" content="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
            </div>
        </div>
    )
}