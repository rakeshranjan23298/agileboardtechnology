import { PageHero, SectionHeader } from "@/components/site/Section";

const skills = ["Cloud & DevOps", "Data Engineering", "Generative AI", "Salesforce", "Cybersecurity", "Modern Web", "Mobile", "SAP"];

export function TeamSolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Team Solutions" title="A dedicated team. Outcomes you own." lead="Take charge of your most valued initiatives while we provide a dedicated team offering technical expertise and services." />

      <section className="container-page py-20">
        <SectionHeader eyebrow="Capabilities" title="The disciplines our teams bring" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {skills.map((s) => (
            <div key={s} className="rounded-xl border border-border bg-card px-4 py-5 text-center text-sm font-semibold">{s}</div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {[
            { c: "Insurance", t: "Claims platform modernization", d: "An 8-person team replatformed a legacy claims app onto a cloud-native stack in 9 months." },
            { c: "Retail", t: "Headless commerce rollout", d: "Stood up a composable commerce architecture serving 1,400 stores." },
            { c: "Healthcare", t: "AI-assisted intake", d: "Reduced patient intake handling time by 38% with an LLM-augmented workflow." },
          ].map((cs) => (
            <article key={cs.t} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">Case study · {cs.c}</p>
              <h3 className="mt-2 text-lg font-bold">{cs.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{cs.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
