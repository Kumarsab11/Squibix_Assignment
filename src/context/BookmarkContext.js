import React, { createContext, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (id) => setBookmarks([...bookmarks, id]);
  const removeBookmark = (id) =>
    setBookmarks(bookmarks.filter((b) => b !== id));

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContext;
