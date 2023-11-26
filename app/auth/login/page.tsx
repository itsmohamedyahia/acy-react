import Button from "../../components/ui/button";
import Form from "../../components/ui/form/form";
import FormControl from "../../components/ui/form/components/control";
import AuthHeader from "../components/header";
import AuthFooter from "../components/footer";
import AuthLink from "../components/link";

export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <AuthHeader text="Sign in your account" />
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
          <AuthFooter
            text="Not a member?"
            anchor={<AuthLink to="/signup" text="Sign Up" />}
          />
        </div>
      </div>
    </>
  );
}
