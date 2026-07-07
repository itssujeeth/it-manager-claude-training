# Writing a Requirements Spec to Brief the Dev Team

## Familiar Scenario

Leadership approved your automation — auto-routing P1 incidents to the on-call queue and paging the right team. Now the dev team wants a spec. You have it clear in your head, but "route P1s to on-call automatically" is not something a developer can build reliably. The gap between your plain-language idea and a buildable specification is where automation projects quietly go wrong.

## Core Question

"I know what I want this automation to do. How do I turn that into a structured spec the dev team can build from — one that actually accounts for the exceptions?"

## Why This Matters

Most automation failures are specification failures. The automation gets built exactly to spec — the spec just didn't say what happens when a ticket arrives with a missing field, when a downstream system is down, or when the logic fits 95% of cases and the other 5% need a human. A complete spec is where those failures get prevented, for the price of 30 minutes now instead of days of cleanup later.

## The Claude Capability

Claude can turn a plain-language process description into a structured specification with the sections developers need — trigger, preconditions, steps, output, exception handling, data touched, human oversight, and rollback. It organizes and prompts for completeness. It cannot know your environment's edge cases; you supply those, and your job is to confirm the spec is complete before development starts.

## Step-by-Step Workflow

1. Describe the automation in one sentence and the manual process it replaces.
2. List the systems involved and every edge case you know of.
3. Ask Claude to produce the full spec structure and to force an exception path for every system that could be unavailable.
4. Review the draft against a completeness checklist.
5. Route the data-touched section to security before development.

## Example Prompt

```
Role: You are a systems analyst writing an automation specification for a
development team.

Context:
Automation (one sentence): [what it does]
Manual process it replaces: [describe the current process]
Systems involved: [list systems]
Known edge cases: [cases where the standard logic does not apply]

Task: Produce a specification with these sections: Trigger, Preconditions,
Steps (numbered, each referencing a specific system/field/data element),
Output, Exception Handling, Data Touched, Human Oversight Points, and
Rollback Procedure.

Output format: Headed sections, numbered steps.

Constraints: Include an exception-handling entry for every system that could
be unavailable. Base the spec only on what I described; where a detail is
missing, mark it [NEEDS INPUT] rather than assuming.

Verification: Flag any step whose failure mode is not recoverable without
manual intervention, and confirm each known edge case I listed appears in
the spec.
```

## What Claude Is Doing

Claude is using patterns from your description to structure a complete-looking spec and prompt for the sections people usually forget. It is not verifying that the steps are technically correct for your systems, and it cannot know edge cases you didn't tell it. The exception-handling and `[NEEDS INPUT]` instructions are what keep the gaps visible instead of hidden.

## Common Beginner Mistake

Accepting the spec because it looks thorough and handing it straight to the dev team. A spec that reads as complete can still omit your real edge cases — the VIP exception, the month-end freeze, the field that's optional in theory but mandatory in practice. Thoroughness of format is not thoroughness of coverage.

## Better Practice

Review every spec against a hard checklist before development: every exception path has a named owner for manual handling; the data-touched section has been reviewed by security; human oversight points are explicit, not implied; a rollback procedure is documented if the automation writes to production; and every edge case you listed actually appears in the spec. If any item is missing, the spec isn't ready. Not all automations are reversible — say so explicitly when they aren't.

## Quick Recap

- Most automation failures trace back to incomplete specs, especially around exceptions.
- Claude structures a plain-language description into a full spec and prompts for the sections people skip.
- Claude can't know your edge cases — you supply them, and you verify completeness against a checklist before dev starts.

## Practice Activity

This week, take one approved or planned automation and use the example prompt to draft its spec. Resolve every `[NEEDS INPUT]` flag, confirm each known edge case appears, and run the finished draft past the completeness checklist before it reaches a developer.
