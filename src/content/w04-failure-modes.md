## The three failure modes your team will encounter most

Claude fails in predictable ways. Knowing the patterns in advance means your team recognises them quickly rather than learning the hard way.

**Confident wrong answers.** Claude presents incorrect information with the same tone and structure as correct information. There is no built-in signal that tells you it's wrong. This is most dangerous for technical specifics: CLI commands, version numbers, API parameters, vendor-specific settings. Always verify against primary sources before putting anything in a runbook or resolution step.

**Outdated technical guidance.** Claude's training has a cutoff. If you're working with software that had a significant update, or a security advisory published recently, Claude's guidance may be based on an older version. A response about configuring a firewall rule may reference a UI that no longer exists. For anything where version matters, check the official current documentation.

**Fabricated references.** Claude will sometimes cite studies, articles, or documentation that do not exist. The citation looks real — plausible author names, reasonable journal titles, believable URLs. If Claude references a specific document, verify the source exists before including it in any report or communication you're sending externally. Never trust a Claude-generated URL without checking it.

A practical defence: for any Claude output that will be used in production — a customer message, a leadership report, a runbook — have the person who uses it answer: "Did I verify the key facts in this?" If the answer is no, that's the review step.

**Manager takeaway: train your team on these three failure modes by name — once analysts can label the pattern, they're far less likely to let it slip through.**
