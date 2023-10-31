import Card from "../../../common/UI/Card";
import Home__RightArrIcon from "./Home__RightArrIcon";
import "./Home__Start.css";
export default function Home__Start() {
  return (
    <Card addClass="home__start flex items-center gap-6 justify-center">
      <p className="text-2xl font-semibold uppercase">start a session</p>
      <Home__RightArrIcon />
    </Card>
  );
}
