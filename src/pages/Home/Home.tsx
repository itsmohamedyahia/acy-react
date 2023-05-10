import Home__Hello from "./Home__Hello";
import "./Home.css";
import Home__Start from "./Home__Start";
import Home__Leaderboard from "./Home__Leaderboard";
import Home__Streak from "./Home__Streak";
import Home__Analytics from "./Home__Analytics";

export default function HomePage() {
  return (
    <div className="home">
      <Home__Hello />
      <Home__Start />
      <Home__Leaderboard />
      <Home__Streak />
      <Home__Analytics />
    </div>
  );
}