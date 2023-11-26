import { ReactNode } from "react";

export default function AuthFooter({
  children,
  anchor
}: {
  children: ReactNode;
  anchor: ReactNode;
}) {
  return (
    <p className="mt-10 text-sm text-center text-gray-500">
      <span className="mr-1.5">{children}</span>
      {anchor}
    </p>
  );
}
