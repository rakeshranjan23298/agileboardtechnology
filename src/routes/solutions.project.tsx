import { PageHero, SectionHeader } from "@/components/site/Section";

export function ProjectSolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Project Solutions" title="Strategy connected to execution." lead="Transform your business while we help you connect strategy to execution to tackle your most challenging initiatives." />

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="What we tackle" title="Programs that matter" />
            <ul className="mt-6 space-y-3 text-sm">
              {["Cloud and platform modernization", "Data, analytics and AI build-outs", "Customer experience re-platforms", "Risk, compliance and security programs", "Enterprise application rollouts (SAP, Salesforce, Workday)"].map((t) => (
                <li key={t} className="rounded-lg border border-border bg-card px-4 py-3">{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Industries served" title="Where we deliver" />
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["Technology", "Financial Services", "Healthcare", "Communications", "Retail", "Insurance"].map((i) => (
                <div key={i} className="rounded-lg border border-border bg-card px-4 py-3 text-center font-medium">{i}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader eyebrow="Methodology" title="How we deliver" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Define", "Align stakeholders on outcomes, success metrics and architecture decisions."],
              ["Build", "Iterative delivery with embedded governance and continuous quality."],
              ["Adopt", "Change management, enablement and measurement after go-live."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
