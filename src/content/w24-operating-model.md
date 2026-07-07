# Designing an AI-Augmented Operating Model

## Familiar Scenario

Leadership has stopped asking whether AI works and started asking how it fits permanently. You have a slot to present "how we work with AI" — not a project with an end date, but a standing operating model: the roles, the rules, the review points, and how it all keeps improving. This is the moment the work shifts from a pilot to the way the team runs.

## Core Question

How do I define a sustainable operating model for AI-augmented support — roles, rules, review, and continuous improvement — that leadership can adopt as a permanent way of working?

## Why This Matters

Organizations that integrate AI successfully share one pattern: they define where AI helps and where humans must decide, they build verification into every AI-assisted workflow, and they treat AI as augmenting process rather than replacing judgment. Organizations that struggle deploy broadly without defining the human-in-the-loop, let verification lapse as novelty fades, and measure usage instead of value. An operating model is what makes the first pattern durable instead of dependent on your personal attention.

## The Claude Capability

Claude can help you draft the operating model — structure the roles-and-responsibilities split, propose review cadences, and articulate the continuous-improvement loop. You bring how your team actually works and where the line between AI and human judgment sits; Claude helps turn it into a coherent, presentable document.

## Step-by-Step Workflow

1. **Define the responsibility split within tasks**, not which tasks use AI.
   - **Claude handles:** structuring, drafting, pattern identification, summarization, initial classification.
   - **Humans handle:** judgment calls, verification, customer-facing approval, technical accuracy, escalation, anything with regulatory or HR implications.
   The line moves as confidence builds — but there is always a line, and it is always explicit.
2. **Adopt shared prompt libraries**, not individual prompts — tested, approved templates for common tasks.
3. **Use tiered verification** — quick reads for low-stakes internal output, explicit fact-checking for customer- or executive-facing output — to prevent verification fatigue.
4. **Schedule periodic calibration** — a monthly 30-minute review of 10–20 AI-assisted outputs to catch quality drift.
5. **Close the feedback loop into training** — new effective prompts and caught errors flow back into the materials.

## Example Prompt

```
You are helping an IT support manager draft a permanent AI-augmented operating
model to present to leadership.

Context:
- Support team of 12, past the pilot stage
- Use cases: triage, drafting, summarization, KB creation
- Governance basics exist: data classification, verification norms, incident log

Task:
Draft an operating model covering four sections: (1) roles and responsibility
split between Claude and humans, (2) rules (data governance and verification
tiers), (3) review and calibration cadence, (4) continuous improvement loop.
Add a one-paragraph purpose statement at the top.

Output format:
Four labeled sections plus the purpose statement. Use tables where a split or
cadence is clearer as a table.

Constraints:
This is an operating change, not a project - avoid start/end-date framing.
Where a detail depends on our tools or org policy, mark it [TAILOR].

Verification:
End with 3 questions leadership is likely to ask, so I can prepare answers.
```

## What Claude Is Doing

Claude is using patterns from the context you provided to structure an operating model — it is drafting a framework, not deciding how your team should work. It cannot set where your human-judgment line belongs or what your leadership will accept. Every `[TAILOR]` marker is a place where your operational reality, not Claude's draft, governs.

## Common Beginner Mistake

Presenting AI as a project with a finish line. Framing it as "the rollout" implies it ends, which is exactly what lets verification and governance quietly lapse once the novelty fades.

## Better Practice

Frame it as a permanent operating change with built-in maintenance — calibration cadence, feedback loops, and clear ownership. The habits the model encodes (verification, documentation, continuous improvement) are what keep quality reliable long after the initial excitement passes.

## Quick Recap

- Define the AI/human split within each task, and keep the line explicit.
- Build in tiered verification, shared prompt libraries, and monthly calibration.
- Present it as a standing operating change, not a project that ends.

## Practice Activity

This week, write the responsibility-split section for one of your team's real workflows — list what Claude handles and what a human must own, and mark where the line currently sits.
