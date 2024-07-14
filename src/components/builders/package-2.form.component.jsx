import Button from "./button.component";
import Tracker from "./track.component";
import schemaFormat from "@/components/utilities";

export const Form2 = function ({ handleForm2Submit, currentState }) {
  const tracker = schemaFormat(currentState);
  console.log(tracker);
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
      <Button variation="default" className="w-full max-w-[400px] rounded-xl">
        Create
      </Button>
    </main>
  );
};
