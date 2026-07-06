# Building Executive-Ready Presentations with Claude

## What "executive-ready" actually means

An executive presentation answers three questions in the first 30 seconds: what is the problem, what are you proposing, and what do you need from the audience. Everything else is supporting detail that may never be read.

Claude can help you build presentations from operational data — but only if you brief it correctly on the audience.

## Audience-first prompting

Before writing a single slide, tell Claude who the reader is and what they care about:

- **CFO / Finance lead** — cost impact, ROI, payback period, budget required
- **CTO / VP Engineering** — risk, technical feasibility, integration complexity
- **COO / Operations lead** — efficiency gain, process change, team impact
- **Board / CEO** — strategic alignment, competitive position, headline metrics only

The same data produces different slides for different audiences. Claude handles this well when you specify it explicitly.

## Converting operational data into executive narrative

Give Claude your verified metrics and ask for narrative, not bullet points:

```
Context: I am presenting to [role]. They care most about [primary concern].
Data: [Your verified figures]
Task: Convert this data into an executive slide narrative. Lead with the business impact.
Format: One-sentence headline per topic, 2–3 supporting bullets, no more than 6 words per bullet.
Constraints: Use only the numbers I provided. No jargon. No passive voice.
```

## Before/after comparisons

A before/after comparison is the most persuasive structure for operational improvements: here is what it costs today, here is what it will cost after the change, here is the difference.

Claude can generate this structure cleanly:

```
Current state: [metrics]
Proposed state: [projected metrics based on your estimates]
Task: Generate a before/after comparison table and a 2-sentence executive narrative of the delta.
```

Do not ask Claude to project the "after" figures — you own those estimates. Provide them; Claude formats them.

## Slide design vs. content

Claude generates content — narrative, bullets, tables, talking points. It does not produce slides. Use Claude for the content layer, then apply your template in PowerPoint, Google Slides, or Keynote.

A useful workflow: generate the full narrative in Claude, extract the key phrases as slide bullets, then build the deck. The narrative becomes your speaker notes.

## One number per slide

The most common mistake in operational presentations: too many numbers. When a slide has 12 metrics, leadership focuses on the one that surprises them — usually not the one you wanted to emphasize.

Ask Claude to help you identify the single most important metric per slide: "Given this data, which one number makes the strongest case for this proposal?" Then lead with that.
