import { metadata } from "./metadata";
import { Inter,Montserrat,Poppins} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const poppins = Poppins({
  weight: ['400','500','600', '700'],
  subsets: ['latin'],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
