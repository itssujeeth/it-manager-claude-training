# Capturing Tribal Knowledge Before It Walks Out the Door

## Familiar Scenario

Your most experienced L2 analyst gave notice last week. She is the person who knows that the Citrix server reboots at 3am on Sundays, that 80% of access issues are a missing AD group, and which back-channel gets payment-system problems fixed fastest. None of it is written down anywhere. In three weeks, it leaves with her.

## Core Question

Can Claude help me extract what lives in a senior analyst's head and turn it into structured documentation before they are gone?

## Why This Matters

Tribal knowledge — process know-how that exists only in people's heads — is one of the highest operational risks on a support team. When that person is sick, on vacation, or gone, resolution times climb, mistakes increase, and newer analysts escalate unnecessarily because they do not know what to try first. The window to capture it is short, and manual documentation is usually too slow to fit in that window. Claude makes the structuring step fast enough that the capture actually happens.

## The Claude Capability

Claude can take rough interview notes and convert them into structured documentation — a runbook, a checklist, an escalation guide. It organizes what you give it into a usable format and flags where information is missing. It does not know your environment, so it must not fill gaps with invented steps; you instruct it to mark gaps instead.

## Step-by-Step Workflow

1. Run a short interview with the senior analyst using specific questions.
2. Take notes or record the session — rough notes are fine.
3. Give the notes to Claude with a clear structure request and a no-inventing constraint.
4. Review the draft, fill every `[NEEDS VERIFICATION]` flag with the analyst present.
5. Set a review-by date so the captured knowledge stays current.

Useful interview questions:

- "Walk me through exactly what you check first when you see this symptom."
- "What's the thing you always try that nobody else knows to try?"
- "What do you check before you escalate, and what does that check look like?"
- "What's the most common mistake analysts make with this issue?"
- "What would you tell a new hire on their first day about this?"

## Example Prompt

```
Role: You are a technical writer converting informal notes into structured
documentation.

Context: These notes describe how an experienced L2 analyst handles [issue type].

Raw notes:
[PASTE YOUR NOTES]

Task: Convert these into a structured troubleshooting runbook with trigger
criteria, prerequisites, numbered steps with decision branches, escalation
criteria, and a verification step.

Constraints: Structure only. Do not invent steps, tools, or commands that are
not in the notes. Where information is missing, insert [NEEDS VERIFICATION]
rather than guessing.
```

## What Claude Is Doing

Claude is using patterns from the notes you provided to organize them into a documentation format. It is not adding real knowledge about your systems, and it will try to make gaps read smoothly if you let it. Claude is not verifying facts unless you provide source material. The `[NEEDS VERIFICATION]` constraint forces the gaps into the open so you can fill them with the analyst's real knowledge while you still have access to them.

## Common Beginner Mistake

Letting Claude "complete" the runbook by filling plausible-sounding gaps. The result looks finished but contains steps the analyst never actually described — which is worse than a visibly incomplete document, because no one knows which parts are real.

## Better Practice

Interview with specific questions rather than "tell me everything you know" — you get far better raw material. The knowledge worth capturing tends to fall into recognizable types:

- **Resolution shortcuts:** "Check the AD group first — 80% of access issues are this."
- **Environment quirks:** "Citrix reboots at 3am Sundays; if a Monday ticket looks like Citrix, check when the user logged in."
- **Escalation contacts:** "For payment issues, skip the generic L2 queue and go straight to the payments platform team."
- **Known false alarms:** "The FILESERVER-01 disk alert fires at 85% but doesn't need action until 95% — a retention job runs at 2am."

## Quick Recap

- Tribal knowledge is a top operational risk; capture it before the person leaves.
- Claude structures rough interview notes fast — but only structures, it does not invent.
- Use `[NEEDS VERIFICATION]` for gaps and fill them with the expert present, then set a review date.

## Practice Activity

Book a 30-minute session with one senior analyst this week. Use the five interview questions on a single recurring issue, then run your notes through the example prompt. Fill the flagged gaps with the analyst before the meeting ends, and mark the article with a review-by date.
