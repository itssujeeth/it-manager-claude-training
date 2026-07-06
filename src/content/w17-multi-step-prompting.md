# Multi-Step Prompt Chains

## Why single prompts hit a ceiling

A single prompt works well for contained tasks: summarize this, draft that, categorize this. It breaks down when the task has sequential dependencies — you need the output of step one before you can ask step two, and the quality of step three depends on how accurately steps one and two were done.

Multi-step prompting makes Claude's reasoning transparent, auditable, and correctable at each stage. It also means errors stay isolated rather than propagating through to a final output you can't easily untangle.

## The four-step ops report chain

A weekly ops report is a natural fit for multi-step prompting:

**Step 1 — Data quality check:**
"Review this ticket data. Identify any formatting issues, missing fields, or rows that look anomalous. Do not analyze yet — just flag data quality concerns."

**Step 2 — Summary and metrics:**
"Using the cleaned data from Step 1 (with the flagged rows excluded), compute: total volume, volume by category, top 5 issue types, SLA attainment by priority. Flag any metric you cannot compute precisely."

**Step 3 — Trend analysis:**
"Based on the metrics above, identify trends and anomalies versus last week's data [provide prior data]. Label each finding as EVIDENCE-BASED or ASSUMPTION. Assign confidence: High/Medium/Low."

**Step 4 — Narrative and recommendations:**
"Convert the Step 3 analysis into an executive summary and 3 action recommendations. Each recommendation must reference a specific finding. Flag any confidence-Low findings in a separate section."

## The critical rule: review before passing forward

Each step's output must be reviewed before it becomes the input for the next step. If Step 2's metric calculation contains an error and you pass it to Step 3 without checking, Step 3's trend analysis is built on a wrong baseline, and Step 4's recommendations are built on wrong trends.

The review does not need to be exhaustive — spot-check the largest numbers and anything that looks surprising. The goal is catching errors before they compound.

## When chains produce inconsistent output

Multi-step chains can produce inconsistent output across runs because Claude generates probabilistically. If you need consistent output format for recurring reports, include explicit format specifications in each step prompt — headers, table structure, number of bullets — rather than leaving format to Claude's judgment.

## Saving chain outputs

For recurring workflows (weekly report, monthly PIR), save your prompt chain as a template with placeholders for the variable parts (dates, specific data). The template is your process documentation; the outputs are your artifacts.
