"use client";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { deleteTrackerAction } from "@/app/server/actions";
import { useState } from "react";
export default function TrackerPreview({ tracker }) {
  const [loading, setLoading] = useState(false);
  const deleteTracker = async function () {
    setLoading(true);
    const resp = await deleteTrackerAction(tracker.id);
    setLoading(false);
    toast(resp.message);
  };
  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <span className="animate-spin">
            <svg width="64px" height="64px" viewBox="0 0 16 16" version="1.1" className="fill-primary">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path className="fill-primary" d="M15 8c0 3.9-3.1 7-7 7s-7-3-7-7h-1c0 4 3.6 8 8 8s8-3.6 8-8h-1z"></path>{" "}
              </g>
            </svg>
          </span>
        </div>
      )}
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
            <Link href={"/admin/edit/" + tracker.id} className="underline block hover:text-secondary/80 text-secondary">
              Edit
            </Link>
            <Link href={"/track/" + tracker.id} className="underline block hover:text-primary/80 text-primary">
              Preview
            </Link>
          </div>
          <button onClick={deleteTracker} className="underline block text-red-600">
            Delete
          </button>
        </div>
      </div>
    </>
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
