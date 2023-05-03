import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Includes/Sidebar";
import "./Root.css";
import Navbar from "./Components/Includes/Navbar";

function Root(props: any) {
  return (
    <div className="root-layout">
      <Sidebar />
      <Navbar />
      <Outlet />
      {props.children}
    </div>
  );
}

export default Root;
