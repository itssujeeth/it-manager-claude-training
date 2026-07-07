# Clarifying Process Ownership with a RACI Matrix

## Familiar Scenario

A critical change-management process keeps failing at the same point. When a risky change needs review, sometimes the L2 engineer signs off, sometimes the change manager does, and sometimes each assumes the other has it — so nobody does. Incidents fall through the cracks, and in the post-incident review the honest answer to "who owned this?" is a shrug.

## Core Question

"Ownership of this process is genuinely unclear. How do I map who is responsible, accountable, consulted, and informed for each step — without a week of meetings?"

## Why This Matters

When ownership is unclear, gaps get blamed on individuals instead of fixed at the structural level, and escalations have nowhere to go. A RACI matrix (Responsible, Accountable, Consulted, Informed) makes ownership explicit for every step, which is what stops work from falling between roles.

## The Claude Capability

Claude can draft a RACI matrix quickly from a description of your process and your team roles. The real value isn't the draft itself — it's that producing the draft forces you to state ownership clearly, and reviewing it surfaces the disagreements that were causing the gaps.

## Step-by-Step Workflow

1. List the roles on your team and the main steps or decision points in the process.
2. Ask Claude to assign R/A/C/I to each role for each step.
3. Have Claude flag steps where Accountable is missing, or where too many people are Consulted.
4. Take the draft into a team meeting and use the flags to resolve ownership disagreements.

## Example Prompt

```
Role: You are a service-management consultant building a RACI matrix.

Context:
Process: [describe the process in 2-3 sentences]
Roles on our team: [e.g. L1 Analyst, L2 Engineer, Support Manager, Change
Advisory Board, End User, IT Director]
Process steps: [list the main steps or decision points]

Task: Produce a RACI matrix as a table with steps as rows and roles as
columns. Assign R, A, C, or I to each cell.

Constraints: Assign exactly one Accountable per step. Base assignments only
on the process and roles I described.

Verification:
- Flag any step where Accountable is unclear or missing.
- Flag any step where more than three roles are Consulted, since that may
  indicate a decision that needs to be simplified.
- List any role marked Consulted on every step, which may mean they should
  be Informed instead.
```

## What Claude Is Doing

Claude is using patterns from the process and roles you described to propose a plausible ownership structure. It is not deciding who should own what in your organization — it is producing a structured starting point. The actual ownership decisions belong to you and your team; Claude's draft just makes the open questions visible.

## Common Beginner Mistake

Treating Claude's draft as the final, official matrix and publishing it. If your L2 engineer believes they're Responsible for change review and your change manager believes they are, that conflict is exactly what the RACI is supposed to expose — publishing over it just formalizes the confusion.

## Better Practice

Use the draft as a conversation starter. The disagreements it surfaces are the real value. Resolve them in the room, confirm exactly one Accountable per step, and separately name a process owner — the person who maintains the document and keeps it current. Without an owner, the matrix goes stale the first time anything changes.

## Quick Recap

- RACI makes ownership explicit so work stops falling between roles.
- Claude drafts the matrix fast, but the point is surfacing ownership disagreements, not the draft itself.
- Every step needs exactly one Accountable, and every process needs a named owner.

## Practice Activity

This week, pick one process where ownership is fuzzy. Use the example prompt to draft a RACI matrix, then hold a 30-minute team review focused only on the steps Claude flagged as missing an Accountable. Confirm a single owner for each.
