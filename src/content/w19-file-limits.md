# File Handling Practicalities and Limits

## The context window constraint

Claude's context window is the total amount of text it can hold in one conversation — your messages, Claude's responses, and uploaded file contents all count toward this limit. When a session fills the context window, Claude may start losing earlier information, producing less coherent output, or refusing additional input.

For file analysis, this means: the larger your file, the less room there is for back-and-forth conversation, and the more likely Claude is to make errors as context pressure increases.

## Practical size guidelines

These are working estimates, not hard limits — actual behavior varies:

**CSV files:** Under 500 rows generally works well for most analyses. 500–2000 rows may work but test with a sample first. Over 2000 rows: extract the relevant rows or columns before uploading.

**PDF documents:** Under 20 pages is reliable for most queries. Long documents (50+ pages) may produce incomplete summaries or miss later sections. For long documents, split into sections and summarize each separately.

**Multiple files:** Uploading several files in one session reduces available context for each. If you need to analyze 5 reports, consider whether all 5 need to be in one conversation or whether you can split across sessions.

## The sample-first approach

For any file you haven't uploaded to Claude before, test with a small sample before running the full analysis:
1. Take 50 rows (or the first 5 pages of a PDF)
2. Upload the sample and run one representative query
3. Confirm the format is parsing correctly and the output looks right
4. Then upload the full file

This takes 5 minutes and avoids finding formatting errors after a 20-minute analysis run.

## When Claude misreads a file

Common file parsing issues:
- **CSV delimiter confusion** — semicolons or tabs instead of commas. Fix: export as standard comma-delimited CSV.
- **Date format inconsistency** — mixed date formats in one column cause calculation errors. Fix: standardize dates before uploading.
- **Merged cells in spreadsheets** — Claude cannot read merged cells correctly. Fix: unmerge and fill values before exporting to CSV.
- **PDFs with tables as images** — scanned PDFs or tables embedded as images cannot be read as text. Fix: use the original document source or an OCR tool first.

When Claude reports a metric that seems wrong, the first check is whether the input file parsed correctly.

## AI-native vs. traditional analysis tools

Claude is not a replacement for BI tools, SQL, or Python for large-scale data work. It excels at: natural language queries, narrative generation, small-medium dataset summarization, and pattern description. For anything requiring precise computation across large datasets, use your existing analytical tools and bring Claude in for the narrative layer.
