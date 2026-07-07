# Drafting Post-Incident Reviews with Claude

## Familiar Scenario

A Sev-1 authentication outage started at 1am and was finally resolved at 3am. Your team is drained. The post-incident review is due to leadership by end of day, and right now all you have is a messy Slack thread, a few scribbled timestamps, and everyone's fading memory. Writing a clean PIR from that, while exhausted, is exactly when mistakes creep in.

## Core Question

Can Claude turn my raw notes and timeline fragments into a structured PIR draft so my tired team edits instead of writing from a blank page?

## Why This Matters

A PIR captures what happened, why, and how to prevent recurrence — but it is most likely to be rushed or skipped precisely after a hard incident, when the team is worn out. Getting a solid structured draft quickly means the review actually gets done, gets done well, and produces the corrective actions that stop the next outage.

## The Claude Capability

Claude's most useful role in PIR writing is structure and language: taking your raw notes, chat excerpts, and rough timeline and turning them into coherent, organized prose. It can draft the same incident for different audiences from one set of notes. It is not generating root cause analysis — that requires your technical validation. A complete PIR has six components:

| Component | Purpose |
|-----------|---------|
| **Timeline** | Sequence of events from first signal to resolution |
| **Root cause** | Why it happened (a hypothesis until validated) |
| **Impact** | Who was affected, for how long, at what cost |
| **Detection gap** | Time between failure and first alert |
| **Corrective actions** | Specific steps to fix the underlying cause |
| **Prevention measures** | Changes that reduce recurrence likelihood |

## Step-by-Step Workflow

1. Gather your raw material: responder notes, cleaned chat excerpts, a rough timeline, your PIR template.
2. Anonymize it — remove customer names and internal hostnames before pasting.
3. Ask Claude to produce a structured draft matching your template.
4. Label every cause statement as validated or hypothesis based on the evidence you actually have.
5. Review, correct, and validate the root cause with an SME before publishing.

## Example Prompt

```
Role: You are helping draft a post-incident review from raw notes.

Context: Sev-1 incident. Below are anonymized responder notes, chat excerpts,
and a rough timeline. Approximate timestamps.

Task: Produce a structured PIR draft with these sections: Timeline, Root Cause,
Impact, Detection Gap, Corrective Actions, Prevention Measures. Also produce:
- A 2-3 sentence executive summary in plain English, no jargon
- A list of action items extracted from the notes, each with a suggested owner
  field marked [OWNER TBD] where the notes do not name one

Notes and timeline:
[PASTE ANONYMIZED MATERIAL]

Constraint: Label any root cause as "Hypothesis (needs validation)" unless the
notes state confirming evidence. Do not invent timestamps, causes, or actions
not present in the notes. Flag gaps with [NEEDS INFO].
```

## What Claude Is Doing

Claude is using patterns from the notes you provided to organize and phrase the review. When it writes a root cause statement, it is working from your text — not from logs, monitoring data, or SME knowledge. Claude is not verifying facts unless you provide source material. A confident-sounding root cause may look authoritative while being wrong, so it stays a hypothesis until you validate it. In the PIR, mark the difference explicitly:

- **Validated:** "Database connection pool exhaustion confirmed by [engineer] via pg_stat_activity log at 14:22"
- **Hypothesis:** "Probable cause: deployment at 13:45 introduced a connection leak — requires log analysis to confirm"

## Common Beginner Mistake

Publishing Claude's draft with its root cause statement intact because it reads well and everyone is tired. An unvalidated but confident root cause creates more problems than it solves — teams act on the wrong fix and the real cause recurs.

## Better Practice

Use Claude for the draft, then run a validation pass: confirm the timeline against Slack and alert history, validate the root cause with an SME, and assign real owners to every action item. Watch for implicit blame language — "failed to notice," "should have caught," "neglected to check" — and ask Claude to rewrite those sentences to focus on system and process gaps, not individuals.

## Quick Recap

- Claude drafts PIR structure and language fast from anonymized notes; you supply and validate the facts.
- Every root cause is a hypothesis until you have confirming evidence — label it that way.
- Keep it blame-free and have a human review all incident communications before they go out.

## Practice Activity

Take the notes from your most recent resolved incident, anonymize them, and generate a PIR draft plus a 2-3 sentence executive summary. Compare the draft to what you would have written by hand and note how much editing it needed on the root cause section specifically.
