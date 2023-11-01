import { Link } from "react-router-dom";

export default function LoginFooter() {
  return (
    <p className="mt-10 text-sm text-center text-gray-500">
      Not a member?{" "}
      <Link
        to="/signup"
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        Sign up
      </Link>
    </p>
  );
}
