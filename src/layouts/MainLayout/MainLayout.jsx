import Footer from "../../pages/Shared/Footer/Footer";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-243px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
