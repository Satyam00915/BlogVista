"use client";

import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import Authptions from "./Authptions";

// import { Button } from "./ui/moving-border";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <div className="flex justify-between border-b border-slate-500 items-center gap-3 mx-5 py-4 fixed top-0 left-0 right-0 z-30 bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <Link href="/" className="flex gap-5 items-center">
        <Image src="/logo1.png" width={50} height={50} alt="Logo" />
        <h1 className="text-2xl font-semibold">Blog-Vista</h1>
      </Link>

      <div className="flex justify-around gap-5 bg-slate-500 rounded-full px-6 py-3">
        {navLinks.map((navs) => {
          return (
            <div className="text-xl relative group" key={navs.href}>
              <Link
                href={navs.href}
                className="hover:text-shadow font-semibold transition-all duration-300"
              >
                {navs.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </Link>
            </div>
          );
        })}
      </div>
      <Authptions />
    </div>
  );
};

export default Navbar;
