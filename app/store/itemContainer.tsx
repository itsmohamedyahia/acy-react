export default function ItemContainer({ children}) {
  return (
    <div className="max-w-[20rem] bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 min-w-[20rem]">
      {children}
    </div>
  );
}
