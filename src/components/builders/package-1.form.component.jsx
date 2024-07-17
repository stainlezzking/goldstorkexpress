import { useState } from "react";
import { useForm } from "react-hook-form";

export const Form1 = function ({ handleForm1Submit, currentState }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: currentState,
  });
  const customSubmit = function (data) {
    handleForm1Submit(data);
    // console.log("submited");
    // addInfo(data, true);
    console.log(data);
    // format date Month, day,Year
  };
  return (
    <>
      <main>
        <form onSubmit={handleSubmit(customSubmit)}>
          <h1 className="text-ash text-lg mb-5 font-medium"> CREATE NEW PACKAGE</h1>
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:space-y-0 md:gap-y-5 max-md:space-y-5">
              <div className="space-y-1 col-span-full">
                <label className="block font-normal">Office Location </label>
                <input
                  className="w-full rounded-[10px] border border-[#CDD0D5] p-3"
                  {...register("office_loc", { required: "Must fill information" })}
                  type="text"
                  placeholder="TROY, MO 63379"
                />
                <p className="text-orange-800/60 text-xs">{errors.office_loc?.message}</p>
              </div>
              <div className="space-y-1 col-span-1">
                <label className="block font-normal">Delivered at office at/on </label>
                <input
                  className="w-full rounded-[10px] border border-[#CDD0D5] p-3"
                  {...register("office1_date", { required: "Must fill information" })}
                  type="datetime-local"
                />
                <p className="text-orange-800/60 text-xs">{errors.office1_date?.message}</p>
              </div>
              <div className="space-y-1 col-span-1">
                <label className="block font-normal">Depart office at/on </label>
                <input
                  className="w-full rounded-[10px] border border-[#CDD0D5] p-3"
                  {...register("office2_date", { required: "Must fill information" })}
                  type="datetime-local"
                />
                <p className="text-orange-800/60 text-xs">{errors.office2_date?.message}</p>
              </div>
            </div>
            <div className="border-t border-t-secondary pt-5 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:space-y-0 md:gap-y-5 max-md:space-y-5">
              <div className="col-span-full space-y-1">
                <label className="block">First Location</label>
                <input
                  type="text"
                  {...register("loc1_location", { required: "Must fill this information" })}
                  placeholder="SAINT LOUIS MO DISTRIBUTION CENTER "
                  className="w-full rounded-[10px] border border-[#CDD0D5] p-3"
                />
                <p className="text-orange-800/60 text-xs">{errors.loc1_title?.message}</p>
              </div>
              <div className="col-span-1 space-y-1">
                <label className="block">Name of Facility</label>
                <input
                  type="text"
                  {...register("loc1_name", { required: "Must fill this information" })}
                  placeholder="GSE Regional Origin Facility"
                  className="w-full rounded-[10px] border border-[#CDD0D5] p-3"
                />
                <p className="text-orange-800/60 text-xs">{errors.loc1_title?.message}</p>
              </div>
              <div className="space-y-1 col-span-1">
                <label className="block font-normal">Date & Time </label>
                <input
                  className="w-full rounded-[10px] border border-[#CDD0D5] p-3"
                  {...register("loc1_date", { required: "Must fill information" })}
                  type="datetime-local"
                />
                <p className="text-orange-800/60 text-xs">{errors.loc1_title?.message}</p>
              </div>
              <div className="col-span-full my-3 border-t border-t-secondary"></div>
              <div className="col-span-full space-y-1">
                <label className="block">Second Location</label>
                <input
                  type="text"
                  {...register("loc2_name", { required: "Must fill this information" })}
                  placeholder="BALDWIN PARK, CA 91706 "
                  className="w-full rounded-[10px] border border-[#CDD0D5] p-3"
                />
                <p className="text-orange-800/60 text-xs">{errors.loc1_title?.message}</p>
              </div>
              <div className="col-span-1 space-y-1">
                <label className="block">Name of Facility</label>
                <input
                  type="text"
                  {...register("loc2_location", { required: "Must fill this information" })}
                  placeholder="Post Office"
                  className="w-full rounded-[10px] border border-[#CDD0D5] p-3"
                />
                <p className="text-orange-800/60 text-xs">{errors.loc1_title?.message}</p>
              </div>
              <div className="space-y-1 col-span-1">
                <label className="block font-normal">Date & Time </label>
                <input
                  className="w-full rounded-[10px] border border-[#CDD0D5] p-3"
                  {...register("loc2_date", { required: "Must fill information" })}
                  type="datetime-local"
                />
                <p className="text-orange-800/60 text-xs">{errors.loc1_title?.message}</p>
              </div>
            </div>
          </div>
          <button className="block font-medium w-full max-w-[600px] mx-auto py-3 bg-secondary hover:bg-secondary/60 rounded-[8px] text-white my-10">
            Preview
          </button>
        </form>
      </main>
    </>
  );
};
