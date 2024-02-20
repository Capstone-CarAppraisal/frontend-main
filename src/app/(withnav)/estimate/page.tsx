import Form from "@/components/Estimate/Form/EstimateForm";
import toast, { Toaster } from "react-hot-toast";

export default function EstimatePage() {
  return (
    <main>
      <>
        <div className="mt-[150px]">
          <Toaster />
          <Form />
        </div>
      </>
    </main>
  );
}
