import { Link, useNavigate } from "react-router-dom";
import blog_1 from "../../assets/blog-1.png";
import blog_2 from "../../assets/blog-2.png";
import blog_3 from "../../assets/blog-3.png";
import Button from "./button.component";

const selector = [blog_1, blog_2, blog_3];
export default function BlogPreview({ preview, index, id }) {
  const navigate = useNavigate();
  return (
    <div className="max-md:flex-wrap gap-y-10 max-md:w-[500px] max-md:mx-auto flex gap-x-5 pt-[29px] border-t border-[#D6D6D6] max-w-full pb-5 ">
      <img src={selector[index]} alt="" className="aspect-video max-md:flex-grow self-start w-2/5 object-cover" />
      <div className="text-center">
        <svg className="w-10 block mx-auto" viewBox="0 0 53 58" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <h1 className="text-2xl font-semibold text-secondary">{preview.date.day}</h1>
        <p className="text-paragraph text-sm">{preview.date.month}</p>
      </div>
      <div className="basis-full md:border-s border-[#D6D6D6] min-h-[200px] md:px-5 space-y-3">
        <Link to={"/blogs/" + preview._id} className="text-xl md:text-2xl hover:text-primary">
          {preview.title}
        </Link>
        <p className="text-paragraph">{preview.summary}</p>
        <Button variation="default" onClick={() => navigate("/blogs/" + id)}>
          Read More
        </Button>
      </div>
    </div>
  );
}
