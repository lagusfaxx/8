"use client";

import Link from "next/link";
import { ChevronLeft, FileText } from "lucide-react";
import LegalDocViewer from "../_components/LegalDocViewer";
import { TERMS_SECTIONS, TERMS_VERSION } from "../../../lib/umate-legal";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 space-y-6">
      <Link
        href="/umate/account"
        className="inline-flex items-center gap-1.5 text-xs text-white/40 transition hover:text-white/60"
      >
        <ChevronLeft className="h-3.5 w-3.5" /> Volver
      </Link>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00aff0]/10">
          <FileText className="h-5 w-5 text-[#00aff0]" />
        </div>
        <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          Términos y condiciones de U-Mate
        </h1>
      </div>

      <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-5 sm:p-7">
        <LegalDocViewer sections={TERMS_SECTIONS} version={TERMS_VERSION} />
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/umate/rules"
          className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] px-3 py-2 text-xs font-medium text-white/50 transition hover:border-white/[0.12] hover:text-white/70"
        >
          Reglas de la plataforma
        </Link>
        <Link
          href="/umate/contrato"
          className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] px-3 py-2 text-xs font-medium text-white/50 transition hover:border-white/[0.12] hover:text-white/70"
        >
          Contrato de prestación de servicios
        </Link>
      </div>
    </div>
  );
}
