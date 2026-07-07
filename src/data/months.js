export const MONTHS = [
  {
    month: 1,
    shortTitle: "Foundations",
    title: "Claude Foundations for Support Leaders",
    subtitle: "Understanding AI as your operational co-pilot",
    color: "#D4783C",
    objectives: [
      "Explain what Claude is, how it differs from search tools, and which operating modes (base chat, file upload, Projects, web search) apply to your org's setup",
      "Write structured prompts that consistently produce useful output for support manager tasks",
      "Apply Claude to daily communications: outage updates, handoffs, stakeholder emails",
      "Draft a responsible AI acceptable-use policy covering approved uses, prohibited data types, and review requirements",
    ],
    weeks: [
      {
        week: 1,
        title: "What Claude Is & How It Thinks",
        reading: [
          { text: "Why Claude can produce confident, wrong specifics — and how to prevent it from happening in your team's work", url: "https://docs.anthropic.com/en/docs/about-claude/claude-overview", urlLabel: "How Claude works", contentKey: "w01-llm-basics" },
          { text: "Learn the difference between Claude and retrieval tools like Google or a knowledge base — base Claude generates responses from training data, it does not look things up. Important: Claude can also be configured with tools like web search, file upload, and Claude Projects, which do enable retrieval. Know which mode your org has enabled before making assumptions about what Claude can access", url: null, urlLabel: null, contentKey: "w01-claude-vs-retrieval" },
          { text: "Study Claude's strengths: drafting, summarizing, analyzing, brainstorming, rewriting, and structured reasoning", url: null, urlLabel: null, contentKey: "w01-claude-strengths" },
          { text: "Understand Claude's limitations in base chat mode: no real-time data, no memory between conversations, hallucination risk, knowledge cutoff. Many of these limitations change when Projects, web search, or tool-calling are enabled — so always verify which Claude configuration you are using", url: null, urlLabel: null, contentKey: "w01-claude-limitations" },
        ],
        project: "Write a one-page brief for your support team explaining what Claude can and cannot do, with 5 realistic use cases and 5 things it should never be trusted for without verification. Include a section on which Claude features your organization has approved (base chat, Projects, file upload, web search).",
        skills: ["AI literacy", "Capability scoping", "Risk awareness"],
        scenario: "Your L1 team is about to start using Claude for the first time. Before they do, your CTO has asked for a team brief that sets expectations — what Claude can do, what it cannot, and which org-approved features are in scope.",
        riskLevel: "Low",
        difficulty: "Beginner",
        promptPattern: `Role: You are an experienced IT support manager writing for your own team.
Context: [Describe your team size, tier structure, and which Claude features your org has approved — base chat only, or also Projects, file upload, web search]
Task: Write a one-page brief explaining what Claude is, what it can help with, and what it must never be trusted with.
Format: Two sections — "What Claude can help with" (5 bullet examples) and "What Claude cannot be trusted with" (5 limits with reasons). Plain language, no jargon.
Constraints: Written for L1 analysts who have never used AI at work. Under 400 words.
Verify: Ask a colleague unfamiliar with Claude to read it and flag anything unclear or surprising.`,
        safetyWarnings: [
          "Use mock or hypothetical examples when testing Claude — do not paste real ticket numbers, customer names, or incident IDs.",
        ],
        rubric: [
          { criterion: "Accuracy", passCondition: "No invented capabilities — every claim matches what Claude actually does" },
          { criterion: "Completeness", passCondition: "Covers both what Claude can do and what it cannot, with at least 5 examples each" },
          { criterion: "Audience fit", passCondition: "Written for L1 analysts — no AI research language, no assumed prior knowledge" },
          { criterion: "Actionability", passCondition: "A reader can act on this brief immediately — they know what to try and what to avoid" },
          { criterion: "Safety", passCondition: "Explicitly states not to paste PII, credentials, or proprietary data into Claude" },
        ],
        quiz: [
          {
            question: "Your L1 analyst asks Claude 'Is there an active outage at AWS right now?' and Claude confidently says 'No, there are no reported AWS outages.' What should happen next?",
            options: [
            { text: "Trust Claude — it has access to real-time infrastructure monitoring data", isCorrect: false },
            { text: "Use Claude's answer as a starting point, then verify against the AWS status page before acting", isCorrect: true },
            { text: "Ask Claude again with a more specific prompt to get more reliable information", isCorrect: false },
            { text: "Escalate to your cloud team immediately because Claude raised a concern", isCorrect: false },
            ],
            rationale: "In base chat mode, Claude has no real-time data access. Its response reflects training data, not live monitoring. Always verify time-sensitive technical status from authoritative sources before acting.",
          },
        ],
      },
      {
        week: 2,
        title: "Prompt Engineering Basics for Managers",
        reading: [
          { text: "Learn the anatomy of a good prompt: context, role, task, format, constraints, examples", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", urlLabel: "Anthropic docs", contentKey: "w02-prompt-anatomy" },
          { text: "Study how specificity drives output quality — vague input produces vague output", url: null, urlLabel: null, contentKey: "w02-specificity" },
          { text: "Practice the difference between 'Tell me about incidents' vs 'You are an ITSM consultant. Analyze these 3 incident patterns and recommend process changes in bullet format'", url: null, urlLabel: null },
          { text: "Understand temperature, tone control, and format directives (tables, markdown, numbered steps)", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables", urlLabel: "Templates & variables" },
        ],
        project: "Write 10 support-manager prompts covering: ticket triage guidance, status update drafting, runbook creation, coaching feedback, and meeting agenda generation. Rate each on output quality using this rubric: specificity (is the task clear?), context (does Claude have what it needs?), format instruction (is the output shape defined?), constraints (are limits stated?), verification step (is there a check built in?).",
        skills: ["Prompt engineering", "Output formatting", "Context setting"],
        scenario: "Three analysts are using Claude to draft ticket responses but getting wildly inconsistent results — one gets a solid structured reply, another gets a one-liner, a third gets vague waffle. You realize there is no standard approach and you need to fix that this week.",
        riskLevel: "Low",
        difficulty: "Beginner",
        promptPattern: `Role: [Assign Claude a relevant expert identity — e.g. "You are an ITSM specialist"]
Context: [Describe the support situation and any background the response depends on]
Task: [Specific verb + exactly what you want — Draft / Analyze / Compare / Summarize]
Audience: [Who will read this output — executive, customer, technical team, analyst]
Format: [Bullet list / numbered steps / 2-paragraph summary / table with columns X, Y, Z]
Constraints: [Word limit, tone, exclusions — e.g. "Under 150 words. No jargon. Analysis only, no recommendations."]
Verify: [How you will check the output — e.g. "Confirm all facts against the original ticket before sending"]`,
        safetyWarnings: [
          "Use fictional ticket descriptions when practising — do not paste real customer names, ticket IDs, or live incident details into Claude.",
        ],
        rubric: [
          { criterion: "Role", passCondition: "Prompt assigns Claude a relevant expert identity before the task" },
          { criterion: "Context", passCondition: "Claude has all the background it needs — no guessing required" },
          { criterion: "Format instruction", passCondition: "Output shape is explicitly defined — list, table, paragraphs, etc." },
          { criterion: "Constraints", passCondition: "At least one limit is stated — word count, tone, or exclusions" },
          { criterion: "Verification step", passCondition: "Prompt includes how the output will be checked before use" },
        ],
        quiz: [
          {
            question: "An analyst submits a Claude-generated ticket triage decision without reading it. The wrong team gets paged at 2am. Which principle does this violate most directly?",
            options: [
            { text: "Safe data rules — the analyst should not have shared ticket data with Claude", isCorrect: false },
            { text: "Trust but verify — all Claude output should be reviewed before action is taken", isCorrect: true },
            { text: "Operating mode awareness — Claude should have had web search enabled for this task", isCorrect: false },
            { text: "Prompt specificity — a better prompt would have prevented the wrong routing", isCorrect: false },
            ],
            rationale: "'Trust but verify' means Claude's output is always a draft, not a final decision. Review before acting is non-negotiable — especially for anything that triggers downstream action like paging an on-call team.",
          },
        ],
      },
      {
        week: 3,
        title: "Using Claude for Daily Support Communications",
        reading: [
          { text: "Practice drafting executive outage updates with Claude by providing situation details and asking for structured status messages", url: "https://www.atlassian.com/incident-management/template", urlLabel: "Atlassian templates" },
          { text: "Learn to use Claude to rewrite customer-facing messages for tone, clarity, and professionalism", url: null, urlLabel: null, contentKey: "w03-tone-rewriting" },
          { text: "Study how Claude can generate shift handoff notes from a bullet-point brain dump", url: "https://www.atlassian.com/incident-management/handbook", urlLabel: "Atlassian handbook", contentKey: "w03-shift-handoff" },
          { text: "Explore generating team announcements, meeting summaries, and stakeholder emails with Claude", url: null, urlLabel: null },
        ],
        project: "Using Claude, generate a complete communications kit: executive outage update, customer status page message, team shift handoff, and post-incident summary. Compare Claude's drafts against your own and document specific improvements — this before/after comparison is your evidence artifact for this week.",
        skills: ["AI-assisted writing", "Tone calibration", "Communication speed"],
        scenario: "A Sev-2 VPN outage is in progress. Leadership wants an executive update in 10 minutes, the status page needs updating, and your night shift needs a handoff brief before 6pm. You have raw Slack messages and three bullet points.",
        riskLevel: "Medium",
        difficulty: "Beginner",
        promptPattern: `Role: You are a senior IT communications manager.
Context: [Outage type, affected services, start time, current status, number of users affected, estimated resolution time]
Audience: [Executive / Customer-facing / Internal team — one per prompt]
Task: Draft a [executive update / customer status update / shift handoff].
Format: [3 short paragraphs for exec / 2 sentences for status page / bullet list for handoff]
Constraints: No blame language. No internal system names in customer-facing copy. Under [X] words.
Verify: Read it yourself before sending. Have a second person check anything customer-facing.`,
        safetyWarnings: [
          "Remove real customer names, email addresses, and internal hostnames before pasting incident details into Claude.",
          "All outage communications must be reviewed by you before sending — Claude's draft is a starting point, not a finished message.",
        ],
        rubric: [
          { criterion: "Audience fit", passCondition: "Tone and detail level match the intended reader — executive copy has no jargon, technical copy has enough detail" },
          { criterion: "Completeness", passCondition: "Includes current status, impact scope, and next update time" },
          { criterion: "Blame-free language", passCondition: "No language that assigns fault to a person, team, or vendor" },
          { criterion: "Actionability", passCondition: "Reader knows what is happening, what is being done, and when the next update arrives" },
          { criterion: "Safety", passCondition: "No customer PII, internal hostnames, or confidential system details in customer-facing copy" },
        ],
        quiz: [
          {
            question: "Your manager says: 'Claude can draft the AI usage policy — just publish whatever it produces.' What is the correct response?",
            options: [
            { text: "Agree — Claude is well-trained on compliance topics and its policy output is reliable enough to publish", isCorrect: false },
            { text: "Use Claude to draft the policy, then route it through your legal or InfoSec team for review before publishing", isCorrect: true },
            { text: "Decline — Claude cannot be used for governance documents of any kind", isCorrect: false },
            { text: "Publish Claude's draft, then ask legal to review it after it goes live", isCorrect: false },
            ],
            rationale: "Claude can draft policies effectively, but organizational governance documents — especially those covering data handling — require review by appropriate stakeholders before publication. Publishing an unreviewed AI-drafted policy creates real compliance and liability risk.",
          },
        ],
      },
      {
        week: 4,
        title: "Responsible AI Use in IT Operations",
        reading: [
          { text: "Study data sensitivity: never paste PII, credentials, proprietary configs, or customer data into Claude without org approval", url: "https://www.anthropic.com/policy", urlLabel: "Anthropic usage policy", contentKey: "w04-data-sensitivity" },
          { text: "Learn the 'trust but verify' principle — always review Claude's output before sending or publishing", url: null, urlLabel: null, contentKey: "w04-trust-but-verify" },
          { text: "Understand your organization's AI usage policy and how it applies to support operations", url: null, urlLabel: null, contentKey: "w04-org-ai-policy" },
          { text: "Review common failure modes: confident-sounding wrong answers, outdated technical guidance, fabricated references", url: null, urlLabel: null, contentKey: "w04-failure-modes" },
        ],
        project: "Draft an AI acceptable-use policy for your support team covering: approved use cases, prohibited data types (include a sample data classification table with rows for PII, credentials, customer data, internal configs, and publicly shareable data), review requirements, and escalation for uncertain outputs.",
        skills: ["AI governance", "Data sensitivity", "Policy design"],
        scenario: "Your CTO wants an AI acceptable-use policy drafted before the team starts using Claude operationally. You have one week, no legal background, and no existing policy to reference.",
        riskLevel: "Low",
        difficulty: "Intermediate",
        promptPattern: `Role: You are a technology policy advisor helping an IT support manager.
Context: Our support team handles [ticket volume and types]. We are deploying [Claude configuration — base chat / Projects / file upload]. We operate in [industry and any relevant regulatory context].
Task: Draft an AI acceptable-use policy covering the four required sections below.
Required sections: 1) Approved use cases with examples, 2) Prohibited data types with a classification table, 3) Review requirements before output is sent or published, 4) Escalation process for uncertain outputs.
Format: Policy document with numbered sections and a data classification table.
Constraints: Plain language. Practical examples under each rule. One page maximum.
Verify: Have your manager and a legal or InfoSec contact review before publishing.`,
        safetyWarnings: [
          "Use Claude to structure and draft the policy — but have your legal or InfoSec team review before it is published or shared with the team.",
        ],
        rubric: [
          { criterion: "Approved use cases", passCondition: "At least 5 specific examples — generic statements like 'writing assistance' do not count" },
          { criterion: "Prohibited data types", passCondition: "Includes a data classification table covering PII, credentials, customer data, internal configs, and publicly shareable data" },
          { criterion: "Review requirements", passCondition: "Specifies which output types require human review before use" },
          { criterion: "Escalation process", passCondition: "Describes what an analyst should do when uncertain whether output is safe to use" },
          { criterion: "Governance", passCondition: "Identifies who owns the policy and when it will next be reviewed" },
        ],
      },
    ],
  },
  {
    month: 2,
    shortTitle: "Ticket Ops",
    title: "Claude for Ticket Operations & Incident Response",
    subtitle: "Accelerating the support workflow with AI",
    color: "#3A7BE8",
    objectives: [
      "Build a reusable triage prompt template and benchmark its accuracy against a labeled ticket set using a defined scoring rubric",
      "Generate multi-audience incident summaries and post-incident reports from raw notes or chat logs",
      "Create knowledge base articles and internal runbooks using Claude, validated by a team member who test-follows them",
      "Analyze ticket export data with Claude and verify all numerical outputs independently before reporting",
    ],
    weeks: [
      {
        week: 5,
        title: "Ticket Triage & Categorization with Claude",
        reading: [
          { text: "Learn how to prompt Claude to categorize tickets by type (incident, request, problem, change) from raw descriptions", url: "https://www.axelos.com/certifications/itil-service-management/", urlLabel: "ITIL 4 framework", contentKey: "w05-ticket-categories" },
          { text: "Practice feeding Claude sample tickets and asking it to assign priority, category, and suggested assignment group", url: "https://www.atlassian.com/incident-management/itsm", urlLabel: "Atlassian ITSM" },
          { text: "Study how to build reusable triage prompt templates that your team can standardize on", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", urlLabel: "Prompt engineering", contentKey: "w05-triage-templates" },
          { text: "Understand the limits: Claude cannot access your ticketing system directly — it works with text you provide", url: null, urlLabel: null, contentKey: "w05-triage-limits" },
        ],
        project: "Create a Claude-powered triage prompt template. Test it against 15 real or realistic ticket descriptions and score accuracy using this rubric for each ticket: correct category (incident/request/problem/change), justified priority (P1–P4 with reasoning), routing confidence (correct group suggested), missing context flagged (did Claude ask for what it needed?), escalation decision (was the right urgency applied?). Calculate an overall accuracy score.",
        skills: ["AI-assisted triage", "Prompt templates", "Classification accuracy"],
        scenario: "Your L1 queue has 80 open tickets on a Monday morning. Half are miscategorized — incidents logged as requests, P1s sitting in the wrong team's queue. You need a consistent, repeatable way to triage at speed without losing accuracy.",
        riskLevel: "Low",
        difficulty: "Beginner",
        promptPattern: `Role: You are an experienced ITSM triage analyst.
Context: The ticket below came in through our support portal. We use ITIL categories (Incident, Service Request, Problem, Change). Priority scale: P1 = business-critical, P2 = significant impact, P3 = moderate, P4 = low/informational.
Task: Analyze this ticket and provide: 1) Category, 2) Priority with justification, 3) Suggested assignment group, 4) Any missing information needed to route accurately, 5) Escalation recommendation (yes/no with reason).
Ticket: [PASTE TICKET TEXT HERE]
Format: Numbered list matching the 5 items above.
Constraints: If information is missing, state what is needed rather than guessing. Flag any P1 indicators immediately.
Verify: Confirm category and priority against your team's SLA definitions before routing.`,
        safetyWarnings: [
          "Anonymize ticket data before pasting into Claude — remove customer names, email addresses, and internal system identifiers.",
        ],
        rubric: [
          { criterion: "Category accuracy", passCondition: "Correct ITIL category assigned with reasoning, not guessed" },
          { criterion: "Priority justification", passCondition: "P1–P4 rating includes explicit business impact reasoning" },
          { criterion: "Routing confidence", passCondition: "Assignment group is named and justified, or Claude flags missing info" },
          { criterion: "Gap flagging", passCondition: "Missing context is called out rather than assumed" },
          { criterion: "Template reusability", passCondition: "Prompt works consistently across ticket types without re-prompting" },
        ],
        quiz: [
          {
            question: "You build a triage prompt and test it on 15 tickets. Claude correctly categorizes 13 of them. Your analyst wants to deploy it immediately to auto-route all incoming tickets. What is the right call?",
            options: [
            { text: "Deploy it — 87% accuracy is good enough for production use", isCorrect: false },
            { text: "Keep the prompt as a suggested routing tool, but require analyst review before any ticket is actually routed", isCorrect: true },
            { text: "The prompt is not good enough — rebuild it from scratch before any deployment", isCorrect: false },
            { text: "Test on 100 more tickets first, then deploy with auto-routing if accuracy stays above 85%", isCorrect: false },
            ],
            rationale: "Claude's triage output is a draft recommendation, not a decision. Even high accuracy doesn't justify removing human review from routing — the 13% failure rate on a high-volume queue translates to many misrouted tickets per day. Human-in-the-loop is the correct posture for routing decisions.",
          },
        ],
      },
      {
        week: 6,
        title: "Incident Summarization & Post-Incident Reports",
        reading: [
          { text: "Practice feeding Claude raw incident timelines, chat logs, or notes and asking for structured incident summaries", url: "https://www.atlassian.com/incident-management/handbook", urlLabel: "Atlassian handbook" },
          { text: "Learn to prompt Claude for post-incident reviews: timeline, root cause, impact, lessons, actions", url: "https://response.pagerduty.com/after/post_mortem_process/", urlLabel: "PagerDuty guide", contentKey: "w06-post-incident-reviews" },
          { text: "Study how to ask Claude to identify gaps in incident documentation by reviewing what's missing", url: null, urlLabel: null, contentKey: "w06-documentation-gaps" },
          { text: "Explore using Claude to draft stakeholder-facing incident reports at different detail levels (executive vs technical)", url: "https://sre.google/sre-book/postmortem-culture/", urlLabel: "Google SRE book" },
        ],
        project: "Take a past major incident (or create a realistic scenario). Feed raw data to Claude and generate: a 2-sentence executive summary, a 1-page incident report, and a detailed post-incident review with action items. Evaluate each output against this rubric: timeline accuracy, audience calibration, action items with owners, blame-free language, and prevention section present.",
        skills: ["Incident summarization", "Report generation", "Multi-audience writing"],
        scenario: "A Sev-1 payment processing outage lasted 3.5 hours. You have a Slack thread with 140 messages, three engineers' raw notes, and a timeline someone typed up in a hurry. Leadership needs a PIR by end of day. You have 45 minutes.",
        riskLevel: "Medium",
        difficulty: "Intermediate",
        promptPattern: `Role: You are a senior IT incident manager writing for [executive / technical team / customers — choose one].
Context: [Describe: what failed, when it started, when it was resolved, number of users affected, business impact in plain terms]
Raw notes: [PASTE CLEANED NOTES — remove customer names, internal IPs, and confidential system names]
Task: Generate a [2-sentence executive summary / 1-page incident report / detailed PIR with action items].
Required sections for PIR: Timeline, Root cause (labeled as hypothesis if unconfirmed), Impact, Lessons learned, Corrective actions with named owners and due dates.
Format: Structured document with clear headings.
Constraints: Blame-free language throughout. No speculation labeled as fact. Flag any timeline gaps.
Verify: Cross-check all times and facts against source data before sharing.`,
        safetyWarnings: [
          "Remove customer names, internal hostnames, and proprietary system names before pasting incident notes into Claude.",
          "All incident communications must be reviewed by you before sending — Claude's output is a draft, not a finished document.",
        ],
        rubric: [
          { criterion: "Timeline accuracy", passCondition: "No invented timestamps — all times match source data or are marked as approximate" },
          { criterion: "Audience calibration", passCondition: "Executive copy has no jargon; technical copy has sufficient detail" },
          { criterion: "Action items", passCondition: "Each corrective action has a named owner and due date" },
          { criterion: "Blame-free language", passCondition: "No language assigns fault to a person or team" },
          { criterion: "Prevention section", passCondition: "PIR includes at least one concrete preventive measure, not just process observations" },
        ],
        quiz: [
          {
            question: "You paste raw incident notes from a Sev-1 outage into Claude and ask it to identify the root cause. Claude produces a confident, detailed root cause explanation. What must you do before including this in your PIR?",
            options: [
            { text: "Include it — Claude's analysis is based on the evidence you provided and is reliable for incident documentation", isCorrect: false },
            { text: "Label it as a hypothesis and validate each claim against logs, monitoring data, and SME input before publishing", isCorrect: true },
            { text: "Ask Claude to add a confidence percentage to each statement so readers know the uncertainty level", isCorrect: false },
            { text: "Have another analyst read Claude's output and confirm it sounds reasonable before including it", isCorrect: false },
            ],
            rationale: "Claude generates plausible narratives from the text it receives — it does not have access to logs, network data, or system telemetry. Its root cause output is a structured hypothesis, not verified fact. All claims must be validated against actual evidence before a PIR is published.",
          },
        ],
      },
      {
        week: 7,
        title: "Knowledge Article & Runbook Generation",
        reading: [
          { text: "Learn to prompt Claude to create step-by-step troubleshooting runbooks from brief problem descriptions", url: "https://www.atlassian.com/itsm/knowledge-management", urlLabel: "Atlassian KM guide", contentKey: "w07-runbook-generation" },
          { text: "Practice generating user-facing knowledge articles (password reset, VPN troubleshooting, printer issues) with Claude", url: null, urlLabel: null },
          { text: "Study how to ask Claude to convert tribal knowledge (verbal instructions) into structured documentation", url: "https://www.serviceinnovation.org/kcs/", urlLabel: "KCS methodology", contentKey: "w07-tribal-knowledge" },
          { text: "Explore using Claude to review and improve existing knowledge articles for clarity, completeness, and tone", url: null, urlLabel: null },
        ],
        project: "Use Claude to generate 5 support knowledge articles and 2 internal runbooks. Have a team member test-follow each article and document exactly where instructions were unclear or wrong — this validation step is required evidence for the deliverable.",
        skills: ["Knowledge creation", "Documentation speed", "Quality validation"],
        scenario: "Your team has three senior analysts who each know exactly how to resolve the 20 most common tickets. None of it is written down. When they are off, resolution times double. You need to extract and document that knowledge before the next holiday period.",
        riskLevel: "Low",
        difficulty: "Beginner",
        promptPattern: `Role: You are a technical writer specializing in IT support documentation.
Context: [Describe the process or issue — what triggers it, what systems are involved, what the expected outcome is]
Task: Generate a [troubleshooting runbook / knowledge article / step-by-step guide] for [audience: L1 analyst / end user / L2 engineer].
Format for runbook: Title, Scope, Prerequisites, Steps (numbered, with decision branches), Escalation criteria, Related articles.
Format for KB article: Title, Symptoms, Cause (if known), Resolution steps, Verification step, Related articles.
Constraints: Steps must be independently executable — assume no prior context. Flag any step that requires system access or elevated privileges.
Verify: Have a team member who did not write this follow the steps exactly and document where they got stuck.`,
        safetyWarnings: [
          "Do not include real internal IP addresses, hostnames, credentials, or customer-specific configurations in documentation generated with Claude.",
        ],
        rubric: [
          { criterion: "Completeness", passCondition: "Steps cover the full resolution path including decision branches and escalation" },
          { criterion: "Clarity", passCondition: "A first-day analyst could follow the steps without additional guidance" },
          { criterion: "Validation", passCondition: "A team member has test-followed the article and gaps have been fixed" },
          { criterion: "Safety", passCondition: "No internal credentials, IPs, or customer-specific details included" },
          { criterion: "Format", passCondition: "Article matches the standard KB template — scope, steps, escalation, related links" },
        ],
        quiz: [
          {
            question: "Claude produces a weekly ops report showing your team resolved 94% of P2 tickets within SLA. Your source data shows 89%. What is the correct action?",
            options: [
            { text: "Use Claude's number — it processed more data points and is likely more accurate than manual calculation", isCorrect: false },
            { text: "Use your source data number (89%) and correct Claude's report before sharing it with leadership", isCorrect: true },
            { text: "Report both numbers and note the discrepancy in the report", isCorrect: false },
            { text: "Re-run the Claude analysis with cleaner data to get a consistent figure", isCorrect: false },
            ],
            rationale: "Claude's arithmetic on large datasets is approximate and can contain errors. Your source data is authoritative. Using an AI-generated number that contradicts your data in a leadership report is a credibility risk. Verify all metrics before publishing.",
          },
        ],
      },
      {
        week: 8,
        title: "Analyzing Support Data with Claude",
        reading: [
          { text: "Learn how to paste CSV or tabular ticket data into Claude and ask for trend analysis, category breakdowns, and anomalies", url: null, urlLabel: null, contentKey: "w08-data-analysis" },
          { text: "Practice asking Claude to compute metrics from raw data: MTTR, backlog aging, SLA attainment, reopen rates", url: null, urlLabel: null },
          { text: "Study how Claude can generate data interpretation narratives for leadership reports", url: null, urlLabel: null, contentKey: "w08-narrative-reports" },
          { text: "Understand limitations: Claude does math approximately — always verify calculations on critical metrics independently using your source data", url: null, urlLabel: null, contentKey: "w08-verification" },
        ],
        project: "Export a week of ticket data (anonymized). Ask Claude to produce a weekly operations summary including volume trends, top categories, SLA performance, and 3 improvement recommendations. Verify all numbers independently against your source data before including this in any report.",
        skills: ["Data analysis prompting", "Metric interpretation", "Output verification"],
        scenario: "Your Monday ops review is in two hours and you have a raw CSV of last week's tickets. Your manager expects trend analysis, SLA performance, and three improvement priorities. You have Excel but no BI tool and no analyst available.",
        riskLevel: "Medium",
        difficulty: "Intermediate",
        promptPattern: `Role: You are a support operations analyst reviewing weekly ticket data.
Context: The data below is from [date range]. It covers [ticket types and teams in scope].
Task: Analyze this data and produce a weekly ops summary with: 1) Volume by category and trend vs. prior week, 2) SLA attainment by priority tier, 3) Top 3 recurring issue types, 4) Three specific improvement recommendations based on the data.
Data: [PASTE ANONYMIZED CSV OR TABLE]
Format: Executive-ready bullet summary under each section heading. Flag any anomalies in a separate section.
Constraints: If you cannot compute a figure precisely, say so — do not estimate without labeling it as an estimate.
Verify: Cross-check all numbers in Claude's output against your source data before including in any report.`,
        safetyWarnings: [
          "Anonymize ticket data before pasting — remove customer names, email addresses, and account identifiers. Replace with generic labels (Customer A, User B).",
          "Verify every metric Claude produces against your source data. Claude's arithmetic on large datasets can contain errors.",
        ],
        rubric: [
          { criterion: "Number verification", passCondition: "Every metric in Claude's output has been checked against source data" },
          { criterion: "Anomaly flagging", passCondition: "Unusual patterns are called out, not smoothed over" },
          { criterion: "Recommendation quality", passCondition: "Recommendations are specific and data-grounded, not generic advice" },
          { criterion: "Anonymization", passCondition: "No customer names or identifiers appear in any data pasted into Claude" },
          { criterion: "Estimate labeling", passCondition: "Any figure Claude estimated (rather than calculated) is clearly labeled" },
        ],
      },
    ],
  },
  {
    month: 3,
    shortTitle: "People & Coaching",
    title: "Claude for People Management & Coaching",
    subtitle: "Scaling your leadership with AI assistance",
    color: "#2EAD6B",
    objectives: [
      "Use Claude to prepare 1:1 coaching plans for different analyst personas — without pasting identifiable employee data into any prompt",
      "Build a QA review workflow comparing AI-assisted feedback to manual review, with a formal scoring rubric",
      "Generate a complete new-hire onboarding kit including scenarios, a quiz with answer key, and a reference guide",
      "Reduce meeting prep and follow-up time using Claude-assisted agendas and minutes",
    ],
    weeks: [
      {
        week: 9,
        title: "1:1 Preparation & Coaching Conversations",
        reading: [
          { text: "Learn to use Claude as a preparation tool: 'Help me plan a 1:1 with an analyst who is struggling with ticket quality'", url: "https://hbr.org/2022/11/make-the-most-of-your-one-on-one-meetings", urlLabel: "HBR: 1:1 meetings", contentKey: "w09-oneone-prep" },
          { text: "Practice generating coaching conversation scripts that balance empathy and accountability", url: null, urlLabel: null },
          { text: "Study how to ask Claude for performance improvement talking points based on specific behaviors, not personality", url: "https://www.shrm.org/topics-tools/tools/toolkits/empower-managers-strategies-tools-growth-impact", urlLabel: "SHRM manager tools", contentKey: "w09-pip-talking-points" },
          { text: "Important — data rules for coaching work: never paste employee names, protected-class data, medical or leave details, compensation figures, or unapproved disciplinary records into Claude. Use role descriptions and anonymized behavior patterns instead", url: null, urlLabel: null, contentKey: "w09-coaching-data-rules" },
        ],
        project: "Prepare Claude-assisted 1:1 plans for 3 personas: a high performer ready for L2, a struggling analyst with documentation issues, and a solid performer who is disengaged. Use anonymized behavioral descriptions only. Include talking points, open questions, and follow-up actions for each. Add a 'human review required before use' checklist as the final section.",
        skills: ["AI-assisted coaching", "Conversation planning", "Development framing"],
        scenario: "You manage 8 analysts and have 1:1s every two weeks. Prep takes 20 minutes each but the conversations vary in quality. You want to use Claude to structure better conversations — without putting anything sensitive into an AI prompt.",
        riskLevel: "High",
        difficulty: "Intermediate",
        promptPattern: `Role: You are an experienced people manager preparing for a coaching conversation.
Context: The analyst in this scenario [describe role level, tenure, and general performance context using behavioral descriptions only — no names, no HR records, no protected characteristics].
Observed behaviors (anonymized): [Describe specific, observable work behaviors — e.g. "resolution notes are consistently missing steps 3–5" not "this person is lazy"]
Task: Help me prepare for a 1:1 that addresses this pattern constructively. Generate: 3 opening questions, 2 reframing statements if the analyst gets defensive, and 3 concrete follow-up actions.
Format: Three labeled sections matching the three output types above.
Constraints: Behavior-based language only. No personality judgments. Assume positive intent.
Verify: Review output before the meeting — adapt to your actual knowledge of the person.`,
        safetyWarnings: [
          "Never paste employee names, job titles, HR notes, performance review scores, compensation data, medical or leave information, or protected-class characteristics into Claude.",
          "Use behavioral descriptions only: describe what you observe in the work, not interpretations of character or motivation.",
          "All coaching outputs from Claude must be reviewed and adapted by you before use — they are preparation aids, not ready-to-use scripts.",
        ],
        rubric: [
          { criterion: "Anonymization", passCondition: "No employee names or identifying details appear in any prompt or output" },
          { criterion: "Behavior-based framing", passCondition: "Talking points reference observable behaviors, not personality traits" },
          { criterion: "Balanced tone", passCondition: "Coaching plan includes both support and accountability — not one-sided" },
          { criterion: "Human review", passCondition: "Plan includes explicit 'review before use' checkpoint before any conversation" },
          { criterion: "Actionability", passCondition: "Follow-up actions are specific, measurable, and time-bound" },
        ],
        quiz: [
          {
            question: "You want to use Claude to prepare a 1:1 coaching plan for an analyst who has missed three deadlines. What information is safe to include in your prompt?",
            options: [
            { text: "The analyst's name, their recent performance review score, and the specific projects they missed", isCorrect: false },
            { text: "An anonymized behavioral description: 'L1 analyst, 18 months tenure, missed three project deadlines in Q3'", isCorrect: true },
            { text: "The analyst's name only — performance data should stay out of Claude", isCorrect: false },
            { text: "Nothing — Claude should not be used for people management tasks", isCorrect: false },
            ],
            rationale: "Employee names and identifiable HR data should never go into Claude. Behavioral descriptions with role context and anonymized patterns give Claude enough to generate useful coaching frameworks without exposing personal data. The name adds no value to the prompt and creates unnecessary privacy risk.",
          },
        ],
      },
      {
        week: 10,
        title: "QA Feedback & Ticket Review Assistance",
        reading: [
          { text: "Learn to use Claude to evaluate ticket handling quality by pasting resolution notes and asking for feedback", url: null, urlLabel: null, contentKey: "w10-qa-evaluation" },
          { text: "Practice generating constructive QA feedback from Claude that can be adapted for analyst coaching", url: null, urlLabel: null },
          { text: "Study how Claude can help identify patterns in quality issues across multiple tickets", url: "https://www.atlassian.com/itsm/knowledge-management/kcs", urlLabel: "KCS — Atlassian", contentKey: "w10-quality-patterns" },
          { text: "Understand the limits: Claude assesses text quality and communication patterns, not the technical correctness of resolutions without domain context — human review is required before feedback reaches analysts", url: null, urlLabel: null, contentKey: "w10-qa-limits" },
        ],
        project: "Create a Claude-powered QA review workflow with a formal rubric (categories: resolution clarity, communication tone, steps documented, follow-up actions present, SLA notes included). Feed 10 sample ticket resolution notes to Claude using this rubric and compare its assessments against your own manual review. Note where AI and human judgment diverge.",
        skills: ["AI-assisted QA", "Feedback generation", "Quality pattern recognition"],
        scenario: "You have 8 analysts and can only manually review 20% of tickets for quality. The other 80% go unreviewed. You want a consistent, scalable QA process — but you cannot let AI feedback reach analysts without a human filter.",
        riskLevel: "Medium",
        difficulty: "Intermediate",
        promptPattern: `Role: You are a QA reviewer evaluating IT support ticket resolutions.
Context: The ticket resolution below is from a support analyst. Evaluate it against our standard QA rubric.
QA rubric: 1) Resolution clarity (clear steps taken?), 2) Communication tone (professional and empathetic?), 3) Steps documented (reproducible resolution captured?), 4) Follow-up actions (next steps noted if needed?), 5) SLA notes (response and resolution times noted?).
Ticket resolution: [PASTE RESOLUTION TEXT — no analyst names or customer PII]
Task: Score each rubric category 1–5, give a brief rationale for each score, and list the top 1–2 improvement areas.
Format: Numbered list matching the 5 rubric categories, each with score and rationale. Then improvement areas.
Constraints: Focus on writing quality and process adherence — do not evaluate technical correctness without domain context.
Verify: Human manager must review Claude's assessment before any feedback goes to the analyst.`,
        safetyWarnings: [
          "Remove analyst names and customer identifiers before pasting ticket content into Claude.",
          "Claude evaluates communication quality and structure — not technical accuracy. A human must verify technical correctness before QA is complete.",
          "Never send AI-generated QA feedback directly to an analyst — always review and adapt first.",
        ],
        rubric: [
          { criterion: "Rubric consistency", passCondition: "Claude applied the 5-category rubric consistently across all 10 test tickets" },
          { criterion: "Human comparison", passCondition: "Manager compared AI scores to manual review and documented divergence points" },
          { criterion: "Improvement specificity", passCondition: "Improvement areas are specific behaviors, not generic advice like 'be clearer'" },
          { criterion: "PII protection", passCondition: "No analyst names or customer identifiers appear in any prompt or output" },
          { criterion: "Workflow gate", passCondition: "Process includes explicit human review step before feedback reaches any analyst" },
        ],
        quiz: [
          {
            question: "Claude generates QA feedback on a ticket resolution that rates it 4/5 on 'technical correctness.' Your QA specialist disagrees — the resolution was technically wrong. Who is right?",
            options: [
            { text: "Claude — it processed the full resolution text and would catch technical errors", isCorrect: false },
            { text: "Your QA specialist — Claude evaluates writing quality and structure, not technical accuracy without domain context", isCorrect: true },
            { text: "Neither — you need to run the ticket through Claude again with a more specific technical prompt", isCorrect: false },
            { text: "Depends on the ticket complexity — Claude is reliable for simple issues but not complex ones", isCorrect: false },
            ],
            rationale: "Claude evaluates text quality, structure, and communication patterns — it cannot verify whether a resolution is technically correct without domain-specific context and system access. Human technical review is always required for technical accuracy assessment. Claude's QA role is writing quality, not correctness.",
          },
        ],
      },
      {
        week: 11,
        title: "Training Content & Onboarding Material Creation",
        reading: [
          { text: "Learn to use Claude to generate training guides, quizzes, and scenario-based learning modules for support analysts", url: null, urlLabel: null, contentKey: "w11-training-content" },
          { text: "Practice creating onboarding checklists and 30-60-90 day plans with Claude", url: null, urlLabel: null },
          { text: "Study how Claude can generate role-play scenarios for common support situations", url: null, urlLabel: null, contentKey: "w11-roleplay-scenarios" },
          { text: "Explore using Claude to create FAQ documents from collections of past tickets or common questions", url: "https://www.serviceinnovation.org/kcs/", urlLabel: "KCS methodology" },
        ],
        project: "Use Claude to build a complete new-hire onboarding kit: 30-60-90 day plan, 10 role-play scenarios, a quiz on ticket handling procedures with an explicit answer key for each question, and a 'common mistakes' reference guide.",
        skills: ["Training design", "Content generation", "Onboarding acceleration"],
        scenario: "A new analyst joins in two weeks. Your current onboarding is a shared Confluence page nobody updates, a shadowing week, and a lot of 'ask me anything.' You want something that scales — especially when you're handling an incident on their first day.",
        riskLevel: "Low",
        difficulty: "Beginner",
        promptPattern: `Role: You are a training designer creating onboarding materials for IT support analysts.
Context: New hire role: L1 support analyst. Team handles [ticket types]. Tools used: [list tools]. Expected ramp time: [weeks].
Task: Generate [choose one: a 30-60-90 day onboarding plan / a role-play scenario for [situation] / a quiz on [topic] with explicit answer key / a 'common mistakes' reference guide].
Format for quiz: Question, 4 options (A–D), correct answer labeled, rationale for correct answer, why the wrong answers are wrong.
Format for role-play scenario: Situation setup, analyst role, user role, escalation trigger, success criteria.
Constraints: Written for someone with no prior support experience. No assumed knowledge.
Verify: Have a senior analyst review for technical accuracy before using in actual onboarding.`,
        safetyWarnings: [
          "Do not include proprietary system configurations, internal credentials, or actual customer data in training materials generated with Claude.",
        ],
        rubric: [
          { criterion: "Completeness", passCondition: "Onboarding kit covers all four required deliverables: plan, scenarios, quiz with answer key, common mistakes guide" },
          { criterion: "Answer key quality", passCondition: "Quiz includes explicit correct answer AND rationale for each question — not just 'answer: B'" },
          { criterion: "Role-play realism", passCondition: "Scenarios reflect actual ticket types and situations the team handles" },
          { criterion: "Experience level", passCondition: "All materials assume no prior IT support knowledge" },
          { criterion: "Technical review", passCondition: "A senior analyst has verified technical accuracy before materials are used" },
        ],
        quiz: [
          {
            question: "You use Claude to generate a new-hire onboarding quiz with 10 questions and answer keys. A senior analyst reviews it and flags that 2 answers are technically wrong for your environment. What should you do?",
            options: [
            { text: "Use the quiz as-is — two wrong answers out of ten is an acceptable error rate for training materials", isCorrect: false },
            { text: "Correct the two answers, verify the remaining 8 with the senior analyst, then use the quiz", isCorrect: true },
            { text: "Discard the Claude-generated quiz entirely and write it manually", isCorrect: false },
            { text: "Ask Claude to regenerate the quiz with more specific constraints — it will be more accurate the second time", isCorrect: false },
            ],
            rationale: "Training materials with wrong answers in the answer key teach incorrect behavior. Fix the errors, verify the rest, then use the material. Claude-generated content often needs domain-specific correction — that's expected. The workflow is: generate, review, correct, then use.",
          },
        ],
      },
      {
        week: 12,
        title: "Team Communication & Meeting Productivity",
        reading: [
          { text: "Learn to use Claude to generate team meeting agendas from a list of topics and priorities", url: "https://hbr.org/2017/07/stop-the-meeting-madness", urlLabel: "HBR: meeting research", contentKey: "w12-meeting-agendas" },
          { text: "Practice using Claude to convert meeting notes into action items, owners, and deadlines", url: "https://hbr.org/2015/07/the-condensed-guide-to-running-meetings", urlLabel: "HBR: running meetings" },
          { text: "Study how Claude can help draft team retrospective summaries and improvement proposals", url: null, urlLabel: null, contentKey: "w12-retrospectives" },
          { text: "Explore generating weekly team updates and leadership briefings with Claude's assistance", url: null, urlLabel: null },
        ],
        project: "Run a real or simulated team meeting. Use Claude to: generate the agenda beforehand, convert raw notes into structured minutes with action items, and draft the follow-up email. Measure time saved against your baseline — record your typical time for each step so the comparison is meaningful.",
        skills: ["Meeting productivity", "Action item extraction", "Communication efficiency"],
        scenario: "You run 6 recurring meetings per week. Agenda prep takes 15 minutes each, minutes take 20 minutes to write up, and follow-up emails go out a day late. You need 2 hours back per week without reducing meeting quality.",
        riskLevel: "Low",
        difficulty: "Beginner",
        promptPattern: `Role: You are an IT manager preparing for a team meeting.
Context: Meeting type: [weekly ops / retrospective / 1:1 series / leadership briefing]. Attendees: [list roles]. Duration: [N minutes]. Key priorities this week: [list 3–5 topics].
Task: [Choose one: Generate a focused agenda with time allocations / Convert these raw notes into structured minutes with owners and deadlines / Draft a follow-up email summarizing decisions and next steps].
Raw notes (for minutes/email): [PASTE NOTES — no proprietary system names or confidential data]
Format for agenda: Time block, topic, owner, desired outcome.
Format for minutes: Decisions made, Action items (owner + deadline), Parking lot (deferred items), Next meeting date.
Constraints: Action items must have a named owner and due date. Flag any open questions not resolved.
Verify: Send minutes to attendees for factual corrections before storing as the official record.`,
        safetyWarnings: [
          "Remove confidential business data, unreleased product details, or HR-sensitive discussion from meeting notes before pasting into Claude.",
        ],
        rubric: [
          { criterion: "Time measurement", passCondition: "Manager recorded baseline time for each meeting task before comparison — not estimated retrospectively" },
          { criterion: "Action item quality", passCondition: "Every action item has an owner, a task, and a deadline" },
          { criterion: "Agenda effectiveness", passCondition: "Agenda includes time allocations and desired outcome per topic, not just topic names" },
          { criterion: "Minutes accuracy", passCondition: "Minutes were shared with attendees for correction before being stored as official record" },
          { criterion: "Time saved", passCondition: "Actual time saved per meeting type is documented with before/after comparison" },
        ],
      },
    ],
  },
  {
    month: 4,
    shortTitle: "Process & Service",
    title: "Claude for Process & Service Improvement",
    subtitle: "Using AI to think strategically about operations",
    color: "#9B59B6",
    objectives: [
      "Generate complete SOPs from informal process descriptions and identify gaps in existing documentation",
      "Conduct a structured AI-assisted RCA while correctly framing Claude's output as hypothesis generation, not proof",
      "Draft an executive-ready service improvement proposal with cost-benefit analysis using Claude",
      "Identify, rank, and spec the top 3 automation candidates in your support workflow",
    ],
    weeks: [
      {
        week: 13,
        title: "Process Documentation & SOP Generation",
        reading: [
          { text: "Learn to prompt Claude to generate SOPs from informal process descriptions or verbal workflows", url: null, urlLabel: null, contentKey: "w13-sop-generation" },
          { text: "Practice creating escalation matrices, decision trees, and workflow documentation with Claude", url: "https://www.atlassian.com/software/confluence/templates/itsm-runbook", urlLabel: "Runbook template" },
          { text: "Study how Claude can help identify gaps in existing process documentation by analyzing it critically", url: "https://www.atlassian.com/itsm/problem-management/process", urlLabel: "Atlassian: problem mgmt", contentKey: "w13-documentation-gaps" },
          { text: "Explore generating RACI matrices and process ownership documents with Claude", url: null, urlLabel: null, contentKey: "w13-raci-matrices" },
        ],
        project: "Choose 3 undocumented support processes. Use Claude to generate complete SOPs for each, including scope, steps, decision points, escalation criteria, and review dates. Validate each SOP against an SOP quality checklist: clear owner, measurable steps, decision branches covered, edge cases noted, version date present.",
        skills: ["SOP generation", "Process documentation", "Gap identification"],
        scenario: "Your support team has 15 informal processes that only 2 people know. When they're out, the rest improvise. You've been asked to document all critical processes before end of quarter — with no dedicated tech writer and limited time.",
        riskLevel: "Low",
        difficulty: "Beginner",
        promptPattern: `Role: You are a technical writer converting informal process knowledge into a structured SOP.
Context: This process is used by [team role]. It is triggered by [event]. The expected outcome is [result].
Informal description: [Describe the process as you know it — step by step, including decision points and exceptions]
Task: Generate a complete SOP with: Title, Purpose, Scope, Prerequisites, Numbered steps with decision branches, Escalation criteria, Review date.
Format: Standard SOP document structure. Decision branches as clearly labeled sub-steps (Step 3a, 3b).
Constraints: Do not invent steps — if information is missing, flag it as [NEEDS INPUT: what is required]. Flag any step requiring elevated system access.
Verify: Have the team member who owns this process test-follow the SOP exactly as written and document where it fails.`,
        safetyWarnings: [
          "Do not include internal system credentials, proprietary vendor configurations, or unreleased security procedures in SOP prompts.",
        ],
        rubric: [
          { criterion: "Clear owner", passCondition: "SOP names who is responsible for executing and maintaining it" },
          { criterion: "Decision branches", passCondition: "All identified decision points have explicit yes/no or condition-based branches" },
          { criterion: "Edge cases", passCondition: "At least one edge case or exception path is documented" },
          { criterion: "Escalation criteria", passCondition: "Clear criteria for when to escalate and to whom" },
          { criterion: "Validation", passCondition: "A qualified team member has test-followed the SOP and gaps have been corrected" },
        ],
        quiz: [
          {
            question: "You paste your escalation process into Claude and ask it to identify documentation gaps. Claude's output includes several items labeled [ASSUMPTION]. How should you treat these?",
            options: [
            { text: "Ignore them — Claude labels assumptions for documentation style, not because they are uncertain", isCorrect: false },
            { text: "Investigate each assumption before acting — they represent claims that go beyond the evidence you provided", isCorrect: true },
            { text: "Remove them from the document — assumptions weaken the credibility of a gap analysis", isCorrect: false },
            { text: "Ask Claude to regenerate without assumptions so the output is cleaner", isCorrect: false },
            ],
            rationale: "When Claude labels something as an assumption, it is signaling that the claim is not supported by the information you provided. These are precisely the items that need SME validation or additional research before they influence any decision or documentation.",
          },
        ],
      },
      {
        week: 14,
        title: "Root Cause Analysis & Problem Management with Claude",
        reading: [
          { text: "Learn to use Claude as a thinking partner for root cause analysis — Claude generates hypotheses and structures analysis from the information you provide. It does not determine root cause; that requires logs, SME validation, and verified evidence", url: "https://asq.org/quality-resources/root-cause-analysis", urlLabel: "ASQ: RCA guide", contentKey: "w14-rca-thinking-partner" },
          { text: "Practice using Claude to generate fishbone diagrams (in text format) and timeline reconstructions", url: "https://asq.org/quality-resources/five-whys", urlLabel: "ASQ: Five Whys" },
          { text: "Study how Claude can help identify recurring incident patterns when provided with problem descriptions", url: "https://www.atlassian.com/itsm/problem-management", urlLabel: "Atlassian: problem mgmt" },
          { text: "Apply AI-assisted RCA rules: always lead with evidence, label assumptions explicitly, require an SME validation owner for each finding, assign a confidence score (high/medium/low/unknown) to each root cause hypothesis, and document what additional evidence would change the conclusion", url: null, urlLabel: null, contentKey: "w14-rca-rules" },
        ],
        project: "Conduct a Claude-assisted RCA on a recurring support issue. Generate: the 5-Why analysis with evidence log, a fishbone breakdown with assumptions labeled, a corrective action plan with named owners, and a confidence score for each finding. Compare against a manual RCA — note where Claude added structure and where it introduced unsupported assumptions.",
        skills: ["AI-assisted RCA", "Structured analysis", "Problem management"],
        scenario: "A VPN issue has affected 40+ users across three sites over the past 6 weeks. Each incident was resolved in isolation. Your director wants a root cause analysis and a corrective action plan before the next business review — not another incident ticket.",
        riskLevel: "Medium",
        difficulty: "Intermediate",
        promptPattern: `Role: You are an ITSM problem manager conducting structured root cause analysis.
Context: [Describe the recurring issue — symptoms, affected systems, frequency, when it started]
Evidence available: [List what you actually have: incident logs, monitoring alerts, change records, SME observations]
Task: Generate a structured RCA with:
1. 5-Why analysis — each "why" must reference evidence or be labeled [ASSUMPTION]
2. Fishbone breakdown by category: People, Process, Technology, Environment
3. Confidence score for each root cause hypothesis: High / Medium / Low / Unknown
4. Corrective action plan — each action needs an owner, deadline, and what evidence would confirm it worked
5. What additional evidence would change the conclusion
Format: Numbered sections matching the 5 items above.
Constraints: Lead with evidence. Assumptions must be labeled. Do not present a hypothesis as confirmed fact.
Verify: Each finding must have a named SME who will validate it before the RCA is published.`,
        safetyWarnings: [
          "RCA content may reference confidential system configurations, security incidents, or vendor agreements. Anonymize system names and remove credentials before pasting into Claude.",
          "Claude's RCA output is a structured hypothesis — not a confirmed root cause. All findings require SME validation and evidence review before publication.",
        ],
        rubric: [
          { criterion: "Evidence-first", passCondition: "Every root cause claim references specific evidence or is explicitly labeled as an assumption" },
          { criterion: "Confidence scores", passCondition: "Each hypothesis has a confidence rating (High/Medium/Low/Unknown) with stated reasoning" },
          { criterion: "SME validation owner", passCondition: "Each finding names a specific person responsible for validating it" },
          { criterion: "Action plan quality", passCondition: "Each corrective action has an owner, deadline, and success criterion" },
          { criterion: "Assumption distinction", passCondition: "No assumption is presented as confirmed fact anywhere in the document" },
        ],
        quiz: [
          {
            question: "Claude generates an SOP from your verbal process description. The document looks detailed and professional. What must happen before the team starts using it?",
            options: [
            { text: "Read it once for typos and accuracy, then publish — Claude's output is structured enough to be production-ready", isCorrect: false },
            { text: "A knowledgeable team member must test-follow it step-by-step and document every point of confusion or failure", isCorrect: true },
            { text: "Ask Claude to review its own SOP — it will catch gaps in what it generated", isCorrect: false },
            { text: "Get manager sign-off on the structure — technical validation can happen after the team starts using it", isCorrect: false },
            ],
            rationale: "Claude generates structure from what you described — it cannot know what you omitted. The only validation that matters is someone who knows the process following the SOP exactly as written and noting every step that fails or causes confusion.",
          },
        ],
      },
      {
        week: 15,
        title: "Service Improvement Proposals & Business Cases",
        reading: [
          { text: "Learn to use Claude to draft service improvement proposals with structured business justification", url: null, urlLabel: null, contentKey: "w15-improvement-proposals" },
          { text: "Practice generating cost-benefit analyses for support process changes (automation, tooling, staffing)", url: null, urlLabel: null },
          { text: "Study how Claude can help build executive-ready presentations from operational data and recommendations", url: null, urlLabel: null, contentKey: "w15-executive-presentations" },
          { text: "Explore using Claude to create before/after process comparisons and projected impact analyses", url: null, urlLabel: null },
        ],
        project: "Use Claude to draft a complete service improvement proposal for a real support pain point. Include: problem statement, current state, proposed solution, cost-benefit analysis, risks, and implementation timeline.",
        skills: ["Business case writing", "Proposal generation", "Executive communication"],
        scenario: "Your team handles ~200 password reset tickets per week — 18% of total volume, fully manual, zero technical challenge. You want to make the business case for a self-service reset portal. You have the data. You need the document that gets it approved.",
        riskLevel: "Low",
        difficulty: "Intermediate",
        promptPattern: `Role: You are a service improvement consultant helping an IT manager write a business case.
Context: Problem: [Describe the support pain point in one sentence]. Current state: [Volume, time spent, manual steps, cost estimate]. Stakeholder: [Who approves this — IT director, CTO, CFO].
Task: Draft a structured service improvement proposal with these sections: 1) Problem statement, 2) Current state with metrics, 3) Proposed solution, 4) Cost-benefit analysis (use my numbers below), 5) Risks and mitigations, 6) Implementation timeline with milestones.
My data: [Paste your actual numbers — ticket volume, handle time, FTE cost estimate, projected reduction]
Audience: [Name the reader's role and what they care about most — cost, risk, customer satisfaction]
Format: Professional business document. Lead with the financial impact.
Constraints: Use only the numbers I provided — do not invent figures. Flag any section where I need to add data.
Verify: Have your manager review before submitting to leadership.`,
        safetyWarnings: [
          "Do not include confidential budget figures, unreleased vendor pricing, or proprietary benchmarking data in Claude prompts.",
        ],
        rubric: [
          { criterion: "Problem quantified", passCondition: "Problem statement includes a specific metric — cost, time, volume, or error rate" },
          { criterion: "Real numbers used", passCondition: "Cost-benefit analysis uses actual team data, not Claude-generated estimates" },
          { criterion: "Audience calibration", passCondition: "Document leads with the metric the approving stakeholder cares about most" },
          { criterion: "Risks addressed", passCondition: "At least 2 risks are identified with specific mitigations" },
          { criterion: "Implementation specificity", passCondition: "Timeline has named milestones with owners, not just months and generic phases" },
        ],
        quiz: [
          {
            question: "You use Claude to generate an automation spec for ticket routing. Your developer asks you to approve it for build. What must you add before sign-off?",
            options: [
            { text: "Nothing — Claude's spec covers the happy path and that is what developers build from", isCorrect: false },
            { text: "Exception handling, a data classification note, and explicit human oversight points for edge cases", isCorrect: true },
            { text: "Ask Claude to add a risk section — it is comprehensive enough to catch its own gaps", isCorrect: false },
            { text: "Legal review — all automation projects require legal sign-off before development", isCorrect: false },
            ],
            rationale: "Automation specs from Claude reliably describe normal flow but frequently underspecify failure modes. Before developers build: what triggers an exception, who owns recovery, what data the automation touches, and where a human must remain in the loop.",
          },
        ],
      },
      {
        week: 16,
        title: "Automation Ideation & Workflow Design with Claude",
        reading: [
          { text: "Learn to use Claude as a brainstorming partner for identifying automation opportunities in support workflows", url: null, urlLabel: null, contentKey: "w16-automation-ideation" },
          { text: "Practice describing manual processes to Claude and asking it to suggest automation approaches and tools", url: null, urlLabel: null },
          { text: "Study how Claude can help evaluate automation candidates by effort, value, and risk", url: null, urlLabel: null, contentKey: "w16-automation-evaluation" },
          { text: "Explore using Claude to generate pseudo-workflows and automation specifications for developers or no-code platforms — always include a risk/controls section in any automation spec, covering what happens when the automation fails, who owns the exception path, and what data it touches", url: null, urlLabel: null, contentKey: "w16-automation-specs" },
        ],
        project: "Feed Claude your top 10 manual support processes. Have it rank automation potential, suggest approaches (low-code, scripting, ITSM workflow), and draft implementation specs for the top 3. Each spec must include: scope, trigger, steps, exception handling, data touched, and required human oversight points.",
        skills: ["Automation ideation", "Workflow specification", "Build-vs-buy analysis"],
        scenario: "Your team spends 2+ hours every Monday compiling the weekly ops report manually. Three analysts spend 30 minutes each doing ticket sorting that looks automatable. You need to identify and spec the top 3 candidates before your next budget conversation.",
        riskLevel: "Medium",
        difficulty: "Advanced",
        promptPattern: `Role: You are an IT automation consultant evaluating workflow candidates for a support team.
Manual processes to evaluate: [List your processes — one per line, with rough time estimate and frequency]
Task: For each process:
1. Automation potential score (High/Medium/Low) with one-line justification
2. Recommended approach (ITSM native workflow / no-code / scripted / AI-assisted)
3. Estimated effort (days) and estimated value (hours saved per week)
Then, for the top 3 candidates, draft an implementation spec with: Trigger, Steps, Exception handling (what breaks it and who owns the fix), Data touched (what systems and data types are accessed), Human oversight points (where a human must remain in the loop).
Constraints: Flag any spec that requires data access not mentioned in the process description. Risk section is required for every spec.
Verify: Have your security team review specs that involve external system integrations before development begins.`,
        safetyWarnings: [
          "Automation specs describe how data flows through systems. Do not include authentication details, API keys, or proprietary integration configurations in Claude prompts.",
          "Any spec that touches customer data, employee data, or financial systems must be reviewed by your security team before development begins.",
        ],
        rubric: [
          { criterion: "Prioritization rationale", passCondition: "Top 3 are justified by effort vs. value comparison, not picked arbitrarily" },
          { criterion: "Exception handling", passCondition: "Each spec describes what breaks the automation and who owns recovery" },
          { criterion: "Data classification", passCondition: "Each spec identifies what data types the automation touches" },
          { criterion: "Human oversight", passCondition: "Every spec with customer or financial data touch names a human oversight point" },
          { criterion: "Security review", passCondition: "Specs involving system integrations have been reviewed by your security team" },
        ],
      },
    ],
  },
  {
    month: 5,
    shortTitle: "Advanced",
    title: "Advanced Claude Techniques & Integration",
    subtitle: "Going beyond basic prompting",
    color: "#E67E22",
    objectives: [
      "Build multi-step prompt chains for complex operational workflows like weekly reporting",
      "Set up a Claude Project as a persistent knowledge base using your team's actual SOPs and standards",
      "Analyze files and generate insight reports from real ticket and performance data",
      "Evaluate and compare AI tools using a structured matrix, with a defined review cadence built in",
    ],
    weeks: [
      {
        week: 17,
        title: "Advanced Prompting: System Prompts, Roles & Multi-Step",
        reading: [
          { text: "Study system prompts and how they persistently shape Claude's behavior throughout a conversation", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts", urlLabel: "Anthropic docs", contentKey: "w17-system-prompts" },
          { text: "Learn multi-step prompting: break complex tasks into sequential prompts that build on each other", url: "https://docs.anthropic.com/en/prompt-library/library", urlLabel: "Prompt library", contentKey: "w17-multi-step-prompting" },
          { text: "Practice role-based prompting: 'You are a senior ITSM consultant reviewing our incident process'", url: null, urlLabel: null },
          { text: "Learn structured reasoning techniques: use explicit output formats with reasoning sections, ask Claude to flag assumptions and confidence levels, require a verification step, and use XML-style tags like <context>, <constraints>, <output_format>, and <risk_check> to get consistent, auditable responses for operational decisions", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/extended-thinking", urlLabel: "Extended thinking", contentKey: "w17-structured-reasoning" },
        ],
        project: "Build a multi-step prompt chain for weekly operations reporting: Step 1 — summarize ticket data, Step 2 — identify trends and flag assumptions, Step 3 — generate leadership narrative with confidence levels, Step 4 — create action recommendations with risk notes. Test end-to-end and document where structured reasoning improved output quality.",
        skills: ["Advanced prompting", "System prompts", "Structured reasoning"],
        scenario: "Your single-turn ops report prompt works, but it produces inconsistent output and misses the confidence-flagging you need. You're ready to chain steps, lock in context with a system prompt, and get output your director can trust.",
        riskLevel: "Low",
        difficulty: "Advanced",
        promptPattern: `System prompt (set once per session):
You are an IT operations analyst for [team description]. You produce structured reports with labeled assumptions, confidence levels (High/Medium/Low), and a verification step for all metrics. You never present uncertain information as fact.

Step 1 prompt — Data summary:
Summarize the following ticket data. Flag any rows with data quality issues.
[PASTE DATA]

Step 2 prompt — Trend analysis:
Based on the summary above, identify: volume trends, SLA patterns, and anomalies. Label each finding as [EVIDENCE-BASED] or [ASSUMPTION]. Assign a confidence level.

Step 3 prompt — Leadership narrative:
Convert the analysis above into an executive summary. Lead with business impact. Flag any confidence-Low findings separately.

Step 4 prompt — Recommendations:
Based on Steps 1–3, generate 3 actionable recommendations. Each must include: what, why (linked to a finding), risk note, and owner.`,
        safetyWarnings: [
          "Multi-step chains amplify errors — if Step 1 data is wrong, Steps 2–4 will be wrong. Review each step's output before passing it forward.",
        ],
        rubric: [
          { criterion: "Chain integrity", passCondition: "Each step was reviewed before feeding the next — no unreviewed output passed forward" },
          { criterion: "Structured output", passCondition: "Final report uses consistent section headers and labeled confidence levels" },
          { criterion: "Assumption labeling", passCondition: "Every non-evidence-based claim is labeled [ASSUMPTION] or equivalent" },
          { criterion: "Confidence levels", passCondition: "All trend findings have explicit High/Medium/Low/Unknown confidence ratings" },
          { criterion: "Verification step", passCondition: "Metrics in the final narrative have been checked against source data" },
        ],
        quiz: [
          {
            question: "You build a 4-step prompt chain for weekly ops reporting. The Step 2 trend analysis contains an error — a volume spike that doesn't exist in the source data. What is the impact on Steps 3 and 4?",
            options: [
            { text: "Steps 3 and 4 will be unreliable because they were built on Step 2's incorrect analysis", isCorrect: true },
            { text: "Steps 3 and 4 reset to fresh context — each step is independent", isCorrect: false },
            { text: "Step 4 will catch the error — later steps in a chain are better calibrated than earlier ones", isCorrect: false },
            { text: "Re-run Step 1 with a cleaner prompt to prevent the error from propagating forward", isCorrect: false },
            ],
            rationale: "In a multi-step chain, errors compound. If Step 2's analysis is wrong, Step 3's narrative is built on wrong analysis, and Step 4's recommendations are built on a wrong narrative. Each step's output must be reviewed before it feeds the next.",
          },
        ],
      },
      {
        week: 18,
        title: "Claude Projects, Memory & Organizational Knowledge",
        reading: [
          { text: "Study Claude Projects: how to create persistent workspaces with uploaded documents and custom instructions", url: "https://support.anthropic.com/en/articles/9517075-what-are-projects", urlLabel: "Anthropic support", contentKey: "w18-claude-projects" },
          { text: "Learn how to upload SOPs, runbooks, and team standards into a Claude Project so it answers with your context", url: null, urlLabel: null, contentKey: "w18-project-setup" },
          { text: "Practice building a support operations Project with your team's processes, metrics definitions, and templates — data rules: do not upload customer PII, employee records, credentials, proprietary vendor contracts, or unapproved IP. Use anonymized and approved operational documents only", url: null, urlLabel: null },
          { text: "Understand memory features and how Claude can retain information across conversations when enabled", url: null, urlLabel: null },
        ],
        project: "Create a Claude Project for your support team: upload 5+ operational documents (SOPs, escalation matrix, SLA definitions, quality rubric — approved, non-sensitive versions only). Test 10 questions against it and verify it responds with your team's actual standards rather than generic answers.",
        skills: ["Claude Projects", "Knowledge management", "Contextual AI"],
        scenario: "Your team answers the same SLA, escalation policy, and triage standard questions 20+ times per week. You want Claude to answer these using your actual standards — not generic IT knowledge. Claude Projects makes this possible.",
        riskLevel: "High",
        difficulty: "Intermediate",
        promptPattern: `Project setup (do once):
Custom instructions: You are a support operations assistant for [team name]. When answering questions, always reference the uploaded documents first. If the answer is not in the documents, say so explicitly rather than drawing on general knowledge.
Documents to upload: [List approved, non-sensitive operational docs — SOPs, SLA definitions, escalation matrix, quality rubric]

Query prompt (for team use):
Based on our team's documented standards, [question about process, SLA, escalation, or quality]
If the answer is not in our documents, tell me what's missing.`,
        safetyWarnings: [
          "Never upload: customer PII, employee records, credentials or API keys, proprietary vendor contracts, financial records, unapproved security configurations, or any document under NDA.",
          "Review each document before upload — the question is not 'is this internal?' but 'would I be comfortable if this document appeared in a data incident report?'",
          "Claude Projects availability and data handling varies by plan. Verify your organization's Claude plan data retention policies before uploading any operational documents.",
        ],
        rubric: [
          { criterion: "Document selection", passCondition: "All uploaded documents are approved, non-sensitive, and vetted before upload" },
          { criterion: "Custom instructions", passCondition: "Project is configured to reference documents first and flag when the answer is not in the docs" },
          { criterion: "Test coverage", passCondition: "10 test questions were asked and responses verified against the source documents" },
          { criterion: "Accuracy check", passCondition: "At least one question was asked where the answer is NOT in the documents — and Claude correctly flagged this" },
          { criterion: "Data rules applied", passCondition: "No prohibited data categories appear in any uploaded document" },
        ],
        quiz: [
          {
            question: "You want to upload your team's SLA policy to a Claude Project so analysts can query it. Which version is appropriate to upload?",
            options: [
            { text: "The current live version including all amendments and last year's compliance exceptions", isCorrect: false },
            { text: "The approved, non-sensitive version with customer-specific SLA terms, named employee obligations, and confidential amendments removed", isCorrect: true },
            { text: "Any version — Claude Projects are private to your organization", isCorrect: false },
            { text: "Do not upload SLA policies — governance documents should never be in a Claude Project", isCorrect: false },
            ],
            rationale: "'Private to your organization' varies by Claude plan and data handling configuration. The safe default is to upload only approved, non-sensitive documents. Confidential amendments, customer-specific terms, and named employee obligations should be stripped before upload.",
          },
        ],
      },
      {
        week: 19,
        title: "Claude with Files: Spreadsheets, PDFs & Reports",
        reading: [
          { text: "Learn to upload ticket exports, CSV files, and spreadsheets to Claude for analysis and summarization", url: "https://docs.anthropic.com/en/docs/build-with-claude/files", urlLabel: "Files API", contentKey: "w19-file-analysis" },
          { text: "Practice asking Claude to analyze PDF reports, extract key findings, and generate comparison tables", url: null, urlLabel: null },
          { text: "Study how Claude can create formatted documents, presentation outlines, and structured outputs from raw data", url: null, urlLabel: null },
          { text: "Understand current file handling practicalities: Claude handles most common file types (PDF, CSV, DOCX, images) but has context-window limits — for large files, split into sections, summarize chunks separately, or extract the relevant rows before uploading. When in doubt, test with a small sample first", url: "https://docs.anthropic.com/en/docs/build-with-claude/context-windows", urlLabel: "Context windows", contentKey: "w19-file-limits" },
        ],
        project: "Upload a month of anonymized ticket data to Claude. Generate: a trend analysis report, a top-10 recurring issues list, an SLA performance summary, and 5 targeted improvement recommendations with supporting data. Verify all metrics against your source before publishing.",
        skills: ["File analysis", "Data-to-insight", "Report automation"],
        scenario: "You have a full month of ticket data in a CSV export. Leadership wants slide-ready analysis by Thursday. Your BI tool requires a 2-day ticket to run a new report. You have Claude and an afternoon.",
        riskLevel: "Medium",
        difficulty: "Intermediate",
        promptPattern: `Role: You are a data analyst reviewing IT support performance data for leadership.
File context: This is [month] ticket data. Columns include: [list relevant columns]. Data has been anonymized — customer names replaced with generic IDs.
Task: Produce a slide-ready monthly performance report with:
1. Volume summary — total tickets, by category, trend vs. prior month (provide prior month data below)
2. SLA performance — attainment by priority tier
3. Top 10 recurring issue types by ticket count
4. 3–5 anomalies or patterns worth leadership attention
5. 5 targeted improvement recommendations, each tied to a specific data finding
Flag: If you cannot compute a figure precisely from the data provided, say so rather than estimating.
Prior month data: [Paste for comparison, or note "not available"]
Verify: Cross-check all metrics against source data before including in any report.`,
        safetyWarnings: [
          "Anonymize all data before uploading — replace customer names, email addresses, and account identifiers with generic labels.",
          "Verify every metric Claude produces against your source data before presenting to leadership.",
          "For files over ~100 rows, test with a small sample first to confirm Claude is parsing the format correctly.",
        ],
        rubric: [
          { criterion: "Anonymization complete", passCondition: "No customer names or identifiers appear in uploaded data or Claude output" },
          { criterion: "Metric verification", passCondition: "All leadership-facing numbers have been checked against source data" },
          { criterion: "Format test", passCondition: "File format was tested with a small sample before running the full analysis" },
          { criterion: "Recommendations grounded", passCondition: "Each recommendation references a specific data finding, not general best practice" },
          { criterion: "Uncertainty flagged", passCondition: "Any metric Claude could not compute precisely is marked as estimated or flagged" },
        ],
        quiz: [
          {
            question: "Claude analyzes your uploaded ticket file and reports SLA attainment at 94%. Your source data shows 91%. What figure do you include in the leadership report?",
            options: [
            { text: "94% — Claude processed all the data and its calculation is more thorough than spot-checking", isCorrect: false },
            { text: "91% — your source data is authoritative; Claude's figure must be verified before reporting", isCorrect: true },
            { text: "Report both and explain the discrepancy to leadership", isCorrect: false },
            { text: "Average the two figures to account for both methods", isCorrect: false },
            ],
            rationale: "Claude's arithmetic is approximate even when working with uploaded files. Your source data is always the authoritative figure for anything going into a leadership report.",
          },
        ],
      },
      {
        week: 20,
        title: "Evaluating AI Tools Beyond Claude",
        reading: [
          { text: "Study the AI tool landscape for IT support: Copilot, Gemini, ChatGPT — understand where each excels", url: null, urlLabel: null, contentKey: "w20-ai-landscape" },
          { text: "Learn about AI features built into ITSM platforms: ServiceNow Virtual Agent, Jira AI, Freshdesk Freddy", url: null, urlLabel: null, contentKey: "w20-itsm-ai-features" },
          { text: "Review how AI-powered ticket routing, sentiment analysis, and auto-categorization work in production tools", url: null, urlLabel: null },
          { text: "Understand the difference between conversational AI (Claude) and embedded AI (platform-native features)", url: null, urlLabel: null, contentKey: "w20-ai-types" },
        ],
        project: "Create an AI tool evaluation matrix for your support operation. Compare 4+ tools across: use cases, cost, integration, data privacy, accuracy, and team adoption effort. Include a recommendation — and critically, add a review date 6 months out, since the AI tool landscape changes rapidly enough that any evaluation older than 6 months should be revisited before making procurement decisions.",
        skills: ["AI landscape awareness", "Tool evaluation", "Strategic selection"],
        scenario: "Your CTO asks for a recommendation: should the team expand its AI footprint beyond Claude, and which tools are worth evaluating? You have 30 days and no dedicated analyst. You need a structured, defensible comparison.",
        riskLevel: "Low",
        difficulty: "Advanced",
        promptPattern: `Role: You are an IT technology evaluator building an AI tool comparison for a support team.
Tools to evaluate: [List 4+ tools — e.g. Claude, Microsoft Copilot, Gemini, ChatGPT, ServiceNow AI, Jira AI]
Evaluation criteria: 1) Use cases supported, 2) Cost model, 3) Integration with our ITSM platform ([name it]), 4) Data privacy and residency controls, 5) Accuracy benchmarks available, 6) Team adoption effort.
Task: Build a structured evaluation matrix scoring each tool 1–5 on each criterion. Include a brief rationale per score. Then provide a recommendation with justification.
Important: Add a "Review date" section — note that AI tool capabilities change rapidly and this evaluation should be revisited in 6 months.
Constraints: Flag any criterion where public information is insufficient to score confidently. Do not score tools you have no current information about.`,
        safetyWarnings: [
          "Do not include confidential vendor pricing from ongoing procurement discussions or proprietary benchmarking data in evaluation prompts.",
        ],
        rubric: [
          { criterion: "Criteria coverage", passCondition: "Matrix scores all 6 criteria for each tool with rationale" },
          { criterion: "Data privacy scored", passCondition: "Data privacy and residency controls are explicitly evaluated — not left blank" },
          { criterion: "Uncertainty flagged", passCondition: "Any criterion scored without sufficient public information is marked as estimated" },
          { criterion: "Recommendation justified", passCondition: "Final recommendation links back to specific matrix scores, not just preference" },
          { criterion: "Review date included", passCondition: "Document includes a defined 6-month review date with criteria for re-evaluation" },
        ],
      },
    ],
  },
  {
    month: 6,
    shortTitle: "Strategy & Gov.",
    title: "AI Strategy, Governance & Team Adoption",
    subtitle: "Leading AI adoption for your support organization",
    color: "#C0392B",
    objectives: [
      "Build a phased 6-month AI adoption roadmap with a readiness assessment and measurable success metrics",
      "Design and deliver a Claude training workshop with a reusable prompt library for your analysts",
      "Create a governance framework covering data classification, human-review checkpoints, regulatory considerations, and incident response",
      "Produce a complete AI-augmented support operating model that integrates all prior course outputs",
    ],
    weeks: [
      {
        week: 21,
        title: "Building an AI Adoption Roadmap for Support",
        reading: [
          { text: "Study how to assess AI readiness in a support team: skills, culture, tooling, data maturity", url: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-learning-organization-how-to-accelerate-ai-adoption", urlLabel: "McKinsey: AI adoption", contentKey: "w21-ai-readiness" },
          { text: "Learn to create a phased AI adoption plan: quick wins, medium-term projects, long-term transformation", url: null, urlLabel: null, contentKey: "w21-adoption-planning" },
          { text: "Review change management principles applied to AI rollout in operations teams", url: "https://www.prosci.com/methodology/adkar", urlLabel: "Prosci ADKAR" },
          { text: "Understand how to measure AI adoption success: time saved, quality improvement, team satisfaction, cost impact", url: "https://sloanreview.mit.edu/article/10-urgent-ai-takeaways-for-leaders/", urlLabel: "MIT Sloan: AI leaders" },
        ],
        project: "Draft a 6-month AI adoption roadmap for your support team. Include: readiness assessment, phased use cases, training plan, success metrics, risk mitigations, and governance guardrails.",
        skills: ["AI strategy", "Adoption planning", "Change management"],
        scenario: "Your CIO has approved AI tool deployment for the support team. They want a 6-month roadmap before the next board meeting. You have 3 weeks to produce something credible, phased, and measurable.",
        riskLevel: "Low",
        difficulty: "Advanced",
        promptPattern: `Role: You are an AI adoption strategist building a 6-month roadmap for an IT support team.
Team context: [Team size, current tools, AI experience level (none/some/advanced), ticket volume, top pain points]
Task: Generate a 6-month AI adoption roadmap with:
Month 1–2 (Quick wins): Use cases the team can try immediately with low risk and fast feedback
Month 3–4 (Build): Workflow integrations and process improvements requiring moderate setup
Month 5–6 (Optimize): Governance, measurement, and scaling what worked
For each phase include: specific use cases, training required, success metric, risk mitigation, and who owns it.
Also include: readiness assessment questions to complete before Month 1, and governance guardrails that apply throughout.
Format: Timeline table followed by section details.
Constraints: Use cases must be achievable without budget approval for new tools unless flagged. Flag any use case requiring IT infrastructure changes.`,
        safetyWarnings: [
          "Do not include confidential budget allocations, unreleased organizational decisions, or personal performance data about team members in adoption roadmap prompts.",
        ],
        rubric: [
          { criterion: "Readiness assessment", passCondition: "Roadmap includes a pre-Month 1 readiness checklist covering skills, tools, and data maturity" },
          { criterion: "Phased realism", passCondition: "Quick wins in Month 1–2 are achievable without additional budget or infrastructure" },
          { criterion: "Measurable metrics", passCondition: "Each phase has a specific, measurable success metric — not 'improved efficiency'" },
          { criterion: "Governance guardrails", passCondition: "Data safety rules and human-review requirements are specified, not treated as an afterthought" },
          { criterion: "Risk mitigations", passCondition: "Each phase identifies at least one risk and a specific mitigation" },
        ],
        quiz: [
          {
            question: "An analyst asks whether they can paste the internal post-incident report — including internal system names and root cause details — into Claude to help draft external customer communication. What is the right answer?",
            options: [
            { text: "Yes — Claude Projects are secure and incident communication is an approved use case", isCorrect: false },
            { text: "No — remove internal system names, named individuals, and root cause details first, then paste the cleaned narrative", isCorrect: true },
            { text: "No — post-incident reports must never be used with AI tools under any circumstances", isCorrect: false },
            { text: "Yes, but only in a private browsing window for extra security", isCorrect: false },
            ],
            rationale: "The question is not whether Claude can help with incident communication — it can. The question is what gets pasted. Internal system names, root cause hypotheses, and named individuals are confidential. The cleaned customer-facing narrative is safe to use.",
          },
        ],
      },
      {
        week: 22,
        title: "Teaching Your Team to Use Claude Effectively",
        reading: [
          { text: "Study how to design a practical Claude training session for support analysts: hands-on, scenario-based", url: null, urlLabel: null, contentKey: "w22-training-design" },
          { text: "Learn common mistakes new AI users make: over-trusting output, poor prompts, sharing sensitive data, ignoring verification", url: "https://www.anthropic.com/policy", urlLabel: "Anthropic usage policy", contentKey: "w22-common-mistakes" },
          { text: "Review how to create a team prompt library with tested, approved prompts for common tasks", url: "https://docs.anthropic.com/en/prompt-library/library", urlLabel: "Prompt library" },
          { text: "Understand how to track team AI usage and measure productivity improvements", url: null, urlLabel: null, contentKey: "w22-measuring-adoption" },
        ],
        project: "Build a complete Claude training workshop for your team: a 1-hour session plan, 10 hands-on exercises, a prompt library of 15+ tested prompts, and a quick-reference card for daily use.",
        skills: ["AI training design", "Prompt library curation", "Team enablement"],
        scenario: "Your 8 analysts range from 'already using Claude daily' to 'never touched it.' You have one 60-minute slot to bring everyone to a safe, productive baseline. What you build this week gets reused every time a new analyst joins.",
        riskLevel: "Low",
        difficulty: "Intermediate",
        promptPattern: `Role: You are an L&D specialist designing an AI training session for IT support analysts.
Audience: [Team size, experience range, primary ticket types they handle]
Task: Generate a complete 1-hour Claude training workshop with:
1. Session agenda with time allocations (total: 60 minutes)
2. 10 hands-on exercises — one per common support task type, using mock data only
3. A quick-reference card: 5 do's and 5 don'ts for daily Claude use
4. A prompt library template with placeholders for: [list 5 use cases most relevant to your team]
Constraints: Every exercise uses mock or hypothetical data — no real tickets, customer names, or employee records. Each exercise has a clear success criterion so analysts know when they've done it right.
Verify: Run the session yourself first, or pilot with one analyst — adjust timing before the full team session.`,
        safetyWarnings: [
          "All training exercises must use mock or hypothetical data. Never use real ticket data, real customer names, or real employee information in training scenarios.",
        ],
        rubric: [
          { criterion: "Mock data only", passCondition: "All 10 exercises use mock or hypothetical data exclusively — no real tickets or names" },
          { criterion: "Exercise clarity", passCondition: "Each exercise has a clear success criterion — analysts know when they're done" },
          { criterion: "Prompt library coverage", passCondition: "Library includes tested prompts for at least 5 different support use cases" },
          { criterion: "Safety coverage", passCondition: "Quick-reference card explicitly lists what NOT to paste into Claude" },
          { criterion: "Piloted", passCondition: "Session was run once (self or with one analyst) and timing was adjusted before full delivery" },
        ],
        quiz: [
          {
            question: "Your analyst uses Claude to generate a QA score of 4.5/5 for a ticket resolution and forwards it directly to the analyst who wrote the ticket as official feedback. What is the problem?",
            options: [
            { text: "Nothing — the score is based on objective rubric criteria and is fully defensible", isCorrect: false },
            { text: "The feedback was sent without manager review — AI-generated QA output must be reviewed and contextualized before it reaches an analyst", isCorrect: true },
            { text: "The scoring scale is wrong — 1–10 is required for official feedback", isCorrect: false },
            { text: "QA feedback should only be delivered verbally, not in writing", isCorrect: false },
            ],
            rationale: "AI-generated quality scores lack context, relationship awareness, and developmental framing. Sending raw AI output as official feedback bypasses the manager's role. The workflow is: Claude scores → manager reviews and contextualizes → manager delivers.",
          },
        ],
      },
      {
        week: 23,
        title: "AI Governance, Ethics & Risk for Support Leaders",
        reading: [
          { text: "Study data governance for AI: what can be shared with AI tools, what requires anonymization, what is prohibited", url: "https://www.nist.gov/itl/ai-risk-management-framework", urlLabel: "NIST AI RMF", contentKey: "w23-data-governance" },
          { text: "Learn about AI bias, hallucination mitigation, and quality control in operational contexts", url: null, urlLabel: null, contentKey: "w23-ai-risks" },
          { text: "Review regulatory considerations: GDPR implications for processing EU personal data with AI tools, HIPAA rules for any health-adjacent IT support, SOX controls for change management in finance-adjacent environments — verify your organization's specific obligations with your legal/compliance team", url: "https://gdpr.eu/what-is-gdpr/", urlLabel: "GDPR overview" },
          { text: "Understand how to create an AI incident response plan for when AI outputs cause operational issues", url: null, urlLabel: null, contentKey: "w23-ai-incident-response" },
        ],
        project: "Create a comprehensive AI governance framework for your support team: data classification rules (what can/cannot be pasted into AI tools), approved/prohibited use cases, quality review requirements with named human-review checkpoints, AI incident procedures, and an ethics checklist. Have your manager or legal contact review before finalizing.",
        skills: ["AI governance", "Risk management", "Compliance awareness"],
        scenario: "Your security team flagged that analysts are using Claude inconsistently — some paste sensitive data, others don't know what's allowed. You need a governance framework before the CIO expands AI tool access further. Legal wants to see it first.",
        riskLevel: "High",
        difficulty: "Advanced",
        promptPattern: `Role: You are an IT governance advisor drafting an AI governance policy for an IT support team.
Context: Team size: [N analysts]. Tools in use: [list AI tools]. Data types the team works with: [ticket descriptions, customer names, employee HR data, financial records, infrastructure configs — list what applies].
Task: Draft a governance framework with these sections:
1. Data classification table: for each data type above, state whether it can be pasted into AI tools (Allowed / Anonymize first / Prohibited)
2. Approved use cases: specific activities where AI use is permitted
3. Prohibited use cases: specific activities where AI use is not permitted
4. Quality review requirements: which output types require human review before use, and who performs the review
5. AI incident procedures: what to do when an AI output causes an operational problem
6. Ethics checklist: 5-point check analysts run before using AI output in any customer-facing or HR context
Format: Policy document with numbered sections.
Constraints: Plain language. Practical examples under every rule. Explicit human-review checkpoints.
Verify: This document must be reviewed by your manager, your InfoSec lead, and a legal or compliance contact before it is published or distributed to the team.`,
        safetyWarnings: [
          "This governance framework is a draft — it must be reviewed by your InfoSec team and legal/compliance contact before it is finalized or distributed.",
          "Do not include confidential internal security policies, unreleased compliance assessments, or proprietary legal analysis in governance framework prompts.",
        ],
        rubric: [
          { criterion: "Data classification table", passCondition: "Every data type the team works with is classified as Allowed / Anonymize first / Prohibited" },
          { criterion: "Human-review checkpoints", passCondition: "Named reviewers are specified for every high-stakes output type" },
          { criterion: "Incident procedures", passCondition: "Framework describes what an analyst should do when they believe AI output caused a problem" },
          { criterion: "Ethics checklist", passCondition: "5-point checklist is specific and actionable — not generic ethical principles" },
          { criterion: "Legal review", passCondition: "Framework has been reviewed by a legal or compliance contact before distribution" },
        ],
        quiz: [
          {
            question: "Your governance framework approves Claude for ticket categorization. An analyst asks whether they can also paste a customer's account history into Claude to provide better support context. What should the answer be?",
            options: [
            { text: "Yes — if ticket categorization is approved, related support tasks are implicitly covered", isCorrect: false },
            { text: "No — customer account history is likely PII and this use case is not in the approved list; it requires explicit review before use", isCorrect: true },
            { text: "The governance framework doesn't cover this — use your judgment", isCorrect: false },
            { text: "Ask the customer's permission first, then it is allowed under consent rules", isCorrect: false },
            ],
            rationale: "Governance frameworks define specific approved use cases, not categories of tasks. Ticket categorization using anonymized text is different from pasting customer account data. Any use case not explicitly in the approved list requires review before use.",
          },
        ],
      },
      {
        week: 24,
        title: "Capstone: Your AI-Augmented Support Operating Model",
        reading: [
          { text: "Review everything built in the previous 23 weeks and identify the highest-impact AI use cases for your operation", url: null, urlLabel: null, contentKey: "w24-capstone-synthesis" },
          { text: "Study how leading support organizations integrate AI into their daily operations without over-reliance", url: null, urlLabel: null, contentKey: "w24-operating-model" },
          { text: "Reflect on your personal AI skill growth, team readiness, and organizational AI maturity", url: null, urlLabel: null },
        ],
        project: "Build your capstone: a complete AI-augmented IT Support Manager operating model. Required components: AI use case catalog (minimum 10 use cases with owner, tool, data rules, and review step), prompt library (minimum 15 tested prompts), governance framework (from W23), training program outline (from W22), adoption roadmap (from W21), metrics dashboard design with baseline and target values, and a 1-page leadership brief. Self-assess your capstone using this rubric: business value demonstrated (is each use case tied to a metric?), data governance addressed (is every use case covered by a data rule?), human-review checkpoints defined (is there a named reviewer for every high-stakes output?), success metrics measurable (can you actually track them?), rollout plan realistic (does it have owners and dates?), training design included (can an analyst follow it?), risk controls present (what happens when AI output is wrong?).",
        skills: ["Operating model design", "AI leadership", "Strategic synthesis"],
        scenario: "You've spent 23 weeks building skills, artifacts, and frameworks. Week 24 is the synthesis: turn everything you've built into a single coherent operating model your director can put in front of the board.",
        riskLevel: "Low",
        difficulty: "Advanced",
        promptPattern: `Role: You are an IT operations leader synthesizing an AI-augmented operating model for your support team.
Assets built across this course: [List what you've completed — use case catalog, prompt library, governance framework, training program, adoption roadmap]
Task: Help me assemble these into a single coherent operating model document with:
1. Executive summary — what this operating model enables (1 page)
2. AI use case catalog — table format: use case, tool, owner, data rules, review step, metric
3. Prompt library index — list of tested prompts by use case category
4. Governance summary — key rules from our framework, condensed for leadership
5. Training program outline — how we will onboard new analysts
6. Metrics dashboard — KPIs tracked, baseline values, 6-month targets
7. Rollout plan — phases, owners, dates
Format: Executive document with clear sections. Use the leadership brief as the cover page.
Constraints: Only include use cases that have been tested. Flag any section where I still need to fill in data.`,
        safetyWarnings: [
          "The capstone document may reference internal processes, team structure, and strategic plans. Do not include confidential budget figures, unreleased organizational decisions, or customer data. Have your manager review before sharing beyond your immediate team.",
        ],
        rubric: [
          { criterion: "Business value", passCondition: "Every use case is tied to a specific metric — time saved, quality improvement, or cost reduction" },
          { criterion: "Data governance", passCondition: "Every use case references a data rule from the governance framework" },
          { criterion: "Human-review checkpoints", passCondition: "Every high-stakes output type has a named reviewer" },
          { criterion: "Measurable metrics", passCondition: "All KPIs have baseline values and 6-month targets that can actually be measured" },
          { criterion: "Rollout realism", passCondition: "Rollout plan has named owners and specific dates — not generic phases" },
          { criterion: "Training included", passCondition: "Operating model includes how new analysts will be trained to use it" },
          { criterion: "Risk controls", passCondition: "Document addresses what happens when AI output is wrong and who is responsible" },
        ],
      },
    ],
  },
];
