export default function SubTitle({ children }) {
  return (
    <div className="flex">
      <div className="w-1 bg-primary"></div>
      <p className="px-2 bg-[#041C37]/50 text-white">{children}</p>
    </div>
  );
}
