# Using Claude for Ticket Quality Evaluation

## The QA gap in most support teams

In a typical support team of 8–12 analysts, a manager can manually QA-review perhaps 10–15% of tickets. The rest go unreviewed. This creates blind spots: poor habits go uncorrected, good practices go unrecognized, and you can't reliably assess quality trends.

Claude enables a higher QA coverage rate — not by replacing your judgment, but by handling the structural and communication quality review at scale, while you focus your attention on the cases that require technical judgment or coaching action.

## What Claude can assess reliably

**Writing quality** — Is the resolution note clear? Would an L2 analyst understand what was done?

**Communication tone** — Is the customer-facing language professional, empathetic, and appropriately paced for the situation?

**Documentation completeness** — Are the required fields present? Were steps taken recorded? Is the resolution reproducible?

**Rubric consistency** — Given a defined rubric, Claude applies it consistently across many tickets — more consistently than a human reviewer checking tickets across a week.

**Pattern identification** — When reviewing batches, Claude can identify recurring gaps ("8 of 10 tickets are missing follow-up notes") that are hard to spot in one-at-a-time manual review.

## What Claude cannot assess

**Technical accuracy** — Whether the resolution actually fixed the right thing, whether the diagnosis was correct, whether an escalation should have been handled differently. This requires domain knowledge.

**Resolution judgment calls** — Whether the analyst made the right technical decision in an ambiguous situation.

**Historical context** — Whether the ticket was harder than it looks because of a known environment issue the analyst was navigating.

These dimensions require your knowledge and the analyst's context — Claude only has the text.

## Setting up the QA prompt

A good QA prompt gives Claude the rubric explicitly:

```
Role: You are a QA reviewer evaluating IT support ticket resolutions.
Rubric: Score each item 1–5 where 1 = does not meet standard, 5 = exceeds standard.
1. Resolution clarity: Are the steps taken clearly documented so L2 can understand what was done?
2. Communication tone: Is language professional, empathetic, and appropriate for the situation?
3. Steps documented: Is the resolution reproducible from the notes alone?
4. Follow-up actions: Are next steps clearly noted if the issue is not fully resolved?
5. SLA notation: Are response and resolution times noted where relevant?

Resolution note: [PASTE TEXT — no names or PII]
Task: Score each item with a 1–2 sentence rationale, identify the top improvement area.
```

## Calibrating the rubric

Before deploying Claude-assisted QA to your team, calibrate it against your manual reviews. Score the same 10 tickets both ways and compare. Where Claude consistently rates higher or lower than you, your rubric language needs refinement.

Common calibration issues:
- "Communication tone" is vague — add examples of 1, 3, and 5 ratings to the rubric
- "Steps documented" needs a clear standard — "enough detail that an L2 can pick up the ticket" is more useful than "documented"

A well-calibrated rubric produces Claude scores that match your manual scores 75–80% of the time, with the divergence concentrated in cases where technical context matters.
