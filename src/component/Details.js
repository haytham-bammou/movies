import React, { Fragment, useContext, useEffect } from "react";
import MovieContext from "../context/movieContext";
import { Redirect } from "react-router-dom";
import Spinner from "./layout/Spinner";
const Details = () => {
  const movieContext = useContext(MovieContext);
  const { setCurrent, current, loading } = movieContext;
  useEffect(() => {
    setCurrent(sessionStorage.getItem("id"));
  }, []);
  if (!sessionStorage.id) {
    return <Redirect to="/" />;
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    current != null && (
      <Fragment>
        <div className="grid-2 container">
          <img src={current.Poster} />
          <div>
            <h2>{current.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre :</strong> {current.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released :</strong> {current.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated :</strong> {current.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating :</strong> {current.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director :</strong> {current.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer :</strong> {current.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors :</strong> {current.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="container plot">
          <h1>Plot</h1>
          <p>{current.Plot}</p>
          <a
            href={`http://imdb.com/title/${current.imdbID}`}
            target="_blank"
            class="btn-dark"
          >
            View On Imdb
          </a>
          <a href="/" className="btn">
            Go Back To Search
          </a>
        </div>
      </Fragment>
    )
  );
};
export default Details;
