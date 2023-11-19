import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ruposhi | Actor,model portfolio",
  description:
    "Ruposhi represents over 300 professional models, actors and kids for clients in Sacramento and San Francisco. With over 20 years of experience and hands-on attention, we offer personalized service to our talent and clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
