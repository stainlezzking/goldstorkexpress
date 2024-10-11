"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const SearchAnother = function () {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const customSubmit = function (data) {
    router.push("/track/" + data.search);
  };
  return (
    <form onSubmit={handleSubmit(customSubmit)}>
      <input
        type="text"
        {...register("search")}
        className="flex h-10 w-full rounded-md border bg-white px-3  ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 border-slate-500 text-xl py-7"
      />
    </form>
  );
};
