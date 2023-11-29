import { FormEventHandler, ReactNode } from "react";

export default function Form({
  onSubmit,
  className = "",
  children
}: {
  onSubmit: FormEventHandler;
  className: string;
  children: ReactNode;
}) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}
