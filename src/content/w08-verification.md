# Verifying Claude's Metric Calculations

## Familiar Scenario

You asked Claude to calculate SLA attainment from your ticket export for the board deck. It returned "SLA attainment: 94%" — clean, confident, no hedging. Something felt high, so you counted the breached tickets in your source data by hand. The real number was 87%. Had you not checked, a wrong figure would have gone in front of the board.

## Core Question

Why can't I trust Claude's numbers as-is, and how do I verify them quickly without redoing all the math?

## Why This Matters

A wrong metric in a leadership report, an SLA figure, or a performance review does real damage — decisions get made on it, and your credibility rides on it. The difference between 94% and 87% attainment could change a staffing decision. Verification is not a sign Claude is unreliable; it is the standard operating procedure for any AI-assisted data work, and it protects you.

## The Claude Capability

Claude is a language model, not a spreadsheet engine. It processes numbers as tokens in text, not as values in a calculation engine. For simple counts and percentages on small, clean datasets it is usually accurate. For calculations across many rows, conditional logic, or chained operations, error rates rise — and the output looks just as confident whether it is right or wrong.

## Step-by-Step Workflow

1. Keep your source data open in a second window while you review Claude's output.
2. Cross-check key totals first — if the total is wrong, every derived percentage is wrong too.
3. Spot-check a couple of proportions against the raw rows.
4. Verify any number that surprises you — your intuition is a useful error detector.
5. Use your source-data numbers, not Claude's, wherever they differ.

## Example Prompt

When you find an error, correct it and ask for a revised output:

```
Your total volume calculation was 312 but my source data shows 287 tickets.
Please recalculate the following metrics using 287 as the total volume:
[list the metrics].
```

Then verify the revised numbers too — a correction does not guarantee accuracy.

## What Claude Is Doing

Claude is using patterns from the data you pasted to produce numbers that read as calculated results, but it is not running them through a verified calculation engine. Common failure modes include rounding errors compounding across chained calculations, an incorrect denominator in a percentage (especially when some rows meet a filter and some do not), off-by-one errors in date ranges ("this week" vs. "last 7 days"), and missed rows when the pasted data is formatted inconsistently. Claude is not verifying its own arithmetic against your source — that step is yours.

## Common Beginner Mistake

Trusting a number because it is specific and stated confidently. "94%" feels precise and authoritative, so it goes straight into the deck. Confidence and precision in the wording tell you nothing about whether the calculation was correct.

## Better Practice

Verify efficiently rather than exhaustively — aim for a 5-minute check, not a 30-minute recalculation:

1. Spot-check totals and the key percentages first (about 2 minutes).
2. Verify the one or two metrics that will be quoted most.
3. Note discrepancies and use your source numbers.

Prioritize high-stakes figures: anything going to leadership, tied to SLA reporting, or tied to team performance. A simple rule — if a metric will appear in a slide, a report, or an email to a senior stakeholder, verify it independently. Claude's number is a draft; your source data is the source of truth.

## Quick Recap

- Claude's arithmetic is approximate on large or messy data and looks confident either way.
- Verify totals first, then key percentages; a wrong total invalidates everything downstream.
- Any number headed for leadership or SLA reporting must be checked against source data.

## Practice Activity

Take one Claude-generated metric summary from a recent export and verify it in five minutes: cross-check the total against your source rows, spot-check two percentages, and note any discrepancy. If your team uses Claude for reporting, share the 5-minute verification routine so it becomes standard practice, not an afterthought.
