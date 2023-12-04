import Tabs from "@/ui/tabs/tabs";
import SettingsHeader from "../components/header";
import FormControl from "@/components/ui/form/components/control";
import Form from "@/ui/form/form";
import Button from "@/ui/button";
import FormInput from "@/components/ui/form/components/input";
import FormLabel from "@/components/ui/form/components/label";

export default function Security() {
  const Security = {
    heading: "Change Your Password",
    desc: "Some random words just to stir you from what you were about to do here."
  };

  async function onSubmit() {}

  return (
    <>
      <Tabs tabs={["Profile", "Security"]} />
      <div className="flex justify-center">
        <div className={"gap-x-16 flex py-14 px-10 "}>
          <SettingsHeader heading={Security.heading} desc={Security.desc} />
          <Form className="grid w-[30rem] gap-y-4" onSubmit={onSubmit}>
            <FormControl>
              <FormLabel label="Old Password" id="pwd" />
              <FormInput id="pwd" />
            </FormControl>
            <FormControl>
              <FormLabel label="New Password" id="new-pwd" />
              <FormInput id="new-pwd" />
            </FormControl>
            <FormControl>
              <FormLabel label="Confirm New Password" id="re-new-pwd" />
              <FormInput id="re-new-pwd" />
            </FormControl>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
