import React, { useState } from "react";
import axios from "axios";

const BookSearch = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const baseUrl = "https://lspl-bookie.glitch.me/";
  const apiKey = "Fo8UprJg2kQyDscaJjNKon5UF";

  const searchSubmit = (e) => {
    e.preventDefault();
    const getBookDetails = async () => {
      try {
        const res = axios.get(
          `${baseUrl}/books/${searchText}/details?key=${apiKey}`
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookDetails();
  };

  // useEffect(() => {}, [searchText]);
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
