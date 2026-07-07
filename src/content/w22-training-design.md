# Designing Claude Training That Actually Sticks

## Familiar Scenario

Leadership has approved Claude for your team, and now you own the training. You have twelve analysts, four weeks, and no slack in the queue — they will be learning alongside their normal ticket load. A vendor deck full of feature slides will not survive contact with a Tuesday afternoon shift. You need training that changes how people work by Monday.

## Core Question

How do I train 12 analysts to use Claude well — in four weeks, around a full queue — so the learning actually holds instead of evaporating?

## Why This Matters

Training that tries to cover everything produces analysts who remember nothing. Training with a few clear, practiced takeaways produces analysts who apply them the next morning. In support operations, the difference shows up fast: inconsistent AI use creates inconsistent output, and inconsistent output erodes the trust you are trying to build.

## The Claude Capability

Claude can help you design the training itself — draft a session plan with time allocations, generate hands-on exercises using mock data, and produce a quick-reference card. You bring the ticket types and the constraints; Claude helps turn them into a scenario-based session you can run.

## Step-by-Step Workflow

1. Fix the three takeaways every analyst must leave with:
   - Write a useful prompt for a common task (role, context, task, format).
   - Recognize when output needs verification.
   - Know what never to paste into Claude.
2. Design short, hands-on exercises around each — using mock ticket data.
3. Build in a verification exercise where the output contains a planted error.
4. Ask Claude to assemble the session plan and reference card.
5. Review and adjust for your tools and ticket types before running it.

A workable 60-minute shape:

- **0–10 min:** Why this matters — two or three real examples from your own work.
- **10–30 min:** Exercise 1 — triage or summarization; compare a weak prompt and a strong one on the same task.
- **30–45 min:** Exercise 2 — verification; hand out an output with a subtle planted error and ask analysts to find it.
- **45–55 min:** What not to paste — your data classification table, with examples.
- **55–60 min:** Quick-reference card and Q&A.

## Example Prompt

```
You are helping an IT support manager design a hands-on Claude training session.

Context:
- Audience: 12 support analysts, mixed experience
- Primary ticket types: password resets, VPN issues, software access requests
- Learning alongside a full queue, so time is tight
- Focus: prompt writing, output verification, safe data rules

Task:
Produce a 60-minute session plan with time allocations and facilitator notes.
Include 3 hands-on exercises using MOCK data only, one of which plants a subtle
error in a Claude output for analysts to catch. Add a quick-reference card with
5 do's and 5 don'ts.

Output format:
A timed agenda, then each exercise with its setup and a clear success
criterion ("what does good look like?"), then the reference card.

Constraints:
All exercises use mock or hypothetical data. No real customer or employee data.

Verification:
Flag any exercise that would need adjustment for a specific ITSM tool, so I
can adapt it to ours.
```

## What Claude Is Doing

Claude is using patterns from the context you provided to draft training materials — it is generating a plausible session, not validating it against your team's reality. It does not know your ITSM platform or how your analysts actually work unless you tell it. Review the exercises before running them; the planted-error exercise in particular should use an error type your analysts will realistically encounter.

## Common Beginner Mistake

Teaching only prompt-writing and skipping the verification exercise. Analysts leave able to generate output faster but with no habit of reading it critically — which is exactly how confident, wrong output reaches a customer.

## Better Practice

Make verification the centerpiece. Show the team a Claude error before they meet one in the wild, and return to "Claude can be confidently wrong" throughout the session. It is the single most valuable thing an analyst carries out of the room.

## Quick Recap

- Aim for three durable takeaways, not full coverage.
- Build the session around hands-on exercises with mock data.
- Always include a verification exercise with a planted error.

## Practice Activity

This week, draft one training exercise for your team using a real ticket type — but with all data replaced by mock values. Plant one subtle error in a sample Claude output and see whether a colleague can spot it.
