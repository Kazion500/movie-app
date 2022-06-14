import MovieCard from "@/components/molecules/MovieCard";
import { MovieInterface } from "@/store/reducers/moviesReducers";
import type { FC } from "react";

interface MovieListProps {
  movies: MovieInterface[];
  onLike: (movie: MovieInterface) => void;
  likedMovies: MovieInterface[];
  results: number;
  heading: string;
}

const MovieList: FC<MovieListProps> = (props) => {
  const { movies, onLike, likedMovies, heading, results } = props;
  return (
    <>
      <div className="mb-7">
        <h1 className="text-accent-100">
          {heading} <span className="text-secondary-100">( {results} )</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-x-5 gap-y-12">
        {movies?.length ? (
          movies?.map((movie) => (
            <MovieCard
              {...movie}
              liked={!!likedMovies?.find((like) => like.id === movie.id)}
              onLike={() => onLike(movie)}
              key={movie.id}
            />
          ))
        ) : (
          <p className="text-secondary-100">No Results Found</p>
        )}
      </div>
    </>
  );
};

export default MovieList;
