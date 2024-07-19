import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Skeleton } from "../ui/skeleton";
import { isBefore } from "date-fns";
export default function Tracker({ title, track, h1Class, pClass, preview = false }) {
  const isDateBefore = isBefore(track.date, Date.now());
  return (
    <div>
      <div
        className={`ps-5 pb-6 relative text-secondary before:w-1 ${
          isDateBefore ? "before:bg-secondary" : "before:bg-gray-400"
        }  before:absolute before:h-full before:top-0 before:left-0`}
      >
        <div className="absolute top-0 -left-[8px] w-5 h-5 bg-white flex items-center justify-center">
          <span
            className={`rounded-full 
          ${isDateBefore ? "bg-secondary" : "bg-gray-400"}
            block w-[60%] h-[60%]`}
          ></span>
        </div>
        <div className="space-y-2">
          <div>
            {title ? <h1 className="text-lg font-medium"> {title}</h1> : null}
            {isDateBefore ? (
              <p className="uppercase">{track.title} </p>
            ) : preview ? (
              <p className="uppercase">{track.title} </p>
            ) : (
              <p className="uppercase bg-slate-400 py-2 rounded-sm"></p>
            )}
          </div>

          {isDateBefore ? (
            <div className="text-gray-500">
              <p className="uppercase">{track.location} </p>
              <p className={cn(`text-sm ${pClass}`)}>{format(track.date, "MMMM d, yyyy, HH:mm")} </p>
            </div>
          ) : (
            <div className="text-gray-500">
              {preview ? <p className="uppercase">{track.location} </p> : <p className="uppercase bg-slate-400 py-2 rounded-sm"></p>}
              {preview ? (
                <p className={cn(`text-sm ${pClass}`)}>{format(track.date, "MMMM d, yyyy, HH:mm")} </p>
              ) : (
                <p className="uppercase bg-slate-400 py-2 rounded-sm mt-1 max-w-[170px]"></p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const SkeletonTraker = function () {
  return (
    <div className="ps-5 pb-6 relative text-secondary before:w-1 before:h-full before:bg-secondary before:absolute before:top-0 before:left-0">
      <div className="absolute top-0 -left-[8px] w-5 h-5 bg-white flex items-center justify-center">
        <span className="rounded-full bg-secondary block w-[60%] h-[60%]"> </span>
      </div>
      <div className="space-y-2">
        <div>
          <Skeleton className="h-7 w-[200px]" />
        </div>
        <div className="text-gray-500 space-y-4">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
    </div>
  );
};
