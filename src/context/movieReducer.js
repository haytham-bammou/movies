import { LOAD_MOVIES, LOADING, SET_CURRENT, CLEAR_CURRENT } from "./types";
export default function (state, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        movies: null,
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
}
