export default function Button({ children }) {
  return (
    <button
      className={`bg-secondary block text-white px-10 py-3 w-fit mx-auto my-3 relative overflow-hidden
        after:block after:absolute after:w-[50px] after:h-[50px] after:bg-[#1F2A69] after:rounded-full after:-bottom-[20px] after:-right-[20px] hover:after:left-1/2 hover:after:w-1/2 hover:after:bottom-0 hover:after:rounded-none hover:after:rounded-tl-full`}
    >
      {children}
    </button>
  );
}
