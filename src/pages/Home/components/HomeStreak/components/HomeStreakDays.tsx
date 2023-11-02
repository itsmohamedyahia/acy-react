import HomeStreakDay from "./HomeStreakDay";

export default function HomeStreakDays() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const daysStatus = [1, 1, -1, 1, 0, 0];

  return (
    <div className="flex items-center justify-between gap-x-10">
      {days.map((day, index) => (
        <HomeStreakDay day={day} status={daysStatus[index]} />
      ))}
    </div>
  );
}
