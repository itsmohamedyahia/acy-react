import { FormEvent } from "react";

export default async function comAuthData(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const email = formData.get("email");
  const passwd = formData.get("passwd");
  const body = JSON.stringify({ email, passwd });

  try {
    const response = await fetch("/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Set content type to JSON
      },
      body: body
    });
    console.log(response);

    if (response.status == 200) {
      const data = await response.json(); // Parse response JSON
      if (data === "SUCCESS") {
        return true;
      }
      console.log(data); // Handle the response data
    } else {
      console.error("Error creating user:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return false;
}
