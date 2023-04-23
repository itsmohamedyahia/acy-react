import {
  NavLink,
  useLocation,
  useResolvedPath,
  Outlet,
} from "react-router-dom";
import styles from "./PracticeNeuroMain.module.css";

function PracticeNeuroMain() {
  // const path = useLocation().pathname;\
  const path = "/courses/neurology/practice/";
  const resolvedPath = (number: number) => path + "lesson" + number;
  return (
    <>
      <ul>
        <li>
          <NavLink
            to={path + "lesson1"}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Lesson1
          </NavLink>
        </li>
        <li>
          <NavLink to={resolvedPath(2)}>Lesson2</NavLink>
        </li>
        <li>
          <NavLink to="/lesson3">Lesson3</NavLink>
        </li>
        <li>
          <NavLink to="/lesson4">Lesson4</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default PracticeNeuroMain;
