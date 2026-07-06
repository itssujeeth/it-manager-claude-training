# Meeting Agendas and Structure with Claude

## The cost of bad meetings

Research from Harvard Business Review suggests managers spend 23 hours per week in meetings, and a significant portion of that time is low-value. The most common causes: unclear purpose, no agenda, wrong people in the room, no decisions made.

Claude doesn't fix meeting culture — but it can help you build the habit of structured agendas quickly enough that skipping it feels like more work.

## What a useful agenda contains

A weak agenda is a topic list: "1. Updates 2. Q3 metrics 3. AOB."

A useful agenda has:
- **Time allocations** — how long for each item
- **Owner** — who is leading this item
- **Desired outcome** — what decision, input, or update is needed by the end

This structure makes it possible to run the meeting to time and know whether it succeeded.

## Prompting Claude for agenda generation

```
Role: You are helping me structure a team meeting.
Meeting type: [Weekly ops / Monthly retrospective / Project kickoff / Leadership briefing]
Duration: [N minutes]
Attendees: [List roles, not names]
Topics I need to cover: [List 4–6 topics, roughly prioritized]
Decisions needed: [Any specific decisions that must come out of this meeting]
Task: Generate a focused agenda with time allocations, owner for each item, and desired outcome.
Format: Table with columns: Time, Topic, Owner, Desired Outcome.
Constraints: Build in 5 minutes at the end for action item recap. If the topics don't fit in the time available, suggest which to defer.
```

The "suggest what to defer" instruction is useful — Claude will surface the tension between what you want to cover and what the time actually allows.

## Meeting types and agenda patterns

**Weekly ops review (30–45 min)**
Focus: metrics, blockers, priorities for the week. Less than half the time on status; more on decisions and unblocking. Claude prompt: "Focus on what needs a decision today, not updates that could be an email."

**Monthly retrospective (60 min)**
What went well, what didn't, what to try next month. One change committed to — not five. Claude prompt: "Generate a retrospective agenda that produces one concrete team commitment, not just a discussion."

**1:1 series in a group format (team stand-up)**
15 minutes or less. Status is async. This time is for blockers and coordination. Claude prompt: "Generate a 10-minute stand-up structure where each person has 90 seconds maximum and the focus is blockers."

## After the meeting: converting notes to minutes

Paste your raw notes into Claude with:

```
Context: These are rough notes from a [meeting type] on [date].
Task: Convert these into structured meeting minutes with:
1. Decisions made (what was decided, not discussed)
2. Action items (owner, task, deadline — required for every action)
3. Parking lot (topics raised but not resolved)
4. Next meeting date and topic
Format: Clear headings. Action items as a numbered list.
Constraints: Every action item must have a named owner and a specific deadline. If the notes don't include this, flag it.
```

Send the minutes to attendees within 24 hours for factual corrections before they become the official record.
