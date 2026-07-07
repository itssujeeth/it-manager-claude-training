# What Employee Data Must Never Go Into Claude

## Familiar Scenario

A manager wants coaching advice for a tricky performance conversation. To "give Claude the full picture," they paste in the analyst's name, their last two quarterly performance scores, and a few lines copied from an HR note about a prior warning. Claude returns useful-looking advice — but sensitive employee data has now left the manager's control and gone into a general-purpose tool.

## Core Question

What employee information is safe to put into Claude for coaching help, and what must never go in?

## Why This Matters

HR data is among the most sensitive information an organization holds. Putting names, ratings, medical details, or disciplinary records into a general-purpose AI tool can create real legal liability, breach data-protection policy, and destroy employee trust if it ever surfaces. This is not bureaucratic caution — it reflects the genuine risk of mishandling people data. The good news: Claude can still help you prepare, as long as you strip the conversation down to anonymized behavior.

## The Claude Capability

Claude can draft coaching talking points from an anonymized description of a situation. It does not need — and must never be given — anything that identifies a specific person or reveals protected or formal HR information. A role description and an observable behavior are enough for it to help.

## Step-by-Step Workflow

1. Before writing anything, decide what the coaching goal is.
2. Describe the person only by role and tenure ("an L1 analyst with about two years' tenure").
3. Describe the issue as an observable behavior, with no name attached.
4. Remove anything from the "never" list below.
5. Re-read the prompt and ask: could a reader identify who this is? If yes, revise until they can't.

## What Must Never Go Into Claude

- **Names and identifiers** — name, employee ID, email, or a role plus location detail specific enough to identify one person (a single named individual in a small team is identifying even without a last name).
- **Protected-class characteristics** — age, race, gender, religion, national origin, disability, pregnancy, sexual orientation, or any characteristic protected under employment law.
- **Medical and leave information** — health conditions, medical leave, accommodations, absence records.
- **Formal HR records** — performance improvement plans, written warnings, disciplinary notes, formal complaints, or anything from an HR system.
- **Compensation data** — salary, bonus, raise history, equity, pay bands.
- **Performance scores or ratings** — numeric or rating-scale evaluations tied to a person.
- **Anything tied to formal discipline** — if the conversation involves formal discipline, don't use Claude; involve your HR business partner.

## What Is Safe To Use

- Role and tenure descriptions with no identifying detail.
- Anonymized behavioral observations ("incomplete resolution notes on 6 of the last 10 tickets").
- Generic skill gaps ("documentation quality is below the team standard").
- Fictional or composite personas for practice.

## Example Prompt

```
Role: You are helping me prepare coaching talking points.

Context: An L1 analyst with about two years of tenure. No name, scores, HR records, or protected characteristics are included.

Behavior observed: Resolution notes were incomplete on 6 of the last 10 tickets — steps taken were not recorded.

Task: Draft three coaching talking points that focus on the observable behavior and its impact on the team.

Constraints: Observable behavior only. Do not speculate about the person's attitude, health, or personal circumstances.

Verification: List anything you assumed about the person so I can confirm it is not identifying.
```

## What Claude Is Doing

Claude is generating coaching language from the anonymized behavior you described, using general management patterns. It is not looking up the person, verifying facts, or making an HR judgment. Anything you paste into the prompt is data you have chosen to send to an external tool — so the safest rule is that identifying and formal HR data simply never goes in.

## Common Beginner Mistake

Adding "context" to get better advice — pasting the real name, the last review score, or a line from an HR note. This feels helpful but converts a safe coaching prompt into a data-protection incident.

## Better Practice

Write the prompt, then run a quick scrub: remove the name, remove any protected-class indicator, remove anything from an HR system, and check whether the person is still identifiable. After the conversation, write your own formal notes through your company's HR process — don't store Claude's output as an official record.

## Quick Recap

- Names, scores, medical, leave, compensation, and HR records must never go into Claude.
- Role descriptions and anonymized behavior are safe and are enough for useful help.
- Anything involving formal discipline goes to your HR business partner, not Claude.

## Practice Activity

Take a real coaching situation you're facing, then write two versions of a prompt: an unsafe one with the details you'd instinctively include, and a safe one. Compare them, delete the unsafe version, and keep only the anonymized prompt as your template.
