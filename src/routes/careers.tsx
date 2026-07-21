import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/Section";
import { jobs } from "@/data/placeholderData";
import { MapPin, Search } from "lucide-react";

export function CareersPage() {
  const [q, setQ] = useState("");
  const [loc, setLoc] = useState("");
  const [cat, setCat] = useState("");

  const categories = useMemo(() => Array.from(new Set(jobs.map((j) => j.category))), []);
  const locations = useMemo(() => Array.from(new Set(jobs.map((j) => j.location))), []);

  const filtered = useMemo(() => jobs.filter((j) =>
    (!q || j.title.toLowerCase().includes(q.toLowerCase())) &&
    (!loc || j.location === loc) &&
    (!cat || j.category === cat)
  ), [q, loc, cat]);

  return (
    <>
      <PageHero eyebrow="Careers" title="Find work that matters." lead="Specialty roles in technology and professional services — contract, contract-to-hire and direct placement." />

      <section className="container-page py-12">
        <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 md:grid-cols-[2fr_1fr_1fr_auto]">
          <label className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Keyword (e.g. React)" className="h-11 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" aria-label="Keyword" />
          </label>
          <select value={loc} onChange={(e) => setLoc(e.target.value)} className="h-11 rounded-md border border-border bg-background px-3 text-sm" aria-label="Location">
            <option value="">All locations</option>
            {locations.map((l) => <option key={l}>{l}</option>)}
          </select>
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="h-11 rounded-md border border-border bg-background px-3 text-sm" aria-label="Category">
            <option value="">All categories</option>
            {categories.map((c) => <option key={c}>{c}</option>)}
          </select>
          <button onClick={() => { setQ(""); setLoc(""); setCat(""); }} className="h-11 rounded-md border border-border px-4 text-sm font-semibold hover:bg-muted">Clear</button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">{filtered.length} open role{filtered.length === 1 ? "" : "s"}</p>

        <ul className="mt-4 space-y-3">
          {filtered.map((j) => (
            <li key={j.id}>
              <Link to={`/careers/${j.id}`} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand sm:flex sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold sm:text-lg">{j.title}</h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />{j.location}</span>
                    <span>{j.category}</span>
                    <span>{j.type}</span>
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">View role</span>
              </Link>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">No roles match those filters.</li>
          )}
        </ul>
      </section>

      <ResumeSection />
    </>
  );
}

import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  role: z.string().trim().min(1, "Role required").max(120),
  message: z.string().trim().max(1000).optional(),
});
type FormData = z.infer<typeof schema>;

function ResumeSection() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [sent, setSent] = useState(false);

  const onSubmit = (data: FormData) => {
    const parsed = schema.safeParse(data);
    if (!parsed.success) return;
    // In a real app this would POST to a server function.
    setSent(true);
    reset();
  };

  return (
    <section id="submit" className="border-t border-border bg-muted/40 py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Submit </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Tell us about the work you want next.</h2>
          <p className="mt-4 text-muted-foreground">A specialty recruiter will reach out within two business days to discuss matching roles and your goals.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-border bg-card p-6" noValidate>
          <Field label="Full name" error={errors.name?.message}>
            <input {...register("name", { required: true, maxLength: 100 })} className="field" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input type="email" {...register("email", { required: true, maxLength: 255 })} className="field" />
          </Field>
          <Field label="Role you're targeting" error={errors.role?.message}>
            <input {...register("role", { required: true, maxLength: 120 })} className="field" />
          </Field>
          <Field label="Anything else? (optional)" error={errors.message?.message}>
            <textarea rows={4} {...register("message", { maxLength: 1000 })} className="field" />
          </Field>
          <button className="inline-flex h-11 items-center rounded-md bg-brand px-5 text-sm font-semibold text-brand-foreground hover:bg-brand/90">Submit</button>
          {sent && <p className="text-sm text-brand">Thanks — we'll be in touch shortly.</p>}
        </form>
      </div>
      <style>{`.field{height:2.75rem;width:100%;border:1px solid var(--color-border);border-radius:.5rem;padding:.5rem .75rem;background:var(--color-background);font-size:.875rem;outline:none}.field:focus{box-shadow:0 0 0 2px var(--color-ring)}textarea.field{height:auto;min-height:7rem}`}</style>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
