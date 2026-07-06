## What Claude cannot do — and what to watch for

Your team needs to understand Claude's failure modes before they rely on it. There are four that matter in IT support operations.

**No real-time data.** In base chat mode, Claude has no access to the internet, your ticketing system, or any live data source. If an analyst asks "is there an active outage at AWS right now?" Claude will generate a plausible-sounding response — which could be entirely fabricated. This limitation is removed if your instance has web search enabled.

**No memory between conversations.** Each new conversation starts completely fresh. Claude does not remember what you discussed yesterday, what your SLA thresholds are, or what your team decided in a previous session. This is addressed by Claude Projects, which lets you load persistent context — but only if your org has it enabled.

**Hallucination.** Claude can confidently state something that is false. It doesn't know what it doesn't know. This is especially risky for technical specifics: version numbers, CLI syntax, vendor-specific configurations. Always verify technical output against official documentation before using it in a runbook or resolution step.

**Knowledge cutoff.** Claude's training has a cutoff date. Guidance on newer tools, recent CVEs, or software releases after that date may be absent or wrong.

**Manager takeaway: build verification steps into every Claude workflow your team uses — especially for anything that ends up in a runbook, a customer message, or a leadership report.**
