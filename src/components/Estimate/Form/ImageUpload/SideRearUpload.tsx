"use client";

import React, { useRef, useState } from "react";
import FormCarIcon from "@/../public/assets/Form/FormCarIcon.svg";
import Image from "next/image";
import DeleteImageIcon from "@/../public/assets/Form/DeleteImageIcon.png";

export default function FrontUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>();

  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = (event: any) => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedImage(file);
      console.log(file);
      console.log("No file selected.");
    }
  };

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }
  }

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative h-full">
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center border border-4 border-dashed border-grey space-y-8 h-full w-full"
      >
        <div className="absolute left-0 top-0 bg-blue text-2xl text-white font-normal px-8 py-3 z-10">
          มุมเฉียงจากด้านหลัง
        </div>
        {selectedImage ? (
          <div className="flex w-full h-[200px]">
            <Image
              src={URL.createObjectURL(selectedImage)}
              alt="Thumb"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            <button onClick={removeSelectedImage}>
              <Image
                src={DeleteImageIcon}
                alt="delete-img-icon"
                width={40}
                height={40}
                className="absolute top-3 right-2"
              />
            </button>
          </div>
        ) : (
          <>
            <Image src={FormCarIcon} alt="form-car-icn" className=""></Image>
            <p className="text-2xl text-grey font-normal">
              วางรูปของคุณที่นี่หรือคลิกเพื่ออัพโหลดรูป
            </p>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              ref={hiddenFileInput}
              onChange={handleFileChange}
            ></input>
          </>
        )}
      </button>
    </div>
  );
}
