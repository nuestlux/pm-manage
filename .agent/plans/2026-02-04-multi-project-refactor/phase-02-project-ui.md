# Phase 2: Project Management UI

## Goal

Provide UI for managing projects and switching contexts.

## Tasks

### 1. Global State Management

- Add `currentProjectId` to `DataStore` or `UI` state.
- Default to first project or last used project (settings).

### 2. Project List View

- Create a new "Projects" page (or update Dashboard to show Projects if no project selected).
- Display cards for each project with stats (Member count, Story count).

### 3. Create Project Modal

- Form: Name, Description, Key (optional).
- On Save: Add to `store`, switch to new project.

### 4. Header Switcher

- Add dropdown in Header to showing current project name.
- Click -> Dropdown list of projects -> "Create New" option.

## Verification

- **Test**: Create a new project "Project B".
- **Verify**: "Project B" appears in switcher. Switching to it shows empty/default state (once filtering is implemented in Phase 3).
