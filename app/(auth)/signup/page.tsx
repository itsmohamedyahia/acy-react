import Button from "@/ui/button";
import Form from "@/ui/form/form";
import FormControl from "@/ui/form/components/control";
import AuthHeader from "../components/header";
import AuthFooter from "../components/footer";
import AuthLink from "../components/link";

export default function Signup() {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <AuthHeader text="Create your account" />
      <div className="w-full max-w-sm mx-auto mt-10">
        <Form className="space-y-6" action="#">
          <FormControl label="Email adress" id="email" />
          <FormControl label="Password" id="passwd" />

          <Button className="w-full">Sign in</Button>
        </Form>
        <AuthFooter anchor={<AuthLink to="/login" text="Login" />}>
          Already a member?
        </AuthFooter>
      </div>
    </div>
  );
}
