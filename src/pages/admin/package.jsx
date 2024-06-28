import { Card } from "@/components/ui/card";

import { useReducer, useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Step1, Step2 } from "@/components/builders/admin.package.steps";

/*

GSE in possesion of item,
departed post office,
Arrived at
*/
export default function NewPackage() {
  const [position, setPosition] = useState(1);
  const [information, setInformation] = useState({});
  const changePosition = function (e) {
    if (position > e) {
      setPosition(e);
    }
  };
  const addInformation = function (e, pass) {
    const copyState = { ...information, ...e };
    setPosition(copyState);
    if (!pass) {
      return setPosition(1);
    }
    console.log("should submit the form from her");
  };
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Card className="w-[600px] shadow-md p-5">
          <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li
              onClick={() => changePosition(0)}
              className={`flex md:w-full items-center ${position > 0 ? "cursor-pointer" : ""} ${
                position == 0 ? "text-blue-600 dark:text-blue-500" : ""
              } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
            >
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {position == 0 ? (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                ) : (
                  <span className="me-2">1</span>
                )}
                Registeration <span className="hidden sm:inline-flex sm:ms-2">Info</span>
              </span>
            </li>
            <li
              onClick={() => changePosition(1)}
              className={`flex md:w-full items-center  ${position > 1 ? "cursor-pointer" : ""} ${
                position == 1 ? "text-blue-600 dark:text-blue-500" : ""
              } sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}
            >
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {position == 1 ? (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                ) : (
                  <span className="me-2">2</span>
                )}
                Delivery <span className="hidden sm:inline-flex sm:ms-2">Info</span>
              </span>
            </li>
          </ol>
          {position == 0 ? <Step1 addInfo={addInformation} /> : <Step2 addInfo={addInformation} />}
        </Card>
      </div>
    </>
  );
}
