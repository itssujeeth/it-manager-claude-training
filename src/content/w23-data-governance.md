# Building Data Governance for AI Use

## Familiar Scenario

Your team has been using Claude for six months. It started with you, spread informally, and now most analysts reach for it without thinking. That is the problem: without thinking. There are no rules about what data is acceptable to paste. You have no idea whether a customer's account number, an employee's performance note, or a system credential has already gone into a chat. You need to establish governance — retroactively, without killing the momentum.

## Core Question

How do I establish clear, usable rules for what data is and is not acceptable to put into Claude — and make those rules stick?

## Why This Matters

Every data governance decision for AI reduces to one question: *if this data appeared in a breach notification or a regulator's inquiry, would we have a problem?* If yes, it does not go into a general-purpose AI tool without documented controls. Ad-hoc use for six months means you have been running that risk blind. Governance turns an invisible, growing exposure into a known, controlled one.

## The Claude Capability

Claude can help you draft a data classification table and usage rules — propose tiers, populate examples, and articulate the reasoning for each. You must supply your organization's actual data types and regulatory context, and your compliance team must review the result. Claude structures the framework; it does not set your policy.

## Step-by-Step Workflow

1. Define classification tiers. A practical three:
   - **Allowed as-is:** anonymized ticket descriptions, public/published policies, generic process descriptions, mock data.
   - **Allowed after anonymization:** ticket data with customer names removed, incident notes with internal system names replaced, QA samples with analyst identifiers stripped.
   - **Prohibited:** full names plus any identifier, any employee/HR record, customer account or financial data, credentials or API keys, NDA-covered contracts, unreleased strategy, and regulated personal data (GDPR, HIPAA, and similar) without explicit legal clearance.
2. Draft the classification table with a **reason** column — analysts need it for edge cases.
3. Have compliance/InfoSec review every borderline classification.
4. Make the rules operational: anonymization tooling, a one-page reference, and a culture where flagging a data question is rewarded.
5. Re-confirm what your org's Claude plan or contract permits regarding data handling and retention.

## Example Prompt

```
You are helping an IT support manager draft a data classification table for
AI tool usage.

Context:
- IT support team using Claude for triage, drafting, summarization
- Data types we handle: ticket descriptions, customer account data, HR/performance
  notes, system credentials, vendor contracts, system configurations
- Regulatory context to consider: GDPR-style personal data rules

Task:
Draft a classification table with columns: Data type | Examples | Classification
(Allowed / Anonymize first / Prohibited) | Reason.

Output format:
One row per data type above.

Constraints:
Where classification depends on regulatory or contractual context, mark it
[REVIEW WITH COMPLIANCE] rather than deciding it. Do not treat "internal data"
as automatically safe.

Verification:
After the table, list the 3 data types most likely to be mishandled by a
busy analyst, so I can emphasize them in training.
```

## What Claude Is Doing

Claude is using patterns from the context you provided to draft a classification framework — it is not making your governance decisions or verifying your regulatory obligations. It cannot know your contracts, your jurisdiction, or your org's data-handling terms. Every `[REVIEW WITH COMPLIANCE]` marker is a decision that belongs to your compliance and legal teams, not to Claude.

## Common Beginner Mistake

Defaulting to "if it's internal, it's fine to use with AI." Internal data includes HR records, financial forecasts, and NDA-covered agreements — none of which belong in a general-purpose AI tool. The real boundary is not internal-versus-external; it is whether sharing the data with a third-party system creates regulatory, contractual, or reputational exposure.

## Better Practice

Make governance a habit, not a document. The rule works when an analyst reaching for a ticket to paste automatically scans for PII, knows the credentials rule cold, and anonymizes without being told. That comes from concrete training, in-the-moment reference materials, and rewarding — never ignoring — the analyst who stops to ask.

## Quick Recap

- The test: would this data cause a problem in a breach notice or regulator inquiry?
- Use three tiers — allowed, anonymize first, prohibited — each with a stated reason.
- "Internal" is not "safe"; compliance owns the borderline calls.

## Practice Activity

This week, draft a first-pass classification table for the five data types your analysts touch most. Mark every classification you are unsure about `[REVIEW WITH COMPLIANCE]` and book time with your compliance contact to resolve them.
