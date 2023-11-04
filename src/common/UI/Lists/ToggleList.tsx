import DownArrIcon from "../Icons/DownArrIcon";

export default function ToggleList({ title, children }) {
  return (
    <div>
      <h6 className="flex mb-4 font-bold text-blue-800 uppercase gap-x-2 text-md">
        <DownArrIcon size={4} />
        {title}
      </h6>
      <div className="px-6">{children}</div>
    </div>
  );
}
