import Button from "../Button";
import Profile__FormControl from "../../../pages/Settings__Profile/Profile__FormControl";

export default function Form(props) {
  return (
    <form className="form--settings">
      <div className="flex items-center gap-8 ">
        <img className="rounded Profile__pp" src={props.pp} alt="" />
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
        <Profile__FormControl label="First name" id="first-name" />
        <Profile__FormControl label="Last name" id="last-name" />
      </div>
      <Profile__FormControl label="Email" id="email" />
      {/*Form control */}
      <Profile__FormControl label="Username" id="username" />
      <div className="grid grid-cols-2 gap-4">
        <Profile__FormControl label="University" id="uni" />
        <Profile__FormControl label="Major" id="major" />
      </div>
      <Profile__FormControl label="Year" id="year" />
      <Button className="mt-1 mb-2 mr-2 ">{props.submitLabel}</Button>
    </form>
  );
}
