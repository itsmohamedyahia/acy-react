import "./control.css";
import FormInput from "@/components/ui/form/components/input";
import FormLabel from "./label";
import { ReactNode } from "react";

export default function FormControl({ children }: { children: ReactNode }) {
  let dbName = "fromDatabase";
  return <div className="FormControl">{children}</div>;
}

/*

<FormLabel label={label} id={id} />
      <FormInput id={id} dbName={dbName} type={type} />
*/
