import Section from "@/components/builders/section.component";
import banner from "../assets/pages-banner/about.png";
import aboutIntro from "../assets/about-intro.png";
import Bannersection from "@/components/builders/banner.component";
import SubTitle from "@/components/builders/title.component";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Ourservices from "@/components/builders/ourservices.component";
import Footer from "@/components/builders/footer.component";
import FAQ from "@/components/builders/faq.component";

const maxWidthConstant = "max-w-[1000px]";

export default function About() {
  return (
    <div>
      <Bannersection topic="About Our Logistics" src={banner} subtitle="About Us" />
      <Section>
        <div className="grid grid-cols-2 gap-x-10">
          <div className="col-span-1">
            <img src={aboutIntro} alt="" className="w-full" />
          </div>
          <div className="col-span-1 px-5 py-10 space-y-4">
            <div className="space-y-3">
              <SubTitle color="bg-[#E8E8E8]/50 text-secondary">About Us</SubTitle>
              <h1 className="text-4xl text-secondary">Our Company Overview</h1>
              <p className="text-paragraph">
                Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value
                proposition.
              </p>
            </div>
            <div>
              <Tabs defaultValue="account" className="flex flex-col justify-center py-3 space-y-2">
                <TabsList className="w-full px-2 space-x-2">
                  <TabsTrigger value="approach" className="w-1/3">
                    Account
                  </TabsTrigger>
                  <TabsTrigger value="password" className="w-1/3">
                    Password
                  </TabsTrigger>
                  <TabsTrigger value="account" className="w-1/3">
                    Our Approach
                  </TabsTrigger>
                </TabsList>
                <div className="justify-self-stretch">
                  <TabsContent value="approach">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vero molestias inventore. Commodi pariatur magnam ratione itaque
                    fuga illum perferendis maiores dolorem saepe, ipsa praesentium vero officiis illo accusamus laudantium aperiam qui ad distinctio
                    impedit! Nihil quo rem voluptatum molestias.
                  </TabsContent>
                  <TabsContent value="password">Change your password here.</TabsContent>
                  <TabsContent value="account">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellendus obcaecati consectetur, sapiente dolorum, animi tempora
                    accusamus mollitia, rerum perspiciatis impedit ipsum. Molestiae doloribus delectus nobis voluptate repudiandae libero
                    necessitatibus quae, illo assumenda, aperiam obcaecati velit similique quia voluptatem unde atque deserunt, labore distinctio
                    ratione ipsa nostrum! Aliquam vel ut ab at non!
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-[#F4F4F4]">
        <div className="flex flex-col justify-center items-center gap-y-1">
          <SubTitle color="bg-[#E8E8E8]/50 text-secondary ">What We Do</SubTitle>
          <h1 className="text-3xl">Our Logistics Services</h1>
        </div>
        <div className={"grid grid-cols-3 gap-10 py-10 mx-auto " + maxWidthConstant}>
          <Ourservices title="Sea Transport Services" body="Following the quality of our service thus having gained trust of our many clients.">
            <svg className="w-12" viewBox="0 0 52 56" fill="none">
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
          </Ourservices>
          <Ourservices title="Sea Transport Services" body="Following the quality of our service thus having gained trust of our many clients.">
            <svg className="w-12" viewBox="0 0 52 56" fill="none">
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
          </Ourservices>
          <Ourservices title="Sea Transport Services" body="Following the quality of our service thus having gained trust of our many clients.">
            <svg className="w-12" viewBox="0 0 52 56" fill="none">
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
          </Ourservices>
          <Ourservices title="Sea Transport Services" body="Following the quality of our service thus having gained trust of our many clients.">
            <svg className="w-12" viewBox="0 0 52 56" fill="none">
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
          </Ourservices>
          <Ourservices title="Sea Transport Services" body="Following the quality of our service thus having gained trust of our many clients.">
            <svg className="w-12" viewBox="0 0 52 56" fill="none">
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
          </Ourservices>
          <Ourservices title="Sea Transport Services" body="Following the quality of our service thus having gained trust of our many clients.">
            <svg className="w-12" viewBox="0 0 52 56" fill="none">
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
          </Ourservices>
        </div>
      </Section>
      <FAQ />
      <Footer />
    </div>
  );
}
