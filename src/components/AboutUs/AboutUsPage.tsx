import Image from "next/image";
import carImage from "../../../public/assets/AboutUs/CarImg.png";
import carBG from "../../../public/assets/Landing/CarBg.png";

export default function AboutUsPage() {
  return (
    <div className="grid grid-cols-6 gap-x-10 font-sans content-center px-8 mt-16">
      <div className="col-span-3">
        <div className="relative right-[8%] top-[10px]">
          <div className="flex justify-center ">
            <Image
              id="rotated"
              src={carBG}
              width={350}
              height={350}
              alt="car-bg"
            />
            <Image
              src={carImage}
              width={500}
              alt="car-img"
              className="absolute top-10"
            />
          </div>
        </div>
      </div>
      {/* End Col */}
      <div className="col-span-3">
        <div className="flex flex-col space-y-4 pr-4">
          <div>
            <p className="block text-2xl font-normal text-dark-blue leading-normal">
              <span className="font-bold">RACAR </span>
              เป็นโปรเจ็คจากนิสิตคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์
              จุฬาลงกรณ์มหาวิทยาลัย
              มีวัตถุประสงค์ที่จะทำการศึกษาการประเมินราคารถยนต์
              โดยใช้ข้อมูลจากตลาดมาทำ AI เพื่อประเมินราคารถยนต์
              ในกลุ่มมือสองขึ้นไปให้ได้ราคาที่เหมาะสมกับการวางขาย
              ในตลาดมากที่สุด
            </p>
          </div>
          <div>
            <p className="block text-2xl font-normal text-dark-blue leading-normal">
              โดย
              <span className="font-bold"> RACAR </span>
              เป็นโปรเจ็คต้นแบบที่ทำการทดลองกับรถมาสด้า
              ว่าสามารถประเมินราคารถยนต์ให้เหมาะสมกับตลาดด้วย AI
              ดีกว่าการใช้ข้อมูลทางสถิติประเมินหรือไม่
            </p>
          </div>
        </div>
      </div>
      {/* End Col */}
    </div>
  );
}
