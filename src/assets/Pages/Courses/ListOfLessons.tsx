import { NavLink, useResolvedPath } from "react-router-dom";
import styles from "./ListOfLessons.module.css";

function ListOfLessons() {
  // const path = useLocation().pathname;\
  const path = "/courses/neurology/practice/";
  const resolvedPath = (number: number) => path + "lesson" + number;

  return (
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
        <NavLink to={path + "lesson3"}>Lesson3</NavLink>
      </li>
      <li>
        <NavLink to={path + "lesson4"}>Lesson4</NavLink>
      </li>
    </ul>
  );
}

export default ListOfLessons;
