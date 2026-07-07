# Rewriting a Terse Email Before It Reaches a Frustrated User

## Familiar Scenario

An analyst is about to send this to a finance director who just lost an hour of invoicing access: "The issue was caused by a misconfigured DNS record that propagated incorrectly following a routine maintenance window. Closing ticket." It is technically accurate. It is also cold, jargon-heavy, and likely to trigger an escalation. You want to fix the tone before it goes out — and use the moment to coach the analyst.

## Core Question

How do I quickly rewrite technically correct but poorly landing messages for the audience actually reading them?

## Why This Matters

Support communications fail on tone as often as on content. A correct message that reads as defensive or dismissive damages the relationship and generates follow-up escalations. Rewriting for audience is a repeatable skill, and it doubles as coaching material for your team.

## The Claude Capability

Claude is good at rewriting text for a specified audience and tone. You paste the original, name the reader and the tone you want, and ask for a rewrite. You can also ask Claude to assess the tone of a draft — useful as a coaching anchor when an analyst's closure notes come across poorly.

One caution: Claude sometimes over-polishes into corporate boilerplate. If a draft reads like a press release when it should read like a helpful colleague, add a constraint asking for a direct, human tone.

## Step-by-Step Workflow

- Paste the original message.
- Name the audience and the tone you want.
- Ask Claude to rewrite, keeping the facts unchanged.
- Add a constraint against corporate boilerplate if needed.
- Read the rewrite and confirm no facts were altered before sending.

## Example Prompt

```
You are an IT support manager. Rewrite the message below for a
non-technical finance director who was affected by the outage.

Original: "The issue was caused by a misconfigured DNS record that
propagated incorrectly following a routine maintenance window. Closing
ticket."

Task: Rewrite for clarity and empathy.

Format: Under 100 words. Focus on business impact, what was fixed, and a
brief note on prevention.

Constraints: Plain language, no acronyms. Direct, human tone — not
corporate boilerplate. Do not change any technical facts.

Verification: Note any fact you were unsure about so I can confirm it.
```

## What Claude Is Doing

Claude is drafting a reworded version based on the message and audience you specified. It is using patterns from that context to adjust tone and reading level. It is not verifying the technical explanation is correct — it preserves the facts you gave it, so confirm them before sending.

## Common Beginner Mistake

Sending Claude's rewrite without reading it, and discovering later that the polish quietly changed or softened a technical fact.

## Better Practice

Use Claude to rewrite for audience and to flag defensive tone, then always read the result to confirm the facts are intact and the voice is human, not corporate.

## Quick Recap

- Correct messages can still fail on tone.
- Claude rewrites for a specified audience and tone.
- It can also assess tone as a coaching anchor for your team.
- Guard against over-polished corporate boilerplate with a constraint.
- Always read the rewrite to confirm facts are unchanged.

## Practice Activity

Pick one recent closure note or escalation email that landed badly. Rewrite it with Claude for the actual reader, then use the before-and-after in a coaching conversation with the analyst who wrote it.
