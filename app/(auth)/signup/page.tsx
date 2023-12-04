"use client";

import Button from "@/ui/button";
import Form from "@/ui/form/form";
import FormControl from "@/ui/form/components/control";
import AuthHeader from "../components/header";
import AuthFooter from "../components/footer";
import AuthLink from "../components/link";
import { useRouter } from "next/navigation";
import FormLabel from "@/components/ui/form/components/label";
import FormInput from "@/components/ui/form/components/input";
import { FormEvent } from "react";

export default function Signup() {
  const formFields = [
    { label: "Email Adress", id: "email" },
    { label: "Password", id: "passwd" }
  ];

  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const passwd = formData.get("passwd");
    const body = JSON.stringify({ email, passwd });

    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" // Set content type to JSON
        },
        body: body
      });
      console.log(response);

      if (response.status == 200) {
        const data = await response.json(); // Parse response JSON
        if (data === "SUCCESS") {
          router.push("/dashboard");
        }
        console.log(data); // Handle the response data
      } else {
        console.error("Error creating user:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <AuthHeader text="Create your account" />
      <div className="w-full max-w-sm mx-auto mt-10">
        <Form className="space-y-6" onSubmit={onSubmit}>
          {formFields.map((field) => (
            <FormControl>
              <FormLabel label={field.label} id={field.id} />
              <FormInput id={field.id} />
            </FormControl>
          ))}
          <Button className="w-full">Sign Up</Button>
        </Form>
        <AuthFooter anchor={<AuthLink to="/login" text="Login" />}>
          Already a member?
        </AuthFooter>
      </div>
    </div>
  );
}
