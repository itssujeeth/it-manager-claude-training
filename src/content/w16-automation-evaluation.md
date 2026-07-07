# Evaluating an Automation Proposal Against Real Criteria

## Familiar Scenario

A vendor has pitched you an AI-powered ticket triage tool. The demo looked impressive and the sales deck promises to cut triage time in half. Leadership is interested and wants your recommendation by next week. The problem: you don't have a structured way to evaluate it, and "the demo looked good" is not a basis for a budget decision.

## Core Question

"How do I evaluate this automation properly — beyond the sales pitch — so I can expose the hidden costs and risks before we commit?"

## Why This Matters

A process that saves four hours a week but breaks twice a month and needs six hours of recovery is a bad automation, no matter how good the demo looked. Simple ROI ignores the dimension that decides whether automation actually improves operations: risk. Evaluate on value alone and you buy tools that create more work than they remove.

## The Claude Capability

Claude can structure an evaluation across value, effort, and risk, compute a priority score, and — most usefully — surface the assumptions a vendor pitch glosses over. It gives you a repeatable framework and a set of pointed questions. It does not know the vendor's real reliability; it evaluates the numbers and claims you give it.

## Step-by-Step Workflow

1. Gather the claim (value), the real implementation and maintenance cost (effort), and the failure impact (risk).
2. Ask Claude to score all three on a common scale and compute a priority score.
3. Have Claude flag high-risk candidates and name the control each would need.
4. Ask Claude to list the assumptions behind the vendor's value claim so you can test them.
5. Translate the result into a business case for leadership.

## Example Prompt

```
Role: You are helping me evaluate an automation proposal rigorously.

Context: A vendor proposes an AI ticket-triage tool. Here is what I know:
Claimed value: [time saved, accuracy claims]
Estimated effort: [integration work, ongoing maintenance]
Failure impact: [what happens if it mis-triages or goes down]

Task: Evaluate across three dimensions: Value (time saved x frequency),
Effort (development and maintenance), and Risk (failure impact). Use a 1-5
scale for each and calculate a priority score of (Value x 2) - (Effort +
Risk).

Output format: A scored table, then a short recommendation.

Constraints: Use only the information I provided. Do not accept the vendor's
value claim at face value — list the assumptions it depends on.

Verification:
- Flag any candidate with a Risk score of 4 or 5 and state the control
  required before proceeding.
- List the three questions I should ask the vendor before deciding.
```

## What Claude Is Doing

Claude is using patterns from the information you provided to structure the evaluation and expose unstated assumptions. It is not verifying the vendor's claims and it has no independent knowledge of the product's real-world reliability. Its value here is discipline and structure — forcing the risk and assumption questions the pitch skipped.

## Common Beginner Mistake

Feeding Claude the vendor's own numbers and treating the resulting score as objective proof. If the claimed value is inflated and you enter it unquestioned, Claude will faithfully compute a high priority score from bad inputs. A tidy score built on a sales claim is still a sales claim.

## Better Practice

Interrogate the risk dimension explicitly. Disqualifying risks include: write operations to production systems without a human review gate, customer-visible actions like automated notifications or status changes, regulated data (PII, financial, health) without documented controls, and automations that trigger other automations. Have Claude flag these, then take a business case to leadership that leads with annualized value and payback period — "saves 208 hours a year, three days to build" — not the technical architecture.

## Quick Recap

- Evaluate value, effort, and risk together; ROI alone hides the failures that make automations net-negative.
- Claude structures the scoring and exposes vendor assumptions, but it can't verify claims — challenge the inputs.
- Flag write-access, customer-visible, compliance, and cascading risks as gates before any commitment.

## Practice Activity

This week, take one automation proposal — vendor or internal — and run it through the example prompt. Write down the three assumptions its value claim depends on, and identify at least one risk that would require a control before you'd approve it.
