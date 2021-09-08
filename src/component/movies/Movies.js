import React, { useContext } from "react";
import MovieContext from "../../context/movieContext";
import MovieItem from "./MovieItem";
import Spinner from "../layout/Spinner";
const Movies = ({ history }) => {
  const movieContext = useContext(MovieContext);
  const { movies, loading } = movieContext;
  if (loading) {
    return <Spinner />;
  }
  return (
    movies !== null &&
    !loading && (
      <div className="grid-4">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} history={history} />
        ))}
      </div>
    )
  );
};

export default Movies;
