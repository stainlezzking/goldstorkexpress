import Section from "@/components/builders/section.component";
import banner from "../assets/pages-banner/blog.png";
import Bannersection from "@/components/builders/banner.component";
import { useLoaderData } from "react-router-dom";

export default function Oneblog() {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <div>
      <Bannersection topic={blog.title} src={banner} subtitle="Blog" />
      <Section></Section>
    </div>
  );
}
