## What not to paste into Claude — the practical rules for support ops

Support teams handle sensitive data all day: customer records, authentication logs, employee notes, infrastructure configs. The rule of thumb is simple: if it would be a problem if it appeared in a screenshot shared externally, don't paste it into Claude.

Specifically, keep these out of AI prompts unless your organisation has approved a data-processing agreement with Anthropic:

**Customer PII** — names, email addresses, phone numbers, account IDs, ticket content that identifies a person. Anonymise before prompting. "A customer named Sarah Johnson at Acme Corp" becomes "a customer at a mid-size manufacturing company."

**Credentials** — passwords, API keys, tokens, certificates. Never. Not even to ask Claude to help you rotate them.

**Proprietary configs** — network diagrams, firewall rules, internal IP ranges, system architecture details. These are attack surface if exposed.

**Employee data** — performance notes, HR records, salary information, disciplinary records. Use role descriptions and anonymised behaviour patterns when asking for coaching help.

**Unapproved ticket data** — even a ticket number with a customer name attached may be out of bounds depending on your data classification policy.

The test to run before pasting anything: "Would my CISO or data protection officer be comfortable if this exact text appeared in a public document?" If the answer is no, anonymise it first.

**Manager takeaway: build a data classification habit into your team's AI workflow from day one — retrofitting it after a breach or complaint is significantly harder.**
