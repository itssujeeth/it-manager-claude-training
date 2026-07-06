# AI Bias, Hallucination, and Quality Control in Operations

## The three operational risks of AI tools

**Hallucination** — Claude produces information that is plausible, well-formatted, and wrong. This is the most discussed risk and the most manageable: verification habits and structured output requirements catch most hallucinations before they affect decisions.

**Bias in recommendations** — Claude's training data reflects historical patterns. When you ask for recommendations about analyst performance, customer escalation handling, or process improvement, the output may reflect systemic patterns that your team should not replicate. This risk is harder to see because biased recommendations look like reasonable advice.

**Automation of errors** — when you use Claude to produce the same output repeatedly (weekly reports, QA reviews, training materials), any systematic error in your prompts or Claude's output gets replicated at scale. A single-use error is bounded. An automated error propagates.

## Hallucination: what it looks like in practice

In IT support contexts, hallucinations typically appear as:
- Invented statistics or benchmarks ("industry standard MTTR for P2 incidents is 4.2 hours" — this may not exist)
- Incorrect regulatory details ("GDPR requires 48-hour breach notification" — the actual requirement is 72 hours)
- Fabricated resolution steps that don't apply to your systems
- Confident summaries that include details not in the source text

The risk is not that hallucinations are common — for most tasks, they're not. The risk is that they're invisible unless you check.

## Bias: where it shows up in support operations

**Coaching language** — prompts about "underperforming analysts" can produce recommendations that reflect demographic patterns in management research rather than objective behavioral standards. Use behavior-specific language and review coaching outputs for implicit characterization.

**Customer communication** — recommendations about how to handle "difficult customers" may reflect patterns that correlate with customer characteristics in ways that introduce bias. Review escalation communication templates for appropriate neutrality.

**Process recommendations** — recommendations that "most high-performing support teams" do something a specific way may reflect a selection bias in what teams produce public data about their practices.

The mitigation is not avoiding AI for these tasks — it is reviewing outputs for reasonableness and having a diverse set of reviewers when outputs affect people.

## Quality control at scale

When Claude is producing the same type of output regularly (weekly reports, QA scores, training quizzes), build in periodic audits:

- Monthly: compare 5 recent AI outputs to your own manual assessment of the same inputs
- Quarterly: review whether the outputs have drifted in any systematic direction
- After any model update: run your standard test inputs again and compare to previous outputs

Model updates happen without announcement. An output that was reliable before a model update may behave differently after.
