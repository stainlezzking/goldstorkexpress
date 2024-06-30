import { cn } from "@/lib/utils";

export default function Whatwedo({ children, title, body, className }) {
  return (
    <div className={cn(` md:flex gap-x-4 ${className}`)}>
      <div className="self-start p-2">{children}</div>
      <div className="border-s border-s-[#D8D8D8] space-y-4 md:space-y-6 ps-3 flex flex-col justify-between">
        <h1 className="text-xl md:text-2xl lg:text-heading">{title}</h1>
        <p className="text-paragraph">{body}</p>
      </div>
    </div>
  );
}
