# Claude Projects: Shared Context Your Team Doesn't Re-Paste

## Familiar Scenario

Your support team has a solid set of SOPs, an escalation matrix, and SLA definitions. But every time an analyst opens Claude, they start from scratch — pasting in the process, explaining the terminology, reminding Claude what your P2 SLA actually is. Some skip the setup and get generic ITIL answers instead of your team's real standards. You want Claude to reference the same documents consistently, without everyone re-pasting context every session.

## Core Question

"Can our team give Claude our documents once and have every conversation start with that context already loaded?"

## Why This Matters

When context is re-pasted by hand, it drifts. One analyst pastes the current escalation matrix, another pastes an old copy, a third forgets and gets a generic answer. Persistent shared context means everyone works from the same source of truth — and Claude answers "what's our SLA for P2?" with your definition, not a textbook one.

## The Claude Capability

Claude Projects are persistent workspaces. You upload your team's documents and set custom instructions once, and every conversation inside that Project starts with that context already active. Projects are a paid or organization-configured feature — availability varies by plan, so confirm what your organization allows before planning around it.

Base Claude chat does not carry context between separate conversations. If your organization has enabled Projects, Claude may reference uploaded documents across every conversation in that Project. Always confirm which mode your org allows.

## Step-by-Step Workflow

1. Confirm your plan includes Projects and, if needed, shared team access.
2. Check your organization's data-handling policy for that plan before uploading anything.
3. Create a Project and upload your reference documents (SOPs, escalation matrix, SLA definitions).
4. Write custom instructions telling Claude to answer from those documents and to flag when the answer isn't in them.
5. Test with questions that have known answers before giving the team access.

## Example Prompt

This goes in the Project's custom instructions field, where it applies to every conversation in the Project:

```
Role: You are a support operations assistant for our team.

Context: The uploaded documents are our source of truth (SOPs, escalation
matrix, SLA definitions).

Task: Answer questions using the uploaded documents.

Rules:
- Always check the uploaded documents first and quote or cite the relevant
  section.
- If the answer is NOT in the documents, say so plainly. Do not substitute
  general IT knowledge and present it as ours.
- Never guess team-specific details (SLA times, escalation paths, approvers).

Verification: When you cite a figure, name the document it came from so I can
confirm it.
```

## What Claude Is Doing

Claude is reading the uploaded documents and using them as context for its answers. It is not running a database query against them — it reads them as text, so with large document sets it may not recall every detail. Claude is not guaranteed to prefer your documents over its general knowledge unless your instructions require it. It uses patterns from what you provided; it does not independently verify that your documents are current.

## Common Beginner Mistake

Treating a Project as a search engine or database that will reliably pull the exact right line from a large pile of documents. Coverage gets less reliable as the document set grows, and Claude may miss details buried in long files.

## Better Practice

Keep the document set focused and test coverage before rollout. Run 10 questions with known answers and confirm Claude sources them correctly — including the cases where the honest answer is "not in our documents." Explicitly instruct Claude to prioritize your documents and to admit gaps.

## Quick Recap

- Projects give every conversation the same persistent context without re-pasting.
- Projects are org/plan-dependent — confirm availability and data handling first.
- Claude reads documents as context, not as a database — test coverage and require it to flag gaps.

## Practice Activity

If your organization has Projects enabled, create a test Project with just your escalation matrix and SLA definitions. Write 10 questions with known answers, run them, and note any case where Claude answered from general knowledge instead of your documents.
