import IconCloseMenu from "../../assets/images/icon-close-menu.svg";
import IconMenu from "../../assets/images/icon-hamburger.svg";
type MenuButtonProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const MenuButton = ({ isOpen, open, close }: MenuButtonProps) => {
  return (
    <>
      {isOpen ? (
        <button
          onClick={close}
          className="z-20 rounded-lg p-1 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-crowd-moderateCyan lg:hidden"
        >
          <img src={IconCloseMenu} alt="Menu Icon" />
        </button>
      ) : (
        <button
          onClick={open}
          className="z-20 rounded-lg p-1 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-crowd-moderateCyan lg:hidden"
        >
          <img src={IconMenu} alt="Menu Icon" />
        </button>
      )}
    </>
  );
};
