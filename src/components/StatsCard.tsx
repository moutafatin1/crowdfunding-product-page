const stats = {
  totalBacked: 89.914,
  totalBackers: 5007,
  daysLeft: 56,
};

export const StatsCard = () => {
  return (
    <div className="mx-6 mt-56 mb-8 flex flex-col items-center gap-8 rounded-xl border border-gray-100 bg-white p-8">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-gray-900">
          ${stats.totalBacked}
        </span>
        <span className="text-crowd-darkGray">of $100,000 backed</span>
      </div>
      <hr className="w-20 border-gray-300" />
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-gray-900">
          {stats.totalBackers}
        </span>
        <span className="text-crowd-darkGray">total backers</span>
      </div>
      <hr className="w-20 border-gray-300" />

      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-gray-900">
          {stats.daysLeft}
        </span>
        <span className="text-crowd-darkGray">days left</span>
      </div>
      {/* progress bar */}
      <div className="h-4 w-full rounded-full bg-gray-200">
        <div className="h-full w-[80%] rounded-full bg-crowd-moderateCyan"></div>
      </div>
    </div>
  );
};