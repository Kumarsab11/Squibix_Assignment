import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles, onSelect }) => {
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          onClick={() => onSelect(article.id)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
