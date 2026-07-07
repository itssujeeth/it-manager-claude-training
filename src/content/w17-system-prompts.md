# System Prompts: Locking In a Role Claude Keeps All Session

## Familiar Scenario

You are using Claude to help draft responses to your team throughout the day. But you keep having to repeat yourself. Every new question needs the same preamble: "You're an IT operations analyst for a 50-person support team, use our format, don't suggest anything outside our team's authority." Half the time you forget part of it, and Claude drifts back to generic advice or recommends actions your team isn't allowed to take.

## Core Question

"How do I set Claude's role and rules once, so it behaves the same way for every question I ask in this session?"

## Why This Matters

Inconsistent behavior from Claude creates inconsistent output for your team. If one response follows your format and the next doesn't, or if Claude suggests escalation paths your team doesn't own, you spend time correcting instead of using the output. Setting a persistent role removes that friction and keeps Claude inside the boundaries you define.

## The Claude Capability

A system prompt is a set of instructions that applies to every message in a conversation, not just the next one. A regular prompt shapes one response. A system prompt shapes all of them — Claude's role, its output format, its tone, its constraints, and the context it should always carry.

Set it once, and every following prompt inherits that context without you restating it.

## Step-by-Step Workflow

1. Decide the fixed role you want Claude to hold (for example, "IT operations analyst for our team").
2. Write the constraints that should never change — format rules, and actions Claude must never suggest.
3. Enter these as your system prompt. In Claude Projects, the "custom instructions" field acts as the system prompt for every conversation in that Project.
4. If your mode has no system prompt field, open each conversation with a fixed setup message and do not edit it afterward.
5. Test the setup with a few edge cases before using it for real work.

## Example Prompt

```
Role: You are an IT operations analyst for our 50-person support team.
Our ITSM platform is [name].

Context: You help me draft internal analysis and summaries. You do not
have access to live ticket data unless I paste it in.

Task: Respond to each of my questions in the role above.

Output format:
- Lead with the key finding or recommendation.
- Use short section headers.
- Keep any executive summary to 3 bullets maximum.

Constraints:
- Never suggest actions outside our team's authority (no vendor changes,
  no HR actions, no security config changes).
- Label anything you assume as [ASSUMPTION].
- Flag missing information rather than filling the gap.

Verification: For any metric you state, note what I should check it against
before I use it.
```

## What Claude Is Doing

Claude is using the instructions and patterns from the context you provided at the start of the session and applying them to each new message. It is not enforcing your team's actual authority boundaries from any live policy — it is following the boundary you wrote. Claude is not verifying facts unless you provide source material. The system prompt makes behavior consistent; it does not make it independently accurate.

## Common Beginner Mistake

Assuming the system prompt stays fully active no matter how long the conversation runs. Over many turns, long inputs, or complex requests, Claude can gradually drift from the original instructions.

## Better Practice

For high-stakes work, re-confirm the instructions partway through, or start a fresh conversation. Do not assume the setup from 20 turns ago is still shaping the current answer. A quick "restate the constraints you're operating under" is a fast way to check.

## Quick Recap

- A system prompt applies to every message in a session, not just one response.
- Use it to fix Claude's role, format, and the actions it must never suggest.
- It makes behavior consistent, but does not make Claude's facts accurate — verify separately, and re-confirm on long sessions.

## Practice Activity

Write a system prompt for one recurring task you do with Claude this week. Include a role, one format rule, and one "never suggest" constraint. Run three different questions through it and check whether the format and constraints held on all three.
