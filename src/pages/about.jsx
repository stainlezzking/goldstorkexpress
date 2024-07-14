import Section from "@/components/builders/section.component";
import banner from "../assets/pages-banner/about.png";
import aboutIntro from "../assets/about-intro.png";
import Bannersection from "@/components/builders/banner.component";
import SubTitle from "@/components/builders/title.component";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Ourservices from "@/components/builders/ourservices.component";
import Footer from "@/components/builders/footer.component";
import FAQ from "@/components/builders/faq.component";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { eachDayOfInterval, addDays } from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Button from "@/components/builders/button.component";
import ServicesComp from "@/components/builders/services.component";
const maxWidthConstant = "max-w-[1000px]";

import faq from "../faq.json";

export default function About() {
  return (
    <div>
      <Bannersection topic="About Our Logistics" src={banner} subtitle="About Us" />
      <Section>
        <div className="grid grid-cols-1 max-[850px]:max-w-[600px] mx-auto  min-[850px]:grid-cols-2 items-center gap-x-5 lg:gap-x-10">
          <div className="col-span-1">
            <img src={aboutIntro} alt="" className="w-full" />
          </div>
          <div className="col-span-1 md:px-5 py-10 space-y-4">
            <div className="space-y-3">
              <SubTitle color="bg-[#E8E8E8]/50 text-secondary">About Us</SubTitle>
              <h1 className="text-4xl text-secondary font-medium">Our Company Overview</h1>
              <p className="text-paragraph">
                Utilize agile frameworks to deliver a comprehensive strategy overview, encouraging collaborative thinking to enhance the overall value
                proposition.
              </p>
            </div>
            <div>
              <Tabs defaultValue="account" className="flex flex-col justify-center py-3 space-y-2">
                <TabsList className="w-full px-2 space-x-2">
                  <TabsTrigger value="account" className="w-1/3">
                    Account
                  </TabsTrigger>
                  <TabsTrigger value="password" className="w-1/3">
                    Sustainability
                  </TabsTrigger>
                  <TabsTrigger value="approach" className="w-1/3">
                    Our Approach
                  </TabsTrigger>
                </TabsList>
                <div className="justify-self-stretch">
                  <TabsContent value="account">
                    At GoldStorkExpress, we redefine delivery with a commitment to reliability, efficiency, and unparalleled customer service. Based
                    in the heart of England, we pride ourselves on connecting businesses and individuals across the globe with seamless logistics
                    solutions. Whether you're sending a parcel across town or shipping freight internationally, GoldStorkExpress is your trusted
                    partner every step of the way.
                  </TabsContent>
                  <TabsContent value="password">
                    As the world’s leading logistics company, we have a responsibility to set an example in our industry and be a sustainability
                    leader. That means reducing our carbon footprint and setting the highest social and governance standards. Over the years, we have
                    repeatedly redefined logistics, from pioneering the first green logistics product to becoming the first logistics company to
                    commit to a zero-emissions target. Today we offer the most comprehensive portfolio of green logistics solutions in the industry.
                    <br />
                    <br />
                    Sustainability is our responsibility – the decisions we make today can make a positive impact on tomorrow. Discover how our green
                    logistics products and solutions can minimize your carbon emissions without compromising your supply chain.
                  </TabsContent>
                  <TabsContent value="approach">
                    GoldStorkExpress began with a vision to revolutionize the logistics industry. With a foundation built on decades of expertise and
                    a deep understanding of global shipping dynamics, we have grown to become a cornerstone in the delivery sector. Our journey is
                    shaped by a relentless pursuit of excellence, ensuring that every package entrusted to us arrives on time and in pristine
                    condition.
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </Section>
      <ServicesComp />
      <FAQ faq={faq} />

      <Section className="bg-[#F4F4F4]">
        <h1 className="text-4xl font-bold">Request a Business Account</h1>
        <span className="block bg-red-600 w-10 h-1 mt-3"></span>
        <h2 className="text-xl text-gray-600 text-center max-w-[500px] mx-auto my-5">
          Almost ready to start enjoying the benefits of a DHL Express business account. Choose your preferred option below to proceed.
        </h2>
        <div className={"max-sm:space-y-10 sm:flex justify-center gap-x-10 py-10 mx-auto " + maxWidthConstant}>
          <div className="shadow max-w-[350px] space-y-3 p-10 bg-white">
            <div className="space-y-1">
              <svg className="w-12" fill="currentColor" viewBox="0 0 48 48">
                <path d="M13 26h6a5 5 0 0 0 10 0h6a2.34 2.34 0 0 1 2.278 2l1.633 9H9.088l1.631-9A2.34 2.34 0 0 1 13 26M8.725 39 8 43h32l-.726-4Zm17.277-18h-4.004a1 1 0 0 0-.998.998v1.004a1 1 0 0 0 .998.998h6.482A3.524 3.524 0 0 0 32 20.48v-1.556a3.749 3.749 0 0 0-.021-7.35 7.99 7.99 0 0 0-15.957 0A3.749 3.749 0 0 0 16.75 19H18v-7a6 6 0 0 1 12 0v8.48A1.52 1.52 0 0 1 28.48 22H27v-.002a1 1 0 0 0-.998-.998"></path>
              </svg>
              <h1 className="text-lg font-medium">Schedule a Callback</h1>
            </div>
            <p className="text-gray-500">All fields marked with an asterisk (*) are mandatory</p>
            <Dialog>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Schedule a Callback</DialogTitle>
                  <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="Email">Email*</Label>
                    <Input id="Email" defaultValue="" className="col-span-4 py-2" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username">Username*</Label>
                    <Input id="username" defaultValue="" className="col-span-4 py-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="cols-span-1">
                      <Label htmlFor="cname">Company Name*</Label>
                      <Input id="cname" defaultValue="" className="w-full py-2" />
                    </div>
                    <div className="cols-span-1">
                      <Label htmlFor="pcode">Postal Code*</Label>
                      <Input id="pcode" defaultValue="" className="w-full py-2" />
                    </div>
                  </div>
                  <hr />
                </div>
                <DialogFooter className="w-full flex-start">
                  <div className="flex gap-x-3">
                    <div className="w-3/5">
                      <h1 className="text-xl font-medium">Select a date and time for a callback</h1>
                      <p className="text-gray-600 text-sm">London, United Kingdom · UTC+1</p>
                    </div>
                    <div className="w-2/5 block">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select a Date</SelectLabel>
                            {eachDayOfInterval({ start: new Date(), end: addDays(new Date(), 10) }).map((d, i) => (
                              <SelectItem key={i} value={d.toString()}>
                                {d.toString().slice(0, 11)}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="py-2 mt-5">
                    <hr />
                    <button className="py-2 rounded-md w-full block bg-slate-500 hover:bg-slate-800 text-white">Send</button>
                  </div>
                </DialogFooter>
              </DialogContent>
              <DialogTrigger asChild>
                <button className="py-2 rounded-md w-full block bg-red-600 hover:bg-red-400 text-white">Schedule a Callback</button>
              </DialogTrigger>
            </Dialog>
          </div>
          <div className="shadow max-w-[350px] space-y-3 p-10 bg-white">
            <div className="space-y-1">
              <svg className="w-12" fill="currentColor" viewBox="0 0 48 48">
                <path d="M39 9H9a1.015 1.015 0 0 0-1 1v20h32V10a1.005 1.005 0 0 0-1-1m-1 19H10V11h28ZM28 17H14v-2h14Zm-3 5H14v-2h11Zm19 17v1a1.004 1.004 0 0 1-1 1H5a1.004 1.004 0 0 1-1-1v-1l4-7h32Z"></path>
              </svg>
              <h1 className="text-lg font-medium">Contact Form</h1>
            </div>
            <p className="text-gray-500">Fill out your contact information and we will get back to you.</p>
            <button className="py-2 rounded-md w-full block bg-red-600 hover:bg-red-400 text-white">Go to Contact Form</button>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
