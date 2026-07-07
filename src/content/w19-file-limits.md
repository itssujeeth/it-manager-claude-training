# File Analysis Limits: What Claude Will Miss

## Familiar Scenario

You upload a 50-page SOP and ask Claude to "find every error and inconsistency." It returns a tidy list of issues, and you're tempted to treat that list as complete. But a week later someone finds a contradiction on page 38 that Claude never mentioned — a section it effectively skimmed once the document got long. You assumed full coverage; you didn't get it.

## Core Question

"What can Claude *not* reliably do with a large file, and where do I have to verify instead of trust?"

## Why This Matters

Acting on an incomplete review is worse than doing no review, because it feels thorough. If you present a 50-page SOP as "checked by Claude" and a gap surfaces later, the confidence you placed in the output becomes the problem. Knowing where file analysis degrades tells you exactly where your own verification is non-negotiable.

## The Claude Capability

Claude's context window is the total amount of text it can hold in one conversation — your messages, its replies, and the file contents all count against it. The bigger the file, the less room remains, and the more likely Claude is to lose detail, miss later sections, or produce less coherent output as the window fills.

If your organization has enabled file upload, Claude may read files directly — but the context window limit still applies regardless of mode. Always confirm which mode your org allows.

## Step-by-Step Workflow

1. Estimate the size — rows for CSVs, pages for PDFs.
2. For large files, split into sections and analyze each separately rather than all at once.
3. Ask a specific question per section instead of "review everything."
4. Treat any "complete" list Claude gives as a starting point, not a full audit.
5. Verify the sections that matter most by reading them yourself.

## Example Prompt

```
Role: You are reviewing one section of a larger SOP.

Context: This is Section 3 of 6 (pages 18-27). Do not comment on other
sections.

Task: Identify contradictions, unclear steps, and missing prerequisites in
THIS section only.

Constraints:
- Quote the exact line for each issue you raise.
- If a step references another section, flag it as "needs cross-check" rather
  than assuming it is correct.

Verification: List which pages you were and were not able to read clearly, so
I know what still needs a manual pass.

[paste section 3 text]
```

## What Claude Is Doing

Claude is reading what fits in its context window and using patterns to spot issues in that text. It is not guaranteeing it examined every line — as the document grows, coverage of later sections weakens. Claude is not verifying facts or cross-references unless you provide the referenced material. A confident, well-formatted list can still be partial.

## Common Beginner Mistake

Reading "here are the issues I found" as "here are all the issues that exist." Claude reports what it surfaced from the text it processed — silence on a section isn't confirmation that the section is clean.

## Better Practice

Work with realistic size guidelines and split large jobs. As rough working estimates: CSVs under ~500 rows analyze well, 500–2000 need a sample test first, and above that you extract the relevant rows before uploading; PDFs under ~20 pages are reliable, while 50+ pages should be split and summarized in sections. And remember Claude is not a replacement for BI tools, SQL, or Python on large datasets — use those for precise computation and bring Claude in for the narrative layer.

## Quick Recap

- The context window caps how much Claude can hold — bigger files mean weaker coverage.
- A "complete" list from Claude is a starting point, not a guaranteed full audit.
- Split large files, verify the critical sections yourself, and use real analytical tools for precise large-scale computation.

## Practice Activity

Take a long document you'd want reviewed. Split it into two or three sections and run one section through Claude, asking it to report which pages it could read clearly. Note where its coverage claim tells you a manual pass is still needed.
