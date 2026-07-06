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
          { text: "Understand what large language models are: prediction engines trained on text, not databases or search engines", url: "https://docs.anthropic.com/en/docs/overview", urlLabel: "Anthropic docs", content: `## What Claude actually does under the hood

Imagine your most experienced L2 analyst — they've read thousands of incident reports, runbooks, and vendor docs. When you describe a problem, they pattern-match against everything they've absorbed and generate a plausible response. That's the closest analogy to how Claude works.

Claude was trained on a vast body of text. During training it learned statistical relationships between words, concepts, and structures. When you send it a prompt, it predicts the most useful continuation of that text — drawing on patterns from its training, not from a live database or the internet.

This is why Claude can draft a solid post-incident report without ever seeing your ticketing system: it has seen enough incident reports to know what one looks like. It's also why it can hallucinate a plausible-sounding but wrong server name — it's completing a pattern, not looking something up.

**Manager takeaway: treat Claude like a very well-read analyst who works entirely from memory — fast and capable, but you always verify the facts before they go into production.`},
          { text: "Learn the difference between Claude and retrieval tools like Google or a knowledge base — base Claude generates responses from training data, it does not look things up. Important: Claude can also be configured with tools like web search, file upload, and Claude Projects, which do enable retrieval. Know which mode your org has enabled before making assumptions about what Claude can access", url: null, urlLabel: null, content: `## Claude vs your knowledge base: not the same tool

Your Confluence or ServiceNow KB retrieves documents — you search, it returns what exists. Claude generates responses — there's no document it's pulling from, only patterns it learned during training.

This distinction matters operationally. When an analyst searches your KB for "VPN error 691," they get your org's specific resolution steps. When they ask Claude the same question in base chat mode, Claude generates a plausible answer from general training data — which may not match your environment at all.

However, Claude's operating mode changes everything. With file upload, Claude can read a document you paste in. With Claude Projects, it can reference a persistent set of your team's SOPs and definitions. With web search enabled, it can retrieve current information. The capabilities vary significantly depending on what your organisation has turned on.

Before rolling Claude out to your team, confirm which mode is active. The question to ask your IT or vendor contact: "Is this base chat only, or does our instance have Projects, file upload, or web search enabled?"

**Manager takeaway: base Claude generates — it does not retrieve. Know your org's configuration before making promises to your team about what Claude can access.`},
          { text: "Study Claude's strengths: drafting, summarizing, analyzing, brainstorming, rewriting, and structured reasoning", url: null, urlLabel: null, content: `## Where Claude earns its keep in IT support

Claude's strongest suits map directly onto the work that consumes most of a support manager's day.

**Drafting** is where most managers see the fastest return. Outage communications, coaching scripts, SOP drafts, escalation emails — Claude produces a solid first draft in seconds. You edit, not write from scratch.

**Summarizing** is the second high-value use. Paste a 40-message Slack thread from a P1 incident and ask Claude to extract a timeline, decisions made, and open actions. What took 20 minutes now takes two.

**Analyzing** works well for structured text: ticket exports, survey responses, QA notes. Ask Claude to identify patterns, surface outliers, or compare two sets of data. It won't run SQL, but it reasons well over text-format data you paste in.

**Rewriting** is underused. Your team's KB articles that are technically accurate but confusing to read? Claude can rewrite them for clarity without changing the content — faster than a documentation review cycle.

**Manager takeaway: Claude's highest ROI in support ops is on written output — drafting, summarizing, and rewriting. Start there before exploring the more complex use cases.`},
          { text: "Understand Claude's limitations in base chat mode: no real-time data, no memory between conversations, hallucination risk, knowledge cutoff. Many of these limitations change when Projects, web search, or tool-calling are enabled — so always verify which Claude configuration you are using", url: null, urlLabel: null, content: `## What Claude cannot do — and what to watch for

Your team needs to understand Claude's failure modes before they rely on it. There are four that matter in IT support operations.

**No real-time data.** In base chat mode, Claude has no access to the internet, your ticketing system, or any live data source. If an analyst asks "is there an active outage at AWS right now?" Claude will generate a plausible-sounding response — which could be entirely fabricated. This limitation is removed if your instance has web search enabled.

**No memory between conversations.** Each new conversation starts completely fresh. Claude does not remember what you discussed yesterday, what your SLA thresholds are, or what your team decided in a previous session. This is addressed by Claude Projects, which lets you load persistent context — but only if your org has it enabled.

**Hallucination.** Claude can confidently state something that is false. It doesn't know what it doesn't know. This is especially risky for technical specifics: version numbers, CLI syntax, vendor-specific configurations. Always verify technical output against official documentation before using it in a runbook or resolution step.

**Knowledge cutoff.** Claude's training has a cutoff date. Guidance on newer tools, recent CVEs, or software releases after that date may be absent or wrong.

**Manager takeaway: build verification steps into every Claude workflow your team uses — especially for anything that ends up in a runbook, a customer message, or a leadership report.`},
        ],
        project: "Write a one-page brief for your support team explaining what Claude can and cannot do, with 5 realistic use cases and 5 things it should never be trusted for without verification. Include a section on which Claude features your organization has approved (base chat, Projects, file upload, web search).",
        skills: ["AI literacy", "Capability scoping", "Risk awareness"],
      },
      {
        week: 2,
        title: "Prompt Engineering Basics for Managers",
        reading: [
          { text: "Learn the anatomy of a good prompt: context, role, task, format, constraints, examples", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", urlLabel: "Anthropic docs", content: `## The six parts of a prompt that actually works

Think of prompting like briefing a new contractor. If you say "fix the network issue," you'll get a generic response. If you say "you're a senior network engineer, our VPN gateway is dropping connections after 4 hours of idle time, review these three log extracts and tell me the most likely cause in a numbered list with confidence levels," you get something useful.

The six elements that separate good prompts from bad ones:

**Role** — give Claude an identity relevant to the task. "You are an ITSM analyst" or "You are a senior support manager drafting a communication for a CTO" shapes the tone and depth of the response.

**Context** — tell Claude what situation it's operating in. Background it doesn't have will result in generic output.

**Task** — be explicit about what you want. "Draft," "Analyze," "Compare," "Summarize," "Identify gaps in" — verbs that specify the action.

**Format** — specify the shape of the output. Bullet list, numbered steps, table, two-paragraph executive summary. If you don't specify, Claude will choose, and it may not match what you need.

**Constraints** — add limits. "In under 150 words." "Use plain language, no jargon." "Do not include recommendations, analysis only."

**Examples** — the most underused element. One example of what good output looks like cuts iteration time dramatically.

**Manager takeaway: if Claude's output isn't useful, the problem is almost always a missing or vague element in your prompt — not Claude's capability.`},
          { text: "Study how specificity drives output quality — vague input produces vague output", url: null, urlLabel: null, content: `## Why vague prompts produce vague answers

Your support team will instinctively ask Claude questions the way they'd ask a search engine: "how do I handle an angry customer?" or "what's a good SLA?" These produce generic, surface-level responses that aren't useful in production.

The fix is specificity at every layer. Compare:

Vague: "Help me write a message about the outage."
Specific: "Write a customer-facing status update for a payment processing outage affecting enterprise customers. The outage started at 14:32 UTC, root cause is a database failover that did not complete cleanly, estimated resolution is 60 minutes. Tone: professional, direct, no technical jargon. Format: three short paragraphs — current status, impact, next update time."

The specific version gives Claude everything it needs to produce something you can almost send directly. The vague version forces you into multiple rounds of correction.

The pattern to build into your team's habits: before hitting send, check whether Claude has the who, what, when, format, and constraints it needs. If any are missing, add them.

**Manager takeaway: specificity in prompts is a learnable skill — the fastest way to improve your team's Claude outputs is to teach them to front-load context rather than iterate after the fact.`},
          { text: "Practice the difference between 'Tell me about incidents' vs 'You are an ITSM consultant. Analyze these 3 incident patterns and recommend process changes in bullet format'", url: null, urlLabel: null },
          { text: "Understand temperature, tone control, and format directives (tables, markdown, numbered steps)", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables", urlLabel: "Templates & variables" },
        ],
        project: "Write 10 support-manager prompts covering: ticket triage guidance, status update drafting, runbook creation, coaching feedback, and meeting agenda generation. Rate each on output quality using this rubric: specificity (is the task clear?), context (does Claude have what it needs?), format instruction (is the output shape defined?), constraints (are limits stated?), verification step (is there a check built in?).",
        skills: ["Prompt engineering", "Output formatting", "Context setting"],
      },
      {
        week: 3,
        title: "Using Claude for Daily Support Communications",
        reading: [
          { text: "Practice drafting executive outage updates with Claude by providing situation details and asking for structured status messages", url: "https://www.atlassian.com/incident-management/template", urlLabel: "Atlassian templates" },
          { text: "Learn to use Claude to rewrite customer-facing messages for tone, clarity, and professionalism", url: null, urlLabel: null, content: `## Using Claude to fix the tone problem in support communications

Every support team has the same challenge: technically accurate responses that land badly with customers. "The issue was caused by a misconfigured DNS record that propagated incorrectly following a routine maintenance window" is accurate. It's also impenetrable to a finance director who just lost an hour of access to their invoicing system.

Claude is exceptionally good at rewriting for audience. The prompt pattern is simple: paste the original message, specify the audience and the desired tone, and ask Claude to rewrite.

Example: "Rewrite this technical incident summary for a non-technical business stakeholder. Keep it under 100 words, avoid acronyms, focus on business impact and what was done to fix it, and close with a confidence statement about prevention."

Claude will also flag when a message sounds defensive or shifts blame — useful for coaching analysts whose ticket closure notes come across poorly. Paste a note, ask Claude to assess the tone, and use its feedback as a coaching anchor.

One caution: Claude will sometimes over-polish into corporate boilerplate. If the output sounds like a press release when it should sound like a helpful colleague, add a constraint: "Write in a direct, human tone — not corporate language."

**Manager takeaway: Claude is a tone editor as much as a drafter — use it to bridge the gap between what your team knows technically and what your stakeholders need to hear.`},
          { text: "Study how Claude can generate shift handoff notes from a bullet-point brain dump", url: "https://www.atlassian.com/incident-management/handbook", urlLabel: "Atlassian handbook", content: `## Turning a brain dump into a handoff your next shift can actually use

Shift handoffs are where context gets lost. The outgoing analyst knows everything; the incoming analyst gets a two-line Slack message and a ticket queue. Claude can close that gap in about 60 seconds.

The workflow: the outgoing analyst types a fast brain dump — whatever is in their head, in any order. Open issues, things they tried, who they spoke to, what's pending. No formatting required. Then Claude structures it into a standard handoff format.

A prompt that works: "You are an IT support team lead. Turn these rough notes into a structured shift handoff note. Sections: Active Issues (with priority and status), Pending Actions (with owner and deadline), Escalations in Progress, and Anything to Watch. Keep each bullet under 25 words."

The result is a handoff document the next shift can actually act on — without requiring the outgoing analyst to spend 20 minutes formatting notes at the end of a long shift.

The key habit to build: get analysts to do the brain dump first, then run it through Claude. The friction is much lower than asking them to write a structured document from scratch when they're tired and eager to log off.

**Manager takeaway: Claude's value in handoffs isn't perfection — it's converting unstructured knowledge into usable structure fast enough that analysts will actually do it.`},
          { text: "Explore generating team announcements, meeting summaries, and stakeholder emails with Claude", url: null, urlLabel: null },
        ],
        project: "Using Claude, generate a complete communications kit: executive outage update, customer status page message, team shift handoff, and post-incident summary. Compare Claude's drafts against your own and document specific improvements — this before/after comparison is your evidence artifact for this week.",
        skills: ["AI-assisted writing", "Tone calibration", "Communication speed"],
      },
      {
        week: 4,
        title: "Responsible AI Use in IT Operations",
        reading: [
          { text: "Study data sensitivity: never paste PII, credentials, proprietary configs, or customer data into Claude without org approval", url: "https://www.anthropic.com/policy", urlLabel: "Anthropic usage policy", content: `## What not to paste into Claude — the practical rules for support ops

Support teams handle sensitive data all day: customer records, authentication logs, employee notes, infrastructure configs. The rule of thumb is simple: if it would be a problem if it appeared in a screenshot shared externally, don't paste it into Claude.

Specifically, keep these out of AI prompts unless your organisation has approved a data-processing agreement with Anthropic:

**Customer PII** — names, email addresses, phone numbers, account IDs, ticket content that identifies a person. Anonymise before prompting. "A customer named Sarah Johnson at Acme Corp" becomes "a customer at a mid-size manufacturing company."

**Credentials** — passwords, API keys, tokens, certificates. Never. Not even to ask Claude to help you rotate them.

**Proprietary configs** — network diagrams, firewall rules, internal IP ranges, system architecture details. These are attack surface if exposed.

**Employee data** — performance notes, HR records, salary information, disciplinary records. Use role descriptions and anonymised behaviour patterns when asking for coaching help.

**Unapproved ticket data** — even a ticket number with a customer name attached may be out of bounds depending on your data classification policy.

The test to run before pasting anything: "Would my CISO or data protection officer be comfortable if this exact text appeared in a public document?" If the answer is no, anonymise it first.

**Manager takeaway: build a data classification habit into your team's AI workflow from day one — retrofitting it after a breach or complaint is significantly harder.`},
          { text: "Learn the 'trust but verify' principle — always review Claude's output before sending or publishing", url: null, urlLabel: null, content: `## Why you always check Claude's work before it leaves your hands

An analyst on your team sends an executive update with a metric Claude generated. The number is wrong — Claude misread the table format you pasted. The CTO asks about it in the next leadership call. This scenario plays out across organisations wherever AI output gets skipped past human review.

The trust-but-verify principle is not about distrusting Claude. It's about recognising that Claude generates plausible output, not verified output. Those are different things.

In practice, build a review step into every Claude-assisted workflow your team uses. For outage communications: write with Claude, read before sending. For ticket analysis: generate with Claude, spot-check three data points against the source. For runbooks: draft with Claude, have an L2 walk through the steps before publishing.

The review burden varies by risk. A meeting agenda drafted with Claude? A quick read is enough. A security advisory or SLA performance report? Verify every number against the source data.

The highest-risk failure mode is confident specificity — Claude stating a wrong fact with complete assurance. Teach your team to be especially sceptical of specific numbers, dates, version numbers, and named references in Claude's output. These are where hallucinations hide most effectively.

**Manager takeaway: "Claude wrote it" is not a review — build explicit human sign-off into any Claude-assisted output that affects customers, leadership, or system changes.`},
          { text: "Understand your organization's AI usage policy and how it applies to support operations", url: null, urlLabel: null, content: `## Your org's AI policy is not optional — here's how to find out what it says

Most organisations are somewhere on a spectrum from "no formal AI policy yet" to "specific approved tools and use cases documented." As a support manager, you need to know where your organisation sits before you deploy Claude with your team.

The questions to answer before going further:

**Is Claude approved?** Check with IT, InfoSec, or whoever manages your software procurement. Anthropic offers a commercial API and enterprise agreements. The consumer product (claude.ai) and the enterprise product have different data handling terms.

**What data can be processed?** Your data classification policy may explicitly prohibit sending certain categories to external AI services. If there is no policy yet, treat customer PII and credentials as prohibited until you get explicit sign-off.

**Are outputs subject to any review requirement?** Some organisations require legal or compliance review before AI-generated content can be sent externally — particularly in regulated industries.

**What's the incident process if something goes wrong?** If an analyst shares a Claude-generated response that contains sensitive data or a material error, who needs to know and how fast?

If your organisation has no AI policy yet, this week's deliverable — drafting an acceptable-use policy — is the right starting point. Propose it as a draft, not a final document, and loop in your manager and legal or InfoSec contacts for input.

**Manager takeaway: don't deploy Claude with your team until you can answer the four questions above — even partial answers are better than assuming everything is approved.`},
          { text: "Review common failure modes: confident-sounding wrong answers, outdated technical guidance, fabricated references", url: null, urlLabel: null, content: `## The three failure modes your team will encounter most

Claude fails in predictable ways. Knowing the patterns in advance means your team recognises them quickly rather than learning the hard way.

**Confident wrong answers.** Claude presents incorrect information with the same tone and structure as correct information. There is no built-in signal that tells you it's wrong. This is most dangerous for technical specifics: CLI commands, version numbers, API parameters, vendor-specific settings. Always verify against primary sources before putting anything in a runbook or resolution step.

**Outdated technical guidance.** Claude's training has a cutoff. If you're working with software that had a significant update, or a security advisory published recently, Claude's guidance may be based on an older version. A response about configuring a firewall rule may reference a UI that no longer exists. For anything where version matters, check the official current documentation.

**Fabricated references.** Claude will sometimes cite studies, articles, or documentation that do not exist. The citation looks real — plausible author names, reasonable journal titles, believable URLs. If Claude references a specific document, verify the source exists before including it in any report or communication you're sending externally. Never trust a Claude-generated URL without checking it.

A practical defence: for any Claude output that will be used in production — a customer message, a leadership report, a runbook — have the person who uses it answer: "Did I verify the key facts in this?" If the answer is no, that's the review step.

**Manager takeaway: train your team on these three failure modes by name — once analysts can label the pattern, they're far less likely to let it slip through.`},
        ],
        project: "Draft an AI acceptable-use policy for your support team covering: approved use cases, prohibited data types (include a sample data classification table with rows for PII, credentials, customer data, internal configs, and publicly shareable data), review requirements, and escalation for uncertain outputs.",
        skills: ["AI governance", "Data sensitivity", "Policy design"],
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
          { text: "Learn how to prompt Claude to categorize tickets by type (incident, request, problem, change) from raw descriptions", url: "https://www.axelos.com/certifications/itil-service-management/", urlLabel: "ITIL 4 framework" },
          { text: "Practice feeding Claude sample tickets and asking it to assign priority, category, and suggested assignment group", url: "https://www.atlassian.com/incident-management/itsm", urlLabel: "Atlassian ITSM" },
          { text: "Study how to build reusable triage prompt templates that your team can standardize on", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", urlLabel: "Prompt engineering" },
          { text: "Understand the limits: Claude cannot access your ticketing system directly — it works with text you provide", url: null, urlLabel: null },
        ],
        project: "Create a Claude-powered triage prompt template. Test it against 15 real or realistic ticket descriptions and score accuracy using this rubric for each ticket: correct category (incident/request/problem/change), justified priority (P1–P4 with reasoning), routing confidence (correct group suggested), missing context flagged (did Claude ask for what it needed?), escalation decision (was the right urgency applied?). Calculate an overall accuracy score.",
        skills: ["AI-assisted triage", "Prompt templates", "Classification accuracy"],
      },
      {
        week: 6,
        title: "Incident Summarization & Post-Incident Reports",
        reading: [
          { text: "Practice feeding Claude raw incident timelines, chat logs, or notes and asking for structured incident summaries", url: "https://www.atlassian.com/incident-management/handbook", urlLabel: "Atlassian handbook" },
          { text: "Learn to prompt Claude for post-incident reviews: timeline, root cause, impact, lessons, actions", url: "https://response.pagerduty.com/after/post_mortem_process/", urlLabel: "PagerDuty guide" },
          { text: "Study how to ask Claude to identify gaps in incident documentation by reviewing what's missing", url: null, urlLabel: null },
          { text: "Explore using Claude to draft stakeholder-facing incident reports at different detail levels (executive vs technical)", url: "https://sre.google/sre-book/postmortem-culture/", urlLabel: "Google SRE book" },
        ],
        project: "Take a past major incident (or create a realistic scenario). Feed raw data to Claude and generate: a 2-sentence executive summary, a 1-page incident report, and a detailed post-incident review with action items. Evaluate each output against this rubric: timeline accuracy, audience calibration, action items with owners, blame-free language, and prevention section present.",
        skills: ["Incident summarization", "Report generation", "Multi-audience writing"],
      },
      {
        week: 7,
        title: "Knowledge Article & Runbook Generation",
        reading: [
          { text: "Learn to prompt Claude to create step-by-step troubleshooting runbooks from brief problem descriptions", url: "https://www.atlassian.com/itsm/knowledge-management", urlLabel: "Atlassian KM guide" },
          { text: "Practice generating user-facing knowledge articles (password reset, VPN troubleshooting, printer issues) with Claude", url: null, urlLabel: null },
          { text: "Study how to ask Claude to convert tribal knowledge (verbal instructions) into structured documentation", url: "https://www.serviceinnovation.org/kcs/", urlLabel: "KCS methodology" },
          { text: "Explore using Claude to review and improve existing knowledge articles for clarity, completeness, and tone", url: null, urlLabel: null },
        ],
        project: "Use Claude to generate 5 support knowledge articles and 2 internal runbooks. Have a team member test-follow each article and document exactly where instructions were unclear or wrong — this validation step is required evidence for the deliverable.",
        skills: ["Knowledge creation", "Documentation speed", "Quality validation"],
      },
      {
        week: 8,
        title: "Analyzing Support Data with Claude",
        reading: [
          { text: "Learn how to paste CSV or tabular ticket data into Claude and ask for trend analysis, category breakdowns, and anomalies", url: null, urlLabel: null },
          { text: "Practice asking Claude to compute metrics from raw data: MTTR, backlog aging, SLA attainment, reopen rates", url: null, urlLabel: null },
          { text: "Study how Claude can generate data interpretation narratives for leadership reports", url: null, urlLabel: null },
          { text: "Understand limitations: Claude does math approximately — always verify calculations on critical metrics independently using your source data", url: null, urlLabel: null },
        ],
        project: "Export a week of ticket data (anonymized). Ask Claude to produce a weekly operations summary including volume trends, top categories, SLA performance, and 3 improvement recommendations. Verify all numbers independently against your source data before including this in any report.",
        skills: ["Data analysis prompting", "Metric interpretation", "Output verification"],
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
          { text: "Learn to use Claude as a preparation tool: 'Help me plan a 1:1 with an analyst who is struggling with ticket quality'", url: "https://hbr.org/2022/11/make-the-most-of-your-one-on-one-meetings", urlLabel: "HBR: 1:1 meetings" },
          { text: "Practice generating coaching conversation scripts that balance empathy and accountability", url: null, urlLabel: null },
          { text: "Study how to ask Claude for performance improvement talking points based on specific behaviors, not personality", url: "https://www.shrm.org/topics-tools/tools/toolkits/empower-managers-strategies-tools-growth-impact", urlLabel: "SHRM manager tools" },
          { text: "Important — data rules for coaching work: never paste employee names, protected-class data, medical or leave details, compensation figures, or unapproved disciplinary records into Claude. Use role descriptions and anonymized behavior patterns instead", url: null, urlLabel: null },
        ],
        project: "Prepare Claude-assisted 1:1 plans for 3 personas: a high performer ready for L2, a struggling analyst with documentation issues, and a solid performer who is disengaged. Use anonymized behavioral descriptions only. Include talking points, open questions, and follow-up actions for each. Add a 'human review required before use' checklist as the final section.",
        skills: ["AI-assisted coaching", "Conversation planning", "Development framing"],
      },
      {
        week: 10,
        title: "QA Feedback & Ticket Review Assistance",
        reading: [
          { text: "Learn to use Claude to evaluate ticket handling quality by pasting resolution notes and asking for feedback", url: null, urlLabel: null },
          { text: "Practice generating constructive QA feedback from Claude that can be adapted for analyst coaching", url: null, urlLabel: null },
          { text: "Study how Claude can help identify patterns in quality issues across multiple tickets", url: "https://www.atlassian.com/itsm/knowledge-management/kcs", urlLabel: "KCS — Atlassian" },
          { text: "Understand the limits: Claude assesses text quality and communication patterns, not the technical correctness of resolutions without domain context — human review is required before feedback reaches analysts", url: null, urlLabel: null },
        ],
        project: "Create a Claude-powered QA review workflow with a formal rubric (categories: resolution clarity, communication tone, steps documented, follow-up actions present, SLA notes included). Feed 10 sample ticket resolution notes to Claude using this rubric and compare its assessments against your own manual review. Note where AI and human judgment diverge.",
        skills: ["AI-assisted QA", "Feedback generation", "Quality pattern recognition"],
      },
      {
        week: 11,
        title: "Training Content & Onboarding Material Creation",
        reading: [
          { text: "Learn to use Claude to generate training guides, quizzes, and scenario-based learning modules for support analysts", url: null, urlLabel: null },
          { text: "Practice creating onboarding checklists and 30-60-90 day plans with Claude", url: null, urlLabel: null },
          { text: "Study how Claude can generate role-play scenarios for common support situations", url: null, urlLabel: null },
          { text: "Explore using Claude to create FAQ documents from collections of past tickets or common questions", url: "https://www.serviceinnovation.org/kcs/", urlLabel: "KCS methodology" },
        ],
        project: "Use Claude to build a complete new-hire onboarding kit: 30-60-90 day plan, 10 role-play scenarios, a quiz on ticket handling procedures with an explicit answer key for each question, and a 'common mistakes' reference guide.",
        skills: ["Training design", "Content generation", "Onboarding acceleration"],
      },
      {
        week: 12,
        title: "Team Communication & Meeting Productivity",
        reading: [
          { text: "Learn to use Claude to generate team meeting agendas from a list of topics and priorities", url: "https://hbr.org/2017/07/stop-the-meeting-madness", urlLabel: "HBR: meeting research" },
          { text: "Practice using Claude to convert meeting notes into action items, owners, and deadlines", url: "https://hbr.org/2015/07/the-condensed-guide-to-running-meetings", urlLabel: "HBR: running meetings" },
          { text: "Study how Claude can help draft team retrospective summaries and improvement proposals", url: null, urlLabel: null },
          { text: "Explore generating weekly team updates and leadership briefings with Claude's assistance", url: null, urlLabel: null },
        ],
        project: "Run a real or simulated team meeting. Use Claude to: generate the agenda beforehand, convert raw notes into structured minutes with action items, and draft the follow-up email. Measure time saved against your baseline — record your typical time for each step so the comparison is meaningful.",
        skills: ["Meeting productivity", "Action item extraction", "Communication efficiency"],
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
          { text: "Learn to prompt Claude to generate SOPs from informal process descriptions or verbal workflows", url: null, urlLabel: null },
          { text: "Practice creating escalation matrices, decision trees, and workflow documentation with Claude", url: "https://www.atlassian.com/software/confluence/templates/itsm-runbook", urlLabel: "Runbook template" },
          { text: "Study how Claude can help identify gaps in existing process documentation by analyzing it critically", url: "https://www.atlassian.com/itsm/problem-management/process", urlLabel: "Atlassian: problem mgmt" },
          { text: "Explore generating RACI matrices and process ownership documents with Claude", url: null, urlLabel: null },
        ],
        project: "Choose 3 undocumented support processes. Use Claude to generate complete SOPs for each, including scope, steps, decision points, escalation criteria, and review dates. Validate each SOP against an SOP quality checklist: clear owner, measurable steps, decision branches covered, edge cases noted, version date present.",
        skills: ["SOP generation", "Process documentation", "Gap identification"],
      },
      {
        week: 14,
        title: "Root Cause Analysis & Problem Management with Claude",
        reading: [
          { text: "Learn to use Claude as a thinking partner for root cause analysis — Claude generates hypotheses and structures analysis from the information you provide. It does not determine root cause; that requires logs, SME validation, and verified evidence", url: "https://asq.org/quality-resources/root-cause-analysis", urlLabel: "ASQ: RCA guide" },
          { text: "Practice using Claude to generate fishbone diagrams (in text format) and timeline reconstructions", url: "https://asq.org/quality-resources/five-whys", urlLabel: "ASQ: Five Whys" },
          { text: "Study how Claude can help identify recurring incident patterns when provided with problem descriptions", url: "https://www.atlassian.com/itsm/problem-management", urlLabel: "Atlassian: problem mgmt" },
          { text: "Apply AI-assisted RCA rules: always lead with evidence, label assumptions explicitly, require an SME validation owner for each finding, assign a confidence score (high/medium/low/unknown) to each root cause hypothesis, and document what additional evidence would change the conclusion", url: null, urlLabel: null },
        ],
        project: "Conduct a Claude-assisted RCA on a recurring support issue. Generate: the 5-Why analysis with evidence log, a fishbone breakdown with assumptions labeled, a corrective action plan with named owners, and a confidence score for each finding. Compare against a manual RCA — note where Claude added structure and where it introduced unsupported assumptions.",
        skills: ["AI-assisted RCA", "Structured analysis", "Problem management"],
      },
      {
        week: 15,
        title: "Service Improvement Proposals & Business Cases",
        reading: [
          { text: "Learn to use Claude to draft service improvement proposals with structured business justification", url: null, urlLabel: null },
          { text: "Practice generating cost-benefit analyses for support process changes (automation, tooling, staffing)", url: null, urlLabel: null },
          { text: "Study how Claude can help build executive-ready presentations from operational data and recommendations", url: null, urlLabel: null },
          { text: "Explore using Claude to create before/after process comparisons and projected impact analyses", url: null, urlLabel: null },
        ],
        project: "Use Claude to draft a complete service improvement proposal for a real support pain point. Include: problem statement, current state, proposed solution, cost-benefit analysis, risks, and implementation timeline.",
        skills: ["Business case writing", "Proposal generation", "Executive communication"],
      },
      {
        week: 16,
        title: "Automation Ideation & Workflow Design with Claude",
        reading: [
          { text: "Learn to use Claude as a brainstorming partner for identifying automation opportunities in support workflows", url: null, urlLabel: null },
          { text: "Practice describing manual processes to Claude and asking it to suggest automation approaches and tools", url: null, urlLabel: null },
          { text: "Study how Claude can help evaluate automation candidates by effort, value, and risk", url: null, urlLabel: null },
          { text: "Explore using Claude to generate pseudo-workflows and automation specifications for developers or no-code platforms — always include a risk/controls section in any automation spec, covering what happens when the automation fails, who owns the exception path, and what data it touches", url: null, urlLabel: null },
        ],
        project: "Feed Claude your top 10 manual support processes. Have it rank automation potential, suggest approaches (low-code, scripting, ITSM workflow), and draft implementation specs for the top 3. Each spec must include: scope, trigger, steps, exception handling, data touched, and required human oversight points.",
        skills: ["Automation ideation", "Workflow specification", "Build-vs-buy analysis"],
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
          { text: "Study system prompts and how they persistently shape Claude's behavior throughout a conversation", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts", urlLabel: "Anthropic docs" },
          { text: "Learn multi-step prompting: break complex tasks into sequential prompts that build on each other", url: "https://docs.anthropic.com/en/prompt-library/library", urlLabel: "Prompt library" },
          { text: "Practice role-based prompting: 'You are a senior ITSM consultant reviewing our incident process'", url: null, urlLabel: null },
          { text: "Learn structured reasoning techniques: instead of asking Claude to 'think step-by-step' (chain-of-thought), use explicit structured reasoning instructions — provide an output format with a reasoning section, ask Claude to flag assumptions and confidence level, require a verification step, and use XML-style tags like <context>, <constraints>, <output_format>, and <risk_check> to get consistent and auditable responses", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/extended-thinking", urlLabel: "Extended thinking" },
        ],
        project: "Build a multi-step prompt chain for weekly operations reporting: Step 1 — summarize ticket data, Step 2 — identify trends and flag assumptions, Step 3 — generate leadership narrative with confidence levels, Step 4 — create action recommendations with risk notes. Test end-to-end and document where structured reasoning improved output quality.",
        skills: ["Advanced prompting", "System prompts", "Structured reasoning"],
      },
      {
        week: 18,
        title: "Claude Projects, Memory & Organizational Knowledge",
        reading: [
          { text: "Study Claude Projects: how to create persistent workspaces with uploaded documents and custom instructions", url: "https://support.anthropic.com/en/articles/9517075-what-are-projects", urlLabel: "Anthropic support" },
          { text: "Learn how to upload SOPs, runbooks, and team standards into a Claude Project so it answers with your context", url: null, urlLabel: null },
          { text: "Practice building a support operations Project with your team's processes, metrics definitions, and templates — data rules: do not upload customer PII, employee records, credentials, proprietary vendor contracts, or unapproved IP. Use anonymized and approved operational documents only", url: null, urlLabel: null },
          { text: "Understand memory features and how Claude can retain information across conversations when enabled", url: null, urlLabel: null },
        ],
        project: "Create a Claude Project for your support team: upload 5+ operational documents (SOPs, escalation matrix, SLA definitions, quality rubric — approved, non-sensitive versions only). Test 10 questions against it and verify it responds with your team's actual standards rather than generic answers.",
        skills: ["Claude Projects", "Knowledge management", "Contextual AI"],
      },
      {
        week: 19,
        title: "Claude with Files: Spreadsheets, PDFs & Reports",
        reading: [
          { text: "Learn to upload ticket exports, CSV files, and spreadsheets to Claude for analysis and summarization", url: "https://docs.anthropic.com/en/docs/build-with-claude/files", urlLabel: "Files API" },
          { text: "Practice asking Claude to analyze PDF reports, extract key findings, and generate comparison tables", url: null, urlLabel: null },
          { text: "Study how Claude can create formatted documents, presentation outlines, and structured outputs from raw data", url: null, urlLabel: null },
          { text: "Understand current file handling practicalities: Claude handles most common file types (PDF, CSV, DOCX, images) but has context-window limits — for large files, split into sections, summarize chunks separately, or extract the relevant rows before uploading. When in doubt, test with a small sample first", url: "https://docs.anthropic.com/en/docs/build-with-claude/context-windows", urlLabel: "Context windows" },
        ],
        project: "Upload a month of anonymized ticket data to Claude. Generate: a trend analysis report, a top-10 recurring issues list, an SLA performance summary, and 5 targeted improvement recommendations with supporting data. Verify all metrics against your source before publishing.",
        skills: ["File analysis", "Data-to-insight", "Report automation"],
      },
      {
        week: 20,
        title: "Evaluating AI Tools Beyond Claude",
        reading: [
          { text: "Study the AI tool landscape for IT support: Copilot, Gemini, ChatGPT — understand where each excels", url: null, urlLabel: null },
          { text: "Learn about AI features built into ITSM platforms: ServiceNow Virtual Agent, Jira AI, Freshdesk Freddy", url: null, urlLabel: null },
          { text: "Review how AI-powered ticket routing, sentiment analysis, and auto-categorization work in production tools", url: null, urlLabel: null },
          { text: "Understand the difference between conversational AI (Claude) and embedded AI (platform-native features)", url: null, urlLabel: null },
        ],
        project: "Create an AI tool evaluation matrix for your support operation. Compare 4+ tools across: use cases, cost, integration, data privacy, accuracy, and team adoption effort. Include a recommendation — and critically, add a review date 6 months out, since the AI tool landscape changes rapidly enough that any evaluation older than 6 months should be revisited before making procurement decisions.",
        skills: ["AI landscape awareness", "Tool evaluation", "Strategic selection"],
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
          { text: "Study how to assess AI readiness in a support team: skills, culture, tooling, data maturity", url: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-learning-organization-how-to-accelerate-ai-adoption", urlLabel: "McKinsey: AI adoption" },
          { text: "Learn to create a phased AI adoption plan: quick wins, medium-term projects, long-term transformation", url: null, urlLabel: null },
          { text: "Review change management principles applied to AI rollout in operations teams", url: "https://www.prosci.com/methodology/adkar", urlLabel: "Prosci ADKAR" },
          { text: "Understand how to measure AI adoption success: time saved, quality improvement, team satisfaction, cost impact", url: "https://sloanreview.mit.edu/article/10-urgent-ai-takeaways-for-leaders/", urlLabel: "MIT Sloan: AI leaders" },
        ],
        project: "Draft a 6-month AI adoption roadmap for your support team. Include: readiness assessment, phased use cases, training plan, success metrics, risk mitigations, and governance guardrails.",
        skills: ["AI strategy", "Adoption planning", "Change management"],
      },
      {
        week: 22,
        title: "Teaching Your Team to Use Claude Effectively",
        reading: [
          { text: "Study how to design a practical Claude training session for support analysts: hands-on, scenario-based", url: null, urlLabel: null },
          { text: "Learn common mistakes new AI users make: over-trusting output, poor prompts, sharing sensitive data, ignoring verification", url: "https://www.anthropic.com/policy", urlLabel: "Anthropic usage policy" },
          { text: "Review how to create a team prompt library with tested, approved prompts for common tasks", url: "https://docs.anthropic.com/en/prompt-library/library", urlLabel: "Prompt library" },
          { text: "Understand how to track team AI usage and measure productivity improvements", url: null, urlLabel: null },
        ],
        project: "Build a complete Claude training workshop for your team: a 1-hour session plan, 10 hands-on exercises, a prompt library of 15+ tested prompts, and a quick-reference card for daily use.",
        skills: ["AI training design", "Prompt library curation", "Team enablement"],
      },
      {
        week: 23,
        title: "AI Governance, Ethics & Risk for Support Leaders",
        reading: [
          { text: "Study data governance for AI: what can be shared with AI tools, what requires anonymization, what is prohibited", url: "https://www.nist.gov/itl/ai-risk-management-framework", urlLabel: "NIST AI RMF" },
          { text: "Learn about AI bias, hallucination mitigation, and quality control in operational contexts", url: null, urlLabel: null },
          { text: "Review regulatory considerations: GDPR implications for processing EU personal data with AI tools, HIPAA rules for any health-adjacent IT support, SOX controls for change management in finance-adjacent environments — verify your organization's specific obligations with your legal/compliance team", url: "https://gdpr.eu/what-is-gdpr/", urlLabel: "GDPR overview" },
          { text: "Understand how to create an AI incident response plan for when AI outputs cause operational issues", url: null, urlLabel: null },
        ],
        project: "Create a comprehensive AI governance framework for your support team: data classification rules (what can/cannot be pasted into AI tools), approved/prohibited use cases, quality review requirements with named human-review checkpoints, AI incident procedures, and an ethics checklist. Have your manager or legal contact review before finalizing.",
        skills: ["AI governance", "Risk management", "Compliance awareness"],
      },
      {
        week: 24,
        title: "Capstone: Your AI-Augmented Support Operating Model",
        reading: [
          { text: "Review everything built in the previous 23 weeks and identify the highest-impact AI use cases for your operation", url: null, urlLabel: null },
          { text: "Study how leading support organizations integrate AI into their daily operations without over-reliance", url: null, urlLabel: null },
          { text: "Reflect on your personal AI skill growth, team readiness, and organizational AI maturity", url: null, urlLabel: null },
        ],
        project: "Build your capstone: a complete AI-augmented IT Support Manager operating model. Required components: AI use case catalog (minimum 10 use cases with owner, tool, data rules, and review step), prompt library (minimum 15 tested prompts), governance framework (from W23), training program outline (from W22), adoption roadmap (from W21), metrics dashboard design with baseline and target values, and a 1-page leadership brief. Self-assess your capstone using this rubric: business value demonstrated (is each use case tied to a metric?), data governance addressed (is every use case covered by a data rule?), human-review checkpoints defined (is there a named reviewer for every high-stakes output?), success metrics measurable (can you actually track them?), rollout plan realistic (does it have owners and dates?), training design included (can an analyst follow it?), risk controls present (what happens when AI output is wrong?).",
        skills: ["Operating model design", "AI leadership", "Strategic synthesis"],
      },
    ],
  },
];
