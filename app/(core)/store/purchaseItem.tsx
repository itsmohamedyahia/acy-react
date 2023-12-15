import ItemCTA from "./itemCTA";
import PurchaseItemDesc from "./purchaseItemDesc";
import ItemImage from "./itemImage";
import ItemHeading from "./itemHeading";
import ItemContainer from "./itemContainer";

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
