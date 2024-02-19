import Image from "next/image";
import mazdaLogo from "../../../../public/assets/CarLogo/Mazda.svg";

export default function CarBrandCard() {
  return (
    <div className="flex bg-light-blue  h-[200px] w-full items-center">
      <div className="flex flex-col p-5 space-y-3 w-full items-center">
        <Image src={mazdaLogo} alt="car-logo" />
        <h1 className="font-bold text-dark-blue text-3xl">Mazda 2</h1>
        <p className="text-xl font-semibold text-dark-blue">1.3 SP Sedan</p>
      </div>
    </div>
  );
}
