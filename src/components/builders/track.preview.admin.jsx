import { Link } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import { format } from "date-fns";

export default function TrackerPreview({ tracker, handleDelete }) {
  console.log(tracker);
  return (
    <div className="bg-white rounded-lg p-5 col-span-1">
      <p> {tracker.id} </p>
      <h1 className="font-medium">
        Name : <span className="font-normal">{tracker.name}</span>
      </h1>
      <h1 className="font-medium">
        Phone : <span className="font-normal">{tracker.phone}</span>
      </h1>
      <h1 className="font-medium">
        Dropped on : <span className="font-normal">{format(tracker.office1_date, "do MMMM yyyy")} </span>
      </h1>
      <span>Delivery date : {format(tracker.loc2_date, "do MMMM yyyy")} </span>
      <div className="flex justify-between py-2">
        <div className="flex gap-x-2">
          <Link to={"/admin/edit/" + tracker.id} className="underline block hover:text-secondary/80 text-secondary">
            Edit
          </Link>
          <Link to={"/track/" + tracker.id} className="underline block hover:text-primary/80 text-primary">
            Preview
          </Link>
        </div>
        <button onClick={() => handleDelete(tracker.id)} className="underline block text-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}

export const SkeletonTrackerPreview = function () {
  return (
    <div className="bg-white rounded-lg p-5 col-span-1 space-y-3">
      <Skeleton className="h-4 w-full" />
      <h1 className="flex justify-stretch gap-x-3">
        <Skeleton className="h-4 basis-[100px] " /> <Skeleton className="h-4 w-full" />
      </h1>
      <h1 className="flex justify-stretch gap-x-3">
        <Skeleton className="h-3 basis-[100px] " /> <Skeleton className="h-3 w-full " />
      </h1>
      <h1 className="flex justify-stretch gap-x-3">
        <Skeleton className="h-3 basis-[100px] " /> <Skeleton className="h-3 self-stretch" />
      </h1>
      <div className="flex justify-between py-2">
        <Skeleton className="h-5 w-full " />
      </div>
    </div>
  );
};
