import React from "react";

const MovieItem = ({ movie, history }) => {
  const onClick = (e) => {
    e.preventDefault();
    sessionStorage.setItem("id", e.target.value);
    history.push("/details");
  };
  return (
    <div>
      <img src={movie.Poster} />
      <h5 style={{ color: "white" }}>{movie.Title}</h5>
      <button onClick={onClick} className="btn" value={movie.imdbID}>
        View More
      </button>
    </div>
  );
};
export default MovieItem;
