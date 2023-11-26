export default function LoginLink({ to, text }) {
  return (
    <a
      href={to}
      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    >
      {text}
    </a>
  );
}
