import { Route, Routes } from "react-router";
import { HomePage } from "../components/HomePage";
import { AboutPage } from "../components/AboutPage";
import { RootLayout } from "../components/layout/RootLayout";
import { NotFoundPage } from "../components/NotFoundPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
