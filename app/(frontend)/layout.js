import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/builders/navbar.component";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Gold Stork Express",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            console.log("smartsupp");
              var _smartsupp = _smartsupp || {};
              _smartsupp.key = '5f5b902f89fe44916bb78e8cd84b5c3928dc8490';
              window.smartsupp||(function(d) {
                var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
                s=d.getElementsByTagName('script')[0];c=d.createElement('script');
                c.type='text/javascript';c.charset='utf-8';c.async=true;
                c.src='https://www.smartsuppchat.com/loader.js?';
                s.parentNode.insertBefore(c,s);
              })(document);
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
