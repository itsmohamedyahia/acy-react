import image from "../../assets/images/renovation & Construction Services Your Story.png";
import Image from "next/image";
// import { css } from "@emotion/react";
// import styled from "@emotion/styled";

export default function AnalyticsPage() {
  return (
    <div className="flex w-full h-full justify-items-end">
      <h1 className="ml-[6rem] text-[4rem] self-center font-semibold">
        Under Construction
      </h1>
      <Image
        className="w-[50%] ml-auto mt-auto block"
        alt="under construction"
        src={image}
      />
    </div>
  );
}
