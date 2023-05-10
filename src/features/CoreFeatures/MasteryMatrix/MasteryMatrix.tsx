import { Link } from "react-router-dom";

export default function MasteryMatrixPage() {
  return (
    <h1>
      Lobby
      <Link to="/courses/neurology/practice">
        Go to Neurology Practice Course
      </Link>
    </h1>
  );
}
