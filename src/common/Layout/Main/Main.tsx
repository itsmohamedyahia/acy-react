import { ReactNode } from "react";

type attributes = {
  outlet: ReactNode;
}

function Main(props: attributes) {
  return (
    <main className="my-[3.5rem] overflow-x-hidden overflow-y-auto">
      {props.outlet}
    </main>
  );
}

export default Main;
