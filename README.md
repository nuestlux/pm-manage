# PM Manage - HTML Prototype

> Hệ thống Quản lý Dự án IT với hỗ trợ song ngữ Tiếng Việt - Tiếng Anh

## 🚀 Cách sử dụng / How to Use

### Bước 1: Mở prototype

Mở file `index.html` trong trình duyệt web (Chrome, Firefox, Edge, Safari)

### Bước 2: Chuyển đổi ngôn ngữ

Sử dụng nút **VI/EN** ở góc trên bên phải để chuyển đổi giữa Tiếng Việt và English

### Bước 3: Khám phá các tính năng

Điều hướng qua sidebar để xem các trang khác nhau:

- **Dashboard (Tổng quan)** - Thống kê và biểu đồ dự án
- **User Stories** - Quản lý user stories với bộ lọc
- **Tasks (Công việc)** - Kanban board cho quản lý task
- **Versions (Phiên bản)** - Coming soon
- **Team (Nhóm)** - Coming soon
- **Reports (Báo cáo)** - Coming soon
- **Settings (Cài đặt)** - Coming soon

---

## 📂 Cấu trúc File / File Structure

```
pm-manage/
├── index.html          # Dashboard page
├── user-stories.html   # User Stories list page
├── tasks.html          # Kanban board page
├── styles.css          # Design system & global styles
├── i18n.js            # Internationalization (VI/EN)
├── data.js            # Sample data & helper functions
└── README.md          # Documentation (this file)
```

---

## 🎨 Thiết kế / Design

### Color Palette

- **Primary**: `#667eea` - Purple
- **Secondary**: `#764ba2` - Deep Purple  
- **Accent**: `#f093fb` - Pink
- **Background**: `#0f0f23` - Dark Navy
- **Surface**: `#1a1a2e` - Dark Blue

### Typography

- **Font**: Inter (Google Fonts)
- **Sizes**: 12px - 40px responsive scale

### Effects

- ✨ Glassmorphism (backdrop-filter: blur)
- 🌈 Gradient backgrounds
- 💫 Smooth hover animations
- 🎯 Modern dark theme

---

## 🌐 Hỗ trợ Song ngữ / Bilingual Support

### Tiếng Việt (Vietnamese)

- Thuật ngữ chuyên ngành IT chính xác
- Ngữ cảnh phù hợp với văn hóa Việt Nam
- UI/UX tối ưu cho người dùng Việt

### English

- Professional IT terminology
- International standard terms
- Clear and concise translations

### Cách hoạt động

1. File `i18n.js` chứa tất cả bản dịch
2. Hệ thống tự động lưu ngôn ngữ đã chọn vào localStorage
3. Tất cả labels có `data-i18n` attribute sẽ được dịch tự động
4. Dynamic content (tables, charts) render theo ngôn ngữ hiện tại

---

## 📊 Dữ liệu Mẫu / Sample Data

File `data.js` chứa dữ liệu mẫu realistic cho:

### Users (Người dùng)

- 6 team members với các vai trò khác nhau
- PM, BA, Dev, Tester, AM
- Avatar, workload, active tasks

### User Stories

- 6 user stories với status khác nhau
- Todo, In Progress, In Review, Done
- Progress tracking (tasks completed/total)
- Priority levels: Critical, High, Medium, Low

### Tasks (Công việc)

- 11 tasks phân bố trên Kanban board
- 4 statuses: Todo, In Progress, In Review, Done
- Time tracking (estimated/spent hours)
- Links to user stories
- Labels, priorities, assignees

### Versions (Phiên bản)

- v1.0 - MVP (75% progress)
- v1.1 - Enhanced (15% progress)

### Activity Feed

- Recent activities (task completed, story created, bug reported)
- Timestamps with "time ago" display

---

## ✨ Tính năng Chính / Key Features

### 1. Dashboard (index.html)

✅ **Implemented:**

- 4 stat cards (Active Stories, Tasks, Overdue, Sprint Progress)
- Sprint Burndown chart (Chart.js)
- Team workload visualization
- Recent activity feed
- Upcoming deadlines list
- Bilingual support

### 2. User Stories (user-stories.html)

✅ **Implemented:**

- Table view with all user stories
- Filter: All / My Stories / Active
- Search functionality
- Progress bars for task completion
- Status & priority badges
- Assignee avatars
- Bilingual titles and descriptions

### 3. Tasks / Kanban (tasks.html)

✅ **Implemented:**

- 4-column Kanban board (Todo, In Progress, In Review, Done)
- Task cards with:
  - Task ID, title, type icon
  - Priority badges
  - Assignee avatars
  - Due dates
  - Time tracking progress bars
  - Labels
  - Linked user story
- Bilingual task titles

---

## 🔧 Customization / Tùy chỉnh

### Thay đổi màu sắc

Edit `styles.css`:

```css
:root {
  --primary: #667eea;      /* Main purple */
  --secondary: #764ba2;    /* Deep purple */
  --accent: #f093fb;       /* Pink */
  /* ... */
}
```

### Thêm dữ liệu mới

Edit `data.js`:

```javascript
sampleData.userStories.push({
  id: 7,
  title: 'Tiêu đề tiếng Việt',
  titleEn: 'English title',
  // ...
});
```

### Thêm bản dịch

Edit `i18n.js`:

```javascript
translations.vi.newSection = {
  newKey: 'Bản dịch tiếng Việt'
};
translations.en.newSection = {
  newKey: 'English translation'
};
```

---

## 🎯 Roadmap

### Phase 1 - MVP ✅ (Hoàn thành / Completed)

- [x] Design system & CSS framework
- [x] i18n system (VI/EN)
- [x] Sample data structure
- [x] Dashboard with charts
- [x] User Stories list page
- [x] Kanban board for tasks

### Phase 2 - Coming Soon 🚧

- [ ] Versions management page
- [ ] Team members page
- [ ] Reports & analytics page
- [ ] Settings page
- [ ] Modal dialogs for CRUD
- [ ] Real drag-and-drop on Kanban
- [ ] Advanced filters
- [ ] Export functionality

### Phase 3 - Future Enhancements 💡

- [ ] Backend API integration
- [ ] Real-time updates (WebSocket)
- [ ] File upload/attachments
- [ ] Comments & activity log
- [ ] Email notifications
- [ ] Mobile responsive improvements

---

## 🛠️ Công nghệ / Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables
- **Vanilla JavaScript** - No frameworks, pure JS
- **Chart.js** - Data visualization
- **Google Fonts** - Inter typeface
- **localStorage** - Language preference persistence

---

## 📱 Browser Support

✅ Tested on:

- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

⚠️ Note: Requires modern browser with ES6+ support

---

## 👥 Roles & Permissions

### Project Manager (PM)

- ✅ Full access to all features
- ✅ Create/edit/delete user stories
- ✅ Assign tasks
- ✅ View all reports

### Business Analyst (BA)

- ✅ Create/edit user stories
- ✅ View tasks
- ✅ Manage acceptance criteria

### Developer (Dev)

- ✅ View assigned tasks
- ✅ Update task status
- ✅ Log work hours
- ✅ Link commits

### Tester (Tester)

- ✅ Create bug reports
- ✅ Update test results
- ✅ View test cases

### Account Manager (AM)

- ✅ View project progress
- ✅ View reports
- ⚠️ Limited editing access

---

## 📞 Support / Hỗ trợ

For questions or issues, please refer to:

- Implementation plan: `implementation_plan.md`
- Feature documentation: `jira_redmine_features.md`
- Competitive analysis: `competitive_analysis.md`

---

## 📝 License

This is a prototype for demonstration purposes.
© 2026 PM Manage - All rights reserved.

---

**Made with ❤️ by Antigravity AI**
