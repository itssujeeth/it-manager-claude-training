# Structured Reasoning Techniques

## Beyond "think step by step"

Earlier in this course, the term "chain-of-thought prompting" meant asking Claude to "think step by step." That phrasing still works for simple tasks but produces inconsistent, hard-to-audit output for complex operational work. Structured reasoning gives you more control: you define the reasoning structure, Claude fills it in.

## The structured output format approach

Instead of asking Claude to reason freely, provide an output format that requires structured reasoning:

```
Analyze the following and produce your output in this structure:
<context_summary>
[2–3 sentences summarizing what you have been given]
</context_summary>
<assumptions>
[List every assumption you are making that is not directly supported by the provided information]
</assumptions>
<analysis>
[Your analysis with confidence levels: High / Medium / Low for each finding]
</analysis>
<risk_check>
[What could make this analysis wrong? What information would change the conclusion?]
</risk_check>
<recommendation>
[Your recommendation, linked to specific analysis findings]
</recommendation>
```

This format makes Claude's reasoning explicit, auditable, and reviewable at each section. You can read the assumptions section and immediately see what needs validation.

## XML-style tags for IT operations work

XML-style tags work well for structured prompt inputs too — they tell Claude precisely what each piece of information is:

```
<context>
You are reviewing a recurring support issue for a post-incident analysis.
</context>
<evidence>
[Paste your logs, notes, timeline]
</evidence>
<constraints>
Lead with evidence. Label assumptions. Do not present hypotheses as conclusions.
</constraints>
<output_format>
Section 1: Evidence summary
Section 2: Hypotheses (each labeled with confidence level and assumptions)
Section 3: Recommended next investigation steps
</output_format>
```

## Confidence levels in practice

For operational outputs that influence decisions, require explicit confidence levels:
- **High** — directly supported by the evidence provided
- **Medium** — supported by pattern or indirect evidence
- **Low** — plausible but speculative; additional evidence needed
- **Unknown** — insufficient information to assess

A recommendation built on Low-confidence findings should be treated differently than one built on High-confidence findings. Making this explicit protects you when the analysis is reviewed.

## The verification step

For any output that will be acted on, include a verification instruction in your prompt: "For each metric or factual claim, note what you would need to verify it against." This prompts Claude to identify its own verification requirements — a useful checklist for your review step.

> Structured reasoning does not make Claude more accurate — it makes its reasoning more visible, so you can catch errors before they reach a decision.
