# Turning an Operational Insight into a Service Improvement Proposal

## Familiar Scenario

You've noticed that your ticket-routing process is quietly costing the team. Misrouted tickets bounce between queues, adding delay to every P2. You know the fix — a smarter routing rule at intake — but the two times you raised it in a leadership meeting, it went nowhere. The idea is good; the pitch didn't land.

## Core Question

"I have a real operational insight, but I can't get leadership to act on it. How do I turn 'this bugs me' into a structured proposal that answers their questions before they ask?"

## Why This Matters

Most improvement proposals fail on framing, not merit. Proposals that lead with the technical problem instead of business impact lose the room. Vague cost estimates get deferred. Missing risks get raised at the worst possible moment. A structured proposal is what converts frontline knowledge into a decision leadership can actually make.

## The Claude Capability

Claude can take your insight and your numbers and structure them into a complete proposal — problem statement, current state, options, recommendation, risks, and timeline — calibrated to what your specific stakeholder cares about. It organizes and frames; you supply the facts and figures.

## Step-by-Step Workflow

1. Gather your real baseline numbers: volume, handle time, error rate, cost.
2. Write the problem in business terms — impact, not mechanism.
3. Give Claude your stakeholder, your numbers, and your recommendation, and ask for the six standard sections.
4. Fill or flag every figure Claude couldn't source from you.
5. Share the draft informally with your manager before formal submission.

## Example Prompt

```
Role: You are a service-improvement consultant helping me write a business
case for a leadership audience.

Context:
Stakeholder: [CTO / IT Director / CFO — and what they care about most]
Problem (business terms): [one sentence]
Current state (my actual numbers): [volume, handle time, error rate, cost]
Proposed solution: [what I'm recommending, and the main alternative]
My cost-benefit data: [paste your actual numbers]

Task: Draft a one-page proposal with six sections: Problem Statement,
Current State, Proposed Solution, Cost-Benefit Analysis, Risks and
Mitigations (at least two, each with a specific mitigation), and
Implementation Timeline (milestones with owners and dates).

Output format: Headed sections, concise, no filler.

Constraints: Use only the numbers I provided. Do not invent figures. Mark
any missing number as [TO BE CONFIRMED]. Lead with financial impact for a
CFO, or risk reduction for a CTO.

Verification: List every [TO BE CONFIRMED] so I can source it before I
submit.
```

## What Claude Is Doing

Claude is using patterns from the information you provided to structure and frame the proposal for your stated audience. It is not verifying your numbers, and it will invent authoritative-looking cost estimates if you leave gaps. The `[TO BE CONFIRMED]` instruction forces those gaps to stay visible instead of being papered over.

## Common Beginner Mistake

Letting Claude generate the cost-benefit numbers. If you don't provide figures, Claude will produce ones that look precise and credible — and a fabricated ROI is the fastest way to lose trust when someone checks it. "18 minutes added per P2, ~4 FTE-hours per day" persuades only if it's true.

## Better Practice

Own the numbers and the impact framing; use Claude for structure and audience calibration. Lead the problem statement with business impact ("manual triage adds 18 minutes to average P2 resolution"), give at least two concrete risks with specific mitigations, and put named milestones with dates in the timeline — "Q3" is not a timeline. Then pre-brief your manager to catch framing issues before the decision-maker sees it.

## Quick Recap

- Proposals usually fail on framing, not the idea — lead with business impact.
- Claude structures the six required sections and tailors the language to your stakeholder.
- Supply your own numbers and flag gaps as `[TO BE CONFIRMED]`; never let Claude invent figures.

## Practice Activity

This week, pick one improvement you've wanted to pitch. Collect the real baseline numbers, run the example prompt, resolve every `[TO BE CONFIRMED]` flag, and share the one-page draft with your manager for a framing check before you take it up the chain.
