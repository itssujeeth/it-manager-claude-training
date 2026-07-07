# Should I Search the KB or Ask Claude?

## Familiar Scenario

An analyst stops by your desk with a ticket: "VPN error 691." They ask whether they should search the ServiceNow knowledge base or just ask Claude. Both feel faster than reading the runbook. You want to give them a rule they can apply every time, not a one-off answer.

## Core Question

When is the right tool a search or knowledge base, and when is it Claude?

## Why This Matters

Your KB returns your organization's specific, approved resolution steps. Claude drafts from general patterns. Using the wrong one wastes time at best and puts a wrong procedure in front of a customer at worst. A clear rule keeps your team accurate and fast.

## The Claude Capability

The distinction is retrieval versus generation.

- Your Confluence or ServiceNow KB **retrieves** documents. You search, and it returns what already exists — your environment's exact steps for "VPN error 691."
- Base Claude **generates** a response from learned patterns. There is no specific document behind the answer, so it may not match your environment.

Claude's mode changes what is possible. With file upload, Claude can work from a document you paste in. With a persistent project workspace, it can reference a fixed set of your team's SOPs. With web search enabled, it can retrieve current information. Base Claude chat does not access live systems. If your organization enables tools, web search, or file upload, Claude may work with those sources. Confirm which mode your org allows.

## Step-by-Step Workflow

- If the answer is an org-specific procedure that already exists, search the KB first.
- If the KB has the article but it is hard to follow, retrieve it, then ask Claude to rewrite it for clarity.
- If you need general drafting, summarizing, or structuring, use Claude.
- If you need current external information, use an approved system or Claude with web search if enabled.

## Example Prompt

```
You are a support documentation editor. Below is our approved KB article
for VPN error 691. Rewrite it as clear, numbered troubleshooting steps for
a Level 1 analyst.

Constraints: Do not add, remove, or change any technical step. Only improve
clarity and structure. If a step is ambiguous, flag it as "[clarify]"
rather than rewriting its meaning.

[paste KB article]
```

## What Claude Is Doing

Claude is drafting a clearer version based on the article you provided. It is using patterns from that context to improve structure and readability. It is not retrieving your resolution steps on its own and it is not confirming they are correct — the accuracy comes from the approved source you pasted in.

## Common Beginner Mistake

Asking base Claude an environment-specific question ("what are our steps for VPN error 691?") and treating the generated answer as your org's official procedure.

## Better Practice

Use the KB to retrieve approved procedures, then use Claude to rewrite, summarize, or structure them. Let each tool do what it is built for.

## Quick Recap

- KB and search retrieve existing, approved documents.
- Base Claude generates from patterns and does not retrieve.
- Use the KB for org-specific procedures; use Claude to draft and clarify.
- Claude's mode (file upload, projects, web search) changes what it can access.
- Confirm your org's configuration before promising your team what Claude can reach.

## Practice Activity

Take one confusing KB article this week. Retrieve it from your system, then ask Claude to rewrite it for clarity without changing the steps. Route the improved version through your normal documentation review before publishing.
