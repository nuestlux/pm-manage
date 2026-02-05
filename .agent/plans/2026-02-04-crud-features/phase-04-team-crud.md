# Phase 4: Team CRUD

**Status**: Done

## Context

Managing team members (users) who can be assigned to tasks/stories.

## Key Insights

- **Simplicity**: For this prototype, we won't handle real auth/passwords. Just a list of "Profiles".
- **Avatar**: Auto-generate initials if no image is provided.

## Implementation Steps

1. **Add Member**:
    - [x] Add "Add Member" button to Team page.
    - [x] Modal fields: Name, Role (PM, Dev, Tester, BA), Avatar (optional/auto).
    - [x] `DataStore.addUser()`.
2. **Edit Member**:
    - [x] Add inline actions on Team cards (pencil icon?).
    - [x] Modal to update Name/Role.
3. **Remove Member**:
    - [x] Delete button.
    - [x] Handle cleanup? (Maybe just keep assigned tasks as is or set assignee=null).

## Todo List

- [x] Update `renderTeam()` with admin actions.
- [x] Implement User form logic.
