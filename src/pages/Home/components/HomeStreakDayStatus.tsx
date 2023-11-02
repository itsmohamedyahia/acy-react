export default function HomeStreakDayStatus({ status }) {
  const statusCheckedCss = "bg-green-500";
  const statusNotCheckedCss = "bg-green-100 border border-green-500";

  return (
    <div
      className={
        "flex items-center justify-center w-6 h-6 rounded-full" +
        " " +
        (status ? statusCheckedCss : statusNotCheckedCss)
      }
    >
      {status && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )}
    </div>
  );
}
