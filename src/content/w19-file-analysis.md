# Analyzing Files with Claude

## What file upload enables

Pasting data into a Claude prompt works for small datasets. File upload extends this to larger files — CSVs, PDFs, spreadsheets, Word documents, images — without manual copy-paste. Claude reads the file as context and can answer questions about it, summarize it, extract specific data, or generate structured analysis.

For IT support managers, the most useful applications are:
- Monthly ticket exports for trend analysis
- Vendor reports or audit findings for key-point extraction
- Meeting transcripts for action item extraction
- PDF policy documents for question-answering
- Benchmark reports for comparison tables

## What file types Claude handles

Claude handles most common formats: PDF, CSV, DOCX, XLSX, TXT, images (PNG, JPG), and code files. The practical limit is not file type — it's context window size.

Every file you upload consumes part of Claude's context window. Very large files (multi-thousand-row CSVs, long PDF reports) may exceed what Claude can process in one session, or Claude may produce less reliable output as context fills up.

## The pre-upload checklist

Before uploading any file:
1. **Anonymize** — remove customer names, email addresses, and account identifiers. Replace with generic labels.
2. **Strip credentials** — remove any passwords, API keys, or authentication tokens that appear in exported data.
3. **Reduce to relevant columns** — for large CSVs, delete columns you don't need for this analysis before uploading.
4. **Test with a sample** — for files over 500 rows, upload a 50-row sample first to confirm Claude parses the format correctly before running the full file.

## Structuring the analysis request

A good file analysis prompt is specific about what you need:

```
This file contains [describe: ticket data, invoice data, system logs, etc.] from [date range].
Columns relevant to this analysis: [list them]

Task: [Be specific — "produce a volume summary by category" not "analyze this"]
Required outputs:
1. [First deliverable with format]
2. [Second deliverable with format]

Flag: If any column has formatting issues that prevent accurate analysis, note it before proceeding.
Verify note: I will cross-check all metrics against source data before using in reports.
```

## For PDF documents

PDFs work best for extraction and summarization rather than computation. Ask Claude to:
- Extract the key findings from a vendor report
- Summarize the main policy changes in a new document
- Generate a comparison table between two uploaded documents
- Identify action items from a meeting transcript

For any numeric data in PDFs, verify Claude's extraction against the source — PDF parsing can introduce errors on tables and formatted data.
