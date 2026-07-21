import { PageHero } from "@/components/site/Section";
import { locations } from "@/data/placeholderData";
import { MapPin, Phone } from "lucide-react";

export function LocationsPage() {
  return (
    <>
      <PageHero eyebrow="Locations" title="Local presence, national reach." lead=" offices and a coast-to-coast network of consultants." />
      <section className="container-page py-16">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="aspect-[16/7] w-full bg-muted">
           <iframe
  title="AgileBoardTech Location"
  className="size-full"
  loading="lazy"
 
  src="https://maps.google.com/maps?q=5680%20King%20Centre%20Dr,%20Ste%201,%20Kingstowne,%20VA%2022315,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed"
/>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <article key={l.id} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold">{l.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 size-4 shrink-0 text-brand" />{l.address}</p>
              
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
