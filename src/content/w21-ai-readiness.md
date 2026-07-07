# Assessing Whether Your Team Is Ready for AI

## Familiar Scenario

You are convinced Claude could help your support team, and you want to introduce it properly. But before you commit a rollout date to your director, you have a nagging question: is the team actually ready? You do not know whether the skills, the culture, the tooling, and the data handling are in place — or where the gaps are.

## Core Question

How do I honestly assess whether my team, our processes, and our governance are ready for AI tooling — before I stake my credibility on a rollout?

## Why This Matters

Most AI adoption failures are not technology failures. The tool works fine; the team was not prepared to use it consistently, safely, or in a way that delivers measurable value. A readiness assessment surfaces those gaps while they are still cheap to fix — before they become post-rollout incidents and eroded trust.

## The Claude Capability

Claude can help you structure a readiness assessment: it can draft a scored questionnaire across the dimensions that matter, suggest what different scores indicate, and help you interpret the results into a starting point. You supply the honest answers about your team; Claude gives you a consistent framework to capture them.

## Step-by-Step Workflow

1. Decide the dimensions to assess. A practical four: **skills, culture, tooling, data maturity**.
2. Ask Claude to draft a scored questionnaire across those dimensions.
3. Score your team honestly — resist the urge to inflate.
4. Read low scores as *where to start*, not *whether to start*.
5. Feed the results into your adoption plan as inputs to sequencing.

What "ready" looks like on each dimension:

- **Skills:** Most analysts can write a clear, specific prompt and know Claude's limits (no live data, approximate math, hallucination risk) and what not to paste.
- **Culture:** The team treats Claude as a tool, not a threat; experimentation is safe and verification is expected.
- **Tooling:** Licenses are in place, security has approved the tools in scope, and analysts can access Claude from work devices without workarounds.
- **Data maturity:** An anonymization procedure exists and is practiced, and data classification rules have been communicated.

## Example Prompt

```
You are helping an IT support manager assess team readiness for expanding
Claude usage.

Context:
- IT support team, 12 analysts, mixed experience
- Introducing Claude for ticket triage, drafting, and summarization
- No formal AI governance in place yet

Task:
Generate a 20-question readiness assessment covering four dimensions -
analyst skills (5), team culture (5), tooling and access (5), and data
maturity (5). For each question, give a 1-5 scale and a one-line note on
what a low score versus a high score indicates.

Output format:
Group by dimension, numbered questions, in a table with columns:
Question | Scale meaning (1) | Scale meaning (5).

Constraints:
Keep questions specific to IT support work, not generic AI hype.

Verification:
After the questionnaire, list which dimensions I should weight most heavily
and briefly explain why, so I can sanity-check your reasoning.
```

## What Claude Is Doing

Claude is using patterns from the context you provided to structure an assessment — it is drafting a framework, not evaluating your team. It cannot see your analysts, your licenses, or your data practices. The scores are yours to assign honestly; Claude only organizes the questions and offers interpretation you can accept or override.

## Common Beginner Mistake

Treating readiness as a pass/fail gate — deciding that because one dimension scores low, the rollout must wait until everything is perfect. Teams that wait for perfect readiness never start.

## Better Practice

Read readiness as a baseline that shapes sequencing. Low skills? Start with lower-risk, easy-to-verify use cases while training closes the gap. The assessment tells you *where to begin*, not *whether to begin*.

## Quick Recap

- Most AI rollouts fail on readiness, not technology.
- Assess skills, culture, tooling, and data maturity honestly.
- Low scores set your starting point; they are not a stop sign.

## Practice Activity

This week, score your own team on the four dimensions using a quick 1-5 gut check for each. Identify the single lowest-scoring dimension — that is the one your adoption plan should address first.
