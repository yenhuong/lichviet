# Testing & Bulletproofing Skills

## The Iron Law (Same as TDD)

```
NO SKILL WITHOUT A FAILING TEST FIRST
```

This applies to NEW skills AND EDITS to existing skills.

Write skill before testing? Delete it. Start over.
Edit skill without testing? Same violation.

**No exceptions:**
- Not for "simple additions"
- Not for "just adding a section"
- Not for "documentation updates"
- Don't keep untested changes as "reference"
- Don't "adapt" while running tests
- Delete means delete

**REQUIRED BACKGROUND:** The `superpowers:test-driven-development` skill explains why this matters. Same principles apply to documentation.

## RED-GREEN-REFACTOR for Skills

Follow the TDD cycle for skill creation:

### RED: Write Failing Test (Baseline)
Run pressure scenario with subagent WITHOUT the skill. Document exact behavior:
- What choices did they make?
- What rationalizations did they use (verbatim)?
- Which pressures triggered violations?

### GREEN: Write Minimal Skill
Write skill that addresses those specific rationalizations. Don't add extra content for hypothetical cases.
Run same scenarios WITH skill. Agent should now comply.

### REFACTOR: Close Loopholes
Agent found new rationalization? Add explicit counter. Re-test until bulletproof.

## Testing All Skill Types

Different skill types need different test approaches:

### Discipline-Enforcing Skills (rules/requirements)
**Test with:**
- Academic questions: Do they understand the rules?
- Pressure scenarios: Do they comply under stress?
- Multiple pressures combined: time + sunk cost + exhaustion
- Identify rationalizations and add explicit counters

### Technique Skills (how-to guides)
**Test with:**
- Application scenarios: Can they apply the technique correctly?
- Variation scenarios: Do they handle edge cases?
- Missing information tests: Do instructions have gaps?

### Pattern Skills (mental models)
**Test with:**
- Recognition scenarios: Do they recognize when pattern applies?
- Application scenarios: Can they use the mental model?
- Counter-examples: Do they know when NOT to apply?

### Reference Skills (documentation/APIs)
**Test with:**
- Retrieval scenarios: Can they find the right information?
- Application scenarios: Can they use what they found correctly?
- Gap testing: Are common use cases covered?

## Common Rationalizations for Skipping Testing

| Excuse | Reality |
|--------|---------|
| "Skill is obviously clear" | Clear to you ≠ clear to other agents. Test it. |
| "It's just a reference" | References can have gaps, unclear sections. Test retrieval. |
| "Testing is overkill" | Untested skills have issues. Always. 15 min testing saves hours. |
| "I'll test if problems emerge" | Problems = agents can't use skill. Test BEFORE deploying. |
| "Too tedious to test" | Testing is less tedious than debugging bad skill in production. |
| "I'm confident it's good" | Overconfidence guarantees issues. Test anyway. |

**All of these mean: Test before deploying. No exceptions.**

## Bulletproofing Skills Against Rationalization

Skills that enforce discipline (like TDD) need to resist rationalization. Agents are smart and will find loopholes when under pressure.

### Close Every Loophole Explicitly
Don't just state the rule - forbid specific workarounds:

<Bad>
Write code before test? Delete it.
</Bad>

<Good>
Write code before test? Delete it. Start over.
**No exceptions:**
- Don't keep it as "reference"
- Don't "adapt" it while writing tests
- Don't look at it
- Delete means delete
</Good>

### Address "Spirit vs Letter" Arguments
Add foundational principle early:
`**Violating the letter of the rules is violating the spirit of the rules.**`

### Build Rationalization Table
Capture rationalizations from baseline testing. Every excuse agents make goes in the table.

### Create Red Flags List
Make it easy for agents to self-check when rationalizing:

```markdown
## Red Flags - STOP and Start Over
- Code before test
- "I already manually tested it"
- "Tests after achieve the same purpose"
```

### Update CSO for Violation Symptoms
Add to description: symptoms of when you're ABOUT to violate the rule.
