import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/app/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-jakarta',
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth dark ${inter.variable} ${plusJakarta.variable}`}>
      <body
        className={`${inter.className} antialiased leading-relaxed
        overflow-x-hidden bg-white dark:bg-darkTheme dark:text-white`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}