import { useEffect, useState } from "react";
import { get, save } from "@/services/localStorage";
import { LIKE_KEY } from "@/constants/";
import { useAppDispatch, useAppSelector } from "@/store/index";
import {
  getMovies,
  MovieInterface,
  movieSelector,
} from "@/store/reducers/moviesReducers";
import Button from "@/components/atoms/Button";
import MovieList from "@/components/organisms/MovieList";
import useLikes from "@/hooks/useLikes";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";

const Home = () => {
  const { isLoading, movies, pageInfo } = useAppSelector(movieSelector);
  const { likedMovies, setLikedMovies } = useLikes();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();

  const handleLike = (movie: MovieInterface) => {
    let newLikes: MovieInterface[] = [];
    if (likedMovies !== null && likedMovies?.length) {
      const likedMovieExists = likedMovies.find((item) => item.id === movie.id);
      if (likedMovieExists) {
        newLikes = likedMovies.filter((like) => like.id !== movie.id);
        save(LIKE_KEY, newLikes);
      } else {
        newLikes = [...likedMovies, movie];
        save(LIKE_KEY, newLikes);
      }
    } else {
      save(LIKE_KEY, [movie]);
    }
    setLikedMovies(JSON.parse(get(LIKE_KEY) as string));
    window.dispatchEvent(new Event("storage"));
  };

  const handleLoadMore = () => {
    if (pageInfo.page < pageInfo.totalPages) {
      setPage((prevPageNumber) => prevPageNumber + 1);
    }
  };

  useEffect(() => {
    dispatch(getMovies(page));
  }, [page]);

  return (
    <div className="w-[70vw] mx-auto py-10">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <MovieList
            heading="Popular movies"
            results={pageInfo?.totalResults}
            movies={movies}
            onLike={handleLike}
            likedMovies={likedMovies}
          />
          <div className="flex items-center justify-center mt-20 w-[20%] mx-auto">
            <Button
              disabled={pageInfo.page == pageInfo.totalPages || isLoading}
              onClick={handleLoadMore}
              title={
                isLoading
                  ? "Loading..."
                  : pageInfo.page < pageInfo.totalPages
                  ? `Load More`
                  : "No More Movies"
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
