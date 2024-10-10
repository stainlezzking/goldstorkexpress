export default function SubTitle({ children, color = "bg-[#041C37]/50" }) {
  return (
    <div className="flex text-white">
      <div className="w-1 bg-primary"></div>
      <p className={`px-2 ${color}`}>{children}</p>
    </div>
  );
}
