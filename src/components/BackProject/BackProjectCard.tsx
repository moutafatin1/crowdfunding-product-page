import { useState } from "react";
import LogoMasterCraft from "../../assets/images/logo-mastercraft.svg";
import { fn } from "../../utils";
import { Card } from "../common/Card";
import { BackProjectModal } from "./BackProjectModal";
import { IconBookmark } from "./IconBookmark";

export const BackProjectCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
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
            className="group rounded-full bg-crowd-moderateCyan px-8 py-4 font-bold text-white transition-colors hover:bg-crowd-darkCyan lg:px-10"
          >
            Back this project
          </button>
          <button
            onClick={() => setIsBookmarked((old) => !old)}
            className={fn(
              "flex items-center  transition-opacity hover:opacity-80 lg:rounded-full lg:bg-gray-200"
            )}
          >
            <IconBookmark isBookmarked={isBookmarked} />
            <span
              className={fn(
                "hidden px-4 text-lg font-bold text-crowd-darkGray text-crowd-darkGray/70 transition-colors lg:inline",
                isBookmarked &&
                  "text-crowd-moderateCyan group-hover:text-crowd-darkCyan"
              )}
            >
              {isBookmarked ? "Bookmarked" : "Bookmark"}
            </span>
          </button>
        </div>
      </Card>
      {modalIsOpen && <BackProjectModal close={closeModal} />}
    </div>
  );
};
