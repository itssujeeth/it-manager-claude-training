# Common Mistakes New AI Users Make

## Why these mistakes are predictable

The same mistakes appear in every team when analysts first use AI tools. They are not signs of poor judgment — they are the natural result of using a tool whose failure modes are less visible than traditional software. A spreadsheet formula that breaks produces an error message. Claude that confabulates produces confident prose.

Understanding these mistakes before the team encounters them lets you design against them.

## Mistake 1: Over-trusting output

The most common and most consequential mistake. Analysts read Claude's output and act on it without verification because it looks authoritative — well-structured, confident, detailed.

**Fix:** Build in a mandatory review step. Make it structural, not voluntary. "Never send a customer communication based on Claude output without reading it first" is a policy, not a suggestion.

## Mistake 2: Writing vague prompts and accepting vague output

"Summarize this ticket" produces a generic summary. "Summarize this ticket for an L2 engineer who needs to understand what was tried and what was not tried, in 3 bullet points" produces something useful.

Analysts who write vague prompts conclude that Claude is not useful for their work. The problem is the prompt, not the tool.

**Fix:** Provide prompt templates for the 5 most common use cases. A template with placeholders is 80% of the way to a good prompt.

## Mistake 3: Pasting sensitive data without thinking

Analysts working fast reach for efficiency. If copying the full ticket into Claude is faster than anonymizing it first, some analysts will copy the full ticket.

**Fix:** Make anonymization easier than not anonymizing. A one-click anonymization script, a simple text filter, or a cheat sheet of "replace these types of data" makes the right behavior the easy behavior.

## Mistake 4: Ignoring the verification step

"Claude checked it" is not a verification step. Claude cannot verify its own output. The verification step is a human, checking the facts Claude produced against an authoritative source.

**Fix:** Make the verification habit explicit in training. Show the team what a Claude error looks like before they encounter one in the wild.

## Mistake 5: Using Claude for the wrong task

Claude is not a search engine, a ticketing system query tool, or a source of live information. Analysts who ask "what is the current status of ticket #12345?" or "is AWS down right now?" will get either a refusal or a confident wrong answer.

**Fix:** Train on the categories of tasks Claude is and is not suitable for. The quick reference card is the right place for this — "Claude is good for / Claude is not good for" as two explicit columns.

## Mistake 6: Treating every output as equally reliable

Not all Claude outputs are equally reliable. A 200-word email draft is much more reliable than a calculation across 500 data rows. A structured summary of text you provided is more reliable than a recommendation based on information Claude may or may not have been trained on.

**Fix:** Calibrate verification effort to output type. High-stakes, numerical, or time-sensitive outputs get verified. Low-stakes drafts get read and edited.
