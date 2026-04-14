import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Accounts() {
  return (
    <section id="accounts" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Accounts" title="各種アカウント" />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.accounts.map((account, i) => (
            <FadeIn key={account.name} delay={0.05 * (i % 6)}>
              <a
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-800">
                    {account.name}
                  </span>
                  {account.handle && (
                    <span className="mt-0.5 text-xs text-slate-400">
                      {account.handle}
                    </span>
                  )}
                </div>
                <ExternalLink size={16} className="text-slate-400" />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
