# The Five Rules for AI-Assisted RCA

These rules govern every RCA where Claude is used as part of the process. They exist because a well-formatted RCA with wrong conclusions is worse than no RCA — it creates false confidence and incorrect corrective actions.

## Rule 1: Lead with evidence

Every finding in your RCA must start with the evidence that supports it, not the conclusion. If you cannot state the evidence first, you have a hypothesis, not a finding.

**Wrong:** "The deployment at 13:45 caused the connection pool to exhaust."
**Right:** "Connection pool exhaustion was observed at 14:02 per `pg_stat_activity` log. A deployment occurred at 13:45. Causal link is a hypothesis pending analysis by [engineer] of deployment change log."

## Rule 2: Label assumptions explicitly

Any claim that is not directly supported by evidence must be labeled as an assumption. Use consistent notation — `[ASSUMPTION]` or `[NEEDS VERIFICATION]` — so reviewers know what requires investigation.

Claude can help enforce this: ask it to "label any claim not directly supported by the evidence I've provided." After generation, any unlabeled claim is a gap.

## Rule 3: Assign a validation owner to each finding

Every root cause hypothesis must have a named person responsible for validating it. Not "the team" or "engineering" — a specific person who will check the evidence and confirm or rule out the hypothesis.

Without a named owner, findings sit unvalidated indefinitely.

## Rule 4: Assign a confidence score

Rate each hypothesis: **High** (supported by direct evidence), **Medium** (supported by indirect evidence or pattern), **Low** (plausible but speculative), **Unknown** (insufficient information to assess).

This makes the RCA honest about what you know versus what you're inferring. It also tells readers which corrective actions rest on solid ground versus assumptions.

## Rule 5: Document what would change the conclusion

For each hypothesis, state: "This conclusion would change if [specific evidence] showed [different result]." This makes the RCA falsifiable — a quality standard that distinguishes rigorous analysis from confident storytelling.

## Applying these rules in practice

These rules do not slow down RCA — they prevent the back-and-forth that happens when leadership questions a finding you cannot support. A well-structured RCA that acknowledges its assumptions is more credible, not less, than one that presents everything with false certainty.

When Claude generates RCA content, review it against these five rules before including any finding in a published document. Claude will sometimes present assumptions as findings — especially when the evidence it has is limited. The rules give you a systematic checklist to catch this.

> An RCA that says "we don't know yet, and here's what we're doing to find out" is more useful than one that says "the cause was X" based on insufficient evidence.
