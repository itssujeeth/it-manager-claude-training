# The Limits of AI-Assisted QA

## What Claude cannot evaluate

The most important limitation to understand: **Claude cannot assess technical correctness without domain-specific context.**

A ticket resolution note that says "Checked DNS settings, flushed cache, issue resolved" scores well on documentation quality — it's clear, structured, and concise. But Claude cannot tell you whether checking DNS was the right first step, whether a different resolution would have been faster, or whether the analyst missed an underlying infrastructure issue.

Technical correctness requires:
- Knowledge of your specific environment (your DNS architecture, your VPN configuration)
- Understanding of what good looks like for complex issue types
- Context about what was happening in your infrastructure that week

None of this is in the ticket text. Human review owns this dimension.

## The risk of AI overconfidence in QA

Claude may produce a confident 4/5 QA score for a resolution that was technically wrong. The writing is good; the solution was not. If you present that score to an analyst without technical review, you're inadvertently validating a wrong approach.

The safeguard: Claude-assisted QA covers writing quality and process compliance. Technical accuracy review happens separately, by a human with the relevant domain knowledge. Both are required for a complete QA assessment.

## When AI QA should not be the primary review mechanism

**Escalation decisions** — Whether an analyst made the right call to escalate or handle independently requires knowledge of their experience level, the complexity of the issue, and whether there were signals they couldn't have reasonably detected. Claude doesn't have this.

**Sensitive customer interactions** — Tickets involving frustrated customers, executive escalations, or emotionally charged situations require nuanced review. Communication tone at a 5/5 on a rubric can still be the wrong approach for the specific customer.

**New analyst performance reviews** — During the first 90 days, you're assessing whether an analyst is developing correctly — a judgment that requires observing growth trajectory, not just snapshot quality. Claude's batch analysis doesn't capture trajectory.

**Formal performance documentation** — If QA data will be used in a formal performance review or HR process, it must be validated by a human manager, not AI-generated scores.

## The human review requirement

This is non-negotiable: **no AI-generated QA feedback should reach an analyst without manager review.**

The workflow:
1. Claude reviews batch → produces quality scores and improvement areas
2. Manager reviews Claude's output → verifies against own knowledge, corrects errors, adds context
3. Manager adapts feedback for the specific analyst → considers relationship, development stage, current pressures
4. Manager delivers feedback in appropriate format (1:1, written summary, team communication)

Skipping step 2 and 3 sends unvalidated AI assessments to your team. This is a management failure, not a technology limitation.

## Using AI QA as a coverage tool, not a replacement

The right mental model: Claude-assisted QA is a coverage multiplier. You can review more tickets at the structural level, identify patterns sooner, and spend your human attention on the cases that actually need it. It doesn't replace your judgment — it extends your reach.
