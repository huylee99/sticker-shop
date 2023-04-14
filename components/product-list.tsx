import Image from "next/image";
import clsx from "clsx";
import { dancingScript, josefinSan } from "~/pages";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 10,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 11,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 12,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

const ProductList = () => {
  return (
    <>
      <div className="mx-auto px-8 py-16 sm:py-24 lg:px-32">
        <div className="mb-8 flex justify-center space-x-4">
          <a href="#_" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium leading-6 text-gray-800 whitespace-no-wrap bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-none">
            Button Text
          </a>
          <a href="#_" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium leading-6 text-gray-800 whitespace-no-wrap bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-none">
            Button Text
          </a>
          <a href="#_" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium leading-6 text-gray-800 whitespace-no-wrap bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-none">
            Rabbit
          </a>
          <a href="#_" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium leading-6 text-gray-800 whitespace-no-wrap bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-none">
            Pig
          </a>
          <a href="#_" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium leading-6 text-gray-800 whitespace-no-wrap bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:shadow-none">
            Kawaii
          </a>
        </div>

        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group rounded-lg overflow-hidden" style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
              <div className="w-full flex items-center justify-center h-[300px] aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-8 border-b border-gray-100 ">
                <Image src="/assets/star.png" width={150} height={150} alt={product.imageAlt} className="object-cover object-center group-hover:scale-110 transition-all duration-300" unoptimized />
              </div>
              <div className="p-5">
                <h3 className={clsx("text-xl font-bold text-gray-700", dancingScript.className)}>{product.name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-medium text-gray-900">{product.price}</span>
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
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
