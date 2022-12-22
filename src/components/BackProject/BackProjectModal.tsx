import { useState } from "react";
import CloseModalIcon from "../../assets/images/icon-close-modal.svg";
import { pledges } from "../../data";
import { Card } from "../common/Card";
import { PledgeCard } from "./PledgeCard";

type BackProjectModalProps = {
  close: () => void;
};
export const BackProjectModal = ({ close }: BackProjectModalProps) => {
  const [selectedPledge, setSelectedPledge] = useState("");

  return (
    <div>
      <div className="fixed inset-0 z-10 h-full bg-black/60"></div>
      <Card className="absolute  left-1/2 top-24 z-20 my-6 -translate-x-1/2 rounded-xl bg-white p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">Back this project</h2>
          <button
            onClick={close}
            className=" rounded-lg p-1 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-crowd-moderateCyan"
          >
            <img src={CloseModalIcon} alt="close modal icon" />
          </button>
        </div>
        <p className="mt-6 text-crowd-darkGray">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <ul className="mt-6 space-y-4">
          {pledges.map((p) => (
            <PledgeCard
              key={p.id}
              pledge={p}
              setSelectedPledge={(value) => setSelectedPledge(value)}
              selectedPledge={selectedPledge}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
};
