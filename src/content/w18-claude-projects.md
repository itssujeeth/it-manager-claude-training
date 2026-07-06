# Claude Projects: Persistent Workspaces

## What Projects change about how you work with Claude

In a standard Claude conversation, each session starts fresh. You re-establish context every time: "I'm an IT support manager, here's our process, here's our terminology." Projects change this: you upload your team's documents and set custom instructions once, and every conversation in that Project starts with that context already active.

For IT support teams, this means Claude can answer "what's our SLA for P2 incidents?" with your actual SLA definition — not a generic answer based on ITIL standards.

## What Projects are designed for

**Knowledge base queries** — uploading your SOPs, escalation matrix, SLA definitions, and quality rubric so Claude answers questions using your team's actual standards.

**Consistent persona** — setting up a "support operations analyst" persona that applies to all conversations in the Project, so you don't rewrite the role instructions each time.

**Template library** — storing your tested prompt templates as Project documents so analysts can reference them directly.

**Team-wide access** — with Claude Team plans, Projects can be shared, so all analysts work from the same knowledge base.

## What Projects are not

Projects are not a database. Claude reads the uploaded documents and uses them as context — it does not perform structured queries against them like a search engine or database would. For large document sets, Claude may not recall every detail in every document. Test the coverage before deploying to your team.

Projects do not guarantee that Claude will always prefer your documents over its general knowledge. Use your custom instructions to explicitly require this: "Always prioritize information from the uploaded documents. If the answer is not in our documents, say so rather than drawing on general knowledge."

## Availability and data handling

Claude Projects availability varies by plan — Claude Pro (individual), Claude Team (shared), and Claude API (developer). Before setting up a Project for your team:

- Verify your plan includes Projects and shared access
- Check your organization's data handling policy for the plan you're using
- Understand whether uploaded documents are used to train future models (varies by plan and data handling agreement)

When in doubt, check with your IT security team before uploading any operational documents.

## The first Project to build

A good first Project for IT support: upload your escalation matrix, SLA definitions, and ticket triage criteria. Set the custom instruction to answer questions using these documents and flag when the answer is not in them. Test with 10 questions that have known answers in your documents — verify accuracy before rolling out to your team.
