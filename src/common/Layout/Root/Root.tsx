import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Root(props) {
  return (
    <div className="root-layout">
      {/*w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72*/}
      <Sidebar />
      <Navbar />
      <main className="main">
        <Outlet />
        {props.children}
      </main>
      <Footer />
    </div>
  );
}