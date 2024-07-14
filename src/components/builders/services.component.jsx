import Ourservices from "./ourservices.component";
import Section from "./section.component";
import SubTitle from "./title.component";

const maxWidthConstant = "max-w-[1000px]";

export default function ServicesComp() {
  return (
    <Section className="bg-[#F4F4F4]">
      <div className="flex flex-col justify-center items-center gap-y-1">
        <SubTitle color="bg-[#E8E8E8]/50 text-secondary ">What We Do</SubTitle>
        <h1 className="text-3xl">Our Logistics Services</h1>
      </div>
      <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-md:gap-x-5 gap-10 py-10 mx-auto " + maxWidthConstant}>
        <Ourservices
          title="Sea Transport Services"
          body="We provide reliable and efficient sea transport services, ensuring your goods are shipped safely and on time across international waters."
        >
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
        <Ourservices
          title="Warehousing Services"
          body="Our warehousing solutions are designed to optimize your supply chain. We offer secure, state-of-the-art storage facilities equipped with advanced inventory management systems."
        >
          <svg className="w-12" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.05176 45.6494H54.4327" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M32.4324 45.6494V3.56246C32.4324 3.05509 32.2275 2.5685 31.8626 2.20973C31.4977 1.85097 31.0029 1.64941 30.4869 1.64941H7.13991C6.62391 1.64941 6.12905 1.85097 5.76418 2.20973C5.39932 2.5685 5.19434 3.05509 5.19434 3.56246V45.6494"
              stroke="#141414"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.4326 14.2209H48.2898C49.9466 14.2209 51.2898 15.5641 51.2898 17.2209V44.6019H32.4326V14.2209Z"
              fill="#FFD550"
              stroke="#141414"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M13.5752 11.0779H20.9085" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.00391 41.459L1.00391 26.7923" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M55.4805 30.9824L55.4805 16.3158" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M35.5752 10.0303L42.9085 10.0303" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.7188 26.792H24.0521" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.5752 36.2209H20.9085" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.7656 36.2209H43.9561" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.7656 26.792H43.9561" stroke="#141414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Ourservices>
        <Ourservices
          title="Air Fright Services"
          body="We collaborate with leading airlines to provide comprehensive air cargo services, ensuring your goods reach their destination quickly and safely."
        >
          <svg className="w-12" viewBox="0 0 74 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4375 44.3777H53.0681" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34.3535 29.5188L49.7721 20.2362" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.87988 26.9482L15.855 32.9234" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.24219 24.7891L7.21731 30.7642" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M15.9119 24.5191L25.3064 33.5308C26.5591 34.7338 28.1573 35.4905 29.8634 35.6882C31.5694 35.886 33.2923 35.5144 34.7757 34.6286L72.5032 12.1631L67.8682 6.34255C66.6625 4.83397 64.9699 3.81692 63.0962 3.47514C61.2225 3.13336 59.2912 3.48941 57.6514 4.47895L46.5873 11.142L31.6358 6.03621L27.5242 7.84876C27.2166 7.98381 26.9471 8.19603 26.7406 8.46585C26.5341 8.73566 26.3973 9.05439 26.3427 9.39265C26.288 9.73092 26.3174 10.0778 26.4281 10.4014C26.5388 10.7249 26.7272 11.0148 26.976 11.2441L34.6261 18.2901L27.6488 22.3747L20.6714 19.3112L16.485 21.1493C16.1805 21.2833 15.9133 21.4931 15.7078 21.7595C15.5022 22.0259 15.3648 22.3407 15.3079 22.6752C15.251 23.0098 15.2764 23.3536 15.3819 23.6756C15.4874 23.9975 15.6695 24.2874 15.9119 24.5191V24.5191Z"
              stroke="#1C1F35"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M68.724 7.66756C62.7342 12.3721 56.8215 12.9633 52.5283 7.66756L55.9016 5.47491C60.0936 2.75015 65.6757 3.7047 68.724 7.66756Z"
              fill="#FFD550"
              stroke="#1C1F35"
              strokeWidth="2"
            />
          </svg>
        </Ourservices>
        <Ourservices
          title="Project & Exhibition"
          body="From planning and coordination to execution, our team handles every detail to ensure your project or event is a success."
        >
          <svg className="w-12" viewBox="0 0 52 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.83301 41.7498V14.9165" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.167 14.9165V41.7498" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.333 28.3335V32.1668" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 26.4167V32.1667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M31.667 24.5V32.1667" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M45.0833 7.25H2.91666C1.85812 7.25 1 8.10812 1 9.16666V13C1 14.0585 1.85812 14.9167 2.91666 14.9167H45.0833C46.1418 14.9167 46.9999 14.0585 46.9999 13V9.16666C46.9999 8.10812 46.1418 7.25 45.0833 7.25Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.0833 7.25H2.91666C1.85812 7.25 1 8.10812 1 9.16666V13C1 14.0585 1.85812 14.9167 2.91666 14.9167H45.0833C46.1418 14.9167 46.9999 14.0585 46.9999 13V9.16666C46.9999 8.10812 46.1418 7.25 45.0833 7.25Z"
              fill="#FFD550"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3997 57.2948C15.5968 55.985 14.7876 52.8168 16.813 50.2047"
              stroke="#1C1F35"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M1 1H22" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M51 18L51 28" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 41.75V49.4167" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M24.0003 57.0834C26.1174 57.0834 27.8337 55.3672 27.8337 53.2501C27.8337 51.133 26.1174 49.4167 24.0003 49.4167C21.8832 49.4167 20.167 51.133 20.167 53.2501C20.167 55.3672 21.8832 57.0834 24.0003 57.0834Z"
              fill="#FFD550"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M1 41.75H46.9999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Ourservices>
        <Ourservices
          title="Local Shipping Services"
          body="With a fleet of modern vehicles and a dedicated team of drivers, we offer efficient and reliable transportation solutions for businesses of all sizes."
        >
          <svg className="w-12" viewBox="0 0 56 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M39.0752 16.0422V6.07788H44.672C47.5065 6.07788 50.0613 7.7873 51.1426 10.4075L53.183 15.3514C53.3188 15.6806 53.0769 16.0422 52.7208 16.0422H39.0752Z"
              fill="#FFD550"
              stroke="#1C1F35"
              strokeWidth="2"
            />
            <path d="M1.43262 22.6855H39.0755" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M42.3968 40.399C46.0655 40.399 49.0396 37.4249 49.0396 33.7561C49.0396 30.0874 46.0655 27.1133 42.3968 27.1133C38.728 27.1133 35.7539 30.0874 35.7539 33.7561C35.7539 37.4249 38.728 40.399 42.3968 40.399Z"
              stroke="#1C1F35"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.6116 40.399C17.2804 40.399 20.2545 37.4249 20.2545 33.7561C20.2545 30.0874 17.2804 27.1133 13.6116 27.1133C9.94286 27.1133 6.96875 30.0874 6.96875 33.7561C6.96875 37.4249 9.94286 40.399 13.6116 40.399Z"
              fill="#FFD550"
              stroke="#1C1F35"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M35.7539 32.6494H20.2539" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M6.91297 32.6494H3.31476C2.81558 32.6494 2.33685 32.4453 1.98388 32.0819C1.63091 31.7186 1.43262 31.2258 1.43262 30.7119V3.58691C1.43262 3.07306 1.63091 2.58025 1.98388 2.2169C2.33685 1.85354 2.81558 1.64941 3.31476 1.64941H39.0755V27.6119"
              stroke="#1C1F35"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39.0752 16.042H54.5752V30.8039C54.5752 31.2933 54.3711 31.7626 54.0077 32.1087C53.6444 32.4547 53.1516 32.6491 52.6377 32.6491H48.9011"
              stroke="#1C1F35"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M5.86133 15.3511L5.86133 6.07788" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.7893 18.2568L35.0625 18.2568" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M25.7899 36.9709L29.1113 36.9709" stroke="#1C1F35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Ourservices>
        <Ourservices
          title="Customer Clearance"
          body="Our customs clearance services streamline the process, ensuring your shipments comply with all legal requirements."
        >
          <svg className="w-12" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.8271 28.8953C32.3508 28.8953 38.45 22.7961 38.45 15.2724C38.45 7.74862 32.3508 1.64941 24.8271 1.64941C17.3033 1.64941 11.2041 7.74862 11.2041 15.2724C11.2041 22.7961 17.3033 28.8953 24.8271 28.8953Z"
              fill="#FFD550"
              stroke="#1C1F35"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.34668 37.9774C7.73355 35.1326 10.7145 32.8451 14.08 31.2756C17.4456 29.7061 21.114 28.8928 24.8275 28.8928C28.541 28.8928 32.2094 29.7061 35.575 31.2756C38.9405 32.8451 41.9215 35.1326 44.3084 37.9774"
              stroke="#1C1F35"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M51.8916 39.1123L41.6744 39.1123L41.6744 20.9484L51.8916 20.9484L51.8916 39.1123Z"
              fill="white"
              stroke="#141414"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M51.8916 27.76L41.6744 27.76L41.6744 20.9485L51.8916 20.9485L51.8916 27.76Z"
              fill="#FFD550"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M48.4863 25.4895L45.0806 25.4895" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M48.4863 31.1653L45.0806 31.1653" stroke="#141414" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M55.2979 28.8953L55.2979 38.5526" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M6.71985 22.6294C5.84412 21.4753 3.68546 17.6349 5.35547 10.4199"
              stroke="#1C1F35"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M35.2446 16.685C35.1963 17.8454 34.555 21.3291 29.708 25.0125" stroke="#1C1F35" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Ourservices>
      </div>
    </Section>
  );
}
