import { useLocation } from "react-router-dom";

import ListOfLessons from "../../ListOfLessons";

function PracticeNeuroMain() {
  return (
    <>
      <ListOfLessons />
      <h1>Choose a lesson to get started</h1>
    </>
  );
}

export default PracticeNeuroMain;
