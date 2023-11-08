export default function ItemImage({ img }) {
  return (
    <img
      className="rounded-t-lg h-[10rem] w-full object-cover"
      src={img}
      alt=""
    />
  );
}
