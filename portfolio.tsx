import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Database,
  Globe,
  Zap,
  ChevronDown,
  Send,
  Menu,
  X,
  Instagram,
  
} from "lucide-react";
import { FaTelegram } from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    category: "Frontend",
    icon: Globe,
    items: ["React", "JavaScript", "Tailwind CSS", ],
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Django", "Python",  "PostgreSQL", "REST API"],
  },
  {
    category: "DevOps",
    icon: Cpu,
    items: ["Docker", "Kubernetes",  "CI/CD"],
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git", "Linux", "VS Code", "Artificial Intelligence",],
  },
];

const PROJECTS = [
  {
    title: "Password Manager",
    description:
      "A secure password management application designed to store, organize, and protect sensitive credentials.",
    tags: ["Python", "Django",],
    link: "#",
    github: "https://github.com/Krypton-sat",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Personal Security Lab",
    description:
      "An interactive cybersecurity lab for exploring web vulnerabilities, understanding attack techniques, and learning secure coding through hands-on practice.",
    tags: ["Python", "Django", "VITE", "React", "JavaScript", "Tailwindcss"],
    link: "#",
    github: "https://github.com/Krypton-sat",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "CS50 Web – Network",
    description:
      "A Twitter-like social networking platform built with Django, featuring posts, likes, user profiles, follow relationships, and paginated feeds.",
    tags: ["Python", "Django", "JavaScript", "Bootstrap"],
    link: "#",
    github: "https://github.com/Krypton-sat",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "CS50 Projects Repository",
    description:
      "A collection of 50+ programming exercises and projects completed throughout Harvard's CS50 courses, covering Python, SQL, web development, algorithms, and software engineering fundamentals.",
    tags: ["Python", "JavaScript"],
    link: "#",
    github: "https://github.com/Krypton-sat",
    gradient: "from-amber-500 to-orange-600",
  },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/Krypton-sat", label: "GitHub" },
  { icon: Linkedin, href: "", label: "LinkedIn" },
  { icon: FaTelegram, href: "https://t.me/KryptonSat", label: "Twitter" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=ashenakiyan@gmail.com", label: "Email" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function CursorBlink() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setShow((s) => !s), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className={`inline-block w-[3px] h-[1.1em] align-middle ml-[2px] ${
        show ? "opacity-100" : "opacity-0"
      } bg-emerald-400 rounded-sm`}
    />
  );
}

function TerminalLine({
  text,
  delay = 0,
  delayUnit = 30,
  ref,
  setActiveLine,
}: {
  text: string;
  delay?: number;
  delayUnit?: number;
  ref?: React.RefObject<HTMLDivElement>;
  setActiveLine: (i: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!visible || charIndex >= text.length) return;
    const timeout = setTimeout(
      () => setCharIndex((c) => c + 1),
      delayUnit * 8
    );
    return () => clearTimeout(timeout);
  }, [visible, charIndex, delayUnit, text.length]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setActiveLine(text)}
      className="font-mono text-sm leading-loose transition-colors duration-150"
      style={{ color: visible ? "#a3e635" : "#1a1a2e" }}
    >
      {visible && (
        <>
          <span className="text-slate-500 select-none mr-3">$</span>
          {text.slice(0, charIndex)}
          {charIndex < text.length && <CursorBlink />}
        </>
      )}
    </div>
  );
}

function TypingTerminal() {
  const lines = [
    "whoami",
    "├── name: Kiyan Ashena",
    "├── role: Software Developer",
    "├── focus: Full-stack systems,  Cybersecurity",
    "└── status: building cool things",
    "cat skills.txt",
    "├── JavaScript · vite · React",
    "├── Python · Django · REST API ",
    "└── Docker · Kubernetes · AWS",
    "echo $MOTTO",
    "└── &quot;code is poetry that compiles&quot;",
  
  ];
  const [activeLine, setActiveLine] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="rounded-xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-emerald-900/20"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-slate-500 font-mono">
          Krypton-sat@dev ~ /about
        </span>
      </div>
      {/* Terminal body */}
      <div
        className="p-5 bg-slate-950/70 backdrop-blur-sm min-h-[320px] max-h-[320px] overflow-y-auto"
        onMouseLeave={() => setActiveLine("")}
      >
        {activeLine && (
          <div className="mb-3 text-xs text-emerald-400/60 font-mono">
            <span className="text-slate-500">→ hover:</span> {activeLine}
          </div>
        )}
        {lines.map((line, i) => (
          <TerminalLine
            key={i}
            text={line}
            delay={i * 120}
            delayUnit={25}
            setActiveLine={setActiveLine}
          />
        ))}
        <div className="mt-2">
          <span className="font-mono text-sm text-slate-500">$</span>
          <CursorBlink />
        </div>
      </div>
    </div>
  );
}

function SkillCard({
  category,
  icon: Icon,
  items,
  index,
}: {
  category: string;
  icon: React.ElementType;
  items: string[];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-xl border p-5 transition-all duration-300 cursor-default ${
        hovered
          ? "border-emerald-500/50 bg-slate-800/60 shadow-lg shadow-emerald-900/20"
          : "border-slate-700/50 bg-slate-800/30"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`p-2 rounded-lg transition-colors duration-300 ${
            hovered
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-slate-700/50 text-slate-400"
          }`}
        >
          <Icon size={18} />
        </div>
        <h3 className="font-semibold text-slate-200">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
              hovered
                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                : "bg-slate-700/40 text-slate-400 border border-slate-600/30"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-xl border overflow-hidden transition-all duration-400 ${
        hovered
          ? "border-slate-500/60 bg-slate-800/50 shadow-xl"
          : "border-slate-700/40 bg-slate-800/20"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient accent line */}
      <div
        className={`h-[3px] bg-gradient-to-r ${project.gradient} transition-all duration-400 ${
          hovered ? "opacity-100" : "opacity-60"
        }`}
      />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 rounded-lg bg-slate-700/40">
            <Code2 size={22} className="text-emerald-400" />
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              className="p-2 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-slate-700/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={project.link}
              className="p-2 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-slate-700/50 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-700/50 text-slate-400 border border-slate-600/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-emerald-400 font-mono">
        {value}
      </div>
      <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/50 backdrop-blur-xl border-b border-slate-700/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-lg hover:text-emerald-300 transition-colors"
        >
          <Terminal size={18} />
          <span>./Krypton-sat</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-emerald-400 transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-emerald-500/15 text-emerald-400 text-sm font-mono border border-emerald-500/30 hover:bg-emerald-500/25 transition-all"
          >
            Let&#39;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-emerald-400"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/70 backdrop-blur-xl border-b border-slate-700/50 px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-slate-400 hover:text-emerald-400 transition-colors font-mono text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" id="top">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: text */}
        <div>
          <div className="font-mono text-emerald-400 text-sm mb-4 tracking-widest uppercase">
            &lt;hello world /&gt;
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-[1.1] mb-6">
            Building the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              future
            </span>
            ,
            <br />
            one commit at a time.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
            I&#39;m a software developer & Cybersecurity Student, Building web applications with Python, 
            and Django, JavaScript, and React. Currently focused on Web Security and learning
            through PortSwigger Web Security Academy. Curious by nature, always learning,
            building, and breaking things to understand how they work.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
            >
              <Zap size={16} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-semibold text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
            >
              <Send size={16} />
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12 pt-8 border-t border-slate-800">
            <StatBadge value="20+" label="Projects" />
            {/* <StatBadge value="1k+" label="Commits" /> */}
            <StatBadge value="2+" label="Years" />
          </div>
        </div>

        {/* Right: terminal */}
        <div className="" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, transition: "transform 0.2s ease-out" }}>
          <TypingTerminal />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs font-mono uppercase tracking-widest">
          scroll
        </span>
        <ChevronDown
          size={18}
          className="animate-bounce text-emerald-500/60"
        />
      </div>
    </section>
  );
}

function AboutSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Terminal view */}
          <div className="hidden lg:block" style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, transition: "transform 0.2s ease-out" }}>
          <TypingTerminal />
        </div>
      


          {/* Text content */}
          <div>
            <div className="font-mono text-emerald-400 text-sm mb-3">
              &lt;about /&gt;
            </div>
            <h2 className="text-4xl font-bold text-slate-100 mb-6">
              Who is behind the keyboard?
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&#39;m a passionate software developer with over 2 years of
                experience, build web applications, break them ethically, and make them more secure.
                My journey began with Python through Harvard's CS50, followed by CS50's Web Programming with Python and JavaScript.
                I enjoy working at the intersection of software engineering and cybersecurity, 
                building applications that are both functional and secure.
              </p>
              <p>
                I thrive at the intersection of engineering and design,
                crafting interfaces that are as performant as they are
                beautiful. When I&#39;m not coding, you&#39;ll find me exploring
                PortSwigger's Web Security Academy, contributing to open source, or gaming late
                into the night.
              </p>
              <p>
                I believe the best software is built by people who genuinely
                enjoy the craft. That&#39;s the energy I bring to every
                project.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem Solver", "Critical Thinker", "Fast Learner", "Curious Mind", "Security-Minded Developer"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-mono bg-slate-800/60 text-slate-400 border border-slate-700/50"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="py-24 relative" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-emerald-400 text-sm mb-3">
            &lt;skills /&gt;
          </div>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            My Tech Arsenal
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Tools and technologies I use to bring ideas to life. Always
            learning, always building.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-mono text-emerald-400 text-sm mb-3">
            &lt;projects /&gt;
          </div>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Featured Work
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of projects I&#39;ve built. Each one taught me
            something new and pushed me to grow as a developer.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="font-mono text-emerald-400 text-sm mb-3">
            &lt;contact /&gt;
          </div>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Let&#39;s Work Together
          </h2>
          <p className="text-slate-400">
            Got a project in mind? Want to collaborate? I&#39;d love to hear
            from you.
          </p>
        </div>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-600 font-mono text-sm">
          <Terminal size={14} />
          <span>./Krypton-sat — built with code &amp; caffeine</span>
        </div>
        <div className="text-slate-600 font-mono text-xs">
          © {new Date().getFullYear()} Krypton-sat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── Reactive background ─────────────────────────────────────────────────────

function ReactiveBackground() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
const [isTouch, setIsTouch] = useState(false);
const [viewport, setViewport] = useState({
  width: 0,
  height: 0,
});
useEffect(() => {
  if (typeof window === "undefined") return;

  const updateViewport = () => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  setIsTouch(isTouchDevice);
  updateViewport();

  window.addEventListener("resize", updateViewport);

  if (isTouchDevice) {
    return () => window.removeEventListener("resize", updateViewport);
  }

  const onMove = (e: MouseEvent) => {
    setMouse({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  };

  window.addEventListener("mousemove", onMove, { passive: true });

  return () => {
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("resize", updateViewport);
  };
}, []);

const ox = (mouse.x - 0.5) * 240;
const oy = (mouse.y - 0.5) * 240;
const getOrbTransform = (factorX: number, factorY: number) => ({
  transform: `translate(${ox * factorX}px, ${oy * factorY}px)`,
  transition: "transform 0.08s ease-out",
});
const mouseX = mouse.x * viewport.width;
const mouseY = mouse.y * viewport.height;
const getEscapeTransform = (
  mouseX: number,
  mouseY: number,
  orbX: number,
  orbY: number
) => {
  const dx = orbX - mouseX;
  const dy = orbY - mouseY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const radius = 750;
  const maxPush = 580;

  if (distance >= radius || distance === 0) {
    return {
      transform: "translate(0px, 0px)",
      transition: "transform 1.9s ease-out",
    };
  }

  const force = (1 - distance / radius) * maxPush;

  return {
    transform: `translate(${(dx / distance) * force}px, ${(dy / distance) * force}px)`,
    transition: "transform 1.9s ease-out",
  };
};
  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, #0a1230 0%, #05070f 55%, #02040a 100%)",
      }}
    >
      {/* Moving grid */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,160,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(120,160,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(80% 60% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(80% 60% at 50% 40%, black 30%, transparent 80%)",
          transform: `translate(${ox * 0.4}px, ${oy * 0.4}px)`,
          transition: "transform 0.25s ease-out",
        }}
      />

      {/* Drifting colour orbs */}
      <div className="orb-drift absolute -left-24 top-1/4 w-[460px] h-[460px]">
  <div
    className="absolute inset-0 rounded-full bg-indigo-500/45 blur-[100px]"
    style={getEscapeTransform(
      mouseX,
      mouseY,
      134,
      viewport.height * 0.25 + 230
    )}
  />
</div>
      <div className="orb-drift-2 absolute -right-20 top-[60%] w-[420px] h-[420px]">
  <div
    className="absolute inset-0 rounded-full bg-fuchsia-500/40 blur-[100px]"
    style={getEscapeTransform(
      mouseX,
      mouseY,
      viewport.width - 130,
      viewport.height * 0.6 + 210
    )}
  />
</div>
      <div className="orb-drift-3 absolute left-1/2 top-0 w-[520px] h-[520px]">
  <div
    className="absolute inset-0 rounded-full bg-cyan-400/35 blur-[100px]"
    style={getEscapeTransform(
      mouseX,
      mouseY,
      viewport.width / 2 + 260,
      260
    )}
  />
</div>

      {/* Cursor spotlight */}
      {!isTouch && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${mouse.x * 100}%`,
            top: `${mouse.y * 100}%`,
            width: "72vmin",
            height: "72vmin",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(99,102,241,0.05) 35%, transparent 60%)",
            transition: "left 0.18s ease-out, top 0.18s ease-out",
          }}
        />
      )}

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 35%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent text-slate-200 selection:bg-indigo-500/40 selection:text-indigo-100 relative">
      <ReactiveBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
