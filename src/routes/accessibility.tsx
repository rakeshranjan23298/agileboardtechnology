import { PageHero } from "@/components/site/Section";

export function AccessibilityPage() {
  return (
    <>
      <PageHero eyebrow="Accessibility" title="Designed for everyone." lead="We strive to meet WCAG 2.1 AA standards across our digital experiences." />
      <section className="container-page prose prose-slate max-w-3xl py-16 dark:prose-invert">
        <h2>Our commitment</h2>
        <p>AgileBoardTech is committed to providing an inclusive digital experience for all users, including those who rely on assistive technology.</p>
        <h2>Features implemented</h2>
        <ul>
          <li>Semantic landmarks, headings and lists across every page.</li>
          <li>Keyboard-navigable menus, dialogs and form controls.</li>
          <li>Color contrast meeting WCAG 2.1 AA on text and interactive elements.</li>
          <li>Descriptive alt text for content imagery and aria-labels on icon-only controls.</li>
          <li>Respect for <code>prefers-reduced-motion</code>.</li>
        </ul>
        <h2>Report an issue</h2>
        <p>If you encounter a barrier or have feedback, email <a href="mailto:accessibility@AgileBoardTech.com">accessibility@AgileBoardTech.com</a>. We aim to respond within five business days.</p>
      </section>
    </>
  );
}
