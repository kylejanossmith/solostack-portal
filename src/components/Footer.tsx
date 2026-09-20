export function Footer() {
  return (
    <footer className="mt-auto border-t border-border-subtle">
      <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-muted sm:px-6">
        <p className="mb-2">
          Organization tip only. Not career, financial, or legal advice. No job
          or salary outcomes guaranteed.
        </p>
        <p>© {new Date().getFullYear()} SoloStack</p>
      </div>
    </footer>
  );
}
