## The six parts of a prompt that actually works

Think of prompting like briefing a new contractor. If you say "fix the network issue," you'll get a generic response. If you say "you're a senior network engineer, our VPN gateway is dropping connections after 4 hours of idle time, review these three log extracts and tell me the most likely cause in a numbered list with confidence levels," you get something useful.

The six elements that separate good prompts from bad ones:

**Role** — give Claude an identity relevant to the task. "You are an ITSM analyst" or "You are a senior support manager drafting a communication for a CTO" shapes the tone and depth of the response.

**Context** — tell Claude what situation it's operating in. Background it doesn't have will result in generic output.

**Task** — be explicit about what you want. "Draft," "Analyze," "Compare," "Summarize," "Identify gaps in" — verbs that specify the action.

**Format** — specify the shape of the output. Bullet list, numbered steps, table, two-paragraph executive summary. If you don't specify, Claude will choose, and it may not match what you need.

**Constraints** — add limits. "In under 150 words." "Use plain language, no jargon." "Do not include recommendations, analysis only."

**Examples** — the most underused element. One example of what good output looks like cuts iteration time dramatically.

**Manager takeaway: if Claude's output isn't useful, the problem is almost always a missing or vague element in your prompt — not Claude's capability.**
