import React from "react";

const BookmarkList = ({ bookmarks, articles }) => {
  const bookmarkedArticles = articles.filter((article) =>
    bookmarks.includes(article.id)
  );

  return (
    <div>
      <h2>Your Bookmarks</h2>
      {bookmarkedArticles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
