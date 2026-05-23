import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Radio,
  Send,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import heroImage from "./assets/hero-cyber-city.webp";
import projectsImage from "./assets/projects-techscape.webp";
import contactImage from "./assets/contact-signal.webp";
import { profile } from "./data/profile";

const sectionMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function MotionSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={sectionMotion}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

function ExternalIcon({ label }: { label: string }) {
  const lower = label.toLowerCase();

  if (lower.includes("github")) {
    return <Github aria-hidden="true" size={18} />;
  }

  if (lower.includes("linkedin")) {
    return <Linkedin aria-hidden="true" size={18} />;
  }

  return <ArrowUpRight aria-hidden="true" size={18} />;
}

function App() {
  return (
    <main>
      <header className="hero">
        <img
          className="hero__image"
          src={heroImage}
          alt="A refined cyber city skyline with glowing transit lines and data streams."
        />
        <div className="hero__shade" />
        <nav className="nav" aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero__content">
          <motion.div
            className="hero__copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="eyebrow">
              <Radio aria-hidden="true" size={16} />
              {profile.availability}
            </p>
            <h1>{profile.name}</h1>
            <p className="hero__role">{profile.role}</p>
            <p className="hero__tagline">{profile.tagline}</p>
            <div className="hero__actions" aria-label="Primary actions">
              <a className="button button--primary" href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" size={18} />
                Contact
              </a>
              <a className="button button--secondary" href="#projects">
                <Layers3 aria-hidden="true" size={18} />
                View work
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <MotionSection className="snapshot" aria-label="Profile snapshot">
        <div className="section__header">
          <p className="eyebrow">
            <Sparkles aria-hidden="true" size={16} />
            Snapshot
          </p>
          <h2>A builder for the space between product intuition and production code.</h2>
        </div>
        <div className="snapshot__grid">
          <article className="stat stat--wide">
            <MapPin aria-hidden="true" size={22} />
            <span>Base</span>
            <strong>{profile.location}</strong>
          </article>
          <article className="stat stat--wide">
            <Send aria-hidden="true" size={22} />
            <span>Status</span>
            <strong>{profile.status}</strong>
          </article>
          {profile.snapshot.map((item) => (
            <article className="stat" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="experience" className="experience">
        <div className="section__header section__header--split">
          <div>
            <p className="eyebrow">
              <BriefcaseBusiness aria-hidden="true" size={16} />
              Experience
            </p>
            <h2>Recent roles and operating range.</h2>
          </div>
          <p>
            Placeholder history is structured so each item can be replaced with real
            career data without changing the layout.
          </p>
        </div>
        <div className="timeline">
          {profile.experience.map((item) => (
            <article className="timeline__item" key={`${item.period}-${item.title}`}>
              <div className="timeline__meta">{item.period}</div>
              <div className="timeline__body">
                <h3>{item.title}</h3>
                <p className="timeline__company">{item.company}</p>
                <p>{item.summary}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="projects" className="projects">
        <div className="section__header section__header--split">
          <div>
            <p className="eyebrow">
              <TerminalSquare aria-hidden="true" size={16} />
              Selected projects
            </p>
            <h2>Systems that turn fuzzy intent into usable workflows.</h2>
          </div>
          <p>
            The visual direction stays expressive, while each project block keeps the
            details compact and easy to scan.
          </p>
        </div>
        <div className="projects__layout">
          <img
            className="projects__image"
            src={projectsImage}
            alt="A futuristic engineering command space with data layers and city network paths."
            loading="lazy"
          />
          <div className="projects__list">
            {profile.projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project__topline">
                  <span>{project.role}</span>
                  <a
                    href={project.href}
                    aria-label={`Open ${project.title}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <strong>{project.impact}</strong>
                <div className="chips" aria-label={`${project.title} stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="skills" className="skills">
        <div className="section__header">
          <p className="eyebrow">
            <Layers3 aria-hidden="true" size={16} />
            Skills
          </p>
          <h2>Practical depth across discovery, interface, and delivery.</h2>
        </div>
        <div className="skills__grid">
          {profile.skills.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection id="contact" className="contact">
        <img
          className="contact__image"
          src={contactImage}
          alt="A futuristic city edge with luminous communication beams and signal arcs."
          loading="lazy"
        />
        <div className="contact__content">
          <p className="eyebrow">
            <Mail aria-hidden="true" size={16} />
            Contact
          </p>
          <h2>{profile.contact.headline}</h2>
          <p>{profile.contact.body}</p>
          <div className="contact__links">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={18} />
              {profile.email}
            </a>
            {profile.links.map((link) => (
              <a
                className="button button--ghost"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalIcon label={link.label} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </MotionSection>
    </main>
  );
}

export default App;
