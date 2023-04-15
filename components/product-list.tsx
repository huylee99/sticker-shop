import Image from "next/image";
import clsx from "clsx";
import { dancingScript } from "~/pages";
import useSWR from "swr";
import { type ProductsResult } from "~/db/query";

const fetcher = async () => {
  const result = await fetch("/api/get-products");
  const products = await result.json();

  return products;
};

const ProductList = () => {
  const { data } = useSWR<ProductsResult>("/api/get-products", fetcher);

  return (
    <>
      <div className="mx-auto px-8 py-8 sm:py-16 lg:px-32">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8 ">
          {data &&
            data.map(({ product, category }) => (
              <div key={product.id} className="group rounded-lg overflow-hidden" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                <div className="w-full flex items-center justify-center h-[300px] aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-8 border-b border-gray-100 ">
                  <Image src={`/assets/${category.name.toLowerCase()}/${product.image}.png`} width={150} height={150} alt={product.slug} className="object-cover object-center group-hover:scale-110 transition-all duration-300" unoptimized />
                </div>
                <div className="p-5">
                  <h3 className={clsx("text-xl font-bold text-gray-700", dancingScript.className)}>{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-medium text-gray-900">${product.price}</span>
                    <button type="button" className="relative inline-block text-sm group/button">
                      <span className="relative z-10 block px-4 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover/button:text-white">
                        <span className="absolute inset-0 w-full h-full px-4 py-2 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover/button:-rotate-180 ease"></span>
                        <span className="relative">Add to cart</span>
                      </span>
                      <span className="absolute bottom-0 right-0 w-full h-10 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover/button:mb-0 group-hover/button:mr-0" data-rounded="rounded-lg"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
