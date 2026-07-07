# Spotting Quality Patterns Across a Sample of Tickets

## Familiar Scenario

Your QA reviews keep flagging incomplete documentation, but you can't tell whether it's one or two analysts or something the whole team is doing. Before you decide whether to coach an individual or change a process, you need to know: is this a systemic issue or an individual one?

## Core Question

How do I tell whether a quality problem is spread across the team or concentrated in a few people — without singling anyone out prematurely?

## Why This Matters

The fix for a systemic problem and an individual one are completely different. A team-wide documentation gap calls for a template or training; a single analyst's gap calls for a coaching conversation. Diagnosing the wrong one wastes effort and can feel unfair to the team. Reviewing a batch together, rather than one ticket at a time, is what makes the pattern visible.

## The Claude Capability

Given an anonymized batch of resolution notes, Claude can surface patterns that are hard to see one ticket at a time — the most common gap, which ticket types score lowest, and whether failures cluster by category, shift, or complexity. It analyzes the sample you give it; it doesn't reach into your ticketing system.

## Step-by-Step Workflow

1. Pull a sample of 10–20 resolution notes and strip all names and PII.
2. Number them and paste them together with your rubric.
3. Ask Claude to identify the most common gap and any clustering by type, shift, or complexity.
4. For each pattern, diagnose the root cause (knowledge, process, time pressure, or individual).
5. Ask Claude to draft improvement options once you've diagnosed the cause.
6. Re-run the batch review after your change to see whether it worked.

## Example Prompt

```
Role: You are a QA analyst reviewing a batch of IT support ticket resolutions.

Rubric: [Paste your standard rubric]

Tickets: [PASTE 10–20, numbered, no names or PII]

Task: After reviewing all tickets, identify:
1. The most common documentation gap across the batch
2. Any ticket types that consistently score lower than others
3. Whether failures cluster by category, shift, or complexity level
4. Two or three specific improvement recommendations for the team

Verification: Note where the sample is too small to be confident, and show the checks you used to reach each pattern.
```

## What Claude Is Doing

Claude is identifying patterns using the tickets in the batch you provided — it is working only from that sample, not from your full ticket history, so its conclusions are as representative as your sample is. It is not deciding whether the problem is individual or systemic; it surfaces the pattern, and you supply the diagnosis using what you know about the team and workload.

## Patterns Worth Tracking

- **Temporal** — do Monday-morning or night-shift tickets document worse than others? Often a volume or pressure signal.
- **Complexity** — if simple tickets document better than complex ones, analysts may be skipping steps under load. The fix is a template, not coaching.
- **Category** — are VPN or network tickets consistently missing root cause? Often the resolution is "it works now" and the cause isn't investigated.
- **Cohort** — grouping by tenure (under 6 months vs. over 2 years), without naming anyone, tells you whether it's a training or an individual issue.

## Turning Patterns Into Action

For each pattern, ask what kind of gap it is: a knowledge gap (training or documentation), a process gap (template or checklist), a time-pressure issue (staffing or workflow), or individual coaching (a specific 1:1). Then ask Claude for options:

```
Pattern identified: 7 of 10 VPN tickets are missing root cause documentation.
Context: Analysts resolve the issue but don't record why it happened.
Task: Suggest three ways to address this, ranked by implementation effort.
```

## Common Beginner Mistake

Reading one bad ticket and concluding the team has a systemic problem — or seeing a pattern in a tiny, unrepresentative sample and rolling out a team-wide change off it.

## Better Practice

Use a batch large enough to be representative, keep it anonymized, and treat Claude's patterns as a prompt for your diagnosis rather than the diagnosis itself. Run the batch review on a regular cadence so that after you make a change, the next sample tells you whether quality actually improved.

## Quick Recap

- Review an anonymized batch of 10–20 tickets, not one at a time, to see patterns.
- Claude surfaces the pattern; you diagnose whether it's systemic or individual.
- Re-run the batch after a change to confirm it worked.

## Practice Activity

Pull an anonymized sample of 10 recent resolution notes, run the batch prompt above, and write one sentence for the top pattern classifying it as a knowledge, process, time-pressure, or individual issue.
