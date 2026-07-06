# Assessing AI Readiness in Your Support Team

## Why readiness assessment prevents failed rollouts

Most AI adoption failures are not technology failures — they are readiness failures. The tool works fine; the team wasn't prepared to use it consistently, safely, or in a way that delivers measurable value. A readiness assessment surfaces the gaps before they become post-rollout problems.

## The four readiness dimensions

**Skills** — Can your analysts write a clear, specific prompt? Do they understand Claude's limits (no real-time data, approximate math, hallucination risk)? Do they know what not to paste? Skills gaps are the easiest to address: training resolves them in days.

**Culture** — Does your team view AI as a threat or a tool? Are analysts incentivized to experiment, or do they fear being wrong? A team with verification discipline and psychological safety will use AI more safely than a high-performing team with a "just ship it" culture.

**Tooling** — Does your team have access to Claude at the plan level they need (Pro, Team, API)? Are there IT policy or security restrictions on AI tool use? Does your ITSM platform support any AI integrations you're planning?

**Data maturity** — Is your ticket data clean enough to paste into Claude for analysis? Do you have anonymization processes in place? Do analysts know what data classification rules apply to your environment?

## The readiness self-assessment

Use Claude to generate a structured readiness questionnaire:

```
Generate a 20-question AI readiness assessment for an IT support team preparing to 
expand Claude usage. Cover: analyst skills (5 questions), team culture (5 questions), 
tooling and access (5 questions), and data maturity (5 questions). 
For each question, include a scale and what different scores indicate.
```

Score your team honestly. Low scores in any dimension are not reasons to stop the rollout — they are inputs to your adoption plan.

## What good readiness looks like at each dimension

**Skills — ready:** Most analysts have completed at least basic prompt training. Team knows the "five things never to paste" rule. Someone has tested the verification process.

**Culture — ready:** Manager openly acknowledges that AI output needs checking. Team has a shared language for AI risk levels. Experimentation is encouraged; no analyst fears punishment for an AI mistake they caught themselves.

**Tooling — ready:** Licenses are in place. Security team has reviewed and approved the tools in scope. Analysts can access Claude from their work devices without workarounds.

**Data maturity — ready:** Anonymization procedure exists and is practiced. At least one person can quickly strip PII from a ticket export. Data classification rules have been communicated.

## Readiness is a baseline, not a gate

A team doesn't need to be fully ready before starting. Low readiness in one area means starting with lower-risk use cases while you close the gap — not waiting until everything is perfect. The readiness assessment tells you where to start, not whether to start.
