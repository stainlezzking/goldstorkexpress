"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUserCredentialsLogin } from "../server/actions";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid Email address",
  }),
  password: z.string(),
});
export default function Admin_Login() {
  const router = useRouter();
  const [err, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // redirect the user to the dashboard if the user is already logged in

  const onSubmit = async function (values) {
    setLoading(true);
    const result = await getUserCredentialsLogin(values);
    setLoading(false);
    if (!result.success) return setError(result.message);
    if (result.success) return router.push("/admin/dashboard");
    return setError(result.error);
  };
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>Admin Control</CardDescription>
          </CardHeader>
          <p className={(err ? "py-2" : "") + " text-sm text-center text-red-700"}> {err}</p>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input id="email" placeholder="johnsnow@goldstorkexpress.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="******" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <Button disabled={loading} className="disabled:bg-slate-600 mx-auto block px-10 bg-secondary hover:bg-secondary/70">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
