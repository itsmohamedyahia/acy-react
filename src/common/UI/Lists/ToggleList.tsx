import { useState } from "react";
import DownArrIcon from "../Icons/DownArrIcon";
import RightPlainArrowIcon from "../Icons/RightPlainArrowIcon";

export default function ToggleList({ title, children, className = "" }) {
  const [toggle, setToggle] = useState(false);

  let isHidden = "";

  if (toggle) {
    isHidden = "hidden";
  }

  function toggleToggle() {
    setToggle((prev) => !prev);
  }
  return (
    <div className={className}>
      <h6
        className="flex mb-4 font-bold text-blue-800 uppercase text-md w-fit items-center"
        onClick={toggleToggle}
      >
        {!toggle && <DownArrIcon size={4} />}
        {toggle && <RightPlainArrowIcon size={7} />}

        {title}
      </h6>
      <div id="toggle-list" className="px-6">
        <div className={isHidden}>{children}</div>
      </div>
    </div>
  );
}
