# Intern Year — 實習生存日誌

一個專為 GitHub Pages 準備的簡潔 Jekyll 網站。文章使用 Markdown 撰寫，不需要修改網頁程式。

## 每天新增一篇實習日記

1. 複製 `_posts/2026-09-08-first-chest-xray.md`。
2. 檔名改成 `年-月-日-英文短標題.md`，例如 `2026-09-09-first-round.md`。
3. 修改檔案最上方兩條 `---` 之間的資料，再從第二條 `---` 下方開始寫正文。
4. 把變更存到 GitHub；通常一兩分鐘後網站就會更新。

可直接複製這個格式：

```markdown
---
title: "今天的標題"
date: 2026-09-09 20:30:00 +0800
department: 胸腔外科
day: 3
summary: "首頁會出現的一句摘要。"
tags:
  - 胸外
  - 實習日記
---

今天發生了什麼……

## 今天學到的事

正文寫在這裡。
```

## 新增一篇 Notes

複製 `_notes/pulmonary-edema-cxr.md`，修改檔名和內容即可。Notes 不需要在檔名中加入日期，但檔案內要保留 `date`。

## 第一次發布到 GitHub Pages

1. 登入 GitHub，建立一個新的 public repository。如果想用最短網址，名稱設為 `你的帳號.github.io`。
2. 選擇 **uploading an existing file**，把本資料夾中的所有檔案與資料夾上傳；包含 `_config.yml`、以下底線開頭的資料夾和 `.github`。
3. 打開 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 中，把 Source 設為 **GitHub Actions**。
5. 回到 **Actions** 頁面，等待 `Deploy Jekyll site to Pages` 出現綠色勾勾。
6. 網址會是 `https://你的帳號.github.io/`。若 repository 使用其他名稱，網址則是 `https://你的帳號.github.io/repository名稱/`，並需將 `_config.yml` 的 `baseurl` 改成 `/repository名稱`。

## 個人化

- 網站名稱與副標：修改 `_config.yml` 中的 `title`、`tagline`。
- About 內容：修改 `about.md`。
- 顏色：修改 `assets/css/style.css` 最上方的色彩變數。

## 病人隱私提醒

不要公開姓名、病歷號、生日、床號、可辨識照片，或能藉由罕見疾病、精確年齡、日期、醫院與科別組合辨識病人的資訊。病例內容應充分去識別化，並遵守實習醫院規範。

