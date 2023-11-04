import Home__Hello from "./components/HomeHello/Home__Hello";
import "./Home.css";
import Home__Start from "./components/HomeStart/Home__Start";
import Home__Leaderboard from "./components/Leaderboard/Home__Leaderboard";
import Home__Streak from "./components/HomeStreak/Home__Streak";
import Home__Analytics from "./components/HomeAnalytics/Home__Analytics";
import MainContainer from "../../common/UI/Containers/MainContainer";

export default function HomePage() {
  return (
    <MainContainer>
      <div className=" home">
        <Home__Hello />
        <Home__Start />
        <Home__Leaderboard />
        <Home__Streak />
        <Home__Analytics />
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
