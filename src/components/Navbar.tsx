import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "nav-active" : "")}
      >
        About
      </NavLink>
    </nav>
  );
};
