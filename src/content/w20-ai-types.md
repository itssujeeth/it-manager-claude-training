# Telling the Three "AIs" Apart in a Vendor Pitch

## Familiar Scenario

A vendor is pitching you their platform and the word "AI" comes up three times in ten minutes — but each time it means something different. Once it's a chatbot that answers questions. Once it's a rules engine that auto-routes tickets. Once it's a feature that summarizes cases inside the tool. They're all "AI" in the deck, and you're nodding along without a clean way to tell which is which or what to ask about each.

## Core Question

"When a vendor says 'AI,' how do I tell whether they mean a language model, plain automation, or an AI feature baked into the platform — and ask the right questions for each?"

## Why This Matters

These three things have completely different governance, accuracy, and human-review profiles. Evaluating an automation rule the way you'd evaluate a language model — or vice versa — leads to the wrong questions and the wrong risk assessment. Sorting the pitch into the right buckets is what lets you ask questions that actually surface the risks.

## The Claude Capability

Claude is a conversational AI (a large language model): you describe a task in language, it produces output, and a human reviews and acts on it. The human-in-the-loop is structural — it's there unless you deliberately remove it. That's distinct from automation (rules that fire on live data with reduced or no review) and from AI features embedded in a platform (which run on your data in place, often with review optional).

## Step-by-Step Workflow

1. For each "AI" the vendor mentions, ask what triggers it: a human prompt, a rule, or a system event?
2. Ask what it runs on: text you paste, or your live data in the system?
3. Ask where the human review step is, and whether it can be turned off.
4. Match each answer to a category: conversational AI, automation, or embedded platform AI.
5. Ask the evaluation questions that fit that category.

## Example Prompt

```
Role: You are helping an IT support manager evaluate a vendor pitch.

Context: A vendor described three "AI" features. Notes below.

Task: For each feature, classify it as (a) conversational AI / LLM,
(b) rule-based automation, or (c) embedded platform AI. For each, list the
two questions I should ask the vendor to assess accuracy and governance.

Constraints:
- If my notes don't say what triggers a feature or what data it uses, flag
  that as a question rather than assuming.
- Separate what my notes state from what you inferred.

VENDOR NOTES:
[paste your notes]
```

## What Claude Is Doing

Claude can help sort the features into categories using patterns from the notes you provide. It is not confirming what the vendor's product actually does — it works from your description, so a vague note produces a vague classification. Where your notes are silent, Claude should flag a question, not fill the gap. Confirm each classification with the vendor.

## Common Beginner Mistake

Accepting "it's AI-powered" as a meaningful answer. The label tells you nothing about what triggers the feature, what data it touches, or whether a human reviews the output — which are the things that determine risk.

## Better Practice

Push every "AI" claim to the same three questions: What triggers it? What data does it run on? Where's the human review, and can it be switched off? A language model that drafts a reply you review is a very different risk than an automation that closes tickets on live data with no one looking. The category determines the questions.

## Quick Recap

- "AI" in a pitch can mean a language model, plain automation, or an embedded platform feature.
- Distinguish them by trigger, data source, and whether human review is present and removable.
- Ask category-appropriate questions — don't accept "it's AI-powered" as an answer.

## Practice Activity

Think of one tool your team already uses that's marketed as "AI." Write down what triggers it, what data it runs on, and where the human review sits. Decide which of the three categories it falls into.
