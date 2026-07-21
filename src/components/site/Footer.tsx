import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import { useCookies } from "@/context/CookieContext";
import Logo from "../../../public/assets/logo.png";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const col = (heading: string, items: Array<{ to: string; label: string }>) => (
  <div>
    <h4 className="mb-3 text-sm font-semibold tracking-wide text-foreground uppercase">{heading}</h4>
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i.to}>
          <Link to={i.to} onClick={scrollToTop} className="text-sm text-muted-foreground hover:text-foreground">{i.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export function Footer() {
  const { openSettings } = useCookies();
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
           <div className="flex items-center">
            <img
              src={Logo}
              alt="AgileBoard Technology"
              className="w-40 h-auto"
            />
          </div>

        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
  Connecting exceptional talent with leading organizations across the United States through trusted staffing, recruitment, and workforce solutions.
</p>
           <div className="mt-5 flex gap-3 text-muted-foreground">
  <a
    href=""
    // target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:text-foreground"
  >
    <Linkedin className="size-4" />
  </a>

  <a
    href=""
    // target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="grid size-9 place-items-center rounded-full border border-border transition-colors hover:text-foreground"
  >
    <Instagram className="size-4" />
  </a>
</div>
          </div>
          {col("Solutions", [
            // { to: "/solutions/project", label: "Project Solutions" },
            { to: "/industries", label: "Industries" },
          ])}
          {col("Company", [
            { to: "/about", label: "About" },
            { to: "/careers", label: "Careers" },
            { to: "/locations", label: "Contact Us" },
          ])}
          {/* {col("Legal", [
            // { to: "/privacy", label: "Privacy Policy" },
            // { to: "/accessibility", label: "Accessibility" },
          ])} */}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AgileBoardTech Inc. All rights reserved.</p>
          <button onClick={openSettings} className="underline-offset-4 hover:underline">
            Cookie settings
          </button>
        </div>
      </div>
    </footer>
  );
}
