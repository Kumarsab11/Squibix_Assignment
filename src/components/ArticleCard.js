import React from "react";
import styles from "../styles/ArticleCard.module.css";

const ArticleCard = ({ article, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <small>
        {article.readingTime} | Last edited: {article.lastEditedAt || "Never"}
      </small>
    </div>
  );
};

export default ArticleCard;
