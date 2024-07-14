import { useState } from "react";
// import createNewUser from "./firestore/firestore";
// import { ToastContainer } from "react-toastify";
import { Form1 } from "@/components/builders/package-1.form.component";
import { Form2 } from "@/components/builders/package-2.form.component";

const x = {
  loc1_date: "2024-07-14T20:29",
  loc1_location: "first location",
  loc1_name: "name of facility",
  loc2_date: "2024-07-14T20:30",
  loc2_location: "name of Facility",
  loc2_name: "second location",
  office1_date: "2024-07-14T20:29",
  office2_date: "2024-07-14T20:29",
  office_loc: "office location",
};

function NewPackage() {
  const [position, setPosition] = useState(1);
  const [form1, setForm1] = useState(x);
  // const [form2, setForm2] = useState({});
  const [loading, setLoading] = useState(false);

  const handleCreate = async function (user) {
    alert("this is supposed to create a user");
  };
  const handleForm1Submit = function (data) {
    setForm1(data);
    setPosition(1);
    return;
  };
  const handleForm2Submit = function (data) {
    setForm2(data);
    // make post request to save data
    setLoading(true);
    const { name } = form1;
    const rand = Math.ceil(Math.random() * 1000000);
    const code =
      name.split(" ").length > 1
        ? name.split(" ")[0][0].toUpperCase() + name.split(" ")[1][0].toUpperCase() + rand
        : name.split(" ")[0][0].toUpperCase() + "A" + rand;
    // it is in this form that it switches to position 2
    handleCreate({ ...form1, ...data, code });
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
            <Form2 currentState={form1} handleForm2Submit={handleForm2Submit} />
          )}
        </div>
      </div>
    </>
  );
}

export default NewPackage;
