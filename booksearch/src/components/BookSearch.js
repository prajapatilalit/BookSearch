import React from "react";

const BookSearch = () => {
  return (
    <div className="container">
      <div className="book_search">
        <h2>Book Search</h2>
        <p>ISBN</p>
        <form>
          <input type="text" placeholder="Common passwords..." />
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
      <div class="results"></div>
    </div>
  );
};

export default BookSearch;
