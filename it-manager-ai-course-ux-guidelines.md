"it-"# UX Design Guidelines for an AI Learning Path for IT Managers

**Target product:** Single Page Application learning path  
**Target audience:** IT Support Managers, Service Desk Managers, IT Operations Managers, and enterprise support leaders  
**Course example:** Claude for IT Support Managers  
**UX goal:** Convert a static course checklist into a practical learning workbench that helps managers learn, apply, validate, and reuse AI-assisted support workflows.

---

## 1. UX North Star

A busy IT manager should open the course and immediately understand:

> What should I learn this week, why does it matter to my support organization, what can I safely try, what artifact will I produce, how do I know it is good, and how does it move me toward an AI-enabled support operating model?

The experience should feel less like a traditional online course and more like a **manager workbench** that combines:

- Guided learning
- Practical exercises
- Safe AI usage rules
- Reusable prompt patterns
- Manager-ready artifacts
- Governance checkpoints
- Portfolio building
- Capstone operating model creation

---

## 2. Target Persona

### Primary Persona: Busy IT Support Manager

| Persona characteristic | UX implication |
|---|---|
| Owns SLAs, incidents, escalations, tickets, and support quality | Use real support scenarios instead of generic AI examples |
| Manages analysts, team performance, coaching, and onboarding | Include people-management and team-enablement exercises |
| Works in interrupted time blocks | Offer short lesson sections and clear resume points |
| Handles sensitive operational and customer data | Embed privacy and safe-data warnings directly into exercises |
| Needs executive credibility | Produce artifacts suitable for leadership updates and governance review |
| May not want to become a prompt engineer | Teach reusable workflows, templates, and decision patterns |
| Is measured by operational outcomes | Track artifacts, improvements, and adoption readiness, not just lesson completion |
| Needs to lead team adoption | Add facilitator notes, team workshop assets, and rollout guidance |

### Secondary Personas

#### Service Desk Lead

Needs practical ticket, KB, QA, and coaching workflows. Values speed, clarity, repeatability, and team consistency.

#### IT Operations Manager

Needs incident summaries, RCA support, operational reporting, SOPs, and automation opportunity analysis.

#### Enterprise Learning Owner

Needs course structure, completion evidence, measurable outcomes, rubrics, governance alignment, and cohort readiness.

#### Executive Sponsor

Needs adoption roadmap, business value, risk controls, team readiness, and measurable impact.

---

## 3. Core UX Principles

### 3.1 Design around manager jobs-to-be-done

Do not frame lessons only as topics. Frame each week as a real work problem.

Instead of:

> Week 5: Ticket Triage

Use:

> Reduce triage noise and improve routing consistency using Claude.

Every lesson should answer:

1. What support-management problem does this solve?
2. What AI workflow will the learner practice?
3. What real artifact will the learner produce?
4. What risks must be controlled?
5. How does the learner validate the output?

### 3.2 Every week should create a usable artifact

Each week should produce something the manager can reuse at work.

Examples:

- Prompt template
- Incident update
- Ticket triage rubric
- KB article
- SOP
- QA feedback guide
- Coaching plan
- RCA worksheet
- Automation idea backlog
- Business case
- AI usage policy
- Team workshop plan
- Adoption roadmap
- Final operating model

### 3.3 Use progressive disclosure

Avoid overwhelming the learner with all course details at once.

Recommended sequence inside each week:

1. Why this matters
2. What you will produce
3. Safe practice rules
4. Prompt pattern
5. Practice activity
6. Review rubric
7. Save to portfolio
8. Apply with your team

### 3.4 Put safety into the workflow

Do not isolate privacy, security, and responsible AI into a single governance lesson. Add safety guidance inside every practical activity.

Every exercise involving workplace context should include:

- Do not paste passwords, secrets, tokens, or credentials
- Do not paste customer PII
- Do not paste proprietary infrastructure details without approval
- Use mock or anonymized data first
- Validate facts before publishing
- Require human review for incidents, employee feedback, executive communication, and customer-facing updates

### 3.5 Make progress meaningful

Replace simple checklist progress with outcome-oriented progress.

| Basic progress | Better progress |
|---|---|
| 12 items completed | 3 manager artifacts created |
| 50% complete | 12 of 24 weeks complete |
| Project checked | Artifact reviewed with rubric |
| Notes saved | Reflection added to portfolio |
| Month completed | Capability unlocked: AI-assisted incident communication |

---

## 4. Recommended Information Architecture

The current SPA can remain lightweight, but it should support route-backed sections.

| Route | Purpose |
|---|---|
| `/` | Course cockpit and dashboard |
| `/start` | Orientation, audience, prerequisites, course rules, safe-use guidelines |
| `/path` | Full 24-week learning path |
| `/month/1` to `/month/6` | Month overview and progress |
| `/week/1` to `/week/24` | Individual lesson workspace |
| `/resources` | Templates, sample files, references, checklists |
| `/prompt-library` | Suggested prompts and learner-saved prompts |
| `/portfolio` | Learner-created artifacts and reflections |
| `/capstone` | Final AI-enabled support operating model builder |
| `/settings` | Export/import progress, reset progress, display preferences |
| `/about` | Course objective, author, version history, license |

### Deep-linking requirement

Every week should have a shareable URL. Learners and reviewers should be able to open a direct link such as:

```text
/week/6
/month/2/week/6
```

At minimum, use hash routes:

```text
#/week/6
#/month/2
```

---

## 5. Key Screens

## 5.1 Course Cockpit

The cockpit is the default landing screen after the first visit.

### Purpose

Help the learner quickly resume and understand their current state.

### Required elements

- Course title
- Current week
- Continue button
- Next best action
- Overall progress
- Artifacts created
- Prompt templates saved
- Governance checkpoints completed
- Capstone readiness

### Recommended cards

#### Continue Learning

Shows the current week and primary action.

Example:

> Continue Week 6: Incident Summarization and PIRs  
> Next action: Complete the stakeholder-specific incident summary activity.

#### What You Can Use at Work Now

Shows completed artifacts that are ready to reuse.

Examples:

- Outage communication template
- Ticket triage prompt
- KB article review checklist

#### Needs Review Before Team Use

Shows artifacts that require manager, SME, security, HR, or governance review.

#### Capstone Progress

Shows how weekly work contributes to the final operating model.

---

## 5.2 Start Here Page

### Purpose

Orient the learner before they begin.

### Required sections

1. Who this course is for
2. Who this course is not for
3. Prerequisites
4. Required access or tools
5. Time commitment
6. Privacy and safe-data rules
7. How to use sample data
8. What artifacts the learner will build
9. How progress is measured
10. How completion is determined

### Recommended learner setup questions

Ask the learner to choose their context:

- I am an individual learner
- I manage a service desk team
- I manage IT operations
- I am evaluating this for enterprise training

Use this to personalize examples and suggested activities.

---

## 5.3 Learning Path Page

### Purpose

Show the full 24-week roadmap and help learners understand the journey.

### Recommended layout

| Month | Theme | Capability unlocked | Major output |
|---|---|---|---|
| 1 | Foundations | Safe Claude usage | AI use policy draft |
| 2 | Ticket Ops and Incidents | AI-assisted support operations | Triage and incident kit |
| 3 | People Management | AI-assisted coaching and onboarding | Coaching and onboarding kit |
| 4 | Process Improvement | AI-assisted service improvement | SOP, RCA, and business case kit |
| 5 | Advanced Techniques | Reusable Claude workflows | Prompt and project library |
| 6 | Strategy and Adoption | Team-scale adoption | Operating model |

### Interaction rules

- Month cards should expand into weeks
- Week cards should show status, difficulty, artifact, and estimated time
- Completed weeks should remain visible but visually de-emphasized
- Locked sequence is optional, but recommended sequence should be clear

---

## 5.4 Week Workspace

The week workspace is the most important screen.

### Required page structure

```text
Week header
Manager scenario
Concept explanation
Prompt pattern
Practice with sample data
Try with your sanitized context
Review with rubric
Save to portfolio
Reflection
Next step
```

### Week header fields

- Week number
- Title
- Estimated time
- Difficulty
- Manager outcome
- Artifact to produce
- Risk level
- Prerequisites
- Skills covered

Example:

```text
Week 6: Incident Summarization and PIRs
Outcome: Convert raw incident notes into stakeholder-specific summaries.
Artifact: Executive summary, technical summary, and customer-facing update.
Risk level: Medium. Validate facts before publishing.
Estimated time: 60 to 90 minutes.
```

### Manager scenario

Use realistic workplace context.

Example:

```text
You have a Sev-2 outage, fragmented Slack updates, and leadership asking for a clear summary by 4 PM. Your goal is to use Claude to convert raw notes into three summaries: executive, technical, and customer-facing.
```

### Prompt pattern

Every week should include a reusable prompt structure.

```text
Role:
Context:
Input:
Audience:
Constraints:
Output format:
Verification checklist:
```

### Safety gate

Before learners use real work content, show a visible warning.

```text
Before using real workplace data, remove names, emails, phone numbers, customer IDs, credentials, IPs, hostnames, proprietary configs, and confidential business details.
```

### Rubric

Every week should include a simple rubric.

| Criterion | Pass condition |
|---|---|
| Accuracy | No invented facts or unsupported claims |
| Completeness | Includes all required sections |
| Audience fit | Language matches the intended reader |
| Actionability | Clear next steps or decisions |
| Safety | Sensitive information removed or masked |

### Portfolio action

At the end of the week, provide actions:

- Save prompt
- Save artifact
- Add reflection
- Mark reviewed
- Export markdown
- Continue to next week

---

## 5.5 Resources Page

### Purpose

Central place for reusable templates, examples, and references.

### Recommended resource categories

1. Prompt templates
2. Sample ticket data
3. Incident notes
4. KB and runbook templates
5. QA rubric templates
6. SOP templates
7. RCA templates
8. Governance templates
9. Adoption roadmap templates
10. Capstone templates
11. External references

### Resource metadata

Each resource should include:

- Title
- Type
- Related week
- Intended use
- Download format
- Last updated date
- Risk note, if applicable

---

## 5.6 Prompt Library

### Purpose

Help learners reuse, adapt, and improve prompts.

### Required features

- Recommended course prompts
- Learner-saved prompts
- Prompt category
- Related week
- Risk level
- Last tested date
- Notes field
- Copy button
- Export option

### Prompt categories

- Ticket triage
- Incident communication
- KB and runbook writing
- QA feedback
- Coaching and 1:1 prep
- SOP generation
- RCA support
- Business cases
- Governance and policy
- Team training

---

## 5.7 Portfolio Page

### Purpose

Make course outcomes tangible and reusable.

### Portfolio categories

1. Communication artifacts
2. Ticket and incident artifacts
3. Knowledge management artifacts
4. Coaching and people-management artifacts
5. Process improvement artifacts
6. Governance and adoption artifacts
7. Final operating model

### Artifact fields

Each saved artifact should include:

- Title
- Related week
- Artifact type
- Status
- Review state
- Risk level
- Notes
- Last updated
- Export option

### Artifact status values

| Status | Meaning |
|---|---|
| Draft | Created but not reviewed |
| Reviewed | Checked with rubric |
| Ready to use | Safe to adapt for work |
| Needs SME review | Requires technical review |
| Needs manager review | Requires leadership review |
| Restricted | Not suitable for direct workplace use |

---

## 5.8 Capstone Builder

### Purpose

Help the learner assemble the final AI-enabled support operating model.

### Required sections

1. Support organization context
2. Use-case catalog
3. Prompt library
4. Data safety rules
5. Human review model
6. Governance model
7. Training and adoption plan
8. Metrics and success measures
9. Risk register
10. 30/60/90-day rollout plan

### Capstone readiness indicators

- Minimum number of completed weeks
- Required artifacts created
- Governance checklist completed
- Prompt library created
- Roadmap drafted
- Final review completed

---

## 6. Interaction Model

Each week should follow this flow:

```text
Open week
→ Read manager scenario
→ Learn concept
→ Review prompt pattern
→ Practice on sample data
→ Compare with example output
→ Adapt to sanitized workplace context
→ Validate with rubric
→ Save artifact
→ Add reflection
→ Mark week complete
→ Continue to next recommended week
```

The learner should never have to infer the next action.

---

## 7. UX Components

## 7.1 Status Badges

| Badge | Meaning |
|---|---|
| Learn | Conceptual section |
| Try | Hands-on exercise |
| Validate | Rubric or verification step |
| Apply | Workplace adaptation |
| Safe Data | Uses mock or anonymized data |
| Human Review | Requires human approval |
| Portfolio | Creates reusable artifact |
| Governance | Involves policy, risk, or compliance |
| Capstone Input | Feeds final operating model |

## 7.2 Risk Levels

| Risk level | Example use |
|---|---|
| Low | Generic communication draft using sample data |
| Medium | Internal incident summary requiring fact validation |
| High | Employee feedback, customer-facing communication, security-sensitive process |
| Restricted | Credentials, secrets, regulated data, confidential HR details, proprietary configs |

## 7.3 Progress Indicators

Use both activity and outcome progress.

### Activity progress

- Checklist items complete
- Week complete
- Month complete
- Course complete

### Outcome progress

- Artifacts created
- Prompts saved
- Rubrics passed
- Governance checkpoints completed
- Capstone sections complete

---

## 8. Mobile UX Guidelines

IT managers may review the course between meetings. Mobile should support reading, progress, notes, and quick review. Desktop should support deeper artifact creation.

### Mobile priority actions

- Continue current week
- Read lesson sections
- Copy prompt
- Add quick note
- Check off activity
- Review rubric
- Mark complete

### Desktop priority actions

- Draft artifacts
- Manage portfolio
- Build prompt library
- Complete capstone
- Export progress and artifacts

### Mobile layout rules

- Use a single-column layout
- Keep the current-week card at the top
- Use collapsible lesson sections
- Use large tap targets
- Add sticky bottom action for Continue, Save, or Complete
- Avoid dense tables on small screens
- Convert wide tables into stacked cards

---

## 9. Accessibility Guidelines

Accessibility should be part of the design from the beginning.

### Required accessibility features

- One clear `h1` per page
- Logical `h2` and `h3` hierarchy
- Real buttons for actions
- Visible keyboard focus
- Skip-to-content link
- Sufficient color contrast
- Do not rely on color alone for status
- Labels for form inputs
- Text alternatives for progress visuals
- Route-specific page titles
- Keyboard-friendly tab and accordion behavior

### Accordion requirements

Each expandable lesson section should include:

```html
<button aria-expanded="false" aria-controls="week-6-panel">
  Week 6: Incident Summarization and PIRs
</button>
<section id="week-6-panel">
  ...
</section>
```

### Tab requirements

Month navigation should use appropriate roles or accessible button groups.

Recommended attributes:

- `role="tablist"`
- `role="tab"`
- `aria-selected="true"`
- `aria-controls="month-1-panel"`
- Keyboard navigation with arrow keys

---

## 10. Content Model

Use a structured content model so the UI stays consistent and future automation is easier.

```ts
interface Week {
  id: number;
  monthId: number;
  title: string;
  managerProblem: string;
  outcome: string;
  estimatedTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  riskLevel: 'Low' | 'Medium' | 'High' | 'Restricted';
  prerequisites: string[];
  concepts: string[];
  scenario: string;
  promptPattern: string;
  sampleData: Resource[];
  activitySteps: string[];
  rubric: RubricCriterion[];
  deliverable: string;
  exampleOutput?: string;
  safetyWarnings: string[];
  references: Reference[];
  portfolioCategory: string;
  capstoneInput: boolean;
}

interface RubricCriterion {
  criterion: string;
  passCondition: string;
  score?: number;
}

interface Resource {
  title: string;
  type: 'template' | 'sample-data' | 'checklist' | 'guide' | 'external-link';
  url?: string;
  relatedWeek?: number;
}

interface Reference {
  title: string;
  url: string;
  publisher?: string;
  lastChecked?: string;
}
```

---

## 11. Example Week Template

```markdown
# Week 6: Incident Summarization and PIRs

## Manager outcome
Convert raw incident notes into stakeholder-specific summaries.

## Artifact
Executive summary, technical summary, and customer-facing update.

## Estimated time
60 to 90 minutes.

## Risk level
Medium. Validate all facts before publishing.

## Scenario
You have a Sev-2 outage, fragmented Slack updates, and leadership asking for a clear summary by 4 PM.

## Learn
Claude can help organize incident details, identify missing information, and tailor communication for different audiences. It should not invent facts or replace incident commander validation.

## Prompt pattern
Role:
Context:
Raw incident notes:
Audience:
Constraints:
Required output:
Verification checklist:

## Practice
Use the sample incident notes and ask Claude to produce three summaries:

1. Executive summary
2. Technical team summary
3. Customer-facing update

## Validate
Use the rubric:

| Criterion | Pass condition |
|---|---|
| Accuracy | No invented timeline, cause, or resolution |
| Audience fit | Tone and detail level match the audience |
| Completeness | Includes impact, status, next step, and owner |
| Safety | No sensitive internal data exposed |
| Actionability | Clear follow-up actions are included |

## Save to portfolio
Save your final summary package as an incident communication artifact.

## Reflection
What did Claude do well? What required human correction?
```

---

## 12. Visual Design Direction

The visual style should feel like a professional IT operations cockpit, not a school LMS.

### Recommended style

- Clean card layout
- Calm professional typography
- Clear hierarchy
- Compact but readable spacing
- Dashboard-style progress indicators
- Minimal animation
- Strong mobile readability
- Clear status badges
- Low cognitive load

### Avoid

- Dense walls of text
- Too many colors
- Overly playful visuals
- Hidden controls
- Ambiguous icons
- Generic AI chatbot aesthetics
- Completion-only gamification without meaningful outcomes

---

## 13. Measurement and Analytics

If analytics are added, measure learning outcomes and usability, not just page views.

### Recommended metrics

- Week completion rate
- Drop-off by week
- Artifact creation rate
- Rubric pass rate
- Prompt save rate
- Capstone completion rate
- Time to resume after return visit
- Most used resources
- Most skipped lessons
- Most common stuck points

### Privacy note

For enterprise use, analytics should be transparent, minimal, and privacy-conscious. Avoid collecting sensitive learner notes or workplace artifacts without explicit consent.

---

## 14. MVP Build Priority

### Phase 1: Core UX upgrade

1. Start Here page
2. Route-backed week pages
3. Week workspace template
4. Rubrics
5. Accessibility fixes
6. Export/import progress

### Phase 2: Practical learning assets

1. Sample ticket data
2. Incident note samples
3. SOP templates
4. RCA templates
5. Governance templates
6. Example outputs
7. Prompt library

### Phase 3: Portfolio and capstone

1. Portfolio page
2. Artifact status tracking
3. Capstone builder
4. Completion summary
5. Markdown export

### Phase 4: Enterprise readiness

1. Cohort mode
2. Admin dashboard
3. LMS or xAPI integration
4. Versioned content library
5. Accessibility audit
6. Content freshness monitoring

---

## 15. Acceptance Criteria

The UX is ready for public beta when:

- A learner can start without explanation from the author
- Every week has a clear outcome and artifact
- Every activity has a safety rule where needed
- Every major deliverable has a rubric
- Progress survives browser refresh
- Learners can deep-link to a week
- Keyboard navigation works
- Mobile layout is usable
- Sample data exists for sensitive exercises
- The learner can export progress or artifacts

The UX is ready for enterprise use when:

- Completion criteria are explicit
- Capstone has a formal rubric
- Accessibility is audited
- References are versioned and checked
- Content has owner and last-reviewed date
- Learner data handling is documented
- Admin or cohort reporting exists
- Course artifacts can be reviewed without exposing sensitive business data

---

## 16. Final UX Definition

Design the course as a **role-based AI workbench for IT support managers**.

The UX should not simply ask:

> Did you complete the lesson?

It should help answer:

- Did you understand the manager problem?
- Did you practice safely?
- Did you create a useful artifact?
- Did you validate quality?
- Did you save something reusable?
- Are you ready to apply this with your team?

This design matches the real IT manager persona: time-constrained, risk-aware, outcome-driven, and responsible for both operational performance and team adoption.
