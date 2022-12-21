import IconMenu from "../assets/images/icon-hamburger.svg";
import Logo from "../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className="h-72  bg-hero-mobile bg-cover bg-no-repeat p-6">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="logo" />
        <button className="rounded-lg p-1 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-crowd-moderateCyan">
          <img src={IconMenu} alt="Menu Icon" />
        </button>
      </div>
    </header>
  );
};
