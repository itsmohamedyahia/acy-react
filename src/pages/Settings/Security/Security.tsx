import Tabs from "../../../common/UI/Tabs/Tabs";
import SettingsHeader from "../components/SettingsHeader";
import FormControl from "../../../common/UI/Form/components/FormControl";
import Form from "../../../common/UI/Form/Form";
import Button from "../../../common/UI/Button";

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
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
