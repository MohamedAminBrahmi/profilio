"use client";

import { useState, useEffect } from "react";

// Navigation Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 py-4"
          : "bg-white/80 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold gradient-text-static">
          MAB
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-sky-500 transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-sm font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 p-2 hover:text-sky-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-lg">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-600 hover:text-sky-500 hover:bg-sky-50 transition-all py-3 px-4 rounded-xl font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e910_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e910_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border-2 border-sky-200 shadow-lg shadow-sky-100 mb-10 animate-fade-in-up">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <span className="text-sm font-semibold text-slate-700">Open to new opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tight">
          <span className="text-slate-900 block">Mohamed Amin</span>
          <span className="text-shimmer">Brahmi</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
          <span className="inline-block px-4 py-1 rounded-full bg-sky-100/80 text-sky-700 mr-2">Business Intelligence Analyst</span>
          <span className="text-slate-400">•</span>
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-100/80 text-cyan-700 ml-2">Data Analyst</span>
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-12 leading-relaxed">
          Transforming raw data into strategic insights through Python, Power BI, and advanced analytics. Based in Tunisia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#projects"
            className="group px-10 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold shadow-xl shadow-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/40 hover:scale-105 transition-all inline-flex items-center justify-center gap-3"
          >
            Explore My Work
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://github.com/MohamedAminBrahmi"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-10 py-4 rounded-xl border-2 border-slate-300 bg-white text-slate-700 font-bold hover:bg-slate-50 hover:border-sky-500 hover:text-sky-600 transition-all inline-flex items-center justify-center gap-3 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 text-sm font-bold uppercase tracking-widest mb-4 shadow-sm">About Me</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 text-slate-900">
            Passionate About <span className="text-shimmer">Data</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Floating rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-96 h-96 rounded-3xl bg-gradient-to-br from-white to-sky-50 border-2 border-sky-200 flex items-center justify-center shadow-2xl shadow-sky-200/50 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0ea5e910_1px,transparent_1px)] bg-[size:20px_20px]" />
                <svg viewBox="0 0 200 200" className="w-56 h-56 relative z-10 animate-float">
                  <defs>
                    <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                  {[80, 60, 40].map((r, i) => (
                    <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="url(#aboutGrad)" strokeWidth="2" opacity={0.2 + i * 0.2} strokeDasharray="10 5" />
                  ))}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 100 + 70 * Math.cos(rad);
                    const y = 100 + 70 * Math.sin(rad);
                    return <circle key={i} cx={x} cy={y} r="8" fill="url(#aboutGrad)" className="drop-shadow-lg" />;
                  })}
                  <circle cx="100" cy="100" r="16" fill="url(#aboutGrad)" className="drop-shadow-lg" />
                  {/* Connecting lines */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 100 + 70 * Math.cos(rad);
                    const y = 100 + 70 * Math.sin(rad);
                    return <line key={`line-${i}`} x1="100" y1="100" x2={x} y2={y} stroke="url(#aboutGrad)" strokeWidth="1" opacity="0.3" />;
                  })}
                </svg>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              I&apos;m <span className="text-slate-900 font-semibold">Mohamed Amin Brahmi</span>, a Business Intelligence Analyst and Data Analyst based in Ariana, Tunisia. I specialize in transforming complex datasets into actionable insights that drive business decisions.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              With expertise in Python (Pandas, NumPy, Seaborn), Power BI, and data visualization, I&apos;ve completed numerous projects ranging from healthcare analytics to e-commerce insights.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              I hold a Bachelor&apos;s degree and completed my end-of-study project developing a GDS API Integration (Booking Engine) using Java Spring Boot.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "15+", label: "Projects" },
                { value: "10+", label: "Technologies" },
                { value: "Tunisia", label: "Location" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-sky-400 hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold gradient-text-static">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-2 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* LinkedIn Button */}
            <div className="mt-10">
              <a
                href="https://www.linkedin.com/in/med-amin-brahmi-950252276/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "🔢" },
    { name: "Seaborn", icon: "📊" },
    { name: "Power BI", icon: "📈" },
    { name: "DAX", icon: "📐" },
    { name: "Excel", icon: "📑" },
    { name: "Matplotlib", icon: "📉" },
    { name: "Java", icon: "☕" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "SQL", icon: "🗄️" },
    { name: "Web Scraping", icon: "🕸️" },
    { name: "Jupyter", icon: "📓" },
    { name: "Git/GitHub", icon: "🔀" },
    { name: "VS Code", icon: "💻" },
    { name: "Anaconda", icon: "🐍" },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sky-600 font-medium text-sm uppercase tracking-wider mb-3">Skills & Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Technical <span className="gradient-text-static">Skills</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 mt-4 text-base">
            A comprehensive toolkit for end-to-end data analysis and visualization
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-200">{skill.icon}</span>
                <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: "Mytek E-commerce Analysis",
      description: "End-to-end project scraping Mytek product pages, cleaning datasets, and delivering Power BI reports with KPIs and insights.",
      tags: ["Python", "Web Scraping", "Power BI"],
      category: "Internship",
      link: "https://github.com/MohamedAminBrahmi/Summer_Intern_Mytek_Analysis",
    },
    {
      title: "Healthcare Data Insights 2019-2024",
      description: "Comprehensive analysis of healthcare data spanning 5 years, uncovering trends and patterns to support healthcare decision-making.",
      tags: ["Power BI", "Data Analysis"],
      category: "Power BI",
      link: "https://github.com/MohamedAminBrahmi/Healthcare-data-insight-2019-2024",
    },
    {
      title: "Data Professional Survey Breakdown",
      description: "In-depth analysis of data professional survey responses, visualizing career trends, salary insights, and industry patterns.",
      tags: ["Power BI", "Visualization"],
      category: "Power BI",
      link: "https://github.com/MohamedAminBrahmi/Data-Professional-Survey-Breakdown",
    },
    {
      title: "Netflix Data Analysis",
      description: "Exploratory data analysis of Netflix content library using Python, revealing content trends and distribution patterns.",
      tags: ["Python", "Pandas", "EDA"],
      category: "Python",
      link: "https://github.com/MohamedAminBrahmi/Netflix-DA",
    },
    {
      title: "COVID-19 Infections Analysis",
      description: "Statistical analysis of COVID-19 infection data, tracking spread patterns and providing visual insights.",
      tags: ["Python", "Data Viz"],
      category: "Python",
      link: "https://github.com/MohamedAminBrahmi/Covid-DA-",
    },
    {
      title: "GDS API Integration",
      description: "End of study project: Java Spring Boot application integrating with GDS APIs for flight booking functionality.",
      tags: ["Java", "Spring Boot", "API"],
      category: "Development",
      link: "https://github.com/MohamedAminBrahmi/Exrenal-Api-end-of-study-project",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sky-600 font-medium text-sm uppercase tracking-wider mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Featured <span className="gradient-text-static">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 mt-4 text-base">
            A collection of data analysis and visualization projects showcasing my expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-200"
            >
              {/* Category */}
              <span className="inline-block px-3 py-1 text-xs font-medium text-sky-600 bg-sky-50 rounded-full mb-4">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-1 text-xs text-slate-500 bg-slate-100 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center gap-2 text-sm text-sky-600 font-medium">
                View Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/MohamedAminBrahmi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
          >
            View all repositories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sky-600 font-medium text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Let&apos;s <span className="gradient-text-static">Connect</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 mt-4 text-base">
            Interested in collaborating or have a project in mind? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Contact Information</h3>
              <p className="text-slate-500 text-base leading-relaxed">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <a
                href="mailto:brahmimedamin7@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Email</p>
                  <p className="text-slate-700 font-medium">brahmimedamin7@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/med-amin-brahmi-950252276/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">LinkedIn</p>
                  <p className="text-slate-700 font-medium">med-amin-brahmi</p>
                </div>
              </a>

              <a
                href="https://github.com/MohamedAminBrahmi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">GitHub</p>
                  <p className="text-slate-700 font-medium">MohamedAminBrahmi</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Location</p>
                  <p className="text-slate-700 font-medium">Ariana, Tunisia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Send a Message</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm text-slate-600 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-base"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-base"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-slate-600 mb-2 font-medium">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all min-h-[120px] resize-none text-base"
                  placeholder="Your message..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-medium text-base transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold gradient-text-static">MAB</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600 text-sm font-medium">Data Analyst</span>
          </div>
          
          {/* Copyright */}
          <p className="text-slate-500 text-sm font-medium">
            © 2026 Mohamed Amin Brahmi. All rights reserved.
          </p>
          
          {/* Built with */}
          <p className="text-slate-400 text-sm flex items-center gap-2">
            Built with
            <span className="text-red-500">♥</span>
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
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
