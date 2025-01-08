import React from "react";
import { useParams } from "react-router-dom";

const ArticlePage = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);

  if (!article) return <p>Article not found.</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>By: {article.author.name}</p>
      <p>Reading Time: {article.readingTime}</p>
    </div>
  );
};

export default ArticlePage;
