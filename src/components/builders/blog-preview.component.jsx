import { Link } from "react-router-dom";
import image1 from "../../assets/image1.png";
export default function BlogPreview({ children }) {
  return (
    <div className="grid grid-cols-2 py-3 border-t border-[#D6D6D6] ">
      <div className="col-span-1 flex justify-end gap-x-5 p-5">
        <img src={image1} alt="" className="w-[300px] object-cover" />
        <div className="text-center">
          <svg className="w-14 block mx-auto" viewBox="0 0 53 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="11" y="28" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="11" y="41" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="24" y="28" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="24" y="41" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="36" y="28" width="6" height="6" fill="#FFD550" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="36" y="41" width="6" height="6" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M52 20H1V9C1 7.34315 2.34315 6 4 6H49C50.6569 6 52 7.34315 52 9V20Z" fill="#FFD550" />
            <path
              d="M50 5.66699H3.33333C2.04467 5.66699 1 6.71166 1 8.00033V54.667C1 55.9557 2.04467 57.0003 3.33333 57.0003H50C51.2887 57.0003 52.3333 55.9557 52.3333 54.667V8.00033C52.3333 6.71166 51.2887 5.66699 50 5.66699Z"
              stroke="#1C1F35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M40.667 1V10.3333" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.667 1V10.3333" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 19.667H52.3333" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 className="text-4xl font-semibold text-secondary">18</h1>
          <p className="text-paragraph">September</p>
        </div>
      </div>
      <div className="col-span-1 border-s border-[#D6D6D6] min-h-[200px] p-5 space-y-3">
        <Link className="text-2xl hover:text-primary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eius asperiores </Link>
        <p className="text-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae eveniet consequatur et. Possimus, facere voluptatem! Sunt assumenda
          consequatur natus neque molestias esse, soluta officia id?
        </p>
        <ul className="list-disc ps-6">
          <li>Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
          <li>Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
        </ul>
      </div>
    </div>
  );
}
