import { describe, expect, it, vi } from "vitest";
import MovieCard from "@/components/molecules/MovieCard";
import { ThumbUpIcon as ThumbUpIconOutline } from "@heroicons/react/outline";
import { ThumbUpIcon } from "@heroicons/react/solid";

describe("#movieCard", () => {
  const movie = {
    id: "1",
    title: "test",
    poster_path: "test",
    release_date: "2020-01-01",
    overview: "test",
  };

  it("should render a movieCard", () => {
    const movieCard = MovieCard({ ...movie, onLike: () => {} });
    expect(movieCard?.type).toBe("div");
    expect(movieCard).toMatchSnapshot();
  });


  it("should have two children", () => {
    const movieCard = MovieCard({ ...movie, onLike: () => {} });
    expect(movieCard?.props.children.length).toBe(2);
  });

  it("should allow to like a movie", () => {
    const mockFn = vi.fn();
    const movieCard = MovieCard({ ...movie, onLike: mockFn });

    const likeButton =
      movieCard?.props.children[1].props.children[1].props.children[1].props
        .children.props;
    likeButton.onClick();
    expect(mockFn).toHaveBeenCalled();
  });

  it("should render thumup solid icon if like is true", () => {
    const movieCard = MovieCard({ ...movie, liked: true, onLike: () => {} });
    const likeButton =
      movieCard?.props.children[1].props.children[1].props.children[1].props
        .children.props;
    expect(likeButton.children.type).toEqual(ThumbUpIcon);
  });

  it("should render thumup outline icon if like is true", () => {
    const movieCard = MovieCard({ ...movie, liked: false, onLike: () => {} });
    const likeButton =
      movieCard?.props.children[1].props.children[1].props.children[1].props
        .children.props;
    expect(likeButton.children.type).toEqual(ThumbUpIconOutline);
  });

});
