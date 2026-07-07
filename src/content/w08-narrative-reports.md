# Turning Metrics into a Management Narrative

## Familiar Scenario

You have this week's numbers: 46 tickets, CSAT at 4.2, P1 volume up, P2 MTTR down. Your monthly ops review with the IT director and VP is Thursday. Pasting a table of figures onto a slide tells them nothing they can act on, and you do not have time to hand-write three paragraphs of interpretation.

## Core Question

Can Claude turn my verified metrics into a readable ops narrative that tells leadership what happened and what to do about it?

## Why This Matters

Raw numbers make readers do the interpretation themselves, and busy executives usually will not. A narrative that explains the trend, the cause, and the recommended action turns a data dump into something leadership can decide from. Producing that quickly means your reporting drives action instead of just filling a slide.

## The Claude Capability

Claude can convert verified metrics into a clear, structured narrative written for the audience you specify. It can frame trends, connect them to events you supply, and draft grounded recommendations. It writes from the numbers and context you provide — it does not compute or verify the metrics, so the verification happens before Claude writes.

## Step-by-Step Workflow

1. Verify your metrics first (see the verification lesson) — Claude works from verified numbers, not raw data.
2. Give Claude the metrics, the prior-period comparison, and any notable events that explain anomalies.
3. Specify the audience and the tone explicitly.
4. Ask for a structured summary: headline, trend, SLA performance, notable events, recommendations.
5. Review the draft — confirm every number matches your verified figures and the framing is accurate.

## Example Prompt

```
Context: These are verified ticket metrics for the week of [dates].

Metrics:
- Total volume: [N] tickets ([+/-N%] vs. prior week)
- P1 tickets: [N] (MTTR: [N] hours, SLA: [pass/miss])
- P2 tickets: [N] (MTTR: [N] hours, SLA: [N%])
- CSAT: [N]
- Top 3 categories: [list with counts]
- Notable events: [outages, deployments, or incidents that explain anomalies]

Task: Write an executive-ready ops summary with:
1. A 2-sentence headline (what happened overall this week)
2. Volume and trend section
3. SLA performance section
4. Notable events and their impact
5. Top 3 improvement opportunities grounded in the data

Audience: IT director and VP of Operations. No technical jargon.
Format: Short paragraphs under clear headings; bullet lists for improvements.
```

## What Claude Is Doing

Claude is using patterns from the verified metrics and events you provided to construct a narrative. Consider the difference:

**Data dump:** "P1 tickets: 12. P2 tickets: 34. MTTR P1: 2.3 hours. SLA attainment: 94%."

**Narrative:** "P1 volume rose 40% versus last week (12 vs. 8), driven by three VPN outage incidents on Tuesday and Thursday. Despite that, P1 MTTR held at 2.3 hours — within SLA. P2 MTTR improved from 7.4 to 6.1 hours, reflecting the triage template deployed in Week 3."

Claude produced the second version because you gave it the events behind the numbers. It is not verifying that the 40% or the SLA figure is correct — it is phrasing what you supplied.

## Common Beginner Mistake

Pasting raw, unverified data and asking Claude to "write the report." Any error in the numbers flows straight into a polished, confident narrative that goes to leadership — where wrong figures do the most damage.

## Better Practice

Feed Claude verified metrics and the context behind them. Vague inputs produce vague recommendations. Instead of "there were many repeat tickets," provide: "Password reset: 34 tickets, 22% of volume, up from 15% last week; 80% submitted on Mondays, aligning with weekend password expiry." That lets Claude recommend something concrete like adjusting the expiry window or deploying self-service reset. Specify audience in every prompt — executive framing ("resolved before customer SLA breach") differs from technical framing ("MTTR under threshold").

## Quick Recap

- Verify metrics before Claude writes; it phrases numbers, it does not check them.
- Provide the events behind the numbers so the narrative explains cause, not just values.
- Specify audience and tone; grounded inputs produce grounded recommendations.

## Practice Activity

Take one verified weekly metric set and generate an executive ops summary with the example prompt. Include at least one notable event, then check that every figure in the draft matches your verified numbers before you would send it.
