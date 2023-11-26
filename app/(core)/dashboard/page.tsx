import DashboardHello from "./components/hello/hello";
import "./Dashboard.css";
import DashboardStart from "./components/start/start";
import DashboardLeaderboard from "./components/leaderboard/leaderboard";
import Home__Streak from "./components/streak/streak";
import DashboardAnalytics from "./components/analytics/analytics";
import MainContainer from "@/ui/containers/mainContainer";

export default function Dashboard() {
  return (
    <MainContainer>
      <div className=" home">
        <DashboardHello />
        <DashboardStart />
        <DashboardLeaderboard />
        <Home__Streak />
        <DashboardAnalytics />
        {/* JUST FOR TESTING SCROLL ON MAIN EL */}
        {/* <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nostrum
        temporibus cupiditate totam nihil mollitia reiciendis similique quaerat
        blanditiis facere consectetur neque a, nobis laborum esse eum libero
        inventore quod?
      </div> */}
      </div>
    </MainContainer>
  );
}
