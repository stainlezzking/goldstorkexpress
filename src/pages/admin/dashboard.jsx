import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-5 bg-secondary/20 p-10 mx-auto items-start">
      <div className="bg-white rounded-lg p-5">
        <h1 className="text-font-medium"> Name : John Snow</h1>
        <h1 className="text-font-medium"> Phone : +991 289348043</h1>
        <h1 className="text-font-medium"> Posted on : John Snow</h1>
        <span>Delivery date : 27th July 2024</span>
        <div className="flex justify-between py-2">
          <Link className="underline block hover:text-secondary/80 text-secondary">Edit</Link>
          <Link className="underline block text-red-600">Delete</Link>
        </div>
      </div>
      <div className="bg-white rounded-lg p-5">
        <h1 className="text-font-medium"> Name : John Snow</h1>
        <h1 className="text-font-medium"> Phone : +991 289348043</h1>
        <h1 className="text-font-medium"> Posted on : John Snow</h1>
        <span>Delivery date : 27th July 2024</span>
        <div className="flex justify-between py-2">
          <Link className="underline block hover:text-secondary/80 text-secondary">Edit</Link>
          <Link className="underline block text-red-600">Delete</Link>
        </div>
      </div>
    </div>
  );
}
