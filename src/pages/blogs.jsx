import BlogPreview from "@/components/builders/blog-preview.component";
import Footer from "@/components/builders/footer.component";
import SubTitle from "@/components/builders/title.component";

const maxWidthConstant = "max-w-[1000px]";

export default function Blogs() {
  return (
    <>
      <section className={"py-24 mx-auto " + maxWidthConstant}>
        <div className="flex flex-col items-center gap-y-2">
          <SubTitle> Our Blogs</SubTitle>
          <h1 className="text-3xl">Our Latest News</h1>
        </div>
        <div className="pt-4">
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
        </div>
      </section>
      <Footer />
    </>
  );
}
