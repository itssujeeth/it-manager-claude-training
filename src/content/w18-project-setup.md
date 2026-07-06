# Setting Up a Support Operations Claude Project

## Before you upload anything

The most important question before uploading any document to a Claude Project is: "Would I be comfortable if this document appeared in a data incident report?" This is a more useful test than "is this internal?" — many internal documents should never go into an AI workspace.

**Safe to upload (typically):**
- Anonymized SOPs and process guides
- Escalation matrices with role names (not employee names)
- SLA definitions and response time standards
- Ticket category and priority criteria
- QA rubrics and quality standards
- Prompt templates and team standards

**Do not upload:**
- Customer names, email addresses, or account data
- Employee records, HR information, performance reviews
- System credentials, API keys, or authentication details
- Proprietary vendor contracts or confidential pricing
- Financial records or budget details
- Anything under NDA
- Unapproved security configurations or architecture documents

When in doubt, don't upload. You can always paste relevant text into a conversation instead.

## Custom instructions that make Projects reliable

The custom instructions field is your system prompt — it applies to every conversation in the Project. For a support operations Project:

```
You are a support operations assistant for [team name].

When answering questions:
1. Always check the uploaded documents first
2. If the answer is in the documents, quote or summarize the relevant section
3. If the answer is NOT in the documents, say "This is not covered in our team documents — 
   here is general guidance, but verify against your actual process"
4. Never guess at team-specific details (SLA times, escalation paths, approval authorities)

Data rules: Do not reproduce any personal information from documents in your responses.
```

The third instruction is the most important — it prevents Claude from mixing your documented standards with generic IT knowledge in a way that looks authoritative but isn't yours.

## Testing your Project before team deployment

Run 10 test questions before giving your team access:

- 3 questions with clear answers in your documents
- 3 questions with partial answers (requires synthesizing from multiple docs)
- 2 questions where the answer is NOT in your documents
- 2 questions where the correct answer contradicts common general knowledge

Check: Does Claude accurately source its answers from your documents? Does it correctly flag when information is missing? Does it resist substituting general knowledge when your documents have the answer?

If Claude fails the "not in documents" test — confidently answering a question that should be flagged as not covered — tighten your custom instructions.

## Keeping the Project current

Documents in a Project reflect the state of your processes when they were uploaded. When a process changes, update the document. Set a quarterly reminder to review uploaded documents and remove or update anything that is no longer current. An outdated SOP in a Project is worse than no SOP — it answers questions incorrectly with apparent authority.
