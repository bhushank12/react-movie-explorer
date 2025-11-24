import React, { useEffect, useState } from "react";

function SearchInput({ onSearchResult }) {
  const [searchMovieInput, setSearchMovieInput] = useState("");

  const BASE_URL = process.env.REACT_APP_OMDB_API_URL || "http://www.omdbapi.com/";
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY || "dummy_key";

  function searchMovieHandler(event) {
    setSearchMovieInput(event.target.value);
  }

  async function searchMovies(searchMovieInput) {
    if (!searchMovieInput) {
      onSearchResult([]);
      return;
    }

    if (searchMovieInput.length < 3) return;

    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchMovieInput)}`);
    const data = await res.json();
    onSearchResult(data?.Search || []);
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      searchMovies(searchMovieInput);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchMovieInput]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        className="search-movie-input"
        value={searchMovieInput}
        onChange={searchMovieHandler}
      />
    </div>
  ); 
}

export default SearchInput;
