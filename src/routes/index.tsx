import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  CalendarDays,
  Check,
  CheckCheck,
  ChevronRight,
  Code2,
  Copy,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  ShieldCheck,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectCard } from "@/components/portfolio/system-showcase";
import { projects } from "@/lib/portfolio";
import systemsImage from "@/assets/financial-systems.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Juan Manuel Varela | Financial Data & Automation Engineer" },
      {
        name: "description",
        content:
          "Senior financial data and automation engineer. Explore financial reconciliation engines, credit-risk AI agents, and automated collections systems.",
      },
      {
        property: "og:title",
        content: "Juan Manuel Varela | Financial Data & Automation Engineer",
      },
      {
        property: "og:description",
        content:
          "Reliable backend pipelines, financial reconciliation, and applied AI for real operational bottlenecks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const competencies = [
  {
    icon: Database,
    number: "01",
    title: "Backend & Data Pipelines",
    description:
      "Resilient infrastructure that turns complex, fragmented data into reliable, structured systems.",
    tags: ["Python", "FastAPI", "Pandas", "PostgreSQL", "SQLite", "PyMuPDF"],
    detail: "Asynchronous batch processing",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Financial Domain Expertise",
    description:
      "A finance-first perspective. Systems built around the numbers, controls, and decisions that matter.",
    tags: ["AR Aging", "Credit Risk", "Reconciliation", "Cash-flow Auditing", "ERP"],
    detail: "Finance meets engineering",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Applied AI & Automation",
    description:
      "Purpose-built agents and workflows that do the heavy lifting. Not just another chat interface.",
    tags: ["MCP / OpenAI / Groq", "RAG", "Document Parsing", "Telegram / Slack"],
    detail: "Tool-calling agents & notification bots",
  },
];
const contactOptions = [
  { icon: Mail, label: "Email", detail: "Direct conversation" },
  { icon: Github, label: "GitHub", detail: "Explore the source code" },
  { icon: Linkedin, label: "LinkedIn", detail: "Connect professionally" },
  { icon: CalendarDays, label: "Book a call", detail: "Let’s discuss your project" },
];
function jump(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
}

function Index() {
  const [menu, setMenu] = useState(false);
  const [contact, setContact] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\nProject scope:\n${data.get("scope")}`,
    );
    setCopied(false);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <div>
      <header className="site-header">
        <div className="page-width flex h-full items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Juan Manuel Varela home">
            <span className="brand-mark">
              jv<span className="sr-only">mark</span>
            </span>
            <span className="text-sm font-semibold">
              Juan Manuel Varela
              <span className="mt-1 block font-mono text-[9px] font-normal text-muted-foreground">
                FINANCE × CODE
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
            {(
              [
                ["Expertise", "expertise"],
                ["Selected work", "work"],
                ["Contact", "contact"],
              ] as const
            ).map(([label, id]) => (
              <Button key={id} variant="navigation" size="sm" onClick={() => jump(id)}>
                {label}
              </Button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => jump("contact")}
            >
              Let’s talk
              <ArrowUpRight />
            </Button>
            <Button
              className="md:hidden"
              variant="navigation"
              size="icon"
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menu && (
          <nav
            aria-label="Mobile navigation"
            className="absolute inset-x-0 top-[70px] z-20 border-b border-border bg-background p-4 md:hidden"
          >
            {(
              [
                ["Expertise", "expertise"],
                ["Selected work", "work"],
                ["Contact", "contact"],
              ] as const
            ).map(([label, id]) => (
              <Button
                className="w-full justify-start"
                key={id}
                variant="navigation"
                onClick={() => {
                  jump(id);
                  setMenu(false);
                }}
              >
                {label}
              </Button>
            ))}
          </nav>
        )}
      </header>
      <main id="top">
        <section className="hero">
          <img
            className="hero-image"
            src={systemsImage}
            alt="Connected modular financial data-processing infrastructure"
            width={1536}
            height={1024}
          />
          <div className="page-width hero-content entry">
            <div className="status-pill">
              <span className="status-dot" />
              Available for Consulting & Contract Roles
            </div>
            <h1 className="hero-title">
              Senior Financial Data
              <br />& <span className="text-primary">Automation</span>
              <br />
              Engineer<span className="text-primary">.</span>
            </h1>
            <p className="hero-subtitle">
              Designing autonomous backend pipelines, financial reconciliation engines, and custom
              AI agents that replace hundreds of manual operational hours.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                size="lg"
                variant="portfolio"
                className="h-11 px-5 text-xs"
                onClick={() => jump("work")}
              >
                View Case Studies / Repos
                <ArrowUpRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-5 text-xs"
                onClick={() => jump("contact")}
              >
                Get in Touch
                <ArrowRight />
              </Button>
            </div>
            <div className="mt-7 flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
              <Terminal size={13} className="text-primary" />
              Python <span className="text-border">/</span> FastAPI{" "}
              <span className="text-border">/</span> SQL <span className="text-border">/</span>{" "}
              GenAI
            </div>
          </div>
        </section>
        <div className="page-width">
          <section className="metrics" aria-label="Proven impact">
            <div className="metric">
              <div className="metric-value">
                10<span>+ Years</span>
              </div>
              <p className="metric-label">Corporate finance & credit analysis</p>
            </div>
            <div className="metric">
              <div className="metric-value">
                100<span>+ Hours/Mo</span>
              </div>
              <p className="metric-label">Saved per implementation</p>
            </div>
            <div className="metric">
              <div className="metric-value">
                100<span>%</span>
              </div>
              <p className="metric-label">Deterministic reconciliation & integrity</p>
            </div>
            <div className="metric">
              <div className="metric-value flex items-center gap-2">
                <CheckCheck size={23} className="text-primary" />
                Production-ready
              </div>
              <p className="metric-label">Scalable backends. Clean, modular code.</p>
            </div>
          </section>
          <section id="expertise" className="section">
            <div className="section-kicker">The technical core</div>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <h2 className="section-title">
                Built at the intersection.
                <br className="sm:hidden" /> Finance, data & AI.
              </h2>
              <p className="max-w-[315px] text-xs leading-6 text-muted-foreground">
                Deep domain knowledge. Practical engineering.
                <br />
                One integrated approach to operational problems.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {competencies.map(({ icon: Icon, ...item }) => (
                <article className="expertise-card" key={item.number}>
                  <div className="flex items-center justify-between">
                    <div className="icon-box">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      /{item.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-medium">{item.title}</h3>
                  <p className="mt-3 min-h-[68px] text-xs leading-[1.8] text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-5 flex min-h-[62px] flex-wrap content-start gap-1.5">
                    {item.tags.map((tag) => (
                      <span className="tech-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 flex items-center gap-2 text-[10px] text-code">
                    <ChevronRight size={12} className="text-primary" />
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>
          <section id="work" className="section projects-section">
            <div className="section-kicker">Selected engineering work</div>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="section-title">Real problems. Purpose-built systems.</h2>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  A closer look at the engines, agents, and workflows behind the impact.
                </p>
              </div>
              <span className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                <Braces size={15} />
                03 FEATURED SYSTEMS
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          <section id="contact" className="contact-section">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <div className="section-kicker">Let’s build something useful</div>
                <h2 className="text-4xl font-medium leading-tight">
                  Your next bottleneck.
                  <br />
                  <span className="text-primary">My next challenge.</span>
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                  Have a financial workflow to untangle, a backend to build, or an AI system to
                  bring to life? Let’s talk.
                </p>
                <div className="mt-6 max-w-sm">
                  {contactOptions.map(({ icon: Icon, label, detail }) => (
                    <Button
                      key={label}
                      variant="navigation"
                      className="contact-link h-auto w-full rounded-none px-0 text-left"
                      onClick={() => setContact(label)}
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={16} className="text-primary" />
                        <span className="text-xs text-foreground">
                          {label}
                          <span className="mt-1 block text-[10px] font-normal text-muted-foreground">
                            {detail}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight size={14} />
                    </Button>
                  ))}
                </div>
              </div>
              <form className="contact-form" onSubmit={submit}>
                <h3 className="mb-6 text-lg font-medium">Tell me what you’re working on.</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="form-label" htmlFor="name">
                      Your name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      required
                      autoComplete="name"
                      maxLength={120}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      required
                      autoComplete="email"
                      maxLength={254}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="form-label" htmlFor="scope">
                    Project description / Scope
                  </label>
                  <Textarea
                    id="scope"
                    name="scope"
                    className="min-h-[150px]"
                    placeholder="The challenge, your goals, and what a successful outcome looks like…"
                    required
                    minLength={10}
                    maxLength={5000}
                  />
                </div>
                <Button type="submit" variant="portfolio" className="mt-5 h-10 w-full">
                  Prepare project inquiry
                  <Send size={14} />
                </Button>
                <p className="mt-3 text-[10px] leading-5 text-muted-foreground">
                  Contact details coming soon. Prepare a draft to copy; nothing is sent.
                </p>
                {draft && (
                  <div className="mt-5 rounded-md border border-border p-4" role="status">
                    <p className="flex items-center gap-2 text-xs text-primary">
                      <Check size={14} />
                      Your inquiry draft is ready.
                    </p>
                    <Textarea
                      aria-label="Inquiry draft"
                      readOnly
                      value={draft}
                      className="mt-3 min-h-[160px] text-xs"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-3"
                      onClick={copy}
                      type="button"
                    >
                      {copied ? <Check /> : <Copy />}
                      {copied ? "Copied" : "Copy inquiry"}
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="page-width flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Juan Manuel Varela</p>
          <span className="flex items-center gap-2 font-mono text-[9px]">
            <Code2 size={13} className="text-primary" />
            Built with intent. Engineered for impact.
          </span>
          <Button
            variant="navigation"
            size="sm"
            className="h-6 px-0 text-[10px]"
            onClick={() => jump("top")}
          >
            Back to top
            <ArrowDown className="rotate-180" size={12} />
          </Button>
        </div>
      </footer>
      <Dialog
        open={contact !== null}
        onOpenChange={(open) => {
          if (!open) setContact(null);
        }}
      >
        <DialogContent className="rounded-lg">
          <DialogHeader>
            <DialogTitle>{contact} connection coming soon</DialogTitle>
            <DialogDescription className="pt-3 leading-6">
              A verified {contact === "Book a call" ? "scheduling" : contact?.toLowerCase()}{" "}
              destination has not been added yet. You can prepare a project inquiry in the contact
              form.
            </DialogDescription>
          </DialogHeader>
          <Button
            variant="portfolio"
            onClick={() => {
              setContact(null);
              setTimeout(() => jump("contact"), 100);
            }}
          >
            Prepare an inquiry
            <ArrowRight />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
