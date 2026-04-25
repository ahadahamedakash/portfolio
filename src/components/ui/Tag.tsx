interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-[var(--color-bg-overlay)] border border-[var(--color-border-subtle)] rounded-md text-[var(--color-text-secondary)]">
      {children}
    </span>
  );
}
