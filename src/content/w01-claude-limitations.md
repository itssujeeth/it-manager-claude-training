# The Draft You Trusted Without Checking

## Familiar Scenario

An analyst on your team asked Claude "is there an active AWS outage right now?" and pasted the answer into a customer update. Claude described a regional issue in confident detail. There was no outage. The customer replied asking for a status page link that did not exist, and now you are cleaning up a credibility problem that never needed to happen.

## Core Question

What are the specific things Claude cannot do, so my team stops relying on it for those?

## Why This Matters

Claude's failures are predictable. When your team can name each limitation, they recognize the risk before it reaches a customer, a runbook, or a leadership report — instead of learning it the hard way.

## The Claude Capability

The useful capability here is knowing the boundaries. Base Claude chat has four limitations that matter in support operations:

- **No live data.** In base chat mode, Claude cannot see the internet, your ticketing system, or any current status. Ask about a live outage and it will draft a plausible answer that may be entirely fabricated.
- **No memory between conversations.** Each new chat starts fresh. Claude does not recall yesterday's discussion, your SLA thresholds, or a prior decision.
- **Fabricated specifics.** Claude can state something false with full confidence, especially version numbers, CLI syntax, and vendor configurations.
- **Knowledge cutoff.** Claude's training ends on a fixed date, so guidance on newer tools or recent advisories may be missing or outdated.

Base Claude chat does not access live systems. If your organization enables tools, web search, or file upload, Claude may work with those sources. Confirm which mode your org allows.

## Step-by-Step Workflow

- Before asking, check whether the task needs live or org-specific data.
- If it does, supply that data yourself or use an approved system instead.
- Never carry context across chats by assumption — restate it each time.
- Treat every technical specific as unverified until checked against official docs.

## Example Prompt

```
You are an IT support analyst. I will paste the current AWS status page
text below. Using only that text, tell me whether the services we depend
on (EC2, RDS, S3 in eu-west-1) are affected.

Constraints: Do not use any knowledge outside the pasted text. If a
service is not mentioned, say "not mentioned — status unknown." Do not
guess about active incidents.

[paste status page text]
```

## What Claude Is Doing

Claude is drafting a response based only on the source material you provided. It is not verifying facts unless you supply them, and in base chat it cannot fetch the live status page itself. By pasting the real status text, you replace an invented answer with one grounded in a source you control.

## Common Beginner Mistake

Asking Claude for current, real-time information — an active outage, today's ticket volume, a recent CVE — and treating the confident reply as fact.

## Better Practice

Supply live or org-specific data yourself, or retrieve it from an approved system, and ask Claude only to structure or interpret what you provided. Restate needed context in every new conversation.

## Quick Recap

- Base Claude has no live data, no cross-session memory, and a knowledge cutoff.
- It can state false specifics with full confidence.
- Supply real data yourself rather than asking Claude to recall it.
- Verify technical specifics against official documentation.
- Confirm which mode (chat, tools, web search, file upload) your org enables.

## Practice Activity

This week, identify one question your team has been asking Claude that actually requires live or org-specific data. Rewrite it as a prompt where you paste the source material in, and share the improved pattern with your team.
