export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] py-6 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
            © 2026 Ahad Ahamed Akash. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-[var(--color-text-tertiary)]">
            Made with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
