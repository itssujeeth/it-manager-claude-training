# Conversational AI vs. Embedded AI: Choosing the Right Fit

## The fundamental difference

**Conversational AI** (Claude, ChatGPT, Gemini) requires a human in the loop at every step. You describe a task in language, Claude produces output, you review it, you decide what to do with it. The human-in-the-loop is structural — you cannot bypass it without deliberately removing it.

**Embedded AI** (ITSM-native features, workflow automations with AI) operates within a system, on live data, with reduced or optional human review. Once configured, it runs without you pasting anything. The human-in-the-loop is a configuration choice — it can be turned off.

This distinction drives almost every governance and adoption decision you'll make.

## When to use conversational AI

Conversational AI is the right tool when:
- **The task is variable** — every instance is different enough that a fixed automation would break
- **The output requires judgment** — coaching prep, incident communication, business cases
- **Volume is moderate** — you're doing this task a few times per day, not hundreds
- **The human review step is important** — you want a person reading the output before it affects anything

## When to use embedded/platform AI

Embedded AI is the right tool when:
- **The task is repetitive and rule-based** — categorization, routing suggestions, SLA notifications
- **Volume is high** — hundreds of tickets per day where manual AI-assist would be impractical
- **Your data is already in the system** — no copy-paste required; the AI reads it where it lives
- **You've tuned it for your context** — out-of-box accuracy is tested and meets your threshold

## The hybrid model most teams settle on

Most mature support teams end up using both:

| Use case | Tool type |
|----------|-----------|
| Incident PIR drafting | Conversational |
| Weekly ops summary | Conversational |
| 1:1 prep and coaching | Conversational |
| Ticket auto-categorization | Embedded (ITSM) |
| KB article suggestions at resolution | Embedded (ITSM) |
| SLA escalation alerts | Embedded (ITSM) |
| Training content generation | Conversational |
| Governance framework drafting | Conversational |

The pattern: complex, judgment-heavy, low-volume tasks go to conversational AI. High-volume, rule-based, data-in-system tasks go to embedded AI.

## The governance gap to watch

Embedded AI creates a governance gap: it processes data continuously, without the per-use consent signal that conversational AI requires (you paste, you decide). Make sure your governance framework addresses embedded AI explicitly — not just conversational AI use.
