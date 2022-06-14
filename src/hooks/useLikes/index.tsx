import { useEffect, useState } from "react";
import { LIKE_KEY } from "@/constants/";
import { get, save } from "@/services/localStorage";
import { MovieInterface } from "@/store/reducers/moviesReducers";

const useLikes = () => {
  const [likedMovies, setLikedMovies] = useState<MovieInterface[]>(
    JSON.parse(get(LIKE_KEY) as string)
  );

  const handleLike = (movie: MovieInterface) => {
    const newLikes = likedMovies.filter((like) => like.id !== movie.id);
    save(LIKE_KEY, newLikes);
    setLikedMovies(JSON.parse(get(LIKE_KEY) as string));
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    window.addEventListener("storage", (e) => {
      setLikedMovies(JSON.parse(get(LIKE_KEY) as string));
    });
  });

  return {
    likedMovies,
    handleLike,
    setLikedMovies,
  };
};

export default useLikes;
