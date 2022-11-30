import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header className="text-gray-700 bg-white border-b fixed top-0 w-full z-50 shadow-sm supports-[backdrop-filter]:bg-white/90 supports-[backdrop-filter]:backdrop-blur-sm">
      <nav className="p-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            Pili Agency
          </Link>
          <button
            onClick={() => setOpenMenu((isOpen) => !isOpen)}
            id="menuButton"
            data-collapse-toggle="navbar"
            type="button"
            className="md:hidden relative w-8 h-8"
            aria-controls="navbar"
            aria-expanded="false">
            <span className="sr-only">open main menu</span>
            <span
              className={`block inset-0 w-7 h-0.5 m-auto rounded-full bg-gray-600 transition-rotate duration-300 ${
                openMenu ? "absolute rotate-45" : ""
              }`}
            />
            <span
              className={`block inset-0 w-7 h-0.5 m-auto rounded-full bg-gray-600 transition-rotate duration-300 ${
                openMenu ? "absolute -rotate-45" : "mt-1.5"
              }`}
            />
          </button>
          <div
            className={`${openMenu ? "block mt-4" : "hidden"} w-full md:mt-0 md:block md:w-auto`}
            id="navbar">
            <ul className="flex flex-col md:items-center bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-9 md:text-sm md:font-medium md:border-0 md:bg-transparent uppercase">
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "text-white bg-beige md:text-beige md:bg-transparent"
                      : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-beige"
                  } block py-2 pr-4 pl-3 rounded md:p-0`}>
                  Forside
                </Link>
              </li>
              <li>
                <Link
                  href="/cases"
                  className={`${
                    pathname === "/cases"
                      ? "text-white bg-beige md:text-beige md:bg-transparent"
                      : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-beige"
                  } block py-2 pr-4 pl-3 rounded md:p-0`}>
                  Cases
                </Link>
              </li>
              <li>
                <Link
                  href="/creators"
                  className={`${
                    pathname === "/creators"
                      ? "text-white bg-beige md:text-beige md:bg-transparent"
                      : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-beige"
                  } block py-2 pr-4 pl-3 rounded md:p-0`}>
                  Creators
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontakt"
                  className="block text-gray-700 py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:text-white md:mr-0 md:py-2.5 md:px-5 md:rounded-lg md:bg-beige md:hover:bg-beigehover md:active:bg-beigehover focus:outline-none focus:ring focus:ring-black">
                  Kontakt os
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
