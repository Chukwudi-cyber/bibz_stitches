"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Reveal from "@/components/Reveal";

const COLLECTIONS = [
  {
    id: "bibz-collection",
    title: "Bibz Collection",
    subtitle: "Designed and worn by Bibz",
    cover: "/images/pic3.jpeg",
    items: [
      { type: "image", src: "/images/pic4.jpeg", title: "Piece 1" },
      { type: "image", src: "/images/pic5.jpeg", title: "Piece 2" },
      { type: "image", src: "/images/pic6.jpeg", title: "Piece 3" },
      { type: "image", src: "/images/pic7.jpeg", title: "Piece 4" },
      { type: "image", src: "/images/pic18.jpeg", title: "Piece 5" },
      { type: "image", src: "/images/pic19.jpeg", title: "Piece 6" },
      { type: "image", src: "/images/pic21.jpeg", title: "Piece 7" },
      { type: "image", src: "/images/pic22.jpeg", title: "Piece 8" },
      { type: "image", src: "/images/pic23.jpeg", title: "Piece 9" },
      { type: "image", src: "/images/pic26.jpeg", title: "Piece 10" },
      { type: "image", src: "/images/pic55.jpeg", title: "Piece 11" },
    ],
  },

  {
    id: "blouse",
    title: "Blouses",
    subtitle: "Blouses sewn for clients",
    cover: "/images/blouse/pic32.jpeg",
    items: [
      { type: "image", src: "/images/blouse/blouse3.jpeg", title: "Blouse 1" },
      { type: "image", src: "/images/blouse/blouse2.jpeg", title: "Blouse 2" },
      { type: "image", src: "/images/blouse/blouse4.jpeg", title: "Blouse 3" },
      { type: "image", src: "/images/blouse/blouse5.jpeg", title: "Blouse 4" },
      { type: "image", src: "/images/blouse/blouse6.jpeg", title: "Blouse 5" },
      { type: "image", src: "/images/blouse/blouse7.jpeg", title: "Blouse 6" },
    ],
  },

  {
    id: "corporate",
    title: "Corporate Outfits",
    subtitle: "Office and business wear",
    cover: "/images/corporate/co1.jpeg",
    items: [
      { type: "image", src: "/images/corporate/cooperate outfit.jpeg", title: "Corporate 1" },
      { type: "image", src: "/images/corporate/co2.jpeg", title: "Corporate 2" },
      { type: "image", src: "/images/corporate/co3.jpeg", title: "Corporate 3" },
      { type: "image", src: "/images/corporate/co4.jpeg", title: "Corporate 4" },
      { type: "image", src: "/images/corporate/co5.jpeg", title: "Corporate 5" },
      { type: "image", src: "/images/corporate/co6.jpeg", title: "Corporate 6" },
      { type: "image", src: "/images/corporate/co7.jpeg", title: "Corporate 7" },
      { type: "image", src: "/images/corporate/co8.jpeg", title: "Corporate 8" },
      { type: "image", src: "/images/corporate/co9.jpeg", title: "Corporate 9" },
      { type: "image", src: "/images/corporate/pic11.jpeg", title: "Corporate 10" },
      { type: "image", src: "/images/corporate/co10.jpeg", title: "Corporate 11" },
      { type: "image", src: "/images/corporate/co11.jpeg", title: "Corporate 12" },
      { type: "image", src: "/images/corporate/co12.jpeg", title: "Corporate 13" },
    ],
  },

  {
    id: "ankara",
    title: "Ankara Designs",
    subtitle: "Bold prints, perfectly tailored",
    cover: "/images/ankara/pic51.jpeg",
    items: [
      { type: "image", src: "/images/ankara/pic28.jpeg", title: "Ankara 1" },
      { type: "image", src: "/images/ankara/ak1.jpeg", title: "Ankara 2" },
      { type: "image", src: "/images/ankara/ak2.jpeg", title: "Ankara 3" },
      { type: "image", src: "/images/ankara/pic41.jpeg", title: "Ankara 4" },
    ],
  },

  {
    id: "lace",
    title: "Laced Corset Outfits",
    subtitle: "Elegant lace, beautifully finished",
    cover: "/images/laced outfit/lo1.jpeg",
    items: [
      { type: "image", src: "/images/laced outfit/pic30.jpeg", title: "Lace 1" },
      { type: "image", src: "/images/laced outfit/pic29.jpeg", title: "Lace 2" },
      { type: "image", src: "/images/laced outfit/pic14.jpeg", title: "Lace 3" },
      { type: "image", src: "/images/laced outfit/la2.jpeg", title: "Lace 4" },
      { type: "image", src: "/images/laced outfit/la3.jpeg", title: "Lace 5" },
      { type: "image", src: "/images/laced outfit/la4.jpeg", title: "Lace 6" },
      { type: "image", src: "/images/laced outfit/la5.jpeg", title: "Lace 7" },
    ],
  },

  {
    id: "dinner-gowns",
    title: "Dinner Gowns",
    subtitle: "Evening elegance, made to measure",
    cover: "/images/dinner gown/pic50.jpeg",
    items: [
      { type: "image", src: "/images/dinner gown/pic31.jpeg", title: "Gown 1" },
      { type: "image", src: "/images/dinner gown/pic8.jpeg", title: "Gown 2" },
      { type: "image", src: "/images/dinner gown/pic53.jpeg", title: "Gown 3" },
    ],
  },

  {
    id: "kids",
    title: "Kids Outfits",
    subtitle: "Little styles, made with love",
    cover: "/images/kids/pic52.jpeg",
    items: [
      { type: "image", src: "/images/kids/ki1.jpeg", title: "Kids 1" },
      { type: "image", src: "/images/kids/pic12.jpeg", title: "Kids 2" },
    ],
  },

  {
    id: "kaftans",
    title: "Kaftans & Robes",
    subtitle: "Flowing satin, effortlessly elegant",
    cover: "/images/kaftan/pic56.jpeg",
    items: [
      { type: "image", src: "/images/kaftan/p1.jpeg", title: "Kaftan 1" },
    ],
  },
];

export default function Portfolio() {
  const [openId, setOpenId] = useState(null); // which group is open
  const [viewer, setViewer] = useState(null); // index of the enlarged piece
  const [hoverId, setHoverId] = useState(null); // which card is being hovered

  const group = COLLECTIONS.find((c) => c.id === openId);
  const items = group ? group.items : [];

  const scrollToTop = () =>
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });

  const openGroup = (id) => {
    setOpenId(id);
    setHoverId(null);
    setTimeout(scrollToTop, 50);
  };
  const closeGroup = () => {
    setOpenId(null);
    setTimeout(scrollToTop, 50);
  };

  const next = () => setViewer((i) => (i + 1) % items.length);
  const prev = () => setViewer((i) => (i - 1 + items.length) % items.length);

  // keyboard: Esc closes, arrows move between pieces
  useEffect(() => {
    if (viewer === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setViewer(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const current = viewer !== null ? items[viewer] : null;

  return (
    <section
      id="portfolio"
      className="scroll-mt-[72px] bg-[#FBF4EA] px-6 py-16 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {!group ? (
          /* ---------- LEVEL 1: group cards ---------- */
          <>
            <Reveal>
              <div className="mb-8">
                <p className="mb-1 text-[11px] font-semibold tracking-[0.25em] text-[#7B2285]">
                  MY PORTFOLIO
                </p>
                <h2 className="font-serif text-3xl font-semibold text-[#2B1033] md:text-4xl">
                  Recent Work
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {COLLECTIONS.map((c, i) => {
                const active = hoverId === c.id;
                return (
                  <Reveal key={c.id} delay={(i % 4) * 120}>
                    <button
                      onClick={() => openGroup(c.id)}
                      onMouseEnter={() => setHoverId(c.id)}
                      onMouseLeave={() => setHoverId(null)}
                      onFocus={() => setHoverId(c.id)}
                      onBlur={() => setHoverId(null)}
                      className="group relative block aspect-[3/4] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#7B2285] to-[#2B1033] text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <Image
                        src={c.cover}
                        alt={c.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-105"
                      />

                      {/* dark fade: only on the hovered card (always on phones) */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-[#2B1033]/90 via-[#2B1033]/30 to-transparent transition-opacity duration-300 max-md:opacity-100 ${
                          active ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      {/* text: only on the hovered card (always on phones) */}
                      <div
                        className={`absolute inset-x-0 bottom-0 p-4 text-white transition-all duration-300 max-md:translate-y-0 max-md:opacity-100 ${
                          active
                            ? "translate-y-0 opacity-100"
                            : "translate-y-3 opacity-0"
                        }`}
                      >
                        <p className="font-serif text-lg font-semibold">
                          {c.title}
                        </p>
                        <p className="text-xs text-white/80">{c.subtitle}</p>
                        <span className="mt-2 inline-block rounded-full bg-[#E2B54A] px-3 py-1 text-[11px] font-semibold text-[#2B1033]">
                          {c.items.length}{" "}
                          {c.items.length === 1 ? "piece" : "pieces"}
                        </span>
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </>
        ) : (
          /* ---------- LEVEL 2: gallery inside a group ---------- */
          <>
            <button
              onClick={closeGroup}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7B2285] px-5 py-2 text-sm font-medium text-[#7B2285] transition hover:bg-[#7B2285] hover:text-white"
            >
              <ArrowLeft size={16} /> Back to Portfolio
            </button>

            <Reveal>
              <div className="mb-8">
                <p className="mb-1 text-[11px] font-semibold tracking-[0.25em] text-[#7B2285]">
                  {group.subtitle.toUpperCase()}
                </p>
                <h2 className="font-serif text-3xl font-semibold text-[#2B1033] md:text-4xl">
                  {group.title}
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {items.map((item, index) => (
                <Reveal key={item.src} delay={(index % 4) * 80}>
                  <button
                    onClick={() => setViewer(index)}
                    className="group relative block aspect-[3/4] w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#7B2285] to-[#2B1033] shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Image
                      src={item.type === "video" ? item.poster : item.src}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                    {item.type === "video" && (
                      <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-[#E2B54A] bg-[#2B1033]/60 backdrop-blur">
                        <Play size={18} className="ml-0.5 fill-[#E2B54A] text-[#E2B54A]" />
                      </span>
                    )}
                  </button>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ---------- Pop-up viewer with arrows ---------- */}
      {current && (
        <div
          onClick={() => setViewer(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4"
        >
          <button className="absolute right-5 top-5 text-white" aria-label="Close">
            <X size={30} />
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30"
              >
                <ChevronRight size={26} />
              </button>
            </>
          )}

          <div onClick={(e) => e.stopPropagation()} className="max-w-3xl">
            {current.type === "video" ? (
              <video
                key={current.src}
                src={current.src}
                controls
                autoPlay
                className="max-h-[85vh] rounded-lg"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={current.src}
                alt={current.title}
                className="max-h-[85vh] rounded-lg object-contain"
              />
            )}
            <p className="mt-3 text-center text-sm text-white">
              {current.title} · {viewer + 1} / {items.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}