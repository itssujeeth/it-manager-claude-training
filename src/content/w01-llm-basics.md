## What Claude actually does under the hood

Imagine your most experienced L2 analyst — they've read thousands of incident reports, runbooks, and vendor docs. When you describe a problem, they pattern-match against everything they've absorbed and generate a plausible response. That's the closest analogy to how Claude works.

Claude was trained on a vast body of text. During training it learned statistical relationships between words, concepts, and structures. When you send it a prompt, it predicts the most useful continuation of that text — drawing on patterns from its training, not from a live database or the internet.

This is why Claude can draft a solid post-incident report without ever seeing your ticketing system: it has seen enough incident reports to know what one looks like. It's also why it can hallucinate a plausible-sounding but wrong server name — it's completing a pattern, not looking something up.

**Manager takeaway: treat Claude like a very well-read analyst who works entirely from memory — fast and capable, but you always verify the facts before they go into production.**
