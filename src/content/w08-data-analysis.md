# Analyzing Ticket Data with Claude

## What Claude can do with your data

Claude can process tabular or CSV ticket data pasted directly into the prompt and produce:
- Category breakdowns and volume summaries
- Trend analysis (volume by day, week, or shift)
- SLA attainment calculations
- Anomaly identification (unusual spikes or patterns)
- Natural language narratives suitable for leadership reports

This is faster than building a report in Excel and more useful than a raw pivot table — but it comes with constraints you must understand.

## Preparing your data

Before pasting any ticket data into Claude:

**Anonymize it.** Replace customer names with generic labels (Customer A, User B, Account #12345). Remove email addresses, phone numbers, and internal system names that would be recognizable outside your organization.

**Clean the format.** CSV and tab-delimited tables work well. Remove merged cells, summary rows at the bottom, and color formatting (Claude can't see it). Keep column headers clear and consistent.

**Limit to what you need.** Paste only the columns relevant to your analysis question. A 40-column export where you need 8 columns adds noise and increases the chance of errors.

## How to structure your analysis prompt

```
Context: This is anonymized ticket data from [date range]. Columns are: [list key columns].
Task: Analyze this data and produce:
1. Total volume by [category / priority / team / day-of-week]
2. Trend vs. prior period (I'll provide that data below)
3. SLA attainment by priority tier
4. Top 3 recurring issue types by ticket count
5. Any anomalies — unusual spikes, drops, or patterns worth flagging
Format: Bullet summary under each heading. Flag any calculation you cannot perform confidently.
Data: [PASTE CSV]
```

The "flag what you cannot calculate confidently" instruction is important — without it, Claude will attempt every calculation and may produce wrong numbers without flagging them.

## Metric types Claude handles well

- **Volume by category** — straightforward counting, reliable
- **Day-of-week or hour-of-day distribution** — reliable with clean date/time columns
- **Top N recurring types** — reliable
- **Trend language** ("volume increased 12% vs. last week") — reliable if you provide both datasets

## Metric types to verify carefully

- **Percentage calculations** (SLA attainment, reopen rates) — Claude's arithmetic can be off by a few percent on large datasets
- **MTTR calculations** — requires consistent timestamp formats; errors in source data produce wrong results
- **Any metric you plan to report to leadership** — verify against your source data before using

## The verification step

Every number in Claude's output should be verified against your source data before it goes into any report. This does not mean you need to recalculate everything manually — spot-check the largest numbers and the ones most likely to be cited.

A simple rule: if a metric will appear in a slide, a report, or an email to a senior stakeholder, you must verify it independently. Claude's number is a draft; your source data is the source of truth.
