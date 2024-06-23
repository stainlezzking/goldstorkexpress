import { twMerge } from "tailwind-merge";

const variations = {
  default: "bg-secondary after:bg-[#1F2A69]  after:h-[50px] ",
  primary: "text-black font-medium bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] after:bg-[#1F2A69]  after:h-[50px] ",
};

export default function Button({ children, variation }) {
  return (
    <button
      className={twMerge(`block text-white px-10 py-3 w-fit mx-auto my-3 relative overflow-hidden ${variation ? variations[variation] : "default"}
        after:block after:absolute after:w-[50px] after:rounded-full after:-bottom-[20px] after:-right-[20px] hover:after:left-1/2 hover:after:w-1/2 hover:after:bottom-0 hover:after:rounded-none hover:after:rounded-tl-full`)}
    >
      {children}
    </button>
  );
}
