import Tab from "./Tab";

export default function Tabs(props) {
  return (
    <div className="mt-3 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {props.tabs.map((label) => (
          <Tab label={label} />
        ))}
      </ul>
    </div>
  );
}
