import Card from "../../common/UI/Card";
import ProfileForm from "../../common/UI/Form/ProfileForm";
import pp from "../../assets/images/FufcHyEaUAIbNf0.jpg";
import "./ProfileSetup.css";
import assistant from "../../assets/images/assistant-pathfinder.png";
import Home__WavingIcon from "../Home/components/Home__WavingIcon";

export default function ProfileSetup() {
  const user = "Mohamed";

  return (
    <div className="profile-setup__container">
      <Card addClass="profile-setup__card">
        <div className=" profile-setup__text-container">
          <h1 className="text-xl font-semibold profile-setup__heading">
            Hey, {user}.
            <Home__WavingIcon
              className="inline mx-2"
              width="30"
            ></Home__WavingIcon>
            Welcome to Acy.
          </h1>
          <p className="mb-6 profile-setup__text">
            Lets complete your profile and get you started.
          </p>
          <ProfileForm pp={pp} submitLabel="Next"></ProfileForm>
        </div>
        <div className="profile-setup__image-container">
          <img src={assistant} className="profile-setup__img--assistant" />
        </div>
      </Card>
    </div>
  );
}
