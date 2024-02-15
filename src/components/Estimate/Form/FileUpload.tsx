"use client";

import React, { useRef } from "react";
import FormCarIcon from "@/../public/assets/Form/FormCarIcon.svg";
import Image from "next/image";
import FrontUpload from "./ImageUpload/FrontUpload";
import RearUpload from "./ImageUpload/RearUpload";
import SideFrontUpload from "./ImageUpload/SideFrontUpload";
import SideRearUpload from "./ImageUpload/SideRearUpload";

export default function FileUpload() {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = (event: any) => {
    if (hiddenFileInput.current) {
      // This check ensures that hiddenFileInput.current is not null
      hiddenFileInput.current.click();
    }
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      // Process the file here (e.g., set state, upload to a server, etc.)
    } else {
      console.log("No file selected.");
      // Handle the case when no file is selected if needed
    }
  };

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }

    const file = event.target.files[0];

    await fetch("/api/file", {
      method: "POST",
      body: file,
      headers: {
        "Content-Type": file.type,
      },
    });
  }

  return (
    <div className="grid grid-cols-2 w-full h-[85%] gap-[1px]">
      <FrontUpload />
      <RearUpload />
      <SideFrontUpload />
      <SideRearUpload />
    </div>
  );
}
