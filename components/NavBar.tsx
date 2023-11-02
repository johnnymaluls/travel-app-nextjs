import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./shared/Button";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <Image src="hilink-logo.svg" height={29} width={74} alt="logo" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-base font-normal text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Button
          type="button"
          text="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default NavBar;
