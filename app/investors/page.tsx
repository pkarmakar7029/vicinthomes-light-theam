import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Access Vicint Estates’ investor information, governance philosophy, and financial highlights as an ultra-luxury real estate platform.",
};

export default function InvestorsPage() {
  return (
    <div className="bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-28">
      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          <SectionHeading
            eyebrow="Investors"
            title="Institutional discipline for boutique-scale development."
            subtitle="Vicint operates with the transparency and governance of a listed company, while remaining intentionally focused and privately held."
          />

          {/* TODO: Replace with final production image */}
          <div
            className="mb-10 h-56 w-full overflow-hidden rounded-3xl bg-cover bg-center sm:h-72"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200')`,
            }}
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr,1.2fr] lg:items-start">
            <div className="space-y-7">
              <div className="lux-card px-6 py-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                  Corporate Governance
                </p>
                <p className="mt-3 text-sm text-neutral-700">
                  Vicint maintains a strong governance framework anchored by an
                  independent advisory board, external audit partners, and
                  rigorous risk management processes. All projects are housed in
                  ring-fenced SPVs, with clear capital waterfalls and reporting
                  structures for our partners.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white px-4 py-4 text-sm shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                    IRR Focus
                  </p>
                  <p className="mt-2 font-playfair text-xl text-[color:var(--text-primary)]">
                    Disciplined
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    Conservative underwriting with focus on risk-adjusted
                    returns.
                  </p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                    Structure
                  </p>
                  <p className="mt-2 font-playfair text-xl text-[color:var(--text-primary)]">
                    Partner-First
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    Aligned structures with meaningful promoter co-investment.
                  </p>
                </div>
                <div className="rounded-2xl bg-white px-4 py-4 text-sm shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                    Reporting
                  </p>
                  <p className="mt-2 font-playfair text-xl text-[color:var(--text-primary)]">
                    Transparent
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    Quarterly dashboards, site walks, and governance reviews.
                  </p>
                </div>
              </div>

              <div className="lux-card px-6 py-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                  RERA & Compliance
                </p>
                <p className="mt-3 text-sm text-neutral-700">
                  All Vicint developments are fully RERA-registered, with
                  escrow-compliant project structures and transparent disclosure
                  of timelines, approvals, and specifications. Detailed
                  registration numbers and documentation for each project are
                  available with our investor relations team on request.
                </p>
              </div>
            </div>

            <div className="space-y-7">
              <div className="lux-card px-6 py-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                  Financial Highlights
                </p>
                <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                  <li>• Portfolio value of approximately ₹18,500 crore.</li>
                  <li>• Low leverage philosophy with calibrated project finance.</li>
                  <li>• Strong repeat participation from key family offices.</li>
                  <li>• Focused pipeline in 5 core Indian cities.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-[color:var(--border-soft)] bg-white/80 px-6 py-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                  Investor Documentation
                </p>
                <p className="mt-3 text-sm text-neutral-700">
                  Detailed financial statements, project-level cash flow models,
                  and governance charters are available for existing and
                  prospective partners.
                </p>
                <div className="mt-4 space-y-2 text-sm text-[color:var(--accent-brass)]">
                  <button className="block text-left underline underline-offset-4">
                    Annual Report 2024–25 (PDF placeholder)
                  </button>
                  <button className="block text-left underline underline-offset-4">
                    Corporate Governance Charter (PDF placeholder)
                  </button>
                  <button className="block text-left underline underline-offset-4">
                    ESG & Sustainability Overview (PDF placeholder)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

