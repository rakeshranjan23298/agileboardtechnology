import { PageHero } from "@/components/site/Section";
import { industries } from "@/data/placeholderData";

export function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Where we go deep." lead="Specialty teams that already speak the language of your business." />
      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <article key={i.id} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl">
              <div className="text-3xl" aria-hidden>{i.icon}</div>
              <h3 className="mt-4 text-lg font-bold">{i.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
