import Card from "@/ui/card";
import RightArrIcon from "@/ui/icons/rightArrIcon";
import "./start.css";
export default function DashboardStart() {
  return (
    <Card className="flex items-center justify-center gap-6 home__start">
      <p className="text-2xl font-semibold uppercase">start a session</p>
      <RightArrIcon />
    </Card>
  );
}
