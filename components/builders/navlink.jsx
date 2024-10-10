"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinksComponent = function (path, href) {
  return {
    mobile: `mt-5 max-w-[300px] w-full text-secondary px-5 h-12 hover:text-primary flex items-center ${path == href && ""}`,
    desktop: ` ${
      path == href && " active"
    } relative py-3 hover:text-white/80 px-5 block after:border-e after:block after:absolute after:right-0 after:w-[2px] after:h-[40%] after:top-1/2 after:-translate-y-1/2 after:border-e-white/40`,
    customer: "bg-white text-secondary px-5 h-12 hover:text-primary flex items-center ",
  };
};
export const NavLink = function ({ children, href, type, className }) {
  const path = usePathname();
  return (
    <Link className={cn(navLinksComponent(path, href)[type], className)} href={href}>
      {children}
    </Link>
  );
};
