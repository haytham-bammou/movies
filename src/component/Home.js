import React, { useEffect } from "react";
import MovieSearch from "./movies/MovieSearch";
import Movies from "./movies/Movies";

const Home = ({ history }) => {
  useEffect(() => {
    sessionStorage.removeItem("id");
  }, []);
  return (
    <div className="container">
      <MovieSearch />
      <Movies history={history} />
    </div>
  );
};

export default Home;
