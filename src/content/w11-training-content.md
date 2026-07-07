# Creating Training Content and Quiz Questions with Claude

## Familiar Scenario

A new platform goes live in two weeks and you need to train eight analysts on it. There's no L&D team to lean on, no ready-made materials, and your own calendar is already full. You need scenario-based training and a knowledge check drafted fast — and it has to be accurate for your environment.

## Core Question

How do I produce usable training scenarios and quiz questions in days instead of weeks, without shipping content that's wrong for our tools and processes?

## Why This Matters

Training materials are the thing managers put off until someone new joins and there's nothing ready. When a platform launches, the cost of no training is real: inconsistent handling, more escalations, and analysts learning the wrong habits during their most formative weeks. Getting a solid first draft quickly is what makes it possible to train the team at all — as long as a human checks it for accuracy.

## The Claude Capability

Claude can draft the standard training formats quickly: scenario-based exercises, multiple-choice quizzes with answer keys and rationales, onboarding plans, FAQs, and process guides. It produces strong first drafts from general IT support knowledge. What it can't supply is accuracy for your specific environment — that needs a domain review before anything reaches the team.

## Step-by-Step Workflow

1. Decide the format and the specific learning objective.
2. Give Claude your context: the platform, your tools, ticket types, and escalation path.
3. Ask for a draft in a defined structure with an answer key where relevant.
4. Send the draft to a senior analyst for a technical accuracy review.
5. Incorporate corrections and version the document.
6. Set a review date so it doesn't go stale after the next process change.

## Example Prompt

```
Role: You are a training designer creating a knowledge assessment for IT support analysts.

Topic: The new [platform name] going live in two weeks — focus on ticket handling and escalation for it.

Audience: Experienced L1 analysts new to this specific platform.

Context: Our tools are [list]. Escalation path is [L1 → L2 → L3 or your path].

Task: Write 10 multiple-choice questions. For each: the question, four options (A–D), the correct answer labeled clearly, a rationale for why it's correct, and a brief note on why each wrong answer is wrong.

Constraints: Test application, not recall. No trick questions. Mix of difficulty: roughly 40% straightforward, 40% moderate, 20% challenging.

Verification: Flag any question where the correct answer depends on our specific configuration, so a senior analyst can confirm it.
```

## What Claude Is Doing

Claude is drafting training content from general support knowledge and the context you provided — it is not verifying that its answers match your actual platform configuration or processes. When you ask it to flag configuration-dependent questions, it marks exactly where its general knowledge might be wrong for you, which is where your senior analyst's review matters most.

## Common Beginner Mistake

Using a Claude-generated quiz with the answer key unchecked. A quiz with a wrong answer in the key is worse than no quiz — it teaches incorrect behavior to people during the weeks they're most likely to internalize it.

## Better Practice

Always run the correction step: a senior analyst spends 30–60 minutes checking technical accuracy against your real environment before the content is used. Add your actual tool names, priority criteria, and escalation groups so scenarios teach your context rather than generic responses. Set a review date on every document so it gets refreshed when tools or processes change.

## Quick Recap

- Claude drafts scenarios, quizzes, and onboarding plans fast from your context.
- A senior analyst must review for technical accuracy before anything reaches the team.
- Add your real tools and processes, and set a review date to keep it current.

## Practice Activity

Pick one topic your team needs to learn this month. Use the prompt above to draft a five-question quiz, then have a senior analyst check the answer key and mark any question that depends on your specific setup.
