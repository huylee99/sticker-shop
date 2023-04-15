import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

import Image from "next/image";
import { dancingScript } from "~/pages";
import clsx from "clsx";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setMobileMenuOpen(false);
    });
  }, [router]);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-full justify-between items-center px-8 lg:px-32 py-6 lg:py-1" aria-label="Global">
        <div className="hidden lg:inline-block">
          <span className="sr-only">Skitter</span>
          <Image width={120} height={120} src="/assets/dog.png" alt="logo" unoptimized />
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Link href={"/"} className="block ml-4 flex-1 text-center">
          <span className={clsx(dancingScript.className, "font-bold text-5xl text-amber-700")}>Skitter</span>
        </Link>

        <div className="hidden lg:inline-block">
          <span className="sr-only">Skitter</span>
          <Image width={120} height={120} src="/assets/dog.png" alt="logo" unoptimized />
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href={"/"} className="ml-4 flex-1 text-center">
              <span className={clsx(dancingScript.className, "font-bold text-5xl text-amber-700")}>Skitter</span>
            </Link>

            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href={"/"} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
