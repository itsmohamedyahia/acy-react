import Card from "@/ui/card";
import ProfileForm from "../settings/profile/profileForm";
import pp from "../../assets/images/fufcHyEaUAIbNf0.jpg";
import "./profileSetup.css";
import assistant from "../../assets/images/assistant-pathfinder.png";
import Home__WavingIcon from "../home/components/icons/home__WavingIcon";
import Image from "next/image";

export default function ProfileSetup() {
  const user = "Mohamed";

  return (
    <div className="profile-setup__container">
      <Card className="profile-setup__card">
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
          <ProfileForm pp={pp} submitLabel="Next" noemail></ProfileForm>
        </div>
        <div className="profile-setup__image-container">
          <Image src={assistant} className="profile-setup__img--assistant" />
        </div>
      </Card>
    </div>
  );
}
