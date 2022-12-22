import { useState } from "react";
import IconBookmark from "../../assets/images/icon-bookmark.svg";
import LogoMasterCraft from "../../assets/images/logo-mastercraft.svg";
import { BackProjectModal } from "./BackProjectModal";

export const BackProjectCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <div className="absolute top-1/4 -z-0  mx-6 space-y-4 rounded-xl border border-gray-100 bg-white p-6 text-center">
        <img
          src={LogoMasterCraft}
          alt="logo master craft"
          className="absolute left-1/2 -top-8 -translate-x-1/2"
        />
        <h1 className="px-4 text-xl font-bold text-gray-800">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="text-crowd-darkGray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={openModal}
            className="rounded-full bg-crowd-moderateCyan px-8 py-4 font-bold text-white transition-colors hover:bg-crowd-darkCyan"
          >
            Back this project
          </button>
          <button className="transition-opacity hover:opacity-80">
            <img src={IconBookmark} alt="bookmark icon" />
          </button>
        </div>
      </div>
      {modalIsOpen && <BackProjectModal close={closeModal} />}
    </div>
  );
};
