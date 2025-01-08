import React, { useState } from "react";

const ArticleEditor = ({ onSave, existingArticle }) => {
  const [title, setTitle] = useState(existingArticle?.title || "");
  const [content, setContent] = useState(existingArticle?.content || "");

  const handleSave = () => {
    onSave({ ...existingArticle, title, content });
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        style={{
          display: "block",
          marginBottom: "10px",
          width: "100%",
          height: "200px",
        }}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ArticleEditor;
