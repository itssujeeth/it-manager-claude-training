# Multi-Step Prompting: Breaking a Big Task Into a Chain

## Familiar Scenario

It's Friday and your weekly ops report is due. You paste a week of ticket data into Claude and ask for "a full report with metrics, trends versus last week, and recommendations." What comes back looks polished but is subtly wrong: a metric is off, the trend compares against the wrong baseline, and the recommendations are built on both errors. You can't easily tell where it went sideways because everything happened in one step.

## Core Question

"When a task has several stages that depend on each other, how do I stop errors in an early stage from quietly corrupting the final output?"

## Why This Matters

A weekly report, a post-incident analysis, or a capacity review all have sequential dependencies: you need clean data before metrics, metrics before trends, trends before recommendations. When you ask for all of it at once, a mistake in stage one silently flows into every stage after it — and the confident final answer hides the original error.

## The Claude Capability

Claude works well on contained tasks: summarize this, categorize that. For layered work, you break the task into a chain of separate prompts and review each output before it becomes the input to the next. This keeps each stage transparent and correctable, and stops errors from compounding.

## Step-by-Step Workflow

1. Break the task into stages where each stage produces something the next stage needs.
2. Run stage one. Review its output before continuing.
3. Feed the reviewed output into stage two. Review again.
4. Continue through the chain, spot-checking the largest numbers and anything surprising at each step.
5. Save the sequence of prompts as a reusable template for the next report.

## Example Prompt

```
Role: You are an IT operations analyst for our support team.

This is Step 1 of a 4-step report. Do only Step 1.

Step 1 — Data quality check:
Review the ticket data below. Identify formatting issues, missing fields,
or rows that look anomalous. Do NOT analyze or compute anything yet — only
list data quality concerns.

Output format:
- Table: row/field, issue, suggested handling.
- End with: "Rows I would exclude and why."

Constraint: If the data looks clean, say so plainly. Do not invent issues.

Verification: Flag anything I should confirm against the source export.

[paste ticket data]
```

Later steps: (2) compute metrics on the cleaned data, (3) compare against last week's figures with confidence labels, (4) turn the analysis into an executive summary and three recommendations, each tied to a specific finding.

## What Claude Is Doing

At each step, Claude is working only with the context and instructions in front of it. It is using patterns from the data you provided — it is not independently confirming that your export is complete or correct. Because Claude generates probabilistically, running the same chain twice can produce slightly different wording or structure, which is why explicit format instructions at each step matter.

## Common Beginner Mistake

Passing an output forward without reviewing it. If step two's metric is wrong and you feed it straight into step three, the trend analysis is built on a bad baseline and the recommendations inherit the error.

## Better Practice

Treat each step's output as a draft to check, not a finished fact. The review doesn't need to be exhaustive — spot-check the biggest numbers and anything that looks off. Catch errors before they move to the next stage.

## Quick Recap

- Split tasks with dependent stages into a chain of separate prompts.
- Review each output before it becomes the next step's input.
- Save the chain as a template so recurring reports follow the same process.

## Practice Activity

Take one report you normally ask for in a single prompt. Rewrite it as a three-step chain (data check → metrics → narrative). Run it once, reviewing between steps, and note where the mid-chain review caught something the single prompt would have hidden.
