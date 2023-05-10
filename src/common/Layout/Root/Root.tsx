import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Root(props) {
  return (
    <div id="root-layout" className="relative w-full h-full overflow-hidden">
      <Sidebar />

      <main className="main">
        <Navbar />
        <div className="min-h-[93vh] grid ">
          {props.children}
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
}
