# Data Rules for AI-Assisted Coaching

## Why this matters more than it might seem

Using Claude for people management work creates a privacy risk that other AI use cases don't. HR data is among the most sensitive data an organization holds, and the consequences of a data breach or misuse in this context — legal liability, loss of employee trust, regulatory penalties — are serious.

These rules are not bureaucratic caution. They reflect the real risk of putting employee data into a general-purpose AI tool.

## What must never go into Claude

**Employee names and identifiers**  
Name, employee ID, email address, department combined with other details that make someone identifiable. "Maria in Chicago L2 AWS" is identifying even without a last name.

**Protected-class characteristics**  
Age, race, gender, religion, national origin, disability status, pregnancy status, sexual orientation, and any other characteristic protected under employment law in your jurisdiction. These must not appear in Claude prompts under any circumstances.

**Medical and leave information**  
Health conditions, FMLA leave, accommodation details, medical absence records. Even "analyst has been out sick a lot lately" creates risk if the person could be identified.

**Formal HR records**  
Performance improvement plans (PIPs), written warnings, disciplinary notes, formal complaints, or anything from an HR system. These have defined handling processes — Claude is not part of that process.

**Compensation data**  
Salary, bonus structure, raise history, equity grants, pay band discussions.

**Unapproved disciplinary discussions**  
If the conversation you're preparing for involves formal discipline, do not use Claude. Involve your HR business partner instead.

## What is safe to use

**Role descriptions** — "L1 analyst, 18 months tenure" without identifying details

**Anonymized behavioral observations** — "missed 3 of the last 5 team huddles" without the person's name or anything else that narrows to one individual

**Generic skill gaps** — "documentation quality is below the team standard" without identifying who specifically

**Fictional personas** — creating composite characters or hypothetical scenarios for coaching practice

## How to write prompts that stay safe

Before submitting any prompt about a real person:

1. Remove the name and replace with "the analyst" or a role description
2. Scan for any protected-class indicators and remove them
3. Ask: could someone reading this identify who it's about? If yes, revise.
4. Remove any reference to HR records, compensation, or medical history

Example safe prompt structure:
> "An L1 analyst with 2 years of tenure is showing a pattern of incomplete resolution notes in 6 of their last 10 tickets. Help me prepare coaching talking points."

This contains no identifying information, no protected characteristics, and no HR record data — and Claude can still help you prepare for the conversation.

## After the conversation

Coaching notes from a 1:1 — even Claude-assisted ones — are part of the employee record if they document performance issues. Store them according to your company's HR record-keeping policies, not in a personal folder or casual document.

Do not store Claude's output verbatim as an official HR document. Use it as preparation material; write your own formal notes after the conversation using your company's process.
