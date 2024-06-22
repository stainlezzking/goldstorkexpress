export default function Whatwedo({ children, title, body }) {
  return (
    <div className="flex gap-x-4">
      <div className="self-start p-2">{children}</div>
      <div className="border-s border-s-[#D8D8D8] space-y-6 ps-3 flex flex-col justify-between">
        <h1 className="text-2xl text-heading">{title}</h1>
        <p className="text-paragraph">{body}</p>
      </div>
    </div>
  );
}
