import Section from "@/components/builders/section.component";
import banner from "@/app/assets/pages-banner/services.png";
import aboutIntro from "@/app/assets/about-intro.png";
import Bannersection from "@/components/builders/banner.component";
import SubTitle from "@/components/builders/title.component";

import Ourservices from "@/components/builders/ourservices.component";
import Footer from "@/components/builders/footer.component";
import ServicesComp from "@/components/builders/services.component";
import Image from "next/image";

const maxWidthConstant = "max-w-[1200px]";

export default function Services() {
  return (
    <div>
      <Bannersection topic="Our Logistics Service" src={banner} subtitle="Services" />
      <ServicesComp />
      <Section>
        <div className="grid grid-cols-1 max-[850px]:max-w-[600px] mx-auto  min-[850px]:grid-cols-2 items-center gap-x-5 lg:gap-x-10">
          <div className="col-span-full flex justify-center mb-10">
            <SubTitle color="bg-[#E8E8E8]/50 text-secondary">Our Goodness</SubTitle>
          </div>
          <div className="col-span-1">
            <Image src={aboutIntro} alt="" className="w-full" />
          </div>
          <div className="col-span-1 px-10 py-10 space-y-10">
            <div className="flex items-start gap-x-5 max-w-[450px]">
              <svg className="w-16" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.95898 18.512L25.0392 30.3464L24.6693 53.2758L3.95898 41.4413V18.512Z" fill="#FFD550" />
                <path d="M25.4082 4.82837L46.8582 17.0327L37.2427 22.2103L15.4229 10.3758L25.4082 4.82837Z" fill="#FFD550" />
                <path
                  d="M48.2489 41.2108V18.0032C48.2471 17.668 48.157 17.3391 47.9875 17.0499C47.8181 16.7606 47.5754 16.5211 47.2839 16.3556L26.5712 4.7047C26.2921 4.54357 25.9755 4.45874 25.6533 4.45874C25.331 4.45874 25.0144 4.54357 24.7353 4.7047L4.02264 16.3556C3.73113 16.5211 3.48843 16.7606 3.319 17.0499C3.14958 17.3391 3.05942 17.668 3.05762 18.0032V41.2108C3.05942 41.546 3.14958 41.8748 3.319 42.1641C3.48843 42.4534 3.73113 42.6929 4.02264 42.8584L24.7353 54.5093C25.0144 54.6704 25.331 54.7552 25.6533 54.7552C25.9755 54.7552 26.2921 54.6704 26.5712 54.5093L47.2839 42.8584C47.5754 42.6929 47.8181 42.4534 47.9875 42.1641C48.157 41.8748 48.2471 41.546 48.2489 41.2108V41.2108Z"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M37.1865 35.3734V23.1341L14.3555 10.5417" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M47.9899 17.0381L25.865 29.6069L3.31641 17.0381" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.8652 29.6069L25.6533 54.7446" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.999642 13.5696L11.6348 7.41699" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29.8468 1.50001L40.4873 7.64331" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40.4872 42.1809L29.8467 48.3242" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h1 className="font-medium text-2xl text-secondary">Warehousing Services</h1>
                <p className="text-paragraph">
                  We utilize state-of-the-art facilities equipped with advanced inventory management systems to ensure optimal storage conditions and easy
                  accessibility.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-5 max-w-[450px]">
              <svg className="w-16" viewBox="0 0 50 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.00391 21.1534V7.37489C2.00391 6.87686 2.20077 6.39923 2.5512 6.04707C2.90162 5.69491 3.3769 5.49707 3.87247 5.49707H41.2438C41.7394 5.49707 42.2147 5.69491 42.5651 6.04707C42.9155 6.39923 43.1124 6.87686 43.1124 7.37489V21.1534C43.1124 40.8704 26.4588 47.3959 23.1421 48.4991C22.7653 48.6393 22.351 48.6393 21.9742 48.4991C18.6575 47.3959 2.00391 40.8704 2.00391 21.1534Z"
                  fill="#FFD550"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3137 51.2406C15.3888 50.3181 8.21071 46.8345 1.22168 37.7451"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M32.8345 18.6416L19.1239 31.7863L12.2803 25.214" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.4901 29.5548L22.5566 34.5127" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M48.2227 5.45777L48.2227 18.6787" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.556 1.5L1 1.5" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div>
                <h1 className="font-medium text-2xl text-secondary">Safety & Quality</h1>
                <p className="text-paragraph">
                  We adhere to strict safety protocols and industry standards to ensure the well-being of our team and the security of your goods
                </p>
              </div>
            </div>
            <div className="flex items-start gap-x-5 max-w-[450px]">
              <svg className="w-24" viewBox="0 0 49 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.5117 39.7375C27.1618 40.8664 29.0278 41.6379 30.9909 42.0032C32.954 42.3684 34.9713 42.3193 36.9145 41.8589C38.8577 41.3986 40.6843 40.5371 42.278 39.3293C43.8717 38.1215 45.1977 36.5937 46.1717 34.8433C47.1457 33.0928 47.7463 31.1579 47.9353 29.1616C48.1244 27.1653 47.8978 25.1514 47.2698 23.2479C46.6419 21.3444 45.6264 19.5929 44.288 18.105C42.9496 16.617 41.3175 15.4251 39.4955 14.6051C39.0955 14.4031 38.7776 14.0679 38.5962 13.6567C37.4307 10.8679 35.4711 8.4869 32.9634 6.81251C30.4556 5.13811 27.5113 4.24487 24.5 4.24487C21.4887 4.24487 18.5444 5.13811 16.0366 6.81251C13.5289 8.4869 11.5693 10.8679 10.4038 13.6567C10.2224 14.0679 9.90453 14.4031 9.50447 14.6051C7.68253 15.4251 6.05045 16.617 4.71202 18.105C3.37359 19.5929 2.35812 21.3444 1.73018 23.2479C1.10225 25.1514 0.875601 27.1653 1.06465 29.1616C1.25371 31.1579 1.85432 33.0928 2.8283 34.8433C3.80227 36.5937 5.12829 38.1215 6.72202 39.3293C8.31574 40.5371 10.1423 41.3986 12.0855 41.8589C14.0287 42.3193 16.046 42.3684 18.0091 42.0032C19.9722 41.6379 21.8382 40.8664 23.4883 39.7375C23.7888 39.5394 24.1405 39.4338 24.5 39.4338C24.8595 39.4338 25.2112 39.5394 25.5117 39.7375Z"
                  fill="#FFD550"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.5533 29.8874C41.4129 32.7356 38.6091 37.5017 30.9355 37.5017"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.88031 10.7233C8.18284 7.74873 11.2221 3.49936 17.8398 1.96851"
                  stroke="#1C1F35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M24.8623 49.9112V18.7146" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24.8622 32.58L14.2373 27.3806" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.1228 24.3587L18.5869 26.3162" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21.7744 18.4266L21.7744 22.3416" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.5654 43.2449L27.5654 48.2449" stroke="#1C1F35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24.8623 27.3808L35.4872 22.1814" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div>
                <h1 className="font-medium text-2xl text-secondary">Care for Environment</h1>
                <p className="text-paragraph">
                  Our operations incorporate eco-friendly initiatives such as energy-efficient warehousing, optimized transportation routes to reduce emissions,
                  and the use of recyclable materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="pb-0">
        <div className="border-t border-b border-[#D4D4D4] mx-auto grid-cols-2 grid lg:grid-cols-4 ">
          <div className="flex gap-x-2 md:gap-x-5 items-center justify-end max-md:px-5 p-10 col-span-1 border-e border-e-[#D4D4D4] ">
            <h1 className="text-2xl md:text-4xl font-bold">1256</h1>
            <span className="block w-5 h-5 max-md:w-2 bg-primary"></span>
            <p className="md:text-xl"> Delivered Packages</p>
          </div>
          <div className="flex gap-x-2 md:gap-x-5 items-center justify-end max-md:px-5 p-10 col-span-1 border-e border-e-[#D4D4D4] ">
            <h1 className="text-2xl md:text-4xl font-bold">1256</h1>
            <span className="block w-5 h-5 max-md:w-2 bg-primary"></span>
            <p className="md:text-xl"> Delivered Packages</p>
          </div>
          <div className="flex gap-x-2 md:gap-x-5 items-center justify-end max-md:px-5 p-10 col-span-1 border border-[#D4D4D4] ">
            <h1 className="text-2xl md:text-4xl font-bold">1256</h1>
            <span className="block w-5 h-5 max-md:w-2 bg-primary"></span>
            <p className="md:text-xl"> Delivered Packages</p>
          </div>
          <div className="flex gap-x-2 md:gap-x-5 items-center justify-end border border-[#D4D4D4] max-md:px-5 p-10 col-span-1 ">
            <h1 className="text-2xl md:text-4xl font-bold">1256</h1>
            <span className="block w-5 h-5 max-md:w-2 bg-primary"></span>
            <p className="md:text-xl"> Delivered Packages</p>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
