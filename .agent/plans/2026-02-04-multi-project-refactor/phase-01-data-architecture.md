# Phase 1: Data Architecture & Migration

## Goal

Establish the data foundation for multi-project support by introducing the `Project` entity and migrating existing global data to a default project.

## Tasks

### 1. Update DataStore Schema

- Define `Project` interface:

  ```typescript
  interface Project {
      id: number;
      name: string;
      description: string;
      members: ProjectMember[]; // { userId, role }
      createdDate: string;
  }
  ```

- Update `UserStory` and `Task` interfaces to include `projectId`.

### 2. Migration Logic

- In `DataStore.load()`:
  - Check if `projects` array exists.
  - If not (legacy data):
    - Create a "Default Project" (ID 1).
    - Assign all existing `userStories` to Project 1.
    - Assign all existing `tasks` to Project 1.
    - Initialize `projects` array with this Default Project.
  - Save migrated data.

### 3. Verification

- **Test**: Load app with existing localStorage data.
- **Verify**: Data load success, no errors, "Default Project" exists in internal state (console log).
