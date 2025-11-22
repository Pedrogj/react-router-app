import { BrowserRouter } from "react-router";
import { AppRouter } from "./AppRouter/AppRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
