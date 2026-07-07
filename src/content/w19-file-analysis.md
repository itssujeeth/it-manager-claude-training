# Analyzing Uploaded Files: Finding Patterns Without Writing Code

## Familiar Scenario

You've got a three-month ticket export sitting in a CSV — a few thousand rows of categories, priorities, timestamps, and resolution notes. You suspect there's a pattern worth reporting (a spike in one category, an SLA slipping on P2s), but you don't write SQL or Python, and building a pivot table by hand is slow. You want to point Claude at the file and ask it questions in plain language.

## Core Question

"How do I get useful, trustworthy patterns out of a data file without writing code — and what do I need to check before I believe the results?"

## Why This Matters

Ticket exports, vendor reports, and audit findings hold information you're expected to act on. Pulling patterns out by hand is slow and error-prone; ignoring them means missing trends until they become incidents. File analysis lets you interrogate the data in plain language — but only if you structure the request well and verify the output.

## The Claude Capability

File upload lets Claude read a file — CSV, PDF, spreadsheet, Word doc, image — as context, so you can ask questions about it without copy-pasting. Claude can summarize it, extract specific data, or produce a structured analysis.

Base Claude chat may not include file upload in every mode or plan. If your organization has enabled file upload, Claude may read uploaded files directly. Always confirm which mode your org allows. The practical limit is rarely the file type — it's how much fits in Claude's context window before quality drops.

## Step-by-Step Workflow

1. Anonymize the file — remove customer names, emails, account IDs; replace with generic labels.
2. Strip any credentials or tokens that ended up in the export.
3. Cut the file down to the columns you actually need for this analysis.
4. For anything over a few hundred rows, upload a small sample first and confirm Claude parses the format correctly.
5. Run the full analysis with a specific request, then cross-check the key numbers against the source.

## Example Prompt

```
Role: You are an IT operations analyst.

Context: The uploaded file is a ticket export covering [date range].
Relevant columns: category, priority, created_at, resolved_at, sla_met.

Task: Produce:
1. Ticket volume by category (table, highest first).
2. SLA attainment by priority (table, percentage).
3. The three most notable changes over the period, each in one sentence.

Constraints:
- If any column has formatting issues that block accurate analysis, flag it
  before computing anything.
- Do not infer causes — describe patterns only.

Verification: For each metric, note what I should cross-check against the
source file before I use it in a report.
```

## What Claude Is Doing

Claude is reading the file as context and using patterns in the data to produce the summary you asked for. It is not running a guaranteed-correct calculation engine the way a spreadsheet or database does — parsing errors on dates, delimiters, or tables can skew results. Claude is not verifying the export is complete. For PDFs especially, table and numeric extraction can introduce errors, so treat any figure as a draft until you check it.

## Common Beginner Mistake

Uploading a huge file and asking "analyze this." The request is too vague to produce anything useful, and a large file fills the context window, making Claude more likely to miss or misread parts of it.

## Better Practice

Be specific about the columns, the date range, and the exact outputs you want. Test with a sample before the full run. Keep PDF work to extraction and summarization rather than computation, and verify any numbers Claude pulls from a PDF table against the original.

## Quick Recap

- Anonymize and trim the file before uploading; confirm your org allows file upload.
- Ask for specific outputs, not "analyze this," and test large files with a sample first.
- Claude reads the file as context, not as a guaranteed calculator — verify key metrics against the source.

## Practice Activity

Take one recent ticket export. Anonymize it, trim it to the columns you need, and upload a 50-row sample. Ask for volume by category and confirm the format parsed correctly before you'd run the full file.
