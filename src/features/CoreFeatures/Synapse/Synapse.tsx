// import ContentSidebar from "../../../common/Layout/ContentSidebar/ContentSidebar";
import anatomyPic from "../../../assets/images/anatomy-2.jpg"
import Card from "../../../common/UI/Card";
import H3 from "../../../common/UI/Headings/H3";
import ToggleList from "../../../common/UI/Lists/ToggleList";
import Home__RightArrIcon from "../../../pages/Home/components/Icons/Home__RightArrIcon";
import PurchaseItem from "../../../pages/Store/PurchaseItem";

export default function Synapse() {
  return (
    <div className="p-20">
      <Card addClass="flex gap-5 p-14 py-10 mb-10 max-w-x ">
        <H3 className="">Resume Last Session</H3>
        <Home__RightArrIcon />
      </Card>
      <ToggleList title="Favourites">
        <div className="flex wrap">
          <PurchaseItem label="Anatomy" img={anatomyPic}/>
        </div>
      </ToggleList>
    </div>
  );
}
