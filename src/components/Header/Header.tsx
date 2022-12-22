import { useState } from "react";

import Logo from "../../assets/images/logo.svg";
import { MenuButton } from "./MenuButton";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return (
    <header className="h-72 bg-hero-mobile bg-contain bg-fixed bg-no-repeat p-6 lg:bg-hero-desktop">
      {/* overlay */}
      <div className="absolute inset-x-0 top-0  h-24 bg-gradient-to-b from-black/40 to-transparent"></div>
      <div className="z-10 mx-auto flex max-w-6xl items-center justify-between lg:relative">
        <img src={Logo} alt="logo" />
        <ul className="hidden items-center gap-6 text-white lg:flex">
          <li>
            <a
              href="#"
              className="border-b border-transparent font-medium transition-all hover:border-white hover:opacity-70"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-b border-transparent font-medium transition-all hover:border-white hover:opacity-70"
            >
              Discover
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-b border-transparent font-medium transition-all hover:border-white hover:opacity-70"
            >
              Get Started
            </a>
          </li>
        </ul>
        <MenuButton isOpen={isOpen} open={open} close={close} />
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};
