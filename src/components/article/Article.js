import React from "react"

import styles from "./article.module.css"

export default function Article({ image, date, content }) {
    return (
        <div className={`${styles.gpt3BlogArticle} article-card`}>
            <div className={styles.gpt3BlogArticleImage}>
                <img src={image} alt={image} />
            </div>
            <div className={styles.gpt3BlogArticleText}>
                <div>
                    <h5>{date}</h5>
                    <h2>{content}</h2>
                </div>
                <a href="#!">Read Full Article</a>
            </div>
        </div>
    )
}