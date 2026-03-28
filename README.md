# noblecalculator
Khi bắt đầu ngày làm việc
git checkout main
git pull origin main

Tạo branch cho task mới
git checkout -b feat/tools-directory

Làm code, rồi commit
git add .
git commit -m "feat: add tools directory page"

Push branch
git push -u origin feat/tools-directory

Làm tiếp calculator khác
git checkout main
git pull origin main
git checkout -b feat/profit-margin-calculator

Nhớ nhanh các type hay dùng
feat → thêm tính năng mới
fix → sửa lỗi
docs → sửa tài liệu, README, guide
chore → việc lặt vặt/config/setup
refactor → sửa cấu trúc code nhưng không thêm tính năng, không fix bug
test → thêm/sửa test

# NobleCalculator

NobleCalculator là một dự án web xây bằng **Next.js** nhằm tạo ra bộ **financial calculators** cho freelancer, agency, startup nhỏ và business owner.  
Mục tiêu của dự án là ra mắt nhanh các công cụ có nhu cầu tìm kiếm tốt, dễ SEO, dễ tạo lead, và có khả năng mở rộng sang các tính năng kiếm tiền như tích hợp kế toán, thanh toán và báo giá.

## Mục tiêu sản phẩm

Dự án tập trung vào 3 mục tiêu chính:

- Xây một bộ calculator tài chính chạy nhanh, giao diện đơn giản, dễ dùng
- Tối ưu để mỗi calculator có thể rank SEO như một landing page riêng
- Chuẩn bị sẵn kiến trúc để sau này tích hợp với **QuickBooks**, **Xero**, **Wise** và các luồng monetization khác

## Hướng đi phát triển

NobleCalculator sẽ được triển khai theo 3 đợt.

### Đợt 1: nhóm tool dễ rank, dễ kiếm tiền
Đây là nhóm công cụ ưu tiên ra mắt đầu tiên vì có nhu cầu thực tế cao và dễ nối sang hệ sinh thái kế toán/thanh toán.

- Profit Margin
- Markup
- Freelance Hourly Rate
- VAT Calculator
- Invoice Calculator
- International Transfer Fee

### Đợt 2: nhóm tool support
Nhóm này giúp mở rộng traffic và tăng internal linking cho toàn hệ thống.

- Break-even
- Gross to Net
- Net to Gross
- Late Payment Fee
- Payment Processing Fee
- ROI
- ROAS
- Website Cost

### Đợt 3: nhóm tool chuyên sâu hơn
Nhóm này phục vụ sâu hơn cho freelancer, agency, marketing và business planning.

- Self-employed Tax Estimator
- Utilization Rate
- Monthly Income Target
- CAC
- CPM/CPC
- Day Rate to Hourly Rate

## Triết lý kiến trúc

Dự án được thiết kế theo hướng **lean MVP nhưng dễ scale**.

Nguyên tắc chính:

- Mỗi calculator là một module độc lập
- Routing tách khỏi business logic
- Các phần dùng chung như format số, công thức chung, shell UI được gom vào `shared`
- Cấu trúc đơn giản để ra mắt nhanh, nhưng đủ sạch để mở rộng sau này
## Cấu trúc dự án

```
src/
├─ app/
│  ├─ page.tsx                      # Homepage
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ tools/
│  │  ├─ page.tsx                   # Danh sách toàn bộ calculators
│  │  └─ [slug]/
│  │     └─ page.tsx                # Chi tiết calculator động
│  └─ api/
│     └─ calculators/
│        └─ route.ts
│
├─ components/
│  ├─ ui/                           # Base components
│  └─ shared/                       # Reusable blocks
│     ├─ app-header.tsx
│     ├─ app-footer.tsx
│     ├─ calculator-shell.tsx
│     ├─ result-card.tsx
│     └─ tool-card.tsx
│
├─ features/
│  ├─ calculators/
│  │  ├─ shared/                    # Logic dùng chung
│  │  │  ├─ types.ts
│  │  │  ├─ helpers.ts
│  │  │  ├─ constants.ts
│  │  │  └─ calculator-registry.ts
│  │  ├─ profit-margin/             # Mỗi calculator
│  │  ├─ markup/
│  │  ├─ freelance-hourly-rate/
│  │  ├─ vat-calculator/
│  │  ├─ invoice-calculator/
│  │  └─ international-transfer-fee/
│  │
│  └─ integrations/                 # Future: QuickBooks, Xero, Wise
│     ├─ quickbooks/
│     ├─ xero/
│     └─ wise/
│
├─ lib/
│  ├─ utils.ts
│  ├─ format.ts                     # Format số & tiền tệ
│  └─ metadata.ts                   # SEO metadata
│
├─ config/
│  ├─ site.ts                       # Thông tin site
│  └─ tools.ts                      # Danh sách tools & metadata
│
└─ tests/
   └─ calculators/                  # Test công thức
```

### Giải thích chi tiết

#### `app/`
App Router tương ứng với Next.js 13+
- `page.tsx`: Homepage chính
- `tools/page.tsx`: Trang danh sách toàn bộ calculators
- `tools/[slug]/page.tsx`: Trang động cho từng calculator riêng
- `api/`: Backend logic, calculator endpoints, tích hợp bên ngoài

#### `components/`
Thành phần UI tái sử dụng
- `ui/`: Base components (input, button, card, v.v.)
- `shared/`: Reusable blocks như header, footer, shell layout, result card, tool card

#### `features/calculators/`
**Core business logic của dự án**

**Mỗi calculator bao gồm:**
```
profit-margin/
├─ formula.ts          # Công thức tính
├─ schema.ts           # Validation input (Zod)
├─ config.ts           # Title, description, default values
├─ form.tsx            # Giao diện nhập liệu
├─ result.tsx          # Giao diện hiển thị kết quả
└─ index.ts            # Export module
```

**`shared/`** chứa:
- Types, constants, helpers dùng chung
- Registry để quản lý toàn bộ calculators

#### `features/integrations/`
Chuẩn bị sẵn cho tích hợp:
- QuickBooks
- Xero
- Wise

*(Chưa phải ưu tiên MVP, nhưng kiến trúc để mở rộng sau)*

#### `lib/`
Utilities cấp ứng dụng:
- Format số, tiền tệ
- Metadata SEO
- Helper functions dùng chung

#### `config/`
Cấu hình tĩnh:
- `site.ts`: Thông tin chung về site
- `tools.ts`: Danh sách & metadata từng calculator (slug, title, description, category)

#### `tests/`
Test cho công thức của từng calculator để đảm bảo độ chính xác

### Vì sao chọn cấu trúc này

Cấu trúc này được chọn vì phù hợp với 4 yêu cầu chính của dự án:

- **Ra nhanh**: không over-engineer
- **Dễ scale**: thêm tool mới bằng cách thêm module mới
- **Dễ SEO**: mỗi tool có page riêng
- **Dễ monetization**: có sẵn chỗ để nối integrations và lead flows

---
## Roadmap ngắn hạn

### Phase 1: MVP - 6 calculators core
- Khởi tạo project bằng Next.js
- Setup GitHub repo
- Dựng folder structure
- Làm trang homepage
- Làm tools directory
- Build 6 calculators đầu tiên:
  - Profit Margin
  - Markup
  - Freelance Hourly Rate
  - VAT Calculator
  - Invoice Calculator
  - International Transfer Fee

### Phase 2: Expansion - 8 support tools
- Thêm 8 calculators support tools
- Bổ sung internal linking giữa các tools
- Cải thiện metadata và SEO content

### Phase 3: Professional tools & Monetization
- Thêm 6 calculators chuyên sâu
- Bắt đầu tích hợp QuickBooks, Xero, Wise
- Nghiên cứu các hướng monetization (export, premium features, API)

---
## Định hướng monetization

Các hướng kiếm tiền tiềm năng của NobleCalculator:

- **Lead generation** cho freelancer và small business
- **Affiliate/Referral** tới công cụ kế toán/thanh toán
- **Tích hợp QuickBooks / Xero / Wise**
- **Premium calculator features**
- **Export** invoice / report / saved history
- **SaaS dashboard** cho người dùng đăng nhập

---

## Tech stack

**Core:**
- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Git + GitHub

**Future additions:**
- Zod (validation)
- React Hook Form (form handling)
- Prisma (ORM)
- PostgreSQL (database)
- Stripe (payments)
- Clerk / NextAuth (authentication)

---

## Nguyên tắc phát triển

- ✅ Ưu tiên ship nhanh bản chạy được
- ✅ Mỗi tool phải có công thức rõ ràng và test được
- ✅ Không over-engineer cấu trúc quá sớm
- ✅ Ưu tiên module hóa để dễ thêm tool mới
- ✅ Luôn giữ codebase sạch, dễ đọc, dễ mở rộng

---

## Trạng thái hiện tại

Dự án đang ở giai đoạn **nền tảng**:

- ✅ Đã xác định hướng sản phẩm
- ✅ Đã chốt naming: noblecalculator
- ✅ Đã khởi tạo project và repo
- 🔄 Đang triển khai cấu trúc lean MVP để bắt đầu build Phase 1

