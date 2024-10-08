import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/components/Common/Navbar/Navbar";
import WhatsappContact from "./ui/components/WhatsappContact/WhatsappContact";


const montserrat = Montserrat({ subsets: ["latin"], display: 'swap', weight: ['100', '300', '400', '700', '900'], });

export const metadata = {
  title: "Jochy | Puertos",
  description: "Desarrollos inmobiliarios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <WhatsappContact />
      </body>
    </html>
  );
}
