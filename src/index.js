import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ArticleProvider } from "./context/ArticleContext";
import { BookmarkProvider } from "./context/BookmarkContext";
import "./styles/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArticleProvider>
      <BookmarkProvider>
        <App />
      </BookmarkProvider>
    </ArticleProvider>
  </React.StrictMode>
);
