import { BrowserRouter } from "react-router";
import { AppRouter } from "./AppRouter/AppRouter";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};
