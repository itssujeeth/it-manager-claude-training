# The Rules That Keep Claude Honest in RCA

## Familiar Scenario

A major outage took down your ticketing system for two hours. Leadership wants answers fast. Someone on your team pastes a short description into Claude — "our ticketing system went down for two hours this morning, what caused it?" — and Claude returns a confident, well-structured root cause naming a database connection pool it has never seen any data about. It reads well. It could easily end up in the official PIR.

## Core Question

"Claude will always give me a confident answer, even with almost no data. How do I stop it from inventing root causes, and force it to show me what's actually supported by evidence?"

## Why This Matters

A well-formatted RCA with wrong conclusions is worse than no RCA — it creates false confidence and drives incorrect corrective actions that waste effort and leave the real cause unfixed. In front of leadership, a finding you can't support falls apart the moment it's questioned, and it takes your credibility with it.

## The Claude Capability

Claude can generate structured RCA content quickly, but it will present assumptions as findings when its evidence is thin. You control this with explicit rules that anchor Claude to the evidence you provide, require it to label assumptions, and require a confidence level on every claim. The rules turn a fluent guess-machine into a disciplined analysis aid.

## Step-by-Step Workflow

Apply these five rules to every RCA where Claude is involved:

1. **Lead with evidence.** Every finding must start with the evidence, not the conclusion. If you can't state the evidence first, it's a hypothesis, not a finding.
2. **Label assumptions explicitly.** Any claim not directly supported by provided evidence gets tagged `[ASSUMPTION]` or `[NEEDS VERIFICATION]`.
3. **Assign a validation owner.** Every hypothesis names a specific person who will check the evidence — not "the team."
4. **Assign a confidence level.** High (direct evidence), Medium (indirect or pattern), Low (plausible but speculative), or Unknown (insufficient information).
5. **Document what would change the conclusion.** State the specific evidence that, if found, would overturn each hypothesis.

## Example Prompt

```
Role: You are assisting with a root cause analysis under strict evidence
rules.

Context: The evidence below is the ONLY information available. Do not use
outside assumptions about what typically causes these outages.

Evidence:
[paste logs, timeline, metrics, and observations — only what you actually
have]

Task: Produce RCA findings from this evidence.

Output format: For each candidate cause, provide:
- Evidence (stated first, quoting the source)
- Claim
- Confidence: High / Medium / Low / Unknown
- Validation owner: [leave as TBD if not provided]
- What would change this conclusion

Constraints:
- Lead every finding with the supporting evidence.
- Label any claim not directly supported by the evidence as [ASSUMPTION].
- Do not generate a root cause that has no basis in the evidence provided.
  If the evidence is insufficient, say so explicitly.

Verification: After the findings, list every [ASSUMPTION] and every Low or
Unknown item so I can see exactly what still needs investigation.
```

## What Claude Is Doing

Claude is using patterns from the evidence you provided to organize candidate causes. It is not verifying facts unless you supply source material, and when evidence is limited it will tend to fill gaps with plausible-sounding claims. The labeling and confidence rules exist precisely to catch that — any unlabeled claim or unearned "High" is a red flag for you to check.

## Common Beginner Mistake

Accepting a finding because it's specific and confidently worded — for example, "the deployment at 13:45 caused connection pool exhaustion." Specificity is not evidence. Without a stated observation behind it and a confidence level, that sentence is storytelling dressed as analysis.

## Better Practice

Rewrite findings to lead with evidence and carry a confidence label. Compare:

```
Wrong:
The deployment at 13:45 caused the connection pool to exhaust.

Right:
Connection pool exhaustion was observed at 14:02 per pg_stat_activity log
(High). A deployment occurred at 13:45 (High). The causal link between them
is an [ASSUMPTION] (Low) pending review of the deployment change log by
[named engineer]. This conclusion would change if the change log shows no
connection-handling changes.
```

An RCA that says "we don't know yet, and here's how we're finding out" is more useful — and more credible — than one that asserts a cause on insufficient evidence.

## Quick Recap

- Claude will confidently invent root causes when data is thin; the five rules stop it.
- Anchor Claude to provided evidence only, and require `[ASSUMPTION]` labels and confidence levels on every claim.
- Every hypothesis needs a named validation owner and a statement of what would change the conclusion.

## Practice Activity

This week, take one draft RCA and check every finding against the five rules. Rewrite any statement that leads with a conclusion instead of evidence, add a confidence label to each, and flag every claim that turns out to be an unlabeled assumption.
