# Evaluating AI Features Built Into Your ITSM Platform

## Familiar Scenario

A sales rep from your ITSM vendor is demoing "AI triage" — tickets get categorized and routed automatically the moment they're created, no copy-paste, no manual step. It looks impressive in the demo. But you don't actually know what to ask. How accurate is it on *your* tickets? What happens when it's wrong? Is the human review step gone? You don't want to sign off on a slick demo without the right questions.

## Core Question

"When a vendor pitches AI built into the ticketing platform, what do I need to ask to know whether it's actually reliable enough to use — and where the risks are?"

## Why This Matters

Embedded AI runs on your live ticket data automatically, so the moment you enable it your data-handling obligations kick in and the manual review step disappears unless you deliberately add one back. A demo shows the best case. Real production accuracy on your taxonomy is what determines whether it helps or quietly misroutes tickets — and you only find that out by asking the right questions up front.

## The Claude Capability

This lesson isn't about a Claude feature — it's about evaluation. But Claude can help you prepare: it can help structure your evaluation criteria, draft the vendor question list, and organize the pilot results afterward. It works from what you provide; it can't tell you how the vendor's AI performs on your data. That number comes from a pilot, not from the model.

## Step-by-Step Workflow

1. Establish what "good enough" means before the demo — your accuracy threshold for categorization and routing.
2. Ask the vendor about out-of-box accuracy, configuration needs, and what data trains the feature.
3. Ask where the human review step is and which suggestions analysts can act on automatically.
4. Ask how you'll monitor and correct miscategorization once it's live.
5. Run a time-boxed pilot on your own tickets before enabling it in production.

## Example Prompt

```
Role: You are helping an IT support manager prepare to evaluate an ITSM
vendor's AI triage feature.

Context: The vendor pitches automatic ticket categorization and routing on
ticket creation.

Task: Produce a vendor question list covering: out-of-box accuracy on our
own taxonomy, configuration and training-data needs, human review controls,
data handling once enabled, and ongoing monitoring for miscategorization.

Constraints:
- Frame questions to expose gaps, not to accept marketing claims.
- Do not assume any accuracy figure — accuracy comes from our pilot.

Verification: Note which answers I should confirm with a pilot rather than
take from the vendor.
```

## What Claude Is Doing

Claude can help structure your criteria and draft the question list using patterns from the context you provide. It is not evaluating the vendor's product or predicting its accuracy on your tickets — it has no access to your data or the vendor's model. Any accuracy expectation should come from your own pilot, not from Claude or the sales deck.

## Common Beginner Mistake

Trusting demo accuracy. Every platform's embedded AI is trained on general IT support patterns, but your taxonomy, escalation criteria, and terminology are specific to you. Out-of-box accuracy on categorization and routing is often only in the 60–75% range — helpful, but not good enough to run autonomously.

## Better Practice

Plan for configuration and a real pilot. Improving accuracy typically needs training data from your own ticket history (often 500–1000 labeled examples), time to map the AI's categories to yours, and ongoing monitoring as ticket types evolve — budget a 2–4 week configuration and testing period. Decide up front which AI suggestions analysts may act on automatically versus which must be reviewed, and build the miscategorization feedback loop before go-live, since it's less obvious than in a conversational tool.

## Quick Recap

- Embedded AI runs on live data automatically — data obligations start the moment you enable it.
- Out-of-box accuracy is often 60–75%; demo performance isn't production performance.
- Define your threshold, pilot on your own tickets, set review rules, and build a monitoring loop before going live.

## Practice Activity

Write five questions you'd ask an ITSM vendor about an AI triage feature — at least one each on accuracy, human review, and data handling. Note next to each whether the honest answer should come from the vendor or from a pilot.
