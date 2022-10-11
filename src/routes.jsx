import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutProject } from "./pages/About";
import { Home } from "./pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/sobreoacervo" element={<AboutProject />} />
    </Routes>
  );
}
