# Responding When Claude Output Causes Harm

## Familiar Scenario

An analyst drafted a customer email with Claude and sent it. The email committed to SLA terms that are wrong — a four-hour response window your team does not actually offer. The customer has already replied, holding you to it. The output reached a stakeholder before anyone verified it, and now you are managing a live incident, not a hypothetical.

## Core Question

When a Claude-generated output reaches a stakeholder and turns out to be wrong or harmful, what do I do — right now, and to prevent it happening again?

## Why This Matters

Traditional IT incident response covers outages, breaches, and degradations. It does not cover an analyst sending a hallucinated SLA commitment, an AI-produced QA score used in a performance action, or a governance document published with a regulatory error. These are AI-specific incidents. Without a defined response, the reaction is improvised, inconsistent, and often more damaging than the original error.

## The Claude Capability

Claude can help you build the incident-response process in advance — draft a response runbook, a triage template, and an incident log format. During a live incident it can help you draft a correction or a stakeholder communication, which you must verify before it goes out. The judgment and the facts stay with you; Claude helps you move faster on the structure and the wording.

## Step-by-Step Workflow

A four-step response:

1. **Stop the bleeding.** Halt whatever is producing harm. Correct the commitment with the customer, take down the wrong content, or disable the misfiring automation.
2. **Assess scope.** How many outputs were affected, how far did they propagate, and were they acted on? For data incidents: what data was disclosed, to what system, under what handling terms?
3. **Correct and communicate.** Fix the error at the source and communicate appropriately — internally for most incidents, externally when a customer or regulator is affected.
4. **Post-incident review.** Identify the control that failed — prompt design, missing verification, governance gap, or training — and add the control that would have prevented it.

Then log it. Keep the incident log simple: date, incident type, root cause (prompt / governance / verification / automation), corrective action, prevention measure added. Ten minutes per incident; invaluable over twelve months, because patterns only emerge when incidents are recorded.

## Example Prompt

```
You are helping an IT support manager respond to an AI-output incident.

Context:
- An analyst sent a customer an email drafted with Claude
- It committed to a 4-hour SLA we do not offer; customer has replied
- Output was not verified before sending

Task:
1. Draft a short internal action checklist following: stop the bleeding, assess
   scope, correct and communicate, post-incident review.
2. Draft a professional correction email to the customer that fixes the SLA
   commitment without over-apologizing or making new promises.
3. Give me an incident-log row: date, type, root cause, corrective action,
   prevention measure.

Output format:
Three clearly separated sections.

Constraints:
Do not invent our real SLA terms - use [CORRECT SLA] as a placeholder I will fill.

Verification:
Before I send anything, list what I must confirm as factually accurate in the
correction email.
```

## What Claude Is Doing

Claude is using patterns from the context you provided to draft a response and a correction — it is not confirming what actually happened or what your real SLA is. Claude is not verifying facts unless you provide source material, which is the same failure mode that caused the incident. The `[CORRECT SLA]` placeholder and the verification step exist so a human confirms every fact before this correction reaches the customer.

## Common Beginner Mistake

Treating the incident as a single email to fix quietly and move on. That corrects the instance and leaves the control gap — the missing verification step — fully intact for the next analyst.

## Better Practice

Run the post-incident review every time and add the prevention measure to your process and your log. The goal is not zero AI incidents; it is a control environment where incidents are caught quickly, corrected completely, and prevented from recurring.

## Quick Recap

- AI incidents need their own response plan — traditional IR does not cover them.
- Follow: stop the bleeding, assess scope, correct and communicate, review.
- Log every incident; patterns and prevention come from the record.

## Practice Activity

This week, write a one-page AI incident runbook for your team — the four steps and a five-column log format — and store it where an analyst could find it during a real incident.
