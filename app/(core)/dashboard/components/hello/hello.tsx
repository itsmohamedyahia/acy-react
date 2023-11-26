"use client";

import WavingIcon from "@/ui/icons/wavingIcon";
import Card from "@/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";

function DashboardHello() {
  const [firstName, setFirstName] = useState("user");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user/firstName");
        if (response.status === 200) {
          setFirstName(response.data);
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return (
    <Card className="flex items-center justify-center gap-2 home__welcome">
      <a href="#" className="block">
        {/* mb-2 align text with icon even after align items center */}
        <h5 className="mb-2 text-2xl font-semibold uppercase dark:text-white">
          Hey, {firstName}
        </h5>
      </a>
      <WavingIcon />
      {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Welcome Back. What's that smell? I smell bravery. That's what I like to
        smell. Buckle up, Legend, and head to the Lobby.
      </p> */}
    </Card>
  );
}

export default DashboardHello;
