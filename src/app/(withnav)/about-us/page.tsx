import Image from "next/image";
import carImage from "../../../../public/assets/AboutUs/CarImg.png";
import carBG from "../../../../public/assets/Landing/CarBg.png";
import AboutUsPage from "@/components/AboutUs/AboutUsPage";

export default function AboutUs() {
  return (
    <div className="flex flex-col pt-[150px] mx-16">
      <h1 className="text-6xl font-sans font-bold text-dark-blue pl-8">
        เกี่ยวกับเรา
      </h1>
      <AboutUsPage />
    </div>
  );
}
