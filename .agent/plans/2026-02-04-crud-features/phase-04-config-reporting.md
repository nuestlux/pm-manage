# Phase 4: System Configuration, Reports & Pagination

**Status**: Pending
**Goal**: Implement system configuration, report export capabilities, and pagination for list views.

## 1. System Configuration

- **New Page**: Add `<div id="settings" class="page">` to `app.html`.
- **Features**:
  - **General Settings**: App Name, Default Date Format.
  - **Notifications**: Toggle for "Email Notifications" (mock).
  - **Data Management**: "Reset Data" button (calls `store.reset()`) and "Backup Data" (download JSON).

## 2. Overview & Reports (Dashboard)

- **Export Feature**:
  - Add "Export Report" button to Dashboard header.
  - **Modal**: "Export Options"
    - **Time Range**: Start Date, End Date.
    - **File Type**: CSV.
  - **Logic**: Filter `tasks` and `userStories` by date and generate a downloadable file.
- **Charts**:
  - Ensure `burndownChart` uses real data (calculate daily progress from `tasks`).

## 3. Pagination

- **Requirement**: Add numbering and pagination to list screens (`Stories`, `Team`).
- **Implementation**:
  - Update `renderStories` and `renderTeam` to support pagination.
  - Default `pageSize = 10`.
  - **UI**: Add "Page [1] of [X] | [Prev] [Next]" controls below tables/grids.
  - **Index Column**: Add "STT" (No.) column to tables, calculated as `(page - 1) * pageSize + index + 1`.

## 4. Technical Implementation Steps

1. **Modify `DataStore`**: Add `settings` object to `DEFAULT_DATA`.
2. **Modify `UI` Class**: Add `renderPagination(totalItems, currentPage, pageSize, onPageChange)` helper.
3. **Update `renderStories`**: Implement slice logic and append pagination controls.
4. **Update `renderTeam`**: Implement slice logic and append pagination controls.
5. **Build Settings Page**: Create HTML structure and `renderSettings()` function.
6. **Build Export Logic**: Create `exportReport(startDate, endDate, format)` function.

## 5. Verification Plan

### Automated Tests

- (Not applicable for this prototype phase)

### Manual Verification

1. **Settings**:
    - Go to Settings, change "App Name", reload page. Verify name persists.
    - Click "Reset Data", verify data returns to defaults.
2. **Pagination**:
    - Create > 10 stories.
    - Verify only 10 show on page 1.
    - Click "Next", verify remaining shows.
    - Verify "STT" column increments correctly (11, 12...).
3. **Reports**:
    - Go to Dashboard, click "Export".
    - Select date range.
    - Download CSV. Open file and verify it contains tasks within range.
