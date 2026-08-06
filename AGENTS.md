# Project Agents

This file provides project-specific context and links to custom agent resources.

## Resources

- Custom Rules: [.agents/rules/](.agents/rules/)
- Workflows: [.agents/workflows/](.agents/workflows/)
- Skills: [.agents/skills/](.agents/skills/)

## Project Specifics

- **Language**: **MANDATORY Vietnamese for output documentation** (e.g. `docs/`), research, and explanations. English MUST be used for code, comments, technical identifiers, and all internal agent files (e.g. `.agents/skills`, `.agents/rules`, `.agents/workflows`).
- **Tech Stack**: Flutter (targeting Android, iOS).

## Superpowers System

<EXTREMELY_IMPORTANT>
You have superpowers. Superpowers teach you new skills and capabilities.
**RIGHT NOW** use: **using-superpowers** skill and follow the instructions it returns!!!
`view_file(".agents/skills/using-superpowers/SKILL.md")`
`view_file(".agents/skills/using-superpowers/references/gemini-tools.md")`
</EXTREMELY_IMPORTANT>

# BROWSER TESTING RESTRICTION

- NEVER use browser_subagent to test or verify UI changes.
- Instead, verify by reading code and running build/lint checks.
- Let the user test in the browser manually.
