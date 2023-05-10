import Tabs from "../../common/Settings/Tabs";
import Profile__FormControl from "../Settings__Profile/Profile__FormControl";
import "./Security.css";

export default function Security() {
  return (
    <>
      <Tabs tabs={["Profile", "Security"]} />
      <div className="security__container--prim">
        <div
          className={
            "Profile__personal-info-container flex py-14 px-10 personal-info-container"
          }
        >
          <div className="">
            <h2 className="font-semibold leading-7">Change Your Password</h2>
            <p style={{ maxWidth: "40ch" }}>
              Some random words just to stir you from what you were about to do
              here.
            </p>
          </div>
          <form className="form--settings">
            <Profile__FormControl label="Old Password" id="pwd" />
            <Profile__FormControl label="New Password" id="new-pwd" />

            <Profile__FormControl
              label="Confirm New Password"
              id="re-new-pwd"
            />
            <button
              type="submit"
              className="security__btn text-white mt-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
