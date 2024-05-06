import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-propvider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://michaelwon-portfolio.vercel.app/"),

  title: "Michael Wondwossen",
  authors: {
    name: "Michael Wondwossen",
  },

  description:
    " Based in Ethiopia, I'm a FullStack developer passionate about building a modern web application and mobile app that users love.",
  openGraph: {
    title: "Michael Wondwossen",
    description:
      " Based in Ethiopia, I'm a FullStack developer passionate about building a modern web application and mobile app that users love.",
    url: "https://michaelwon-portfolio.vercel.app/",
    siteName: "Michael Wondwossen",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "web coding",
    "Michael Wondwossen",
    "web dev ethiopia",
    "application dev",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
