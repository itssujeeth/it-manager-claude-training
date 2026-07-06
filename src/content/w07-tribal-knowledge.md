# Converting Tribal Knowledge into Documentation

## What tribal knowledge costs you

Every time a senior analyst is out sick, on vacation, or leaves the team, their undocumented knowledge leaves with them. Resolution times increase. Mistakes get made. Newer analysts escalate unnecessarily because they don't know what to try first.

Tribal knowledge — process knowledge that lives only in people's heads — is one of the highest operational risks in a support team. Claude makes the extraction process fast enough that you can actually do it.

## The extraction interview

The most effective approach is a short interview: ask the senior analyst to walk you through the issue while you take notes or record the session, then use Claude to convert the notes into structured documentation.

Useful interview questions:
- "Walk me through exactly what you check first when you see this symptom"
- "What's the thing you always try that nobody else knows to try?"
- "What do you check before you escalate, and what does that check look like?"
- "What's the most common mistake analysts make with this issue?"
- "What would you tell a new hire on their first day about this?"

You get better raw material from specific questions than from asking "tell me everything you know."

## Using Claude to structure the output

Once you have notes (rough is fine), give them to Claude with a structure request:

```
Role: You are a technical writer converting informal notes into structured documentation.
Context: These notes describe how an experienced L2 analyst handles [issue type].
Raw notes: [PASTE YOUR NOTES]
Task: Convert these into a structured troubleshooting runbook with: trigger criteria, prerequisites, numbered steps with decision branches, escalation criteria, and a verification step.
Constraints: Fill in structure only — do not invent steps, tools, or commands that are not mentioned in the notes. If information is missing, flag it with [NEEDS VERIFICATION] rather than guessing.
```

The `[NEEDS VERIFICATION]` constraint is important. Claude will try to fill gaps plausibly — but plausible is not accurate. You want to see the gaps explicitly so you can fill them with real information.

## Common tribal knowledge types

**Resolution shortcuts** — "Before doing anything, check if the user is in the AD group — 80% of access issues are this." These never make it into formal documentation but save 15 minutes per ticket.

**Environment quirks** — "Our Citrix server reboots at 3am on Sundays — if a Monday morning ticket looks like a Citrix issue, check if the user logged in before 3am." This only exists in senior analysts' heads.

**Escalation contacts** — "For payment system issues, skip the generic L2 queue and go directly to the payments platform team — they're faster and the generic queue doesn't triage it correctly."

**Known-false alarms** — "The disk space alert on FILESERVER-01 fires at 85% but doesn't need action until 95% — we have a retention job that runs at 2am."

All of these are worth documenting. None of them are currently in any runbook.

## Maintaining extracted knowledge

Knowledge goes stale. Build a review cadence into your documentation process:
- Mark each extracted article with a "review by" date (6 months for fast-changing systems, 12 months for stable ones)
- When a senior analyst notices a step is outdated, update the article the same day
- Use Claude to help rewrite sections when the underlying process changes

The extraction effort is wasted if documents become inaccurate faster than they're read.
