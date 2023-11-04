import Tabs from "../../common/UI/Tabs/Tabs";
import PurchaseItem from "./PurchaseItem";
import pharmaImg from "../../assets/images/pharma.jpg";

export default function Store() {
  return (
    <>
      <Tabs tabs={["Subscriptions", "Bundles", "Packs"]}></Tabs>
      <div id="container" className="p-10">
        <PurchaseItem img={pharmaImg} label="Pharmacology" />
      </div>
    </>
  );
}
