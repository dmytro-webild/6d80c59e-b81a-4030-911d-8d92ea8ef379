import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'C&S Dumpsters | Omaha’s Premium Dumpster Rental',
  description: 'Need a dumpster in Omaha? C&S Dumpsters provides fast, luxury-level dumpster rental services. Same-day delivery, fair pricing, and 5-star service. Call/Text today!',
  keywords: ["dumpster rental Omaha, residential dumpster Omaha, contractor dumpster Omaha, 15 yard dumpster Omaha, 20 yard dumpster Omaha, junk removal Omaha"],
  openGraph: {
    "title": "C&S Dumpsters Omaha",
    "description": "Premium dumpster rental service in Omaha. Fast delivery, fair prices.",
    "siteName": "C&S Dumpsters"
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
