# Understanding Ticket Categories for AI-Assisted Triage

## Why categorization matters

When you ask Claude to categorize a ticket, it needs the same structured framework your team uses. Vague categories produce vague classifications. The ITIL 4 framework gives Claude — and your team — a shared vocabulary.

**The four core ticket types:**

| Type | Definition | Example |
|------|-----------|---------|
| **Incident** | Unplanned interruption or degradation of a service | "VPN is down, I can't connect" |
| **Service Request** | Standard request for something predefined | "Please set up a new laptop for a new hire" |
| **Problem** | Root cause investigation of one or more incidents | "Why does VPN keep dropping for the Chicago office?" |
| **Change** | Planned alteration to a service or infrastructure | "Deploy the new authentication module to production" |

## How Claude uses these categories

Claude classifies based on the language in the ticket description. This means your results improve when you:

1. **Feed Claude the full ticket text** — subject line alone is often ambiguous ("VPN issue" could be an incident or a service request)
2. **Include your category definitions in the prompt** — Claude will match against what you specify, not assumed defaults
3. **Ask Claude to explain its reasoning** — a short rationale lets you catch misclassifications before routing

## Common misclassification patterns

**Incidents logged as service requests** — users often write "please fix my VPN" (sounds like a request) when the service is actually down (incident). Prompt Claude to look for disruption language: "can't," "stopped working," "not loading," "down."

**Problems logged as incidents** — recurring issues are often re-opened as new incidents rather than escalated to problem management. Ask Claude to flag tickets where the description references prior occurrences.

**Changes without change flags** — planned work sometimes arrives without a change ticket. Ask Claude to flag any description mentioning deployment, upgrade, migration, or rollback.

## What to include in your prompt

For consistent categorization, your prompt should specify:
- The four category definitions
- Your priority scale (P1–P4 with criteria)
- Routing rules per category (which group handles what)
- What to do when the ticket description is insufficient (ask Claude to request clarification rather than guess)

## Accuracy baseline

Before deploying a Claude-powered triage prompt to your team, establish an accuracy baseline: test on at least 20 labeled tickets and calculate category accuracy, priority accuracy, and routing accuracy separately. Category accuracy is typically highest; priority is often where misclassification happens most.

> Claude cannot access your ticketing system. It works only with the text you paste. If a ticket requires system context to classify accurately (e.g., checking if a CI exists in your CMDB), that step requires a human.
