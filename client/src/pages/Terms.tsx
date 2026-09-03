/* ⚠ DRAFT PENDING COUNSEL REVIEW (Ice Miller). Written 2026-09-03.
 * Deliberately omits liability cap, arbitration/class waiver, indemnity and warranty disclaimer —
 * those decide what happens when something goes wrong and a badly-drawn cap is worse than none.
 * Marked in-page so nobody assumes the document is complete.
 * ⚠ Where a signed customer agreement exists (MSA, school-official agreement, DPA), it governs. */
import { useEffect } from "react";

const UPDATED = "3 September 2026";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service — SkillDNA";
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Legal</p>
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated {UPDATED}</p>

        <div className="space-y-8 leading-8 text-slate-300">
          <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-5 text-sm">
            <strong className="text-white">If your organisation has a signed agreement with us, it wins.</strong>{" "}
            These terms cover this website and self-serve use. A Master Services Agreement, data
            processing addendum or school-official agreement takes precedence over anything here.
          </div>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Who these terms are with</h2>
            <p>
              SkillDNA is a product of CyberHopeAI, Inc., a Delaware C-Corporation operating from Carmel,
              Indiana. By using SkillDNA you agree to these terms. If you are agreeing for an organisation,
              you confirm you are authorised to bind it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Accounts and access</h2>
            <p>
              You are responsible for activity under your account and for keeping your credentials secure.
              Where your employer or institution provides your account, they control your access and may
              change or remove it. One CyberHopeAI sign-in works across our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">If you are an organisation</h2>
            <p>
              You decide what information about your people goes into SkillDNA, and you are responsible for
              having the right to put it there — including any notice or consent your workers or students
              are owed, and any obligations under employment, education or privacy law.
            </p>
            <p className="mt-3">
              You agree not to upload special categories of data — health information, government
              identifiers, financial account details — unless a signed agreement specifically provides for
              it. If you need to, talk to us first so the right agreement is in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Acceptable use</h2>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Do not upload information about a person you have no right to hold</li>
              <li>Do not misrepresent a credential, qualification or verification status</li>
              <li>Do not use SkillDNA to unlawfully discriminate, or as the sole basis for a decision that materially affects someone</li>
              <li>Do not scrape, resell or attempt to extract another organisation&rsquo;s data</li>
              <li>Do not reverse engineer the service or use it to build a competing product</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Verification — what it does and does not mean</h2>
            <p>
              SkillDNA records and displays the verification status of skills, credentials and history. A
              verified status means <strong className="text-white">the stated evidence was supplied and
              checked against the source your organisation designated</strong> — nothing more.
            </p>
            <p className="mt-3">
              It is not a guarantee of competence, a background check, or a fitness-for-role determination,
              and it does not transfer responsibility for a hiring, promotion or academic decision to us.
              Those decisions remain yours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Your data and ours</h2>
            <p>
              Your organisation keeps ownership of the records it puts into SkillDNA. You grant us the
              licence needed to host and process them to provide the service — nothing broader. We do not
              sell your data and we do not use your records to train models for other customers.
            </p>
            <p className="mt-3">
              We own the platform itself: software, interfaces, documentation and brand. On termination we
              will return or delete your data on request, subject to any retention the law requires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Availability and support</h2>
            <p>
              We work to keep SkillDNA running but do not promise uninterrupted availability on self-serve
              plans. Service levels, where they exist, live in a signed agreement.
            </p>
          </section>

          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-5 text-sm">
            <strong className="text-white">Sections still to be drafted by counsel:</strong> warranty
            disclaimer, limitation of liability, indemnification, dispute resolution and governing law, and
            termination mechanics. These decide what happens when something goes wrong and are deliberately
            not templated here.
          </div>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Changes</h2>
            <p>
              We may update these terms and will post the new version here with the date above. Material
              changes come with reasonable notice to organisations. Continuing to use SkillDNA after a
              change means you accept it.
            </p>
          </section>

          <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-5 text-sm text-slate-400">
            Questions:{" "}
            <a href="mailto:legal@cyberhopeai.com" className="text-cyan-400">legal@cyberhopeai.com</a> ·
            SkillDNA is a product of CyberHopeAI, Inc., Carmel, Indiana ·{" "}
            <a href="/privacy" className="text-cyan-400">Privacy Policy</a>
          </div>
        </div>
      </main>
    </div>
  );
}
