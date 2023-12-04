"use client";

import Button from "@/ui/button";
import FormControl from "@/components/ui/form/components/control";
import Form from "@/ui/form/form";
import Image from "next/image";
import FormLabel from "@/components/ui/form/components/label";
import FormSelect from "@/components/ui/form/components/select";
import FormInput from "@/components/ui/form/components/input";
import avatar from "@/assets/images/avatars/path1.jpg";

export default function ProfileForm(props) {
  async function onSubmit() {}

  return (
    <div className="grid gap-y-4">
      <div className="flex items-center gap-8 ">
        <Image className="h-24 w-24 rounded" src={avatar} alt="" />
        <div>
          <button
            type="button"
            className="px-5 py-1.5 mb-2 mr-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Choose
          </button>
        </div>
      </div>
      <Form onSubmit={onSubmit} className="w-[30rem] grid gap-y-[1rem] ">
        <div className="grid grid-cols-2 gap-4">
          <FormControl>
            <FormLabel label="First name" id="first-name" />
            <FormInput id="first-name" />
          </FormControl>
          <FormControl>
            <FormLabel label="Last name" id="last-name" />
            <FormInput id="last-name" />
          </FormControl>
        </div>
        {props.noemail ? null : (
          <FormControl>
            <FormLabel label="Email" id="email" />
            <FormInput id="email" />
          </FormControl>
        )}
        <FormControl>
          <FormLabel label="Username" id="username" />
          <FormInput id="username" />
        </FormControl>
        <div className="grid grid-cols-2 gap-4">
          <FormControl>
            <FormLabel label="University" id="uni" />
            <FormSelect
              id="uni"
              nonoption="Choose a university"
              options={{
                menofia: "Menofia University",
                cairo: "Cairo University",
                msa: "MSA University",
                "6th": "6th October University"
              }}
            ></FormSelect>
          </FormControl>
          <FormControl>
            <FormLabel label="Major" id="major" />
            <FormSelect
              id="major"
              nonoption="Choose a major"
              options={{
                US: "Medicine and Surgery",
                CA: "Canada",
                FR: "France",
                DE: "Germany"
              }}
            ></FormSelect>
          </FormControl>
        </div>
        <FormControl>
          <FormLabel label="Year" id="year" />
          <FormInput id="year" />
        </FormControl>
        <Button className="mt-1 mb-2 mr-2 ">{props.submitLabel}</Button>
      </Form>
    </div>
  );
}
