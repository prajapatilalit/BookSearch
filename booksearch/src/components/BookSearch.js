import React from "react";

const BookSearch = () => {
  return (
    <div class="ui search">
      <div class="ui icon input">
        <input class="prompt" type="text" placeholder="Common passwords..." />
        <i class="search icon"></i>
      </div>
      <div class="results"></div>
    </div>
  );
};

export default BookSearch;
