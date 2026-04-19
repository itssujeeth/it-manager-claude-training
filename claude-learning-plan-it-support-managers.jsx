import { useState, useEffect, useCallback } from "react";

const MONTHS = [
  {
    month: 1,
    title: "Claude Foundations for Support Leaders",
    subtitle: "Understanding AI as your operational co-pilot",
    color: "#D4783C",
    weeks: [
      {
        week: 1,
        title: "What Claude Is & How It Thinks",
        reading: [
          { text: "Understand what large language models are: prediction engines trained on text, not databases or search engines", url: "https://docs.anthropic.com/en/docs/overview" },
          { text: "Learn the difference between Claude and tools like Google, ServiceNow, or a knowledge base — Claude generates, it doesn't retrieve", url: null },
          { text: "Study Claude's strengths: drafting, summarizing, analyzing, brainstorming, rewriting, and structured reasoning", url: null },
          { text: "Understand Claude's limitations: no real-time data, no memory between conversations (unless enabled), hallucination risk, knowledge cutoff", url: null },
        ],
        project: "Write a one-page brief for your support team explaining what Claude can and cannot do, with 5 realistic use cases and 5 things it should never be trusted for without verification.",
        skills: ["AI literacy", "Capability scoping", "Risk awareness"],
      },
      {
        week: 2,
        title: "Prompt Engineering Basics for Managers",
        reading: [
          { text: "Learn the anatomy of a good prompt: context, role, task, format, constraints, examples", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
          { text: "Study how specificity drives output quality — vague input produces vague output", url: null },
          { text: "Practice the difference between 'Tell me about incidents' vs 'You are an ITSM consultant. Analyze these 3 incident patterns and recommend process changes in bullet format'", url: null },
          { text: "Understand temperature, tone control, and format directives (tables, markdown, numbered steps)", url: null },
        ],
        project: "Write 10 support-manager prompts covering: ticket triage guidance, status update drafting, runbook creation, coaching feedback, and meeting agenda generation. Rate each on output quality.",
        skills: ["Prompt engineering", "Output formatting", "Context setting"],
      },
      {
        week: 3,
        title: "Using Claude for Daily Support Communications",
        reading: [
          { text: "Practice drafting executive outage updates with Claude by providing situation details and asking for structured status messages", url: null },
          { text: "Learn to use Claude to rewrite customer-facing messages for tone, clarity, and professionalism", url: null },
          { text: "Study how Claude can generate shift handoff notes from a bullet-point brain dump", url: null },
          { text: "Explore generating team announcements, meeting summaries, and stakeholder emails with Claude", url: null },
        ],
        project: "Using Claude, generate a complete communications kit: executive outage update, customer status page message, team shift handoff, and post-incident summary. Compare Claude's drafts against your own and note improvements.",
        skills: ["AI-assisted writing", "Tone calibration", "Communication speed"],
      },
      {
        week: 4,
        title: "Responsible AI Use in IT Operations",
        reading: [
          { text: "Study data sensitivity: never paste PII, credentials, proprietary configs, or customer data into Claude without org approval", url: null },
          { text: "Learn the 'trust but verify' principle — always review Claude's output before sending or publishing", url: null },
          { text: "Understand your organization's AI usage policy and how it applies to support operations", url: null },
          { text: "Review common failure modes: confident-sounding wrong answers, outdated technical guidance, fabricated references", url: null },
        ],
        project: "Draft an AI acceptable-use policy for your support team covering: approved use cases, prohibited data types, review requirements, and escalation for uncertain outputs.",
        skills: ["AI governance", "Data sensitivity", "Policy design"],
      },
    ],
  },
  {
    month: 2,
    title: "Claude for Ticket Operations & Incident Response",
    subtitle: "Accelerating the support workflow with AI",
    color: "#3A7BE8",
    weeks: [
      {
        week: 5,
        title: "Ticket Triage & Categorization with Claude",
        reading: [
          { text: "Learn how to prompt Claude to categorize tickets by type (incident, request, problem, change) from raw descriptions", url: null },
          { text: "Practice feeding Claude sample tickets and asking it to assign priority, category, and suggested assignment group", url: null },
          { text: "Study how to build reusable triage prompt templates that your team can standardize on", url: null },
          { text: "Understand the limits: Claude cannot access your ticketing system directly — it works with text you provide", url: null },
        ],
        project: "Create a Claude-powered triage prompt template. Test it against 15 real or realistic ticket descriptions and score accuracy of category, priority, and routing suggestions.",
        skills: ["AI-assisted triage", "Prompt templates", "Classification accuracy"],
      },
      {
        week: 6,
        title: "Incident Summarization & Post-Incident Reports",
        reading: [
          { text: "Practice feeding Claude raw incident timelines, chat logs, or notes and asking for structured incident summaries", url: null },
          { text: "Learn to prompt Claude for post-incident reviews: timeline, root cause, impact, lessons, actions", url: null },
          { text: "Study how to ask Claude to identify gaps in incident documentation by reviewing what's missing", url: null },
          { text: "Explore using Claude to draft stakeholder-facing incident reports at different detail levels (executive vs technical)", url: null },
        ],
        project: "Take a past major incident (or create a realistic scenario). Feed raw data to Claude and generate: a 2-sentence executive summary, a 1-page incident report, and a detailed post-incident review with action items.",
        skills: ["Incident summarization", "Report generation", "Multi-audience writing"],
      },
      {
        week: 7,
        title: "Knowledge Article & Runbook Generation",
        reading: [
          { text: "Learn to prompt Claude to create step-by-step troubleshooting runbooks from brief problem descriptions", url: null },
          { text: "Practice generating user-facing knowledge articles (password reset, VPN troubleshooting, printer issues) with Claude", url: null },
          { text: "Study how to ask Claude to convert tribal knowledge (verbal instructions) into structured documentation", url: null },
          { text: "Explore using Claude to review and improve existing knowledge articles for clarity, completeness, and tone", url: null },
        ],
        project: "Use Claude to generate 5 support knowledge articles and 2 internal runbooks. Have a team member test-follow each article and document where instructions were unclear or wrong.",
        skills: ["Knowledge creation", "Documentation speed", "Quality validation"],
      },
      {
        week: 8,
        title: "Analyzing Support Data with Claude",
        reading: [
          { text: "Learn how to paste CSV or tabular ticket data into Claude and ask for trend analysis, category breakdowns, and anomalies", url: null },
          { text: "Practice asking Claude to compute metrics from raw data: MTTR, backlog aging, SLA attainment, reopen rates", url: null },
          { text: "Study how Claude can generate data interpretation narratives for leadership reports", url: null },
          { text: "Understand limitations: Claude does math approximately — always verify calculations on critical metrics", url: null },
        ],
        project: "Export a week of ticket data (anonymized). Ask Claude to produce a weekly operations summary including volume trends, top categories, SLA performance, and 3 improvement recommendations. Verify all numbers independently.",
        skills: ["Data analysis prompting", "Metric interpretation", "Output verification"],
      },
    ],
  },
  {
    month: 3,
    title: "Claude for People Management & Coaching",
    subtitle: "Scaling your leadership with AI assistance",
    color: "#2EAD6B",
    weeks: [
      {
        week: 9,
        title: "1:1 Preparation & Coaching Conversations",
        reading: [
          { text: "Learn to use Claude as a preparation tool: 'Help me plan a 1:1 with an analyst who is struggling with ticket quality'", url: null },
          { text: "Practice generating coaching conversation scripts that balance empathy and accountability", url: null },
          { text: "Study how to ask Claude for performance improvement talking points based on specific behaviors, not personality", url: null },
          { text: "Explore using Claude to draft development plans for analysts at different career stages", url: null },
        ],
        project: "Prepare Claude-assisted 1:1 plans for 3 personas: a high performer ready for L2, a struggling analyst with documentation issues, and a solid performer who is disengaged. Include talking points, questions, and follow-up actions.",
        skills: ["AI-assisted coaching", "Conversation planning", "Development framing"],
      },
      {
        week: 10,
        title: "QA Feedback & Ticket Review Assistance",
        reading: [
          { text: "Learn to use Claude to evaluate ticket handling quality by pasting resolution notes and asking for feedback", url: null },
          { text: "Practice generating constructive QA feedback from Claude that can be adapted for analyst coaching", url: null },
          { text: "Study how Claude can help identify patterns in quality issues across multiple tickets", url: null },
          { text: "Understand the limits: Claude assesses text quality, not technical correctness of resolutions without domain context", url: null },
        ],
        project: "Create a Claude-powered QA review workflow. Feed 10 sample ticket resolution notes to Claude with a scoring rubric and compare its assessments against your own manual review.",
        skills: ["AI-assisted QA", "Feedback generation", "Quality pattern recognition"],
      },
      {
        week: 11,
        title: "Training Content & Onboarding Material Creation",
        reading: [
          { text: "Learn to use Claude to generate training guides, quizzes, and scenario-based learning modules for support analysts", url: null },
          { text: "Practice creating onboarding checklists and 30-60-90 day plans with Claude", url: null },
          { text: "Study how Claude can generate role-play scenarios for common support situations", url: null },
          { text: "Explore using Claude to create FAQ documents from collections of past tickets or common questions", url: null },
        ],
        project: "Use Claude to build a complete new-hire onboarding kit: 30-60-90 day plan, 10 role-play scenarios, a quiz on ticket handling procedures, and a 'common mistakes' reference guide.",
        skills: ["Training design", "Content generation", "Onboarding acceleration"],
      },
      {
        week: 12,
        title: "Team Communication & Meeting Productivity",
        reading: [
          { text: "Learn to use Claude to generate team meeting agendas from a list of topics and priorities", url: null },
          { text: "Practice using Claude to convert meeting notes into action items, owners, and deadlines", url: null },
          { text: "Study how Claude can help draft team retrospective summaries and improvement proposals", url: null },
          { text: "Explore generating weekly team updates and leadership briefings with Claude's assistance", url: null },
        ],
        project: "Run a real or simulated team meeting. Use Claude to: generate the agenda beforehand, convert raw notes into structured minutes with action items, and draft the follow-up email. Measure time saved.",
        skills: ["Meeting productivity", "Action item extraction", "Communication efficiency"],
      },
    ],
  },
  {
    month: 4,
    title: "Claude for Process & Service Improvement",
    subtitle: "Using AI to think strategically about operations",
    color: "#9B59B6",
    weeks: [
      {
        week: 13,
        title: "Process Documentation & SOP Generation",
        reading: [
          { text: "Learn to prompt Claude to generate SOPs from informal process descriptions or verbal workflows", url: null },
          { text: "Practice creating escalation matrices, decision trees, and workflow documentation with Claude", url: null },
          { text: "Study how Claude can help identify gaps in existing process documentation by analyzing it critically", url: null },
          { text: "Explore generating RACI matrices and process ownership documents with Claude", url: null },
        ],
        project: "Choose 3 undocumented support processes. Use Claude to generate complete SOPs for each, including scope, steps, decision points, escalation criteria, and review dates.",
        skills: ["SOP generation", "Process documentation", "Gap identification"],
      },
      {
        week: 14,
        title: "Root Cause Analysis & Problem Management with Claude",
        reading: [
          { text: "Learn to use Claude as a thinking partner for root cause analysis: feed it symptoms and ask for structured 5-Why analysis", url: null },
          { text: "Practice using Claude to generate fishbone diagrams (in text format) and timeline reconstructions", url: null },
          { text: "Study how Claude can help identify recurring incident patterns when provided with problem descriptions", url: null },
          { text: "Explore using Claude to draft corrective action plans and preventive measures", url: null },
        ],
        project: "Conduct a Claude-assisted RCA on a recurring support issue. Generate: the 5-Why analysis, a fishbone breakdown, a corrective action plan, and a preventive action recommendation. Compare against a manual RCA.",
        skills: ["AI-assisted RCA", "Structured analysis", "Problem management"],
      },
      {
        week: 15,
        title: "Service Improvement Proposals & Business Cases",
        reading: [
          { text: "Learn to use Claude to draft service improvement proposals with structured business justification", url: null },
          { text: "Practice generating cost-benefit analyses for support process changes (automation, tooling, staffing)", url: null },
          { text: "Study how Claude can help build executive-ready presentations from operational data and recommendations", url: null },
          { text: "Explore using Claude to create before/after process comparisons and projected impact analyses", url: null },
        ],
        project: "Use Claude to draft a complete service improvement proposal for a real support pain point. Include: problem statement, current state, proposed solution, cost-benefit analysis, risks, and implementation timeline.",
        skills: ["Business case writing", "Proposal generation", "Executive communication"],
      },
      {
        week: 16,
        title: "Automation Ideation & Workflow Design with Claude",
        reading: [
          { text: "Learn to use Claude as a brainstorming partner for identifying automation opportunities in support workflows", url: null },
          { text: "Practice describing manual processes to Claude and asking it to suggest automation approaches and tools", url: null },
          { text: "Study how Claude can help evaluate automation candidates by effort, value, and risk", url: null },
          { text: "Explore using Claude to generate pseudo-workflows and automation specifications for developers or no-code platforms", url: null },
        ],
        project: "Feed Claude your top 10 manual support processes. Have it rank automation potential, suggest approaches (low-code, scripting, ITSM workflow), and draft implementation specs for the top 3.",
        skills: ["Automation ideation", "Workflow specification", "Build-vs-buy analysis"],
      },
    ],
  },
  {
    month: 5,
    title: "Advanced Claude Techniques & Integration",
    subtitle: "Going beyond basic prompting",
    color: "#E67E22",
    weeks: [
      {
        week: 17,
        title: "Advanced Prompting: System Prompts, Roles & Multi-Step",
        reading: [
          { text: "Study system prompts and how they persistently shape Claude's behavior throughout a conversation", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts" },
          { text: "Learn multi-step prompting: break complex tasks into sequential prompts that build on each other", url: null },
          { text: "Practice role-based prompting: 'You are a senior ITSM consultant reviewing our incident process'", url: null },
          { text: "Understand chain-of-thought prompting: ask Claude to think step-by-step before answering", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought" },
        ],
        project: "Build a multi-step prompt chain for weekly operations reporting: Step 1 — summarize ticket data, Step 2 — identify trends, Step 3 — generate leadership narrative, Step 4 — create action recommendations. Test end-to-end.",
        skills: ["Advanced prompting", "System prompts", "Chain-of-thought"],
      },
      {
        week: 18,
        title: "Claude Projects, Memory & Organizational Knowledge",
        reading: [
          { text: "Study Claude Projects: how to create persistent workspaces with uploaded documents and custom instructions", url: "https://docs.claude.com" },
          { text: "Learn how to upload SOPs, runbooks, and team standards into a Claude Project so it answers with your context", url: null },
          { text: "Practice building a support operations Project with your team's processes, metrics definitions, and templates", url: null },
          { text: "Understand memory features and how Claude can retain information across conversations when enabled", url: null },
        ],
        project: "Create a Claude Project for your support team: upload 5+ operational documents (SOPs, escalation matrix, SLA definitions, quality rubric). Test 10 questions against it and verify it responds with your team's actual standards.",
        skills: ["Claude Projects", "Knowledge management", "Contextual AI"],
      },
      {
        week: 19,
        title: "Claude with Files: Spreadsheets, PDFs & Reports",
        reading: [
          { text: "Learn to upload ticket exports, CSV files, and spreadsheets to Claude for analysis and summarization", url: null },
          { text: "Practice asking Claude to analyze PDF reports, extract key findings, and generate comparison tables", url: null },
          { text: "Study how Claude can create formatted documents, presentations outlines, and structured outputs from raw data", url: null },
          { text: "Understand file size limits and best practices for preparing data before uploading to Claude", url: null },
        ],
        project: "Upload a month of anonymized ticket data to Claude. Generate: a trend analysis report, a top-10 recurring issues list, an SLA performance summary, and 5 targeted improvement recommendations with supporting data.",
        skills: ["File analysis", "Data-to-insight", "Report automation"],
      },
      {
        week: 20,
        title: "Evaluating AI Tools Beyond Claude",
        reading: [
          { text: "Study the AI tool landscape for IT support: Copilot, Gemini, ChatGPT — understand where each excels", url: null },
          { text: "Learn about AI features built into ITSM platforms: ServiceNow Virtual Agent, Jira AI, Freshdesk Freddy", url: null },
          { text: "Review how AI-powered ticket routing, sentiment analysis, and auto-categorization work in production tools", url: null },
          { text: "Understand the difference between conversational AI (Claude) and embedded AI (platform-native features)", url: null },
        ],
        project: "Create an AI tool evaluation matrix for your support operation. Compare 4+ tools across: use cases, cost, integration, data privacy, accuracy, and team adoption effort. Include a recommendation.",
        skills: ["AI landscape awareness", "Tool evaluation", "Strategic selection"],
      },
    ],
  },
  {
    month: 6,
    title: "AI Strategy, Governance & Team Adoption",
    subtitle: "Leading AI adoption for your support organization",
    color: "#C0392B",
    weeks: [
      {
        week: 21,
        title: "Building an AI Adoption Roadmap for Support",
        reading: [
          { text: "Study how to assess AI readiness in a support team: skills, culture, tooling, data maturity", url: null },
          { text: "Learn to create a phased AI adoption plan: quick wins, medium-term projects, long-term transformation", url: null },
          { text: "Review change management principles applied to AI rollout in operations teams", url: null },
          { text: "Understand how to measure AI adoption success: time saved, quality improvement, team satisfaction, cost impact", url: null },
        ],
        project: "Draft a 6-month AI adoption roadmap for your support team. Include: readiness assessment, phased use cases, training plan, success metrics, risk mitigations, and governance guardrails.",
        skills: ["AI strategy", "Adoption planning", "Change management"],
      },
      {
        week: 22,
        title: "Teaching Your Team to Use Claude Effectively",
        reading: [
          { text: "Study how to design a practical Claude training session for support analysts: hands-on, scenario-based", url: null },
          { text: "Learn common mistakes new AI users make: over-trusting output, poor prompts, sharing sensitive data, ignoring verification", url: null },
          { text: "Review how to create a team prompt library with tested, approved prompts for common tasks", url: null },
          { text: "Understand how to track team AI usage and measure productivity improvements", url: null },
        ],
        project: "Build a complete Claude training workshop for your team: a 1-hour session plan, 10 hands-on exercises, a prompt library of 15+ tested prompts, and a quick-reference card for daily use.",
        skills: ["AI training design", "Prompt library curation", "Team enablement"],
      },
      {
        week: 23,
        title: "AI Governance, Ethics & Risk for Support Leaders",
        reading: [
          { text: "Study data governance for AI: what can be shared with AI tools, what requires anonymization, what is prohibited", url: null },
          { text: "Learn about AI bias, hallucination mitigation, and quality control in operational contexts", url: null },
          { text: "Review regulatory considerations: GDPR, SOX, HIPAA implications for AI-assisted support processes", url: null },
          { text: "Understand how to create an AI incident response plan for when AI outputs cause operational issues", url: null },
        ],
        project: "Create a comprehensive AI governance framework for your support team: data classification rules, approved/prohibited use cases, quality review requirements, incident procedures, and an ethics checklist.",
        skills: ["AI governance", "Risk management", "Compliance awareness"],
      },
      {
        week: 24,
        title: "Capstone: Your AI-Augmented Support Operating Model",
        reading: [
          { text: "Review everything built in the previous 23 weeks and identify the highest-impact AI use cases for your operation", url: null },
          { text: "Study how leading support organizations integrate AI into their daily operations without over-reliance", url: null },
          { text: "Reflect on your personal AI skill growth, team readiness, and organizational AI maturity", url: null },
        ],
        project: "Build your capstone: a complete AI-augmented IT Support Manager operating model. Include: AI use case catalog, prompt library, governance framework, training program, adoption roadmap, metrics dashboard design, and a 1-page leadership brief on how AI transforms your support operation.",
        skills: ["Operating model design", "AI leadership", "Strategic synthesis"],
      },
    ],
  },
];

const ALL_WEEKS = MONTHS.flatMap((m) => m.weeks.map((w) => ({ ...w, monthColor: m.color, monthNum: m.month })));
const TOTAL_WEEKS = ALL_WEEKS.length;
const STORAGE_KEY = "claude-learning-it-support-mgr-v1";

function ProgressRing({ percent, size = 48, stroke = 4, color }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={`${color}20`} strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.4s ease" }} />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 5 }}>
      <path d="M6.5 3.5H3.5C2.948 3.5 2.5 3.948 2.5 4.5V12.5C2.5 13.052 2.948 13.5 3.5 13.5H11.5C12.052 13.5 12.5 13.052 12.5 12.5V9.5M9.5 2.5H13.5M13.5 2.5V6.5M13.5 2.5L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WeekCard({ week, monthColor, progress, onToggleReading, onToggleProject, onAddNote, isExpanded, onToggle }) {
  const readingDone = progress?.reading || [];
  const projectDone = progress?.projectDone || false;
  const notes = progress?.notes || "";
  const totalItems = week.reading.length + 1;
  const doneItems = readingDone.filter(Boolean).length + (projectDone ? 1 : 0);
  const weekPercent = Math.round((doneItems / totalItems) * 100);

  return (
    <div style={{ background: "var(--card-bg)", borderRadius: 10, border: `1px solid ${isExpanded ? monthColor : "var(--border)"}`, marginBottom: 10, overflow: "hidden", transition: "border-color 0.2s" }}>
      <button onClick={onToggle} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "none", border: "none", cursor: "pointer", color: "var(--text)", fontFamily: "'Source Serif 4', Georgia, serif" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ background: weekPercent === 100 ? "#2EAD6B" : monthColor, color: "#fff", borderRadius: 6, padding: "2px 10px", fontSize: 12, fontFamily: "'DM Mono', monospace", fontWeight: 600 }}>
            {weekPercent === 100 ? "✓" : `W${week.week}`}
          </span>
          <span style={{ fontWeight: 600, fontSize: 15, textAlign: "left" }}>{week.title}</span>
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: weekPercent === 100 ? "#2EAD6B" : "var(--text-secondary)", fontWeight: 600 }}>{weekPercent}%</span>
          <span style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", fontSize: 18, opacity: 0.5 }}>▾</span>
        </span>
      </button>
      {isExpanded && (
        <div style={{ padding: "0 18px 18px" }}>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>Learning Checklist</div>
            {week.reading.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                <input
                  type="checkbox"
                  checked={!!readingDone[i]}
                  onChange={() => onToggleReading(i)}
                  style={{ accentColor: monthColor, marginTop: 5, width: 16, height: 16, flexShrink: 0, cursor: "pointer" }}
                />
                <div style={{ flex: 1, fontSize: 13, lineHeight: 1.6 }}>
                  <span style={{
                    textDecoration: readingDone[i] ? "line-through" : "none",
                    opacity: readingDone[i] ? 0.6 : 1,
                    color: "var(--text)",
                    transition: "opacity 0.2s",
                  }}>
                    {r.text}
                  </span>
                  {r.url && (
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        marginLeft: 8,
                        fontSize: 11,
                        color: monthColor,
                        textDecoration: "none",
                        fontFamily: "'DM Mono', monospace",
                        fontWeight: 600,
                        opacity: 0.85,
                        borderBottom: `1px dashed ${monthColor}50`,
                        paddingBottom: 1,
                      }}
                    >
                      <LinkIcon /> Open
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>Weekly Deliverable</div>
            <label style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, lineHeight: 1.7, color: "var(--text)", background: projectDone ? "#2EAD6B15" : `${monthColor}10`, padding: "10px 14px", borderRadius: 8, cursor: "pointer", border: projectDone ? "1px solid #2EAD6B40" : "1px solid transparent", transition: "all 0.2s" }}>
              <input type="checkbox" checked={projectDone} onChange={onToggleProject} style={{ accentColor: "#2EAD6B", marginTop: 4, width: 16, height: 16, flexShrink: 0, cursor: "pointer" }} />
              <span style={{ textDecoration: projectDone ? "line-through" : "none", opacity: projectDone ? 0.7 : 1 }}>{week.project}</span>
            </label>
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>Notes & Evidence</div>
            <textarea value={notes} onChange={(e) => onAddNote(e.target.value)} placeholder="Add takeaways, prompt experiments, results, or reflections..." style={{ width: "100%", minHeight: 70, padding: "10px 12px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--card-bg)", color: "var(--text)", fontSize: 13, fontFamily: "'DM Mono', monospace", resize: "vertical", outline: "none", boxSizing: "border-box" }} />
          </div>

          <div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: monthColor, fontWeight: 700, marginBottom: 6, fontFamily: "'DM Mono', monospace" }}>Skills Built</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {week.skills.map((s, i) => (
                <span key={i} style={{ fontSize: 11, background: `${monthColor}18`, color: monthColor, padding: "3px 10px", borderRadius: 20, fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LearningPlan() {
  const [expandedMonth, setExpandedMonth] = useState(0);
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [progress, setProgress] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await window.storage.get(STORAGE_KEY);
        if (result && result.value) setProgress(JSON.parse(result.value));
      } catch (e) {}
      setLoaded(true);
    })();
  }, []);

  const saveProgress = useCallback(async (newProgress) => {
    setProgress(newProgress);
    try { await window.storage.set(STORAGE_KEY, JSON.stringify(newProgress)); } catch (e) { console.error("Save failed:", e); }
  }, []);

  const toggleWeek = (wn) => setExpandedWeeks((p) => ({ ...p, [wn]: !p[wn] }));
  const toggleReading = (wn, ri) => {
    const wp = progress[wn] || { reading: [], projectDone: false, notes: "" };
    const nr = [...(wp.reading || [])]; nr[ri] = !nr[ri];
    saveProgress({ ...progress, [wn]: { ...wp, reading: nr } });
  };
  const toggleProject = (wn) => {
    const wp = progress[wn] || { reading: [], projectDone: false, notes: "" };
    saveProgress({ ...progress, [wn]: { ...wp, projectDone: !wp.projectDone } });
  };
  const updateNote = (wn, note) => {
    const wp = progress[wn] || { reading: [], projectDone: false, notes: "" };
    saveProgress({ ...progress, [wn]: { ...wp, notes: note } });
  };
  const resetProgress = async () => {
    if (confirm("Reset all progress? This cannot be undone.")) {
      setProgress({});
      try { await window.storage.delete(STORAGE_KEY); } catch (e) {}
    }
  };

  const totalItems = ALL_WEEKS.reduce((s, w) => s + w.reading.length + 1, 0);
  const doneItems = ALL_WEEKS.reduce((s, w) => {
    const wp = progress[w.week] || {};
    return s + (wp.reading || []).filter(Boolean).length + (wp.projectDone ? 1 : 0);
  }, 0);
  const overallPercent = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;
  const weeksCompleted = ALL_WEEKS.filter((w) => {
    const wp = progress[w.week] || {};
    return (wp.reading || []).filter(Boolean).length + (wp.projectDone ? 1 : 0) === w.reading.length + 1;
  }).length;
  const getMonthPercent = (m) => {
    const mt = m.weeks.reduce((s, w) => s + w.reading.length + 1, 0);
    const md = m.weeks.reduce((s, w) => { const wp = progress[w.week] || {}; return s + (wp.reading || []).filter(Boolean).length + (wp.projectDone ? 1 : 0); }, 0);
    return mt > 0 ? Math.round((md / mt) * 100) : 0;
  };
  const totalStructuredTasks = ALL_WEEKS.reduce((s, w) => s + w.reading.length, 0);

  if (!loaded) return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 200, fontFamily: "'DM Mono', monospace", color: "#888" }}>Loading progress...</div>;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px", fontFamily: "'Source Serif 4', Georgia, serif", color: "var(--text)", "--text": "#1a1a1a", "--text-secondary": "#555", "--card-bg": "#fafaf8", "--border": "#e5e3df" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');
        @media (prefers-color-scheme: dark) { :root { --text: #e8e6e1; --text-secondary: #a8a5a0; --card-bg: #1e1e1c; --border: #333330; } }
      `}</style>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 6px", letterSpacing: -0.5 }}>Claude for IT Support Managers</h1>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0, fontFamily: "'DM Mono', monospace" }}>6 months · AI skills track · 24 weeks · traceable progress</p>
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ProgressRing percent={overallPercent} size={56} stroke={5} color="#2EAD6B" />
            <span style={{ position: "absolute", fontSize: 13, fontWeight: 700, fontFamily: "'DM Mono', monospace", color: "#2EAD6B" }}>{overallPercent}%</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 14, padding: "12px 16px", background: "var(--card-bg)", borderRadius: 10, border: "1px solid var(--border)" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{weeksCompleted}</div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)", fontFamily: "'DM Mono', monospace" }}>of {TOTAL_WEEKS} weeks</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{doneItems}</div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)", fontFamily: "'DM Mono', monospace" }}>of {totalItems} items</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{totalStructuredTasks}</div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)", fontFamily: "'DM Mono', monospace" }}>learning steps</div>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <button onClick={resetProgress} style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "#C0392B", background: "none", border: "1px solid #C0392B30", borderRadius: 6, padding: "4px 10px", cursor: "pointer" }}>Reset</button>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: 28 }}>
        {MONTHS.map((m, i) => {
          const mp = getMonthPercent(m);
          return (
            <button key={i} onClick={() => setExpandedMonth(i)} style={{ flex: 1, padding: "8px 4px 10px", background: expandedMonth === i ? m.color : `${m.color}15`, color: expandedMonth === i ? "#fff" : m.color, border: "none", borderRadius: 8, cursor: "pointer", fontSize: 11, fontWeight: 700, fontFamily: "'DM Mono', monospace", transition: "all 0.2s", position: "relative", overflow: "hidden" }}>
              <div>M{m.month}</div>
              <div style={{ fontSize: 9, opacity: 0.8, marginTop: 2 }}>{mp}%</div>
              <div style={{ position: "absolute", bottom: 0, left: 0, height: 3, width: `${mp}%`, background: expandedMonth === i ? "#fff" : m.color, opacity: 0.6, borderRadius: "0 2px 0 0", transition: "width 0.4s ease" }} />
            </button>
          );
        })}
      </div>

      {MONTHS.map((m, i) => expandedMonth === i && (
        <div key={i}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <span style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", color: m.color, fontWeight: 700 }}>MONTH {m.month}</span>
              <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "var(--text-secondary)" }}>{getMonthPercent(m)}% complete</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 2px" }}>{m.title}</h2>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0, fontStyle: "italic" }}>{m.subtitle}</p>
          </div>
          {m.weeks.map((w) => (
            <WeekCard key={w.week} week={w} monthColor={m.color} progress={progress[w.week]} onToggleReading={(idx) => toggleReading(w.week, idx)} onToggleProject={() => toggleProject(w.week)} onAddNote={(note) => updateNote(w.week, note)} isExpanded={!!expandedWeeks[w.week]} onToggle={() => toggleWeek(w.week)} />
          ))}
        </div>
      ))}

      <div style={{ marginTop: 24, padding: "14px 18px", background: "var(--card-bg)", borderRadius: 10, border: "1px solid var(--border)", fontSize: 13, lineHeight: 1.7, color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--text)" }}>Progress saves automatically.</strong> This plan teaches IT Support Managers how to use Claude effectively across daily operations, people management, process improvement, and strategic AI adoption.
      </div>
    </div>
  );
}
