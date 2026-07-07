# Using Claude as a Thinking Partner During Root Cause Analysis

## Familiar Scenario

The same P2 incident has recurred three times this quarter — an intermittent authentication failure that clears itself before anyone can catch it live. You suspect something in the infrastructure, but you're not sure. You have a frantic Slack thread, three engineers with three different theories, and a post-incident review due Friday. You're staring at a blank page.

## Core Question

"I need to structure this analysis and pressure-test my thinking — but I don't want a tool that invents a root cause I'll have to walk back in front of leadership. How do I use Claude without it making things up?"

## Why This Matters

A recurring P2 that never gets a real root cause keeps costing you incidents and eroding trust in the RCA process. But a confidently wrong root cause is worse than none — it drives corrective actions that don't work and creates false certainty. You need structure without fabrication.

## The Claude Capability

Claude can act as a thinking partner for RCA: it organizes messy notes into a timeline, generates hypotheses from the information you provide, identifies what evidence is missing, and scaffolds frameworks like fishbone diagrams and 5-Why chains. What it cannot do is access your logs, verify a hypothesis, or determine the actual root cause. Everything it produces is a hypothesis to test — not a conclusion.

## Step-by-Step Workflow

1. Give Claude your raw incident material — notes, timeline fragments, the theories in play.
2. Ask it to organize this into a timeline and a labeled hypothesis list.
3. Ask it to flag what evidence is missing for each hypothesis.
4. Take each hypothesis to the evidence — logs, telemetry, SME knowledge — and confirm or rule it out.
5. Only validated hypotheses go into the published PIR.

## Example Prompt

```
Role: You are helping me structure a root cause analysis. You are a thinking
partner, not a root cause determiner.

Context: Below are my incident notes for a recurring P2 authentication
failure. This is the only information available to you.

Notes:
[paste incident notes, timeline, and current theories]

Task:
1. Organize the notes into a chronological timeline, marking any gaps where
   no events are recorded.
2. Produce a hypothesis list for the root cause.
3. Populate a fishbone across People, Process, Technology, Environment.

Output format: Timeline, then a hypothesis table with columns Hypothesis,
Basis, Confidence (High/Medium/Low), Evidence Needed to Confirm.

Constraints: Use only the information in my notes. Do not generate root
causes from general knowledge. Label every item as Evidence-Based or Assumed.
For each Assumed item, state what evidence would confirm or rule it out.

Verification: List what information is missing that you would need to raise
any Medium or Low hypothesis to High confidence.
```

## What Claude Is Doing

Claude is using patterns from the notes you provided to organize them and propose hypotheses. It is not verifying facts unless you give it source material, and it cannot see your logs or telemetry. A well-structured, confident-sounding answer is not evidence that the answer is correct — its polish reflects the format you asked for, not the truth of the cause.

## Common Beginner Mistake

Pasting the incident description and asking "what caused this?" Claude will produce a plausible, detailed narrative — and its fluency will tempt you to treat it as the answer. That narrative is a hypothesis with unknown accuracy, and shipping it as a root cause is how false certainty enters the official record.

## Better Practice

Frame prompts to produce hypotheses to test, not conclusions to accept. Require every claim to be labeled Evidence-Based or Assumed, and require a confidence level on each. Then assign a named SME to validate each hypothesis against actual evidence before it appears in a PIR or corrective action plan. That validation step is what keeps the RCA honest.

## Quick Recap

- Claude structures the analysis and generates hypotheses; it does not determine root cause.
- It works only from what you provide — it has no access to logs, telemetry, or your systems.
- Every hypothesis needs a confidence label and SME validation against real evidence before publication.

## Practice Activity

This week, take one recent incident and run your notes through the example prompt. For each hypothesis Claude produces, write down the specific piece of evidence you'd need to confirm it — and identify who on your team owns checking it.
