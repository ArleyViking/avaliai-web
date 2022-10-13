import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AboutProject } from "./pages/About";
import { Category } from "./pages/Category";
import { Checklist } from "./pages/Checklist";
import { Contribute } from "./pages/Contribute";
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
      <Route path="/checklist" element={<Checklist />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}
