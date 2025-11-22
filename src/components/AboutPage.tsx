import { NavLink, Outlet } from "react-router";

export const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <nav>
        <NavLink to="team">Team</NavLink>
        <NavLink to="history">History</NavLink>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};
