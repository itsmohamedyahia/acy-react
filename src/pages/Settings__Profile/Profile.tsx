import Tabs from "../../common/Settings/Tabs";
import "./Profile.css";
import pp from "../../.../../assets/images/path1.jpg";
import Form from "../../common/UI/Form/Form";

export default function Profile() {
  return (
    <>
      <Tabs tabs={["Profile", "Security"]} />
      <div className="flex justify-center">
        <div
          className={
            " Profile__personal-info-container flex py-14 px-10 personal-info-container"
          }
        >
          <div className="">
            <h2 className="font-semibold leading-7">Personal Information</h2>
            <p style={{ maxWidth: "40ch" }}>
              Some random words just to stir you from what you were about to do
              here.
            </p>
          </div>
          <Form pp={pp} submitLabel="Save"></Form>
        </div>
      </div>
    </>
  );
}
