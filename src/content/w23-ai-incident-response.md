# AI Incident Response: When AI Output Causes Problems

## Why AI incidents need a defined response plan

Traditional IT incident response plans cover system failures, security breaches, and service degradations. They do not cover: an analyst sends a customer communication based on a Claude hallucination, a QA score produced by AI is used as the basis for a formal performance action, or a governance framework drafted with Claude is found to contain a regulatory error after publication.

These are AI-specific incidents. Without a plan, the response is improvised, inconsistent, and potentially more damaging than the original incident.

## The types of AI incidents in support operations

**Output error incidents** — Claude produces wrong information (hallucinated fact, incorrect metric, wrong recommendation) that is acted on before verification.

**Data governance incidents** — an analyst pastes prohibited data into Claude. The incident is the disclosure, regardless of what Claude does with it.

**Automation runaway** — an automated process using AI produces incorrect output at scale (wrong ticket routing, incorrect QA scores, misfired communications) before the error is caught.

**Downstream reliance incidents** — AI-assisted content (a policy, a training quiz, a governance framework) contains an error that was not caught in review and was subsequently used to make decisions.

## The four-step response process

**1. Stop the bleeding** — immediately halt the activity that is producing harm. If the wrong ticket routing is active, disable it. If incorrect content is published, take it down.

**2. Assess scope** — how many outputs were affected? How far did they propagate? Were they acted on? For data governance incidents: what data was disclosed, to what system, under what data handling terms?

**3. Correct and communicate** — correct the error at the source (fix the prompt, update the document, correct the routing logic). Communicate appropriately — internal for most incidents, external if customers were affected.

**4. Post-incident review** — what control failed? Was this a prompt design issue, a missing verification step, a governance gap, or a training failure? Add the control that would have prevented it.

## The governance document that matters most

Your AI incident log. When incidents are documented — what happened, what caused it, what was done — you build an evidence base for improving your controls over time. Without documentation, each incident is a one-off. With documentation, patterns emerge.

Keep the log simple: date, incident type, root cause (prompt / governance / verification / automation), corrective action, prevention measure added. Ten minutes per incident. Invaluable over 12 months.

> The goal is not zero AI incidents — it is a control environment where incidents are caught quickly, corrected completely, and prevented from recurring.
