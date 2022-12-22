export const MobileMenu = () => {
  return (
    <div className="lg:hidden">
      <div className="fixed inset-0 z-10 bg-black/60 "></div>
      <ul className="relative  top-20 z-10 rounded-lg bg-white">
        <li>
          <a
            href="#"
            className="block rounded-t-lg border-b border-crowd-darkGray/40 p-5 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-200"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block border-b border-crowd-darkGray/40 p-5 text-lg font-medium text-gray-800  transition-colors hover:bg-gray-200"
          >
            Discover
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-b-lg p-5 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-200"
          >
            Get Started
          </a>
        </li>
      </ul>
    </div>
  );
};
