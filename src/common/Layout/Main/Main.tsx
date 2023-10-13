import React from "react";
import s from "./Main.module.css";

function Main(props) {
  return (
    <div className={s.main}>
      {props.children}
      {props.outlet}
    </div>
  );
}

export default Main;
