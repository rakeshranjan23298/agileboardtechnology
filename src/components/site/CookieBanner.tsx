import { useCookies, type CookieCategory, type CookiePrefs } from "@/context/CookieContext";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const CATS: Array<{ key: CookieCategory; label: string; locked?: boolean; desc: string }> = [
  { key: "necessary", label: "Strictly necessary", locked: true, desc: "Required for the site to function. Always on." },
  { key: "functional", label: "Functional", desc: "Remember preferences such as language and region." },
  { key: "performance", label: "Performance", desc: "Aggregate analytics that help us improve the site." },
  { key: "targeting", label: "Targeting", desc: "Used to deliver advertising relevant to you." },
  { key: "social", label: "Social media", desc: "Enable sharing and embedded social content." },
];

export function CookieBanner() {
  const { decided, acceptAll, rejectAll, openSettings, settingsOpen, prefs, setPrefs, closeSettings } = useCookies();
  const [mounted, setMounted] = useState(false);
  const [draft, setDraft] = useState<CookiePrefs>(prefs);
  useEffect(() => setMounted(true), []);
  useEffect(() => setDraft(prefs), [prefs, settingsOpen]);

  if (!mounted) return null;

  return (
    <>
      {!decided && !settingsOpen && (
        <div role="dialog" aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-50 rounded-xl border border-border bg-card p-4 shadow-2xl sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-md">
          <h3 className="text-base font-semibold">We value your privacy</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            We use cookies to improve your experience, analyze traffic and personalize content. Choose what you're comfortable with.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={acceptAll} className="inline-flex h-9 items-center rounded-md bg-brand px-3 text-sm font-semibold text-brand-foreground hover:bg-brand/90">Accept all</button>
            <button onClick={rejectAll} className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm font-semibold hover:bg-muted">Reject all</button>
            <button onClick={openSettings} className="inline-flex h-9 items-center rounded-md px-3 text-sm font-semibold text-muted-foreground hover:text-foreground">Preferences</button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-label="Cookie preferences">
          <div className="w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h3 className="text-lg font-semibold">Cookie preferences</h3>
              <button onClick={closeSettings} aria-label="Close" className="grid size-8 place-items-center rounded-md hover:bg-muted"><X className="size-4" /></button>
            </div>
            <div className="max-h-[60vh] space-y-3 overflow-y-auto p-4">
              {CATS.map((c) => (
                <label key={c.key} className="flex items-start justify-between gap-4 rounded-lg border border-border p-3">
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{c.label}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{c.desc}</span>
                  </span>
                  <input
                    type="checkbox"
                    className="mt-1 size-4 accent-[color:var(--brand)]"
                    checked={draft[c.key]}
                    disabled={c.locked}
                    onChange={(e) => setDraft({ ...draft, [c.key]: e.target.checked })}
                  />
                </label>
              ))}
            </div>
            <div className="flex flex-wrap justify-end gap-2 border-t border-border p-4">
              <button onClick={() => { setPrefs({ necessary: true, functional: false, targeting: false, performance: false, social: false }); closeSettings(); }}
                className="inline-flex h-9 items-center rounded-md border border-border px-3 text-sm font-semibold hover:bg-muted">Reject all</button>
              <button onClick={() => { setPrefs(draft); closeSettings(); }}
                className="inline-flex h-9 items-center rounded-md bg-brand px-3 text-sm font-semibold text-brand-foreground hover:bg-brand/90">Save preferences</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
