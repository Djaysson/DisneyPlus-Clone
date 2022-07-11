import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
