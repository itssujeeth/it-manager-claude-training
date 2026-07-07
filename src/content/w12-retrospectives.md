# Documenting Retrospectives with Claude

## Familiar Scenario

Your team runs a retro at the end of each sprint. People talk, good observations come up, and then... nothing. No summary gets written, no commitment gets tracked, and next sprint the same issues resurface. The team is starting to treat the retro as a box-ticking exercise because nothing ever changes.

## Core Question

How do I turn what gets said in a retro into a short, usable output that actually drives one change — instead of a discussion everyone forgets?

## Why This Matters

A retrospective is only worth the time if it produces a decision. The failure mode is a long list of observations and no action; when that repeats, the team stops taking retros seriously. The difference between a retro that improves the team and one that wastes an hour is whether the raw discussion gets turned into a clear, owned, trackable commitment.

## The Claude Capability

Claude can take your rough retro notes and structure them into a clean summary: what went well, what didn't (framed as process rather than blame), and one specific commitment for the next period with a way to track it. It organizes and structures what was said — the decision to act, and the judgment about what matters, stay with you.

## Step-by-Step Workflow

1. Capture rough notes during the retro — you don't need them polished.
2. Choose a format (Start-Stop-Continue, Four Ls, or a plain summary).
3. Paste the anonymized notes and ask Claude to structure them.
4. Ask for exactly one committed change, not five, with an owner and a way to track it.
5. Review and adjust so the commitment is genuinely doable in the next period.
6. Carry unmet commitments forward to the next retro's opening check-in.

## Example Prompt

```
Role: You are helping me write a team retrospective summary.

Meeting type: Sprint retrospective
Raw notes: [PASTE NOTES — no names attached to criticism]

Task: Produce a summary with:
1. Three things that went well (with brief evidence)
2. Three things that didn't go well, framed as process or system issues, not people
3. One team commitment for the next sprint — specific, measurable, and owned
4. How we'll track whether the commitment was met

Constraints: The one commitment must be genuinely achievable in the next 30 days, not aspirational. Blame-free language throughout.

Verification: Flag any point that names or clearly points to an individual so I can reframe it before sharing.
```

## What Claude Is Doing

Claude is reorganizing the notes you provided into a structured summary, using patterns from how retrospectives are run — it is not verifying what actually happened in the sprint or deciding which change matters most. Asking it to flag anything that points at an individual keeps the summary blame-free, and the "one commitment" constraint stops the output from sprawling into a list no one owns.

## Common Beginner Mistake

Letting the retro produce five commitments and calling it thorough. Five commitments with no tracking is the same as zero — the team can't focus on all of them, so none of them happen, and the retro loses credibility.

## Better Practice

Commit to one reliable change per sprint and track it. Start each retro with a five-minute check on last time's commitment before looking at anything new — Claude can draft that check-in question ("What did we commit to last time? Did we do it? If not, why, and is it still worth doing?"). A retro culture that lands one real change per period beats one that generates five commitments with no follow-through.

## Quick Recap

- Turn rough retro notes into a structured, blame-free summary with Claude.
- Aim for one owned, trackable commitment — not a long list.
- Open the next retro by checking whether the last commitment was met.

## Practice Activity

After your next retro, paste your rough notes into the prompt above and produce a summary with exactly one owned commitment and a way to track it — then add that commitment to the top of the doc so you can check it next time.
