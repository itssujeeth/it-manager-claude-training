# RACI Matrices and Process Ownership with Claude

## What a RACI matrix solves

RACI (Responsible, Accountable, Consulted, Informed) matrices answer the question that causes the most confusion in support operations: who owns what? Without clear ownership, process gaps get blamed on individuals rather than fixed at the structural level.

Claude can draft RACI matrices quickly from your descriptions — but the real value is forcing you to clarify ownership before documenting it.

## The four roles defined clearly

**Responsible** — Does the work. There can be more than one, but if there are more than two, the task probably needs to be split.

**Accountable** — Owns the outcome. Exactly one person. If you can't name them, escalation has nowhere to go.

**Consulted** — Provides input before the work is done. Two-way communication.

**Informed** — Notified of the outcome. One-way communication — they don't need to be consulted.

A common mistake: too many people marked as Accountable. There can only be one. Too many people marked as Consulted slows every decision. If everyone is informed, no one is.

## Prompting Claude for a RACI matrix

```
Create a RACI matrix for the following process: [Describe the process and the roles involved]
Roles in our team: [List: e.g. L1 Analyst, L2 Engineer, Support Manager, Change Advisory Board, End User, IT Director]
Process steps: [List the main steps or decision points]

For each step, assign R/A/C/I to each role.
Flag any step where Accountable is unclear or missing.
Flag any step where more than 3 people are Consulted — this may indicate a decision that needs to be simplified.
```

## After Claude drafts the matrix

The draft is a conversation starter, not a final document. Use it in a team meeting to surface disagreements about ownership — these disagreements are the real value. If your L2 engineer thinks they're Responsible for change review but your change manager thinks they are, that conflict needs to be resolved before any SOP is useful.

Common things the matrix will surface:
- Steps with no Accountable role
- Roles that appear as Consulted on every step (a sign they should be Informed instead, or that the process is over-centralized)
- Steps where the same person is both Responsible and Accountable — fine for small teams, but a bottleneck risk
- Roles that are Informed but have no mechanism to actually receive that information

## Process ownership vs. RACI

A RACI matrix defines who does what within a process. Process ownership defines who maintains the process document itself, updates it when the process changes, and is accountable for the process being followed.

Every process needs an owner. If there's no owner, the document goes stale the first time anything changes.
