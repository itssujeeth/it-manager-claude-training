# Building a Team Triage Template

## Familiar Scenario

Three of your analysts have started using Claude for triage. One writes a detailed prompt with your category definitions; another types "what category is this ticket?"; the third pastes the ticket with no instructions at all. The results are all over the place, and when you try to compare quality or coach the team, there is no shared starting point.

## Core Question

How do I give my whole team one reliable triage prompt so everyone gets consistent, comparable results?

## Why This Matters

A prompt written once and used inconsistently produces inconsistent output. That makes quality impossible to measure, training impossible to standardize, and reporting unreliable. A shared, tested template turns triage from an individual habit into a repeatable team process — and gives you one place to make improvements that benefit everyone.

## The Claude Capability

Claude produces more consistent output when the prompt is consistent. A reusable template locks the constant parts — your category definitions, priority scale, and assignment groups — and leaves placeholders only for the ticket-specific text. A good template has three properties: it is parameterized (placeholders for the variable parts), versioned (stored where the team can find and update it), and tested (validated against known tickets before rollout).

## Step-by-Step Workflow

1. Draft the template with your real definitions, priority scale, and assignment groups.
2. Extract the variables — everything ticket-specific goes in `[brackets]`; everything constant stays fixed.
3. Store it where analysts can copy it quickly (Confluence page, shared doc, pinned Slack message).
4. Test it against 15–20 labeled tickets and score the results.
5. Version it — note what changed and why each time you update it.

## Example Prompt

```
Role: You are an experienced ITSM triage analyst producing draft suggestions
for human review.

Context: [Your environment — ticket volume, key systems, team structure]

Category definitions:
- Incident: [your criteria]
- Service Request: [your criteria]
- Problem: [your criteria]
- Change: [your criteria]

Priority scale: P1 = [criteria], P2 = [criteria], P3 = [criteria], P4 = [criteria]
Assignment groups: [list your groups and what each handles]

Task: For the ticket below, provide:
1. Category with a one-sentence reason
2. Draft priority with a one-sentence reason
3. Suggested assignment group
4. Missing information that would change the classification
5. Any security signals worth a human's immediate attention

Ticket:
[PASTE TICKET TEXT]

Format: Numbered list matching the five items above.
Constraint: If the text is insufficient to classify confidently, state what
is needed rather than guessing. All output is a draft for human confirmation.
```

## What Claude Is Doing

Claude is using patterns from the definitions and ticket text you provided to produce a structured suggestion. Because the constant parts of the prompt no longer vary between analysts, the outputs become comparable. Claude is not verifying anything against your systems — the template improves consistency, not access to facts.

## Common Beginner Mistake

Building a generic template that says "route to the relevant team" and "assign appropriate priority." Vague inputs produce vague, inconsistent output — the exact problem you were trying to solve.

## Better Practice

Calibrate the template to your environment. Use your actual assignment group names ("Service Desk, Network Engineering, Cloud Ops"), your real SLA thresholds ("P1 = 4-hour response"), and your specific escalation triggers ("what turns a P2 into a P1 here"). Score the template on labeled tickets before rollout:

| Metric | Target |
|--------|--------|
| Category accuracy | >90% |
| Priority accuracy | >80% |
| Correct assignment group | >85% |
| Missing info flagged | All cases where info was actually missing |

If priority accuracy is low, your P1/P2 boundary language is probably ambiguous — tighten it.

## Quick Recap

- A shared, tested template makes triage consistent and comparable across the team.
- Parameterize the ticket-specific parts; keep definitions and scales fixed.
- Store it where analysts can find it, version your changes, and re-test after process changes.

## Practice Activity

Build one triage template for your team using the example above with your real groups and thresholds. Test it against 15 labeled tickets, record the four accuracy scores, and post the template where your analysts can copy it. Review it again next quarter or after any major process change.
