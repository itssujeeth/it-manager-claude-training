# Designing a Claude Training Session for Your Team

## The goal of analyst AI training

A successful training session produces one outcome: every analyst leaves knowing how to do three things — write a useful prompt for a common task, recognize when output needs verification, and know what never to paste into Claude. Everything else is secondary.

Sessions that try to cover everything produce analysts who remember nothing. Sessions with three clear takeaways produce analysts who apply them on Monday morning.

## The 60-minute session structure

**0–10 min: Why this matters for your job** — two or three examples from your own work where Claude saved time or produced something useful. Not vendor pitch slides — your own experience with your own use cases. This sets the tone: this is a practical tool for specific tasks, not a magic solution.

**10–30 min: Hands-on exercise 1 — ticket triage or summarization** — an exercise the whole group does together, using mock ticket data. Focus on prompt structure (role, context, task, format). Show a bad prompt and a good prompt with the same task and compare outputs.

**30–45 min: Hands-on exercise 2 — verification in practice** — give analysts a Claude output that contains a subtle error (invented metric, wrong date, assumption presented as fact). Ask them to find it. This is the most important exercise: it builds the habit of reading output critically rather than accepting it.

**45–55 min: What not to paste** — explicit list with examples. Walk through your data classification table. The three categories: always safe, needs anonymization first, never. Give examples from your actual ticket types.

**55–60 min: Quick reference card and Q&A** — hand out the quick reference card. Take questions. The questions will tell you where the team has concerns you didn't anticipate.

## Using Claude to build the training session

```
Help me plan a 60-minute Claude training session for IT support analysts.
Audience: [experience range, team size, primary ticket types]
Focus areas: prompt writing for [use cases], output verification, safe data rules
Task: Generate a session plan with: time allocations, facilitator notes for each section, 
3 hands-on exercises using mock data, a quick reference card with 5 do's and 5 don'ts.
Constraints: All exercises use mock or hypothetical data. Each exercise has a clear 
success criterion — what does "good" look like?
```

Review Claude's output before using it — some exercises may need adjustment for your team's specific tool environment and ticket types.

## The one thing most training sessions miss

The verification exercise. Most training sessions show analysts how to write better prompts but never explicitly teach them to be skeptical of the output. Build this in, make it memorable, and return to it throughout the session. "Claude can be confidently wrong" is the most important thing an analyst takes away.
