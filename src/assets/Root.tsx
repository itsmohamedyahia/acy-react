import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Includes/Sidebar";
import "./Root.css";

function Root() {
  return (
    <div className="root-layout">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Root;
