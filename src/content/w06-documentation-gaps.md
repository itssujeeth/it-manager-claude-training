# Finding the Gaps in Your Documentation with Claude

## Familiar Scenario

A recurring database slowdown was finally resolved last night. The analyst pulled up the existing runbook mid-incident and found it nearly useless — it said "check the database" and "restart if needed," with no thresholds, no owners, and no escalation path. The incident is closed, but the documentation that failed you is still sitting in the knowledge base, ready to fail the next person.

## Core Question

Can Claude review my incident notes or KB article and tell me what important information is missing before it fails someone again?

## Why This Matters

Documentation gaps are invisible until an incident exposes them, usually at the worst possible moment. Responders write notes while focused on resolution, PIRs get drafted days later from memory, and vague templates let whole sections get skipped without anyone noticing. A structured gap review catches these problems while it is calm, not during the next Sev-1.

## The Claude Capability

Claude can act as a documentation reviewer, reading what you have and flagging what is structurally missing — action items without owners, timelines with holes, root causes stated as fact without evidence, and vague impact statements. It checks internal consistency and completeness against a structure you define. It cannot confirm whether your facts are correct; it works only with the text you provide.

## Step-by-Step Workflow

1. Paste your draft PIR, incident notes, or KB article into Claude.
2. Ask it to check against a specific list of gap types, not "review this."
3. Have Claude name the section and describe what would fill each gap.
4. Fill the flagged gaps with real information — check Slack history, alerts, or ask the responders.
5. Route the completed draft to an SME for technical review.

## Example Prompt

```
Role: You are a documentation reviewer for an IT support team.

Task: Review the incident documentation below and identify gaps in these areas:
1. Timeline gaps — periods with no recorded events
2. Corrective actions with no named owner or deadline
3. Root cause claims presented as fact without stated evidence
4. Impact statements lacking specifics (users affected, duration, SLA impact)
5. Prevention measures that are vague or not actionable
6. Missing detection-gap analysis (time between failure and first alert)

For each gap: name the section, describe what is missing, and state what
information would fill it.

Documentation:
[PASTE DRAFT]

Constraint: Only flag what is structurally missing or internally inconsistent.
Do not assume facts that are not in the text. If you cannot tell whether
something is missing, say so.
```

## What Claude Is Doing

Claude is using patterns from the text you provided to check structure and internal consistency — it can see that a timeline jumps from 14:00 to 16:00, or that "the deployment caused the outage" is stated as fact with no evidence cited. Claude is not verifying whether your timestamps or root cause are actually correct. If your notes say resolution happened at 15:45 but it was really 16:20, Claude will not know. It also cannot judge whether a corrective action is technically sound — only whether it is structured with an owner, task, and deadline.

## Common Beginner Mistake

Asking Claude "does this look complete?" and taking a yes at face value. A vague open-ended question gets a vague answer, and you learn nothing about the specific holes that will bite you later.

## Better Practice

Give Claude a concrete checklist of gap types and ask it to tie each finding to a section. Turn "many users were affected" into a flagged item with a suggested replacement: "approximately N users in [region] experienced [specific impact] for [duration]." Turn "investigate connection pooling" into a flagged action item that needs an owner and a deadline.

## Quick Recap

- Claude can flag structural gaps: missing owners, timeline holes, unproven root causes, vague impact.
- It checks completeness and consistency, not factual accuracy — you still verify the facts.
- Use a specific gap checklist, not an open-ended "is this complete" question.

## Practice Activity

Take one existing KB article or recent PIR and run it through the gap-review prompt. Make the gap review a standing step in your PIR process: draft, gap review (Claude), technical review (SME), leadership review for major incidents, then publish.
