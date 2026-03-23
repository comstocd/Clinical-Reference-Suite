# Clinical Reference Suite
### Internal Medicine Point-of-Care Reference — iPad Optimized

**Author:** Dr. David Comstock, PGY-3 Internal Medicine  
**Institution:** Guthrie Lourdes Hospital  
**Current Build:** BUILD #48  
**Live URL:** https://comstocd.github.io/Clinical-Reference-Suite/

---

## Overview

The Clinical Reference Suite is a Progressive Web App (PWA) providing evidence-based clinical decision support at the bedside. It runs fully offline after the first load and automatically updates in the background when internet connectivity is available.

---

## Components

### Core References

| File | Tool | Content | Build |
|---|---|---|---|
| `im_guide.html` | IM Clinical Reference Guide | 338 conditions with evidence-based workups, treatment protocols, embedded calculators | v3.7 |
| `drug_reference_guide.html` | Drug Reference Guide | 280 medications — MOA, dosing, adverse effects, black box warnings, clinical pearls | v1.4 |
| `id_guide.html` | Infectious Disease Guide | Empiric therapy by syndrome, organism-specific coverage, antibiotic spectra, IV-to-PO conversion | v2.0 |
| `lab_values.html` | Laboratory Values Reference | 134 tests — normal ranges, critical values, interpretation pearls, reflex testing |  |
| `dx_framework.html` | Diagnostic Framework | Presentation-based differentials, red flags, diagnostic algorithms |  |
| `drug_interactions.html` | Drug Interactions Reference | Warfarin, DOACs, CYP450, QT prolongation, serotonin syndrome |  |
| `procedures_guide.html` | Procedures Quick Reference | Paracentesis, thoracentesis, lumbar puncture, arthrocentesis with fluid interpretation |  |

### Practical Tools

| File | Tool | Content |
|---|---|---|
| `antimicrobial_stewardship_guide.html` | Antimicrobial Stewardship | Empiric therapy by syndrome, de-escalation pathways, IV-to-PO conversion, culture stewardship |
| `renal_dosing_reference.html` | Renal Dosing Reference | Drug adjustments by CrCl, HD supplementation, drugs to avoid in CKD |

### Consult Note Templates

| File | Tool | Content |
|---|---|---|
| `cardiology_consult.html` | Cardiology Consult | HFpEF diagnostic algorithms (H₂FPEF, HFA-PEFF, ABA scores), echo interpretation, GDMT optimization |
| `id_consult.html` | ID Consult | Culture review, MDR risk assessment, source control, duration guidance, one-click note generation |
| `nephrology_consult.html` | Nephrology Consult | KDIGO staging, urinalysis interpretation, FENa reference, AEIOU dialysis indications |
| `rheumatology_consult.html` | Rheumatology Consult | Joint pattern recognition, autoantibody interpretation, synovial fluid analysis, classification criteria |

---

## Technical Architecture

### PWA / Offline Functionality
The suite operates as a Progressive Web App using a Service Worker (`sw.js`) for offline caching. All files are pre-cached on first load and served locally thereafter — no internet connection required for clinical use.

**Cache strategy:** Stale-while-revalidate — content is always served from cache instantly, with background revalidation when online.

**Install on iPad:** Open in Safari → Share → Add to Home Screen. Opens full-screen with no browser UI.

### Versioning System
Version is controlled by a single source of truth in `sw.js`. All version displays throughout the app — the suite header, home tiles, and each component's internal header — update automatically from this file.

```javascript
// sw.js — only two lines to change per update
const DISPLAY_VERSION = 'BUILD #30';
const CACHE_VERSION   = 'crs-v3.7-build30';
```

When an update is pushed and the iPad next connects to WiFi, the Service Worker downloads the new version in the background. Opening the app from the home screen afterward runs the updated content.

### Cross-Linking
The IM Guide and Drug Reference Guide are cross-linked via 80+ inline links. Clicking a drug name in a condition opens its full monograph in the Drug Reference Guide. Lab Values are cross-linked to relevant IMCRG conditions.

---

## Update Workflow

To push a clinical content update:

1. Edit the relevant HTML file(s) in GitHub
2. Open `sw.js` and increment both version strings:
   - `DISPLAY_VERSION = 'BUILD #30'` → `'BUILD #31'`
   - `CACHE_VERSION = 'crs-v3.7-build30'` → `'crs-v3.7-build31'`
3. Commit both changes
4. Open the site once in Safari on WiFi — update downloads in background
5. All version displays throughout the app update automatically

To add a new tool/file to the suite:
1. Add the HTML file to the repo
2. Add an entry to the `tools` array in `index.html`
3. Add the file path to `PRECACHE_URLS` in `sw.js`
4. Increment the build number and push

---

## Evidence Sources

Content is aligned with current guidelines from:

- Surviving Sepsis Campaign 2021
- ACC/AHA Guidelines (ACS 2023, HF 2022, Valvular 2021, Perioperative 2022)
- IDSA Guidelines (CAP 2019, Endocarditis, MRSA 2011)
- ASHP/IDSA/SIDP Vancomycin Consensus Guidelines 2020
- ADA Standards of Care 2025
- KDIGO Guidelines (AKI 2012, CKD 2024)
- ACR Guidelines
- ATS Guidelines
- ASH Guidelines
- UpToDate, Harrison's Principles of Internal Medicine
- NEJM, JAMA, Lancet — key trials (SMART, BaSICS, PLUS, ARDS Net, PROSEVA, PLATO, EMPEROR-Preserved, DELIVER, SHIFT, VASST, SOAP II, NICE-SUGAR, PEPTIC, ACORN, PLASMIC/HERCULES)

---

## File Structure

```
Clinical-Reference-Suite/
├── index.html                        # Main hub — navigation, home tiles, PWA shell
├── sw.js                             # Service Worker — versioning, caching, updates
├── manifest.json                     # PWA manifest — home screen install, icons
├── README.md                         # This file
│
├── Core References
│   ├── im_guide.html                 # IM Clinical Reference Guide (338 conditions)
│   ├── drug_reference_guide.html     # Drug Reference Guide (280 medications)
│   ├── id_guide.html                 # Infectious Disease Guide
│   ├── lab_values.html               # Laboratory Values (134 tests)
│   ├── dx_framework.html             # Diagnostic Framework
│   ├── drug_interactions.html        # Drug Interactions Reference
│   └── procedures_guide.html         # Procedures Quick Reference
│
├── Practical Tools
│   ├── antimicrobial_stewardship_guide.html
│   └── renal_dosing_reference.html
│
└── Consult Templates
    ├── cardiology_consult.html
    ├── id_consult.html
    ├── nephrology_consult.html
    └── rheumatology_consult.html
```

---

## Build History

| Build | Date | Changes |
|---|---|---|
| BUILD #30 | Feb 2026 | Unified versioning system — single source of truth in sw.js, all components update automatically |
| BUILD #29 | Feb 2026 | Sepsis section updated to SSC 2021 — Hour-1 bundle, stratified antibiotic timing, balanced crystalloid evidence (SMART/BaSICS/PLUS), vasopressor guidance (SOAP II), vitamin C/bicarb recommendations |
| BUILD #28 | Jan 2026 | PWA implementation — Service Worker offline caching, background updates, iPad home screen install |
| BUILD #27 and earlier | 2025–2026 | Clinical content development — 338 conditions, 280 medications, consult templates, specialty guides |

---

*This suite is intended as a clinical reference tool and does not replace clinical judgment. Always verify critical information against primary sources and institutional protocols.*
