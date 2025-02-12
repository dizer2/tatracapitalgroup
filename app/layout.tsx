import type { Metadata } from "next";
// import { bebas, avenir } from "./font";
import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-avenir"
      >
        {children}
      </body>
    </html>
  );
}
