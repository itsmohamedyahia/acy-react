// import ContentSidebar from "../../../common/Layout/ContentSidebar/ContentSidebar";
import anatomyPic from "../../../assets/images/anatomy-2.jpg";
import Card from "../../../common/UI/Card";
import MainContainer from "../../../common/UI/Containers/MainContainer";
import H3 from "../../../common/UI/Headings/H3";
import ToggleList from "../../../common/UI/Lists/ToggleList";
import Home__RightArrIcon from "../../../pages/Home/components/Icons/Home__RightArrIcon";
import Item from "../../../pages/Store/Item";
import PurchaseItem from "../../../pages/Store/PurchaseItem";

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
