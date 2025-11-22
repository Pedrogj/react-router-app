import { Route, Routes } from "react-router";
import { HomePage } from "../components/HomePage";
import { AboutPage } from "../components/AboutPage";
import { RootLayout } from "../components/layout/RootLayout";
import { NotFoundPage } from "../components/NotFoundPage";
import { AboutTeamPage } from "../components/AboutTeamPage";
import { AboutHistoryPage } from "../components/AboutHistoryPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />

        <Route path="about" element={<AboutPage />}>
          <Route path="team" element={<AboutTeamPage />} />
          <Route path="history" element={<AboutHistoryPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
