import { Link } from "react-router-dom";

export default function LoginLink({ to, text }) {
  return (
    <Link
      to={to}
      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    >
      {text}
    </Link>
  );
}
