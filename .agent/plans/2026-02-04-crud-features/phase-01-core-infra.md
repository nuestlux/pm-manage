# Phase 1: Core Infrastructure

**Status**: Done

## Context

Current app uses a static `sampleData` object. We need a reactive `Store` that persists to `localStorage` so changes aren't lost on refresh. We also need consistent UI components for interactions.

## Key Insights

- **Store Pattern**: A simple `DataStore` class can wrap the `sampleData` and handle synchronization with `localStorage`.
- **UI Components**: Instead of hacking HTML strings for every modal, we'll create a `Modal` class that can render dynamic content.

## Implementation Steps

1. **Refactor Data Layer**:
    - [x] Create `DataStore` class in a `<script>` block (or inline in `app.html`).
    - [x] Initialize strict defaults if `localStorage` is empty.
    - [x] Add methods: `getStories()`, `saveStory(story)`, `deleteStory(id)`, etc.
2. **Create UI Components**:
    - [x] Add CSS for `.modal-overlay`, `.modal-content`, `.toast`.
    - [x] Implement `showModal(title, contentHtml, onSave)` helper.
    - [x] Implement `showToast(message, type)` helper.

## Requirements

- Data must persist across page reloads.
- Modals must be centered, have a backdrop, and support "Close" (Esc key or button).
