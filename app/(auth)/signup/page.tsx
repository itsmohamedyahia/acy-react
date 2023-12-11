"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import comAuthData from "../logic/onSubmit";
import AuthPage from "../components/authPage";

export default function Signup() {
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    const redirect = await comAuthData(event);

    if (redirect) {
      router.push("/dashboard");
    }
  }

  const formFields = [
    { label: "Email Adress", id: "email" },
    { label: "Password", id: "passwd" }
  ];

  const configObj = {
    headerText: "Create your account",
    formFields: formFields,
    buttonText: "Sign Up",
    footerText: "Already a member?",
    linkText: "Login",
    linkHref: "/login",
    onSubmit: onSubmit
  };

  return <AuthPage configObj={configObj} />;
}
