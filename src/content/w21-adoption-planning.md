# Building a Phased AI Adoption Plan

## Familiar Scenario

Your director stops by after a leadership meeting and says: "I want AI rolled out to the support team by Q3. Put a plan together." You have twelve analysts, a full ticket queue, and no framework for how to introduce a new tool without disrupting the work that already keeps the lights on.

## Core Question

How do I turn "roll out AI by Q3" into a realistic, phased plan with milestones, risks, and success criteria I can defend to leadership?

## Why This Matters

A flat rollout — deploy Claude to everyone, train the whole team, go live in one week — fails for a predictable reason. Early mistakes, made before the team has calibrated to what Claude can and cannot do, create resistance that slows adoption for months. Phasing lets you learn at low stakes, build confidence, and scale only what has actually worked. It also gives you defensible checkpoints when leadership asks "how is it going?"

## The Claude Capability

Claude can help you draft a phased adoption plan: it can structure the phases, propose milestones, surface risks you might miss, and turn vague goals into measurable success criteria. You bring the operational context — team size, ticket types, tooling, constraints — and Claude helps organize it into a plan you can review, edit, and present.

## Step-by-Step Workflow

1. Define the three phases and who is involved in each.
2. List candidate use cases and sort them by value and risk.
3. Assign a success metric to each phase before it starts.
4. Name the risks that could derail each phase.
5. Ask Claude to assemble these into a structured plan with milestones.
6. Review, adjust for your reality, and prepare the leadership version.

A workable three-phase model:

- **Phase 1 — Manager only (Month 1–2):** You use Claude on your own workflows first. You cannot train the team to use AI safely if you have not done it yourself.
- **Phase 2 — Pilot with willing analysts (Month 3–4):** Two or three curious analysts with good judgment try the use cases you validated. This is your feedback loop before full rollout.
- **Phase 3 — Full team with governance (Month 5–6):** Roll out with tested training, tested prompts, and guardrails informed by what Phase 2 taught you.

## Example Prompt

```
You are helping an IT support manager build a phased AI adoption plan.

Context:
- Team of 12 analysts, mixed experience, handling L1/L2 tickets
- Director wants AI (Claude) rolled out by Q3, roughly 6 months out
- No prior structured AI use on the team
- Constraints: analysts are at full queue capacity; no extra headcount

Task:
Draft a 3-phase adoption plan (manager-only, pilot, full team). For each phase
include: goals, participants, 2-4 candidate use cases sorted by value and risk,
one measurable success metric, and the top 2 risks with a mitigation for each.

Output format:
A table per phase, followed by a short "milestones and dates" list.

Constraints:
Do not invent metrics for my team - where a number is needed, insert
[BASELINE TO MEASURE] so I can fill it in.

Verification:
End with a list of assumptions you made so I can confirm or correct them.
```

## What Claude Is Doing

Claude is using patterns from the context you provided to organize a plan structure — it is not making decisions about your team. It does not know your baseline metrics, your risk tolerance, or your director's real priorities unless you supply them. The `[BASELINE TO MEASURE]` placeholders and the assumptions list exist because Claude is drafting from what you gave it, not verifying facts about your environment.

## Common Beginner Mistake

Skipping straight to Phase 3 to hit the deadline. Compressing the pilot away means you discover every failure mode at full scale, in front of the whole team, at the moment trust matters most.

## Better Practice

Protect the pilot. Treat Phase 2 as the phase where you *expect* to find problems, and budget time for them. A rollout that reaches full team in Month 6 with tested guardrails beats one that reaches it in Month 3 and unravels by Month 4.

## Quick Recap

- Phased rollout lets you learn at low stakes before scaling to the full team.
- Use manager-only → pilot → full-team, each with its own success metric.
- Claude drafts the plan structure; you supply context and verify assumptions.

## Practice Activity

This week, list three of your own manager tasks where you could use Claude in Phase 1 (for example: ops report drafting, 1:1 prep, post-incident review structuring). Record roughly how long each takes today — that is your Phase 1 baseline.
