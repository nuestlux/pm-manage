# Research Report: CRUD Implementation for PM Manage

## 1. Project Context

The application `app.html` is a single-file SPA (Single Page Application) using vanilla JS, `Chart.js`, and a Master UI Clean Design.
Currently, it uses read-only `sampleData` to render views.

## 2. CRUD Requirements

The user wants to "complete CRUD features" for the following menus:

- **User Stories** (@[User Stories])
- **Tasks** (@[Công việc])
- **Team** (@[Nhóm])

## 3. Data Model Analysis

Based on `app.html` code:

### User Stories

- **Schema**: `{ id, title, titleEn, status, priority, assigneeId, version, taskCount, tasksDone, createdDate }`
- **Required Inputs**: Title, Status, Priority, Assignee, Version.
- **Computed**: taskCount, tasksDone (derived from linked tasks).

### Tasks

- **Schema**: `{ id, title, titleEn, status, priority, assigneeId, storyId, type, dueDate, estimatedHours, timeSpent }`
- **Required Inputs**: Title, Type, Priority, Status, Assignee, Linked Story, Due Date, Estimate.

### Team Members

- **Schema**: `{ id, name, role, avatar, workload, activeTasks }`
- **Required Inputs**: Name, Role, Email (for avatar generation/uniqueness).
- **Computed**: workload, activeTasks.

## 4. Implementation Strategy

### UI Pattern

- **Modals**: Use a centered Modal (Dialog) component for "Create" and "Edit" actions to maintain context.
- **Notifications**: Toast notifications for success/error feedback.
- **Confirmation**: Simple `confirm()` or a custom Modal for "Delete" actions.

### State Management

- **Persistence**: functionality is currently ephemeral. We should modify `sampleData` to load from `localStorage` if available, falling back to defaults.
- **Reactivity**: After any CRUD operation, call `renderAll()` to refresh the UI.

### ID Generation

- Simple auto-increment or timestamp-based IDs for new items.

## 5. Technical Tasks

1. **Generic Components**: Implement `Modal` `Toast` CSS/JS generic classes.
2. **Data Layer**: wrapping `sampleData` with a `Store` object that handles `get`, `add`, `update`, `delete` and syncs with `localStorage`.
3. **User Stories CRUD**: Add "Edit" button to table rows. Add "Delete" button. Wire up "Create Story" button.
4. **Tasks CRUD**: Add "Edit" on card click. "Create Task" button logic.
5. **Team CRUD**: Add "Add Member" button. Edit/Remove member actions.

## 6. Design Consistency

- Ensure Modals use the same `--bg-surface`, `--radius-lg`, and shadow tokens.
- Inputs should match the `--primary` focus states.
