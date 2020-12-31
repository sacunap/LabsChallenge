import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <div className="searchBar">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSearch(input);
          setInput("");
        }}
      >
        <input
          className="inputSearchBar"
          type="search"
          placeholder="Search product..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <input className="button-search" type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SearchBar;
