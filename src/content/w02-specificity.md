# "Help Me Write an Email" Versus a Prompt That Works

## Familiar Scenario

Your team is escalating a payment outage and an analyst asks Claude to "help me write a message about the outage." The draft is vague, hedged, and missing every detail a customer needs. Ten minutes of back-and-forth later, they still do not have something sendable. The tool is fine. The prompt asked for almost nothing.

## Core Question

How much detail does Claude actually need before it produces something I can send with only light edits?

## Why This Matters

Support teams instinctively prompt Claude the way they query a search engine — short and general. That produces surface-level output that is not safe to send. Specificity is a learnable skill, and it is the fastest lever your team has for better results.

## The Claude Capability

Claude produces output in proportion to the detail you provide. Compare the same task at two levels of specificity.

Vague:

```
Help me write a message about the outage.
```

Specific:

```
Write a customer-facing status update for a payment processing outage
affecting enterprise customers. Started 14:32 UTC. Root cause: a database
failover that did not complete cleanly. Estimated resolution: 60 minutes.
Tone: professional, direct, no technical jargon. Format: three short
paragraphs — current status, impact, next update time.
```

The specific version gives Claude the who, what, when, format, and constraints. The result is close to sendable. The vague version forces rounds of correction.

## Step-by-Step Workflow

- Before sending a prompt, check it has who, what, when, format, and constraints.
- Add any detail Claude cannot know unless you tell it.
- Specify tone and length explicitly.
- Add a verification step for anything customer- or leadership-facing.
- Add missing detail up front rather than correcting after the fact.

## Example Prompt

```
You are an IT support manager writing to enterprise customers.

Context: Payment processing outage. Started 14:32 UTC. Root cause is a
database failover that did not complete cleanly. Estimated resolution 60
minutes from now.

Task: Write a customer-facing status update.

Format: Three short paragraphs — current status, business impact, time of
next update.

Constraints: Professional and direct. No technical jargon. Under 150 words.

Verification: List any facts in the draft that I must confirm before
sending.
```

## What Claude Is Doing

Claude is drafting a structured message based on the specifics you provided. It is using patterns from that context to match your requested tone and format. It is not confirming the outage details are accurate — the verification step lists them so you can check before sending.

## Common Beginner Mistake

Prompting like a search query — "how do I handle an angry customer?" — and iterating repeatedly instead of front-loading the detail.

## Better Practice

Front-load who, what, when, format, and constraints. Specificity up front replaces several correction cycles with one strong draft.

## Quick Recap

- Vague prompts produce generic, unsendable output.
- Include who, what, when, format, and constraints every time.
- State tone and length explicitly.
- Add a verification step for anything external-facing.
- Front-loading detail is faster than correcting afterward.

## Practice Activity

Pick one message type your team sends often — an outage update or an escalation. Write a fully specified prompt template for it this week, and share it so the whole team starts from the same strong baseline.
