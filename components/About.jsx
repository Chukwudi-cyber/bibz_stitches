import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

// Keep the file name of the picture you are using
const ABOUT_PHOTO = "/images/abtpic.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[72px] bg-[#2B1033] px-6 py-16 text-[#FFF6E9] md:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        {/* Left: text, line by line */}
        <div>
          <Reveal>
            <p className="mb-2 text-[11px] font-semibold tracking-[0.25em] text-[#E2B54A]">
              ABOUT BIBZ_STITCHES
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mb-5 font-serif text-3xl font-semibold md:text-4xl">
              More Than Just Clothes
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mb-4 max-w-lg text-[15px] leading-7 text-[#FFF6E9]/85">
              I&apos;m Beatrice, the creative mind behind Bibz_Stitches. I&apos;ve
              always had a passion for fashion and a love for bringing ideas to
              life through fabric.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mb-8 max-w-lg text-[15px] leading-7 text-[#FFF6E9]/85">
              Every piece I create is made with care, attention to detail, and
              a desire to make you feel confident and beautiful.
            </p>
          </Reveal>
          <Reveal delay={480}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E2B54A] px-7 py-3.5 text-sm font-medium text-[#2B1033] transition hover:bg-[#F0C55E]"
            >
              Learn More <ArrowRight size={18} />
            </a>
          </Reveal>
        </div>

        {/* Right: photo fades in too */}
        <Reveal delay={200}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-[#7B2285] to-[#1d0a24] shadow-2xl shadow-black/40 ring-1 ring-[#E2B54A]/40">
            <Image
              src={ABOUT_PHOTO}
              alt="Bibz, founder of Bibz_Stitches"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2B1033]/90 to-transparent p-5">
              <span className="font-serif text-lg italic text-[#E2B54A]">
                Made with care
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}