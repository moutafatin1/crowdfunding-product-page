import { useState } from "react";

import Logo from "../../assets/images/logo.svg";
import { MenuButton } from "./MenuButton";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return (
    <header className="h-72  bg-hero-mobile bg-cover bg-no-repeat p-6">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <MenuButton isOpen={isOpen} open={open} close={close} />
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};
