# Why Claude Gave You the Wrong Server Name

## Familiar Scenario

It is Monday morning. You asked Claude to draft a resolution note for a recurring VPN outage, and the draft referenced a gateway called `vpn-gw-03`. The problem is that your environment has no such server. The note read cleanly, the formatting was perfect, and the detail was completely invented. Before you send anything like this to your team, you want to understand how a tool this capable produced a confident, wrong fact.

## Core Question

Where does Claude's answer actually come from — is it looking things up in a database, or is it doing something else?

## Why This Matters

If you assume Claude is a search engine that retrieves known facts, you will trust the specifics it returns. In support operations, specifics are exactly what end up in runbooks, resolution steps, and customer messages. Understanding how Claude produces an answer tells you which parts to trust and which parts to verify.

## The Claude Capability

Claude is a pattern-based language system. It was trained on a very large body of text, and from that it learned the statistical relationships between words, concepts, and document structures. When you send a prompt, Claude drafts the most likely useful continuation of that text based on those patterns. It is not querying your ticketing system, your knowledge base, or the live internet.

This is why Claude can draft a solid post-incident report without ever seeing your tools — it has processed enough incident reports to reproduce the shape of one. It is also why it can produce a plausible but fictional server name: it is completing a pattern, not retrieving a record.

## Step-by-Step Workflow

- Give Claude the real, source material it should work from (paste the actual server names, log lines, or ticket text).
- Ask it to draft or structure using only what you provided.
- Treat any specific fact you did not supply as unverified.
- Check names, numbers, and commands against your own systems before use.

## Example Prompt

```
You are an IT support team lead. Using only the details below, draft a
short resolution note for a VPN outage.

Details:
- Affected gateway: vpn-core-01
- Symptom: connections drop after 4 hours idle
- Fix applied: increased idle timeout to 8 hours

Output format: three short sections — Summary, Root Cause, Resolution.

Constraints: Do not add any server names, timeouts, or details I did not
provide. If something is missing, write "[needs confirmation]" instead of
guessing.
```

## What Claude Is Doing

Claude is drafting a structured response based on the instructions and the material you provided. It is using patterns from that context to shape the note. It is not verifying facts against a live system, and it will fill gaps with plausible text unless you tell it not to. The "[needs confirmation]" instruction turns those gaps into visible flags instead of silent inventions.

## Common Beginner Mistake

Asking Claude for a fact it was never given — "what's the name of our VPN gateway?" — and then trusting the confident answer it returns.

## Better Practice

Supply the real details as source material and ask Claude to draft, structure, or summarize from them. Reserve Claude for shaping content, not for recalling facts about your specific environment.

## Quick Recap

- Claude drafts from learned patterns, not from a live database or search index.
- Confident specifics you did not provide may be invented.
- Give Claude real source material and constrain it to that material.
- Ask it to flag missing details rather than guess them.
- Verify names, numbers, and commands before they reach production.

## Practice Activity

This week, take one task where you were tempted to ask Claude a factual question about your environment. Instead, paste the real details and ask Claude to structure them. Note how much more reliable the output is when you supply the facts.
