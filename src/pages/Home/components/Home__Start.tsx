import Card from "../../../common/UI/Card";
import Home__RightArrIcon from "./Home__RightArrIcon";
import "./Home__Start.css";
export default function Home__Start() {
  return (
    <Card addClass="home__start bg-blue-800 flex items-center gap-6 justify-center">
      <p className="text-2xl font-semibold">START A SESSION</p>
      <Home__RightArrIcon />
    </Card>
  );
}
