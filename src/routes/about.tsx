import { PageHero, SectionHeader } from "@/components/site/Section";
import { milestones, teamMembers } from "@/data/placeholderData";
import about from "../../public/images/about.jpg";
import {
  Award,
  Building2,
  Heart,
  Users,
} from "lucide-react";

import founderImg from "../../public/assets/ajay-rajput.jpg";
import coFounderImg from "../../public/assets/akash-raj.jpg";

const teamImages: Record<string, string> = {
  "1": founderImg,
  "2": coFounderImg,
};

export function AboutPage() {
  return (
    <>
        <section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container-page flex h-full flex-col items-center justify-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            About Us
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Connecting Great Talent with Great Companies.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/90">
            We are a trusted U.S. staffing and recruitment partner dedicated to
            helping organizations build high-performing teams while empowering
            professionals to achieve their career goals.
          </p>
        </div>
      </section>

      {/* Company History */}
     {/* Company Highlights */}
<section className="container-page py-20">
  <SectionHeader
    eyebrow="Our Impact"
    title="Trusted by Businesses Across the United States"
  />

  <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
    {milestones.map((item) => (
      <div
        key={item.title}
        className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <h3 className="text-4xl font-bold text-brand">
          {item.value}
        </h3>

        <h4 className="mt-4 text-xl font-semibold">
          {item.title}
        </h4>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {item.text}
        </p>
      </div>
    ))}
  </div>
</section>
      {/* Why Choose Us */}
      <section className="border-y border-border bg-muted/40 py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Delivering Talent. Building Success."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Heart,
                title: "Our Mission",
                description:
                  "Connecting exceptional talent with leading organizations across the United States while creating long-term value for clients and candidates.",
              },
              {
                Icon: Award,
                title: "Industry Expertise",
                description:
                  "Specialized recruitment services across IT, Engineering, Healthcare, Finance, and Professional staffing.",
              },
              {
                Icon: Building2,
                title: "Flexible Staffing",
                description:
                  "Contract, Contract-to-Hire, Direct Hire, and Executive Search solutions tailored to your workforce needs.",
              },
              {
                Icon: Users,
                title: "Trusted Partnerships",
                description:
                  "Building lasting client relationships through transparency, responsiveness, and exceptional talent delivery.",
              },
            ].map(({ Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-6 w-6 text-brand" />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="container-page py-20">
        <SectionHeader
          eyebrow="Leadership"
          title="Meet Our Leadership Team"
        />

        <p className="mx-auto mt-4 max-w-3xl text-center text-muted-foreground">
          Our leadership team is committed to delivering exceptional staffing
          solutions, building trusted client relationships, and helping
          professionals achieve meaningful career success.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={teamImages[member.id]}
                alt={member.name}
                className="mx-auto h-32 w-32 rounded-full border-4 border-brand/10 object-cover"
              />

              <h3 className="mt-6 text-2xl font-bold">
                {member.name}
              </h3>

              <p className="mt-2 font-medium text-brand">
                {member.title}
              </p>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}