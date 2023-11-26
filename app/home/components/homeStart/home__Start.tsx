import Card from "../../../components/ui/card";
import Home__RightArrIcon from "../icons/home__RightArrIcon";
import "./Home__Start.css";
export default function Home__Start() {
  return (
    <Card className="flex items-center justify-center gap-6 home__start">
      <p className="text-2xl font-semibold uppercase">start a session</p>
      <Home__RightArrIcon />
    </Card>
  );
}
