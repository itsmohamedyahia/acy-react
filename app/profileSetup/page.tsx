import Card from "@/ui/card";
import ProfileForm from "../(core)/settings/profile/profileForm";
import pp from "@/assets/images/avatars/ballistic.jpg";
import "./profileSetup.css";
import assistant from "@/images/assistant-pathfinder.png";
import WavingIcon from "@/ui/icons/wavingIcon";
import Image from "next/image";

export default function ProfileSetup() {
  const user = "Mohamed";

  return (
    <div className="profile-setup__container px-80">
      <Card className="profile-setup__card">
        <div className=" profile-setup__text-container">
          <h1 className="text-xl font-semibold profile-setup__heading">
            Hey, {user}.
            <WavingIcon className="inline mx-2" width="30"></WavingIcon>
            Welcome to Acy.
          </h1>
          <p className="mb-6 profile-setup__text">
            Lets complete your profile and get you started.
          </p>
          <ProfileForm pp={pp} submitLabel="Next" noemail></ProfileForm>
        </div>
        <div className="profile-setup__image-container">
          <Image
            src={assistant}
            alt="image"
            className="profile-setup__img--assistant"
          />
        </div>
      </Card>
    </div>
  );
}
