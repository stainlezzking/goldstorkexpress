"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const SearchInput = function () {
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
    <form className="w-full items-center flex " onSubmit={handleSubmit(customSubmit)}>
      <input
        {...register("search")}
        type="search"
        placeholder="Enter Your Tracking Number"
        className="py-3 flex-grow rounded-md rounded-e-none p-3 text-md focus:border-primary focus:outline-none"
      />
      <button className="max-md:px-3 md:w-[130px] items-center justify-center bg-primary hover:bg-primary/45 text-white self-stretch block">Track</button>
    </form>
  );
};
