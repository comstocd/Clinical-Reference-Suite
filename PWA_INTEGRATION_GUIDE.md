# PWA Update Mechanism — Integration Guide
## Clinical Reference Suite v2.1

---

## What This Does

| Feature | How It Works |
|---|---|
| **Offline access** | Service Worker caches all HTML files locally on first load |
| **Background updates** | When online, SW silently downloads any changed files |
| **Update notification** | Blue banner appears: "Update available → Update Now / Later" |
| **Offline indicator** | Small chip in corner when you're offline (airplane mode, no wifi) |
| **iPad installable** | "Add to Home Screen" works as a full-screen app with no browser UI |

---

## Files to Add to Your Repo

Place both files in the **repo root** (same folder as `index.html`):

```
Clinical-Reference-Suite/
├── index.html          ← modify (instructions below)
├── manifest.json       ← ADD THIS (provided)
├── sw.js               ← ADD THIS (provided)
└── ... (all your existing HTML files)
```

---

## Step 1: Add `manifest.json` and `sw.js`

Drop both files into your repo root and push to GitHub. GitHub Pages will serve them automatically.

---

## Step 2: Modify `index.html`

Open `index_sw_snippet.html` — it's divided into 4 labeled sections. Add each section to the corresponding location in your `index.html`:

### Section 1 → Inside `<head>`
```html
<link rel="manifest" href="manifest.json">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="ClinRef">
<meta name="theme-color" content="#1e3a5f">
```

### Section 2 → Inside your `<style>` block
Copy the CSS block labeled "Update notification banner" and "Offline indicator".

### Section 3 → Right after `<body>` opens
The two `<div>` elements: `#update-banner` and `#offline-indicator`.

### Section 4 → Just before `</body>` closes
The `<script>` block.

---

## Step 3: Install on iPad

1. Open Safari → navigate to `https://comstocd.github.io/Clinical-Reference-Suite/`
2. Tap the **Share** button (box with arrow) → **"Add to Home Screen"**
3. Name it "ClinRef" or "Clinical Ref" → **Add**
4. The icon appears on your home screen — opens full-screen like a native app

> **Important:** The first load must be on WiFi. This is when the Service Worker
> downloads and caches all files (~15-30 MB depending on suite size).
> After that, it works fully offline.

---

## Your Update Workflow (Day-to-Day)

### When you update clinical content:

```
1. Edit the HTML file (e.g., im_guide.html — update sepsis bundle, etc.)

2. Open sw.js → change CACHE_VERSION:
   FROM:  const CACHE_VERSION = 'crs-v2.1-build28';
   TO:    const CACHE_VERSION = 'crs-v2.1-build29';   ← increment build #

3. git add . && git commit -m "Update: [what you changed]" && git push

4. GitHub Pages deploys in ~1-2 minutes

5. Next time your iPad has any internet connection:
   → SW detects new sw.js → downloads all updated files in background
   → "Update available" banner appears
   → Tap "Update Now" → page reloads with new content
   → Works offline again immediately
```

### That's it. One line change (`CACHE_VERSION`) triggers the whole update cycle.

---

## Version Naming Convention (Recommended)

Use a consistent format so you can correlate updates to guideline changes:

```
crs-v2.1-build29
│   │    │
│   │    └── Increment each push
│   └──────── Suite version (bump for major changes)
└──────────── Prefix (never change — identifies our caches)
```

Consider adding a comment above CACHE_VERSION in sw.js noting what changed:

```javascript
// build29 — Jan 2026: Updated sepsis bundle to SSC 2021,
//            ADA 2025 diabetes standards, AUC vancomycin monitoring
const CACHE_VERSION = 'crs-v2.1-build29';
```

This serves as a running changelog inside the file itself.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Changes not showing after push | Make sure you bumped `CACHE_VERSION` in sw.js |
| Banner not appearing | Check browser console for SW errors; ensure sw.js is in repo root |
| Files not loading offline | First load must complete on WiFi; check PRECACHE_URLS list in sw.js |
| New HTML files not cached offline | Add new file URLs to `PRECACHE_URLS` array in sw.js |
| Want to force re-cache everything | Bump `CACHE_VERSION` — old cache is automatically deleted |

---

## Adding New Files Later

When you add a new HTML file to the suite, add it to the `PRECACHE_URLS` array in `sw.js`:

```javascript
const PRECACHE_URLS = [
  ...
  `${BASE_PATH}/your_new_file.html`,   // ← add here
  ...
];
```

Then bump `CACHE_VERSION` and push.

---

## Technical Notes

- **Cache strategy:** Stale-while-revalidate — always serves from cache instantly
  (fast even on slow hospital wifi), updates cache in background.
- **No server required:** Everything is static GitHub Pages. The SW runs entirely
  in the browser.
- **Storage:** ~15-50 MB depending on total HTML size. Well within iPad limits.
- **Browser support:** Safari on iOS 11.3+ supports Service Workers. iOS 16+ has
  full PWA support (home screen install, standalone mode).
- **Privacy:** No data leaves the device. No analytics, no tracking.
- **GitHub Pages path:** If you ever change the repo name, update `BASE_PATH`
  in sw.js and `start_url`/`scope` in manifest.json.
