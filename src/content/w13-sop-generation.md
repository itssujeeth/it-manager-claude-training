# Generating SOPs with Claude

## Why SOPs from informal knowledge are hard to write manually

Most undocumented processes stay that way not because no one sees the value — but because writing them up from scratch is tedious and interrupted by the exact work they're meant to document. Claude changes the economics: a 15-minute verbal walkthrough becomes a structured first draft in minutes.

## The two-step extraction approach

**Step 1 — Get the knowledge out of the person's head.** Ask the process owner to walk you through it out loud while you take rough notes. Focus on getting:
- What triggers the process
- The actual steps in order
- Decision points ("if X, then Y; if not, then Z")
- What can go wrong and how it's handled
- How you know the process completed successfully

Raw, messy notes are fine. You need the knowledge, not clean prose.

**Step 2 — Give Claude the structure job.** Paste your notes with a specific format request:

```
Convert these notes into a structured SOP with: Title, Purpose, Scope (who does this 
and when), Prerequisites (access or tools needed), Numbered steps with decision branches, 
Escalation criteria, and Review date. 

Flag any missing information as [NEEDS INPUT: what is required] rather than guessing.
```

The `[NEEDS INPUT]` instruction is critical — without it, Claude will fill gaps plausibly but incorrectly.

## What Claude produces well

- Numbered step structure with explicit branching
- Consistent format across multiple SOPs (useful when you're documenting 15 processes at once)
- Plain language that doesn't assume the reader knows the history
- A complete structure that makes gaps obvious

## What requires your input

Claude cannot know about environment-specific quirks: the specific system menu path in your version of ServiceNow, the informal rule that VIP tickets always go to Team Lead even if the SLA says otherwise, or the exception process that only happens during month-end close. These must come from the process owner.

## The validation step

Every Claude-generated SOP must be test-followed before publication. The validator should:
1. Follow each step exactly as written — no improvising based on what they know
2. Note every point where they hesitated, got confused, or had to ask a question
3. Flag any step that required access or tools not listed in Prerequisites

A SOP that needs explanation to follow is not ready. Fix it until someone who has never done the process can complete it successfully.

> The goal is a SOP that works without the author in the room. Anything less is documentation theater.
