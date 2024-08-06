import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithPassword, signUpWithPassword } from "@/components/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid Email address",
  }),
  password: z.string(),
});
export default function Admin_Login() {
  const navigate = useNavigate();
  const [err, setError] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async function (values) {
    const result = await signInWithPassword(values);
    // const result = await signUpWithPassword(values.email, values.password);
    if (result.success) return navigate("/admin/dashboard");
    return setError(result.error);
  };
  return (
    <>
      {
        <div className="flex items-center justify-center w-full">
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
                      <Button className="mx-auto block px-10 bg-secondary hover:bg-secondary/70"> Submit</Button>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      }
      {/* <div className="flex items-center justify-center w-full">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>Admin Control</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="johnsnow@goldstorkexpress.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="******" />
                </div>
                <div>
                  <Button className="mx-auto block px-10 bg-secondary hover:bg-secondary/70"> Submit</Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div> */}
    </>
  );
}
