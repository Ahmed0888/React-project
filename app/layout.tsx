// import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// // import "./globals.css"; 
// // import "./globals.css";
// import "@/app/globals.css";

// import { Poppins} from "next/font/google";
// import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
// import Footer from "@/components/Home/Footer/Footer";

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// const font = Poppins({
//   weight: ["100", "200","300", "400", "500","600", "700", "800","900"],
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "App landing page || Next 15 ",
//   description: "App landing page using next 15  ",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${font.className} antialiased`}>
//         <ResponsiveNav/>
//         {children}
//         <Footer/>
//         </body>
//     </html>
//   );
// }




import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";

import { Poppins } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App landing page || Next 15",
  description: "App landing page using next 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4YJML9QWGP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4YJML9QWGP');
          `}
        </Script>
      </head>

      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
