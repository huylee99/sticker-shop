import { josefinSan } from "~/pages";
import clsx from "clsx";

const Hero = () => {
  return (
    <section className="py-12 px-8 max-w-full mx-auto">
      <h1 className={clsx(josefinSan.className, "text-center text-5xl font-bold mb-2 text-amber-800")}>Grab Skitter!</h1>
      <p className="max-w-2xl mx-auto text-center text-lg text-gray-600">
        At our sticker website, we know that sometimes all it takes is a single sticker to make a bold statement. From funny to motivational, cute to edgy, our sticker collection has it all. Stick with us and make your mark!
      </p>
    </section>
  );
};

export default Hero;
