import { combineReducers } from "redux";
import moviesReducer from "@/store/reducers/moviesReducers";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
