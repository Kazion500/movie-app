import type { FC } from "react";
import { ThumbUpIcon as ThumbUpIconOutline } from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { MovieInterface } from "@/store/reducers/moviesReducers";

interface MovieCardProps extends MovieInterface {
  liked?: boolean;
  onLike: (id: string) => void;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { id, poster_path, liked, title, release_date, onLike } = props;
  return (
    <div className="">
      <div className="min-h-[250px] rounded-md  overflow-hidden">
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
          alt={title}
          className="block w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="">
        <h3 className="text-white text-sm font-bold my-3 uppercase tracking-[1px]">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-500">
          <p>{new Date(release_date).getFullYear()}</p>
          <div className="flex gap-2 items-center">
            <button onClick={() => onLike(id)}>
              {liked ? (
                <ThumbUpIcon className="w-6 h-6" />
              ) : (
                <ThumbUpIconOutline className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
