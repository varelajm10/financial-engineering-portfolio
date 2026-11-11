import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  CirclePlay,
  Code2,
  Database,
  FileCheck2,
  FileInput,
  Github,
  LoaderCircle,
  RotateCcw,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/portfolio";

export function SystemDiagram({ project }: { project: Project }) {
  const icons = [FileInput, project.id === "02" ? Code2 : Database, FileCheck2];
  return (
    <div className="system-preview">
      <span className="project-number">SYSTEM_{project.id}</span>
      <div className="flex w-full items-center">
        {project.nodes.map((node, i) => {
          const Icon = icons[i] ?? Database;
          return (
            <div key={node} className="contents">
              {i > 0 && <div className="diagram-line" />}
              <div className={`diagram-node ${i === 1 ? "active" : ""}`}>
                <Icon size={20} strokeWidth={1.5} />
                <span>{node}</span>
              </div>
            </div>
          );
        })}
      </div>
      <span className="project-state">
        <span className="status-dot" /> MODULAR ARCHITECTURE
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [view, setView] = useState<"demo" | "repo" | null>(null);
  const [running, setRunning] = useState(false);
  const [complete, setComplete] = useState(false);
  async function run() {
    setRunning(true);
    setComplete(false);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setComplete(true);
    setRunning(false);
  }
  return (
    <>
      <article className="project-card">
        <SystemDiagram project={project} />
        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-[9px] text-primary">{project.category}</p>
          <h3 className="mt-3 min-h-[76px] text-xl font-medium leading-snug">{project.title}</h3>
          <p className="mt-3 text-[13px] leading-6 text-muted-foreground">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-[11px] text-primary">
            <Check size={13} />
            {project.outcome}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
            <Button variant="navigation" size="sm" className="px-0" onClick={() => setView("repo")}>
              <Github />
              View on GitHub
              <ArrowUpRight size={12} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setComplete(false);
                setView("demo");
              }}
            >
              <CirclePlay />
              Architecture demo
            </Button>
          </div>
        </div>
      </article>
      <Dialog
        open={view !== null}
        onOpenChange={(open) => {
          if (!open) setView(null);
        }}
      >
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-lg">
          <DialogHeader>
            <p className="mb-2 font-mono text-[10px] text-primary">
              SYSTEM_{project.id} / {view === "repo" ? "REPOSITORY PREVIEW" : "ARCHITECTURE DEMO"}
            </p>
            <DialogTitle className="pr-5 text-2xl leading-snug">{project.title}</DialogTitle>
            <DialogDescription>
              {view === "repo"
                ? "Repository link pending — this is a portfolio case-study preview."
                : "Interactive demonstration using sample data. No external services are called."}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2">
            <h4 className="text-sm font-medium">The problem</h4>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.problem}</p>
            <h4 className="mt-5 text-sm font-medium">The solution</h4>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.solution}</p>
          </div>
          <SystemDiagram project={project} />
          {view === "demo" ? (
            <>
              <ol className="space-y-3">
                {project.stages.map((stage, i) => (
                  <li key={stage} className="flex items-center gap-3 text-sm">
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    {stage}
                    {complete && <Check size={14} className="ml-auto text-primary" />}
                  </li>
                ))}
              </ol>
              <Button variant="portfolio" onClick={run} disabled={running}>
                {running ? (
                  <LoaderCircle className="animate-spin" />
                ) : complete ? (
                  <RotateCcw />
                ) : (
                  <CirclePlay />
                )}
                {running
                  ? "Processing sample data…"
                  : complete
                    ? "Run again"
                    : "Run sample pipeline"}
              </Button>
              {complete && (
                <div role="status" className="rounded-md border border-border bg-secondary p-4">
                  <div className="mb-3 flex items-center gap-2 font-mono text-xs text-primary">
                    <Terminal size={14} /> pipeline completed
                  </div>
                  {project.output.map((line) => (
                    <p key={line} className="font-mono text-xs leading-6 text-code">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="rounded-md border border-border bg-secondary p-4 text-sm leading-6 text-muted-foreground">
              The public repository has not been connected yet. Explore the architecture demo for
              this system’s processing stages and sample output.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
