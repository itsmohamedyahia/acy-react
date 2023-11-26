// import ContentSidebar from "../../../common/Layout/ContentSidebar/ContentSidebar";
import anatomyPic from "@/root/assets/images/anatomy-2.jpg";
import Card from "@/ui/card";
import MainContainer from "@/ui/containers/mainContainer";
import H3 from "@/ui/headings/h3";
import ToggleList from "@/ui/lists/toggleList";
import Home__RightArrIcon from "@/home/components/icons/home__RightArrIcon";
import Item from "@/store/item";

export default function Synapse() {
  return (
    <MainContainer>
      <Card className="flex gap-5 py-10 mb-10 p-14 max-w-x ">
        <H3 className="">Resume Last Session</H3>
        <Home__RightArrIcon />
      </Card>
      <ToggleList title="Favourites" className="mb-8">
        <div className="flex wrap">
          <Item
            label={
              <div className="flex justify-between">
                <span>Anatomy</span>
                <Home__RightArrIcon />
              </div>
            }
            img={anatomyPic}
            clickable="/anatomy"
          />
        </div>
      </ToggleList>
      <ToggleList title="Unlocked">
        <div className="flex wrap">
          <Item
            label={
              <div className="flex justify-between">
                <span>Anatomy</span>
                <Home__RightArrIcon />
              </div>
            }
            img={anatomyPic}
          />
        </div>
      </ToggleList>
    </MainContainer>
  );
}
