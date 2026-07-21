import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import { CookieProvider } from "@/context/CookieContext";
import { HomePage } from "@/routes/index";
import { AboutPage } from "@/routes/about";
import { CareersPage } from "@/routes/careers";
import { CareersDetailPage } from "@/routes/careers.$id";
import { IndustriesPage } from "@/routes/industries";
import { LocationsPage } from "@/routes/locations";
import { PrivacyPage } from "@/routes/privacy";
import { AccessibilityPage } from "@/routes/accessibility";
import { ProjectSolutionsPage } from "@/routes/solutions.project";

function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
    </div>
  );
}

export function App() {
  return (
    <CookieProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:id" element={<CareersDetailPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/solutions/project" element={<ProjectSolutionsPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CookieBanner />
    </CookieProvider>
  );
}
