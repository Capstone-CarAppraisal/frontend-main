import Image from "next/image";
import CarImage from "../../../../public/assets/CarImage/Mazda2/1.3SPSedan.png";
export default function CarImageCard() {
  return (
    <div className="flex bg-light-blue  h-[200px] w-full items-center">
      <div className="relative w-full h-[100%]">
        <Image src={CarImage} alt="car-image" layout="fill" />
      </div>
    </div>
  );
}
