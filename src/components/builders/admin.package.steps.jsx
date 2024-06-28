import { useForm } from "react-hook-form";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Step1 = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customSubmit = function (data) {
    console.log("submited");
    console.log(data);
  };
  return (
    <>
      <CardHeader>
        <CardTitle>Create a package</CardTitle>
        <CardDescription>Registered Package</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(customSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3 border-b border-b-paragraph pb-5">
              <div className="space-y-2">
                <Label htmlFor="possession" className="block font-normal">
                  Registered on
                </Label>
                <div>
                  <Input className="w-fit py-2" {...register("registered", { required: "Must set registered date" })} type="datetime-local" />
                  <p className="text-orange-800/60 text-xs">{errors.registered?.message}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="possession" className="block font-normal">
                  Departed the office for delivery on
                </Label>
                <div>
                  <Input className="w-fit py-2" {...register("departed", { required: "Must set registered date" })} type="datetime-local" />
                  <p className="text-orange-800/60 text-xs">{errors.departed?.message}</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="possession" className="block font-normal">
                  Location of Office
                </Label>
                <div>
                  <textarea
                    {...register("O_location", { required: "don't forget your office location" })}
                    rows="5"
                    className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
                  ></textarea>
                  <p className="text-orange-800/60 text-xs">{errors.O_location?.message}</p>
                </div>
              </div>
            </div>
            <div>
              <Button className="mx-auto block px-10 bg-secondary hover:bg-secondary/70"> Submit</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </>
  );
};
