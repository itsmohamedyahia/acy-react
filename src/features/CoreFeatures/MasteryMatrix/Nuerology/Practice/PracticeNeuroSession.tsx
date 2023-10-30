// import ListOfLessons from "../../ListOfLessons";
import { useParams } from "react-router-dom";
function PracticeNeuroSession() {
  const param = useParams();
  return (
    <>
      {/* <ListOfLessons /> */}
      <h1> {param.lessonId}- test session active - imagine mcqs here</h1>;
    </>
  );
}

export default PracticeNeuroSession;
