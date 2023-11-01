import Tabs from "../../../common/Settings/Tabs";
import "./Profile.css";
import pp from "../../.../../../assets/images/path1.jpg";
import Form from "../../../common/UI/Form/Form";
import SettingsHeader from "../SettingsHeader";

export default function Profile() {

  const Profile = {
   heading: "Personal Information", 
   desc:  "Some random words just to stir you from what you were about to do here."
  }
  
  return (
    <>
      <Tabs tabs={["Profile", "Security"]} />
      <div className="flex justify-center">
        <div
          className="flex px-10 Profile__personal-info-container py-14 personal-info-container"
          
        >
         <SettingsHeader heading={Profile.heading} desc={Profile.desc}/>
          <Form pp={pp} submitLabel="Save"></Form>
        </div>
      </div>
    </>
  );
}
