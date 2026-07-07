# Setting Up a Support Team Project: What Goes In, What Stays Out

## Familiar Scenario

Your organization has enabled Claude Projects and you've been asked to set one up for the support team. You have a folder of useful material — SOPs, tone guidelines, the escalation matrix — but also plenty you're not sure about: ticket exports with customer names, a spreadsheet with an API key in it, last quarter's performance notes. You need to know what belongs in the Project, what must never go in, and how to keep it from going stale.

## Core Question

"What should I actually put into a shared Claude Project, what must I keep out, and how do I keep it trustworthy over time?"

## Why This Matters

A Project is shared context your whole team draws on. Put the wrong thing in — customer data, credentials, HR records — and you've created a data exposure that's hard to undo. Put in an outdated SOP, and Claude answers questions incorrectly with the appearance of authority. Getting the contents and the maintenance right is what makes the Project safe to rely on.

## The Claude Capability

A Project holds uploaded documents plus custom instructions that apply to every conversation in it. Base Claude chat keeps nothing between conversations. If your organization has enabled Projects, Claude may reference the uploaded documents across sessions — which is exactly why what you upload matters. Always confirm which mode your org allows.

## Step-by-Step Workflow

1. For each candidate document, ask: "Would I be comfortable if this appeared in a data incident report?" If not, don't upload it.
2. Upload only safe reference material (anonymized SOPs, role-based escalation matrix, SLA and category definitions, QA rubrics, prompt templates).
3. Keep out anything with PII, credentials, customer data, HR records, contracts, or financials.
4. Write custom instructions that require Claude to answer from the documents and flag gaps.
5. Set a recurring reminder to review and refresh the documents.

## Example Prompt

Custom instructions for the Project:

```
Role: You are a support operations assistant for our team.

Task: Answer questions using only the uploaded team documents.

Rules:
1. Check the uploaded documents first.
2. If the answer is in them, quote or summarize the relevant section.
3. If the answer is NOT in them, say: "This isn't covered in our team
   documents — here is general guidance, but verify it against our actual
   process."
4. Never guess team-specific details (SLA times, escalation paths, approvers).

Data rule: Do not reproduce personal information in your responses.

Verification: Name the source document for any specific figure you cite.
```

**Safe to upload (typically):** anonymized SOPs, escalation matrix with role names, SLA definitions, ticket category and priority criteria, QA rubrics, prompt templates.

**Do not upload:** customer names or account data, employee or HR records, credentials or API keys, vendor contracts or pricing, financial or budget details, anything under NDA, unapproved security or architecture documents.

## What Claude Is Doing

Claude is using the uploaded documents as context and following the instructions you set. Rule 3 above is what keeps it from blending your documented standards with generic IT knowledge in a way that looks authoritative but isn't yours. Claude is not verifying that your documents are current or accurate — it treats whatever you uploaded as the source, so an outdated file produces confidently wrong answers.

## Common Beginner Mistake

Uploading a raw ticket export or a spreadsheet "to be safe," without checking it for customer names, email addresses, or embedded credentials. Convenience at upload time becomes a data exposure that's shared across everyone with Project access.

## Better Practice

When in doubt, don't upload — paste the specific relevant text into a single conversation instead. And treat the Project as a living asset: when a process changes, update the document. An outdated SOP in a Project is worse than none, because it answers incorrectly with apparent authority.

## Quick Recap

- Upload only safe reference material; keep out PII, credentials, and confidential data.
- Use custom instructions that force answers from your documents and flag gaps.
- Schedule a quarterly review — stale documents produce confidently wrong answers.

## Practice Activity

Take five documents you might put in a team Project. Run each through the "data incident report" test and sort them into upload / don't upload. For anything you'd keep out, note what you'd paste into a single conversation instead.
