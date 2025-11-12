import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import MediaSection from "../components/sections/MediaSection";

/** Data (kept inline like your original) */
const trending = [
  { image: "./images/trending_songs/sahiba.jpg", title: "Sahiba", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/atpeace.jpg", title: "At Peace", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/dhun.jpg", title: "Dhun", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/gulabiaankhein.jpg", title: "Gulaabi Ankhein", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/ishqbawla.jpg", title: "Ishq Bawla", artist: "Aditya Rikhari" },
  { image: "./images/trending_songs/qaydese.jpg", title: "Qayde Se", artist: "Aditya Rikhari" },
].map(s => ({ image: s.image, title: s.title, subtitle: s.artist }));

const artists = [
  { image: "./images/popular_artists/anirudh_ravichander.jpg", name: "Anirudh Ravichander" },
  { image: "./images/popular_artists/ar_rahman.jpg", name: "A.R. Rahman" },
  { image: "./images/popular_artists/arijit_singh.jpg", name: "Arijit Singh" },
  { image: "./images/popular_artists/atif_aslam.jpg", name: "Atif Aslam" },
  { image: "./images/popular_artists/pritam.jpg", name: "Pritam" },
  { image: "./images/popular_artists/sachin_jigar.jpg", name: "Sachin-Jigar" },
].map(a => ({ image: a.image, title: a.name, subtitle: "Artist", variant: "circle" }));

const albums = [
  { image: "./images/popular_albums_and_singles/aashiqui2.jpg", title: "Aashiqui 2", artist: "Mithoon, Ankit Tiwari, Jeet Ganguuli" },
  { image: "./images/popular_albums_and_singles/ye_jawaani_hai_deewani.jpg", title: "Yeh Jawaani Hai Deewani", artist: "Pritam" },
  { image: "./images/popular_albums_and_singles/sanam_teri_kasam.jpg", title: "Sanam Teri Kasam", artist: "Himesh Reshammiya, Sameer Anjaan" },
  { image: "./images/popular_albums_and_singles/finding_her.jpg", title: "Finding Her", artist: "Kushagra, Bharath, Saaheal" },
  { image: "./images/popular_albums_and_singles/young_goat.jpg", title: "Young G.O.A.T", artist: "Cheema Y, Gur Seedhu" },
  { image: "./images/popular_albums_and_singles/making_memories.jpg", title: "Making Memories", artist: "Karan Aujla, Ikky" },
].map(a => ({ image: a.image, title: a.title, subtitle: a.artist }));

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
        <div className="w-full sm:w-[25vw] h-full">
          <Section />
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide p-2 sm:p-6">
          <div className="bg-[#121212] rounded-lg p-2 sm:p-4 flex flex-col gap-4">
            <MediaSection title="Trending Songs" items={trending} />
            <MediaSection title="Popular Artists" items={artists} />
            <MediaSection title="Popular Albums & Singles" items={albums} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
