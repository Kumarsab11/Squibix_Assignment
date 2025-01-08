import React from "react";
import ArticleList from "../components/ArticleList";

const HomePage = ({ articles, onSelect }) => {
  return (
    <div>
      <h1>Welcome to ArticleHub</h1>
      <ArticleList articles={articles} onSelect={onSelect} />
    </div>
  );
};

export default HomePage;
