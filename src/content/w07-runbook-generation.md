# Generating Troubleshooting Runbooks with Claude

## What makes a runbook useful

A runbook is only as useful as its accuracy and completeness. Claude can generate a well-structured runbook quickly — but the structure means nothing if the steps are wrong or skip context that an L1 analyst needs.

A useful runbook has:
- **Trigger criteria** — what symptom tells an analyst to use this runbook
- **Prerequisites** — access, tools, or information needed before starting
- **Numbered steps** with decision branches at each fork
- **Escalation criteria** — when to stop and escalate rather than continue
- **Verification step** — how the analyst confirms the issue is resolved

## Prompting Claude for runbooks

The more context you give Claude, the fewer corrections you make afterward. A useful runbook prompt includes:

```
Role: You are a technical writer creating an IT support runbook.
Audience: L1 support analysts with basic IT knowledge but no advanced system administration experience.
Issue: [Describe the problem — what symptoms the user reports, what system is involved]
Environment: [OS, application versions, authentication method, any relevant integrations]
Expected outcome: [What resolved state looks like]

Task: Generate a complete troubleshooting runbook with:
- Trigger criteria
- Prerequisites (access/tools needed)
- Numbered troubleshooting steps with decision branches
- Escalation criteria (when to stop and escalate to L2)
- Verification step to confirm resolution
- Related knowledge articles

Constraints: Write for someone who has never seen this issue before. Flag any step requiring elevated privileges.
```

## Decision branches are critical

Linear runbooks fail when the first step doesn't fix the issue. Analysts need to know what to do when step 3 doesn't work. Ask Claude to include explicit branches:

```
Step 3: Check if the VPN service is running.
  → If running: continue to Step 4.
  → If not running: restart the service (see Step 3a).
  → If restart fails: escalate to Network Engineering with error message.
```

Claude generates branches well when you ask for them explicitly — include "decision branches at each step" in your prompt.

## Matching the audience level

Claude defaults to intermediate technical language. For L1 analysts, be explicit:
- "Write as if the reader has never seen a command line"
- "Spell out menu paths completely (Settings > Network & Internet > VPN)"
- "Do not abbreviate system names or use internal jargon"

For L2 runbooks, you can request more technical depth — include system-level commands, log paths, and diagnostic tools.

## Validation is required

Claude-generated runbooks must be test-followed before deployment. The validation process:

1. Have someone unfamiliar with the issue follow the runbook exactly as written
2. Note every point where they hesitated, got confused, or had to ask a question
3. Correct those steps before publishing

The goal is a runbook that works without the author in the room. If the validator had questions, the runbook is not ready.

> Never deploy a Claude-generated runbook without validation. A runbook that sends analysts down the wrong path during an incident costs more time than no runbook at all.
