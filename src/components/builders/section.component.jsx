import { twMerge } from "tailwind-merge";
export default function Section({ children, className }) {
  return (
    <section className={twMerge(`py-16 ${className} `)}>
      <div className="container">{children}</div>
    </section>
  );
}
