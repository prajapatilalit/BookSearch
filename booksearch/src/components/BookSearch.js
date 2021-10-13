import React, { useEffect, useState } from "react";

const BookSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedText, setDebouncedText] = useState(searchText);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(searchText);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  useEffect(() => {
    const handleSearch = () => {
      setSearchText(debouncedText);
    };
    if (debouncedText) {
      handleSearch();
    }
  }, [debouncedText]);

  console.log(searchText);
  const searchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="book_search">
        <h2>Book Search</h2>
        <p>ISBN</p>
        <form onClick={searchSubmit}>
          <input
            type="text"
            placeholder="Common passwords..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button>Search</button>
        </form>
        <div className="table">
          <div className="table_col1">
            <p>ISBN</p>
            <p>Name</p>
            <p>Author</p>
            <p>Publisher</p>
          </div>
          <div className="table_col2">
            <p>xxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxx</p>
          </div>
        </div>
      </div>
      {/* <div className="results"></div> */}
    </div>
  );
};

export default BookSearch;
