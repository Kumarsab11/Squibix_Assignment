import React from "react";
import { useParams } from "react-router-dom";
import ArticleEditor from "../components/ArticleEditor";

const EditArticlePage = ({ onSave, articles }) => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id, 10));

  return <ArticleEditor onSave={onSave} existingArticle={article} />;
};

export default EditArticlePage;
