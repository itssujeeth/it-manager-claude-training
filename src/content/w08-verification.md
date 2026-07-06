# Verifying Claude's Data Output

## The core rule

Claude's arithmetic is approximate. On small, clean datasets it is often correct. On large, messy, real-world data it will sometimes produce plausible-looking numbers that are wrong. Never include a Claude-generated metric in a report or decision without checking it against your source data.

This is not a failure of Claude — it is the correct way to use any AI for data work. The verification step is part of the workflow, not an edge case.

## Why Claude makes arithmetic errors

Claude is a language model, not a spreadsheet engine. It processes numbers as tokens in text, not as values in a calculation engine. For simple counts and percentages on small datasets, it is usually accurate. For calculations involving many rows, conditional logic, or chained operations, error rates increase.

Common failure modes:
- **Rounding errors accumulated across multiple calculations** — small errors compound
- **Incorrect denominator in percentage calculations** — especially when some rows meet a filter and some don't
- **Off-by-one errors** in date range calculations ("this week" vs. "last 7 days")
- **Missing rows** if the pasted data has inconsistent formatting Claude misparses

## How to verify efficiently

You don't need to recheck every number. Prioritize:

**High-stakes numbers first** — anything going to leadership, anything tied to SLA reporting, anything tied to team performance reviews.

**Cross-check key totals** — if Claude says total volume was 312 tickets, count your source rows. If the total is wrong, all derived metrics (percentages, averages) are also wrong.

**Spot-check proportions** — if Claude says P1 = 8% of volume, manually check a few rows to see if that looks right.

**Verify any metric you don't already have intuition about** — if a number surprises you, check it. Your intuition is a useful error-detection tool.

## Making verification fast

Structure your verification workflow so it takes 5 minutes, not 30:

1. Keep your source data open in a second window
2. Spot-check totals and key percentages first (2 minutes)
3. Verify the one or two metrics that will be quoted most
4. Note any discrepancies and use your source data numbers, not Claude's

The goal is not perfect verification of everything — it is making sure the numbers that matter are right.

## When to flag Claude's errors back into the prompt

If Claude produces an error, you can correct it and ask for a revised output:

```
Your total volume calculation was 312 but my source data shows 287 tickets. 
Please recalculate the following metrics using 287 as the total volume: [list metrics].
```

Claude will usually produce a corrected version. Verify the revised numbers too — correction does not guarantee accuracy.

## Building a verification culture

If your team uses Claude for data reporting, they need to understand the verification step. It's not optional and it's not a sign that Claude is unreliable — it's the standard operating procedure for AI-assisted analysis.

> A verified number from Claude is as useful as any other verified number. An unverified number from Claude is a liability.
