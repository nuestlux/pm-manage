# Phase 2: User Stories CRUD

**Status**: Done

## Context

Users need to define requirements (Stories) before assigning tasks.

## Key Insights

- **Form Fields**: Title, Priority, Status, Version, Assignee.
- **Validation**: Title is required.
- **UI Entry Points**: "Create Story" button (Header), "Edit" icon (Table row), "Delete" icon.

## Implementation Steps

1. **Create Story**:
    - [x] Wire up `Create Story` button to open a modal with an empty form.
    - [x] Handle form submission -> `DataStore.addStory()` -> `renderAll()`.
2. **Edit Story**:
    - [x] Add Edit button to table rows.
    - [x] Populate modal with existing story data.
    - [x] Handle save -> `DataStore.updateStory()`.
3. **Delete Story**:
    - [x] Add Delete button/icon.
    - [x] Confirm before generic delete.
    - [x] `DataStore.deleteStory()` -> remove linked Tasks? (Optional logic: warn if tasks exist).

## Todo List

- [x] Implement `renderStoryForm(story)` function.
- [x] Update `renderStories()` to include action buttons.
