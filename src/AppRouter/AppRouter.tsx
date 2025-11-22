import { Route, Routes } from "react-router";
import { HomePage } from "../components/HomePage";
import { AboutPage } from "../components/AboutPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};
