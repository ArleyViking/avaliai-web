import { Routes, Route } from "react-router-dom";
import { AboutProject } from "./pages/About";
import { Contribute } from "./pages/Contribute";
import { Home } from "./pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/sobreoacervo" element={<AboutProject />} />
      <Route path="/contribua" element={<Contribute />} />
    </Routes>
  );
}
