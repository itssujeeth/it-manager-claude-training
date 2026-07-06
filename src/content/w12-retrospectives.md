# Team Retrospectives with Claude

## What makes a retrospective worth the time

A retrospective is a structured look backward — what worked, what didn't, and what to change. The failure mode is a retrospective that produces a long list of observations and no decisions. Teams stop taking them seriously when nothing changes afterward.

Claude can help you run tighter retrospectives and produce cleaner summaries and improvement proposals — but the decision to act has to come from you.

## Retrospective formats Claude can facilitate

**Start-Stop-Continue** — The simplest format. What should the team start doing? Stop doing? Continue doing? Claude prompt: "Given these retrospective notes, produce a Start-Stop-Continue summary that prioritizes one item per category based on frequency and impact."

**Four Ls (Liked, Learned, Lacked, Longed For)** — Useful when you want to separate appreciation from improvement. Claude prompt: "Organize these retrospective inputs into the Four Ls and identify the top improvement theme."

**Timeline retrospective** — For project retrospectives, walking through what happened week by week. Claude prompt: "Based on this project timeline and team feedback, generate a retrospective summary identifying the three decision points that most influenced the outcome."

## Generating retrospective summaries

After the meeting, paste your raw notes:

```
Role: You are helping me write a team retrospective summary.
Meeting type: [Monthly ops / Sprint / Post-project / Quarterly]
Raw notes: [PASTE NOTES]
Task: Produce a retrospective summary with:
1. Three things that went well (with brief evidence)
2. Three things that didn't go well (framed as system/process issues, not person issues)
3. One team commitment for the next period — specific, measurable, owned
4. How we'll track whether the commitment was met

Constraints: The "one team commitment" should be genuinely actionable in the next 30 days — not aspirational. Blame-free language throughout.
```

## Drafting improvement proposals

When a retrospective surfaces a recurring issue, Claude can help you structure a formal improvement proposal:

```
Problem identified: [Describe the issue from the retrospective]
Evidence: [How often does this happen? What does it cost?]
Task: Draft a one-page improvement proposal with: problem statement, proposed solution, expected benefit, what success looks like in 30 days, and owner.
Constraints: Solution should be implementable by the team without external resources or budget approval unless you flag it as requiring both.
```

This turns a retrospective observation into something you can actually hand to your manager or put on the team board.

## Tracking commitments between retrospectives

The most common failure: teams commit to something at a retrospective and no one tracks it. By next month, it's forgotten and the same issue appears again.

Simple tracking approaches:
- Keep a "team commitments" section at the top of each monthly retrospective doc — carry forward unmet commitments from the previous month
- Start each retrospective with a 5-minute check-in on last month's commitment before looking at new issues
- Claude can help you draft the check-in question: "What did we commit to last month? Did we do it? If not, why not — and is it still worth doing?"

A retrospective culture that produces one reliable change per month outperforms one that produces five commitments with zero follow-through.
