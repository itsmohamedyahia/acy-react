import Button from "@/ui/button";
import FormControl from "@/components/ui/form/components/control";
import Form from "@/ui/form/form";

export default function ProfileForm(props) {
  return (
    <div className="grid gap-y-4">
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
      <Form action="#" className="w-[30rem] grid gap-y-[1rem] ">
        <div className="grid grid-cols-2 gap-4">
          <FormControl label="First name" id="first-name" />
          <FormControl label="Last name" id="last-name" />
        </div>
        {props.noemail ? null : <FormControl label="Email" id="email" />}
        <FormControl label="Username" id="username" />
        <div className="grid grid-cols-2 gap-4">
          <FormControl label="University" id="uni" type="select" />
          <FormControl label="Major" id="major" type="select" />
        </div>
        <FormControl label="Year" id="year" />
        <Button className="mt-1 mb-2 mr-2 ">{props.submitLabel}</Button>
      </Form>
    </div>
  );
}
