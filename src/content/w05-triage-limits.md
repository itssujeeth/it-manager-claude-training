# What Claude Cannot Do in Ticket Triage

Understanding Claude's limits is as important as understanding its capabilities. A misplaced assumption about what Claude can do leads to misplaced reliance on its output.

## Claude does not access your ticketing system

Claude works only with text you provide in the prompt. It cannot:

- **Query your ITSM platform** (ServiceNow, Jira, Zendesk, Freshservice, etc.)
- **Look up ticket history** for a user or asset
- **Check CI or CMDB records** to verify whether a configuration item exists
- **See your SLA attainment data** unless you paste it in
- **Access real-time system status** — it cannot tell if a service is actually down right now

If accurate triage depends on system context that Claude doesn't have, the triage is a best-effort draft, not a decision.

## What this means operationally

**Recurring ticket patterns** — Claude cannot notice that the same user has submitted 5 tickets this week without you telling it. A human reviewer or a dashboard still owns that pattern-spotting.

**Related incidents** — Claude cannot correlate the ticket you paste with three other open incidents about the same system. You have to provide that context explicitly if it matters.

**User or asset history** — VIP status, known-bad hardware, recently onboarded employees — none of this is visible to Claude unless you include it in the prompt.

## Claude cannot make routing decisions — it can suggest them

Routing a ticket is an action. Claude produces text. There is always a human step between "Claude suggested this group" and "ticket was routed to this group." That step is your analyst reviewing and confirming the suggestion.

Automating the routing step — sending Claude's suggestion directly to the ITSM system without review — removes the safety check. Claude's accuracy on even a well-built template is not 100%.

## Confidence is not calibration

Claude may express high confidence in a classification that is wrong. The absence of hedging language ("I'm not sure...") does not mean Claude is correct. Always evaluate the output against the ticket facts, not Claude's apparent certainty.

## What Claude does well in triage

- Parsing natural language ticket descriptions for category signals
- Generating a structured classification with reasoning
- Flagging missing information before routing
- Applying a consistent rubric across many tickets faster than manual review

The combination — Claude handles speed and consistency, humans handle judgment and system context — is more accurate than either alone.
