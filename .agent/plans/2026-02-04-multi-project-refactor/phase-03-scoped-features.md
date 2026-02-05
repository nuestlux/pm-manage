# Phase 3: Scoped Features

## Goal

Ensure all main views (Stories, Tasks, Team) only display data relevant to the currently selected project.

## Tasks

### 1. Update Data Getters

- Update `renderStories`: Filter `sampleData.userStories` by `currentProjectId`.
- Update `renderTasks`: Filter `sampleData.tasks` by `currentProjectId`.
- Update `renderTeam`:
  - Show Project Members (filtered).
  - Add "Add Member to Project" modal (select from Global Users).

### 2. Update CRUD Operations

- `addStory`: Auto-assign `projectId = currentProjectId`.
- `addTask`: Auto-assign `projectId = currentProjectId`.
- `addMember`: Add entry to `Project.members` instead of creating new Global User directly (or both).

## Verification

- **Test**:
  - Select "Default Project". Add Story "S1".
  - Select "Project B". Verify "S1" is NOT visible.
  - Add Story "S2" in "Project B".
  - Switch back to "Default Project". Verify only "S1" is visible.
