import "./globals.css";
import { Header, Footer } from "components";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: {
    default: "Kodierung",
    template: "%s | Kodierung",
  },
  description: "A very purple in-browser IDE, connected to GitHub",
  image: "public/images/repo/social_preview.png",
  og_title: "Kodierung",
  og_description: "A very purple in-browser IDE, connected to GitHub",
  og_image: "public/images/repo/social_preview.png",
  og_image_alt: "Kodierung Logo",
  twitter_title: "Kodierung",
  twitter_description: "A very purple in-browser IDE, connected to GitHub",
  twitter_image: "public/images/repo/social_preview.png",
  twitter_image_alt: "Kodierung Logo",
};

const RootLayout = async ({ children }) => {
  return (
    <html lang="en">
      <body className="max-w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#8b479e,#2a005a)] text-[#edede3] antialiased">
        <div className="flex h-full min-h-screen w-full flex-col">
          <SpeedInsights />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
