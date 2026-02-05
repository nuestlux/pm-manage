# 🚀 Hướng Dẫn Sử Dụng PM Manage

## 📋 Cách Mở Ứng Dụng

1. **Mở file `app.html`** bằng trình duyệt web (Chrome, Firefox, Edge...)
   - Cách 1: Double-click vào file `app.html`
   - Cách 2: Kéo thả file `app.html` vào cửa sổ trình duyệt
   - Cách 3: Chuột phải → "Open with" → Chọn trình duyệt

2. **Đảm bảo file `db.js` cùng thư mục** với `app.html`

## ✨ Tính Năng Chính

### 📂 Quản Lý Dự Án (Projects)

- **Xem danh sách**: Click "Projects" trên sidebar
- **Tạo mới**: Nút "Create Project" → Nhập tên, mô tả, chọn thành viên
- **Chỉnh sửa**: Click biểu tượng ✎ trên card dự án
- **Xóa**: Click biểu tượng 🗑 (lưu ý: không thể xóa dự án cuối cùng)
- **Chuyển đổi**: Nút "Switch to Project" để làm việc với dự án đó

### 📋 User Stories

- **Xem danh sách**: Click "User Stories" trên sidebar
- **Tạo mới**: Nút "Tạo Story" → Điền thông tin
- **Chỉnh sửa**: Click vào dòng story cần sửa
- **Xóa**: Nút xóa trên từng story

### ✅ Công Việc (Tasks)

- **Xem danh sách**: Click "Công việc" trên sidebar
- **Tạo mới**: Nút "Tạo Task" → Điền thông tin, chọn story liên kết
- **Chỉnh sửa**: Click vào task
- **Xóa**: Nút xóa trên từng task

### 👥 Quản Lý Nhóm (Team)

- **Xem thành viên**: Click "Nhóm" trên sidebar
- **Thêm thành viên**: Nút "Add Member"
- **Chỉnh sửa**: Click biểu tượng sửa
- **Xóa**: Click biểu tượng xóa

## 💾 Lưu Trữ Dữ Liệu

### Tự Động Lưu

- Mọi thay đổi (thêm/sửa/xóa) được **tự động lưu vào LocalStorage**
- Dữ liệu **không bị mất** khi tải lại trang (F5)
- Dữ liệu được lưu riêng cho mỗi trình duyệt

### Xuất/Nhập Dữ Liệu

1. **Xuất dữ liệu**:
   - Vào "Cài đặt" → "Backup Data"
   - File JSON sẽ được tải về

2. **Reset về mặc định**:
   - Vào "Cài đặt" → "Reset to Defaults"
   - Hoặc xóa LocalStorage: F12 → Application → Local Storage → Xóa `pm_manage_db_v1`

## 🎯 Giám Sát Tiến Độ

### Trên Trang Projects

- **Progress Bar**: Hiển thị % hoàn thành (Tasks done / Total tasks)
- **Status Indicator**:
  - 🟢 **On Track**: Không có task quá hạn
  - 🔴 **Delayed**: Có task quá hạn chưa hoàn thành
  - 🔵 **Completed**: 100% tasks hoàn thành

### Trên Dashboard

- Biểu đồ tổng quan về Stories và Tasks
- Hoạt động gần đây
- Thống kê theo version

## 🌐 Đa Ngôn Ngữ

- **Tiếng Việt**: Nút "VI" ở góc trên phải
- **English**: Nút "EN" ở góc trên phải

## 🔧 Xử Lý Sự Cố

### Trang trống / Không hiển thị dữ liệu

1. Mở Console (F12) → Tab Console
2. Kiểm tra lỗi JavaScript
3. Đảm bảo file `db.js` cùng thư mục với `app.html`
4. Thử xóa LocalStorage và tải lại trang

### Dữ liệu bị mất

- Kiểm tra LocalStorage: F12 → Application → Local Storage
- Nếu có key `pm_manage_db_v1` → Dữ liệu vẫn còn
- Nếu không → Dữ liệu đã bị xóa, cần restore từ backup

## 📱 Tương Thích

- ✅ Chrome (khuyến nghị)
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ⚠️ Internet Explorer (không hỗ trợ)

---

**Lưu ý**: Đây là ứng dụng chạy hoàn toàn trên trình duyệt (client-side), không cần server hay database backend.
