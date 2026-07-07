# When Claude Confidently Cites a Policy That Doesn't Exist

## Familiar Scenario

Preparing for an audit, you ask Claude about your data retention obligations. It responds with a clean, confident answer and cites "IT Policy 7.4, Section 3." The tone is authoritative and the reference looks real. There is no Policy 7.4. If that citation had gone into your audit response, you would have handed an auditor a fabricated source with your name on it.

## Core Question

What are Claude's failure modes, and how do I recognize them before they reach a customer, a report, or an auditor?

## Why This Matters

Claude fails in predictable ways. When your team can name each pattern, they catch it in review instead of discovering it after it has caused damage. Naming the failure is the first step to defending against it.

## The Claude Capability

The useful skill is recognizing three failure modes by name:

- **Confident wrong answers.** Claude presents incorrect information with the same tone and structure as correct information. There is no built-in signal that it is wrong. Most dangerous for CLI commands, version numbers, and vendor settings.
- **Outdated technical guidance.** Claude's training has a cutoff. Guidance may reference an older software version or a UI that no longer exists.
- **Fabricated references.** Claude will sometimes cite policies, studies, or documents that do not exist, complete with plausible names and URLs.

A further risk to know about is **prompt injection**: if you paste untrusted content — a forwarded email, a web page, a ticket from an unknown sender — that content may contain hidden instructions that try to steer Claude's response. Treat pasted external text as data to analyze, not as instructions to follow.

## Step-by-Step Workflow

- For any output going to production, identify every specific fact, version, and reference.
- Verify commands and version numbers against official current documentation.
- Confirm any cited policy or document actually exists before you rely on it.
- Never trust a Claude-generated URL without opening and checking it.
- When pasting untrusted content, ask Claude to treat it as data only.

## Example Prompt

```
You are an IT compliance assistant. Below is the full text of our data
retention policy. Answer my question using only this text.

Question: How long must we retain support ticket records?

Constraints: Quote the exact section you are relying on. If the answer is
not in the text, say "not covered in this document." Do not cite any
policy, section, or source that is not present in the text below.

[paste actual policy text]
```

## What Claude Is Doing

Claude is drafting an answer based only on the policy text you provided. It is using patterns from that context and is not verifying facts unless you supply the source. By requiring it to quote from the pasted text, you make fabricated citations impossible — the answer must trace to a real source you control.

## Common Beginner Mistake

Accepting a confident, well-formatted answer with a specific citation without checking that the cited source actually exists.

## Better Practice

Supply the real source and require Claude to quote from it. For anything customer-, leadership-, or audit-facing, verify every specific fact and reference before use, and never trust a generated URL unchecked.

## Quick Recap

- Claude can state wrong facts with full confidence.
- Technical guidance may be outdated past the training cutoff.
- Claude can fabricate realistic-looking references and URLs.
- Untrusted pasted content can carry hidden instructions — treat it as data.
- Supply the source and require quotes to eliminate fabrication.

## Practice Activity

This week, take one factual claim or citation Claude produced and try to verify it against the real source. Note whether it held up, and share the result with your team as a concrete example of why verification matters.
