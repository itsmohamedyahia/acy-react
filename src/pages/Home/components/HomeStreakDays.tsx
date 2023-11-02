import HomeStreakDay from "./HomeStreakDay";

export default function HomeStreakDays() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const daysStatus = [true, true, true, false, false, true];

  return (
    <div className="flex items-center justify-between gap-x-10">
 {days.map((day, index)=> (<HomeStreakDay day={day} status={daysStatus[index]}/>))}
    </div>
  );
}
