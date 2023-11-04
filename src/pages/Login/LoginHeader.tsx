import LogoIcon from "../../common/Layout/Sidebar/Components/Icons/LogoIcon";
import H3 from "../../common/UI/Headings/H3";

export default function LoginHeader({ text }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <LogoIcon className="w-auto h-12 mx-auto text-blue-700" />
      <H3 text={text} className="mt-10 text-center" />
    </div>
  );
}
