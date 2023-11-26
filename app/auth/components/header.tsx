import LogoIcon from "../../components/layout/sidebar/components/icons/logoIcon";
import H3 from "../../components/ui/headings/h3";

export default function LoginHeader({ text }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <LogoIcon className="w-auto h-12 mx-auto text-blue-700" />
      <H3 className="mt-10 text-center">{text}</H3>
    </div>
  );
}
