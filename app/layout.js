import { Inter } from "next/font/google";
import "./globals.css";
import Dash from "@/components/dash/Dash";
import Nav from "@/components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rodrigo Javier Quinteros",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex items-center md:items-stretch md:min-h-screen flex-col md:flex-row pt-12 justify-between px-7 md:px-[10%]"> 
          <Dash/>
          <div className="w-full mt-5 md:mt-0 md:w-[72.3%] bg-neutral-800 rounded-xl">
            <div className="relative">
                {children}
                <Nav/>
            </div>
            
        </div>
          
        </div>
      </body>
    </html>
  );
}
