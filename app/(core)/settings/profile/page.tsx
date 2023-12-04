import Tabs from "@/ui/tabs/tabs";

import ProfileForm from "./profileForm";
import SettingsHeader from "../components/header";

export default function Profile() {
  const Profile = {
    heading: "Personal Information",
    desc: "Some random words just to stir you from what you were about to do here."
  };

  return (
    <>
      <Tabs tabs={["Profile", "Security"]} />
      <div className="flex justify-center">
        <div className="flex px-10 gap-x-16 py-14">
          <SettingsHeader heading={Profile.heading} desc={Profile.desc} />
          <ProfileForm submitLabel="Save"></ProfileForm>
          <div></div>
        </div>
      </div>
    </>
  );
}
