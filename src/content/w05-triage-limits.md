# What Claude Should Not Decide During Triage

## Familiar Scenario

An analyst, trying to move faster, starts pasting tickets into Claude and routing them exactly as suggested — category, priority, and assignment group, no review. It works fine for a week. Then a ticket that mentions "a few users can't log in and one of them saw a strange password prompt" gets labeled a routine P3 access request and sits in the general queue for six hours. It was an early sign of a credential-phishing incident.

## Core Question

Which triage decisions can I let Claude draft, and which ones must a person always own?

## Why This Matters

Some triage decisions are low-consequence and easy to correct. Others — priority, security classification, and ownership — carry real cost when they are wrong. A miscategorized security ticket, a P1 sitting in a P3 queue, or a ticket routed to the wrong team during an outage can turn a small problem into a major one. Knowing where to keep a human in the loop protects your service and your users.

## The Claude Capability

Base Claude chat does not access live systems. It works only with the text you paste into the prompt. It cannot query your ITSM platform, look up ticket or asset history, check CMDB records, see your SLA data, or tell whether a service is actually down right now. If your organization enables tools or file upload, Claude may work with those sources — confirm what your org allows.

This means Claude can draft a suggestion, but it cannot make a decision that depends on system context or judgment it does not have.

## Step-by-Step Workflow

1. Let Claude draft category and a first-pass priority suggestion with reasoning.
2. Keep three decisions human-owned: final priority, security classification, and ownership/routing.
3. For any ticket with security signals, route it to a human immediately — do not rely on Claude's read.
4. Confirm the suggestion against system context (history, related incidents, VIP status) before acting.
5. Record where suggestions were overridden so you can improve the prompt.

## Example Prompt

```
Role: You are a triage assistant producing draft suggestions for human review.

Context: We use ITIL 4 categories and P1–P4 priorities. You cannot see our
systems; work only from the ticket text.

Task: For the ticket below, provide:
- Draft category and reason
- Draft priority and reason
- Any signals that this could be a security incident (unusual login prompts,
  credential requests, data exposure, malware) — list them explicitly
- What system context a human should check before routing

Ticket:
[PASTE FULL TICKET TEXT]

Constraint: Do not state a final priority or a final routing decision. Label
everything as a draft for human confirmation. If you see any security signal,
recommend escalation to a human immediately.
```

## What Claude Is Doing

Claude is using patterns from the text you provided to flag signals and draft suggestions. It is not verifying whether a service is down, whether the user is a VIP, or whether this ticket relates to three other open incidents — it has no access to any of that. Claude may also express high confidence in a suggestion that is wrong; the absence of hedging does not mean the answer is correct. Evaluate the output against the ticket facts, not Claude's tone.

## Common Beginner Mistake

Treating Claude's confident output as a decision. Routing a ticket is an action; Claude produces text. Automating "Claude's suggestion goes straight to the ITSM system" removes the human safety check on exactly the decisions where errors cost the most.

## Better Practice

Keep priority, security classification, and ownership as human-confirmed steps. Use Claude to accelerate the reading and drafting, and design your process so a person always sits between "Claude suggested this" and "the ticket was routed." Ask Claude to surface security signals so the human catches them faster — but the human makes the call.

## Quick Recap

- Claude drafts; humans own final priority, security classification, and routing.
- Claude cannot see live systems, history, or related incidents unless you provide them.
- Confidence is not correctness — check output against ticket facts and system context.

## Practice Activity

Write a one-page "human-owned decisions" rule for your team listing the triage steps Claude may draft and the ones a person must confirm. Include an explicit rule that any ticket with a security signal goes straight to a human. Share it with your analysts this week.
