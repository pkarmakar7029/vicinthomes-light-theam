import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investor's Corner",
  description:
    "Access Vicint Estates' investor relations, NRI information, and FAQs. Welcome to our Investor's Corner.",
};

const investorSections = [
  {
    title: "Investor Relations",
    description:
      "Vicint Homes welcome you to its Investor Relations section and extends its gratitude to all those who have shown an interest in our projects and governance. Access corporate governance, financial highlights, and partner information.",
    href: "/contact",
  },
  {
    title: "NRI's Corner",
    description:
      "All NRI investments in real estate or immovable properties are considered as transactions that get regulated under the applicable laws. We assist NRIs with documentation, repatriation, and compliance for a smooth investment experience.",
    href: "/contact",
  },
  {
    title: "FAQ's",
    description:
      "Frequently asked questions for investors – including those who have financed their present home with a Home Loan and wish to purchase another property, eligibility, documentation, and project-related queries.",
    href: "/contact",
  },
];

export default function InvestorsPage() {
  return (
    <div className="bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-28">
      {/* Hero / Title section */}
      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[color:var(--text-primary)]">
            Investor&apos;s Corner
          </h1>
          <p className="mt-6 max-w-3xl text-sm sm:text-base text-neutral-700 leading-relaxed">
            Vicint Homes welcome you to its Investor Relations section and
            extend our gratitude to all those who have shown an interest in our
            projects, governance, and long-term approach to development.
          </p>
        </div>
      </section>

      {/* Section cards - like Lakhani style */}
      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {investorSections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="lux-card group flex flex-col px-6 py-6 transition-all duration-100 hover:-translate-y-2 hover:border-[color:var(--accent-brass)] hover:shadow-[0_20px_50px_rgba(42,42,42,0.08)]"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                  {section.title}
                </p>
                <p className="mt-4 flex-1 text-sm text-neutral-700 leading-relaxed">
                  {section.description}
                </p>
                <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.24em] text-[color:var(--accent-brass)] group-hover:underline">
                  Know more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
