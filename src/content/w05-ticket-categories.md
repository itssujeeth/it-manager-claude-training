# Categorizing Tickets Faster with Claude

## Familiar Scenario

It is Monday morning. Overnight and weekend submissions have piled up, and your queue holds around 80 mixed tickets — password resets, a VPN outage report, a new-hire laptop request, and a few vague "it's broken" messages. Your analysts are spending the first two hours of the week just reading and sorting before any real work starts.

## Core Question

Can Claude take a first pass at sorting these tickets into categories so my analysts start the week reviewing suggestions instead of sorting from scratch?

## Why This Matters

Manual triage is slow, and it is inconsistent between analysts. Two people reading the same ticket often file it differently, which distorts your reporting and sends work to the wrong queue. Speeding up the first-pass categorization frees analyst time for resolution and gives you cleaner category data to manage with.

## The Claude Capability

Claude can read the full text of a ticket and suggest a category based on the language in the description. It works from the framework and definitions you provide in the prompt. It does not decide routing on its own, and it does not act on your ticketing system — it produces a suggestion that a human confirms.

The categories most IT teams use come from ITIL 4:

| Type | Definition | Example |
|------|-----------|---------|
| **Incident** | Unplanned interruption or degradation of a service | "VPN is down, I can't connect" |
| **Service Request** | Standard request for something predefined | "Please set up a new laptop for a new hire" |
| **Problem** | Root cause investigation of one or more incidents | "Why does VPN keep dropping for the Chicago office?" |
| **Change** | Planned alteration to a service or infrastructure | "Deploy the new authentication module to production" |

## Step-by-Step Workflow

1. Copy the full ticket text, not just the subject line — subject lines are often ambiguous.
2. Include your category definitions in the prompt so Claude matches against your framework, not assumed defaults.
3. Ask Claude to suggest a category and give a one-line reason.
4. Have an analyst review the suggestion and confirm or correct it before routing.
5. Track corrections so you can see where the suggestions are weakest.

## Example Prompt

```
Role: You are an ITSM triage assistant helping a support desk sort incoming tickets.

Context: We use ITIL 4 categories. Definitions:
- Incident: unplanned interruption or degradation of a service.
- Service Request: a standard, pre-approved request.
- Problem: root cause investigation of recurring incidents.
- Change: planned alteration to a service or infrastructure.

Task: For the ticket below, suggest one category. Give a one-sentence reason
citing the specific words in the ticket that drove your choice. If the text is
too vague to categorize confidently, say so and list what you would need.

Output format:
- Suggested category:
- Reason:
- Confidence (high/medium/low):
- Missing information (if any):

Ticket:
[PASTE FULL TICKET TEXT]

Constraint: Do not assign a person or team. Suggest a category only.
```

## What Claude Is Doing

Claude is using patterns from the definitions and ticket text you provided to match the wording against a category. It is not checking your CMDB, confirming whether a service is actually down, or looking up the user's history. Claude is not verifying facts unless you provide source material. The suggestion is a draft that reflects the language in the ticket, not a verified operational decision.

## Common Beginner Mistake

Pasting only the subject line ("VPN issue") and accepting whatever category comes back. "VPN issue" could be an incident (service is down) or a service request (please grant VPN access). Without the body text, the suggestion is a guess.

## Better Practice

Feed Claude the full description and ask it to flag disruption language — "can't," "stopped working," "down," "not loading" — which usually signals an incident rather than a request. When the ticket references a prior occurrence, ask Claude to note it as a possible problem-management candidate.

## Quick Recap

- Claude can suggest ticket categories from the full text using definitions you supply.
- It suggests; a human confirms and routes. Claude does not touch your ticketing system.
- Provide full ticket text, your definitions, and ask for a short reason so you can catch errors.

## Practice Activity

Pick 20 tickets you have already categorized correctly. Run them through the example prompt and compare Claude's suggestions to your known answers. Note your category accuracy and write down the two ticket types it got wrong most often — that tells you where to tighten your definitions.
