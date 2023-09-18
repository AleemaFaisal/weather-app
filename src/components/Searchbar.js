import { useState } from "react";


function SearchBar({handleSearch})
{
  const [text, setText] = useState("");
  
  function handleChange(e)
  {
    setText(e.target.value);
    e.target.setCustomValidity("");

    if (e.target.value === "")
    {
      handleSearch(null);
    }
  }

  return (
    <form onSubmit={(e) => {e.preventDefault(); handleSearch(text)}} className='search-bar'>
      <input type='text' value={text} minLength="3" placeholder='Search for a city' onChange={handleChange} onInvalid={(e)=>{e.target.setCustomValidity("Enter at least 3 characters")}}
 />
      <button type='submit' disabled={text===""}>Search</button>
    </form>
  )
}

export default SearchBar;
