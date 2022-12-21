import { useState } from "react";
import IconCloseMenu from "../assets/images/icon-close-menu.svg";
import IconMenu from "../assets/images/icon-hamburger.svg";
import Logo from "../assets/images/logo.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header className="h-72  bg-hero-mobile bg-cover bg-no-repeat p-6">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="logo" />
        {isOpen ? (
          <button
            onClick={() => setIsOpen(false)}
            className="z-10 rounded-lg p-1 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-crowd-moderateCyan"
          >
            <img src={IconCloseMenu} alt="Menu Icon" />
          </button>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="z-10 rounded-lg p-1 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-crowd-moderateCyan"
          >
            <img src={IconMenu} alt="Menu Icon" />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="absolute inset-0 bg-black/60">
          <ul className="fixed inset-x-10 top-20 rounded-lg bg-white">
            <li>
              <a
                href="#"
                className="block rounded-t-lg border-b border-crowd-darkGray/40 p-5 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block border-b border-crowd-darkGray/40 p-5 text-lg font-medium text-gray-800  transition-colors hover:bg-gray-200"
              >
                Discover
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-b-lg p-5 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-200"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
