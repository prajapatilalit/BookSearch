import React, { useEffect, useState } from "react";
import axios from "axios";

const BookSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const baseUrl = "https://lspl-info4you.glitch.me/";
  const apiKey = "Fo8UprJg2kQyDscaJjNKon5UF";

  const searchSubmit = (e) => {
    e.preventDefault();
    const getBookDetails = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/books/${isbn}/details?key=${apiKey}`
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookDetails();
  };

  useEffect(() => {
    setIsbn(searchText);
  }, [searchText]);
  return (
    <div className="container">
      <div className="book_search">
        <h2>Book Search</h2>
        <p>ISBN</p>
        <form onClick={searchSubmit}>
          <input
            type="text"
            placeholder="Common passwords..."
            onChange={handleSearch}
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
