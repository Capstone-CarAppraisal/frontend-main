import Link from "next/link";
import questionIcon from "@/../public/assets/Nav/questionIcon.svg";
import moneyImage from "@/../public/assets/Landing/Money.svg";
import Image from "next/image";

export default function Landing3() {
  return (
    <div className="grid grid-cols-6 gap-x-4 snap-center h-screen font-sans content-center px-24">
      <div className="col-span-3">
        <div className="flex justify-center ">
          <Image src={moneyImage} alt="money-img" />
        </div>
      </div>
      {/* End Col */}
      <div className="col-span-3 space-y-8">
        <h2 className="block text-5xl font-normal text-dark-blue pr-10 leading-normal">
          ใช้งานได้ <span className="font-bold">ง่าย</span> ได้ผล
          รวดเร็วภายในไม่กี่ขั้นตอน
        </h2>

        <Link href="/estimate">
          <button
            type="button"
            className="flex flex-row h-[98px] mt-12 py-3 px-12 items-center gap-x-2 font-bold text-4xl rounded-2xl bg-blue text-white"
          >
            วิธีใช้งาน
            <span className="pl-2">
              <Image
                src={questionIcon}
                alt="question-icon"
                width={37}
                height={37}
              ></Image>
            </span>
          </button>
        </Link>
      </div>
      {/* End Col */}
    </div>
  );
}
