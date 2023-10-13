import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import s from "./Root.module.css";

import Navbar from "../Navbar/Navbar";

import Main from "../Main/Main";
export default function Root() {
  return (
    <div id={s["root-layout"]}>
      <Sidebar />
      <Navbar />
      <Main outlet={<Outlet />}></Main>
    </div>
  );
}
