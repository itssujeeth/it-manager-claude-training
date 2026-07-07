# Evaluating Ticket Quality Against a Rubric with Claude

## Familiar Scenario

You need to QA 20 tickets by Friday. You already have a quality rubric, but reviewing each ticket by hand — reading the resolution, checking every rubric item, writing a rationale — takes so long that in a normal week you only get through a handful. The rest go unreviewed, and quality trends stay invisible.

## Core Question

How do I score more tickets against my existing rubric without letting the review turn into 20 unverified AI scores?

## Why This Matters

In a team of 8–12 analysts, a manager can usually review only 10–15% of tickets by hand. The rest are blind spots: poor habits go uncorrected and good work goes unrecognized. Raising QA coverage lets you catch problems earlier and coach from real evidence — but only if the scores are trustworthy, which means a human still has to verify them.

## The Claude Capability

Given an explicit rubric, Claude can score the structural and communication quality of a resolution note consistently across many tickets — more consistently than a human working across a busy week. It can assess writing clarity, tone, and documentation completeness. It cannot judge technical accuracy, so that part stays with you.

## Step-by-Step Workflow

1. Write your rubric into the prompt explicitly, with a clear scale.
2. Paste one ticket's resolution note with names and PII removed.
3. Ask Claude to score each item with a short rationale and name the top improvement area.
4. Read the scores and rationales; verify the technical judgment yourself.
5. Repeat across the batch, then spot-check by re-scoring a few tickets by hand.
6. Calibrate the rubric wherever Claude and your manual scores diverge.

## Example Prompt

```
Role: You are a QA reviewer evaluating IT support ticket resolutions.

Rubric: Score each item 1–5 (1 = does not meet standard, 5 = exceeds standard).
1. Resolution clarity: Are the steps taken documented clearly enough for L2 to follow?
2. Communication tone: Is the language professional, empathetic, and appropriate?
3. Steps documented: Is the resolution reproducible from the notes alone?
4. Follow-up actions: Are next steps noted if the issue isn't fully resolved?
5. SLA notation: Are response and resolution times noted where relevant?

Resolution note: [PASTE TEXT — no names or PII]

Task: Score each item with a 1–2 sentence rationale, then name the single top improvement area.

Verification: List anything you could not assess from the text alone (for example, whether the technical fix was correct).
```

## What Claude Is Doing

Claude is applying the rubric you provided to the text you provided, using patterns in the writing. It is not verifying that the fix was technically correct, that the diagnosis was sound, or that the escalation call was right — none of that is in the ticket text. When you ask it to list what it couldn't assess, it makes the boundary of its review explicit so you know exactly where your judgment is still required.

## Common Beginner Mistake

Deploying Claude-assisted QA to score the whole team before checking whether its scores match yours. If the rubric language is vague, Claude may rate consistently higher or lower than you would, and you won't know it.

## Better Practice

Calibrate first: score the same 10 tickets both ways and compare. Where they diverge, sharpen the rubric — replace "documented" with "enough detail that an L2 can pick up the ticket," and add examples of a 1, 3, and 5 for subjective items like tone. A well-calibrated rubric typically matches your manual scores most of the time, with divergence concentrated where technical context matters.

## Quick Recap

- Put the full rubric and scale into the prompt; paste anonymized ticket text.
- Claude scores structure, clarity, and tone; you verify technical accuracy.
- Calibrate against your own manual scores before trusting it across the team.

## Practice Activity

Take five tickets you've already reviewed by hand. Score them with Claude using your rubric in the prompt, then compare against your own scores and note the two rubric items where the wording most needs sharpening.
