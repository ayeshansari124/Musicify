import React, { useState } from "react";

const LibraryCard = ({ title, subtitle, buttonText }) => (
  <div className="flex flex-col bg-neutral-800 m-2 sm:m-5 rounded-lg p-2 ">
    <div className="m-2 sm:m-3 flex flex-col gap-1 text-gray-200">
      <span className="font-bold text-sm sm:text-base">{title}</span>
      <span className="text-xs sm:text-sm">{subtitle}</span>
    </div>
    <button className="w-[110px] sm:w-[130px] bg-white text-black rounded-full py-1 sm:py-2 m-2 font-bold hover:scale-105 transition-all duration-500 ease-in text-xs sm:text-sm">
      {buttonText}
    </button>
  </div>
);

const FooterLinks = () => {
  const links = ["Legal", "Safety & Privacy Centre", "Privacy Policies", "Cookies", "About Ads", "Accessibility"];
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 p-2 sm:p-3 m-2 sm:m-5 text-xs sm:text-sm text-gray-400">
      {links.map((l, i) => (
        <span key={i} className="cursor-pointer hover:underline">{l}</span>
      ))}
    </div>
  );
};

const LanguageSelector = () => (
  <div className="flex items-center m-2 sm:m-5 w-[100px] sm:w-[120px] p-1 sm:p-2 rounded-full border-2 border-neutral-800 font-bold hover:scale-110 hover:border-white transition-all duration-500 ease-in cursor-pointer text-xs sm:text-sm text-gray-200">
    <img src="./images/svg/globe.svg" alt="globe" className="h-5 sm:h-6 w-5 sm:w-6 m-1" />
    <button>English</button>
  </div>
);

export default function Section() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sm:hidden fixed top-4 left-2 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-200 bg-[#121212] p-2 rounded-lg hover:bg-[#242424] transition"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <aside
        className={`w-full sm:w-[25vw] flex flex-col bg-[#121212] rounded-lg m-2 fixed top-0 left-0 h-full transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center h-[10vh] p-2 sm:p-4 font-bold">
          <span className="text-sm sm:text-base text-gray-200">Your Library</span>
          <img src="./images/svg/add.svg" alt="add" className="h-6 sm:h-8 w-6 sm:w-8 rounded-full m-1 p-1 hover:scale-110 hover:bg-[#242424] cursor-pointer" />
        </div>

        <LibraryCard title="Create Your First Playlist" subtitle="It’s easy, we’ll help you" buttonText="Create Playlist" />
        <LibraryCard title="Let’s find some podcasts to follow" subtitle="We’ll keep you updated on new episodes" buttonText="Browse Podcasts" />

        <FooterLinks />
        <LanguageSelector />
      </aside>

      {isOpen && <div className="sm:hidden fixed inset-0 bg-black opacity-50 z-30" onClick={() => setIsOpen(false)} />}
    </>
  );
}
