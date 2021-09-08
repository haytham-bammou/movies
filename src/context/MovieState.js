import React, { useReducer } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import MovieContext from "./movieContext";
import movieReducer from "./movieReducer";
import { LOAD_MOVIES, LOADING, SET_CURRENT, CLEAR_CURRENT } from "./types";

const MovieState = (props) => {
  const initialState = {
    movies: null,
    current: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(movieReducer, initialState);
  const loadMovies = async (movie) => {
    const apiKey = "220647b9";
    dispatch({ type: LOADING });
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`
    );
    dispatch({
      type: LOAD_MOVIES,
      payload: res.data.Search
        ? res.data.Search.map((movie) => ({ ...movie, id: uuid() }))
        : null,
    });
  };

  const setCurrent = async (id) => {
    const apiKey = "220647b9";
    dispatch({ type: LOADING });
    const res = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`
    );
    dispatch({
      type: SET_CURRENT,
      payload: res.data,
    });
  };

  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        loading: state.loading,
        current: state.current,
        loadMovies,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
