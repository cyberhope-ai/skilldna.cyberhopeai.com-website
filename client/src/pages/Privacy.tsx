/* ⚠ DRAFT PENDING COUNSEL REVIEW (Ice Miller). Written 2026-09-03.
 *
 * SkillDNA had NO privacy policy at all before this — /privacy, /terms and any nonsense URL all
 * returned the identical SPA shell, so the links looked like they worked and did not. That matters
 * here more than on a marketing site: this product holds employment and education records.
 *
 * Two things must not be softened without a lawyer:
 *   1. FERPA. If SkillDNA holds student education records on behalf of a school or district, we act
 *      as a "school official" under the institution's direction, and their agreement governs — not
 *      this page. The page must defer, never replace.
 *   2. The employer/worker split. Employers are our CUSTOMERS; workers are the DATA SUBJECTS. A
 *      worker's rights against their employer are not ours to grant, and this page must not imply
 *      we can delete records an employer is legally required to retain.
 */
import { useEffect } from "react";

const UPDATED = "3 September 2026";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy — SkillDNA";
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Legal</p>
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-10">Last updated {UPDATED}</p>

        <div className="space-y-8 leading-8 text-slate-300">
          <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-5 text-sm">
            <strong className="text-white">Read this first if your employer or school gave you SkillDNA.</strong>{" "}
            When an employer, school or training provider uses SkillDNA, <strong>they</strong> decide what
            information goes in and how it is used. We process it on their instructions. If you want your
            records corrected or removed, start with them — and if their agreement with us conflicts with
            anything here, that agreement governs.
          </div>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Who we are</h2>
            <p>
              SkillDNA is a product of CyberHopeAI, Inc., a Delaware C-Corporation operating from Carmel,
              Indiana. Contact us at{" "}
              <a href="mailto:privacy@cyberhopeai.com" className="text-cyan-400">privacy@cyberhopeai.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">What we collect</h2>
            <p>SkillDNA builds a verified record of what someone can do. Depending on how it is used, that includes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Identity</strong> — name, email address, and the account you sign in with</li>
              <li><strong>Work history and role</strong> — employer, position, dates, assignments</li>
              <li><strong>Skills, training and credentials</strong> — courses, certifications, assessments, competencies and their verification status</li>
              <li><strong>Performance and progress</strong> — where an employer or institution records it</li>
              <li><strong>Documents you or your organisation upload</strong> in support of the above</li>
              <li><strong>Technical data</strong> — IP address, device and browser, and usage logs</li>
            </ul>
            <p className="mt-3">
              We do not ask for, and you should not upload, Social Security numbers, financial account
              details, or health information unless a signed agreement specifically provides for it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Education records</h2>
            <p>
              Where SkillDNA holds student education records on behalf of a school, district or other
              institution, we act as a <strong className="text-white">school official with a legitimate
              educational interest</strong> under FERPA, under that institution&rsquo;s direct control. We
              use those records only to provide the service, we do not re-disclose them except as the
              institution directs or the law requires, and we do not use them to build products or train
              models.
            </p>
            <p className="mt-3">
              Students and parents should direct access and correction requests to the institution, which
              holds those rights under FERPA. We will support the institution in answering them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Employment records</h2>
            <p>
              Where an employer uses SkillDNA, the employer determines what is recorded about you and how
              long it is kept — including records they are legally required to retain. We cannot delete
              those on your request alone, and we will tell you so plainly rather than pretend otherwise.
              We use employment data only to provide the service to that employer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">How we use information</h2>
            <p>
              To operate SkillDNA: to create and verify a professional record, to show it to the people
              your organisation authorises, to support the service, and to keep it secure. We use
              aggregate, de-identified statistics to improve the product.
            </p>
            <p className="mt-3">
              <strong className="text-white">We do not sell personal information.</strong> We do not use
              your records for advertising, and we do not share them for cross-context behavioural
              advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Automated processing</h2>
            <p>
              SkillDNA may use automated analysis to organise skills, suggest matches or surface gaps.
              These outputs are decision <em>support</em>. A person at your organisation makes the decision
              — we do not make employment or academic decisions about you, and our platform records what
              informed a decision so it can be reviewed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Who we share with</h2>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Your organisation</strong> — the employer or institution whose account holds your record</li>
              <li><strong>Cloud infrastructure</strong> — Microsoft Azure and Cloudflare, for hosting and storage</li>
              <li><strong>Sign-in providers</strong> — Google, Microsoft or Facebook, if you use them to sign in</li>
              <li><strong>Email delivery and error monitoring</strong>, to run and support the service</li>
            </ul>
            <p className="mt-3">
              Each acts on our instructions and may not use your information for its own purposes. We may
              disclose information where the law requires it, or to protect someone&rsquo;s safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">How long we keep it</h2>
            <p>
              While your organisation&rsquo;s account is active and for the period its agreement specifies.
              When an organisation leaves, we return or delete its data on request, subject to any retention
              the law requires. Personal accounts are deleted on request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Your rights</h2>
            <p>
              Depending on where you live you may have the right to access, correct, delete or export your
              information, and to object to certain processing. Where your record belongs to an employer or
              institution, ask them first — we will help them respond. Otherwise email{" "}
              <a href="mailto:privacy@cyberhopeai.com" className="text-cyan-400">privacy@cyberhopeai.com</a>.
              You will not be treated differently for asking.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Children</h2>
            <p>
              SkillDNA is not directed to children under 13 and we do not knowingly collect their
              information outside an institutional setting. Where a school uses SkillDNA with students, it
              does so under its agreement with us and its own consent obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">Security and changes</h2>
            <p>
              We use encryption in transit, access controls and audit logging, and the platform records who
              accessed what. No system is perfectly secure. We will post any change to this policy here and
              update the date above; if a change materially affects information already collected, we will
              tell affected organisations directly.
            </p>
          </section>

          <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-5 text-sm text-slate-400">
            Questions:{" "}
            <a href="mailto:privacy@cyberhopeai.com" className="text-cyan-400">privacy@cyberhopeai.com</a>{" "}
            · SkillDNA is a product of CyberHopeAI, Inc., Carmel, Indiana ·{" "}
            <a href="https://cyberhopeai.com/privacy" className="text-cyan-400">CyberHopeAI privacy policy</a>
          </div>
        </div>
      </main>
    </div>
  );
}
