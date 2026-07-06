# Identifying Quality Patterns Across Tickets

## From individual reviews to systemic insight

Manual QA review tells you whether ticket #12345 was good. Pattern analysis tells you whether ticket documentation quality is declining, which ticket types have the worst resolution notes, and whether a recent process change improved quality across the board.

Pattern analysis is where Claude-assisted QA creates the most value for a manager — it turns individual data points into actionable team-level insight.

## How to structure a batch QA analysis

Instead of reviewing tickets one at a time, collect 10–20 and review them together:

```
Role: You are a QA analyst reviewing a batch of IT support ticket resolutions.
Task: After reviewing all tickets below, identify:
1. The most common documentation gap across this batch
2. Any ticket types that consistently show lower quality than others
3. Any patterns in the failures — are they concentrated in certain shifts, categories, or complexity levels?
4. Two or three specific improvement recommendations for the team based on this batch

Rubric: [Include your standard rubric]
Tickets: [PASTE BATCH — numbered, no names or PII]
```

## Pattern types worth tracking

**Temporal patterns** — Do Monday morning tickets have worse documentation than Friday afternoon? (Common — Monday volume pressure vs. Friday rush.) Do night-shift resolutions differ from day-shift?

**Complexity patterns** — Do simple tickets (password resets) have better documentation than complex ones (multi-system issues)? If yes: analysts may be skipping steps when under cognitive load. The fix is a template, not coaching.

**Category patterns** — Are VPN tickets consistently missing root cause documentation? Network tickets often are — because the resolution is often "it works now" and the underlying cause isn't investigated.

**Analyst cohort patterns** — Without naming individuals, you can look at patterns by experience cohort (under 6 months vs. over 2 years) to identify whether it's a training issue or an individual issue.

## Turning patterns into action

A pattern is only useful if it drives a decision. For each pattern Claude identifies, ask:

- **Is this a knowledge gap?** → Training or documentation
- **Is this a process gap?** → Template or checklist
- **Is this a time pressure issue?** → Staffing or workflow change
- **Is this individual coaching?** → Specific 1:1 conversation

Claude can help you draft the action plan once you've diagnosed the root cause. Provide the pattern and ask for improvement options:

```
Pattern identified: 7 of 10 VPN tickets are missing root cause documentation.
Context: Analysts resolve VPN issues but don't record why it happened.
Task: Suggest 3 ways to address this — ranked by implementation effort.
```

## Tracking improvement over time

Run batch QA monthly and compare patterns. If you implement a change (new template, additional training, process update), the next batch review tells you whether it worked.

Documenting this systematically — pattern identified, action taken, quality score before/after — gives you a feedback loop that makes each intervention more targeted than the last.
