# Drafting Focused Meeting Agendas with Claude

## Familiar Scenario

Your week is full of meetings that start late, wander through status updates, and end without a decision. You know they should be tighter, but building a real agenda every time feels like one more task, so you keep walking in with a rough topic list in your head — and the meetings keep sprawling.

## Core Question

How do I make my recurring meetings focused and time-bound without spending 20 minutes building an agenda before each one?

## Why This Matters

The quality of a meeting is mostly set by its agenda. The common failure modes — unclear purpose, no time limits, no decisions — all trace back to a weak or missing agenda. A topic list ("1. Updates 2. Q3 metrics 3. AOB") tells no one what the meeting is for or when it should end. A structured agenda lets you run to time and know afterward whether the meeting succeeded.

## The Claude Capability

Claude can turn a rough list of topics into a focused agenda with time allocations, an owner for each item, and a desired outcome. It can also flag when you've packed in more than the time allows and suggest what to defer. It structures your inputs — it doesn't decide your priorities for you.

## Step-by-Step Workflow

1. List the topics you need to cover and roughly rank them.
2. Note any decisions that must come out of the meeting.
3. Give Claude the meeting type, duration, and attendee roles (not names).
4. Ask for a table with time, topic, owner, and desired outcome.
5. Ask it to flag anything that won't fit and suggest what to defer.
6. Adjust, then send the agenda ahead of the meeting.

## Example Prompt

```
Role: You are helping me structure a team meeting.

Meeting type: Weekly ops review
Duration: 30 minutes
Attendees: Support team leads and shift leads (roles, not names)

Topics to cover (roughly prioritized): [list 4–6]
Decisions needed: [any decisions that must come out of this meeting]

Task: Produce a focused agenda as a table with columns: Time, Topic, Owner, Desired Outcome.

Constraints: Reserve five minutes at the end for an action-item recap. If the topics don't fit the time, tell me which to defer and why.

Verification: List any topic that looks like a status update that could be an email instead of a discussion item.
```

## What Claude Is Doing

Claude is organizing the topics you gave it into a timed structure, using patterns from how effective meetings are run — it is not judging which topics actually matter most to your team. Asking it to flag status-only items and suggest deferrals surfaces the tension between what you want to cover and what 30 minutes really allows, so you make that call deliberately.

## Meeting Patterns Worth Reusing

- **Weekly ops review (30–45 min)** — spend less than half the time on status; focus on what needs a decision today.
- **Monthly retrospective (60 min)** — aim for one concrete commitment, not a long discussion with no owner.
- **Team stand-up (10–15 min)** — status is async; the meeting is for blockers and coordination, with a tight cap per person.

## Turning Notes Into Minutes

After the meeting, paste your rough notes:

```
Context: Rough notes from a [meeting type] on [date].
Task: Convert these into minutes with: decisions made, action items (owner, task, deadline), a parking lot, and the next meeting date and topic.
Constraints: Every action item needs a named owner and a specific deadline. If the notes don't include one, flag it.
```

Send the minutes to attendees within a day for corrections before they become the record.

## Common Beginner Mistake

Accepting an agenda that lists topics but no outcomes, then running a meeting that "covers" everything and decides nothing. Coverage isn't the goal — decisions and clear next steps are.

## Better Practice

Insist every agenda item has a desired outcome and a time box, and build in a recap slot for action items. When Claude flags that topics won't fit, actually defer something rather than overrunning. Move pure status updates to async so the live time goes to decisions and unblocking.

## Quick Recap

- A useful agenda has time, owner, and desired outcome for every item.
- Ask Claude to flag what won't fit and what could be an email instead.
- Convert notes to minutes with owned, deadlined action items and circulate within a day.

## Practice Activity

Take your next recurring meeting. Give Claude the topics, duration, and roles, and have it produce a timed agenda with outcomes — then cut or defer at least one item it flags as not fitting the time.
