import Home__Hello from "./components/homeHello/home__Hello";
import "./Home.css";
import Home__Start from "./components/homeStart/home__Start";
import Home__Leaderboard from "./components/leaderboard/home__Leaderboard";
import Home__Streak from "./components/homeStreak/home__Streak";
import Home__Analytics from "./components/homeAnalytics/home__Analytics";
import MainContainer from "@/ui/containers/mainContainer";

export default function Home() {
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
