import CheckIcon from "./CheckIcon";
import XIcon from "./xIcon";

export default function HomeStreakDayStatus({ status }) {
  const statusPresentCss = "bg-green-500";
  const statusYetCss = "bg-green-100 border border-green-500";
  const statusAbsentCss = "bg-red-500";

  return (
    <div
      className={
        "flex items-center justify-center w-6 h-6 rounded-full" +
        " " +
        (status === 0
          ? statusYetCss
          : status === 1
          ? statusPresentCss
          : statusAbsentCss)
      }
    >
      {status === 1 && <CheckIcon />}
      {status === -1 && <XIcon color="white" />}
    </div>
  );
}
