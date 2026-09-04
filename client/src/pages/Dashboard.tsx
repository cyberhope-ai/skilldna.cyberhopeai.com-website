import { useEffect } from "react";

// The marketing site's "Demo" / "Start Your SkillDNA" routes here (/dashboard).
// Send users into the REAL SkillDNA app to create their own SkillID.
// ⚠ Must be the custom domain, NOT the raw *.azurecontainerapps.io hostname. The app builds its
// OAuth return_to from location.origin, and the shared login broker only honours allow-listed
// origins — the raw Azure host is not one, so signing in from it silently dumped the user on
// geniemadeit.com/app instead of coming back here. Same app, both hostnames.
const SKILLDNA_APP = "https://app.skilldna.cyberhopeai.com";

export default function Dashboard() {
  useEffect(() => {
    window.location.replace(SKILLDNA_APP + "/welcome");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0a1330",
        color: "#eaf0ff",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 44, marginBottom: 12 }}>🧬</div>
        <p style={{ fontSize: 18, margin: 0 }}>Opening SkillDNA…</p>
        <p style={{ fontSize: 13, opacity: 0.7, marginTop: 10 }}>
          If you're not redirected,{" "}
          <a href={SKILLDNA_APP + "/welcome"} style={{ color: "#5ff0da" }}>
            create your SkillID here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
