import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";

export function Accounts() {
  return (
    <section id="accounts" className="scroll-mt-20 bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading label="Accounts" title="各種アカウント" />
        </FadeIn>

        <div className="mt-8">
          {profile.accounts.map((account, i) => (
            <FadeIn key={account.name} delay={0.03 * (i % 6)}>
              <a
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-slate-200 py-4 transition last:border-0 hover:bg-slate-100/50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-slate-800">
                    {account.name}
                  </span>
                  {account.handle && (
                    <span className="text-xs text-slate-400">
                      {account.handle}
                    </span>
                  )}
                </div>
                <ExternalLink
                  size={14}
                  className="text-slate-300 transition group-hover:text-slate-500"
                />
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
