"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from "react-icons/hi";

// Your Cloudinary video URL — replace with your actual link from Cloudinary Media Library

const HERO_VIDEO_SRC = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;

const HERO_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1920";

export default function HeroVideo() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      className="relative w-full aspect-video md:aspect-auto md:min-h-[90vh] bg-[color:var(--background-main)] text-white overflow-hidden"
    >
      {/* Background: video on all viewports; poster shows while loading */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          poster={HERO_FALLBACK_IMAGE}
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* Sound toggle — visible on all viewports */}
      <button
        type="button"
        onClick={() => setIsMuted((m) => !m)}
        className="absolute right-4 bottom-6 sm:right-6 sm:bottom-8 z-10 flex items-center justify-center w-11 h-11 rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
        aria-label={isMuted ? "Turn on sound" : "Turn off sound"}
      >
        {isMuted ? (
          <HiOutlineVolumeOff className="w-5 h-5" />
        ) : (
          <HiOutlineVolumeUp className="w-5 h-5" />
        )}
      </button>
    </section>
  );
}
