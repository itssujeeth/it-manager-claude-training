# Auditing a Runbook for Gaps and Ambiguities

## Familiar Scenario

Your team has a runbook for handling a common network incident. It exists, it's been "done" for a year — and yet every analyst interprets it differently. One escalates after 15 minutes, another waits an hour. One restarts the service first, another checks logs first. The document is technically complete, but in practice it produces inconsistent results.

## Core Question

"The runbook looks finished. Why does everyone follow it differently, and how do I find the parts that are unclear before they cause the next incident?"

## Why This Matters

A process document can be complete on paper and still fail in practice — usually because it was written when the process was different, it assumes knowledge the reader doesn't have, or it stops short of the edge cases that happen regularly. Inconsistent interpretation of a runbook shows up as inconsistent SLAs, missed escalations, and incidents that drag on longer than they should.

## The Claude Capability

Claude can review existing documentation and surface structural gaps — undefined decision branches, missing owners, vague triggers, absent completion criteria — faster and more systematically than a manual read-through. It gives you a checklist of what to fix before the document reaches an analyst under pressure.

## Step-by-Step Workflow

1. Paste the existing runbook or SOP into Claude.
2. Ask specifically for the categories of gaps you care about, not a general "review this."
3. For each gap, have Claude name the section and describe what would fix it.
4. Fix the structural gaps yourself, then send the corrected version to a domain expert for a technical-accuracy check.

## Example Prompt

```
Role: You are a process-documentation reviewer for an IT support team.

Context: Below is an existing runbook that analysts interpret inconsistently.

Runbook:
[paste the document here]

Task: Identify structural gaps in these categories:
1. Steps that assume prior knowledge not stated in prerequisites
2. Decision points with no documented outcome for one of the paths
3. Escalation triggers that are mentioned but not defined
   (e.g. "escalate if necessary")
4. Steps that do not name who is responsible
5. Missing verification — how does someone know the process completed
   correctly?
6. Common edge cases the process does not cover

Output format: A table with columns Section, Gap Type, What Would Fix It.

Constraints: Only flag gaps you can see in the text. Do not assess whether
the technical steps are correct for our environment.

Verification: List any place where the document contradicts itself.
```

## What Claude Is Doing

Claude is using patterns from the document you provided to detect structural weaknesses — vague language, undefined branches, implied ownership. It is not verifying that the technical steps are correct unless you give it source material to check against. A gap review from Claude is structural; technical accuracy still requires a domain expert.

## Common Beginner Mistake

Asking Claude "is this runbook correct?" and trusting the answer. Claude can see that a step says "restart the service" — it cannot know whether that's the right service, the right method, or the right order for your infrastructure. Treating a structural review as a correctness sign-off leaves real technical errors in place.

## Better Practice

Use Claude for the structural layer and route technical accuracy to a human expert. Build both into the workflow: draft, then gap-review with Claude, then technical review by a domain expert, then validation by test-following, then publish. Catching structural gaps early saves your technical reviewer's time.

## Quick Recap

- Runbooks can be "complete" and still be interpreted inconsistently because of structural gaps.
- Claude reliably flags undefined triggers, missing owners, unhandled branches, and absent completion criteria.
- Claude finds structural gaps, not technical errors — pair it with a domain expert.

## Practice Activity

This week, take one runbook your team argues about and run it through the example prompt. Fix every undefined escalation trigger and every step with no named owner, then re-check that two analysts now read the corrected version the same way.
