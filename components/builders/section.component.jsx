import { twMerge } from "tailwind-merge";
export default function Section({ children, className, id }) {
  return (
    <section id={id || ""} className={twMerge(`py-16 ${className} `)}>
      <div className="container">{children}</div>
    </section>
  );
}
