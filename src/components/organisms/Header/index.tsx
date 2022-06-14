import useLikes from "@/hooks/useLikes";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Liked",
    href: "/liked",
  },
];

const Header = () => {
  const { likedMovies } = useLikes();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        navRef?.current?.classList.remove("bg-primary-100");
      } else {
        navRef?.current?.classList.add("bg-primary-100");
      }
    });
  });

  return (
    <>
      <nav
        ref={navRef}
        className="flex sticky top-0 backdrop-blur-sm items-center bg-primary-100 justify-center gap-5  p-5 text-white"
      >
        {links.map((link, _) => (
          <NavLink
            key={_}
            to={link.href}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary-200 rounded-md block" : ""
              }  py-2 px-5 relative`
            }
          >
            {link.name}
            {link.name.toLowerCase() === "liked" && (
              <small className="absolute -top-1 -right-2 w-6 h-6 flex justify-center items-center rounded-full bg-secondary-100">
                {likedMovies?.length || 0}
              </small>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Header;
