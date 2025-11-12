import React from "react";

const leftIcons = [
  { src: "/images/svg/icon.svg", alt: "Logo", type: "logo" },
  { src: "/images/svg/home.svg", alt: "Home", type: "home" },
];

const rightOptions = [
  { label: "Premium" },
  { label: "Support" },
  { label: "Download" },
];

export default function Navbar() {
  return (
    <div className="navbar sticky z-50 top-0 bg-black text-white w-full flex flex-col sm:flex-row justify-between items-center px-2 sm:px-4 py-3 gap-2 sm:gap-0">
      <div className="left flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
        <div className="flex items-center gap-2 sm:gap-4">
          {leftIcons.map((icon, idx) => (
            <div
              key={idx}
              className={`${icon.type === "logo" ? "icon" : "home hover:cursor-pointer hover:scale-110"} bg-[#242424] h-8 sm:h-10 w-8 sm:w-10 rounded-full p-1 flex items-center justify-center transition`}
            >
              <img src={icon.src} alt={icon.alt} className="h-full" />
            </div>
          ))}
        </div>

        <div className="searchbar flex items-center bg-[#242424] rounded-full px-2 sm:px-3 py-1 sm:py-1.5 mt-2 sm:mt-0 gap-1 sm:gap-2 flex-1 sm:flex-auto">
          <img src="/images/svg/search.svg" alt="Search Icon" className="h-5 sm:h-6 w-5 sm:w-6 hover:cursor-pointer hover:scale-110 transition" />
          <input
            type="text"
            placeholder="What do you want to play?!"
            className="bg-transparent text-white px-2 py-1 sm:px-4 sm:py-2 w-full sm:w-[300px] font-semibold border-none focus:outline-none placeholder:text-sm"
          />
          <span className="w-px h-5 sm:h-6 bg-gray-500"></span>
          <img src="/images/svg/briefcase.svg" alt="Briefcase" className="h-5 sm:h-6 w-5 sm:w-6 hover:cursor-pointer hover:scale-110 transition" />
        </div>
      </div>

      <div className="right flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 mt-2 sm:mt-0 text-gray-300">
        <div className="options flex gap-2 sm:gap-4 flex-wrap">
          {rightOptions.map((opt, idx) => (
            <button key={idx} className="hover:scale-105 transition text-xs sm:text-sm">{opt.label}</button>
          ))}
        </div>

        <span className="hidden sm:block w-px h-6 bg-gray-500"></span>

        <div className="install flex items-center gap-1 sm:gap-2 hover:scale-105 cursor-pointer transition text-xs sm:text-sm">
          <img src="/images/svg/download.svg" alt="Download" className="h-5 sm:h-6 w-5 sm:w-6" />
          <button>Install App</button>
        </div>

        <button className="signup hover:scale-105 transition text-xs sm:text-sm">Sign Up</button>
        <button className="login bg-white text-black rounded-full px-3 sm:px-5 py-1 sm:py-2 font-bold hover:scale-110 transition-all duration-500 ease-in text-xs sm:text-sm">
          Log in
        </button>
      </div>
    </div>
  );
}
