import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div>
      <p>NotFoundPage: Error 404</p>
      <Link to="/">Ir al Home</Link>
    </div>
  );
};
