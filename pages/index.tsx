import { Inter, Dancing_Script, Indie_Flower, Josefin_Sans } from "next/font/google";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Hero from "~/components/hero";
import Header from "~/components/header";
import clsx from "clsx";
import ProductList from "~/components/product-list";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr/_internal";

export const josefinSan = Josefin_Sans({ subsets: ["latin"] });
export const dancingScript = Dancing_Script({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
export const indieFlower = Indie_Flower({ subsets: ["latin"], weight: "400" });

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${getBaseUrl()}/api/get-products`);
  const products = await result.json();

  return {
    props: {
      fallback: {
        "/api/get-products": products,
      },
    },
  };
};

const Home = ({ fallback }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo title="Skitter | Stick with us for all your sticker needs!" description="Funny, motivational, cute, and edgy, our sticker collection has it all. Stick with us and make your mark!" />
      <main className={clsx(inter.className, "min-h-screen")}>
        <Header />
        <Hero />
        <SWRConfig value={{ fallback }}>
          <ProductList />
        </SWRConfig>
      </main>
    </>
  );
};

export default Home;
