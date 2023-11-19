import ComingSoon from "../../../../common/Overlay/ComingSoon";
import Card from "../../../../common/UI/Card";
import HomeStreakDays from "./components/HomeStreakDays";
import HomeStreakHeader from "./components/HomeStreakHeader";

export default function Home__Streak() {
  return (
    <Card className="relative home__streak">
      <div className="flex items-center justify-around md:flex-col md:gap-y-4">
        <HomeStreakHeader />
        <HomeStreakDays />
      </div>
    </Card>
  );
}
