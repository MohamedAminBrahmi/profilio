"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ============================================
// NAVIGATION
// ============================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`navbar-custom fixed-top ${scrolled ? "scrolled" : ""}`} style={{ zIndex: 1030 }}>
      <div className="container" style={{ maxWidth: "72rem" }}>
        <div className={`navbar-inner d-flex align-items-center justify-content-between ${scrolled ? "scrolled" : ""}`}>
          {/* Logo */}
          <a href="#home" className="fw-bold fs-5 text-dark ms-3">MAB</a>

          {/* Desktop Nav */}
          <div className="d-none d-md-flex align-items-center gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className={`nav-link-custom ${activeSection === link.id ? "active" : ""}`}>
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact" className="btn-nav-cta d-none d-md-inline-flex align-items-center gap-2">
            Let&apos;s Talk
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile Toggle */}
          <button className="btn d-md-none p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="d-md-none position-absolute top-100 start-0 end-0 p-3">
          <div className="bg-white rounded-4 shadow-lg p-3">
            {links.map((link) => (
              <a key={link.href} href={link.href}
                className={`d-block nav-link-custom mb-1 ${activeSection === link.id ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================
// HERO
// ============================================
function Hero() {
  return (
    <section id="home" className="hero-section bg-gradient-hero">
      {/* Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 dot-pattern" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container position-relative" style={{ zIndex: 10, maxWidth: "72rem" }}>
        <div className="row align-items-center g-5">
          {/* Left */}
          <div className="col-lg-6 text-center">
            <h1 className="display-4 fw-bold text-dark mb-2" style={{ lineHeight: 1.1 }}>
              Mohamed Amin
              <span className="d-block text-gradient fw-bold">Brahmi</span>
            </h1>
            <p className="fs-5 fw-semibold text-dark mb-3">Business Intelligence Engineer</p>
            <p className="fs-6 text-secondary mb-4 mx-auto" style={{ maxWidth: "28rem" }}>
              Transforming complex data into strategic insights. I help businesses make data-driven decisions through powerful visualizations and analytics.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
              <a href="#projects" className="btn-hero-primary">
                Explore My Universe
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="https://github.com/MohamedAminBrahmi" target="_blank" rel="noopener noreferrer"
                className="btn-hero-secondary">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Universe
              </a>
            </div>

            {/* Stats */}
            <div className="d-flex gap-4 justify-content-center">
              {[{ value: "15+", label: "Projects" }, { value: "10+", label: "Technologies" }, { value: "3+", label: "Years" }].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="fs-5 fw-bold text-dark">{s.value}</div>
                  <div className="small text-secondary">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo */}
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="profile-container">
                <div className="profile-glow" />
                <div className="profile-image-wrapper">
                  <Image src="/pro image.jpg" alt="Mohamed Amin Brahmi" width={400} height={400}
                    className="w-100 h-100" style={{ objectFit: "cover", objectPosition: "center" }} priority />
                </div>
              </div>
              <div className="floating-icon" style={{ top: "-1rem", right: "-1rem", background: "#3b82f6", transform: "rotate(12deg)", animation: "float 3s ease-in-out infinite" }}>📊</div>
              <div className="floating-icon" style={{ bottom: "-1rem", left: "-1rem", background: "#8b5cf6", transform: "rotate(-12deg)", animation: "pulse 2s infinite" }}>💡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ABOUT
// ============================================
function About() {
  return (
    <section id="about" className="py-5 bg-white position-relative overflow-hidden" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
      {/* Decorative Orbs */}
      <div className="orb" style={{ top: 0, right: 0, width: "500px", height: "500px", background: "#bfdbfe", transform: "translate(25%, -50%)" }} />
      <div className="orb" style={{ bottom: 0, left: 0, width: "400px", height: "400px", background: "#ddd6fe", transform: "translate(-25%, 50%)" }} />

      <div className="container position-relative" style={{ zIndex: 10, maxWidth: "72rem" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-badge" style={{ background: "linear-gradient(to right, #fffbeb, #fff7ed)", border: "1px solid #fbbf24" }}>
            <span className="dot" style={{ background: "#f59e0b" }} />
            <span style={{ color: "#92400e", letterSpacing: "0.05em" }}>About Me</span>
          </div>
          <h2 className="display-5 fw-bold text-dark mb-3">
            Passionate About <span className="text-gradient">Data</span>
          </h2>
          <p className="fs-6 text-secondary mx-auto" style={{ maxWidth: "40rem" }}>
            Turning raw numbers into meaningful stories that drive business success
          </p>
        </div>

        <div className="row justify-content-center g-5">
          {/* Content */}
          <div className="col-lg-8">
            <p className="fs-6 text-secondary lh-lg">
              I&apos;m <span className="fw-semibold text-primary">Mohamed Amin Brahmi</span>, a Business Intelligence Engineer based in Ariana, Tunisia. I specialize in transforming complex datasets into actionable insights that drive business decisions.
            </p>
            <p className="fs-6 text-secondary lh-lg">
              With expertise in <span className="fw-semibold text-primary">Python</span>, <span className="fw-semibold text-primary">Power BI</span>, and data visualization, I&apos;ve completed numerous projects ranging from healthcare analytics to e-commerce insights.
            </p>
            <p className="fs-6 text-secondary lh-lg mb-4">
              I hold a Bachelor&apos;s degree and completed my end-of-study project developing a GDS API Integration using Java Spring Boot.
            </p>

            {/* Stats */}
            <div className="row g-3 mb-4">
              {[
                { value: "15+", label: "Projects", icon: "🚀" },
                { value: "10+", label: "Technologies", icon: "⚡" },
                { value: "Tunisia", label: "Based in", icon: "📍" },
              ].map((s, i) => (
                <div key={i} className="col-4">
                  <div className="stat-card">
                    <span style={{ fontSize: "1.25rem" }}>{s.icon}</span>
                    <div className="fw-bold text-gradient mt-1">{s.value}</div>
                    <div className="text-secondary" style={{ fontSize: "0.7rem" }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://www.linkedin.com/in/med-amin-brahmi-950252276/" target="_blank" rel="noopener noreferrer" className="btn-linkedin">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SKILLS
// ============================================
function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "SQL", level: 88 },
    { name: "R", level: 75 },
    { name: "Pandas", level: 92 },
    { name: "NumPy", level: 88 },
    { name: "Seaborn", level: 85 },
    { name: "Matplotlib", level: 82 },
    { name: "Power BI", level: 95 },
    { name: "DAX", level: 88 },
    { name: "Excel", level: 90 },
    { name: "Tableau", level: 78 },
    { name: "Spring Boot", level: 80 },
    { name: "REST API", level: 85 },
    { name: "HTML/CSS", level: 82 },
    { name: "JavaScript", level: 75 },
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "Git/GitHub", level: 88 },
    { name: "Jupyter", level: 92 },
    { name: "Web Scraping", level: 87 },
    { name: "ETL", level: 83 },
    { name: "Data Mining", level: 85 },
    { name: "Statistics", level: 88 },
  ];

  return (
    <section id="skills" className="bg-gradient-section position-relative overflow-hidden" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div className="orb" style={{ top: "5rem", right: "5rem", width: "18rem", height: "18rem", background: "#bfdbfe" }} />
      <div className="orb" style={{ bottom: "5rem", left: "5rem", width: "15rem", height: "15rem", background: "#ddd6fe" }} />

      <div className="container position-relative" style={{ zIndex: 10, maxWidth: "72rem" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-badge" style={{ background: "linear-gradient(to right, #eff6ff, #eef2ff)", border: "1px solid #93c5fd" }}>
            <span className="dot" style={{ background: "#3b82f6" }} />
            <span style={{ color: "#1e40af", letterSpacing: "0.05em" }}>Technical Skills</span>
          </div>
          <h2 className="display-5 fw-bold text-dark mb-3">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="fs-6 text-secondary mx-auto" style={{ maxWidth: "48rem" }}>
            A comprehensive toolkit for end-to-end data analysis, business intelligence, and premium solution development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="row g-3 justify-content-center">
          {skills.map((skill, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3">
              <div className="skill-card" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="skill-card-shimmer" />
                <div className="skill-card-inner">
                  <div className="skill-level-ring">
                    <svg viewBox="0 0 36 36" className="skill-ring-svg">
                      <path className="skill-ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="skill-ring-fill" strokeDasharray={`${skill.level}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="skill-level-text">{skill.level}</span>
                  </div>
                  <div className="skill-info">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-5">
          <div className="cta-banner">
            <div className="row align-items-center g-4 position-relative" style={{ zIndex: 10 }}>
              <div className="col-md-7">
                <h4 className="fw-bold mb-2 fs-4">Ready to Transform Your Data</h4>
                <p className="mb-0" style={{ color: "#bfdbfe" }}>
                  With expertise across the full data pipeline — from collection and processing to visualization and insights
                </p>
              </div>
              <div className="col-md-5 text-md-end">
                <a href="#contact" className="btn-cta-white">
                  Let&apos;s Collaborate
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROJECTS
// ============================================
function Projects() {
  const projects = [
    { title: "Mytek E-commerce Analysis", description: "End-to-end project scraping Mytek product pages, cleaning datasets, and delivering Power BI reports with KPIs and insights.", tags: ["Python", "Web Scraping", "Power BI"], category: "Internship", link: "https://github.com/MohamedAminBrahmi/Summer_Intern_Mytek_Analysis" },
    { title: "Healthcare Data Insights", description: "Comprehensive analysis of healthcare data spanning 5 years, uncovering trends and patterns to support decision-making.", tags: ["Power BI", "Data Analysis"], category: "Analytics", link: "https://github.com/MohamedAminBrahmi/Healthcare-data-insight-2019-2024" },
    { title: "Data Professional Survey", description: "In-depth analysis of survey responses, visualizing career trends, salary insights, and industry patterns.", tags: ["Power BI", "Visualization"], category: "Analytics", link: "https://github.com/MohamedAminBrahmi/Data-Professional-Survey-Breakdown" },
    { title: "Netflix Data Analysis", description: "Exploratory data analysis of Netflix content library using Python, revealing content trends and distribution.", tags: ["Python", "Pandas", "EDA"], category: "Python", link: "https://github.com/MohamedAminBrahmi/Netflix-DA" },
    { title: "COVID-19 Analysis", description: "Statistical analysis of COVID-19 infection data, tracking spread patterns and providing visual insights.", tags: ["Python", "Data Viz"], category: "Python", link: "https://github.com/MohamedAminBrahmi/Covid-DA-" },
    { title: "GDS API Integration", description: "End of study project: Java Spring Boot application integrating with GDS APIs for flight booking.", tags: ["Java", "Spring Boot", "API"], category: "Development", link: "https://github.com/MohamedAminBrahmi/Exrenal-Api-end-of-study-project" },
  ];



  return (
    <section id="projects" className="bg-white position-relative overflow-hidden" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div className="orb" style={{ top: "50%", left: "50%", width: "50rem", height: "50rem", background: "linear-gradient(135deg, #dbeafe, #ede9fe)", transform: "translate(-50%, -50%)" }} />

      <div className="container position-relative" style={{ zIndex: 10, maxWidth: "72rem" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-badge" style={{ background: "linear-gradient(to right, #ecfdf5, #f0fdf4)", border: "1px solid #6ee7b7" }}>
            <span className="dot" style={{ background: "#10b981" }} />
            <span style={{ color: "#065f46", letterSpacing: "0.05em" }}>Portfolio</span>
          </div>
          <h2 className="display-5 fw-bold text-dark mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="fs-6 text-secondary mx-auto" style={{ maxWidth: "40rem" }}>
            A collection of data analysis and visualization projects
          </p>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {projects.map((project, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="project-card-wrapper h-100">
                <div className="project-card-glow" />
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
                  {/* Header */}
                  <div className="mb-3">
                    <span className="project-tag fw-bold" style={{ background: "linear-gradient(to right, #dbeafe, #ede9fe)", color: "#1e40af" }}>
                      {project.category}
                    </span>
                  </div>

                  <h5 className="fw-bold text-dark mb-2" style={{ lineHeight: 1.3 }}>{project.title}</h5>
                  <p className="text-secondary small mb-3 flex-grow-1" style={{ lineHeight: 1.6 }}>{project.description}</p>

                  {/* Tags */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <span className="fw-bold text-primary small d-flex align-items-center gap-1">
                      View Project
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="d-flex gap-1">
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#60a5fa" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#a78bfa" }} />
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#93c5fd" }} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-5">
          <a href="https://github.com/MohamedAminBrahmi?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn-github-all">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================
// CONTACT
// ============================================
function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpqjaapj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-gradient-section position-relative overflow-hidden" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div className="orb" style={{ top: "2rem", right: "2rem", width: "20rem", height: "20rem", background: "#bfdbfe" }} />
      <div className="orb" style={{ bottom: "2rem", left: "2rem", width: "16rem", height: "16rem", background: "#ddd6fe" }} />

      <div className="container position-relative" style={{ zIndex: 10, maxWidth: "72rem" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-badge" style={{ background: "linear-gradient(to right, #ecfeff, #eff6ff)", border: "1px solid #67e8f9" }}>
            <span className="dot" style={{ background: "#06b6d4" }} />
            <span style={{ color: "#155e75", letterSpacing: "0.05em" }}>Contact</span>
          </div>
          <h2 className="display-5 fw-bold text-dark mb-3">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="fs-6 text-secondary mx-auto" style={{ maxWidth: "40rem" }}>
            Have a project in mind? Let&apos;s discuss how I can help you achieve your data goals.
          </p>
        </div>

        <div className="row g-4">
          {/* Info Column */}
          <div className="col-lg-5">
            <div className="contact-cta-card mb-4">
              <h4 className="fw-bold mb-2 position-relative" style={{ zIndex: 10 }}>Let&apos;s work together</h4>
              <p className="mb-0 position-relative" style={{ zIndex: 10, color: "#bfdbfe" }}>
                I&apos;m always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="d-flex flex-column gap-3">
              {[
                { icon: "📧", label: "Email", value: "brahmimedamin7@gmail.com", href: "mailto:brahmimedamin7@gmail.com" },
                { icon: "💼", label: "LinkedIn", value: "med-amin-brahmi", href: "https://www.linkedin.com/in/med-amin-brahmi-950252276/" },
                { icon: "💻", label: "GitHub", value: "MohamedAminBrahmi", href: "https://github.com/MohamedAminBrahmi" },
                { icon: "📍", label: "Location", value: "Ariana, Tunisia", href: null },
              ].map((item, i) => (
                <div key={i} className="contact-info-card">
                  <div className="d-flex align-items-center gap-3">
                    <div className="contact-icon-box">{item.icon}</div>
                    <div>
                      <p className="text-secondary text-uppercase small mb-0 fw-medium" style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="fw-semibold text-dark small">{item.value}</a>
                      ) : (
                        <p className="fw-semibold text-dark small mb-0">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="col-lg-7">
            <div className="bg-white rounded-4 p-4 shadow-lg border">
              <h5 className="fw-bold text-dark mb-4">Send a Message</h5>
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label className="form-label fw-semibold text-dark small">Name</label>
                    <input type="text" className="form-control form-control-custom" placeholder="Your name"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label fw-semibold text-dark small">Email</label>
                    <input type="email" className="form-control form-control-custom" placeholder="your@email.com"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark small">Message</label>
                  <textarea className="form-control form-control-custom" rows={6} placeholder="Tell me about your project..."
                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                </div>
                <button type="submit" disabled={status === "sending"} className="btn-submit d-flex align-items-center justify-content-center gap-2">
                  {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
                  {status !== "sending" && status !== "sent" && (
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                  {status === "sent" && (
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                {status === "sent" && <p className="text-success small mt-2 mb-0 fw-semibold">Thank you! Your message has been sent successfully.</p>}
                {status === "error" && <p className="text-danger small mt-2 mb-0 fw-semibold">Something went wrong. Please try again or email me directly.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "brahmimedamin7@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer-section py-5 text-white">
      <div className="container" style={{ maxWidth: "72rem" }}>
        <div className="row align-items-center g-4">
          <div className="col-md-4">
            <span className="fw-bold fs-4 text-gradient">MAB</span>
          </div>

          <div className="col-md-4 d-flex justify-content-center gap-2">
            {[
              { href: "https://github.com/MohamedAminBrahmi", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
              { href: "https://www.linkedin.com/in/med-amin-brahmi-950252276/", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon">{s.icon}</a>
            ))}
            <button onClick={() => setShowEmailPopup(true)} className="social-icon" style={{ border: "none", cursor: "pointer" }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </button>
          </div>

          <div className="col-md-4 text-md-end text-center">
            <p className="text-secondary small mb-0">© 2026 <span className="text-light">Mohamed Amin Brahmi</span></p>
          </div>
        </div>
      </div>

      {/* Email Popup */}
      {showEmailPopup && (
        <div className="email-popup-overlay" onClick={() => { setShowEmailPopup(false); setCopied(false); }}>
          <div className="email-popup" onClick={(e) => e.stopPropagation()}>
            <button className="email-popup-close" onClick={() => { setShowEmailPopup(false); setCopied(false); }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div className="text-center mb-3">
              <div className="email-popup-icon">📧</div>
              <h5 className="fw-bold text-dark mb-1">Email Address</h5>
              <p className="text-secondary small mb-0">Click below to copy</p>
            </div>
            <div className="email-popup-field">
              <span className="email-popup-text">{email}</span>
              <button className="email-popup-copy" onClick={handleCopy}>
                {copied ? (
                  <svg width="16" height="16" fill="none" stroke="#10b981" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                ) : (
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                )}
              </button>
            </div>
            {copied && <p className="text-success small text-center mt-2 mb-0 fw-semibold">Copied to clipboard!</p>}
          </div>
        </div>
      )}
    </footer>
  );
}

// ============================================
// MAIN
// ============================================
export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href")?.substring(1);
        document.getElementById(id || "")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
