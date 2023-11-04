import Button from "../../common/UI/Button";
import FormControl from "../../common/UI/Form/components/FormControl";
import LoginFooter from "./components/LoginFooter";
import LoginHeader from "./components/LoginHeader";
import Form from "../../common/UI/Form/Form";
import { Link } from "react-router-dom";
import LoginLink from "./components/LoginLink";

export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <LoginHeader text="Sign in your account" />
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
          <LoginFooter
            text="Not a member?"
            anchor={<LoginLink to="/signup" text="Sign Up" />}
          />
        </div>
      </div>
    </>
  );
}
