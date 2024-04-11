export default function AveragePriceByDistrict({}: {}) {
  return (
    <div className="flex bg-light-blue  h-full w-full">
      <div className="flex flex-col p-5 w-full">
        <div>
          <h2 className="text-2xl font-bold text-dark-blue">ข้อมูลรถรุ่นนี้</h2>
        </div>
        <div className="flex flex-col w-full space-y-2 mt-8">
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              มีนบุรี
            </p>
            <p className="text-lg  font-bold text-dark-blue ">฿480,000</p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              กาญจนาภิเษก
            </p>
            <p className="text-lg  font-bold text-dark-blue">฿470,000</p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              ศรีนครินทร์-เทพารักษ์
            </p>
            <p className="text-lg  font-bold text-dark-blue">฿460,000</p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              เลียบด่วนรามอินทรา-เกษตรนวมินทร์
            </p>
            <p className="text-lg  font-bold text-dark-blue">฿450,000</p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              ปิ่นเกล้า-ถนนบรมราชชนนี
            </p>
            <p className="text-lg  font-bold text-dark-blue ">฿448,000</p>
          </div>
          <hr className="border-white"></hr>
          <div className="flex justify-between">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis">
              บางใหญ่-บางบัวทอง
            </p>
            <p className="text-lg font-bold text-dark-blue">฿445,000</p>
          </div>
          <hr className="border-white"></hr>
          {/* <div className="flex justify-between text-lg font-normal">
            <p className="text-lg font-normal text-dark-blue overflow-hidden whitespace-nowrap text-ellipsis"></p>
            <p className="text-lg font-normal text-dark-blue font-normal"></p>
          </div>
          <hr className="border-white"></hr> */}
        </div>
      </div>
    </div>
  );
}
