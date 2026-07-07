# Preparing an Executive Briefing Under Time Pressure

## Familiar Scenario

It's 11am. The CISO just asked for a five-minute operations briefing at 2pm — how the support team is handling the recent spike in security-related tickets. You have the raw data: ticket volumes, response times, a backlog trend. What you don't have is time to turn it into something a non-technical executive will absorb in five minutes.

## Core Question

"I have the numbers but no time to shape them into a story. How do I get from raw operational data to a clear executive narrative that lands in the first 30 seconds?"

## Why This Matters

An executive briefing succeeds or fails on framing. Leadership decides in the first 30 seconds whether they understand what you're telling them — what the problem is, what you're proposing, and what you need from them. A data dump forces them to do that work themselves, and under time pressure they simply won't.

## The Claude Capability

Claude can convert your verified metrics into an audience-appropriate narrative — headlines, tight supporting points, and before/after comparisons — framed for the specific executive you're briefing. It shapes the content layer. It does not build slides and it does not produce the numbers; you supply verified figures and your own projections.

## Step-by-Step Workflow

1. Confirm who you're briefing and their single primary concern.
2. Assemble your verified metrics and any projected "after" figures you own.
3. Ask Claude for a narrative — headline plus a few supporting points per topic — not a wall of bullets.
4. Ask which single number makes the strongest case, and lead with it.
5. Move the narrative into your slide template; use the full version as speaker notes.

## Example Prompt

```
Role: You are helping me prepare a five-minute executive briefing.

Context:
Audience: [CISO / CFO / COO / CEO] — their primary concern is [risk / cost /
efficiency / strategic position].
Verified data: [paste your actual figures]

Task: Convert this data into an executive slide narrative. Lead with the
business impact for this audience.

Output format: One-sentence headline per topic, then two to three supporting
bullets of no more than six words each. Then a two-sentence spoken opening
that states the problem, what I'm proposing, and what I need from them.

Constraints: Use only the numbers I provided. No jargon. No passive voice.
Do not project or estimate any figures I did not give you.

Verification: Tell me which single number in this data makes the strongest
case for the audience, and why.
```

## What Claude Is Doing

Claude is using patterns from the verified data you provided to frame a narrative for your audience. It is not verifying the figures, and it will not invent the "after" numbers unless you provide them. The framing quality comes from how precisely you describe the audience and their concern — the same data produces a different briefing for a CFO than for a CISO.

## Common Beginner Mistake

Crowding the briefing with every metric you have. When a slide shows twelve numbers, the executive fixes on the one that surprises them — usually not the one you wanted to emphasize — and your narrative is gone. More numbers reduce clarity, not increase it.

## Better Practice

Brief Claude on the audience first, lead each slide with one headline number, and let the before/after structure carry improvements: here is what it costs today, here is what it costs after, here is the difference. Provide the "after" figures yourself — you own those estimates; Claude only formats them. Keep the full narrative as your speaker notes and put only key phrases on the slides.

## Quick Recap

- Executive briefings win or lose in the first 30 seconds — lead with the business impact.
- Claude frames verified data into an audience-specific narrative; it does not build slides or invent figures.
- One headline number per slide beats a dozen — ask Claude which number makes the strongest case.

## Practice Activity

This week, take a real set of ops metrics and run the example prompt for a specific executive audience. Identify the single strongest number, build a three-slide narrative around it, and time yourself delivering it in under five minutes.
