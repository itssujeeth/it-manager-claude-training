# Writing Service Improvement Proposals with Claude

## Why most improvement proposals fail

The most common reason a service improvement proposal gets rejected is not the idea — it's the framing. Proposals that lead with the technical problem rather than the business impact lose the room before the solution is presented. Proposals with vague cost estimates get deferred. Proposals without identified risks get questioned at exactly the wrong moment.

Claude helps you structure a proposal that answers the reader's questions before they ask them.

## The six sections every proposal needs

1. **Problem statement** — What is broken, in business terms. Not "our triage process is manual" but "manual triage adds 18 minutes to average P2 resolution time, costing approximately 4 FTE-hours per day."

2. **Current state** — Specific, measurable description of today. Volume, handle time, error rate, cost. These are your baseline — you will compare against them after implementation.

3. **Proposed solution** — What you're recommending and why this solution over alternatives. One paragraph maximum; details go in an appendix.

4. **Cost-benefit analysis** — Use your own numbers. Claude can structure the analysis, but do not let it invent figures. If you don't have a number, say "to be confirmed" rather than accepting a placeholder.

5. **Risks and mitigations** — At least two risks, each with a specific mitigation. "Things might go wrong" is not a risk. "Implementation during month-end close may affect SLA reporting" is.

6. **Implementation timeline** — Named milestones with owners and dates. "Q3" is not a timeline.

## Prompting Claude for proposals

```
Role: You are a service improvement consultant helping me write a business case.
Stakeholder: [CTO / IT Director / CFO — and what they care about most]
Problem: [One sentence]
Current state: [Your actual numbers — volume, time, cost]
Proposed solution: [What you're recommending]
My cost-benefit data: [Paste your actual numbers]
Task: Draft a complete 1-page proposal with the 6 required sections.
Constraints: Use only the numbers I provided. Flag any section where I need to add data. 
Lead with financial impact for a CFO audience, or risk reduction for a CTO audience.
```

## What Claude gets right and what it gets wrong

Claude structures proposals well and calibrates language for the stated audience effectively. Where it fails: it will invent cost estimates if you don't provide them, and those estimates will look authoritative. Always supply your own numbers or explicitly note "figures to be confirmed."

## Getting approval

The strongest proposals are reviewed informally before formal submission. Share a draft with your manager before sending up the chain — not for approval, but to catch framing issues before they reach the decision-maker.
