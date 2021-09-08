import React, { useRef, useContext } from "react";
import MovieContext from "../../context/movieContext";
const MovieSearch = () => {
  const movieContext = useContext(MovieContext);
  const { loadMovies } = movieContext;
  const text = useRef("");
  const onSubmit = (e) => {
    e.preventDefault();
    loadMovies(text.current.value);
  };
  return (
    <div className="search">
      <p>Search For Any Movie</p>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Search For Movie" ref={text} />
      </form>
    </div>
  );
};
export default MovieSearch;
