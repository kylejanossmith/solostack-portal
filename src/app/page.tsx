import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-14 text-center">
        <Image
          src="/solostack-pfp.png"
          alt="SoloStack"
          width={96}
          height={96}
          className="mx-auto mb-6 rounded-full border border-border shadow-lg shadow-accent/20"
          priority
        />
        <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
          SoloStack
        </h1>
        <p className="mb-8 text-lg text-muted">
          Simple digital systems for busy people.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://kylejanos.gumroad.com/l/aijqck"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-accent px-5 py-2.5 font-medium text-white transition hover:bg-accent-hover"
          >
            Get Job Search OS — NZ$15
          </a>
          <Link
            href="/sign-up"
            className="rounded-xl border border-border px-5 py-2.5 font-medium transition hover:border-accent"
          >
            Create account
          </Link>
        </div>
      </section>

      <div className="mb-12 grid gap-5 sm:grid-cols-3">
        <article className="rounded-2xl border border-border-subtle bg-panel p-6">
          <h2 className="mb-2 text-xl font-semibold">Job Search OS</h2>
          <p className="mb-4 text-sm leading-relaxed text-muted">
            A Notion + Google Sheets pipeline to track applications, follow-ups,
            interviews, and offers — so nothing slips.
          </p>
          <span className="text-lg font-semibold text-accent">NZ$15</span>
        </article>
        <article className="rounded-2xl border border-border-subtle bg-panel p-6">
          <h2 className="mb-2 text-xl font-semibold">Free checklist</h2>
          <p className="text-sm leading-relaxed text-muted">
            Grab the follow-up cadence checklist free. Use it today, upgrade to
            the full OS when you&apos;re ready.
          </p>
        </article>
        <article className="rounded-2xl border border-border-subtle bg-panel p-6">
          <h2 className="mb-2 text-xl font-semibold">Built for busy seekers</h2>
          <p className="text-sm leading-relaxed text-muted">
            Clean systems, not fluff. Designed for people who are actually job
            hunting between real life.
          </p>
        </article>
      </div>

      <div className="rounded-2xl border border-border bg-panel/60 p-6 text-center">
        <p className="mb-2 text-sm font-medium text-accent">Compliance</p>
        <p className="text-sm leading-relaxed text-muted">
          Job Search OS is an <strong className="text-foreground">organizer only</strong>.
          It is not career counseling, recruiting, legal advice, or immigration
          advice. No interviews, offers, employment, or salary outcomes are
          guaranteed. Verify all compensation and employment terms in writing
          with the employer.
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/dashboard"
          className="text-sm text-muted underline-offset-4 transition hover:text-accent hover:underline"
        >
          Already a customer? Sign in to your dashboard →
        </Link>
      </div>
    </div>
  );
}
