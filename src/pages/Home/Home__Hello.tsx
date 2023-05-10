import Home__WavingIcon from "./Home__WavingIcon";
import Card from "../../common/UI/Card";

function Home__Hello() {
  let firstName = "Mohamed";
  return (
    <Card addClass="home__welcome flex items-center gap-2 custom-shadow">
      <a href="#" className="block">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 uppercase dark:text-white">
          Hey, {firstName}
        </h5>
      </a>
      <Home__WavingIcon />
      {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Welcome Back. What's that smell? I smell bravery. That's what I like to
        smell. Buckle up, Legend, and head to the Lobby.
      </p> */}
    </Card>
  );
}

export default Home__Hello;
