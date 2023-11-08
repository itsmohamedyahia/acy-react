import ComingSoon from "../../../../common/Overlay/ComingSoon";
import Card from "../../../../common/UI/Card";
import HomeStreakDays from "./components/HomeStreakDays";
import HomeStreakHeader from "./components/HomeStreakHeader";

export default function Home__Streak() {
  return (
    <Card className="home__streak  relative">
      <div className="flex items-center justify-around md:flex-col md:gap-y-4 blur-[2px]">
        <HomeStreakHeader />
        <HomeStreakDays />
      </div>
      <ComingSoon />
    </Card>
  );
}
