export default function Landing2() {
  return (
    <div className="snap-center mx-32 h-full grid grid-cols-3 content-center font-sans">
      <div className="flex justify-center">
        <div className="flex flex-col justify-between items-center max-w-[300px] w-full h-[300px] border border-8 border-blue py-4 px-14">
          <p className="text-2xl text-dark-blue font-bold text-center">
            ประเมินจาก ข้อมูลรถในตลาด
          </p>

          <p className="text-5xl font-bold text-rose">4,133</p>
          <p className="text-2xl text-dark-blue font-bold">คัน</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col justify-between items-center max-w-[300px] w-full h-[300px] border border-8 border-blue py-4">
          <p className="text-2xl text-dark-blue font-bold text-center">
            อัพเดตข้อมูลทุก
          </p>

          <p className="text-5xl font-bold text-rose">7</p>
          <p className="text-2xl text-dark-blue font-bold">วัน</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-between items-center max-w-[300px] w-full h-[300px] border border-8 border-blue py-4">
          <p className="text-2xl text-dark-blue font-bold text-center">
            ด้วยความแม่นยำถึง
          </p>

          <p className="text-5xl font-bold text-rose">97.5</p>
          <p className="text-2xl text-dark-blue font-bold">เปอร์เซนต์*</p>
        </div>
      </div>
    </div>
  );
}
