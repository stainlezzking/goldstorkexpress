import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Admin_Login() {
  return (
    <>
      <div className="flex items-center justify-center w-full">
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
      </div>
    </>
  );
}
