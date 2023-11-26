import Tabs from "@/ui/tabs/tabs";
import SettingsHeader from "../components/settingsHeader";
import FormControl from "@/ui/form/components/formControl";
import Form from "@/ui/form/form";
import Button from "@/ui/button";

export default function Security() {
  const Security = {
    heading: "Change Your Password",
    desc: "Some random words just to stir you from what you were about to do here."
  };

  return (
    <>
      <Tabs tabs={["Profile", "Security"]} />
      <div className="flex justify-center">
        <div className={"gap-x-16 flex py-14 px-10 "}>
          <SettingsHeader heading={Security.heading} desc={Security.desc} />
          <Form className="grid w-[30rem] gap-y-4" action="#">
            <FormControl label="Old Password" id="pwd" />
            <FormControl label="New Password" id="new-pwd" />
            <FormControl label="Confirm New Password" id="re-new-pwd" />
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
