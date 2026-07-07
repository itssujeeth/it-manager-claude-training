# Every Analyst Uses Claude Differently — and No One Wrote the Rules

## Familiar Scenario

You realize your team is already using Claude, just inconsistently. One analyst anonymizes everything; another pastes full tickets. One uses it only for drafting; another treats its answers as fact. There is no written guidance, so each person has invented their own. Sooner or later, the gap between those habits becomes an incident.

## Core Question

What does my team need agreed and written down before we can use Claude safely and consistently?

## Why This Matters

Without a documented policy, risk is set by whoever is least cautious. A shared, written standard protects your customers, gives your analysts clear boundaries, and gives you something to point to when leadership or compliance asks how AI is used on your team.

## The Claude Capability

Claude can help you draft the policy itself — quickly turning your requirements into a structured first draft you then take to your manager, InfoSec, and legal contacts. Before you draft, you need answers to four questions:

- **Is Claude approved?** Check with IT, InfoSec, or procurement. Consumer and enterprise products have different data-handling terms.
- **What data can be processed?** Your data classification policy may prohibit sending certain categories to external services. If there is no policy yet, treat PII and credentials as prohibited until you get explicit sign-off.
- **Are outputs subject to review?** Some organizations require compliance or legal review before AI-assisted content goes out externally.
- **What is the incident process?** If sensitive data or a material error is shared, who needs to know, and how fast?

## Step-by-Step Workflow

- Gather answers to the four questions from IT, InfoSec, and legal.
- Draft acceptable-use rules covering approved tools, allowed data, and required review.
- Use Claude to structure the draft from your notes.
- Circulate it as a draft, not a final policy, for input.
- Publish the agreed version and brief the whole team on it.

## Example Prompt

```
You are a policy-drafting assistant. Turn my notes below into a draft
Acceptable Use Policy for AI tools on an IT support team.

Sections: Approved Tools, Permitted Data, Prohibited Data, Required Review
Steps, Incident Reporting.

Constraints: Use only the points in my notes. Where a section needs a
decision I have not made, insert "[DECISION NEEDED]" rather than guessing.
Keep it concise and practical.

Note: This is a starting draft for review by my manager, InfoSec, and
legal — not a final policy.

[paste your notes]
```

## What Claude Is Doing

Claude is drafting a structured policy based on the notes you provided. It is using patterns from that context to organize your points into sections. It is not deciding your policy for you — the "[DECISION NEEDED]" markers keep open questions in front of the humans who must answer them.

## Common Beginner Mistake

Assuming that because Claude is available, it is approved for all data and all uses, and rolling it out to the team with no written boundaries.

## Better Practice

Answer the four questions first, then draft an acceptable-use policy — using Claude to structure it — and route it through your manager, InfoSec, and legal before publishing. Even partial answers beat assuming everything is allowed.

## Quick Recap

- Without a policy, your least cautious analyst sets the risk level.
- Answer the four questions before deploying Claude with your team.
- Treat PII and credentials as prohibited until explicitly approved.
- Use Claude to draft the policy, but keep decisions with humans.
- Circulate as a draft and get InfoSec and legal input before publishing.

## Practice Activity

This week, draft a one-page acceptable-use policy for your team using the four questions as your outline. Mark the open decisions clearly and send it to your manager and InfoSec contact for input.
