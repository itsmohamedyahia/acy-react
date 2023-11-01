import { ReactNode } from "react";
import s from "./Main.module.css";

type attributes = {
  outlet: ReactNode;
}

function Main(props: attributes) {
  return (
    <div className={s.main}>
      {props.outlet}
    </div>
  );
}

export default Main;
