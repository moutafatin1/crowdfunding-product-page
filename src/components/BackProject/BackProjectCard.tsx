import { useState } from "react";
import IconBookmark from "../../assets/images/icon-bookmark.svg";
import LogoMasterCraft from "../../assets/images/logo-mastercraft.svg";
import { Card } from "../common/Card";
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
    <div className="">
      <Card className="absolute top-1/4 left-1/2 -z-0 -translate-x-1/2 space-y-4  rounded-xl border border-gray-100 bg-white px-6 py-8 text-center lg:space-y-8">
        <img
          src={LogoMasterCraft}
          alt="logo master craft"
          className="absolute left-1/2 -top-8 -translate-x-1/2"
        />
        <h1 className="px-4 text-xl font-bold text-gray-800 lg:text-3xl">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="text-crowd-darkGray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex items-center justify-center gap-4 lg:justify-around">
          <button
            onClick={openModal}
            className="rounded-full bg-crowd-moderateCyan px-8 py-4 font-bold text-white transition-colors hover:bg-crowd-darkCyan lg:px-10"
          >
            Back this project
          </button>
          <button className="flex items-center  transition-opacity hover:opacity-80 lg:rounded-full lg:bg-gray-200 ">
            <img src={IconBookmark} alt="bookmark icon" />
            <span className="hidden px-4 text-lg font-bold text-crowd-darkGray lg:inline">
              Bookmark
            </span>
          </button>
        </div>
      </Card>
      {modalIsOpen && <BackProjectModal close={closeModal} />}
    </div>
  );
};
