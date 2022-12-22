import { Pledge, pledges } from "../data";
import { fn } from "../utils";

export const AboutCard = () => {
  return (
    <div className="mx-6 mb-8 flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-xl font-bold text-gray-900">About this project</h3>
      <p className="text-crowd-darkGray">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="text-crowd-darkGray">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <ul className="space-y-4">
        {pledges
          .filter((p) => p.minAmount != undefined)
          .map((p) => (
            <RewardCard key={p.id} pledge={p} />
          ))}
      </ul>
    </div>
  );
};

type RewardCardProps = {
  pledge: Pledge;
};

const RewardCard = ({ pledge }: RewardCardProps) => {
  return (
    <div
      className={fn(
        "flex flex-col gap-4 rounded-xl border border-gray-300 p-6",
        pledge.left === 0 && "opacity-60"
      )}
    >
      <div>
        <h4 className="font-bold text-gray-900">{pledge.title}</h4>
        <span className={fn("text-crowd-moderateCyan")}>
          Pledge ${pledge.minAmount} or more
        </span>
      </div>
      <p className="text-crowd-darkGray">{pledge.desc}</p>
      <p className="flex items-center gap-2 text-crowd-darkGray">
        <span className="text-3xl font-bold text-gray-900">{pledge.left}</span>{" "}
        left
      </p>
      <button
        disabled={pledge.left === 0}
        className={fn(
          "mr-auto rounded-full bg-crowd-moderateCyan px-8 py-3 font-medium  text-white transition-all hover:bg-crowd-darkCyan active:scale-95 disabled:bg-gray-300 disabled:active:scale-100",
          pledge.left === 0 && ""
        )}
      >
        {pledge.left === 0 ? "Out of Stock" : "Select Reward"}
      </button>
    </div>
  );
};
