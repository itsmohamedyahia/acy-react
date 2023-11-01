import Button from "../Button";
import FormControl from "../../../pages/Settings/FormControl";

export default function ProfileForm(props) {
  return (
    <form className="w-[30rem] grid gap-y-[1rem] ">
      <div className="flex items-center gap-8 ">
        <img className="h-24 rounded" src={props.pp} alt="" />
        <div>
          <button
            type="button"
            className="px-5 py-1.5 mb-2 mr-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Choose
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormControl label="First name" id="first-name" />
        <FormControl label="Last name" id="last-name" />
      </div>
      <FormControl label="Email" id="email" />
      {/*Form control */}
      <FormControl label="Username" id="username" />
      <div className="grid grid-cols-2 gap-4">
        <FormControl label="University" id="uni"  />
        <FormControl label="Major" id="major" />
      </div>
      <FormControl label="Year" id="year" />
      <Button className="mt-1 mb-2 mr-2 ">{props.submitLabel}</Button>
    </form>
  );
}
