import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { MovieDetail } from "./pages/MovieDetail";

export function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<MovieDetail />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
