import { NavLink, useResolvedPath } from "react-router-dom";
import styles from "./ListOfLessons.module.css";

function ListOfLessons() {
  // const path = useLocation().pathname;\
  const path = "/courses/neurology/practice/";
  const resolvedPath = (number: number) => path + "lesson" + number;

  const LESSONS = [
    { id: "1", title: "lesson 1" },
    { id: "2", title: "lesson 2" },
    { id: "3", title: "lesson 3" },
    { id: "4", title: "lesson 4" },
  ];
  return (
    <ul>
      {LESSONS.map((lesson) => (
        <li key={lesson.id}>
          <NavLink
            to={`${path}lesson${lesson.id}`}
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            lesson - {lesson.id}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default ListOfLessons;

/*

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
*/
