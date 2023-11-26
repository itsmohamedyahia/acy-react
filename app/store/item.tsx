import ItemImage from "./ItemImage";
import ItemHeading from "./ItemHeading";
import ItemContainer from "./ItemContainer";

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
