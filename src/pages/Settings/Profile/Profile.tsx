import Tabs from "../../../common/UI/Tabs/Tabs";
import avatar from "../../.../../../assets/images/avatars/path1.jpg";
import ProfileForm from "./ProfileForm";
import SettingsHeader from "../components/SettingsHeader";

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
          <ProfileForm pp={avatar} submitLabel="Save"></ProfileForm>
          <div></div>
        </div>
      </div>
    </>
  );
}
