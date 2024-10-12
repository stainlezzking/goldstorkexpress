"use client";
import { useState } from "react";
// import createNewUser from "./firestore/firestore";
// import { ToastContainer } from "react-toastify";
import { Form1 } from "@/components/builders/package-1.form.component";
import { Form2 } from "@/components/builders/package-2.form.component";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createTrackerAction } from "@/app/server/actions";

function NewPackage() {
  const [position, setPosition] = useState(0);
  const [form1, setForm1] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleForm1Submit = function (data) {
    setForm1(data);
    setPosition(1);
    return;
  };
  const handleForm2Submit = async function () {
    setLoading(true);
    const result = await createTrackerAction({ ...form1, createdAt: Date.now() });
    if (result.success) return router.push("/track/" + result.id);
    return toast("An Error occured, check the console or contact the developer");
  };

  return (
    <>
      <div className={"grid grid-cols-2 mb-5 md:mb-10 gap-x-1 mt-10 " + (position > 1 ? "hidden" : null)}>
        <div id="form1" className="h-[2px] col-span-1 rounded-full bg-primary"></div>
        <div id="form2" className={"h-[2px] col-span-1 rounded-full " + (position > 0 ? "bg-primary" : "bg-[#66666614]")}></div>
      </div>
      <div className="container mx-auto px-5 max-w-[1200px]">
        <button className={"text-lg flex py-5 items-center " + (position != 1 ? "hidden" : null)} onClick={() => setPosition(0)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" className="w-7 icon" viewBox="0 0 1024 1024" fill="#000000" version="1.1">
            <path
              d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
              fill=""
            />
          </svg>
          Back
        </button>
        <div className="py-10">
          {position == 0 ? (
            <Form1 currentState={form1} handleForm1Submit={handleForm1Submit} />
          ) : (
            <Form2 isLoading={loading} currentState={form1} handleForm2Submit={handleForm2Submit} />
          )}
        </div>
      </div>
    </>
  );
}

export default NewPackage;
