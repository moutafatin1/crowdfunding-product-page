import { FormEvent, useState } from "react";
import { useBackingContext } from "../../context";
import { Pledge } from "../../data";
import { fn } from "../../utils";

type PledgeCard = {
  close: () => void;

  pledge: Pledge;
  setSelectedPledge: (value: string) => void;
  selectedPledge: string;
};

export const PledgeCard = ({
  pledge,
  selectedPledge,
  setSelectedPledge,
  close,
}: PledgeCard) => {
  const [pledgeAmount, setPledgeAmount] = useState("");
  const { addBacking } = useBackingContext();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBacking?.(Number(pledgeAmount));
    close();
  };
  return (
    <li
      className={fn(
        "rounded-xl border border-gray-200",
        pledge.left === 0 && "opacity-60"
      )}
    >
      <span className="block space-y-4 p-6">
        <label className="flex items-center gap-4">
          <input
            onChange={(e) => {
              setSelectedPledge(e.target.value);
              setPledgeAmount(pledge.minAmount?.toString() ?? "0");
            }}
            type="radio"
            name="pledge"
            disabled={pledge.left === 0}
            checked={selectedPledge === pledge.value}
            value={pledge.value}
            className="h-6 w-6 cursor-pointer text-crowd-moderateCyan transition-transform hover:scale-90 focus:ring-crowd-moderateCyan active:scale-100"
          />
          <span className="flex flex-col">
            <span className="text-lg font-bold">{pledge.title}</span>
            {pledge.minAmount !== undefined && (
              <span className={fn("text-crowd-moderateCyan")}>
                Pledge ${pledge.minAmount} or more
              </span>
            )}
          </span>
        </label>

        <p className="text-crowd-darkGray">{pledge.desc}</p>
        {pledge.left !== undefined && (
          <p className="text-crowd-darkGray">
            <span className="text-lg font-bold text-gray-900">
              {pledge.left}
            </span>
            <span className="ml-2">left</span>
          </p>
        )}
      </span>
      {selectedPledge === pledge.value && (
        <span className="flex flex-col  items-center gap-4 border-t p-6 lg:flex-row lg:justify-between">
          <p className="text-crowd-darkGray">Enter your pledge</p>
          <form onSubmit={onSubmit} className="flex items-center gap-8">
            <div className="relative">
              <input
                onChange={(e) => setPledgeAmount(e.target.value)}
                defaultValue={pledge.minAmount}
                type="number"
                className="h-12 w-28 rounded-full pl-10 pr-2 font-bold text-gray-800 focus:border-crowd-moderateCyan focus:ring-crowd-moderateCyan"
              />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-crowd-darkGray">
                $
              </span>
            </div>
            <button className="h-12 w-32 rounded-full bg-crowd-moderateCyan font-bold text-white transition-colors hover:bg-crowd-darkCyan">
              Continue
            </button>
          </form>
        </span>
      )}
    </li>
  );
};
