export default function Ourservices({ children, title, body }) {
  return (
    <div className="px-2 space-y-3">
      <div className="self-start p-2">{children}</div>
      <div className="space-y-1">
        <h1 className="text-xl text-heading">{title}</h1>
        <p className="text-paragraph">{body}</p>
      </div>
    </div>
  );
}
