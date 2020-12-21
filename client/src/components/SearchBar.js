import React, { useState } from 'react'

function SearchBar({ onSearch }) {

  const [input, setInput] = useState("");

  return (
    <div>
      <form
        onSubmit = { (event) => {
          event.preventDefault();
          onSearch(input);
          setInput("");
        }}>

        <input 
          type = "search"
          placeholder = "Search product..."
          onChange = {e => setInput(e.target.value)}
          value = {input}        
        />

        <input 
          type = "submit"
          value = "Search"
        />

      </form>
    </div>
  )
}

export default SearchBar
