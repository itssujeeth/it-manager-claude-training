# Identifying Automation Opportunities with Claude

## Why manual process lists are a poor starting point

Most teams start automation conversations with a wishlist — the things people hate doing manually. Wishlist automation prioritizes frustration, not value. The highest-value automation candidates are often the unexciting ones: the Monday morning report that takes 90 minutes, the ticket routing step that causes 20% of misroutes, the notification that goes out 3 hours late every time.

Claude helps you move from wishlist to structured prioritization.

## The inventory first approach

Before asking Claude to rank automation candidates, list every significant manual process your team runs. Don't filter yet — include everything that takes more than 15 minutes per week or happens more than 5 times per week.

For each process, collect:
- **Frequency** — how often it runs
- **Time per run** — how long it takes a person
- **Error rate** — how often it goes wrong
- **Downstream impact** — what breaks or slows when this process is late or wrong

This data is the input. Claude then helps you analyze it.

## Structuring the prioritization prompt

```
Here is a list of manual processes my support team runs. For each, I've noted frequency, 
time per run, and typical errors.

[Paste your list with data]

Task: Score each process for automation potential using these criteria:
- Repetition score (High/Medium/Low): how rule-based and repetitive is this?
- Value score (High/Medium/Low): time saved × frequency
- Risk score (Low/Medium/High): what breaks if automation fails?
- Approach: what type of automation is most suitable (ITSM workflow / AI-assisted / scripted / no-code)?

Rank by (Value - Risk) as a starting prioritization. Flag any process where the risk score 
makes it unsuitable for automation without additional controls.
```

## The automation approach categories

**ITSM native workflows** — built into ServiceNow, Jira, Freshdesk. Low development effort, low risk, limited flexibility. Best for: standard ticket routing, SLA notifications, approval chains.

**No-code platforms** — Zapier, Power Automate, Make. Medium effort, medium flexibility. Best for: cross-system notifications, data syncing, report scheduling.

**Scripted automation** — Python, PowerShell. Higher effort, high flexibility, requires developer time. Best for: data transformation, complex conditional logic, bulk operations.

**AI-assisted** — Claude in the loop for content generation, classification, or summarization. Best for: triage suggestions, communication drafting, QA review. Not for: autonomous decision-making without human review.

## The question Claude always asks that matters most

"What happens when this automation fails?" That is the question that turns a promising automation into a reliable one. Get the answer before development starts.
