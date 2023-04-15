import { Inter, Dancing_Script, Indie_Flower, Josefin_Sans } from "next/font/google";
import Hero from "~/components/hero";
import Header from "~/components/header";
import clsx from "clsx";
import ProductList from "~/components/product-list";
import { NextSeo } from "next-seo";

export const josefinSan = Josefin_Sans({ subsets: ["latin"] });
export const dancingScript = Dancing_Script({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
export const indieFlower = Indie_Flower({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <NextSeo title="Skitter | Stick with us for all your sticker needs!" description="Funny, motivational, cute, and edgy, our sticker collection has it all. Stick with us and make your mark!" />
      <main className={clsx(inter.className, "min-h-screen")}>
        <Header />
        <Hero />
        <ProductList />
      </main>
    </>
  );
}
