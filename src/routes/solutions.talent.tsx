import { Link } from "react-router-dom";
import { PageHero, SectionHeader } from "@/components/site/Section";
import { Check } from "lucide-react";

export function TalentSolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Talent Solutions" title="The right people, ready when you are." lead="Save time finding the right resource for your team while we connect you with the best talent in the marketplace.">
        <Link to="/careers" className="inline-flex h-12 items-center rounded-md bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-[color:var(--color-accent-foreground)]">Submit</Link>
      </PageHero>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="For clients" title="Specialists you can trust on day one" subtitle="Hand-matched talent across Technology and Finance & Accounting — contract, contract-to-hire and direct placement." />
            <ul className="mt-6 space-y-3 text-sm">
              {["Average submittal in 24–48 hours", "97% interview-to-offer alignment", "Dedicated account & delivery pairing", "Coast-to-coast network of specialists"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 size-4 text-brand" />{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="For candidates" title="Work that actually moves your career" subtitle="Recruiters who know your specialty, advocate for you, and stay engaged for the long term." />
            <ul className="mt-6 space-y-3 text-sm">
              {["Transparent pay and benefit guidance", "Direct introductions to hiring managers", "Modern, market-relevant assignments", "A consultant-first culture"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 size-4 text-brand" />{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader eyebrow="The process" title="How we match talent to opportunity" align="center" />
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {[["01", "Discover", "Understand the role, team, technology and culture."],
              ["02", "Curate", "Source from our active community and proactively recruit."],
              ["03", "Match", "Submit 2–3 vetted candidates with detailed alignment notes."],
              ["04", "Support", "Stay engaged through onboarding and the full engagement."]
            ].map(([n, t, d]) => (
              <li key={n} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-semibold text-brand">{n}</p>
                <h3 className="mt-2 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
