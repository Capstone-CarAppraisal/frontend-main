import Link from "next/link";
import React, { useEffect } from "react";
import carImage from "@/../public/assets/Landing/Car.png";
import carBG from "@/../public/assets/Landing/CarBg.png";
import Image from "next/image";
import styles from "./Landing1.module.css";

export default function Landing1() {
  return (
    <div className="grid grid-cols-7 gap-x-4 snap-center h-screen font-sans content-center px-24">
      <div className="col-span-3 space-y-8">
        <p className="mt-3 text-2xl text-rose font-extrabold">
          ด้วยเทคโนโลยี AI สุดล้ำ
        </p>
        <h1 className="block text-8xl font-bold text-dark-blue">
          ประเมินราคารถยนต์
        </h1>
        <p className="mt-3 text-2xl text-black">
          ไม่ต้องรู้ข้อมูลละเอียดก็ประเมินได้จากภาพถ่าย
          ด้วยการนำข้อมูลจากตลาดมาใช้ในการช่วย ประเมินราคา
        </p>
        <Link href="/estimate">
          <button
            type="button"
            className="h-[98px] mt-12 py-3 px-12 items-center gap-x-2 font-bold text-4xl rounded-2xl bg-blue text-white"
          >
            ประเมินราคา
          </button>
        </Link>
      </div>
      {/* End Col */}
      <div className="col-span-4">
        <div className="relative left-[100px] top-[10px]">
          <div className="flex justify-center ">
            <Image
              id="rotated"
              src={carBG}
              alt="car-bg"
              className={styles.rotated}
            />
            <Image
              src={carImage}
              width={700}
              alt="car-img"
              className="absolute top-10"
            />
          </div>
        </div>
      </div>
      {/* End Col */}
    </div>
  );
}
