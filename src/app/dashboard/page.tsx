import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const products = [
  {
    title: "Job Search OS",
    description:
      "Notion + Google Sheets pipeline for applications, follow-ups, interviews, and offers.",
    price: "NZ$15",
    href: "https://kylejanos.gumroad.com/l/aijqck",
    cta: "Open on Gumroad",
  },
  {
    title: "Follow-up checklist",
    description:
      "Free follow-up cadence checklist. Use it today, upgrade to the full OS when ready.",
    price: "Free",
    href: "https://kylejanos.gumroad.com/l/gloqxz",
    cta: "Get free checklist",
  },
];

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName = user?.firstName ?? user?.username ?? "there";

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-10 flex items-start gap-4">
        <Image
          src="/solostack-pfp.png"
          alt="SoloStack"
          width={56}
          height={56}
          className="rounded-full border border-border"
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome, {firstName}
          </h1>
          <p className="mt-1 text-muted">
            Your SoloStack customer dashboard. Grab products below — more
            connected services coming soon.
          </p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">Your products</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.href}
              className="flex flex-col rounded-2xl border border-border-subtle bg-panel p-6 transition hover:border-accent"
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <span className="text-sm font-medium text-accent">
                  {product.price}
                </span>
              </div>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                {product.description}
              </p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover"
              >
                {product.cta} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-border bg-panel/40 p-6">
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-xl font-semibold">Connected services</h2>
          <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
            Coming soon
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted">
          Future integrations (Gumroad receipt sync, Notion workspace links, and
          more) will appear here. This portal is your account and product hub —
          not a place where customer workloads run.
        </p>
      </section>

      <p className="mt-8 text-center text-sm text-muted">
        <Link href="/" className="hover:text-accent hover:underline">
          ← Back to home
        </Link>
      </p>
    </div>
  );
}
