import LoginHeader from "../Login/components/LoginHeader";
import Form from "../../common/UI/Form/Form";
import FormControl from "../../common/UI/Form/components/FormControl";
import Button from "../../common/UI/Button";
import LoginFooter from "../Login/components/LoginFooter";
import LoginLink from "../Login/components/LoginLink";

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
