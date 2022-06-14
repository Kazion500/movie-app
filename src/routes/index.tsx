import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Liked from "@/pages/Liked";
import Layout from "@/components/organisms/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="liked" element={<Liked />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
