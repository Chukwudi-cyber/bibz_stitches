import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Reveal from "@/components/Reveal";

// ---------- CHANGE THESE TO BIBZ'S REAL DETAILS ----------
const INSTAGRAM = "bibz_forever"; // no @
const PHONE_DISPLAY = "+234 703 919 3619";
const WHATSAPP_NUMBER = "2347039193619"; // country code + number, no + or spaces
const LOCATION = "Port Harcourt, Rivers State";
const EMAIL = "beatriceogbologugo@gmail.com";
// ----------------------------------------------------------

const MESSAGE = encodeURIComponent(
  "Hi Bibz, I'd like to order a custom outfit."
);

const DETAILS = [
  {
    icon: FaInstagram,
    text: `@${INSTAGRAM}`,
    href: `https://instagram.com/${INSTAGRAM}`,
  },
  { icon: Phone, text: PHONE_DISPLAY, href: `tel:+${WHATSAPP_NUMBER}` },
  { icon: MapPin, text: LOCATION },
  { icon: Mail, text: EMAIL, href: `mailto:${EMAIL}` },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-[72px] bg-[#FBF4EA] px-6 py-16 md:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        {/* Left: message + WhatsApp, line by line */}
        <div>
          <Reveal>
            <p className="mb-1 text-[11px] font-semibold tracking-[0.25em] text-[#7B2285]">
              GET IN TOUCH
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mb-3 font-serif text-3xl font-semibold text-[#2B1033] md:text-4xl">
              Let&apos;s Work Together
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mb-7 max-w-md text-[15px] leading-7 text-[#2B1033]/70">
              Have a design in mind or need a custom outfit? I&apos;d love to
              hear from you!
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#7B2285] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#7B2285]/30 transition hover:bg-[#5E1768]"
            >
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </a>
          </Reveal>
        </div>

        {/* Right: contact details, appearing one after another */}
        <ul className="grid min-w-0 gap-5 md:border-l md:border-[#7B2285]/20 md:pl-10">
          {DETAILS.map(({ icon: Icon, text, href }, i) => (
            <li key={text}>
              <Reveal delay={200 + i * 150} className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E3CBEA] text-[#7B2285]">
                  <Icon size={20} />
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="min-w-0 break-words text-[15px] font-medium text-[#2B1033] transition hover:text-[#7B2285]"
                  >
                    {text}
                  </a>
                ) : (
                  <span className="min-w-0 break-words text-[15px] font-medium text-[#2B1033]">
                    {text}
                  </span>
                )}
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={850} className="pl-[60px] text-xs text-[#2B1033]/60">
              Follow for updates, new designs and more ♥
            </Reveal>
          </li>
        </ul>
      </div>
    </section>
  );
}