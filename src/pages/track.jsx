import Bannersection from "@/components/builders/banner.component";
import BlogPreview from "@/components/builders/blog-preview.component";
import Footer from "@/components/builders/footer.component";
import SubTitle from "@/components/builders/title.component";
import banner from "../assets/pages-banner/contact.png";
import FAQ from "@/components/builders/faq.component";
import Section from "@/components/builders/section.component";
import Button from "@/components/builders/button.component";
import { Clipboard, Flowbite } from "flowbite-react";

const maxWidthConstant = "max-w-[1000px]";

export default function Track() {
  return (
    <>
      <Bannersection topic="Contact Us" subtitle="contact" src={banner} />
      <Section className={"mx-auto " + maxWidthConstant}>
        <div className="max-w-800px mx-auto p-10 flex justify-between text-secondary">
          <h1 className="font-bold text-3xl">
            GSE Tracking<sup>®</sup>
          </h1>
          <div className="font-medium flex gap-x-3 items-center">
            <button>Tracking</button> /<button>FAQs</button>
          </div>
        </div>
        <div className="pt-10 font-bold text-secondary">
          <p>Tracking Number:</p>
          <h1 className="text-3xl">928171000000000002145</h1>
          <div className="flex justify-between max-w-[600px]">
            <button className="gap-x-2 mt-1 flex ">
              <svg className="w-6" viewBox="0 0 24 24" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M20.9983 10C20.9862 7.82497 20.8897 6.64706 20.1213 5.87868C19.2426 5 17.8284 5 15 5H12C9.17157 5 7.75736 5 6.87868 5.87868C6 6.75736 6 8.17157 6 11V16C6 18.8284 6 20.2426 6.87868 21.1213C7.75736 22 9.17157 22 12 22H15C17.8284 22 19.2426 22 20.1213 21.1213C21 20.2426 21 18.8284 21 16V15"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M3 10V16C3 17.6569 4.34315 19 6 19M18 5C18 3.34315 16.6569 2 15 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3.51839 3.82475 3.22937 4.69989 3.10149 6"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </g>
              </svg>
              <p>Copy</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 py-5">
          <div className="p-5 space-y-2 col-span-1 max-w-[450px] before:w-2 before:h-full before:bg-secondary bg-secondary/20">
            <h1 className="text-lg text-secondary font-medium">Latest Update</h1>
            <p className="text-secondary text-sm border-b border-b-secondary pb-5">
              Your item was delivered to an individual at the address at 12:41 pm on November 2, 2022 in BALDWIN PARK, CA 91706. The item was signed
              for by C LOPEZ.
            </p>
            <div className="mt-5"></div>
          </div>
        </div>
      </Section>
      <Section className="bg-[#F4F4F4]">
        <FAQ />
      </Section>
      <Footer />
    </>
  );
}
