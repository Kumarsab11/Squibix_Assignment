import React, { createContext, useState } from "react";

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  const addArticle = (article) => setArticles([...articles, article]);
  const updateArticle = (updatedArticle) =>
    setArticles(
      articles.map((a) => (a.id === updatedArticle.id ? updatedArticle : a))
    );

  return (
    <ArticleContext.Provider value={{ articles, addArticle, updateArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
