import BlogPreview from "@/components/builders/blog-preview.component";
import Footer from "@/components/builders/footer.component";
import SubTitle from "@/components/builders/title.component";

const maxWidthConstant = "max-w-[1000px]";
import blogs from "../database.json";
import banner from "../assets/pages-banner/blogs.png";
import Bannersection from "@/components/builders/banner.component";

export default function Blogs() {
  return (
    <>
      <Bannersection topic="All Blogs" src={banner} subtitle="All blogs" />
      <section className={"max-sm:px-10 py-24 mx-auto " + maxWidthConstant}>
        <div className="flex flex-col items-center gap-y-2">
          <SubTitle> Our Blogs</SubTitle>
          <h1 className="text-3xl">Our Latest News</h1>
        </div>
        <div className="pt-4">
          {blogs.map((blog, i) => (
            <BlogPreview preview={blog.preview} key={i} index={i} id={blog._id} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
