import Button from "./button.component";
import Tracker from "./track.component";
import schemaFormat from "@/components/utilities";

export const Form2 = function ({ handleForm2Submit, currentState, isLoading }) {
  const tracker = schemaFormat(currentState);
  return (
    <main>
      <div className="bg-secondary py-10">
        <div className="text-lg text-center font-medium text-white"> PREVIEW </div>
      </div>
      <div className="max-w-[400px] mx-auto mt-10">
        {tracker.map((track, i) => (
          <Tracker key={i} track={track} h1Class="text-lg" pClass="text-base" />
        ))}
        <div className="ps-5 pb-6 relative text-secondary">
          <div className="absolute top-0 -left-[8px] w-5 h-5 bg-white flex items-center justify-center">
            <span className="rounded-full bg-secondary block w-[60%] h-[60%]"> </span>
          </div>
          <div className="space-y-2">
            <div>
              <h1 className="text-smfont-medium ">Start </h1>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={handleForm2Submit}
        variation="default"
        disabled={isLoading}
        className="w-full max-w-[400px] disabled:after:hidden disabled:cursor-not-allowed disabled:bg-gray-600 rounded-xl disabled:flex gap-x-1 items-center disabled:justify-center"
      >
        {isLoading && (
          <svg className="w-6 h-6 animate-spin" viewBox="-1.6 -1.6 19.20 19.20" fill="none" transform="rotate(90)">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.064"></g>
            <g id="SVGRepo_iconCarrier">
              <g fill="white" fillRule="evenodd" clipRule="evenodd">
                <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2"></path>{" "}
                <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>{" "}
              </g>
            </g>
          </svg>
        )}
        Create
      </Button>
    </main>
  );
};
