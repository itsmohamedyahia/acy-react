import Card from "@/ui/card";
import HomeStreakDays from "./components/days";
import HomeStreakHeader from "./components/header";

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
