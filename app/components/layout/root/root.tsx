import Sidebar from "../sidebar/sidebar";
import s from "./Root.module.css";
import MobileNavbar from "../mobileNavbar/mobileNavbar";
import Navbar from "../navbar/navbar";

import Main from "../main/main";
export default function Root({ children }) {
  return (
    <div id={s["root-layout"]}>
      <Sidebar />
      <div className="relative w-full h-full overflow-hidden">
        <Navbar />
        <Main>{children}</Main>
      </div>
      <MobileNavbar />
    </div>
  );
}
