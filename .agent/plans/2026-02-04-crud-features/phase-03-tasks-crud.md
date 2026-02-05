# Phase 3: Tasks CRUD

**Status**: Done

## Context

Tasks are the granular units of work on the Kanban board.

## Key Insights

- **Dependencies**: Tasks are often linked to a User Story and assigned to a User.
- **Kanban Interaction**: Moving cards (drag-drop) is a nice-to-have, but "Edit Task" modal to change status is the MVP requirement.

## Implementation Steps

1. **Create Task**:
    - [x] Wire up `Create Task` button.
    - [x] Modal fields: Title, Type (Task/Bug), Status, Priority, Assignee, Linked Story.
2. **Edit Task**:
    - [x] Click on Task card -> Open Edit Modal.
    - [x] Populate fields.
    - [x] Handle save -> `DataStore.updateTask()`.
3. **Delete Task**:
    - [x] Add "Delete" button inside the Edit Modal (bottom left or right).
    - [x] Confirm -> `DataStore.deleteTask()`.

## Todo List

- [x] Implement `renderTaskForm(task)` function.
- [x] Ensure Task cards are clickable.
