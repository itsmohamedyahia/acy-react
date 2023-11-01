import { NavLink, useResolvedPath } from "react-router-dom";


export default function ContentSidebar() {
  // const path = useLocation().pathname;\
  const path = "/courses/neurology/practice/";
  const resolvedPath = (number: number) => path + "lesson" + number;

  const LESSONS = [
    { id: "1", title: "lesson 1" },
    { id: "2", title: "lesson 2" },
    { id: "3", title: "lesson 3" },
    { id: "4", title: "lesson 4" }
  ];
  return (
    <ul>
      {LESSONS.map((lesson) => (
        <li key={lesson.id}>
          <NavLink
            to={`${path}lesson${lesson.id}`}
            // make current lesson in list highlighted 
            className={({ isActive }) => (isActive && s.active)}
          >
            lesson - {lesson.id}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
