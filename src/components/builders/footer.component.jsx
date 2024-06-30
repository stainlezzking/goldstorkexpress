import { Link } from "react-router-dom";

const maxWidthConstant = "max-w-[1200px]";

export default function Footer({ children }) {
  return (
    <div className="bg-secondary">
      <div className="bg-white/10">
        <div className={"mx-auto " + maxWidthConstant}>
          <div className="flex gap-x-3 items-center py-5 bg-secondary ps-7 pe-16 w-fit">
            <svg className="w-10" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="4.89111" width="9.78261" height="9.78261" transform="rotate(-30 0 4.89111)" fill="#FFB82B" />
              <rect x="4.13086" y="15" width="10" height="10" fill="#FFB82B" />
              <rect x="18.1309" y="2" width="10" height="10" fill="#FFB82B" />
              <rect x="18.1309" y="15" width="10" height="10" fill="#FFB82B" />
            </svg>
            <h1 className="text-xl font-bold text-white">Gold-Stork-Express</h1>
          </div>
        </div>
      </div>
      <div className={"mx-auto " + maxWidthConstant}>
        <div className="w-fit p-7 lg:pb-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2">
            <p className="text-[#E8E8E8]">
              Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the overall value proposition.
            </p>
            <div className="space-y-5 py-7 text-white">
              <div className="flex gap-x-2 items-center">
                <svg className="w-10 shrink-0" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="31.6309" cy="32" r="31" fill="#111C55" stroke="#273270" />
                  <path
                    d="M41.1268 23.5H23.1349C22.5804 23.5 22.1309 23.8755 22.1309 24.3387V37.6613C22.1309 38.1245 22.5804 38.5 23.1349 38.5H41.1268C41.6813 38.5 42.1309 38.1245 42.1309 37.6613V24.3387C42.1309 23.8755 41.6813 23.5 41.1268 23.5Z"
                    stroke="#F6B426"
                  />
                  <path d="M22.1309 23.5L32.5556 30.5L42.1309 23.7294" stroke="#F6B426" />
                </svg>
                <div>
                  <p>Email</p>
                  <a href="https://mailto:contact@goldstorkexpress.com">contact@goldstorkexpress.com</a>
                </div>
              </div>
              <div className="flex gap-x-2 items-center">
                <svg className="w-10 shrink-0" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="31.5" cy="31.5" r="31" fill="#111C55" stroke="#273270" />
                  <path
                    d="M23.9741 22.1408C23.8394 22.1449 23.7071 22.1743 23.5848 22.2272C23.4625 22.28 23.3528 22.3554 23.2622 22.4487C23.1715 22.542 23.1018 22.6514 23.0571 22.7704C23.0124 22.8894 22.9936 23.0156 23.0019 23.1416C23.1364 25.3015 23.7704 30.5716 26.8059 33.8583C30.4409 37.8181 35.1748 39.1824 40.0317 38.9808C40.292 38.9662 40.5368 38.8596 40.7165 38.6826C40.8962 38.5055 40.9975 38.2712 41 38.0268V34.5674C40.997 34.2446 40.8783 33.9322 40.663 33.6802C40.4476 33.4282 40.1482 33.2513 39.8127 33.1779L37.3804 32.6739C37.0796 32.6138 36.7664 32.6397 36.4815 32.7481C36.1965 32.8566 35.9528 33.0427 35.7819 33.2823L35.244 34.0454C35.1946 34.1153 35.1208 34.1668 35.0352 34.1911C34.9496 34.2154 34.8577 34.211 34.7752 34.1786C33.5379 33.6783 28.6081 31.5184 28.0663 27.8753C28.0557 27.805 28.0675 27.7333 28.1003 27.6692C28.1332 27.6051 28.1855 27.5516 28.2507 27.5154L29.2267 26.9574C29.4944 26.802 29.7047 26.5732 29.8291 26.3022C29.9535 26.0311 29.986 25.7308 29.9222 25.4419L29.3881 23.1236C29.31 22.7988 29.1142 22.5093 28.8339 22.3045C28.5537 22.0998 28.2064 21.9923 27.8511 22.0004L23.9741 22.1408Z"
                    stroke="#F6B426"
                  />
                </svg>
                <div>
                  <p>Call Us</p>
                  <p>(00) 112 365 489</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 space-y-1 ps-3 text-white flex flex-col justify-center">
            <Link className="block py-1 hover:text-white/70">About Us</Link>
            <Link className="block py-1 hover:text-white/70">Our Team</Link>
            <Link className="block py-1 hover:text-white/70">Our Project</Link>
            <Link to="/blogs" className="block py-1 hover:text-white/70">
              Blogs
            </Link>
          </div>
        </div>
      </div>
      <div className="py-2 border-t border-t-[#4E5683] text-center text-white">
        <p>Copyright &copy; of Gold Stork Express</p>
      </div>
    </div>
  );
}
