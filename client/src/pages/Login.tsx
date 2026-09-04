import { useEffect } from "react";

// The marketing site's "Sign In" / "Get Started" buttons all route here (/login).
// Instead of the old mockup, send users straight into the REAL SkillDNA app on Azure.
// ⚠ Must be the custom domain, NOT the raw *.azurecontainerapps.io hostname. The app builds its
// OAuth return_to from location.origin, and the shared login broker only honours allow-listed
// origins — the raw Azure host is not one, so signing in from it silently dumped the user on
// geniemadeit.com/app instead of coming back here. Same app, both hostnames.
const SKILLDNA_APP = "https://app.skilldna.cyberhopeai.com";

export default function Login() {
  useEffect(() => {
    window.location.replace(SKILLDNA_APP + "/");
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
        <p style={{ fontSize: 18, margin: 0 }}>Taking you to SkillDNA…</p>
        <p style={{ fontSize: 13, opacity: 0.7, marginTop: 10 }}>
          If you're not redirected,{" "}
          <a href={SKILLDNA_APP + "/"} style={{ color: "#5ff0da" }}>
            sign in here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
