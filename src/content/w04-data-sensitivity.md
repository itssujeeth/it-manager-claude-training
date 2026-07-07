# The Ticket With Customer PII That Should Never Have Been Pasted

## Familiar Scenario

An analyst wants help drafting a resolution note, so they paste the entire ticket into Claude — including the customer's full name, email, account ID, and a snippet of an authentication log. It felt harmless and it saved time. But that data has now left your controlled environment, and depending on your org's terms and configuration, that may be a reportable problem.

## Core Question

What data must never go into Claude, and how do I get help without exposing it?

## Why This Matters

Support teams handle sensitive data all day: customer records, auth logs, employee notes, infrastructure configs. Retrofitting a data-handling habit after a complaint or breach is far harder than building it in from the start. Clear rules protect your customers, your team, and you.

## The Claude Capability

The capability that matters here is anonymization before prompting. Claude can help with the drafting or analysis without the identifying details — you strip or generalize the sensitive parts first, then ask.

Keep these out of prompts unless your organization has explicitly approved it and confirmed the data-handling terms of your Claude configuration:

- **Customer PII** — names, emails, phone numbers, account IDs, identifying ticket content. Generalize it: "a customer named Sarah Johnson at Acme Corp" becomes "a customer at a mid-size manufacturer."
- **Credentials** — passwords, API keys, tokens, certificates. Never, not even to help rotate them.
- **Proprietary configs** — network diagrams, firewall rules, internal IP ranges, architecture details.
- **Employee data** — performance notes, HR records, salary or disciplinary information.
- **Unapproved ticket data** — even a ticket number tied to a customer name may be out of bounds under your data classification policy.

## Step-by-Step Workflow

- Before pasting, identify every sensitive element in the text.
- Remove or generalize names, IDs, credentials, and configs.
- Keep only the details Claude needs to help with the task.
- Run the anonymized version through Claude.
- Reinsert any real details locally, in your controlled environment, after you have the draft.

## Example Prompt

```
You are an IT support manager. Help me draft a resolution note for the
anonymized ticket below.

Context: A customer at a mid-size manufacturing company could not access a
web application after a password reset. The issue was a stale session
cache. It was resolved by clearing the session and re-issuing the reset.

Task: Draft a professional resolution note.

Format: Summary, Cause, Resolution. Under 120 words.

Constraints: Do not invent details beyond what I provided. This ticket has
been anonymized — do not ask for the customer's real identifiers.
```

## What Claude Is Doing

Claude is drafting a note based on the anonymized context you provided. It is using patterns from that context to shape the resolution note. It is not able to tell whether the data is sensitive — that judgment is yours, made before you paste anything in.

## Common Beginner Mistake

Pasting a full ticket — PII, logs, and all — because it is faster than anonymizing it first.

## Better Practice

Anonymize before prompting. Generalize identifiers, strip credentials and configs entirely, and reinsert real details locally after you have the draft. Run the test: "Would my CISO or data protection officer be comfortable if this exact text appeared in a public document?" If not, sanitize it first.

## Quick Recap

- Never paste PII, credentials, proprietary configs, or employee data.
- Anonymize and generalize before prompting.
- Credentials never go into a prompt, for any reason.
- Reinsert real details locally after drafting.
- Apply the "public document" test before pasting anything.

## Practice Activity

Take one real ticket this week and practice anonymizing it before asking Claude for help. Write down the specific fields you removed or generalized, and turn that list into a quick checklist for your team.
