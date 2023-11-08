import ItemCTA from "./ItemCTA";
import PurchaseItemDesc from "./PurchaseItemDesc";
import ItemImage from "./ItemImage";
import ItemHeading from "./ItemHeading";
import ItemContainer from "./ItemContainer";

export default function PurchaseItem({ label, img }) {
  return (
    <ItemContainer>
      <ItemImage img={img} />
      <div className="p-5">
        <ItemHeading>{label}</ItemHeading>
        <PurchaseItemDesc />
        <div className="flex gap-x-4">
          <ItemCTA bg="primary">Purchase</ItemCTA>
          <ItemCTA bg="secondary">More Info</ItemCTA>
        </div>
      </div>
    </ItemContainer>
  );
}
