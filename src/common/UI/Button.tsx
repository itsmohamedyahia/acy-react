export default function Button({ className = "", children, variant = "dark" }) {
  const variantCss =
    variant === "dark"
      ? "text-white bg-blue-700 hover:bg-blue-800"
      : "text-gray-800 bg-white hover:bg-gray-50 border ";

  const buttonCss =
    "focus:ring-2 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none " +
    " " +
    className +
    " ";

  return (
    <button type="submit" className={buttonCss + variantCss}>
      {children}
    </button>
  );
}
