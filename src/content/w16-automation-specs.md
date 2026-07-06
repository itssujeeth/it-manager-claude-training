# Writing Automation Specifications with Claude

## Why automation specs fail

Most automation failures are specification failures. The automation was built exactly to spec — the spec just didn't account for what happens when a ticket arrives with a missing field, when a downstream system is down, or when the logic applies to 95% of cases and the other 5% need human handling.

Claude can generate automation specs quickly. Your job is to make sure the spec is complete before development starts.

## The required sections of every automation spec

**Trigger** — what event or condition starts the automation. Be specific: "A ticket is created with Category = Incident and Priority = P1" is a trigger. "A high-priority incident comes in" is not.

**Preconditions** — what must be true for the automation to run. If a precondition is not met, the automation should not run — not fail silently.

**Steps** — the sequential actions the automation takes. Number them. Each step must reference a specific system, field, or data element.

**Output** — what the automation produces or changes. What is the state of the world after it runs?

**Exception handling** — what happens when a step fails, when a required field is missing, when a downstream system is unavailable. This section is the hardest to write and the most important.

**Data touched** — what systems and data types the automation reads or writes. This is required for security review.

**Human oversight points** — where a human must review before the automation proceeds, review the output, or be notified of a failure. Every automation that touches customer data, employee data, or production systems needs at least one.

**Rollback procedure** — how to undo the automation's effect if it produces wrong output. Not all automations are reversible — note this explicitly if true.

## Prompting Claude for a spec

```
Generate an automation specification for: [describe what the automation does in one sentence]
Use this structure: Trigger, Preconditions, Steps (numbered), Output, Exception handling, 
Data touched, Human oversight points, Rollback procedure.

Process description: [describe the manual process the automation replaces]
Systems involved: [list systems]
Known edge cases: [list any cases where the standard logic doesn't apply]

Constraints: Include an exception handling step for every system that could be unavailable. 
Flag any step where the failure mode is not recoverable without manual intervention.
```

## Before development starts

Review the spec against this checklist:
- [ ] Every exception path has a named owner for manual handling
- [ ] Data touched section reviewed by your security team
- [ ] Human oversight points explicitly listed — no implicit assumptions
- [ ] Rollback procedure documented if automation writes to production systems
- [ ] Edge cases from the prompt actually appear in the spec

If any item is missing, the spec is not ready for development. A spec review takes 30 minutes. A failed automation in production takes days to clean up.
