import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CookieCategory = "necessary" | "functional" | "targeting" | "performance" | "social";
export type CookiePrefs = Record<CookieCategory, boolean>;

const DEFAULTS: CookiePrefs = {
  necessary: true,
  functional: false,
  targeting: false,
  performance: false,
  social: false,
};

const STORAGE_KEY = "AgileBoardTech.cookie.prefs.v1";
const DECISION_KEY = "AgileBoardTech.cookie.decided.v1";

type Ctx = {
  prefs: CookiePrefs;
  decided: boolean;
  setPrefs: (next: CookiePrefs) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  reopen: () => void;
  settingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
};

const CookieContext = createContext<Ctx | null>(null);

export function CookieProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefsState] = useState<CookiePrefs>(DEFAULTS);
  const [decided, setDecided] = useState(true); // SSR-safe default; corrected after mount
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setPrefsState({ ...DEFAULTS, ...JSON.parse(raw) });
      setDecided(localStorage.getItem(DECISION_KEY) === "1");
    } catch { /* ignore */ }
  }, []);

  const persist = (next: CookiePrefs, mark = true) => {
    setPrefsState(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      if (mark) {
        localStorage.setItem(DECISION_KEY, "1");
        setDecided(true);
      }
    } catch { /* ignore */ }
  };

  const value = useMemo<Ctx>(() => ({
    prefs,
    decided,
    setPrefs: (n) => persist(n),
    acceptAll: () => persist({ necessary: true, functional: true, targeting: true, performance: true, social: true }),
    rejectAll: () => persist({ ...DEFAULTS }),
    reopen: () => { setSettingsOpen(true); },
    settingsOpen,
    openSettings: () => setSettingsOpen(true),
    closeSettings: () => setSettingsOpen(false),
  }), [prefs, decided, settingsOpen]);

  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
}

export function useCookies() {
  const ctx = useContext(CookieContext);
  if (!ctx) throw new Error("useCookies must be used within CookieProvider");
  return ctx;
}
