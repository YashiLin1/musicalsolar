import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MainLayout() {
  // always on top when link to new page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="backgroundImage min-h-screen">
      <div className="star-background z-0">
        <div className="stars z-0"></div>
        <div className="twinkling z-0"></div>
      </div>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
