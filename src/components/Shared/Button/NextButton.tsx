import Image from "next/image";
import React, { MouseEventHandler } from "react";
import NextArrow from "../../../../public/assets/Nav/NextArrow.svg";

export default function NextButton({
  handleClick,
  isDisabled,
}: {
  handleClick: MouseEventHandler;
  isDisabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!isDisabled}
      className="py-2 px-3 w-[13vw] flex items-center justify-center  text-lg font-semibold rounded-3xl border border-transparent bg-rose text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
    >
      <span className="flex items-center gap-x-5">
        <span>ต่อไป</span>
        <Image src={NextArrow} alt="next-arrow" className="w-6 h-6" />
      </span>
    </button>
  );
}
