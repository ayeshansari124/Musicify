import React from "react";
import MediaCard from "../cards/MediaCard";

export default function MediaSection({ title, items = [] }) {
  return (
    <div className="m-2 sm:m-5">
      <div className="flex justify-between items-center text-gray-200">
        <h2 className="font-bold text-xl sm:text-2xl cursor-pointer hover:underline">{title}</h2>
        <button className="text-xs sm:text-sm hover:underline cursor-pointer">Show All</button>
      </div>

      <div className="flex gap-2 sm:gap-4 p-2 sm:p-4 flex-wrap sm:flex-nowrap overflow-x-auto scrollbar-hide">
        {items.map((it, i) => (
          <MediaCard
            key={i}
            image={it.image}
            title={it.title || it.name}
            subtitle={it.subtitle || it.artist || (it.variant === "circle" ? "Artist" : "")}
            variant={it.variant}
          />
        ))}
      </div>
    </div>
  );
}
