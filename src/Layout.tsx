import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/EARTH");
  }, []);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
