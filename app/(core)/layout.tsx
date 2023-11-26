import Root from "@/components/layout/root/root";
import { ReactNode } from "react";
import "@/layout/scrollbar/scrollbar.css";
export default function RootContainer({ children }: { children: ReactNode }) {
  return <Root>{children}</Root>;
}
