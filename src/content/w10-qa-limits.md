# What Claude Cannot Reliably Judge in Quality Evaluation

## Familiar Scenario

QA-assisted scoring is saving you hours, so you start letting Claude auto-pass or auto-fail tickets without reading them yourself. A few weeks later a ticket that Claude scored 4/5 turns out to be technically wrong — the writing was clean, but the fix addressed the wrong thing. Because no human reviewed it, that wrong approach got quietly validated and the analyst kept doing it.

## Core Question

What can Claude reliably assess in a QA review, and what always requires a human?

## Why This Matters

A confident, well-written QA score can hide a technically wrong resolution. If you pass those scores to analysts without review, you're not just missing errors — you're endorsing them. Understanding where Claude's judgment ends protects your team from learning the wrong lesson and protects you from acting on assessments that were never verified.

## The Claude Capability

Claude can reliably evaluate the things that live in the text: writing clarity, communication tone, and whether required documentation is present. What it cannot evaluate is anything that depends on knowledge outside the ticket — and in QA, that's a lot.

## What Requires Human Judgment

- **Technical accuracy** — whether the fix was correct, the diagnosis sound, or a faster resolution existed. This needs knowledge of your specific environment, none of which is in the ticket text.
- **Escalation decisions** — whether handling or escalating was the right call depends on the analyst's experience and signals they may not have been able to detect.
- **Sensitive interactions** — frustrated customers, executive escalations, or emotionally charged tickets need nuanced review; a 5/5 tone score can still be the wrong approach for that customer.
- **New-analyst development** — first-90-days assessment is about growth trajectory, which a snapshot score doesn't capture.
- **Formal performance documentation** — anything feeding an HR or review process must be validated by a manager, not left as an AI-generated score.

## The Human Review Workflow

1. Claude reviews the batch and produces scores and improvement areas.
2. You verify each score against your own knowledge, correct errors, and add technical context.
3. You adapt the feedback for the specific analyst — relationship, development stage, current pressures.
4. You deliver it in the right format (1:1, written summary, team note).

Skipping steps 2 and 3 sends unvalidated AI assessments to your team. That's a management gap, not a tool limitation.

## Example Prompt

```
Role: You are a QA reviewer assisting a human manager, not replacing them.

Rubric: [Paste your rubric and 1–5 scale]

Resolution note: [PASTE TEXT — no names or PII]

Task: Score the rubric items you can assess from the text. For each item, give a short rationale.

Constraints: Do not score technical accuracy or whether the escalation decision was correct — flag these as "requires human review" instead.

Verification: End with a short list of everything a human manager still needs to check before this score is used.
```

## What Claude Is Doing

Claude is assessing the writing and process quality visible in the text — it is not verifying facts or judging technical decisions unless you provide the source material and environment context, which a single ticket doesn't contain. Asking it to flag items as "requires human review" keeps it from producing a confident score on something it can't actually see.

## Common Beginner Mistake

Treating a high QA score as a pass and sending it straight to the analyst. The score reflects how the ticket reads, not whether the work was right — and delivering it unverified can validate a wrong approach.

## Better Practice

Use Claude-assisted QA as a coverage multiplier, not a decision-maker. Let it handle structure and tone at scale so you can spend your attention on technical accuracy and the cases that need judgment. Treat human review as non-negotiable: no AI-generated QA feedback reaches an analyst without a manager checking it first.

## Quick Recap

- Claude judges what's in the text: clarity, tone, documentation completeness.
- Technical accuracy, escalation calls, sensitive cases, and formal documentation need a human.
- No AI QA score reaches an analyst without manager verification.

## Practice Activity

Take three tickets Claude has scored. For each, write one sentence identifying something the score could not have captured (a technical judgment, a customer nuance, or missing context), and confirm your review would have caught it.
