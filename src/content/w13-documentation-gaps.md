# Finding Gaps in Existing Process Documentation

## Why documented processes go wrong

A process document can be technically complete and still fail in practice. The most common reasons: it was written when the process was different, it assumes knowledge the reader doesn't have, or it stops short of edge cases that happen regularly.

Claude can analyze your existing documentation and identify structural gaps — faster and more systematically than a manual review.

## How to use Claude as a gap reviewer

Paste your existing SOP or process document and ask specifically for gap types:

```
Review this process document and identify:
1. Steps that assume prior knowledge not stated in prerequisites
2. Decision points that have no documented outcome for one of the paths
3. Escalation triggers mentioned but not defined (e.g. "escalate if necessary")
4. Missing roles — steps that don't name who is responsible
5. Missing verification — how does someone know the process completed correctly?
6. Edge cases not addressed — what common exceptions does this process not cover?

For each gap, name the section and describe what information would fix it.
```

## Common gaps Claude reliably identifies

**Assumed knowledge** — "Log in to the portal and navigate to the ticket" assumes the reader knows which portal and has access. Claude flags this; the fix is adding the system name and a prerequisite.

**Undocumented decision branches** — "If the issue persists, escalate" with no criteria for what "persists" means. Claude will flag that the decision trigger is undefined.

**Passive voice without owners** — "The ticket should be updated" — by whom? Claude can identify steps where responsibility is implied but not stated.

**Missing completion criteria** — The process ends but there is no step confirming the outcome was successful or notifying the requester. Claude catches this pattern.

## What Claude cannot catch

Claude cannot tell you whether the documented steps are technically correct for your environment. It can see that a step says "restart the service" — it cannot know whether that's the right service, the right restart method, or whether that step should happen before or after another action in your specific infrastructure.

Gap analysis from Claude is structural. Technical accuracy review requires a domain expert.

## Building gap review into your documentation workflow

When a new SOP is created, add gap review as a step before the validation:

1. Draft with Claude (or manually)
2. Gap review with Claude — fix structural issues
3. Technical review by domain expert — fix accuracy issues
4. Validation by test-following — fix usability issues
5. Publish

Catching structural gaps early saves technical reviewer time.
