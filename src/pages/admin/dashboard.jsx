import TrackerPreview, { SkeletonTrackerPreview } from "@/components/builders/track.preview.admin";
import { getTrackersThunk } from "@/redux/reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  const obj = useSelector((state) => state.trackers);
  const { data, isLoading, error } = obj;
  useEffect(function () {
    dispatch(getTrackersThunk());
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-secondary/20 p-10 mx-auto items-start w-full max-w-[800px]">
      {isLoading &&
        Array(5)
          .fill(null)
          .map((_, i) => <SkeletonTrackerPreview key={i} />)}
      {!data.length && !error ? (
        <div className="h-full col-span-full flex items-center flex-col justify-center">
          <h1 className="text-lg"> You have no Previous tracker </h1>
          <Link to="/admin/newpackage" className="text-secondary underline">
            Create new Package
          </Link>
        </div>
      ) : error ? (
        <div className="h-full col-span-full flex items-center flex-col justify-center">
          <h1 className="text-lg"> An error Occured.. {error} </h1>
          <button onClick={() => dispatch(getTrackersThunk(true))} className="text-secondary underline">
            retry
          </button>
        </div>
      ) : (
        data.map((tracker, i) => <TrackerPreview key={i} tracker={tracker} />)
      )}
    </div>
  );
}
