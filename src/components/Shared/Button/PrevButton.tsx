import React, { MouseEventHandler } from "react";

export default function PrevButton({
  handleClick,
}: {
  handleClick: MouseEventHandler;
}) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="py-2 px-3 w-[13vw] flex items-center justify-center  text-lg font-semibold rounded-3xl border border-transparent bg-dark-blue text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
    >
      ย้อนกลับ
    </button>
  );
}
