import Button from "@/ui/button";
import Form from "@/ui/form/form";
import FormControl from "@/ui/form/components/control";
import FormLabel from "@/components/ui/form/components/label";
import FormInput from "@/components/ui/form/components/input";
import AuthHeader from "../components/header";
import AuthFooter from "../components/footer";
import AuthLink from "../components/link";
import { FormEventHandler } from "react";

type FormField = {
  id: string;
  label: string;
};

type configObj = {
  headerText: string;
  formFields: Array<FormField>;
  buttonText: string;
  footerText: string;
  linkText: string;
  linkHref: string;
  onSubmit: FormEventHandler;
};

export default function AuthPage({ configObj }: { configObj: configObj }) {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <AuthHeader text={configObj.headerText} />
      <div className="w-full max-w-sm mx-auto mt-10">
        <Form className="space-y-6" onSubmit={configObj.onSubmit}>
          {configObj.formFields.map((field, index) => (
            <FormControl key={index}>
              <FormLabel label={field.label} id={field.id} />
              <FormInput id={field.id} />
            </FormControl>
          ))}
          <Button className="w-full">{configObj.buttonText}</Button>
        </Form>
        <AuthFooter
          anchor={
            <AuthLink to={configObj.linkHref} text={configObj.linkText} />
          }
        >
          {configObj.footerText}
        </AuthFooter>
      </div>
    </div>
  );
}
