import Tabs from "@/ui/tabs/tabs";
import PurchaseItem from "./purchaseItem";
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
