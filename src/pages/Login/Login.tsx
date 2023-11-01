import Button from "../../common/UI/Button";
import FormControl from "../Settings/FormControl";
import LoginFooter from "./LoginFooter";
import LoginHeader from "./LoginHeader";
import Form from "../../common/UI/Form/Form";

export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <LoginHeader />
        <div className="w-full max-w-sm mx-auto mt-10">
          <Form className="space-y-6" action="#">
            <FormControl label="Email adress" id="email" />
            <FormControl label="Password" id="passwd" />
            <div className="text-sm text-center">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <Button className="w-full">Sign in</Button>
          </Form>
          <LoginFooter />
        </div>
      </div>
    </>
  );
}
