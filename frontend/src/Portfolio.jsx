import { useState, useEffect } from "react";

const data = {
  name: "Your Name",
  title: "Software Engineer",
  tagline: "I build fast, reliable systems and clean user experiences.",
  location: "San Francisco, CA",
  email: "you@email.com",
  github: "github.com/yourhandle",
  linkedin: "linkedin.com/in/yourhandle",
  about:
    "Full-stack engineer with 4+ years building web products from prototype to production. I care about clean architecture, developer experience, and shipping things that actually work. Previously at [Company], currently open to new opportunities.",
  skills: {
    Languages: ["TypeScript", "Python", "Go", "SQL"],
    Frontend: ["React", "Next.js", "CSS / Tailwind"],
    Backend: ["Node.js", "FastAPI", "PostgreSQL", "Redis"],
    Infra: ["AWS", "Docker", "Terraform", "GitHub Actions"],
  },
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Acme Corp",
      period: "2022 – Present",
      points: [
        "Led rewrite of core API, reducing p99 latency by 60%",
        "Owned end-to-end feature delivery for payments module (3 engineers)",
        "Introduced contract testing, cutting integration bugs by 40%",
      ],
    },
    {
      role: "Software Engineer",
      company: "Startup Inc.",
      period: "2020 – 2022",
      points: [
        "Built React dashboard used by 10K+ daily active users",
        "Designed event-driven pipeline handling 1M+ events/day",
        "Mentored 2 junior engineers, ran weekly code reviews",
      ],
    },
    {
      role: "Engineering Intern",
      company: "Big Tech Co.",
      period: "Summer 2019",
      points: [
        "Shipped A/B test framework used by 4 product teams",
        "Reduced CI build time by 35% via caching improvements",
      ],
    },
  ],
  projects: [
    {
      name: "OpenGraph CLI",
      tech: "Go · REST · GitHub Actions",
      desc: "CLI tool that auto-generates Open Graph images for static sites. 800+ GitHub stars.",
      link: "github.com/you/opengraph-cli",
    },
    {
      name: "Logdash",
      tech: "Next.js · Postgres · Websockets",
      desc: "Real-time log viewer with search, filters, and alerting. Self-hostable.",
      link: "github.com/you/logdash",
    },
    {
      name: "Pocketbase Sync",
      tech: "TypeScript · SQLite · CRDTs",
      desc: "Offline-first sync layer for PocketBase apps with conflict resolution.",
      link: "github.com/you/pb-sync",
    },
  ],
};

const RED = "#e63946";
const BORDER = "#1a1a1a";

function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      style={{
        color: hovered ? "#ffffff" : "#555",
        textDecoration: "none",
        fontSize: "12px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        fontFamily: "inherit",
        transition: "color 0.12s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

function ContactLink({ label, value, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
      <span style={{ fontSize: "12px", color: "#444", letterSpacing: "0.16em", textTransform: "uppercase", minWidth: "80px" }}>
        {label}
      </span>
      <a
        href={href || "#"}
        style={{ fontSize: "15px", color: hovered ? "#ffffff" : "#999", textDecoration: "none", transition: "color 0.12s" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {value}
      </a>
    </div>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`https://${project.link}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: hovered ? "#0d0d0d" : "#000",
        border: `1px solid ${hovered ? "#2e2e2e" : BORDER}`,
        padding: "1.8rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        transition: "background 0.12s, border-color 0.12s",
        textDecoration: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ fontSize: "15px", color: "#ffffff", fontWeight: 700, letterSpacing: "-0.01em" }}>
        {project.name}
      </div>
      <div style={{ fontSize: "12px", color: RED, letterSpacing: "0.1em" }}>{project.tech}</div>
      <div style={{ fontSize: "14px", color: "#777", lineHeight: 1.8, flexGrow: 1 }}>{project.desc}</div>
      <div style={{ fontSize: "12px", color: "#333", marginTop: "0.4rem" }}>↗ {project.link}</div>
    </a>
  );
}

const skillIcons = {
  Languages: "{ }",
  Frontend: "◈",
  Backend: "⬡",
  Infra: "⬢",
};

function SkillGroup({ group, items }) {
  return (
    <div style={{
      border: `1px solid ${BORDER}`,
      padding: "1.6rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      position: "relative",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.2rem" }}>
        <span style={{ fontSize: "16px", color: RED, fontWeight: 400, lineHeight: 1 }}>
          {skillIcons[group] || "·"}
        </span>
        <span style={{ fontSize: "12px", color: "#555", letterSpacing: "0.18em", textTransform: "uppercase" }}>
          {group}
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {items.map((s) => (
          <span key={s} style={{
            fontSize: "13px",
            color: "#ccc",
            background: "#0d0d0d",
            border: `1px solid #222`,
            padding: "4px 12px",
            letterSpacing: "0.02em",
            lineHeight: 1.6,
          }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [tick, setTick] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => !t), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #000; color: #fff; font-family: 'JetBrains Mono','Fira Mono','Courier New',monospace; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #1a1a1a; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#000",
        borderBottom: `1px solid ${BORDER}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 2.5rem", height: "56px",
      }}>
        <a href="#top" style={{ color: RED, fontSize: "14px", fontWeight: 700, letterSpacing: "0.1em", textDecoration: "none", fontFamily: "inherit" }}>
          {data.name.split(" ")[0].toLowerCase()}.dev
        </a>
        <div style={{ display: "flex", gap: "2.2rem" }}>
          {["about", "skills", "experience", "projects", "contact"].map((s) => (
            <NavLink key={s} href={`#${s}`}>{s}</NavLink>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* HERO */}
        <section id="top" style={{ padding: "6rem 0 4.5rem", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: "13px", color: "#444", letterSpacing: "0.06em", marginBottom: "1.2rem" }}>$ whoami</div>
          <h1 style={{
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "0.5rem",
          }}>
            {data.name}
            <span style={{
              display: "inline-block",
              width: "3px", height: "0.82em",
              background: RED,
              marginLeft: "6px",
              verticalAlign: "text-bottom",
              opacity: tick ? 1 : 0,
            }} />
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", color: RED, marginBottom: "1.4rem", letterSpacing: "0.02em" }}>
            {data.title}
          </p>
          <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.9, maxWidth: "540px", marginBottom: "2rem" }}>
            {data.tagline}
          </p>
          <div style={{ display: "flex", gap: "1.6rem", flexWrap: "wrap" }}>
            {[data.location, "Open to work"].map((b) => (
              <span key={b} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "13px", color: "#555", letterSpacing: "0.04em" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: RED, flexShrink: 0 }} />
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: "4rem 0", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: "11px", color: RED, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            about <span style={{ flex: 1, height: "1px", background: BORDER }} />
          </div>
          <p style={{ fontSize: "15px", color: "#aaa", lineHeight: 2, maxWidth: "640px" }}>{data.about}</p>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ padding: "4rem 0", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: "11px", color: RED, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            skills <span style={{ flex: 1, height: "1px", background: BORDER }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: BORDER }}>
            {Object.entries(data.skills).map(([group, items]) => (
              <SkillGroup key={group} group={group} items={items} />
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ padding: "4rem 0", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: "11px", color: RED, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            experience <span style={{ flex: 1, height: "1px", background: BORDER }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {data.experience.map((exp, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "170px 1fr", gap: "0 2.5rem" }}>
                <div style={{ paddingTop: "2px" }}>
                  <div style={{ fontSize: "13px", color: "#444", letterSpacing: "0.03em", marginBottom: "5px" }}>{exp.period}</div>
                  <div style={{ fontSize: "13px", color: RED, letterSpacing: "0.03em" }}>{exp.company}</div>
                </div>
                <div>
                  <div style={{ fontSize: "16px", color: "#ffffff", fontWeight: 700, marginBottom: "0.9rem", letterSpacing: "-0.01em" }}>{exp.role}</div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ fontSize: "14px", color: "#888", lineHeight: 1.8, paddingLeft: "1.1rem", position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: RED, fontSize: "12px", top: "5px" }}>›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "4rem 0", borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: "11px", color: RED, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            projects <span style={{ flex: 1, height: "1px", background: BORDER }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: BORDER }}>
            {data.projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ padding: "4rem 0 5rem" }}>
          <div style={{ fontSize: "18px", color: RED, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            contact <span style={{ flex: 1, height: "1px", background: BORDER }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            <ContactLink label="email" value={data.email} href={`mailto:${data.email}`} />
            <ContactLink label="github" value={data.github} href={`https://${data.github}`} />
            <ContactLink label="linkedin" value={data.linkedin} href={`https://${data.linkedin}`} />
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer style={{
        borderTop: `1px solid ${BORDER}`,
        padding: "1.6rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "860px",
        margin: "0 auto",
      }}>
        <span style={{ fontSize: "18px", color: "#222", letterSpacing: "0.08em" }}>
          {data.name.toLowerCase().replace(" ", "_")}.portfolio
        </span>
        <span style={{ fontSize: "18px", color: "#222", letterSpacing: "0.08em" }}>
          {new Date().getFullYear()}
        </span>
      </footer>
    </>
  );
}