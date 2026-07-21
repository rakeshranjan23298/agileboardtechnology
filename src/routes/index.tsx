import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { insights } from "@/data/placeholderData";
import { SectionHeader } from "@/components/site/Section";

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
  "/images/hero6.jpg",
  "/images/hero7.jpg",
  "/images/hero8.jpg",
   "/images/hero9.jpg",
];


const solutions = [
  { to: "/solutions/project", title: "Project Solutions", icon: Compass,
    text: "Transform your business while we help you connect strategy to execution to tackle your most challenging initiatives." },
];

export function HomePage() {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
   <section className="relative overflow-hidden text-white">
  {/* Background Slider */}
  <div className="absolute inset-0">
    {heroImages.map((image, index) => (
      <img
        key={image}
        src={image}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-[4000ms] ${
          index === currentImage
            ? "opacity-100 scale-110"
            : "opacity-0 scale-100"
        }`}
      />
    ))}
  </div>

  {/* Content */}
  <div className="container-page relative z-10 grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-center">
    <div className="lg:col-span-7">
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
        <Sparkles className="size-3.5" />
         years of meaningful work
      </p>

      <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
        Let's transform{" "}
        <span className="italic text-[color:var(--color-accent)]">
          business
        </span>
        , together.
      </h1>

      <p className="mt-6 max-w-xl text-lg text-white/80">
        We connect Fortune 1000 companies with the talent, teams and project
        expertise they need to move ambitious ideas forward.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/about"
          className="inline-flex h-12 items-center gap-2 rounded-md bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-[color:var(--color-accent-foreground)] transition-transform hover:-translate-y-0.5"
        >
          Learn more <ArrowRight className="size-4" />
        </Link>

        <Link
          to="/careers"
          className="inline-flex h-12 items-center rounded-md border border-white/30 bg-white/5 px-5 text-sm font-semibold text-white hover:bg-white/10"
        >
          Explore careers
        </Link>
      </div>

      {/* <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8 text-white">
        {[
          ["60+", "years"],
          ["1,000+", "clients served"],
          ["35", "US offices"],
        ].map(([n, l]) => (
          <div key={l}>
            <dt className="text-3xl font-bold">{n}</dt>
            <dd className="text-xs uppercase tracking-wider text-white/60">
              {l}
            </dd>
          </div>
        ))}
      </dl> */}
    </div>

  </div>
</section>

      <section className="container-page py-20 sm:py-28">
        <SectionHeader eyebrow="Our spectrum of solutions" title="One firm. One way we deliver." subtitle="From strategy through execution, we help teams move ambitious ideas forward." />
        <div className="mt-12 grid gap-6 md:grid-cols-1">
          {solutions.map((s) => (
            <Link key={s.to} to={s.to} className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-xl">
              <s.icon className="size-8 text-brand" />
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.text}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Our mission</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              To Have a Meaningful Impact on All the Lives We Serve®
            </h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              At AgileBoardTech, we strive to live that promise every day — and have helped our clients, candidates and consultants find
              meaningful work and innovative business solutions for many years.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Our philosophy</p>
           <h3 className="mt-3 font-display text-2xl font-bold">
  Connecting Talent with Opportunity
</h3>
           <p className="mt-4 text-muted-foreground">
  We believe great careers begin with the right opportunities. AgileBoardTech brings together talented professionals and trusted employers through a streamlined hiring platform designed to make recruitment faster, smarter, and more transparent.
</p>
            <ul className="mt-6 grid gap-3 text-sm">
              {["Specialty focus on Technology & FA", "Consultant-first culture", "Office-occasional hybrid model"].map((t) => (
                <li key={t} className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-brand" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow="Insights" title="Ideas worth your time" subtitle="Perspectives from our consultants and clients on the work shaping the next decade." />
          <Link to="/about" className="text-sm font-semibold text-brand hover:underline">All insights →</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((i, idx) => (
            <article key={i.id} className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={`https://picsum.photos/seed/insight-${idx}/640/400`} alt="" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{i.category}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug">{i.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
