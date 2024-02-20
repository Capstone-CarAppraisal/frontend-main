import Image from "next/image";
import mazdaLogo from "../../../../../public/assets/CarLogo/Mazda.svg";

export default function CarBrandCard({
  brand,
  model,
  subModel,
}: {
  brand: string;
  model: string;
  subModel: string;
}) {
  return (
    <div className="flex bg-light-blue  h-[200px] w-full items-center">
      <div className="flex flex-col p-5 space-y-3 w-full items-center">
        <Image src={mazdaLogo} alt="car-logo" />
        <h1 className="font-bold text-dark-blue text-3xl overflow-hidden whitespace-nowrap text-ellipsis">
          {brand} {model}
        </h1>
        <p className="text-xl font-semibold text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis w-full text-center">
          {subModel}
        </p>
      </div>
    </div>
  );
}
