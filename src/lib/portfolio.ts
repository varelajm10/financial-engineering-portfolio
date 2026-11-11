export const projects = [
  {
    id: "01",
    title: "Multi-Format Cash Reconciliation & Ingestion Engine",
    category: "FINANCIAL DATA ENGINEERING",
    summary: "From fragmented bank statements to a single, audit-ready source of truth.",
    problem:
      "Manual reconciliation across PDFs, CSVs, and spreadsheets creates bottlenecks and costly discrepancies.",
    solution:
      "A two-pass matching engine combines exact reconciliation with configurable tax and fee tolerance, then generates a complete PDF audit trail.",
    tags: ["Python", "FastAPI", "Pandas", "PyMuPDF", "ReportLab", "Pydantic"],
    nodes: ["PDF / CSV / XLS", "MATCH ENGINE", "AUDIT REPORT"],
    outcome: "Deterministic matching. Traceable results.",
    stages: [
      "Parse multi-format statements",
      "Normalize transactions with Pydantic",
      "Run exact matching, then fee-tolerant matching",
      "Generate reconciliation audit PDF",
    ],
    output: [
      "Input: 4 sample bank transactions",
      "Exact matches: 2",
      "Fee-tolerant matches: 1",
      "Unmatched: 1 → manual review",
      "Audit trail: ready",
    ],
  },
  {
    id: "02",
    title: "Autonomous Credit Risk & Early Warning Agent",
    category: "APPLIED AI & RISK ANALYTICS",
    summary: "Financial signals become actionable risk intelligence. Before it’s too late.",
    problem:
      "Scattered debtor data and delayed balance-sheet reviews make emerging credit risks difficult to spot.",
    solution:
      "A tool-calling agent brings financial ratios, public debtor records, and balance-sheet signals together into explainable credit scorecards.",
    tags: ["GenAI", "MCP / Tool-Calling", "Groq", "Streamlit", "Risk Analytics"],
    nodes: ["DATA SOURCES", "RISK AGENT", "SCORECARD"],
    outcome: "Earlier signals. Better credit decisions.",
    stages: [
      "Load sample financial ratios",
      "Retrieve simulated debtor records",
      "Evaluate liquidity and deterioration signals",
      "Synthesize an explainable risk scorecard",
    ],
    output: [
      "Sample company: ACME Industries",
      "Current ratio: 1.42",
      "Debt / equity: 1.80",
      "Early warning: declining liquidity",
      "Assessment: review recommended",
    ],
  },
  {
    id: "03",
    title: "Headless AR Aging & Collections Dispatcher",
    category: "BACKEND & WORKFLOW AUTOMATION",
    summary: "Collections that run on schedule. Not on another spreadsheet reminder.",
    problem:
      "Repeated aging calculations and manual follow-ups slow collections and obscure overdue receivables.",
    solution:
      "A scheduled headless worker buckets receivables, triggers multichannel escalations, and conditionally exports actionable Excel reports.",
    tags: ["Python", "APScheduler", "OpenPyXL", "Webhooks", "CLI / Headless"],
    nodes: ["RECEIVABLES", "AGING WORKER", "DISPATCH"],
    outcome: "Less follow-up. More cash-flow visibility.",
    stages: [
      "Read sample outstanding receivables",
      "Calculate 0–30, 31–60, and 60+ day buckets",
      "Prepare email and webhook escalations",
      "Create conditional Excel export",
    ],
    output: [
      "Sample receivables: 6",
      "0–30 days: 3 invoices",
      "31–60 days: 2 invoices",
      "60+ days: 1 invoice",
      "Escalations: 3 prepared (not sent)",
    ],
  },
] as const;
export type Project = (typeof projects)[number];
