import MovieList from "@/components/organisms/MovieList";
import useLikes from "@/hooks/useLikes";

const Liked = () => {
  const { handleLike, likedMovies } = useLikes();

  return (
    <div className="w-[70vw] mx-auto py-10">
      <MovieList
        movies={likedMovies}
        onLike={handleLike}
        likedMovies={likedMovies}
        results={likedMovies?.length}
        heading="Liked Movies"
      />
    </div>
  );
};

export default Liked;
