import Bannersection from "@/components/builders/banner.component";
import banner from "@/assets/pages-banner/404.png";
import Navbar from "@/components/builders/navbar.component";
import Section from "@/components/builders/section.component";
import Footer from "@/components/builders/footer.component";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <Navbar />
      <Bannersection topic="Not Found" subtitle="404" src={banner} />
      <Section className="max-w-[600px] text-center mx-auto">
        <h1 className="text-[250px] font-bold text-secondary">
          4<span className="text-primary">0</span>4
        </h1>
        <h2 className="text-4xl text-secondary font-bold">Oops! Page not found.</h2>
        <p className="text-paragraph mt-2">Let’s get you to where you need to be.</p>
        <Link
          to="/"
          className="block mt-5 px-10 py-3 w-fit mx-auto my-3 relative overflow-hidden after:block after:absolute after:w-[50px] after:rounded-full after:-bottom-[20px] after:-right-[20px] hover:after:left-1/2 hover:after:w-1/2 hover:after:bottom-0 hover:after:rounded-none hover:after:rounded-tl-full text-black font-medium bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] after:bg-[#1F2A69] after:h-[50px]"
        >
          Back home
        </Link>
      </Section>
      <Footer />
    </>
  );
}
