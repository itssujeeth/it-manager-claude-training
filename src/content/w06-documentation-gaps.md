# Identifying Documentation Gaps with Claude

## Why incident documentation has gaps

Incident documentation fails for predictable reasons: responders are focused on resolution, not writing; notes are captured in the moment and never cleaned up; PIRs are written days later from memory; and templates are vague enough to skip sections without noticing.

Claude can serve as a documentation reviewer — analyzing what you have and identifying what is missing.

## How to use Claude as a gap reviewer

Paste your draft PIR or incident notes into Claude and ask:

```
Review this incident documentation and identify:
1. Timeline gaps — periods with no recorded events
2. Missing owner assignments on corrective actions
3. Unvalidated root cause claims presented as fact
4. Impact statements that lack specifics (number of users affected, duration, SLA impact)
5. Prevention measures that are vague or not actionable
6. Missing detection gap analysis (how long between failure and first alert?)

For each gap, note the section and describe what information would fill it.
```

## Common gaps Claude reliably catches

**Action items without owners** — "Investigate connection pooling" is not an action item. "Engineer A to analyze pg_stat_activity and report findings to team by Friday" is. Claude will flag the difference when you ask it to.

**Root cause presented as fact** — "The deployment caused the outage" versus "The deployment is the probable cause pending log analysis." Claude can identify where certainty language is used for unvalidated claims.

**Timeline holes** — If your timeline jumps from 14:00 to 16:00 with nothing in between, Claude will note the gap. Filling it requires checking Slack history, monitoring alerts, or asking responders.

**Vague impact statements** — "Many users were affected" tells leadership nothing useful. Claude will flag this and suggest replacing it with "approximately N users in [region/department] experienced [specific impact] for [duration]."

## What Claude cannot catch

Claude cannot verify whether your timeline is factually correct — it can only check internal consistency (no contradictions) and completeness (no obvious holes). If your notes say the resolution happened at 15:45 but it was actually 16:20, Claude will not know.

Claude also cannot assess whether corrective actions are technically sound — only whether they are structured correctly (owner, task, deadline) and whether they address the stated root cause on its face.

## Building this into your PIR workflow

Make gap review a step in your standard PIR process:

1. Draft PIR from raw notes (Claude assists)
2. Gap review (Claude identifies structural gaps)
3. Technical review (SME validates root cause and corrective actions)
4. Leadership review (for major incidents)
5. Publish

The gap review step catches 80% of structural problems before they reach technical review, saving senior engineer time.
