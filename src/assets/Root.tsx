import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Includes/Sidebar";
import "./Root.css";
import Navbar from "./Components/Includes/Navbar";

function Root() {
  return (
    <div className="root-layout">
      <Sidebar />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Root;
