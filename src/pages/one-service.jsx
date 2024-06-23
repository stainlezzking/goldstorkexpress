import Section from "@/components/builders/section.component";
import banner from "../assets/pages-banner/one-service.png";
import main from "../assets/service-main.png";
import benefit from "../assets/service-benefit.png";
import Bannersection from "@/components/builders/banner.component";

import Footer from "@/components/builders/footer.component";

const maxWidthConstant = "max-w-[1000px]";

export default function Service() {
  return (
    <div>
      <Bannersection topic="Service Details" src={banner} subtitle="one service" />
      <Section className={"mx-auto " + maxWidthConstant}>
        <div className="space-y-10">
          <img src={main} alt="" />
          <div className="space-y-4">
            <div className="flex gap-x-5">
              <svg className="w-14" viewBox="0 0 52 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6602 7.16494V1" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M50.3195 35.9345C46.5692 49.035 29.2046 53.6073 26.1221 54.3265C25.8187 54.4037 25.5008 54.4037 25.1974 54.3265C22.1149 53.6073 4.75034 49.035 1 35.9345V27.1494C0.999964 26.7167 1.13652 26.295 1.39021 25.9445C1.64389 25.594 2.00176 25.3324 2.4128 25.1972L25.0176 17.6452C25.436 17.5164 25.8835 17.5164 26.3019 17.6452L48.9067 25.1972C49.3178 25.3324 49.6756 25.594 49.9293 25.9445C50.183 26.295 50.3195 26.7167 50.3195 27.1494V35.9345Z"
                  stroke="#1C1F35"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.1271 47.6652C23.6883 47.1036 9.94964 43.5341 6.98242 33.3066"
                  stroke="#1C1F35"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.98242 9.98267V23.136L25.5288 16.555L44.0752 23.136V9.98267C44.0752 8.32581 42.7321 6.98267 41.0752 6.98267H9.98242C8.32557 6.98267 6.98242 8.32581 6.98242 9.98267Z"
                  fill="#FFD550"
                  stroke="#1C1F35"
                  stroke-width="2"
                />
                <path d="M25.6602 37.9898V17.5427" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M30.9141 36.8963L30.9141 28.5205" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.7686 17.7515V11.7688" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M48.8613 20.1446V9.37573" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h1 className="text-4xl font-bold text-secondary">Sea Transport Services</h1>
            </div>
            <p className="text-paragraph">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est,
              qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et
              dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
              ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae
              consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus,
              qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non
              provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
              est et expedita distinctio.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mt-16">
          <div className="col-span-1 px-2">
            <div className="space-y-3">
              <h1 className="text-4xl text-secondary font-bold">Benefit of Service</h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione tempora amet quis facilis quisquam, itaque dolor atque libero
                delectus, veritatis maiores unde? Incidunt minus exercitationem asperiores voluptates illo eaque modi? Harum facilis consequuntur
                quasi tempora quaerat nemo numquam vel?
              </p>
            </div>
            <div className="py-5 space-y-2">
              <p className="flex gap-x-3 items-center">
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.53846 1.38428L15 7.88428M15 7.88428L8.53846 14.3843M15 7.88428H1"
                      stroke="#1C1F35"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span>Lorem ipsum dolor, sit amet consectetur a </span>
              </p>
              <p className="flex gap-x-3 items-center">
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.53846 1.38428L15 7.88428M15 7.88428L8.53846 14.3843M15 7.88428H1"
                      stroke="#1C1F35"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span>Lorem ipsum dolor, sit amet consectetur a </span>
              </p>
              <p className="flex gap-x-3 items-center">
                <span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.53846 1.38428L15 7.88428M15 7.88428L8.53846 14.3843M15 7.88428H1"
                      stroke="#1C1F35"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span>Lorem ipsum dolor, sit amet consectetur a </span>
              </p>
            </div>
          </div>
          <div className="col-span-1 self-stretch">
            <img src={benefit} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-10 mt-16">
          <div className="col-span-1 self-stretch">
            <img src={benefit} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="col-span-1 px-2">
            <div className="space-y-3">
              <h1 className="text-4xl text-secondary font-bold">How it Works</h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione tempora amet quis facilis quisquam, itaque dolor atque libero
                delectus, veritatis maiores unde? Incidunt minus exercitationem asperiores voluptates illo eaque modi? Harum facilis consequuntur
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, accusamus.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
