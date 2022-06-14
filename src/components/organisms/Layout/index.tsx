import { FC } from "react";
import Footer from "@/components/organisms/Footer";
import { Outlet } from "react-router-dom";
import Header from "@/components/organisms/Header";

const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-primary-200 min-h-screen pb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
