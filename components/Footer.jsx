import { FaInstagram, FaWhatsapp } from "react-icons/fa";

// Same details as in Contact.jsx
const INSTAGRAM = "bibz_forever"; // no @, no link
const WHATSAPP_NUMBER = "2347039193619"; // country code + number, no + or spaces

export default function Footer() {
  return (
    <footer className="bg-[#1A0A21] px-6 py-6 text-[#FFF6E9] md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        {/* Left: brand */}
        <a href="#home" className="font-serif text-2xl font-semibold italic">
          Bibz_Stitches
        </a>

        {/* Center: tagline */}
        <p className="text-xs tracking-[0.2em] text-[#E2B54A]">
          STYLE &nbsp;•&nbsp; QUALITY &nbsp;•&nbsp; YOU
        </p>

        {/* Right: icons + copyright */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-5">
          <div className="flex items-center gap-4">
            <a
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition hover:text-[#E2B54A]"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-[#E2B54A]"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
          <p className="text-xs text-[#FFF6E9]/60">
            © {new Date().getFullYear()} Bibz_Stitches. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}