import React from "react";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import { inter, spaceGrotesk, montserrat, roboto } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Sportivo",
  description:
    "The official sports club of Future Institute Of Engineering and Management",
  icons: {
    icon: "/assets/images/logo4.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${montserrat.variable} ${roboto.variable}`}
    >
      <head></head>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
