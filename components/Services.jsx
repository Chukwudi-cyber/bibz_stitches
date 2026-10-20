import { ArrowRight, Scissors, Shirt, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const SERVICES = [
  {
    icon: Shirt,
    title: "Custom Outfit Sewing",
    text: "Unique designs made to fit your style and body perfectly.",
  },
  {
    icon: Sparkles,
    title: "Traditional & Occasion Wear",
    text: "Beautiful outfits for weddings, parties and special events.",
  },
  {
    icon: Scissors,
    title: "Alterations & Adjustments",
    text: "Give your favourite pieces a fresh, perfect fit.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-[72px] bg-[#EFE6F3] px-6 py-16 md:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        {/* Left: heading */}
        <div>
          <Reveal>
            <p className="mb-1 text-[11px] font-semibold tracking-[0.25em] text-[#7B2285]">
              OUR SERVICES
            </p>
            <h2 className="mb-3 font-serif text-3xl font-semibold text-[#2B1033] md:text-4xl">
              What I Offer
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mb-6 text-sm leading-6 text-[#2B1033]/70">
              Quality stitching, modern designs and a perfect fit, every time.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#7B2285] px-6 py-3 text-sm font-medium text-[#7B2285] transition hover:bg-[#7B2285] hover:text-white"
            >
              Get in Touch <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>

        {/* The three services, appearing one after another */}
        {SERVICES.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            key={title}
            delay={(i + 1) * 200}
            className="md:border-l md:border-[#7B2285]/20 md:pl-8"
          >
            <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#E3CBEA] text-[#7B2285]">
              <Icon size={24} />
            </div>
            <h3 className="mb-2 font-serif text-lg font-semibold text-[#2B1033]">
              {title}
            </h3>
            <p className="text-sm leading-6 text-[#2B1033]/70">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}