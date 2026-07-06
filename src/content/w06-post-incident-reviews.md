# Post-Incident Reviews with Claude

## What a good PIR contains

A post-incident review (PIR) — sometimes called a postmortem — is the structured analysis of what happened, why, and how to prevent recurrence. Claude can help you structure and write one faster, but you must supply the facts.

A complete PIR has six components:

| Component | Purpose |
|-----------|---------|
| **Timeline** | Sequence of events from first signal to resolution |
| **Root cause** | Why the incident happened (hypothesis until validated) |
| **Impact** | Who was affected, for how long, and at what cost |
| **Detection gap** | How long between failure and first alert |
| **Corrective actions** | Specific steps to fix the underlying cause |
| **Prevention measures** | What changes reduce the likelihood of recurrence |

## Using Claude for PIR drafting

Claude's most useful role in PIR writing is **structure and language** — taking your raw notes, chat logs, and timeline fragments and turning them into coherent prose. It is not generating root cause analysis; that requires your technical validation.

**What to feed Claude:**
- Raw notes from responders (anonymized — remove customer names, internal hostnames)
- Slack or Teams thread excerpts (cleaned)
- A rough timeline with approximate timestamps
- Your team's standard PIR template (if you have one)

**What to ask Claude to produce:**
- A structured draft matching your template
- A plain-English executive summary (2–3 sentences)
- A technical summary for your engineering team
- A list of action items extracted from the notes

## Labeling assumptions correctly

When Claude produces a root cause statement, it is working from the text you provided — not from logs, monitoring data, or SME knowledge. Label any cause statement as a hypothesis until you have validated evidence.

In the PIR:
- **Validated:** "Database connection pool exhaustion confirmed by [engineer] via pg_stat_activity log at 14:22"
- **Hypothesis:** "Probable cause: deployment at 13:45 introduced a connection leak — requires log analysis to confirm"

Never publish a PIR with a confident root cause that has not been validated. It may look authoritative while being wrong.

## Multi-audience writing

A single incident requires different summaries for different readers:

**Executive summary:** What broke, how long it was down, business impact, what is being done to prevent recurrence. No technical jargon. 2–3 sentences.

**Technical PIR:** Full timeline, root cause hypothesis with evidence, action items with owners and dates, what monitoring or alerting would have caught this sooner.

**Customer communication (if applicable):** What customers experienced, what was done, what is different now. No internal blame language or unvalidated root cause.

Claude can draft all three from the same raw notes — specify the audience in your prompt.

## Blame-free language

PIRs are most useful when they focus on system failures and process gaps, not individual failures. Claude generally produces blame-free language by default, but watch for phrases like "failed to notice," "should have caught," or "neglected to check" — these assign blame implicitly. Ask Claude to rewrite any sentence that attributes failure to a person.

> All incident communications must be reviewed by you before sending. A PIR with an unvalidated root cause or incorrect timeline creates more problems than it solves.
