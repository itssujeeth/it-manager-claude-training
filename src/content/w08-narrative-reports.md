# Writing Data Narratives for Leadership Reports

## Why narratives matter

Raw numbers in a leadership report require readers to do the interpretation themselves. A well-written narrative tells the story the data is showing — trends, causes, and recommended actions — in language that decision-makers can act on.

Claude can convert your verified metrics into clear, structured narratives faster than writing from scratch.

## The difference between a data dump and a narrative

**Data dump:** "P1 tickets: 12. P2 tickets: 34. MTTR P1: 2.3 hours. MTTR P2: 6.1 hours. SLA attainment: 94%."

**Narrative:** "P1 volume increased 40% versus last week (12 vs. 8), driven primarily by three VPN outage incidents on Tuesday and Thursday. Despite the volume increase, MTTR for P1 remained at 2.3 hours — within SLA. P2 MTTR improved from 7.4 to 6.1 hours, reflecting the triage template deployed in Week 3."

The second version tells leadership something — the P1 spike was a known event, P2 is improving, and there's a reason for it.

## How to prompt Claude for narrative output

Give Claude your verified metrics, not raw data. Let the verification step happen before Claude writes:

```
Context: These are verified ticket metrics for the week of [dates].
Metrics:
- Total volume: [N] tickets ([+/-N%] vs. prior week)
- P1 tickets: [N] (MTTR: [N] hours, SLA: [pass/miss])
- P2 tickets: [N] (MTTR: [N] hours, SLA: [N%])
- Top 3 categories: [list with counts]
- Notable events: [any outages, deployments, or incidents that explain anomalies]

Task: Write an executive-ready ops summary with:
1. 2-sentence headline (what happened this week overall)
2. Volume and trend section
3. SLA performance section
4. Notable events and their impact
5. Top 3 improvement opportunities based on the data

Audience: IT director and VP of Operations. No technical jargon.
Format: Short paragraphs under clear headings. Bullet lists for improvement opportunities.
```

## Framing improvement opportunities correctly

Leaders respond well to improvement recommendations that are specific and grounded. Claude can generate these from patterns in the data — but vague inputs produce vague outputs.

Instead of: "There were many repeat tickets this week."

Write: "Top category: password reset (34 tickets, 22% of volume, up from 15% last week). 80% are submitted on Mondays — aligns with weekend password expiry policy."

That data gives Claude what it needs to recommend: "Consider adjusting password expiry window to avoid Monday volume spikes" or "Deploy a self-service password reset portal to reduce analyst handling time."

## Tone calibration for audience

Claude will match the tone you specify. For executive summaries:
- Short sentences, no abbreviations
- Business impact framing ("resolved before customer SLA breach") not technical framing ("MTTR under threshold")
- Proactive framing for recommendations ("the team identified" rather than "there were problems with")

For technical operational reports to your team:
- More detail on root causes and technical specifics
- Include process observations and tool issues
- Can use internal terminology

Specify your audience explicitly in every prompt.
