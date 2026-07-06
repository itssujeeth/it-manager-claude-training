# Building Reusable Triage Prompt Templates

## Why templates beat one-off prompts

A triage prompt written once and used inconsistently produces inconsistent results. A team that prompts differently gets different outputs, making quality comparison and training impossible.

A reusable template has three characteristics:
1. **Parameterized** — placeholders for the variable parts (ticket text, context)
2. **Versioned** — stored somewhere your team can access and update it
3. **Tested** — validated against a labeled ticket set before team use

## Anatomy of a triage prompt template

```
Role: You are an experienced ITSM triage analyst.
Context: [Describe your environment: ticket volume, systems, team structure]
Category definitions: [Incident / Service Request / Problem / Change — with your own criteria]
Priority scale: [P1 = ..., P2 = ..., P3 = ..., P4 = ...]
Assignment groups: [List your groups and what they handle]

Task: Classify the following ticket and provide:
1. Category (Incident / Service Request / Problem / Change)
2. Priority (P1–P4) with one-sentence justification
3. Suggested assignment group
4. Missing information that would change the classification
5. Escalation recommendation (yes/no with reason)

Ticket:
[PASTE TICKET TEXT HERE]

Format: Numbered list matching the 5 items above.
Constraint: If ticket text is insufficient to classify confidently, state what additional information is needed.
```

## How to make a template reusable

**Step 1 — Extract the variables.** Everything specific to a single ticket goes in `[brackets]`. Everything constant (your category definitions, your priority scale) stays fixed in the template body.

**Step 2 — Store it where analysts can find it.** A Confluence page, a shared doc, or a pinned message in your team Slack. The template only saves time if people can copy it quickly.

**Step 3 — Version it.** When you improve the template, note what changed and why. "V2 — added 'disruption language' check after 3 incidents misclassified as requests" is more useful than overwriting silently.

## Calibrating for your environment

Generic triage templates produce generic results. Your template should include:

- **Your actual assignment groups** — "Service Desk, Network Engineering, Cloud Ops" beats "the relevant team"
- **Your SLA thresholds** — if P1 = 4-hour response and P2 = 8-hour, say so
- **Your escalation triggers** — what turns a P2 into a P1 in your environment

## Measuring template effectiveness

Run your template against 15–20 labeled tickets (ones you already know the answers to). Score four things:

| Metric | Target |
|--------|--------|
| Category accuracy | >90% |
| Priority accuracy | >80% |
| Correct assignment group | >85% |
| Missing info flagged | All cases where info was actually missing |

If priority accuracy is below target, your P1/P2 boundary criteria are probably ambiguous — tighten the language in the template.

> Templates drift. Review yours quarterly or after any major process change.
