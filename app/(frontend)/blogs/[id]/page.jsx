import Section from "@/components/builders/section.component";
import banner from "@/app/assets/pages-banner/blog.png";
import Bannersection from "@/components/builders/banner.component";
import Footer from "@/components/builders/footer.component";
import blogs from "@/database.json";

export default function Oneblog({ params }) {
  const blog = blogs.find((blog) => blog._id == params.id);
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
                    <div className="space-y-2" key={i}>
                      <h1 className="font-medium text-sm ">{ct.title}</h1>
                      <p className="text-[#666C89] font-medium text-sm">{ct.text}</p>
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div className="space-y-2" key={index}>
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
