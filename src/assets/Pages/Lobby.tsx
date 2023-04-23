import { Link } from "react-router-dom";

function Lobby() {
  return (
    <h1>
      Lobby
      <Link to="/courses/neurology/practice">GO to courses</Link>
    </h1>
  );
}

export default Lobby;
