# Drafting a Standard Operating Procedure from Someone's Head

## Familiar Scenario

Your team runs a monthly access-recertification process. Only one senior analyst really knows how it works. When a new hire joins, onboarding takes three times longer than it should because there is no written procedure — the new person shadows, asks questions, and still misses steps. When the senior analyst is on leave, the process stalls.

## Core Question

"I don't have hours to write a formal SOP, and the person who knows the process is too busy doing it to document it. How do I get a usable first draft quickly?"

## Why This Matters

Undocumented processes are a direct operational risk. They create single points of failure, slow onboarding, and produce inconsistent results when different people improvise the steps. A written SOP is what lets any qualified team member complete the work the same way every time — and it protects you when key staff are unavailable.

## The Claude Capability

Claude can take a rough, unstructured description of a process — even messy verbal notes — and organize it into a structured first-draft SOP with clear sections, numbered steps, and decision branches. The economics change completely: a 15-minute walkthrough becomes a structured draft in minutes, instead of an afternoon you never find.

## Step-by-Step Workflow

1. Ask the process owner to walk you through the process out loud while you jot rough notes. Capture the trigger, the steps in order, the decision points, what can go wrong, and how you know it finished.
2. Don't clean up the notes. You need the knowledge, not polished prose.
3. Paste the notes into Claude with a specific format request and a rule for handling gaps.
4. Review the draft with the process owner to fill in anything marked as missing.
5. Test-follow the SOP before publishing it.

## Example Prompt

```
Role: You are a technical writer producing operating procedures for an IT
support team.

Context: Below are my rough notes from a walkthrough of our monthly access
recertification process. The notes are unstructured and may have gaps.

Notes:
[paste your raw notes here]

Task: Convert these notes into a structured SOP with these sections: Title,
Purpose, Scope (who does this and when), Prerequisites (access or tools
needed), Numbered Steps with decision branches, Escalation Criteria, and
Review Date.

Output format: Markdown with clear headings and numbered steps.

Constraints: Use only the information in my notes. Do not invent steps or
system details. Where information is missing, insert a flag in the form
[NEEDS INPUT: what is required] instead of guessing.

Verification: At the end, list every [NEEDS INPUT] flag as a checklist so I
can confirm each one with the process owner.
```

## What Claude Is Doing

Claude is using patterns from the notes you provided to structure them into a recognizable SOP format. It is organizing and sequencing your content — it is not verifying that the steps are correct for your environment. The `[NEEDS INPUT]` instruction matters because, without it, Claude will fill gaps with plausible-sounding but invented details.

## Common Beginner Mistake

Pasting a two-line description and accepting whatever Claude produces. With thin input, Claude fills in generic steps that look authoritative but don't match how your team actually works — for example, guessing a system menu path or inventing an approval step that doesn't exist.

## Better Practice

Give Claude real detail, insist on `[NEEDS INPUT]` flags for anything missing, and treat the draft as a starting point. Claude cannot know your environment-specific quirks — the exact menu path in your version of ServiceNow, the informal rule that VIP tickets always go to the Team Lead, or the month-end exception. Those come from the process owner.

## Quick Recap

- Claude turns rough notes into a structured SOP draft in minutes, not hours.
- Force gaps to surface with a `[NEEDS INPUT]` flag rather than letting Claude guess.
- Always test-follow the SOP before publishing — a procedure that needs the author in the room isn't finished.

## Practice Activity

This week, pick one undocumented process your team runs regularly. Spend 15 minutes taking rough notes from the person who owns it, then use the example prompt to generate a first-draft SOP. Resolve every `[NEEDS INPUT]` flag and ask a colleague who has never done the task to test-follow it.
