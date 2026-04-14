"use client";

import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 hover:shadow-sm"
    >
      <Mail size={16} className="text-blue-600" />
      {profile.email}
      {copied ? (
        <Check size={14} className="text-green-500" />
      ) : (
        <Copy size={14} className="text-slate-400" />
      )}
    </button>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
              Contact
            </h3>
            <CopyEmailButton />
          </div>

          <p className="text-xs text-slate-400">
            &copy; 2026 Yusei Kabetani
          </p>
        </div>
      </div>
    </footer>
  );
}
