import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../../../public/assets/logo.png";

const links: Array<{ to: string; label: string }> = [
  { to: "/about", label: "About" },
  { to: "/industries", label: "Industries" },
  { to: "/careers", label: "Careers" },
  { to: "/locations", label: "Contact Us" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page relative flex h-16 items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="flex items-center font-display text-xl font-bold tracking-tight"
        >
          <img
            src={Logo}
            alt="AgileBoard Technology"
            className="w-40 h-auto"
          />
        </Link>


        {/* Desktop Navigation */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={scrollToTop}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>


      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav
            className="container-page flex flex-col gap-1 py-3"
            aria-label="Mobile"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => {
                  setOpen(false);
                  scrollToTop();
                }}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-foreground hover:bg-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

    </header>
  );
}