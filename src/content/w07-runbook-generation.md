# Generating First-Draft Runbooks with Claude

## Familiar Scenario

The same printer-authentication failure has hit your team four times this month. Each time, a different analyst rediscovers the fix, and each time it takes 30 minutes. Everyone agrees a runbook would help. No one has an afternoon free to write one from scratch, so it never gets written and the issue keeps costing time.

## Core Question

Can Claude turn my incident notes into a structured first-draft runbook so writing it becomes an edit-and-validate task instead of a blank-page project?

## Why This Matters

Runbooks turn a repeated 30-minute rediscovery into a repeatable 5-minute fix, and they let L1 handle issues that would otherwise escalate. But a runbook only helps if the steps are correct and complete for the person using it. The blank page is what stops most runbooks from ever existing — removing that barrier is where Claude helps most.

## The Claude Capability

Claude can generate a well-structured runbook draft quickly from the notes and context you provide, including the sections analysts actually need. It writes to the audience level you specify and includes decision branches when you ask for them. It does not know whether the steps are correct for your environment — the structure is a starting point that you must validate. A useful runbook has trigger criteria, prerequisites, numbered steps with decision branches, escalation criteria, and a verification step.

## Step-by-Step Workflow

1. Gather your incident notes and environment details for the recurring issue.
2. Specify the audience level (L1 vs. L2) so Claude matches the language.
3. Ask for decision branches explicitly at each fork.
4. Review the draft for accuracy against what your team actually does.
5. Have someone unfamiliar with the issue test-follow the runbook before you publish it.

## Example Prompt

```
Role: You are a technical writer creating an IT support runbook.

Audience: L1 support analysts with basic IT knowledge but no advanced system
administration experience.

Issue: [Symptoms the user reports, the system involved]
Environment: [OS, application versions, authentication method, integrations]
Expected outcome: [What the resolved state looks like]

Task: Generate a complete troubleshooting runbook with:
- Trigger criteria
- Prerequisites (access and tools needed)
- Numbered troubleshooting steps, each with decision branches (what to do if
  the step succeeds and if it fails)
- Escalation criteria (when to stop and escalate to L2)
- A verification step to confirm resolution
- Related knowledge articles

Constraints: Write for someone who has never seen this issue. Flag any step
requiring elevated privileges. If a detail is not provided, mark it
[NEEDS VERIFICATION] rather than inventing it.
```

## What Claude Is Doing

Claude is using patterns from the notes and context you provided to organize a runbook in a proven structure. It is not confirming that "restart the print spooler service" actually fixes your issue, or that the menu path is correct in your environment. Claude is not verifying facts unless you provide source material. Where you leave gaps, it may fill them plausibly — plausible is not the same as accurate, which is why the `[NEEDS VERIFICATION]` flag and a test-follow matter.

## Common Beginner Mistake

Publishing the draft because it looks complete and well-organized. A linear runbook with confident wording can still send an analyst down the wrong path when step 3 does not fix the issue — costing more time during an incident than having no runbook at all.

## Better Practice

Ask for explicit decision branches so analysts know what to do when a step fails:

```
Step 3: Check if the VPN service is running.
  -> If running: continue to Step 4.
  -> If not running: restart the service (see Step 3a).
  -> If restart fails: escalate to Network Engineering with the error message.
```

Then validate before deployment: have someone unfamiliar with the issue follow the runbook exactly as written, note every point where they hesitated or had to ask a question, and fix those steps. If the validator had questions, the runbook is not ready.

## Quick Recap

- Claude drafts a structured runbook fast; you validate accuracy and completeness.
- Ask for decision branches explicitly and specify L1 vs. L2 language.
- Never deploy a Claude-generated runbook without a test-follow by someone new to the issue.

## Practice Activity

Pick one recurring issue your team keeps rediscovering. Generate a first-draft runbook with the example prompt, then have a colleague who has not handled that issue try to follow it. Mark every point of confusion and correct those steps before you publish.
