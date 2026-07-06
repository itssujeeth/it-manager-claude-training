# AI Features Built into ITSM Platforms

## Why embedded AI is different from conversational AI

When you use Claude to categorize a ticket, you copy the ticket text, paste it in, read the output, and manually update the ticket. There are four human steps in that workflow.

When your ITSM platform's embedded AI categorizes a ticket, it reads the ticket automatically on creation, assigns a category suggestion, and optionally routes it — with zero manual copy-paste. The friction is gone. So is the human review step, unless you explicitly add one.

This is both the advantage and the risk of embedded AI.

## What major platforms currently offer

Platform AI capabilities change with every release. At the time this content was written, the landscape included:

**ServiceNow AI** — Virtual Agent for self-service deflection, automated ticket categorization, suggested resolution paths, case summarization. Most capabilities require specific ServiceNow SKUs.

**Jira Service Management AI** — suggested assignees, auto-classification, suggested KB articles. Integrated with Atlassian Intelligence across the Atlassian suite.

**Freshdesk Freddy AI** — ticket summarization, suggested responses, auto-categorization, tone detection in customer messages.

**Zendesk AI** — content summarization, suggested macros, auto-tagging, intelligent triage.

**Microsoft Copilot for IT** — incident summarization, knowledge article drafting, integrated with M365 data.

Check your current platform version and licensing — many of these features are in higher-tier plans or require add-on licensing.

## The accuracy problem with out-of-box AI

Every platform's embedded AI is trained on general IT support patterns. Your team's ticket taxonomy, escalation criteria, and terminology are specific to you. Out-of-box accuracy on categorization and routing is often 60–75% — good enough to be helpful, not good enough to be autonomous.

Improving accuracy requires:
- Training data from your own ticket history (usually 500–1000 labeled examples minimum)
- Configuration time to map the AI's categories to yours
- Ongoing monitoring as your ticket types evolve

Plan for a 2–4 week configuration and testing period before embedded AI features are reliable enough to use in production workflows.

## Governance for embedded AI

Unlike conversational AI where a human pastes data and reviews output, embedded AI processes your live ticket data automatically. This means:
- Your data handling obligations apply from the moment you enable the feature — not just when you use it
- You need explicit policies about which AI-assisted suggestions analysts can act on automatically vs. must review
- You need a monitoring process for when the AI miscategorizes — the feedback loop is less obvious than in conversational AI
