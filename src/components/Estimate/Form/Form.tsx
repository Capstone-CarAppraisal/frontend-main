"use client";

import { useState, useReducer } from "react";
import EstimateByDataForm from "./First/EstimateByDataForm";
import byDataIcon from "@/../public/assets/EstimateOption/ClassifyByData.svg";
import byPicIcon from "@/../public/assets/EstimateOption/ClassifyByPic.svg";
import byVINIcon from "@/../public/assets/EstimateOption/ClassifyByVin.svg";
import Image from "next/image";
import NextButton from "@/components/Shared/Button/NextButton";
import FileUpload from "./FileUpload";

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
        <div className="flex justify-center w-full h-[1000px] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              เพิ่มภาพรถยนต์
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center ">
              <FileUpload />
              <div className="absolute bottom-5 space-x-10">
                <NextButton handleClick={nextStep} />
              </div>
            </div>
          </div>
        </div>
      )}
      {step !== 0 && (
        <EstimateByDataForm
          prevStep={prevStep}
          nextStep={nextStep}
          step={step}
        />
      )}
    </main>
  );
}
