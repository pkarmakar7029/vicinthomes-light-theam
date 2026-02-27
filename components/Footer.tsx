import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--text-primary)] text-white pt-16 pb-8 mt-24">
      <div className="lux-container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          <div>
            <div className="flex items-center gap-0">
              <img
                src="/logo.webp"
                alt="Vicint Homes"
                className="h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
              />
              <div className="flex flex-col">
                <span className="font-playfair text-sm uppercase tracking-[0.32em]">
                  Vicint Homes
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                  Professional Builder
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-brass)]">
              Quick Links
            </h4>
            <div className="mt-5 flex flex-col gap-2 text-sm text-white/75">
              <Link href="/about" className="hover:text-[color:var(--accent-brass)]">
                About
              </Link>
              <Link href="/projects" className="hover:text-[color:var(--accent-brass)]">
                Projects
              </Link>
              <Link href="/leadership" className="hover:text-[color:var(--accent-brass)]">
                Leadership
              </Link>
              <Link href="/news" className="hover:text-[color:var(--accent-brass)]">
                News & Media
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-brass)]">
              Investors
            </h4>
            <div className="mt-5 flex flex-col gap-2 text-sm text-white/75">
              <Link href="/investors" className="hover:text-[color:var(--accent-brass)]">
                Investor Relations
              </Link>
              <button className="text-left hover:text-[color:var(--accent-brass)]">
                Financial Reports
              </button>
              <button className="text-left hover:text-[color:var(--accent-brass)]">
                Governance
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-brass)]">
              Contact
            </h4>
            <div className="mt-5 space-y-3 text-sm text-white/75">
              <p>103, 1st Floor, Nadaan Building, Karamtoli Road, Beside Indian Oil Petrol Pump, Ranchi 535022</p>
              <p>
                <span className="text-white">Phone:</span> 9264130333 · 9264129333
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[color:var(--accent-brass)] hover:text-[color:var(--accent-brass)]"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[color:var(--accent-brass)] hover:text-[color:var(--accent-brass)]"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[color:var(--accent-brass)] hover:text-[color:var(--accent-brass)]"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[color:var(--accent-brass)] hover:text-[color:var(--accent-brass)]"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-[11px] text-white/55 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Vicint Estates Pvt. Ltd. All Rights
            Reserved.
          </p>
          <p>RERA compliant. Project-specific details available on request.</p>
        </div>
      </div>
    </footer>
  );
}

