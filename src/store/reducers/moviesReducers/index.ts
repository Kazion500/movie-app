import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/index";
import { axiosFetch } from "@/config/axios";

export interface MovieInterface {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
}

interface MovieState {
  error: any;
  movies: MovieInterface[];
  isLoading: boolean;
  pageInfo: {
    totalPages: number;
    totalResults: number;
    page: number;
  };
}

const initialState: MovieState = {
  isLoading: true,
  error: null,
  movies: [],
  pageInfo:
    {
      totalPages: 0,
      totalResults: 0,
      page: 0,
    } || null,
};

export const MOVIES_KEY = "movies";

const movieSlice = createSlice({
  name: MOVIES_KEY,
  initialState,
  reducers: {
    requesting(state) {
      state.isLoading = true;
    },
    requestMoviesSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = null;
      state.movies = action.payload.results;
      state.pageInfo.page = action.payload?.page;
      state.pageInfo.totalPages = action.payload?.total_pages;
      state.pageInfo.totalResults = action.payload?.total_results;
    },
    requestMoviesFailed: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.movies = [];
      state.error = action.payload.error;
      state.pageInfo = state.pageInfo;
    },
  },
});

export const { requesting, requestMoviesFailed, requestMoviesSuccess } =
  movieSlice.actions;

export const getMovies = (page?: number) => async (dispatch: any) => {
  dispatch(requesting());
  await axiosFetch({
    url: `/3/movie/popular?page=${page}`,
    method: "GET",
  })(requestMoviesSuccess)(requestMoviesFailed)(dispatch);
};

export const movieSelector = (state: any): RootState["movies"] =>
  state[MOVIES_KEY];

export default movieSlice.reducer;
