import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AboutProject } from "./pages/About";
import { Category } from "./pages/Category";
import { Checklist } from "./pages/Checklist";
import { Contribute } from "./pages/Contribute";
import { Heuristic } from "./pages/Heuristic";
import { Home } from "./pages/Home";

export function AppRoutes() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/sobreoacervo" element={<AboutProject />} />
      <Route path="/contribua" element={<Contribute />} />
      <Route path="/checklist/:id" element={<Checklist />} />
      <Route path="/checklist/categoria/:id" element={<Category />} />
      <Route
        path="/checklist/categoria/heuristica/:id"
        element={<Heuristic />}
      />
    </Routes>
  );
}
