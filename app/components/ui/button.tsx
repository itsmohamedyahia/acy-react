import { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  variant?: "light" | "dark";
};

export default function Button({
  className,
  children,
  variant = "dark"
}: ButtonProps) {
  const darkVariantCss = "text-white bg-blue-700 hover:bg-blue-800";
  const lightVariantCss = "text-gray-800 bg-white hover:bg-gray-50 border";

  const variantCss = variant === "dark" ? darkVariantCss : lightVariantCss;

  const buttonCss = [
    "focus:ring-2 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none",
    className,
    variantCss
  ].join(" ");

  return (
    <button type="submit" className={buttonCss}>
      {children}
    </button>
  );
}
