# Synthesizing 23 Weeks into an Operating Model

## What the capstone is and is not

The capstone is not a reflection exercise. It is a deliverable — a document that describes how your support team will operate with AI assistance, specific enough that someone new to the team could read it and know what tools to use, what rules to follow, and what to do when something goes wrong.

The test: could a new manager take this operating model and run your team's AI operations without asking you for clarification? If not, it is not done.

## The synthesis process

You have built artifacts across 23 weeks. The capstone is not starting from scratch — it is assembling and connecting what you've built:

**Week 4 → Governance foundation:** Your acceptable-use policy becomes the data governance section of the operating model.

**Weeks 5–12 → Use case catalog:** Every workflow you built a prompt for is a use case. Document each with: use case name, tool used, prompt template (or reference), data rules, human review requirement, metric tracked.

**Week 14 → RCA process:** Your AI-assisted RCA workflow becomes a documented sub-process in problem management.

**Weeks 17–18 → Advanced prompting standards:** Your system prompts and multi-step chains become the prompt library section.

**Week 21 → Adoption roadmap:** The phased plan becomes the implementation section.

**Week 22 → Training program:** The workshop design becomes the onboarding and training section.

**Week 23 → Governance framework:** The data classification table, approved/prohibited use cases, and incident response plan complete the governance section.

## Using Claude for synthesis

Claude can help assemble disparate artifacts into a coherent document structure:

```
I have the following artifacts from a 23-week AI training program. 
Help me organize them into a single operating model document.
Artifacts: [list what you have]
Task: Suggest a document structure that flows logically from governance → use cases → 
processes → training → measurement → risk management. 
Then help me draft the executive summary and section transitions.
Constraints: Do not invent content — if a section requires data I haven't provided, 
flag it as [TO COMPLETE].
```

The `[TO COMPLETE]` flags become your final checklist.

## The leadership brief

Every operating model needs a 1-page leadership brief that answers: what is this, why does it matter, what does it require from leadership, and what does success look like in 6 months? Claude drafts this well once you've assembled the underlying document — the brief summarizes a complete model, not a concept.

Write the full model first, the brief last.
