# Generating Training Content with Claude

## Where Claude excels in training design

Creating training materials from scratch is time-intensive — most managers put it off until someone new joins and there's nothing ready. Claude can reduce the drafting time to a fraction and produce high-quality first drafts of most standard training formats.

**What Claude generates well:**
- 30-60-90 day onboarding plans with specific milestones
- Knowledge quizzes with answer keys and rationales
- Role-play scenarios for common support situations
- FAQ documents from a list of common questions
- Step-by-step process guides for standard workflows
- "Common mistakes" reference guides based on your team's real patterns

**What requires your input and review:**
- Technical accuracy for your specific environment
- Content that reflects your actual tools and processes (not generic examples)
- Anything that will be used in formal onboarding or performance evaluation

## Prompting for different training formats

**30-60-90 day plan:**
```
Role: You are an L&D designer creating an onboarding plan for IT support.
New hire role: L1 support analyst
Team context: [Size, ticket types, tools, team structure]
Task: Create a 30-60-90 day onboarding plan with specific, measurable milestones for each phase.
Format: Three sections (Days 1–30, 31–60, 61–90). Each section: 3–4 focus areas, specific activities, success criteria.
Constraints: Week 1 should focus on observation, not independent work. Include shadowing, system access setup, and tool training. Milestones must be observable behaviors, not "understands X."
```

**Quiz with answer key:**
```
Role: You are a training designer creating a knowledge assessment.
Topic: [Specific topic — e.g., ticket categorization, escalation criteria, tool usage]
Audience: L1 analyst, no prior IT support experience
Task: Write 10 multiple-choice questions. For each question include: the question, 4 options (A–D), the correct answer clearly labeled, a rationale explaining why it's correct, and a brief explanation of why each wrong answer is wrong.
Constraints: Questions should test application of knowledge, not just recall. Avoid trick questions. Difficulty range: 40% straightforward, 40% moderate, 20% challenging.
```

## Getting technical accuracy right

Claude generates training content based on general IT support knowledge, not your specific environment. Every piece of content needs a domain review before use.

The review process:
1. Generate the content with Claude (fast)
2. Send to a senior analyst for technical accuracy review (30–60 minutes)
3. Incorporate corrections and version the document
4. Use in onboarding

The correction step is the most important. A quiz with wrong answers in the answer key is worse than no quiz — it teaches incorrect behavior to new hires during their most formative weeks.

## Keeping training content current

Set a review date for every training document when you create it. Claude-generated content goes stale as your environment changes — tools are upgraded, processes are revised, escalation paths change.

A good cadence:
- Onboarding materials: review when any major tool or process changes, at minimum annually
- Quizzes: review whenever the underlying process or tool they test changes
- Role-play scenarios: review annually or when team feedback indicates scenarios feel outdated
