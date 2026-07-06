# System Prompts: Persistent Context for Consistent Output

## What a system prompt does

A system prompt is a set of instructions that applies to every message in a conversation. Where a regular prompt shapes one response, a system prompt shapes all of them — Claude's role, its output format, its tone, its constraints, and the context it should always carry.

For an IT manager, this means you can set up a conversation once — "you are an IT operations analyst for a 50-person support team, you always label assumptions, you always flag data quality issues, you always include confidence levels" — and every subsequent prompt inherits that context without restating it.

## How to access system prompts

System prompts are available in Claude's API and in Claude Projects via custom instructions. In Claude.ai, the Project instructions field functions as a system prompt for all conversations within that Project.

For direct chat use, if system prompt access is not available, you can approximate it by starting each conversation with a setup message that establishes the context — then treat that message as fixed and don't change it.

## Writing an effective system prompt for support operations

A good system prompt for IT support work has three parts:

**Role and context:**
```
You are an IT operations analyst for a [size] support team handling [ticket types]. 
Our ITSM platform is [name]. Our team uses [relevant tools].
```

**Output standards:**
```
Always: label assumptions as [ASSUMPTION], flag data quality issues, include confidence 
levels (High/Medium/Low) for analytical conclusions, require a verification step for any 
metric you calculate.
Never: present uncertain information as fact, invent figures I haven't provided, skip 
flagging when information is missing.
```

**Output format:**
```
Use structured headers. Lead with the key finding or recommendation. 
Keep executive summaries to 3 bullets maximum.
```

## Testing your system prompt

After setting up a system prompt, test it with edge cases before using it in real work:
- Ask a question where the answer requires Claude to acknowledge uncertainty
- Ask for a metric calculation — does it flag when it can't compute precisely?
- Ask something outside its stated scope — does it stay in role?

A system prompt that passes edge case tests will be reliable in production.

## When system prompts drift

Over long conversations, complex instructions, or adversarial inputs, Claude may gradually drift from system prompt instructions. For high-stakes work, periodically re-confirm the instructions or start a new conversation. Don't assume the system prompt is still fully active after 20+ turns of complex prompting.
