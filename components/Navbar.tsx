"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/news", label: "Media" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overHero = !isScrolled;
  const textShadow = "0 1px 3px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.2)";
  const dropShadow = "0 1px 4px rgba(0,0,0,0.4)";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full flex items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 lg:px-12 lg:py-4 ${
            isScrolled
              ? "bg-white/40 backdrop-blur-sm border-b border-white/10 text-[color:var(--text-primary)]"
              : "text-white"
          }`}
        >
          <div className="mx-auto w-full max-w-6xl flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-0 shrink-0">
              <div
                className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 overflow-hidden"
                style={overHero ? { filter: `drop-shadow(${dropShadow})` } : undefined}
              >
                <Image
                  src="/logo.webp"
                  alt="Vicint Homes"
                  width={80}
                  height={80}
                  className="h-full w-full object-contain object-center"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0 -ml-0.5">
                <span
                  className="font-playfair text-sm uppercase tracking-[0.28em] sm:text-base md:tracking-[0.32em] md:text-lg"
                  style={overHero ? { textShadow } : undefined}
                >
                  Vicint Homes
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-widest md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative transition-colors duration-200 hover:text-[color:var(--accent-brass)] focus:text-[color:var(--accent-brass)] after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-[color:var(--accent-brass)] after:transition-all after:duration-200 hover:after:w-full"
                  style={overHero ? { textShadow } : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-full border border-[color:var(--accent-brass)]/80 bg-[color:var(--accent-brass)]/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all duration-200 hover:bg-[color:var(--accent-brass)]/40 hover:border-[color:var(--accent-brass)] hover:text-[color:var(--text-primary)] sm:px-5 sm:py-2.5 sm:text-xs lg:px-6 lg:py-3"
                style={overHero ? { textShadow: "0 1px 2px rgba(0,0,0,0.4)" } : undefined}
              >
                Private Consultation
              </Link>
            </nav>

            <button
              aria-label="Open navigation menu"
              className={`inline-flex items-center justify-center rounded-full p-2 sm:p-2.5 md:hidden transition-colors ${
                isScrolled
                  ? "bg-white/15 text-[color:var(--text-primary)] hover:bg-white/25"
                  : "text-white"
              }`}
              style={overHero ? { filter: `drop-shadow(${dropShadow})` } : undefined}
              onClick={() => setOpen(true)}
            >
              <HiOutlineMenuAlt4 className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="absolute inset-y-0 right-0 w-3/4 max-w-xs border-l border-white/10 bg-white/90 backdrop-blur-sm px-6 py-8 text-[color:var(--text-primary)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-playfair text-sm uppercase tracking-widest">
                  Vicint Homes
                </span>
                <button
                  aria-label="Close navigation"
                  className="rounded-full p-2 text-[color:var(--text-primary)]/70 hover:bg-white/50 hover:text-[color:var(--text-primary)] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <HiOutlineX className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-6 text-xs font-medium uppercase tracking-widest text-[color:var(--text-primary)]/80">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-[color:var(--border-soft)] pb-4 transition-colors hover:text-[color:var(--accent-brass)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full border border-[color:var(--accent-brass)] bg-[color:var(--accent-brass)]/20 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--text-primary)] transition-colors hover:bg-[color:var(--accent-brass)]/40"
                >
                  Private Consultation
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
