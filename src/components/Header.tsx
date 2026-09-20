import Image from "next/image";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export function Header() {
  return (
    <header className="border-b border-border-subtle bg-panel/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/solostack-pfp.png"
            alt="SoloStack"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">SoloStack</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <SignedOut>
            <SignInButton mode="redirect">
              <button className="rounded-lg border border-border px-3 py-1.5 text-foreground transition hover:border-accent">
                Sign in
              </button>
            </SignInButton>
            <Link
              href="/sign-up"
              className="rounded-lg bg-accent px-3 py-1.5 font-medium text-white transition hover:bg-accent-hover"
            >
              Sign up
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-muted transition hover:text-foreground"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
