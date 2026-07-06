# Data Governance for AI Tools

## The question at the center of AI governance

Every data governance decision for AI reduces to one question: "If this data appeared in a breach notification or a regulator's inquiry, would we have a problem?" If the answer is yes, that data should not go into a general-purpose AI tool without documented controls.

## The three classification tiers

**Allowed — paste as-is:**
Anonymized ticket descriptions, public-domain information, generic process descriptions, mock and hypothetical data, published policies that are already external-facing.

**Allowed with anonymization:**
Ticket data with customer names removed, incident notes with internal system names replaced, meeting summaries with attendee names removed, QA samples with analyst identifiers stripped.

**Prohibited — never into Claude:**
Full names combined with any other identifying information, employee records of any kind (performance, HR, compensation, health), customer account numbers or financial data, system credentials or API keys, proprietary vendor contracts under NDA, unreleased strategic plans, regulated personal data (GDPR, HIPAA, SOX in context) without explicit legal clearance.

## Building the data classification table

Claude can draft a classification table, but you must populate it based on your organization's actual data types and regulatory context:

```
Draft a data classification table for AI tool usage in an IT support team.
Columns: Data type, Examples, Classification (Allowed / Anonymize first / Prohibited), Reason.
Data types to include: [list your actual data types — ticket descriptions, HR records, 
customer data, financial data, credentials, system configurations, etc.]
Note: Flag any data type where the classification depends on regulatory context 
(GDPR, HIPAA, SOX) — I will review these with our compliance team.
```

The "reason" column matters: without it, analysts cannot apply the rule to edge cases not in the table.

## Why "internal" is not the same as "safe to use with AI"

Many teams default to "if it's internal, it's okay to use with AI." This is wrong for two reasons.

First, internal data includes employee HR records, financial forecasts, and confidential vendor agreements — none of which should go into a general-purpose AI tool.

Second, the relevant boundary is not internal vs. external. It is: would sharing this data with a third-party AI system create regulatory exposure, contractual violation, or reputational risk? Ask your InfoSec team to review your classification decisions, not just your definition of "internal."

## Data governance as culture, not just policy

A classification table that lives in a document nobody reads is not governance. Governance is the habit analysts have when they reach for a ticket to paste — they automatically scan for PII, they know the rule about credentials, they've internalized the anonymization step.

Building this habit requires: training that makes the rules concrete, quick-reference materials analysts can consult in the moment, and a response culture where flagging a governance question is rewarded, not ignored.
