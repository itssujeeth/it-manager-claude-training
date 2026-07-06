# Generating Role-Play Scenarios for Support Training

## Why role-play scenarios work

Reading about handling an angry customer is not the same as practicing it. Role-play scenarios give analysts a safe environment to experience and respond to difficult situations — difficult customers, ambiguous tickets, high-pressure incidents — before encountering them live.

Claude can generate realistic, varied scenarios quickly. The challenge is making them specific enough to your environment that analysts learn the right responses for your context.

## What makes a good role-play scenario

A useful scenario has five elements:

1. **Setup** — The situation the analyst starts with (ticket text, initial user contact, alert)
2. **User role guidance** — How the "customer" in the role-play should behave (frustrated, confused, technical, rushed)
3. **Escalation trigger** — A specific point in the scenario where the analyst faces a decision: handle or escalate?
4. **Success criteria** — What good handling looks like — specific behaviors, not just "resolved the issue"
5. **Debrief questions** — What to discuss after the role-play to reinforce the learning

## Prompting Claude for role-play scenarios

```
Role: You are a training designer creating role-play scenarios for IT support analysts.
Audience: L1 analysts, 0–6 months experience
Scenario type: [Choose: difficult customer / ambiguous ticket / escalation decision / priority call under pressure]
Context: Our team handles [ticket types]. Common tools: [list]. Escalation path: [L1 → L2 → L3 or relevant path].
Task: Create a realistic role-play scenario with: situation setup, user role guidance (how they should behave), an escalation decision point, success criteria (3–5 specific behaviors), and 3 debrief questions.
Constraints: Scenario should be realistic for our environment. Include one element that requires the analyst to make a judgment call rather than follow a defined process.
```

## Scenario types to cover

**The frustrated escalator** — A user who insists the issue is P1 when it is not. Analyst must hold the correct priority while managing the customer relationship.

**The vague ticket** — Ticket with insufficient information to route or diagnose. Analyst must gather the right information without frustrating the user.

**The repeat issue** — Same user, same issue, third time this month. Analyst must resolve the immediate issue and identify whether this should become a problem ticket.

**The cascading incident** — What looks like an individual user issue turns out to affect 20 people. Analyst must recognize the pattern and escalate appropriately.

**The over-eager senior** — An L1 scenario where the user is more technical than the analyst and tries to direct the troubleshooting. Analyst must stay in role while benefiting from the user's knowledge.

## Making scenarios specific to your environment

Generic scenarios teach generic responses. Add your specifics:

- Use your actual tool names (ServiceNow, not "the ticketing system")
- Reference your actual priority criteria
- Include your escalation groups by name
- Use realistic ticket descriptions based on your actual ticket types

The more specific the scenario, the more directly transferable the learning.

## Debrief questions that reinforce learning

The debrief after a role-play is where the learning gets consolidated. Claude can generate debrief questions, but the most useful ones target the specific decision points in the scenario:

- "When did you decide to escalate? What made you make that call?"
- "How did you handle the moment the customer pushed back on the priority? What else could you have said?"
- "At what point did you realize this might be affecting more than one user? What were the signals?"

These are harder to generate generically — add your own based on what you saw during the role-play.
