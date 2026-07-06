# Using Claude as a Thinking Partner for RCA

## The most important distinction

Claude is a thinking partner for RCA — not a root cause determiner. This is not a minor caveat; it is the foundation of how to use it correctly.

Claude can:
- Structure your analysis
- Generate hypotheses from the information you provide
- Identify what evidence is missing
- Produce fishbone diagrams, 5-Why frameworks, and timeline reconstructions
- Ask useful clarifying questions

Claude cannot:
- Access your logs, monitoring data, or system telemetry
- Verify whether a hypothesis is correct
- Determine root cause — that requires evidence and SME knowledge

If you paste an incident description into Claude and ask "what caused this?", Claude will produce a plausible, well-structured answer. That answer is a hypothesis. Its confidence and detail do not indicate that it is correct.

## Where Claude adds genuine value in RCA

**Structure under pressure.** During a post-incident review, you have raw notes, a frantic Slack thread, and three engineers with different theories. Claude can quickly organize this into a coherent timeline and extract the main hypothesis threads — giving you a structured starting point rather than a blank page.

**Fishbone generation.** Ask Claude to populate a fishbone (Ishikawa) diagram from your incident description. It will propose causes across People, Process, Technology, and Environment. Treat each branch as a hypothesis to test, not a conclusion.

**5-Why scaffolding.** Claude can walk you through a 5-Why chain, prompting "what caused that?" at each level. It also flags when a Why chain is hitting the limits of the information you provided — "this step requires log data to verify."

**Gap identification.** After you describe what you know, Claude can tell you what's missing: "You have not described what monitoring was in place before the failure" or "The timeline has a 2-hour gap with no recorded events."

## How to frame RCA prompts

The framing determines how useful the output is:

Good framing:
> "Based on the following incident notes, generate a structured hypothesis list for root cause. Label each hypothesis as evidence-based or assumed. For each assumed item, describe what evidence would confirm or rule it out."

Weak framing:
> "What caused our VPN outage last Tuesday?"

The first prompt produces hypotheses to test. The second produces a confident narrative that may be wrong.

## The SME validation requirement

Every root cause hypothesis that will appear in a published PIR or corrective action plan needs a named SME who has validated it against actual evidence. Claude cannot perform this validation. The validation step keeps the RCA honest and prevents plausible fiction from becoming official record.
