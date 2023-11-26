import Image from "next/image";

export default function ItemImage({ img }) {
  return (
    <Image
      className="rounded-t-lg h-[10rem] w-full object-cover"
      src={img}
      alt=""
    />
  );
}
