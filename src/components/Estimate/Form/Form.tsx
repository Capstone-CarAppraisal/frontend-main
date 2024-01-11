"use client";

import { useState, useReducer } from "react";
import EstimateByDataForm from "./First/EstimateByDataForm";
import byDataIcon from "@/../public/assets/EstimateOption/ClassifyByData.svg";
import byPicIcon from "@/../public/assets/EstimateOption/ClassifyByPic.svg";
import byVINIcon from "@/../public/assets/EstimateOption/ClassifyByVin.svg";
import Image from "next/image";

export default function Form() {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>();
  const [activeButton, setActiveButton] = useState(null);

  const [formData, setFormData] = useState({
    step1: { field1: "", field2: "", field3: "" },
    step2: {
      /* fields for step 2 */
    },
    // Add more steps as needed
  });

  const convertIDtoSVG = (id: string) => {
    switch (id) {
      case "1":
        return byDataIcon;
      case "2":
        return byPicIcon;
      case "3":
        return byVINIcon;
      default:
        return "";
    }
  };

  const nextStep = (step?: any, data?: any) => {
    setFormData({ ...formData, [step]: data });
    setStep((prevStep) => prevStep + 1);
    // Move to the next step logic
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const handleClick = (buttonNumber: any) => {
    setActiveButton(activeButton === buttonNumber ? null : buttonNumber);
    setSelectedOption(buttonNumber);
  };

  const options = [
    {
      id: "1",
      name: "กรอกด้วยตนเอง",
      value: "1",
    },
    {
      id: "2",
      name: "จำแนกจากรูป",
      value: "2",
    },
    {
      id: "3",
      name: "ถอดรหัส VIN",
      value: "3",
    },
  ];

  return (
    <main>
      <div className="mb-2 mx-12 font-sans">
        <div>
          <ul className="relative flex justify-center gap-0">
            <li className="flex items-center justify-center gap-x-2 shrink basis-0 flex-1 group">
              <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                <span
                  className={`w-10 h-10 flex justify-center items-center flex-shrink-0 text-xl font-bold ${
                    step === 0 || step === 1
                      ? "bg-dark-blue text-white"
                      : "bg-white text-dark-blue border-4 border-[#BCBCBC]"
                  }  font-bold rounded-full`}
                >
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    1
                  </span>
                </span>
                <span className="ms-2  text-xl font-normal text-dark-blue">
                  ลักษณะภายนอก
                </span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-x-2 shrink basis-0 flex-1 group">
              <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                <span
                  className={`w-10 h-10 flex justify-center items-center flex-shrink-0 text-xl font-bold ${
                    step === 2
                      ? "bg-dark-blue text-white"
                      : "bg-white text-dark-blue border-4 border-[#BCBCBC]"
                  }  font-bold rounded-full`}
                >
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    2
                  </span>
                </span>
                <span className="ms-2 text-xl font-normal text-dark-blue">
                  ลักษณะภายใน
                </span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-x-2 shrink basis-0 flex-1 group">
              <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                <span
                  className={`w-10 h-10 flex justify-center items-center flex-shrink-0 text-xl font-bold ${
                    step === 3
                      ? "bg-dark-blue text-white"
                      : "bg-white text-dark-blue border-4 border-[#BCBCBC]"
                  }  font-bold rounded-full`}
                >
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    3
                  </span>
                </span>
                <span className="ms-2  text-xl font-normal text-dark-blue">
                  ผลการประเมิน
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {step === 0 && (
        <div className="flex justify-center w-full h-[65vh] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="bg-dark-blue font-bold text-white text-xl w-fit px-5 py-3">
              เลือกวิธีระบุลักษณะภายนอกของรถยนต์
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center items-center">
              <div className="flex flex-row justify-center space-x-20 mb-20 w-full">
                {options.map((option, index) => (
                  <button
                    type="button"
                    onClick={() => handleClick(option.value)}
                    className={`py-2 px-3 flex flex-col w-[20vw] h-[35vh] items-center justify-center gap-x-2 text-2xl text-black text-center font-bold drop-shadow-2xl  border border-transparent  ${
                      activeButton === option.value
                        ? "shadow-2xl shadow-dark-blue"
                        : ""
                    } bg-white text-dark-blue `}
                    key={index}
                  >
                    <Image
                      src={convertIDtoSVG(option.id)}
                      alt="data"
                      width={144}
                      height={144}
                      className="mb-8"
                    />
                    {option.name}
                  </button>
                ))}
              </div>
              <div className="absolute bottom-5 space-x-10">
                <button
                  type="button"
                  onClick={() => nextStep()}
                  disabled={!activeButton}
                  className="py-2 px-3 w-[9vw] h-[50px] items-center gap-x-2 text-lg text-center font-semibold rounded-3xl border border-transparent bg-rose text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                >
                  ถัดไป
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedOption === "1" && step !== 0 && activeButton !== null && (
        <EstimateByDataForm
          prevStep={prevStep}
          nextStep={nextStep}
          step={step}
        />
      )}
    </main>
  );
}
