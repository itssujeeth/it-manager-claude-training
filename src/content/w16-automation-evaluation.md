# Evaluating Automation Candidates by Effort, Value, and Risk

## Why simple ROI misses the point

A process that saves 4 hours per week but breaks twice a month and requires 6 hours of manual recovery is not a good automation candidate. Effort × Value is the standard framework — but it ignores the third dimension that determines whether automation actually improves operations: risk.

## The three-dimension evaluation

**Value** — annualized time saved plus error reduction. Time saved: (hours per run × frequency per year). Error reduction: (error rate × average recovery time × frequency). Be honest about your estimates — Claude will accept whatever numbers you provide.

**Effort** — development time plus ongoing maintenance. Development effort is usually underestimated by 50%. Ask Claude to flag automations that likely require infrastructure changes or developer resources beyond your team.

**Risk** — what breaks if the automation fails, and how hard is recovery? A low-risk failure is one a human can notice and fix in under 30 minutes. A high-risk failure is one that propagates silently, affects customers, or requires data cleanup.

## Risk categories that disqualify easy automation

**Data integrity risk** — automations that write to production systems without human review of the output. Any write operation to your ITSM platform, CMDB, or customer record system needs a review gate.

**Customer-visible risk** — automations that send communications or modify service status. The cost of a misfired customer notification is reputation damage, not just time.

**Compliance risk** — automations that touch regulated data (PII, financial records, health information) without documented controls. These require security review before development.

**Cascading failure risk** — automations that trigger other automations. Each link in the chain amplifies failure.

## Using Claude to evaluate your candidates

Once you have your process inventory with data:

```
Evaluate these automation candidates across three dimensions: Value (time saved × frequency), 
Effort (development complexity), and Risk (failure impact). 

Use a 1–5 scale for each. Calculate a priority score as (Value × 2) - (Effort + Risk).
Flag any candidate with a Risk score of 4 or 5 — these require additional controls before proceeding.
For the top 3 by priority score, note what the key risk is and what control would mitigate it.
```

## The right output for a budget conversation

When you take automation candidates to leadership, lead with annualized value and payback period — not the technical complexity. "This automation saves 208 hours per year (about 0.1 FTE) and requires 3 days of development" is a business case. "This is a ServiceNow workflow with conditional routing and API integration" is a technical description that belongs in the spec, not the pitch.
