import { getAllTracker } from "@/app/server/trackers";
import TrackerPreview from "@/components/builders/track.preview.admin";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

export default async function Dashboard() {
  noStore();
  const data = await getAllTracker();
  if (!data.success) return <div> {data.message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bg-secondary/20 p-10 mx-auto items-start w-full max-w-[800px]">
      {!data.data.length ? (
        <div className="h-full col-span-full flex items-center flex-col justify-center">
          <h1 className="text-lg"> You have no Previous tracker </h1>
          <Link to="/admin/newpackage" className="text-secondary underline">
            Create new Package
          </Link>
        </div>
      ) : (
        data.data.map((tracker, i) => <TrackerPreview key={i} tracker={tracker} />)
      )}
    </div>
  );
}
