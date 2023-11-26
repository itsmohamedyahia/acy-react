import HomeStreakDayStatus from "./homeStreakDayStatus";

export default function HomeStreakDay({ day, status }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <HomeStreakDayStatus status={status} />
      <p className="font-semibold">{day}</p>
    </div>
  );
}
