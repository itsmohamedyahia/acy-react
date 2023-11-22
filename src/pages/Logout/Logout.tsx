import { redirect } from "react-router-dom";

export const logoutLoader = () => {
  return redirect("/login");
};
