import Button from "../../components/ui/button";
import Form from "../../components/ui/form/form";
import FormControl from "../../components/ui/form/components/formControl";
import LoginHeader from "../components/header";
import LoginFooter from "../components/footer";
import LoginLink from "../components/link";

export default function Signup() {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <LoginHeader text="Create your account" />
      <div className="w-full max-w-sm mx-auto mt-10">
        <Form className="space-y-6" action="#">
          <FormControl label="Email adress" id="email" />
          <FormControl label="Password" id="passwd" />

          <Button className="w-full">Sign in</Button>
        </Form>
        <LoginFooter
          text="Already a member?"
          anchor={<LoginLink to="/login" text="Login" />}
        />
      </div>
    </div>
  );
}
