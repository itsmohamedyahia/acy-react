"use client";

import image from "@/images/logout/path-waving-gas.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/login");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <Image
        className="w-[35%] sm:w-[85%] rounded-lg shadow"
        src={image}
        alt="character waving goodbye"
      />
    </div>
  );
}
