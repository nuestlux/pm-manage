---
title: "Multi-Project Management Support"
description: "Transforming the single-project application into a multi-project system with project-scoped data and team management."
status: pending
priority: P1
effort: 16h
branch: main
tags: [architecture, feature, major-refactor]
created: 2026-02-04
---

# Implementation Plan: Multi-Project Management

This plan details the architectural transformation of PM Manage from a single-project tool to a multi-project system.

## Goals

- Support multiple distinct projects.
- Scope User Stories, Tasks, and Reports to specific projects.
- Manage Team Members per project (with roles specific to that project).
- Track progress per user per project.

## Phases

### [Phase 1: Data Architecture & Migration](./phase-01-data-architecture.md)

**Goal**: Update `DataStore` to support `projects`, migrate existing data to a "Default Project", and update schema for all entities.

### [Phase 2: Project Management UI](./phase-02-project-ui.md)

**Goal**: Implement "Project List" dashboard, "Create New Project" modal, and the "Project Switcher" in the header.

### [Phase 3: Scoping Features](./phase-03-scoped-features.md)

**Goal**: Update Stories, Tasks, and Team pages to filter data based on the currently selected project.

### [Phase 4: Advanced Dashboard & Reporting](./phase-04-dashboard-refactor.md)

**Goal**: specific dashboards for projects and global overview, cross-project reporting.

## Architecture Change

- **New Entity**: `Project { id, name, key, description, members[] }`
- **Modified Entities**:
  - `UserStory`: add `projectId`
  - `Task`: add `projectId`
  - `User`: Global pool of users.
  - `Project.members`: List of `{ userId, role, joinedDate }`.

## Verification

- **Manual Testing**: Verify creating projects, switching projects, and data isolation between projects.
