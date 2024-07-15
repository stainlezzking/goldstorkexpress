import Section from "@/components/builders/section.component";
import banner from "../assets/pages-banner/blog.png";
import Bannersection from "@/components/builders/banner.component";
import { useLoaderData } from "react-router-dom";
import BlogTitleText from "@/components/builders/blog.title.text";
import Footer from "@/components/builders/footer.component";

export default function Oneblog() {
  const blog = useLoaderData();
  console.log(blog.body[2].title, blog.body[2].text);
  return (
    <div>
      <Bannersection topic={blog.title} src={banner} subtitle="Blog" />
      <Section>
        <div className="space-y-4">
          {blog.body.map((content, index) => {
            if (content.sub) {
              return (
                <div className="space-y-3" key={index}>
                  <div className="space-y-2">
                    <h1 className="font-bold">{content.title}</h1>
                    <p className="text-[#666C89] font-medium">{content.text}</p>
                  </div>
                  {content.sub.map((ct, i) => (
                    <div className="space-y-2">
                      <h1 className="font-medium text-sm ">{ct.title}</h1>
                      <p className="text-[#666C89] font-medium text-sm">{ct.text}</p>
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div className="space-y-2">
                <h1 className="font-bold">{content.title}</h1>
                <p className="text-[#666C89] font-medium">{content.text}</p>
              </div>
            );
          })}
        </div>
      </Section>
      <Footer />
    </div>
  );
}
