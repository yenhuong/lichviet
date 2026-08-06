---
trigger: model_decision
description: Always apply when creating, organizing, reading, or editing document files
---
# Document Structure Rules

> [!IMPORTANT]
> This rule is **MANDATORY** for any operations related to documentation. Violating this will lead to an incorrect project structure.

## Core Rules (MUST Comply)

1. **MUST** save all documents to the `docs/` directory — NEVER create documents in the root directory or any other directory
2. **MUST** use the Vietnamese language (tiếng Việt) for all output documents, analysis, and research in the `docs/` directory. Internal agent files (rules, skills) MUST remain in English.
3. **MUST** use the Dewey Decimal System for directory structure (010, 020, 030, etc.)
4. **MUST** add YAML frontmatter to every document
5. **MUST** update the corresponding MOC (Map of Content) file after creating a new document
6. **MUST** use wiki-links `[[Document-Name]]` for cross-linking between documents
7. **MUST NOT** create arbitrary directory structures like `01-product/`, `02-analysis/`
8. **MUST NOT** create a document without checking the Document Classification Table first

## Decision Flow

```
┌─────────────────────────────────────────────────────────────┐
│ BEFORE creating any document, ask yourself:                 │
├─────────────────────────────────────────────────────────────┤
│ 1. Does the docs/ directory exist?                          │
│    NO  → Create directory structure (see Mandatory Struct)  │
│    YES → Proceed                                            │
├─────────────────────────────────────────────────────────────┤
│ 2. What type of document is this?                           │
│    → Look it up in the Document Classification Table        │
│    → Get the correct target directory and naming convention │
├─────────────────────────────────────────────────────────────┤
│ 3. Does the target directory exist?                         │
│    NO  → Create it with standard Dewey decimal prefix       │
│    YES → Proceed                                            │
├─────────────────────────────────────────────────────────────┤
│ 4. Create the document with:                                │
│    → The correct naming convention                          │
│    → Mandatory frontmatter                                  │
│    → Wiki-links to related documents                        │
├─────────────────────────────────────────────────────────────┤
│ 5. AFTER creating the document:                             │
│    → Update the parent directory's MOC file                 │
│    → Update 000-Index.md if it's a vital document           │
└─────────────────────────────────────────────────────────────┘
```

## Document Classification Table

| Group                      | Document Type           | Target Directory                         | Naming Convention            |
| -------------------------- | ----------------------- | ---------------------------------------- | ---------------------------- |
| **010-Planning**     | Roadmap                 | `docs/010-Planning/`                   | `Roadmap.md`               |
|                            | OKRs                    | `docs/010-Planning/`                   | `OKRs.md`                  |
|                            | Sprint                  | `docs/010-Planning/Sprints/`           | `Sprint-{NNN}.md`          |
| **020-Requirements** | PRD                     | `docs/020-Requirements/`               | `PRD-{ProjectName}.md`     |
|                            | **BPRD**          | `docs/020-Requirements/BPRD/`          | `BPRD-{NNN}-{Title}.md`    |
|                            | BRD                     | `docs/020-Requirements/BRD/`           | `BRD-{NNN}-{Title}.md`     |
|                            | Use Case                | `docs/020-Requirements/Use-Cases/`     | `UC-{NN}-{Title}.md`       |
| **022-User-Stories** | Epic                    | `docs/022-User-Stories/Epics/`         | `Epic-{Title}.md`          |
|                            | User Story              | `docs/022-User-Stories/Backlog/`       | `Story-{Title}.md`         |
|                            | Active Sprint Story   | `docs/022-User-Stories/Active-Sprint/` | `Story-{Title}.md`         |
| **030-Specs**        | ADR                     | `docs/030-Specs/Architecture/`         | `ADR-{NNN}-{Title}.md`     |
|                            | RFC                     | `docs/030-Specs/Architecture/`         | `RFC-{NNN}-{Title}.md`     |
|                            | SDD (System Design)     | `docs/030-Specs/Architecture/`         | `SDD-{ProjectName}.md`     |
|                            | Technical Spec          | `docs/030-Specs/`                      | `Spec-{Feature}.md`        |
|                            | API Endpoint Spec       | `docs/030-Specs/API/`                  | `Endpoint-{Name}.md`       |
|                            | DB Schema               | `docs/030-Specs/Schema/`               | `DB-Entity-{Name}.md`      |
| **035-QA**           | Test Plan               | `docs/035-QA/Test-Plans/`              | `MTP-{Name}.md`            |
|                            | Test Case               | `docs/035-QA/Test-Cases/`              | `TC-{Feature}-{NNN}.md`    |
| **040-Design**       | Design System           | `docs/040-Design/Design-System/`       | `{Component}.md`           |
|                            | Wireframe               | `docs/040-Design/Wireframes/`          | `WF-{Screen}-{Device}.png` |
| **050-Research**     | Research/Analysis       | `docs/050-Research/`                   | `Analysis-{Topic}.md`      |
| **060-Manuals**      | User Guide              | `docs/060-Manuals/User-Guide/`         | `{Topic}.md`               |
|                            | Admin Guide             | `docs/060-Manuals/Admin-Guide/`        | `{Topic}.md`               |
| **090-Archive**      | Obsolete Documents      | `docs/090-Archive/`                    | `{Original-Name}.md`       |
| **999-Resources**    | Meeting Notes           | `docs/999-Resources/Meeting-Notes/`    | `{Type}-{Date}.md`         |
|                            | Glossary                | `docs/999-Resources/`                  | `Glossary.md`              |

## Mandatory Directory Structure

```
docs/
├── 000-Index.md                        # Document home page - MUST exist
│
├── 010-Planning/                       # Strategy, Roadmap, Planning
│   ├── Planning-MOC.md                 # MANDATORY MOC
│   ├── Roadmap.md
│   ├── OKRs.md
│   └── Sprints/
│
├── 020-Requirements/                   # Business Requirements
│   ├── Requirements-MOC.md             # MANDATORY MOC
│   ├── BPRD/                           # Business & Product Requirements Docs
│   ├── BRD/                            # Business Requirements Docs
│   └── Use-Cases/
│
├── 022-User-Stories/                   # Agile Backlog
│   ├── Stories-MOC.md                  # MANDATORY MOC
│   ├── Epics/
│   ├── Active-Sprint/
│   └── Backlog/
│
├── 030-Specs/                          # Technical Specifications
│   ├── Specs-MOC.md                    # MANDATORY MOC
│   ├── Architecture/
│   ├── API/
│   └── Schema/
│
├── 035-QA/                             # Testing & Quality Assurance
│   ├── QA-MOC.md                       # MANDATORY MOC
│   ├── Test-Plans/
│   ├── Test-Cases/
│   ├── Automation/
│   ├── Reports/
│   └── Performance/
│
├── 040-Design/                         # UI/UX & Frontend
│   ├── Design-MOC.md                   # MANDATORY MOC
│   ├── Wireframes/
│   ├── Design-System/
│   ├── Specs/
│   └── Assets/
│
├── 050-Research/                       # Discovery & Analysis
│   ├── Research-MOC.md                 # MANDATORY MOC
│   ├── Competitor-Analysis/
│   └── User-Interviews/
│
├── 060-Manuals/                        # End-User Documentation
│   ├── Manuals-MOC.md                  # MANDATORY MOC
│   ├── User-Guide/
│   └── Admin-Guide/
│
├── 090-Archive/                        # Obsolete Documents (never delete)
│
└── 999-Resources/                      # Scripts, Glossary, Meeting Notes
    ├── Glossary.md
    └── Meeting-Notes/
```

> [!NOTE]
> **Document templates** are not stored in `docs/`. All templates (BPRD, BRD, PRD, User Story, etc.) are located in the skill:
> `.agents/skills/business-analysis/templates/`
> When needing to create a new document, the AI agent will automatically read and apply the correct template from there.

## Frontmatter Template

Every document **MUST** have the following frontmatter:

```yaml
---
id: {TYPE}-{NNN}           # Unique ID (e.g., PRD-001, UC-01, BPRD-001)
type: {document_type}      # prd, brd, bprd, use-case, epic, story, spec, adr, etc.
status: draft|review|approved|deprecated
project: {project_name}    # Optional: for multi-product projects
owner: "@{team_or_person}" # Optional: responsible person/team
tags: [tag1, tag2]         # Optional: for searching/filtering
linked-to: [[Related-Doc]] # Optional: linking to main related documents
created: YYYY-MM-DD
updated: YYYY-MM-DD        # Optional: last updated date
---
```

## Linking Rules

1. **PRD** → links to resulting Epics: `## Related Epics\n- [[Epic-FeatureName]]`
2. **Epic** → links to original PRD: `Implements: [[PRD-ProjectName]]`
3. **Use Case** → links to Epic: `Under: [[Epic-FeatureName]]`
4. **SDD** → links to PRD: `Implements: [[PRD-ProjectName]]`
5. **ADR** → links to SDD: `Related to: [[SDD-ProjectName]]`

## Pre-Completion Checklist

Before finalizing any document, check:

- [ ] Document is placed in the correct `docs/XXX-Category/` directory
- [ ] File name follows the convention in the classification table
- [ ] Frontmatter contains all mandatory fields (id, type, status, created)
- [ ] Added wiki-links to related documents
- [ ] Parent directory's MOC file is updated
- [ ] Updated `000-Index.md` (for vital documents like PRD, SDD)
