import IconCheck from "../assets/images/icon-check.svg";
import { useBackingContext } from "../context";
import { Card } from "./common/Card";

export const ThanksModal = () => {
  const { thanksModal } = useBackingContext();
  return (
    <>
      {thanksModal?.isOpen && (
        <div className="">
          <div className="fixed inset-0 bg-black/70"></div>
          <Card className="absolute top-1/2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 rounded-xl bg-white p-4 text-center lg:max-w-xl">
            <img src={IconCheck} alt="Icon check" />

            <h3 className="text-2xl font-bold text-gray-900">
              Thanks for your support!
            </h3>
            <p className="text-crowd-darkGray">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <button
              onClick={thanksModal?.close}
              className="rounded-full bg-crowd-moderateCyan px-8 py-4 font-bold text-white transition-colors hover:bg-crowd-darkCyan "
            >
              Got it!
            </button>
          </Card>
        </div>
      )}
    </>
  );
};
