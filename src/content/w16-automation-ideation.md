# Finding Automation Candidates in an Overwhelmed Support Queue

## Familiar Scenario

Your team is drowning in repetitive tickets. Password resets, access requests, the same three how-to questions, a Monday report that eats 90 minutes every week. Everyone agrees "we should automate something," but the conversation always drifts to whatever people hate most that day — not to what would actually save the most time.

## Core Question

"Everything feels automatable and nothing feels prioritized. How do I look at what my team actually does and systematically find the highest-value automation candidates?"

## Why This Matters

Wishlist automation prioritizes frustration, not value. The highest-value candidates are often unexciting — the routing step causing 20% of misroutes, the notification that goes out three hours late every time. If you automate by irritation, you spend effort where it feels good rather than where it moves your SLAs and frees real hours.

## The Claude Capability

Claude can take a structured inventory of your manual processes — with frequency, time, and error data — and score each for automation potential across repetition, value, and risk, then rank them. It moves you from a wishlist to a defensible prioritization. The quality of the ranking depends entirely on the quality of the data you feed it.

## Step-by-Step Workflow

1. List every significant manual process — anything over 15 minutes a week or more than five times a week. Don't filter yet.
2. For each, capture frequency, time per run, error rate, and downstream impact.
3. Give the list to Claude and ask it to score and rank by value against risk.
4. Have Claude flag candidates where risk makes automation unsuitable without extra controls.
5. For each strong candidate, answer "what happens when this fails?" before any development.

## Example Prompt

```
Role: You are an automation analyst for an IT support team.

Context: Below is a list of manual processes my team runs. For each I've
noted frequency, time per run, typical errors, and downstream impact.

Processes:
[paste your inventory with data]

Task: Score each process on:
- Repetition (High/Medium/Low): how rule-based and repetitive it is
- Value (High/Medium/Low): time saved x frequency
- Risk (Low/Medium/High): what breaks if the automation fails
- Suggested approach: ITSM workflow / no-code / scripted / AI-assisted

Then rank the processes by (Value minus Risk) as a starting prioritization.

Output format: A ranked table, highest priority first.

Constraints: Base scores only on the data I provided. Do not assume figures
I did not give you; if data is missing for a process, note it as a gap.

Verification: Flag any process where the risk score makes it unsuitable for
automation without additional controls, and say what control is needed.
```

## What Claude Is Doing

Claude is using patterns from the inventory you provided to score and rank candidates. It is not measuring your processes — it accepts whatever frequency and error numbers you supply. The ranking is only as trustworthy as your data; garbage estimates in, confident-looking prioritization out.

## Common Beginner Mistake

Starting the conversation with "what should we automate?" and letting Claude suggest candidates from thin air, or feeding it a bare wishlist with no data. Without frequency, time, and error figures, any ranking Claude produces is guesswork wearing a table.

## Better Practice

Do the inventory first, with real numbers, and treat Claude as the analysis layer on top of it. Match each candidate to a sensible approach — ITSM-native workflows for standard routing and SLA notifications, no-code for cross-system syncing, scripted for complex logic, AI-assisted for triage suggestions and drafting with a human in the loop. And answer the failure question before you build anything.

## Quick Recap

- Automate by value and risk, not by whatever frustrates the team most.
- Build a real inventory with frequency, time, and error data before asking Claude to rank.
- Claude ranks the candidates you give it; it doesn't measure your processes — always ask what happens when the automation fails.

## Practice Activity

This week, inventory five manual processes your team runs, capturing frequency, time per run, and error rate for each. Run them through the example prompt and identify your single highest-value, acceptable-risk candidate — then write one sentence on what happens if it fails.
