# Why "Fix the Network Issue" Gets You Nothing Useful

## Familiar Scenario

You typed "help me fix the network issue" into Claude and got back a generic checklist you could have found in any first-week training manual. You know Claude can do better, because a colleague showed you a prompt that produced a genuinely useful root-cause analysis. The difference was not the tool. It was how the prompt was written.

## Core Question

What does a prompt need to contain so Claude produces something I can actually use?

## Why This Matters

When Claude's output is weak, the cause is almost always a vague or incomplete prompt, not a limit of the tool. Teaching your team the structure of a strong prompt is the single fastest way to improve every output they get.

## The Claude Capability

A reliable prompt has five parts. Briefing Claude is like briefing a new contractor — the more precisely you scope the job, the better the result.

- **Role** — give Claude a relevant identity: "You are a senior network engineer." This shapes tone and depth.
- **Context** — the situation and background. Without it, output stays generic.
- **Task** — the explicit action: draft, analyze, compare, summarize, identify gaps in.
- **Format** — the shape of the output: numbered steps, a table, a two-paragraph summary.
- **Constraints** — the limits: word count, plain language, analysis only, no recommendations.

Adding a sixth element — a **verification step** built into the prompt — turns a good prompt into a safe one.

## Step-by-Step Workflow

- Name the role Claude should take.
- Give the context it does not already have.
- State the task with a precise verb.
- Specify the output format you need.
- Add constraints so the output fits your use.
- Ask Claude to flag assumptions or unverified items.

## Example Prompt

```
Role: You are a senior network engineer.

Context: Our VPN gateway drops user connections after about 4 hours of
idle time. This started after last week's firmware update. I am pasting
three log extracts below.

Task: Identify the most likely root cause.

Format: A numbered list, ranked most to least likely, each with a one-line
reason.

Constraints: Base your analysis only on the logs provided. Keep it under
200 words.

Verification: After the list, add an "Assumptions" section noting anything
you inferred that I should confirm before acting.

[paste logs]
```

## What Claude Is Doing

Claude is drafting a structured analysis based on the instructions and the logs you provided. It is using patterns from that context to rank likely causes. It is not verifying the logs are complete or correct — the "Assumptions" section makes its inferences visible so you can check them.

## Common Beginner Mistake

Writing a one-line prompt with no role, context, format, or constraints, then blaming Claude for a generic answer.

## Better Practice

Front-load the five elements plus a verification step. A complete prompt usually gets you a usable draft on the first pass instead of several rounds of correction.

## Quick Recap

- Weak output usually means a weak prompt, not a weak tool.
- Include role, context, task, format, and constraints.
- Add a verification step so Claude surfaces its assumptions.
- Precise verbs (draft, analyze, compare) beat vague requests.
- A complete prompt reduces back-and-forth correction.

## Practice Activity

Take a prompt that gave you a disappointing result this week. Rewrite it with all five elements plus a verification step, run it again, and note the difference in quality.
