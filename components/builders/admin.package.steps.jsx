import { useForm } from "react-hook-form";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Step1 = function ({ addInfo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customSubmit = function (data) {
    const dataModified = {
      a: {
        title: `GSE is in possession of item`,
        date: data.registered,
        location: "Manually keyed in of from db",
      },
      b: {
        title: `Departed Post Office`,
        date: data.departed,
        location: "Manually keyed in of from db",
      },
    };
    console.log(dataModified);
    addInfo(data, false);
    // format date Month, day,Year
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
            </div>
            <div>
              <Button className="mx-auto block px-10 bg-secondary hover:bg-secondary/70"> Next</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </>
  );
};

export const Step2 = function ({ addInfo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customSubmit = function (data) {
    console.log("submited");
    addInfo(data, true);
    // format date Month, day,Year
  };
  return (
    <>
      <CardHeader>
        <CardTitle>Create a package</CardTitle>
        <CardDescription>Delivery Information</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(customSubmit)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3  pb-5">
              <div className="space-y-2 border-b border-b-paragraph pb-5">
                <Label htmlFor="possession" className="block font-medium">
                  1. First Location
                </Label>
                <div className="space-y-1">
                  <Input
                    className="w-full py-2"
                    placeholder="Location"
                    {...register("loc1_title", { required: "Must fill information" })}
                    type="text"
                  />
                  <p className="text-orange-800/60 text-xs">{errors.loc1_title?.message}</p>
                </div>
                <div className="space-y-1">
                  <Label className="block font-normal">Date & Time</Label>
                  <Input className="w-fit py-2" {...register("loc1_date", { required: "Must fill information" })} type="datetime-local" />
                  <p className="text-orange-800/60 text-xs">{errors.loc1_title?.message}</p>
                </div>
              </div>
              <div className="space-y-2 border-b border-b-paragraph pb-5">
                <Label htmlFor="possession" className="block font-medium">
                  2. Second location
                </Label>
                <div className="space-y-1">
                  <Input className="w-full py-2" placeholder="Location" {...register("loc2_title", { required: "Must fill input" })} type="text" />
                  <p className="text-orange-800/60 text-xs">{errors.loc2_title?.message}</p>
                </div>
                <div className="space-y-1">
                  <Label className="block font-normal">Date & Time</Label>
                  <Input className="w-fit py-2" {...register("loc2_date", { required: "Must fill input" })} type="datetime-local" />
                  <p className="text-orange-800/60 text-xs">{errors.loc2_title?.message}</p>
                </div>
              </div>
            </div>
            <div>
              <Button className="mx-auto block px-10 bg-secondary hover:bg-secondary/70"> Next</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </>
  );
};
