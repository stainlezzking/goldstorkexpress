import Section from "@/components/builders/section.component";
import SubTitle from "@/components/builders/title.component";
import Whatwedo from "@/components/builders/whatwedo.component";
// import container from "../assets/container.png";
import banner from "../assets/pages-banner/home-banner.png";
import plane from "../assets/plane.png";
import liquid from "../assets/liquid.png";
import logistics from "../assets/logistics.png";
import warehouse from "../assets/warehouse.png";
import packagesolution from "../assets/package-solutions.png";
import specializedtransport from "../assets/specialized-transport.png";
import BlogPreview from "@/components/builders/blog-preview.component";

import footerImage from "../assets/footer-image.png";
import Button from "@/components/builders/button.component";
import Footer from "@/components/builders/footer.component";

const maxWidthConstant = "max-w-[1200px]";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <img src={banner} alt="" className="max-md:h-[60vh] max-[1200px]:aspect-video object-cover" />
        <div className="container absolute top-0 flex items-center h-full left-1/2 -translate-x-1/2 ">
          <div className="caption max-w-[550px]  w-full flex gap-y-10 flex-col">
            <form className="w-full items-center flex ">
              <input
                type="search"
                placeholder="Enter Your Tracking Number"
                className=" py-3 flex-grow rounded-md rounded-e-none p-3 text-md focus:border-primary focus:outline-none"
              />
              <button className="max-md:px-3 md:w-[130px] items-center justify-center bg-primary hover:bg-primary/45 text-white self-stretch block">
                Track
              </button>
            </form>
            <div className="space-y-3">
              <div className="space-y-5">
                <SubTitle>Logistics and Supply Chain Solutions</SubTitle>
                <h1 className=" text-6xl font-bold text-white max-md:text-2xl max-lg:text-4xl">Your Gateway to any Destination in the World</h1>
              </div>
              <p className="font-medium text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus assumenda delectus placeat, iure omnis et laudantium numquam, a quae
              </p>
            </div>
          </div>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-4 gap-x-5 py-10">
          <div className="col-span-full lg:col-span-1 ">
            <div className="space-y-3">
              <SubTitle>What We Do</SubTitle>
              <h1 className="text-4xl text-secondary font-bold"> Safe & Reliable Cargo Solutions</h1>
            </div>
          </div>
          <div className="col-span-full lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 py-10 lg:p-10">
            <Whatwedo
              className="col-span-1 max-lg:max-w-[350px]"
              title="Sea Transport Services"
              body="Following the quality of our service thus having gained trust of our many clients."
            >
              <svg className="w-12 max-md:w-10" viewBox="0 0 52 56" fill="none">
                <path d="M25.6602 7.16494V1" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M50.3195 35.9345C46.5692 49.035 29.2046 53.6073 26.1221 54.3265C25.8187 54.4037 25.5008 54.4037 25.1974 54.3265C22.1149 53.6073 4.75034 49.035 1 35.9345V27.1494C0.999964 26.7167 1.13652 26.295 1.39021 25.9445C1.64389 25.594 2.00176 25.3324 2.4128 25.1972L25.0176 17.6452C25.436 17.5164 25.8835 17.5164 26.3019 17.6452L48.9067 25.1972C49.3178 25.3324 49.6756 25.594 49.9293 25.9445C50.183 26.295 50.3195 26.7167 50.3195 27.1494V35.9345Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.1271 47.6652C23.6883 47.1036 9.94964 43.5341 6.98242 33.3066"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.98242 9.98267V23.136L25.5288 16.555L44.0752 23.136V9.98267C44.0752 8.32581 42.7321 6.98267 41.0752 6.98267H9.98242C8.32557 6.98267 6.98242 8.32581 6.98242 9.98267Z"
                  fill="#FFD550"
                  stroke="#1C1F35"
                  strokeWidth="2"
                />
                <path d="M25.6602 37.9898V17.5427" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30.9141 36.8963L30.9141 28.5205" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.7686 17.7515V11.7688" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M48.8613 20.1446V9.37573" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Whatwedo>
            <Whatwedo
              className="col-span-1 max-lg:max-w-[350px]"
              title="Warehousing Services"
              body="Following the quality of our service thus having gained trust of our many clients."
            >
              <svg className="w-12 max-md:w-10" viewBox="0 0 57 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.33398 45H54.7149" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M32.7147 45V2.91304C32.7147 2.40567 32.5097 1.91908 32.1448 1.56032C31.7799 1.20155 31.2851 1 30.7691 1H7.42214C6.90614 1 6.41128 1.20155 6.04641 1.56032C5.68154 1.91908 5.47656 2.40567 5.47656 2.91304V45"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.7148 13.5715H48.572C50.2288 13.5715 51.572 14.9147 51.572 16.5715V43.9525H32.7148V13.5715Z"
                  fill="#FFD550"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M13.8574 10.4285H21.1908" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.28613 40.8096L1.28613 26.1429" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M55.7627 30.3333L55.7627 15.6666" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M35.8574 9.38086L43.1908 9.38086" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 26.1428H24.3333" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.8574 35.5715H21.1908" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40.0479 35.5715H44.2383" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40.0479 26.1428H44.2383" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Whatwedo>
            <Whatwedo
              className="col-span-1 max-lg:max-w-[350px]"
              title="Warehousing Services"
              body="Following the quality of our service thus having gained trust of our many clients."
            >
              <svg className="w-12 max-md:w-10" viewBox="0 0 76 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3047 55.4348H53.1743" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M34.333 40.4766L49.855 31.1317" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.69531 37.8877L15.7105 43.9029" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 35.7139L7.01521 41.7291" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M15.7687 35.4434L25.2262 44.5155C26.4873 45.7266 28.0962 46.4883 29.8137 46.6874C31.5313 46.8865 33.2657 46.5124 34.759 45.6206L72.7396 23.0045L68.0735 17.1449C66.8598 15.6262 65.1558 14.6023 63.2695 14.2582C61.3832 13.9141 59.439 14.2726 57.7882 15.2688L46.6499 21.9765L31.5981 16.8365L27.4589 18.6612C27.1492 18.7971 26.8779 19.0108 26.6701 19.2824C26.4622 19.554 26.3244 19.8749 26.2694 20.2154C26.2144 20.556 26.244 20.9052 26.3554 21.2309C26.4669 21.5567 26.6565 21.8484 26.907 22.0793L34.6085 29.1725L27.5843 33.2845L20.5602 30.2005L16.3457 32.0509C16.0391 32.1859 15.7701 32.397 15.5632 32.6652C15.3563 32.9335 15.2179 33.2503 15.1606 33.5871C15.1034 33.9239 15.129 34.27 15.2351 34.5941C15.3413 34.9183 15.5247 35.2101 15.7687 35.4434V35.4434Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M68.9352 18.4781C62.9052 23.2141 56.9528 23.8094 52.6309 18.4781L56.0268 16.2707C60.2468 13.5277 65.8664 14.4886 68.9352 18.4781Z"
                  fill="#FFD550"
                  stroke="#1C1F35"
                  strokeWidth="2"
                />
              </svg>
            </Whatwedo>
            <Whatwedo
              className="col-span-1 max-lg:max-w-[350px]"
              title="Warehousing Services"
              body="Following the quality of our service thus having gained trust of our many clients."
            >
              <svg className="w-12 max-md:w-10" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.0713 28.7858V18.8215H47.6681C50.5026 18.8215 53.0574 20.5309 54.1387 23.1511L56.1791 28.0951C56.3149 28.4242 56.073 28.7858 55.7169 28.7858H42.0713Z"
                  fill="#FFD550"
                  stroke="#1C1F35"
                  strokeWidth="2"
                />
                <path d="M4.42871 35.4285H42.0716" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M45.3929 53.1431C49.0616 53.1431 52.0357 50.169 52.0357 46.5003C52.0357 42.8315 49.0616 39.8574 45.3929 39.8574C41.7241 39.8574 38.75 42.8315 38.75 46.5003C38.75 50.169 41.7241 53.1431 45.3929 53.1431Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6067 53.1431C20.2755 53.1431 23.2496 50.169 23.2496 46.5003C23.2496 42.8315 20.2755 39.8574 16.6067 39.8574C12.938 39.8574 9.96387 42.8315 9.96387 46.5003C9.96387 50.169 12.938 53.1431 16.6067 53.1431Z"
                  fill="#FFD550"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M38.75 45.3926H23.25" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M9.90907 45.3926H6.31085C5.81168 45.3926 5.33295 45.1884 4.97998 44.8251C4.62701 44.4617 4.42871 43.9689 4.42871 43.4551V16.3301C4.42871 15.8162 4.62701 15.3234 4.97998 14.9601C5.33295 14.5967 5.81168 14.3926 6.31085 14.3926H42.0716V40.3551"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.0713 28.7861H57.5713V43.548C57.5713 44.0374 57.3672 44.5068 57.0038 44.8528C56.6405 45.1989 56.1476 45.3933 55.6338 45.3933H51.8972"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8.85742 28.0947L8.85742 18.8215" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.7854 31L38.0586 31" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.786 49.7148L32.1074 49.7148" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Whatwedo>
          </div>
        </div>
      </Section>
      <section className={`relative  pt-[200px] bg-[url('./container.png')] bg-no-repeat bg-top `}>
        <div className="p-3 md:p-10 lg:p-20 mx-auto  bg-white grid grid-cols-12  max-lg:max-w-[90%] max-w-[1000px]">
          <div className="max-lg:mt-10 max-lg:order-2 col-span-full lg:col-span-5 space-y-3">
            <SubTitle> Why Us</SubTitle>
            <h1 className="text-heading text-4xl font-bold">We provide full range global logistics solution</h1>
            <p>
              Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value
              proposition.
              <br />
              <br />
              Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            </p>
            <ul className="space-y-5">
              <li className="flex gap-x-3 items-center">
                <svg className="w-10" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29" cy="29" r="29" fill="url(#paint0_linear_1_4414)" />
                  <path
                    d="M41 37.4598V24.5402C40.999 24.3536 40.9512 24.1705 40.8612 24.0095C40.7712 23.8484 40.6423 23.7151 40.4875 23.623L29.4875 17.1369C29.3393 17.0472 29.1711 17 29 17C28.8289 17 28.6607 17.0472 28.5125 17.1369L17.5125 23.623C17.3577 23.7151 17.2288 23.8484 17.1388 24.0095C17.0488 24.1705 17.001 24.3536 17 24.5402V37.4598C17.001 37.6464 17.0488 37.8295 17.1388 37.9905C17.2288 38.1516 17.3577 38.2849 17.5125 38.377L28.5125 44.8631C28.6607 44.9528 28.8289 45 29 45C29.1711 45 29.3393 44.9528 29.4875 44.8631L40.4875 38.377C40.6423 38.2849 40.7712 38.1516 40.8612 37.9905C40.9512 37.8295 40.999 37.6464 41 37.4598V37.4598Z"
                    stroke="#141414"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M35 34V27.0995L23 20" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M41 24L29.1138 31L17 24" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M29 31V45" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_1_4414" x1="-1.64433" y1="12.5667" x2="71.3201" y2="17.7482" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFB629" />
                      <stop offset="0.507189" stopColor="#FFDA56" />
                      <stop offset="1" stopColor="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-xl">Delivery on Time</p>
              </li>
              <li className="flex gap-x-3 items-center">
                <svg className="w-10" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="29" cy="29" r="29" fill="url(#paint0_linear_1_4422)" />
                  <path
                    d="M42.9643 21H16.0357C15.4637 21 15 21.4477 15 22V36C15 36.5523 15.4637 37 16.0357 37H42.9643C43.5363 37 44 36.5523 44 36V22C44 21.4477 43.5363 21 42.9643 21Z"
                    stroke="#1C1F35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.5 33C31.433 33 33 31.433 33 29.5C33 27.567 31.433 26 29.5 26C27.567 26 26 27.567 26 29.5C26 31.433 27.567 33 29.5 33Z"
                    stroke="#1C1F35"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M36 21L44 28" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M36 37L44 30" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21L15 28" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 37L15 30" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_1_4422" x1="-1.64433" y1="12.5667" x2="71.3201" y2="17.7482" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFB629" />
                      <stop offset="0.507189" stopColor="#FFDA56" />
                      <stop offset="1" stopColor="#FFD7A6" />
                    </linearGradient>
                  </defs>
                </svg>

                <p className="text-xl">Optimized Travel Cost</p>
              </li>
            </ul>
          </div>
          <div className="max-lg:order-1 col-span-full lg:col-span-7">
            <img src={plane} alt="" className="max-w-[500px] mx-auto w-full" />
          </div>
        </div>
      </section>

      <div className={"mt-[112px] border-t border-b border-[#D4D4D4] grid grid-cols-2 max-w-[1000px] mx-auto"}>
        <div className="flex gap-x-1 items-center justify-end max-md:px-5 p-10 ">
          <h1 className="text-2xl md:text-4xl font-bold">1256</h1>
          <span className="block w-5 h-5 max-md:w-2 bg-primary"></span>
          <p className="md:text-xl"> Delivered Packages</p>
        </div>
        <div className="flex gap-x-1 items-center justify-start max-md:px-5 p-10 border-s border-[#D4D4D4] ">
          <h1 className="text-2xl md:text-4xl font-bold">3594</h1>
          <span className="block w-5 h-5 max-md:w-2 bg-primary"></span>
          <p className="md:text-xl"> Satisfied Clients</p>
        </div>
      </div>

      <div className="py-16 space-y-4 container mx-auto">
        <h1 className="text-2xl text-secondary text-center font-semibold">Transporting Across The World</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div className="col-grid-1 relative">
            <img src={liquid} alt="" />
            <span className="block absolute bottom-0 left-0 bg-gradient-to-t from-black h-1/3  w-full"></span>
            <div className="absolute bottom-0 left-0 w-full text-center py-2">
              <h1 className="font-bold text-white">Liquid Transportation</h1>
              <p className="text-primary">Premium Tankers</p>
            </div>
          </div>
          <div className="col-grid-1 relative">
            <img src={packagesolution} alt="" className="w-full" />
            <span className="block absolute bottom-0 left-0 bg-gradient-to-t from-black h-1/3  w-full"></span>
            <div className="absolute bottom-0 left-0 w-full text-center py-2">
              <h1 className="font-bold text-white">Package Solutions</h1>
              <p className="text-primary">Warehouse Management</p>
            </div>
          </div>
          <div className="col-grid-1 relative">
            <img src={logistics} alt="" className="w-full" />
            <span className="block absolute bottom-0 left-0 bg-gradient-to-t from-black h-1/3  w-full"></span>
            <div className="absolute bottom-0 left-0 w-full text-center py-2">
              <h1 className="font-bold text-white">Contract Logistics</h1>
              <p className="text-primary">Road Transportation</p>
            </div>
          </div>
          <div className="col-grid-1 relative">
            <img src={warehouse} alt="" className="w-full" />
            <span className="block absolute bottom-0 left-0 bg-gradient-to-t from-black h-1/3  w-full"></span>
            <div className="absolute bottom-0 left-0 w-full text-center py-2">
              <h1 className="font-bold text-white">Warehouse & Distribution</h1>
              <p className="text-primary">Large Warehouse</p>
            </div>
          </div>
          <div className="col-grid-1 relative">
            <img src={specializedtransport} alt="" className="w-full" />
            <span className="block absolute bottom-0 left-0 bg-gradient-to-t from-black h-1/2  w-full"></span>
            <div className="absolute bottom-0 left-0 w-full text-center py-2">
              <h1 className="font-bold text-white">Specialized Transport</h1>
              <p className="text-primary">Ocean Transports</p>
            </div>
          </div>
        </div>
      </div>

      <section className={"py-16 mx-auto max-lg:container max-w-[950px] space-y-[39px]"}>
        <div className="flex flex-col items-center gap-y-2">
          <SubTitle> Our Blogs</SubTitle>
          <h1 className="text-3xl">Our Latest News</h1>
        </div>
        <div className="pt-4 space-y-9">
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
        </div>
        <Button> More Blog </Button>
      </section>

      <div>
        <img src={footerImage} alt="" className="w-full" />
        <Footer />
      </div>
    </div>
  );
}
