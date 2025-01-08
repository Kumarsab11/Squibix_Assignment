import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { sampleArticles } from "./data/articles"; // Import sample articles
import { userPreferences } from "./data/userPreferences"; // Import user preferences
import { saveToLocalStorage, loadFromLocalStorage } from "./utils/localStorage"; // LocalStorage utilities

import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import EditArticlePage from "./pages/EditArticlePage";
import Header from "./components/Header";

function App() {
  const [articles, setArticles] = useState(() => {
    return loadFromLocalStorage("articles") || sampleArticles;
  });

  // State for user preferences
  const [preferences, setPreferences] = useState(() => {
    // Load from localStorage or fallback to default preferences
    return loadFromLocalStorage("preferences") || userPreferences;
  });

  // Save articles to localStorage whenever they change
  useEffect(() => {
    saveToLocalStorage("articles", articles);
  }, [articles]);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    saveToLocalStorage("preferences", preferences);
  }, [preferences]);

  // Function to add a new article
  const addArticle = (newArticle) => {
    setArticles([...articles, newArticle]);
  };

  // Function to update an existing article
  const updateArticle = (updatedArticle) => {
    setArticles(
      articles.map((a) => (a.id === updatedArticle.id ? updatedArticle : a))
    );
  };

  // Function to update user preferences
  const updatePreferences = (key, value) => {
    setPreferences({ ...preferences, [key]: value });
  };

  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <HomePage
              articles={articles}
              preferences={preferences}
              updatePreferences={updatePreferences}
            />
          }
        />

        {/* Article Page */}
        <Route
          path="/articles/:id"
          element={<ArticlePage articles={articles} />}
        />

        {/* Edit Article Page */}
        <Route
          path="/edit/:id"
          element={
            <EditArticlePage articles={articles} onSave={updateArticle} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
