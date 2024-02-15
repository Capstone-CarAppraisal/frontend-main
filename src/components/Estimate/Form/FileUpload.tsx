"use client";

import React, { useRef, useState } from "react";
import FormCarIcon from "@/../public/assets/Form/FormCarIcon.svg";
import Image from "next/image";
import FrontUpload from "./ImageUpload/FrontUpload";
import RearUpload from "./ImageUpload/RearUpload";
import SideFrontUpload from "./ImageUpload/SideFrontUpload";
import SideRearUpload from "./ImageUpload/SideRearUpload";

export default function FileUpload({
  handleSubmit,
}: {
  handleSubmit: Function;
}) {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const [frontData, setFrontData] = useState<File>();
  const [rearData, setRearData] = useState();
  const [sideFrontData, setSideFrontData] = useState();
  const [sideRearData, setSideRearData] = useState();


  const handleFrontData = (data: File) => {
    setFrontData(data);
    //console.log(frontData);
  };
  const handleRearData = (data: any) => {
    setRearData(data);
  };
  const handleSideFrontData = (data: any) => {
    setSideFrontData(data);
  };
  const handleSideRearData = (data: any) => {
    setSideRearData(data);
  };

  /*   async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
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
  } */

  return (
    <div className="grid grid-cols-2 w-full h-[85%] gap-[1px]">
      <FrontUpload handleFrontImage={handleFrontData} />
      <RearUpload handleRearImage={handleRearData} />
      <SideFrontUpload handleSideFrontImage={handleSideFrontData} />
      <SideRearUpload handleSideRearImage={handleSideRearData} />
    </div>
  );
}
