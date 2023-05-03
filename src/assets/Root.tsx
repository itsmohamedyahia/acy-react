import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Includes/Sidebar";
import "./Root.css";
import Navbar from "./Components/Includes/Navbar";

function Root(props: any) {
  return (
    <div className="root-layout w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <Sidebar />
      <Navbar />
      <Outlet />
      {props.children}
    </div>
  );
}

export default Root;
