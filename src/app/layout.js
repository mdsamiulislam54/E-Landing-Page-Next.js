import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navber/page";
import Footer from "@/components/footer/page";
import Providers from "@/components/provider/providers";

const geistSans = Poppins({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



export const metadata = {
  title: "E-landing page",
  description: "E-landing page with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body
        className={geistSans.className}
      >

        <Providers>
          <header className="bg-gray-800 text-white">
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>

    </html>
  );
}
