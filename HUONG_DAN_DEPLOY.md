# 🌐 Hướng dẫn Deploy PM Manage lên Online (MIỄN PHÍ)

## 📌 Tổng quan

Bạn có 3 phương án miễn phí để deploy website PM Manage lên online:

---

## 🥇 PHƯƠNG ÁN 1: NETLIFY (Đơn giản nhất - Khuyến nghị)

### ✨ Ưu điểm

- Kéo thả file, không cần Git
- Deploy trong 2 phút
- SSL/HTTPS miễn phí
- Băng thông không giới hạn
- URL đẹp: `https://ten-ban-chon.netlify.app`

### 📋 Các bước thực hiện

#### Bước 1: Đăng ký tài khoản Netlify

1. Truy cập: <https://www.netlify.com/>
2. Click **"Sign up"** (đăng ký)
3. Chọn đăng ký bằng **Email** hoặc **GitHub** (khuyến nghị GitHub)
4. Xác nhận email

#### Bước 2: Deploy bằng cách Drag & Drop

1. Sau khi đăng nhập, vào: <https://app.netlify.com/drop>
2. **Kéo cả thư mục `pm-manage`** vào vùng drop zone
   - Hoặc click "Browse to upload" để chọn thư mục
3. Netlify sẽ tự động upload và deploy
4. Chờ khoảng 10-30 giây

#### Bước 3: Lấy URL và chia sẻ

1. Netlify sẽ tự tạo URL dạng: `https://adorable-cupcake-12345.netlify.app`
2. Click vào **"Site settings"** → **"Change site name"** để đổi tên đẹp hơn
3. Ví dụ: `https://pm-manage-minhduc.netlify.app`
4. **Xong!** Chia sẻ URL này với mọi người

### 🔄 Cập nhật website

- Vào **"Deploys"** tab
- Kéo thả thư mục mới vào
- Website tự động cập nhật

---

## 🥈 PHƯƠNG ÁN 2: GITHUB PAGES (Chuyên nghiệp)

### ✨ Ưu điểm

- Miễn phí vĩnh viễn
- Tích hợp với Git (quản lý version)
- URL: `https://ten-github-cua-ban.github.io/pm-manage`
- Phù hợp cho dự án dài hạn

### 📋 Các bước thực hiện

#### Bước 1: Tạo repository trên GitHub

1. Truy cập: <https://github.com/new>
2. Đặt tên repository: **pm-manage**
3. Chọn **Public** (công khai)
4. Click **"Create repository"**

#### Bước 2: Upload code lên GitHub

**Cách 1: Dùng GitHub Desktop (Dễ nhất)**

1. Tải GitHub Desktop: <https://desktop.github.com/>
2. Đăng nhập GitHub
3. Click **"Add"** → **"Add existing repository"**
4. Chọn thư mục `pm-manage`
5. Click **"Publish repository"**

**Cách 2: Dùng Git command line**

```bash
cd C:\Users\Desktop\.gemini\antigravity\scratch\spexor-ui\pm-manage
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TEN-GITHUB-CUA-BAN/pm-manage.git
git push -u origin main
```

#### Bước 3: Bật GitHub Pages

1. Vào repository trên GitHub
2. Click **"Settings"** (Cài đặt)
3. Chọn **"Pages"** ở sidebar bên trái
4. Trong phần **"Source"**:
   - Chọn branch: **main**
   - Chọn folder: **/ (root)**
5. Click **"Save"**
6. Chờ 1-2 phút

#### Bước 4: Truy cập website

- URL sẽ có dạng: `https://TEN-GITHUB-CUA-BAN.github.io/pm-manage/app.html`
- Hoặc rename `app.html` thành `index.html` để URL đẹp hơn: `https://TEN-GITHUB-CUA-BAN.github.io/pm-manage/`

### 🔄 Cập nhật website

```bash
git add .
git commit -m "Update features"
git push
```

---

## 🥉 PHƯƠNG ÁN 3: VERCEL (Tương tự Netlify)

### ✨ Ưu điểm

- Giống Netlify
- Deploy nhanh
- Tích hợp tốt với GitHub

### 📋 Các bước thực hiện

1. Truy cập: <https://vercel.com/>
2. Đăng ký bằng tài khoản GitHub
3. Click **"Add New"** → **"Project"**
4. Chọn repository `pm-manage` (hoặc import từ GitHub)
5. Click **"Deploy"**
6. URL: `https://pm-manage.vercel.app`

---

## 📊 So sánh các phương án

| Tiêu chí | Netlify | GitHub Pages | Vercel |
|----------|---------|--------------|--------|
| **Độ dễ** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Tốc độ deploy** | 1 phút | 2-3 phút | 1 phút |
| **Cần Git?** | ❌ Không | ✅ Có | ✅ Có |
| **Custom domain** | ✅ Miễn phí | ✅ Miễn phí | ✅ Miễn phí |
| **SSL/HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Giới hạn** | 100GB/tháng | Unlimited | 100GB/tháng |

---

## 🎯 KHUYẾN NGHỊ

### Nếu bạn muốn NHANH NHẤT (2 phút)

👉 **Dùng Netlify Drag & Drop**

- Vào <https://app.netlify.com/drop>
- Kéo thả thư mục
- Xong!

### Nếu bạn muốn QUẢN LÝ CHUYÊN NGHIỆP

👉 **Dùng GitHub Pages**

- Có version control
- Làm việc nhóm tốt hơn
- Miễn phí vĩnh viễn

---

## ⚠️ LƯU Ý QUAN TRỌNG

### 1. Đổi tên file chính

Để URL đẹp hơn, đổi `app.html` thành `index.html`:

- Netlify: Tự động nhận `index.html`
- GitHub Pages: `index.html` sẽ là trang chủ

### 2. Database

Vì website này dùng LocalStorage (lưu trên trình duyệt):

- ✅ Mỗi người sẽ có dữ liệu riêng
- ❌ Không chia sẻ dữ liệu giữa các người dùng
- ❌ Xóa cache/cookie sẽ mất dữ liệu

**Giải pháp nếu muốn chia sẻ dữ liệu:**

- Cần backend (Firebase, Supabase)
- Hoặc dùng JSON file trên GitHub

### 3. HTTPS

Tất cả 3 phương án đều tự động có HTTPS miễn phí ✅

---

## 🆘 Khắc phục sự cố

### Lỗi: "404 Not Found"

- **GitHub Pages**: Đợi 2-3 phút sau khi enable
- Kiểm tra đường dẫn: `/app.html` hoặc `/index.html`

### Lỗi: "Build failed"

- **Netlify/Vercel**: Kiểm tra thư mục có đúng file `app.html` không

### URL bị lỗi hoặc không mở được

- Kiểm tra trong Settings → Pages (GitHub)
- Kiểm tra Deploy log (Netlify/Vercel)

---

## 🎉 Hoàn thành

Sau khi deploy xong, bạn sẽ có:

- ✅ Website online 24/7
- ✅ URL để chia sẻ
- ✅ SSL/HTTPS an toàn
- ✅ Hoàn toàn miễn phí
- ✅ Không giới hạn số người truy cập

**Chúc bạn thành công! 🚀**

---

## 📞 Hỗ trợ thêm

Nếu gặp khó khăn:

1. Xem video hướng dẫn deploy Netlify trên YouTube
2. Đọc docs: <https://docs.netlify.com/>
3. Hoặc hỏi AI để được hỗ trợ chi tiết hơn!
