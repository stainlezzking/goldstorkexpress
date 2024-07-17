import { Link } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";

export default function TrackerPreview() {
  return (
    <div className="bg-white rounded-lg p-5 col-span-1">
      <p>1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed</p>
      <h1 className="text-font-medium"> Name : John Snow</h1>
      <h1 className="text-font-medium"> Phone : +991 289348043</h1>
      <h1 className="text-font-medium"> Posted on : John Snow</h1>
      <span>Delivery date : 27th July 2024</span>
      <div className="flex justify-between py-2">
        <Link className="underline block hover:text-secondary/80 text-secondary">Edit</Link>
        <Link className="underline block text-red-600">Delete</Link>
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
