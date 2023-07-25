import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex justify-between max-w-screen-xl mx-auto pt-6 pb-4 items-center sticky top-0">
        <Link href={"/"} >
        <div className="text-xl font-bold">
          <h2 className="italic">NAVBAR</h2>
        </div>
        </Link>

        <ul className="lg:flex lg:space-x-10 lg:text-lg lg:font-normal hidden">
          <li>
            <Link href={"/Pages/Female"}>Female</Link>
          </li>
          <li>
            <Link href={"/Pages/Male"}>Male</Link>
          </li>
          <li>
            <Link href={"/Pages/Kids"}>Kids</Link>
          </li>
          <li>
            <Link href={"/"}>All Products</Link>
          </li>
        </ul>

        <div className="sm:w-[400px] border-gray-300 rounded sm:flex sm:relative items-center sm:space-x-2 sm:mx-2 hidden">
          <FiSearch className="ml-4 absolute" />
          <input
            className="w-full rounded-lg border-2  py-2 px-8 text-xs"
            type="text"
            placeholder="What you are looking for"
          />
        </div>

        {/* <div className="bg-slate-300 rounded-full">
            <BsCart size={"1.5em"} />
          </div>  */}
        <div className="flex relative mx-3">
          <Link href={"/"}>
            <div className="bg-slate-300 rounded-full p-2">
              <BsCart className="text-black" size={20} />
            </div>
          </Link>
          <div className="absolute top-0 right-0 bg-red-600 w-3 h-3 rounded-full"></div>
        </div>

        {/* <input type="text" className="border-zinc-950" /> */}
      </header>
    </>
  );
};

export default Header;
