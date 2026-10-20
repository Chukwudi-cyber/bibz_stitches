"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, X } from "lucide-react";
import Marquee from "@/components/Marquee";

const VIDEO = "/videos/hero.mp4";
const PHOTO = "/images/pic4.jpeg"; // change to your file name

// Long, gentle fade so the photo dissolves into the purple with no visible line
const FADE =
  "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.03) 8%, rgba(0,0,0,0.12) 16%, rgba(0,0,0,0.32) 24%, rgba(0,0,0,0.62) 32%, rgba(0,0,0,0.9) 40%, black 46%)";

export default function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-72px)] min-h-[560px] w-full scroll-mt-[72px] overflow-hidden bg-[#2B1033] text-[#FFF6E9]"
    >
      {playing ? (
        <>
          <video
            src={VIDEO}
            controls
            autoPlay
            onEnded={() => setPlaying(false)}
            className="absolute inset-0 h-full w-full bg-black object-contain"
          />
          <button
            onClick={() => setPlaying(false)}
            aria-label="Close video"
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-black/60 transition hover:bg-black/80"
          >
            <X size={22} />
          </button>
        </>
      ) : (
        <>
          {/* Photo on the right, fading smoothly into the purple */}
          <div
            style={{ "--fade": FADE }}
            className="absolute inset-0 md:inset-auto md:-top-[22%] md:-right-[5%] md:h-[122%] md:w-[66%] md:[-webkit-mask-image:var(--fade)] md:[mask-image:var(--fade)]"
          >
            <Image
              src={PHOTO}
              alt="Bibz_Stitches"
              fill
              priority
              quality={95}
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          {/* Phone only: dark layer so the text can be read */}
          <div className="absolute inset-0 bg-[#2B1033]/65 md:hidden" />

          {/* Text on the left (bottom padding keeps it clear of the banner) */}
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pb-20 md:px-12 md:pb-24">
            <p className="mb-5 text-xs tracking-[0.3em] text-[#E2B54A]">
              BESPOKE &nbsp;•&nbsp; STYLISH &nbsp;•&nbsp; TIMELESS
            </p>
            <h1 className="mb-4 font-serif text-4xl font-medium leading-tight sm:text-5xl md:text-7xl">
              Bibz_Stitches
            </h1>
            <p className="mb-2 text-xl">Custom outfits, tailored to your style.</p>
            <p className="mb-8 max-w-sm text-[15px] leading-7 opacity-85">
              From everyday elegance to special occasions, we bring your fashion
              dreams to life with quality, creativity and precision.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="flex items-center gap-2 rounded-full bg-[#E2B54A] px-7 py-3.5 text-sm font-medium text-[#2B1033] transition hover:bg-[#F0C55E]"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#FFF6E9]/70 px-7 py-3.5 text-sm font-medium transition hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Play button, lifted above the banner */}
          <button
            onClick={() => setPlaying(true)}
            aria-label="Play video"
            className="group absolute bottom-24 right-6 z-10 flex flex-col items-center gap-2 md:right-[5%]"
          >
            <span className="relative grid h-16 w-16 place-items-center md:h-20 md:w-20">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#E2B54A]/40" />
              <span className="relative grid h-full w-full place-items-center rounded-full border-2 border-[#E2B54A] bg-[#2B1033]/70 backdrop-blur transition group-hover:scale-110">
                <Play size={26} className="ml-1 fill-[#E2B54A] text-[#E2B54A]" />
              </span>
            </span>
            <span className="rounded-full bg-[#2B1033]/80 px-3 py-1 text-[11px] tracking-widest">
              ▶ WATCH VIDEO
            </span>
          </button>

          {/* Scrolling banner pinned to the bottom of the home screen */}
          <div className="absolute inset-x-0 bottom-0 z-20">
            <Marquee />
          </div>
        </>
      )}
    </section>
  );
}