import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetail } from "./pages/MovieDetail";

export function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<MovieDetail />} />
    </Routes>
  );
}
