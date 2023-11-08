export default function ItemCTA({ bg, children }) {
  let textColor, bgColor, hoverColor;

  if (bg === "primary") {
    textColor = "text-white";
    bgColor = "bg-blue-700";
    hoverColor = "hover:bg-blue-800";
  } else if (bg === "secondary") {
    textColor = "text-blue-700";
    hoverColor = "hover:bg-indigo-100"
  } else {
    console.log("item cta wrong bg color");
  }

  const aclasses = [
    "inline-flex items-center px-3 py-2 text-sm font-medium text-center  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300",
    textColor,
    bgColor,
    hoverColor
  ].join(" ");

  return (
    <a href="#" className={aclasses}>
      {children}
      <svg
        aria-hidden="true"
        className="w-4 h-4 ml-2 -mr-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </a>
  );
}
