## Why vague prompts produce vague answers

Your support team will instinctively ask Claude questions the way they'd ask a search engine: "how do I handle an angry customer?" or "what's a good SLA?" These produce generic, surface-level responses that aren't useful in production.

The fix is specificity at every layer. Compare:

Vague: "Help me write a message about the outage."

Specific: "Write a customer-facing status update for a payment processing outage affecting enterprise customers. The outage started at 14:32 UTC, root cause is a database failover that did not complete cleanly, estimated resolution is 60 minutes. Tone: professional, direct, no technical jargon. Format: three short paragraphs — current status, impact, next update time."

The specific version gives Claude everything it needs to produce something you can almost send directly. The vague version forces you into multiple rounds of correction.

The pattern to build into your team's habits: before hitting send, check whether Claude has the who, what, when, format, and constraints it needs. If any are missing, add them.

**Manager takeaway: specificity in prompts is a learnable skill — the fastest way to improve your team's Claude outputs is to teach them to front-load context rather than iterate after the fact.**
