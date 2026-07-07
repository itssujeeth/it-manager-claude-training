# Analyzing Ticket Data with Claude

## Familiar Scenario

Your director wants to know why last month's volume was up and where the team's time is going. You have a CSV export of 500 tickets sitting on your desktop. You do not write SQL, building the pivot tables will eat your afternoon, and you need something readable, not a spreadsheet, by tomorrow.

## Core Question

Can Claude find the patterns in my ticket export and summarize them — without me writing queries — and what can it safely compute?

## Why This Matters

Managers sit on useful data they cannot easily interrogate. Getting from a raw export to "here's what's driving volume and here's what I'd do about it" usually requires spreadsheet skills or an analyst's time. Doing it faster means you can actually use your data to manage — but only if you understand what Claude computes reliably and what it does not, and if you protect the data properly first.

## The Claude Capability

Claude can read tabular or CSV data pasted into the prompt and produce category breakdowns, volume summaries, trend analysis, and a readable narrative. It handles counting and distribution well. It is a language model, not a spreadsheet engine, so percentage and time-based calculations need verification against your source data. Base Claude chat does not access live systems; if your organization enables file upload or tools, Claude may work with those sources — confirm what your org allows.

## Step-by-Step Workflow

1. Anonymize the data — replace customer names, remove emails, phone numbers, and recognizable internal system names.
2. Clean the format — remove merged cells, summary rows, and color formatting; keep clear headers.
3. Limit to the columns your question needs — extra columns add noise and errors.
4. Ask a specific analysis question and tell Claude to flag anything it cannot compute confidently.
5. Verify the numbers against your source data before they go anywhere.

## Example Prompt

```
Context: This is anonymized ticket data from [date range]. Columns are:
[list the key columns].

Task: Analyze this data and produce:
1. Total volume by [category / priority / team / day-of-week]
2. Trend vs. the prior period (data provided below)
3. SLA attainment by priority tier
4. Top 3 recurring issue types by ticket count
5. Any anomalies — unusual spikes, drops, or patterns worth flagging

Format: A short bullet summary under each heading. For every number, note
whether it is a direct count or a calculated percentage. Flag any calculation
you cannot perform confidently rather than guessing.

Data:
[PASTE ANONYMIZED CSV]
```

## What Claude Is Doing

Claude is using patterns from the data you pasted to count, group, and describe. For simple counts and distributions on clean data, it is usually accurate. For percentages, SLA attainment, and MTTR, it processes numbers as text tokens rather than running a calculation engine, so error rates rise on large or messy data. Claude is not connecting to your source system to check its own math — the numbers it returns are a draft until you verify them.

## Common Beginner Mistake

Pasting a raw 40-column export with customer names still in it and asking "analyze this." That risks exposing data that should have been anonymized, and it buries the signal in noise, increasing the chance of parsing errors and wrong numbers.

## Better Practice

Anonymize and trim first, then ask a focused question with the "flag what you cannot calculate confidently" instruction — without it, Claude will attempt every calculation and may return wrong numbers with no warning. Know which metrics to trust more and less:

- **Reliable:** volume by category, day-of-week or hour distribution, top-N recurring types, trend language when you provide both datasets.
- **Verify carefully:** percentage calculations (SLA attainment, reopen rates), MTTR, and anything you plan to report to leadership.

## Quick Recap

- Anonymize and trim the data before it goes into any prompt.
- Claude is reliable for counts and distributions; verify percentages, MTTR, and SLA figures.
- Ask a specific question and have Claude flag calculations it cannot do confidently.

## Practice Activity

Take a recent ticket export, anonymize it, trim it to the 6–8 columns you actually need, and run the example prompt. Then pick the two numbers most likely to end up in front of leadership and check them against your source data.
