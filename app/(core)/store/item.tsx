import ItemImage from "./itemImage";
import ItemHeading from "./itemHeading";
import ItemContainer from "./itemContainer";

export default function Item({ img, label, clickable = "#" }) {
  return (
    <ItemContainer>
      <ItemImage img={img} />
      <div className="p-5">
        <a href={clickable}>
          <ItemHeading>{label}</ItemHeading>
        </a>
      </div>
    </ItemContainer>
  );
}
