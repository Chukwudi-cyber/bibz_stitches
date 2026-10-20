"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function BackToTop() {
    const [show, setShow] = useState(false);

    // show the button only after scrolling down a bit
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 500);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} aria-label="Back to top" className={`fixed bottom-8 right-1 z-40 grid h-12 w-12 place-items-center rounded-full border-2 border-[#E2B54A] bg[#7B2285] text-white shadow-lg shadow-black/30 transition duration-300 hover:bg-[#5E1768] ${
            show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        >
            <ArrowUp size={22} />
        </button>
    );
}