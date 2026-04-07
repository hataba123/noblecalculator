# Huong dan tach NobleCalculator sang React Native

Tai lieu nay huong dan cach tach code hien tai thanh:
- phan `core` dung chung cho web va React Native
- phan `web` giu cho Next.js
- phan `mobile` viet lai bang React Native / Expo

Muc tieu la giu lai logic tinh toan, loai bo phu thuoc web, va tranh viet lai cong thuc o nhieu noi.

## 1. Cai gi giu lai duoc

Nhung phan nay co the di chung sang React Native neu van la TypeScript thuan:

| Nguon hien tai | Nen giu lai | Ghi chu |
| --- | --- | --- |
| `src/features/calculators/*/formula.ts` | Ham tinh toan | Day la logic core, nen tach ra thanh package dung chung |
| `src/features/calculators/*/schema.ts` | Kieu input/output | Khong phu thuoc UI |
| `src/features/calculators/*/config.ts` | Default value, label, metadata | Chi nen giu neu file khong dung JSX hay browser API |
| `src/features/calculators/*/content.ts` | Noi dung text | Co the dung chung neu la chuoi / du lieu thuan |
| `src/lib/format.ts` | Dinh dang so, tien te, phan tram | Can kiem tra lai tuong thich voi RN `Intl` |
| `src/features/calculators/shared/calculator-registry.ts` | Danh sach calculator | Neu chi la data, co the share cho web va mobile |

## 2. Cai phai viet lai

Nhung phan sau phu thuoc ro vao Next.js hoac browser, nen phai tao ban RN rieng:

- `src/app/*`
- `next/link`, `next/navigation`, `next/script`, `next/font`
- `Metadata`, `MetadataRoute`, `robots.ts`, `sitemap.ts`
- tat ca UI dang dung DOM, `window`, `document`, `localStorage`, `matchMedia`
- cac component dung className Tailwind tren the HTML
- analytics, SEO, Open Graph, Twitter card

## 3. Cau truc de xuat

Neu muon dung chung lau dai, nen chuyen theo monorepo:

```text
apps/
  web/                # Next.js hien tai
  mobile/             # Expo / React Native

packages/
  calculators-core/   # schema + formula + config + registry
  shared-format/      # formatCurrency, formatPercent, helper dung chung
  shared-i18n/        # translator, message catalog neu can
```

Neu chua muon tach monorepo ngay, co the tam thoi dung ngay trong repo nay:

```text
src/
  shared/
    calculators/
    format/
    i18n/
  web/
  mobile/
```

## 4. Thu tu tach

Lam theo thu tu nay de giam rui ro:

1. Tach `schema.ts` va `formula.ts` ra khoi tung calculator thanh core thuan.
2. Chuyen `config.ts` va `content.ts` neu no chi chua du lieu.
3. Tao layer import cho web de van su dung core moi, thuong bang mot file `core.ts` trong tung calculator de UI import qua mot layer duy nhat.
4. Tao UI primitives cho mobile: `View`, `Text`, `TextInput`, `Pressable`, roi gom chung qua `src/mobile/index.ts`.
5. Port tung calculator mot, bat dau tu calculator don gian nhat.
6. Noi registry vao navigation cua app mobile.
7. Giu lai test cho cong thuc core, bo sung test moi neu can.

## 5. Vi du voi `profit-margin`

Hien tai module nay dang theo chuoi:

`calculator.tsx` -> `formula.ts` + `form.tsx` + `result.tsx`

Nen tach thanh:

- `core/profit-margin/schema.ts`
- `core/profit-margin/formula.ts`
- `core/profit-margin/config.ts`
- `web/profit-margin/*.tsx` cho giao dien Next.js
- `mobile/profit-margin/*.tsx` cho giao dien React Native

Phan core chi can tra ve du lieu thuan:

```ts
export function calculateProfitMargin({ revenue, cost }) {
  const profit = revenue - cost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
  const markup = cost > 0 ? (profit / cost) * 100 : 0;

  return { profit, margin, markup };
}
```

Phan mobile se lam viec voi input UI rieng, nhung dung chung ham tinh toan va ham format.

## 6. Rule tach an toan

Khi tach, giu cac rule nay:

- khong import `next/*` vao core
- khong dung `window`, `document`, `localStorage`, `navigator` trong core
- cong thuc phai la ham thuan, nhan input va tra output
- component UI chi nhan props va render, khong nen nam cong thuc
- moi calculator nen co test cho `formula.ts`

## 7. Check list truoc khi port sang mobile

- [ ] `formula.ts` khong con bat cu browser API nao
- [ ] `schema.ts` chi chua type
- [ ] `config.ts` chi chua data thuan
- [ ] format helper chay duoc tren RN
- [ ] UI mobile import qua mot layer duy nhat, vi du `src/mobile/index.ts`
- [ ] registry khong phu thuoc route web
- [ ] moi calculator co 1 entry diem mobile rieng
- [ ] UI mobile dung primitives cua React Native, khong dung DOM

## 8. Lien quan trong repo nay

Tai lieu nay khop voi cach du an dang hoat dong trong:

- [README.md](README.md)
- [dataflow.md](dataflow.md)
- `src/features/calculators/profit-margin/`
- `src/features/calculators/shared/calculator-registry.ts`
- `src/mobile/index.ts`

## 9. Neu muon lam tiep

Buoc tiep theo hop ly nhat la:

1. port `bmi` sang mobile truoc, vi no it input nhat va de test flow nhat
2. tao skeleton Expo / React Native
3. noi lai 1 man hinh mobile dau tien de test flow
