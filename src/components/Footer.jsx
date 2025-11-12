import React from "react";

const sections = [
  { title: "Company", links: ["About", "Jobs", "For The Record"] },
  { title: "Communities", links: ["For Artists", "Developers", "Advertising", "Investors", "Vendors"] },
  { title: "Useful Links", links: ["Support", "Free Mobile App", "Popular By Country"] },
  { title: "Spotify Plans", links: ["Premium Individual", "Premium Duo", "Premium Family", "Premium Student", "Spotify Free"] },
];

const socials = [
  { src: "./images/svg/insta.svg", alt: "Instagram" },
  { src: "./images/svg/twitter.svg", alt: "Twitter" },
  { src: "./images/svg/facebook.svg", alt: "Facebook" },
];

export default function Footer() {
  return (
    <>
      <footer className="flex flex-wrap justify-around m-2 sm:m-5 p-2 sm:p-5 text-gray-200">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col m-1 sm:m-3">
            <span className="font-bold text-sm sm:text-base">{section.title}</span>
            {section.links.map((link, i) => (
              <span key={i} className="hover:cursor-pointer hover:underline text-xs sm:text-sm">{link}</span>
            ))}
          </div>
        ))}

        <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0">
          {socials.map((s, i) => (
            <div key={i} className="hover:cursor-pointer hover:scale-110 bg-darkgray h-8 sm:h-10 w-8 sm:w-10 rounded-full m-1 sm:m-2 p-1 sm:p-2 flex items-center justify-center">
              <img src={s.src} alt={s.alt} className="invert" />
            </div>
          ))}
        </div>
      </footer>

      <hr />

      <footer className="m-2 sm:m-5 p-2 sm:p-5 text-xs sm:text-sm text-gray-200">
        <span>&copy; 2025 Spotify AB</span>
      </footer>
    </>
  );
}
