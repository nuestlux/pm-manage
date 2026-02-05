# Phase 4: Dashboard & Reporting

## Goal

Refactor Dashboard and Reports to reflect project-specific data.

## Tasks

### 1. Dashboard Refs

- Update `renderDashboard` stats (Active Stories, Tasks) to count only current project items.
- Update Burndown Chart to use current project data.

### 2. Export Feature

- Update `exportReport` to filter tasks by `currentProjectId`.

### 3. Settings

- Add "Project Settings" section (Edit Name/Description, Archive Project).

## Verification

- **Test**: Comparison of Dashboard stats between two different projects.
