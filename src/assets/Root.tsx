import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Includes/Sidebar";
import "./Root.css";

function Root() {
  return (
    <div class="root-layout w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Root;
