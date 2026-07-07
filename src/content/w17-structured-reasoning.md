# Structured Reasoning: Making Claude's Analysis Auditable

## Familiar Scenario

You have to present an analysis to leadership next week, and Claude produced a clean, convincing write-up. But when you read it closely, you can't tell which parts are grounded in the data you gave it and which parts Claude filled in on its own. If someone in the room asks "where did this number come from?" you won't have an answer — and that's a risk you can't take in front of leadership.

## Core Question

"How do I get Claude to show me what its analysis is actually based on, so I can stand behind every line of it?"

## Why This Matters

Leadership decisions get made on the strength of your analysis. If you can't separate what the evidence supports from what Claude inferred, you're presenting guesses as facts without knowing it. Making the reasoning visible lets you validate the weak points before anyone else finds them.

## The Claude Capability

Rather than letting Claude write freely, you give it an output structure that forces it to separate facts from inferences, list its assumptions, and flag a confidence level on each finding. You define the structure; Claude fills it in. This makes the analysis reviewable section by section.

## Step-by-Step Workflow

1. Provide your source material clearly labeled as the evidence.
2. Ask Claude to separate facts (supported by that evidence) from inferences.
3. Ask Claude to list every assumption it made that the evidence does not directly support.
4. Ask Claude to flag a confidence level (High / Medium / Low) on each finding.
5. Read the assumptions and low-confidence items first — those are what you validate before presenting.

## Example Prompt

```
Role: You are an IT operations analyst preparing material I will present
to leadership.

Context: The section below labeled EVIDENCE is the only source material.
Do not use outside knowledge as if it were from our data.

Task: Analyze the evidence and produce the output in this structure:

1. Evidence summary — 2 to 3 sentences on what you were given.
2. Facts — statements directly supported by the evidence.
3. Inferences — conclusions you drew that go beyond the evidence.
4. Assumptions — anything you assumed that the evidence does not confirm.
5. Findings — each with a confidence level: High / Medium / Low.
6. What would change the conclusion — information that, if wrong or missing,
   would alter your findings.

Constraint: Do not present an inference as a fact. Keep any reasoning brief.

Verification: For each finding, note what I would check it against.

EVIDENCE:
[paste logs, metrics, notes, timeline]
```

## What Claude Is Doing

Claude is organizing its response into the sections you required and labeling items against the evidence you provided. It is using patterns from that context to sort facts from inferences — but the labels reflect Claude's own judgment, not an external verification. Structured output makes the reasoning visible so you can catch errors; it does not make the underlying analysis independently correct.

## Common Beginner Mistake

Trusting the confidence labels as if they were measured certainty. A "High" from Claude means the statement fits the evidence it was given — not that the evidence itself is complete or that the conclusion is validated.

## Better Practice

Use the structure as a review checklist, not a verdict. Read the assumptions and Low-confidence findings first, confirm them against source data, and only then decide what goes in front of leadership. A recommendation resting on Low-confidence findings should be treated very differently from one resting on High-confidence findings.

## Quick Recap

- Ask Claude to separate facts from inferences and to list its assumptions.
- Ask Claude to flag confidence levels and to explain its reasoning briefly.
- The structure makes reasoning auditable — you still validate the weak points yourself.

## Practice Activity

Take one analysis you've already run through Claude. Re-run it with the structured format above. Look specifically at the Assumptions and Low-confidence sections, and pick one item from each to verify against your source data.
