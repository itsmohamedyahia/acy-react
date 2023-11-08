import ItemImage from "./ItemImage";
import ItemHeading from "./ItemHeading";
import ItemContainer from "./ItemContainer";

export default function Item({ img, label }) {
  return (
    <ItemContainer>
      <ItemImage img={img} />{" "}
      <div className="p-5">
        <a href="#">
          <ItemHeading>{label}</ItemHeading>
        </a>
      </div>
    </ItemContainer>
  );
}
