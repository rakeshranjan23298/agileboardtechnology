import { PageHero } from "@/components/site/Section";
import { useCookies } from "@/context/CookieContext";

export function PrivacyPage() {
  const { openSettings } = useCookies();
  return (
    <>
      <PageHero eyebrow="Privacy" title="Your data, handled with care." lead="A plain-language summary of how we collect, use and protect personal information." />
      <section className="container-page prose prose-slate max-w-3xl py-16 dark:prose-invert">
        <h2>Information we collect</h2>
        <p>We collect information you provide when you submit a  or contact form, and limited analytics about how you use this site.</p>
        <h2>How we use it</h2>
        <p>To match candidates to opportunities, respond to inquiries, and improve our digital experiences. We never sell personal data.</p>
        <h2>Cookies</h2>
        <p>You control non-essential cookies. <button onClick={openSettings} className="text-brand underline">Open cookie preferences</button>.</p>
        <h2>Your rights</h2>
        <p>Depending on your jurisdiction, you may have the right to access, correct or delete personal information. Email <a href="mailto:privacy@AgileBoardTech.com">privacy@AgileBoardTech.com</a>.</p>
      </section>
    </>
  );
}
