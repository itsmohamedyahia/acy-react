import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import s from "./Root.module.css";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Navbar from "../Navbar/Navbar";

import Main from "../Main/Main";
export default function Root() {
  return (
    <div id={s["root-layout"]}>
      <Sidebar />
      <div className={s["root-container"]}>
        <Navbar />
        <Main outlet={<Outlet />}></Main>
        
      </div>
      <MobileNavbar/>
    </div>
  );
}
