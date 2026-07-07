# The Draft That Went Straight to the VP Unread

## Familiar Scenario

Under time pressure, you asked Claude to draft an SLA performance summary and forwarded it to a VP without reading it closely. One figure was wrong — Claude had misread the table you pasted. The VP raised it in the next leadership call, and now you are explaining a number you never actually checked. The draft was fine as a draft. The problem was treating it as finished.

## Core Question

Which Claude outputs need human review before they leave my hands, and how much review is enough?

## Why This Matters

Claude produces plausible output, not verified output — those are different things. When AI-assisted content reaches customers, leadership, or system changes without review, a single confident error becomes your error. A verification habit is what keeps that from happening.

## The Claude Capability

The discipline here is trust-but-verify, and it is not about distrusting Claude. It is about matching review to risk. Build a review step into every Claude-assisted workflow, sized to what is at stake:

- **Outage communications** — write with Claude, read fully before sending.
- **Ticket or data analysis** — generate with Claude, spot-check several data points against the source.
- **Runbooks** — draft with Claude, have an L2 walk through the steps before publishing.
- **Leadership reports and SLA summaries** — verify every number against the source data.

The highest-risk pattern is confident specificity: a wrong number, date, version, or named reference stated with complete assurance. That is where errors hide most effectively.

## Step-by-Step Workflow

- Classify the output by risk before sending: low, medium, or high.
- For low-risk items, a careful read is enough.
- For high-risk items, verify every specific fact against the source.
- Pay special attention to numbers, dates, versions, and named references.
- Confirm you can answer "did I verify the key facts?" before it leaves your hands.

## Example Prompt

```
You are an IT support analyst. Using only the SLA data table I pasted
below, write a summary of last month's performance for a leadership update.

Format: Three bullets — met targets, missed targets, and one trend.

Constraints: Use only figures present in the table. Do not calculate or
infer numbers I did not provide.

Verification: After the summary, list every figure you used alongside the
row it came from, so I can check each one against the source.

[paste SLA data]
```

## What Claude Is Doing

Claude is drafting a structured summary based on the data you provided. It is using patterns from that context to organize the figures. It is not verifying that it read the table correctly — the requirement to list each figure against its source row gives you a fast way to catch a misread before it reaches the VP.

## Common Beginner Mistake

Forwarding a Claude draft to leadership or a customer without reading it, on the assumption that "Claude wrote it" means it is correct.

## Better Practice

Size your review to the risk. Read everything before it goes out, and for high-stakes reports verify every number against the source. "Claude wrote it" is not a review — a human sign-off is.

## Quick Recap

- Claude produces plausible output, not verified output.
- Build a review step into every Claude-assisted workflow.
- Match review depth to the risk of the output.
- Be most skeptical of specific numbers, dates, versions, and references.
- Human sign-off, not "Claude wrote it," is the standard for anything external.

## Practice Activity

This week, add an explicit verification step to one recurring Claude-assisted output — a report, a customer message, or a runbook. Write down who signs off and what they check, and make it a standing part of the workflow.
