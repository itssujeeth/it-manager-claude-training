# Naming the Risks of AI in IT Support

## Familiar Scenario

You have a slot on next week's security review to present your AI adoption plan to the CISO. You know the first question will not be "what can it do?" — it will be "what could go wrong, and how are you controlling it?" If you cannot name the risks clearly and show mitigations, the plan stalls, and rightly so.

## Core Question

What operational and governance risks does using Claude in support introduce, and how do I present each one to the CISO with a credible mitigation?

## Why This Matters

A CISO evaluates AI the way they evaluate any new system in the environment: by its exposure surface, not its benefits. If you soften the risks, you lose credibility. If you name them precisely and pair each with a control, you demonstrate that AI use will be governed, auditable, and defensible. This conversation determines whether adoption proceeds on solid footing or gets blocked.

## The Claude Capability

Claude can help you build the risk register — draft a structured list of risks, articulate the mechanism of each, and propose candidate mitigations to review with security. You supply your environment's realities and constraints; Claude helps you organize a thorough, specific briefing rather than a vague one.

## Step-by-Step Workflow

Name each risk explicitly, with its mechanism and control:

1. **Data exposure.** Analysts paste customer PII, credentials, or regulated data into a third-party system.
   *Control:* a data classification policy, anonymization workflow, and clarity on what your org's plan/contract allows regarding data handling and retention.
2. **Hallucination in operational decisions.** Claude produces a plausible, wrong fact — an invented benchmark, a wrong regulatory figure, a fabricated resolution step — that gets acted on.
   *Control:* mandatory human verification against authoritative sources for any decision-bearing output.
3. **Over-reliance and skill erosion.** Analysts stop exercising independent judgment and defer to the output.
   *Control:* keep humans as the decision-maker on judgment calls; verification stays a human task, never delegated to Claude.
4. **Audit-trail gaps.** AI-assisted decisions leave no record of what was generated, by whom, or whether it was checked.
   *Control:* an incident log and, where relevant, records of AI-assisted outputs that fed into significant decisions.
5. **Bias in recommendations.** Outputs about people or processes may reflect patterns in training data rather than objective standards.
   *Control:* use behavior-specific language, and review outputs that affect people with more than one reviewer.
6. **Automation of errors at scale.** A systematic flaw in a repeated prompt propagates across every output.
   *Control:* periodic audits of recurring AI-assisted outputs and re-testing after any model change.

## Example Prompt

```
You are helping an IT support manager prepare an AI risk briefing for a CISO.

Context:
- Introducing Claude for triage, drafting, summarization across a support team
- Using base Claude chat; org data-handling terms still being confirmed
- CISO cares about data exposure, hallucination, over-reliance, audit trails

Task:
Draft a risk register with columns: Risk | How it happens (mechanism) |
Likelihood/impact note | Proposed mitigation | Residual risk after mitigation.
Cover at least: data exposure, operational hallucination, over-reliance, audit
gaps, bias, and scaled automation errors.

Output format:
A table, followed by a 3-sentence executive summary I can open with.

Constraints:
Be specific and do not soften the risks. Where a mitigation depends on our org's
data-handling terms, mark it [CONFIRM WITH SECURITY].

Verification:
List any risk you think I may be underestimating, with a one-line reason.
```

## What Claude Is Doing

Claude is using patterns from the context you provided to structure a risk register — it is drafting a briefing, not certifying your control environment. It cannot confirm what your organization's contract permits, and it is not verifying facts unless you provide source material. Every `[CONFIRM WITH SECURITY]` marker is a point where a real answer must come from your security and compliance teams, not from Claude.

## Common Beginner Mistake

Presenting only the benefits and treating risks as something to downplay so the plan gets approved. A CISO reads that as either naivety or evasion, and it undermines everything else you say.

## Better Practice

Lead with the risks, named plainly, each paired with a control and an honest note on residual risk. Demonstrating that you see the exposure clearly is what earns the trust to proceed.

## Quick Recap

- The CISO evaluates exposure, not benefits — name every risk directly.
- Pair each risk with a specific, verifiable control.
- Data-handling and contractual questions must be confirmed with security, not assumed.

## Practice Activity

This week, draft your top three AI risks for your own environment, and for each write the one control you already have and the one you still need. Take the gaps to your security contact.
