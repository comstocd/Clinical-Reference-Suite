# Clinical Reference Suite
### Internal Medicine Point-of-Care Reference — iPad Optimized

**Author:** Dr. David Comstock, PGY-3 Internal Medicine  
**Institution:** Guthrie Lourdes Hospital  
**Current Build:** BUILD #52.4 (core suite) · See per-component table below  
**Live URL:** https://comstocd.github.io/Clinical-Reference-Suite/

---

## Overview

The Clinical Reference Suite is a Progressive Web App (PWA) providing evidence-based clinical decision support at the bedside. It runs fully offline after the first load and automatically updates in the background when internet connectivity is available.

---

## Components

### Core References

| File | Tool | Content | Build |
|---|---|---|---|
| `im_guide.html` | IM Clinical Reference Guide | 338 conditions with evidence-based workups, treatment protocols, embedded calculators | #52.4 |
| `drug_reference_guide.html` | Drug Reference Guide | 280 medications — MOA, dosing, adverse effects, black box warnings, clinical pearls | #52.4 |
| `id_guide.html` | Infectious Disease Guide | Empiric therapy by syndrome, organism-specific coverage, antibiotic spectra, IV-to-PO conversion | #52.4 |
| `lab_values.html` | Laboratory Values Reference | 134 tests — normal ranges, critical values, interpretation pearls, reflex testing | #52.4 |
| `dx_framework.html` | Diagnostic Framework | Presentation-based differentials, red flags, diagnostic algorithms | #52.4 |
| `drug_interactions.html` | Drug Interactions Reference | Warfarin, DOACs, CYP450, QT prolongation, serotonin syndrome | #52.4 |
| `renal_dosing_reference.html` | Renal Dosing Reference | Drug adjustments by CrCl, HD supplementation, drugs to avoid in CKD | #52.4 |
| `body-atlas.html` | ID Body Atlas | Anatomic reference — pathogens by site, antibiotic tissue penetration, empiric therapy by region (18 body regions) | #52.4 |

### Practical Tools

| File | Tool | Content | Build |
|---|---|---|---|
| `abx-companion.html` | ABX Companion | Syndrome-based empiric therapy — Cunha framework, IDSA/ATS/ESCMID guidelines. Last updated 2026-03-21 | #38 |
| `antimicrobial_stewardship_guide.html` | Antimicrobial Stewardship | Empiric therapy by syndrome, de-escalation pathways, IV-to-PO conversion, culture stewardship | #8 |
| `procedures_guide.html` | Procedures Quick Reference | Paracentesis, thoracentesis, lumbar puncture, arthrocentesis with fluid interpretation | #30 |
| `pathogen-index.html` | Pathogen Index | 85 organisms — searchable index linking each pathogen to every condition where it appears | — |
| `audio-companion.html` | ID Audio Companion | Commute-friendly lecture and flashcard modes for all 18 body regions. Offline capable | — |

### Consult Note Templates

| File | Tool | Content | Build |
|---|---|---|---|
| `cardiology_consult.html` | Cardiology Consult | HFpEF diagnostic algorithms (H₂FPEF, HFA-PEFF, ABA scores), echo interpretation, GDMT optimization | #33 |
| `id_consult.html` | ID Consult | Culture review, MDR risk assessment, source control, duration guidance, OPAT plan, note generation | #33 |
| `nephrology_consult.html` | Nephrology Consult | KDIGO staging, urinalysis interpretation, FENa reference, AEIOU dialysis indications | #33 |
| `rheumatology_consult.html` | Rheumatology Consult | Joint pattern recognition, autoantibody interpretation, synovial fluid analysis, classification criteria | #33 |
| `endo_consult.html` | Endocrinology Consult | Glycemic management, thyroid, adrenal, calcium/bone, pituitary — note generation | #33 |
| `neuro_consult.html` | Neurology Consult | NIHSS, tPA/thrombectomy criteria, TOAST, seizure, GBS, myasthenic crisis, CSF patterns | #33 |

### Clinical Note Templates

| File | Tool | Content | Build |
|---|---|---|---|
| `inpatient_note.html` | Inpatient Note | H&P, Progress Note, Discharge Summary. 32 emergency condition screens. AI-assisted A&P | #33 |
| `op_note.html` | Outpatient IM Note | 5 visit types, OLDCARTS HPI, 14-system ROS, preventive care tracker, E&M coding | #33 |

---

## Build Versioning

Components advance independently. The version in `sw.js` controls the PWA cache update cycle — increment it whenever any file changes. Each component displays its own build number in the header via `postMessage` from the service worker.

**Current build numbers by component group:**

| Group | Build | Files |
|---|---|---|
| Core References | #52.4 | im_guide, drug_reference, id_guide, lab_values, dx_framework, drug_interactions, renal_dosing, body-atlas |
| ABX Companion | #38 | abx-companion |
| Consult Notes + Clinical Notes | #33 | cardiology/id/nephrology/rheumatology/endo/neuro consults, inpatient_note, op_note |
| Procedures | #30 | procedures_guide |
| Stewardship | #8 | antimicrobial_stewardship_guide |

To update `sw.js` after any content change:
```javascript
const DISPLAY_VERSION = 'BUILD #52.4';   // update to match highest component build
const CACHE_VERSION   = 'crs-v3.7-build52.4';
```

---

## ABIM Study Guides Module

Located in `ABIM Study Guides/` — a separate board review suite with its own index (`study_guides_index.html`) and per-specialty HTML files. Covers all major IM subspecialties, most with an audio companion version.

**Specialties covered:** Allergy-Immunology, Cardiology, Critical Care, Dermatology, Endocrinology, Gastroenterology, General IM, Geriatrics, Heme-Onc, High Value Care, Infectious Disease, Nephrology, Neurology, Palliative Care, Perioperative Medicine, Psychiatry, Pulmonology, Rheumatology, Women's Health.

Access via `ABIM Study Guides/index.html` (not linked from the main suite index).

---

## Technical Architecture

### PWA / Offline Functionality
The suite operates as a Progressive Web App using a Service Worker (`sw.js`) for offline caching. All files are pre-cached on first load and served locally thereafter — no internet connection required for clinical use.

**Cache strategy:** Stale-while-revalidate — content is always served from cache instantly, with background revalidation when online.

**Install on iPad:** Open in Safari → Share → Add to Home Screen. Opens full-screen with no browser UI.

### Cross-Linking
The IM Guide and Drug Reference Guide are cross-linked via 80+ inline links. Clicking a drug name in a condition opens its full monograph in the Drug Reference Guide. Lab Values are cross-linked to relevant IM conditions. The Body Atlas and Pathogen Index link directly into the ID Guide.

---

## Update Workflow

To push a clinical content update:

1. Edit the relevant HTML file(s) in GitHub
2. Open `sw.js` and increment both version strings to match the highest component build
3. Commit both changes
4. Open the site once in Safari on WiFi — update downloads in background
5. All version displays throughout the app update automatically

To add a new tool/file to the suite:
1. Add the HTML file to the repo
2. Add an entry to the `tools` array in `index.html`
3. Add the tool ID to the appropriate `NAV_SECTIONS` group in `index.html`
4. Add the file path to `PRECACHE_URLS` in `sw.js`
5. Increment the build number and push

---

## Evidence Sources

Content is aligned with current guidelines from:

- Surviving Sepsis Campaign 2021
- ACC/AHA Guidelines (ACS 2023, HF 2022, Valvular 2021, Perioperative 2022)
- IDSA Guidelines (CAP 2019, Endocarditis, MRSA, HAP/VAP)
- ASHP/IDSA/SIDP Vancomycin Consensus Guidelines 2020
- ADA Standards of Care 2025
- KDIGO Guidelines (AKI 2012, CKD 2024)
- ACR Guidelines
- ATS/ESCMID Guidelines
- ASH Guidelines
- UpToDate, Harrison's Principles of Internal Medicine
- NEJM, JAMA, Lancet — key trials (SMART, BaSICS, PLUS, ARDS Net, PROSEVA, PLATO, EMPEROR-Preserved, DELIVER, SHIFT, VASST, SOAP II, NICE-SUGAR, PEPTIC, ACORN, PLASMIC/HERCULES)

---

## File Structure

```
Clinical-Reference-Suite/
├── index.html                          # Main hub — navigation, home tiles, PWA shell
├── sw.js                               # Service Worker — versioning, caching, updates
├── manifest.json                       # PWA manifest — home screen install, icons
├── README.md                           # This file
│
├── Core References
│   ├── im_guide.html                   # IM Clinical Reference Guide (338 conditions)
│   ├── drug_reference_guide.html       # Drug Reference Guide (280 medications)
│   ├── id_guide.html                   # Infectious Disease Guide
│   ├── lab_values.html                 # Laboratory Values (134 tests)
│   ├── dx_framework.html               # Diagnostic Framework
│   ├── drug_interactions.html          # Drug Interactions Reference
│   ├── renal_dosing_reference.html     # Renal Dosing Reference
│   └── body-atlas.html                 # ID Body Atlas (18 anatomic regions)
│
├── Practical Tools
│   ├── abx-companion.html              # ABX Companion — Cunha framework
│   ├── antimicrobial_stewardship_guide.html
│   ├── procedures_guide.html
│   ├── pathogen-index.html             # 85-organism searchable index
│   └── audio-companion.html            # ID Audio Companion (lecture + flashcard modes)
│
├── Consult Templates
│   ├── cardiology_consult.html
│   ├── id_consult.html
│   ├── nephrology_consult.html
│   ├── rheumatology_consult.html
│   ├── endo_consult.html
│   └── neuro_consult.html
│
├── Clinical Note Templates
│   ├── inpatient_note.html             # H&P / Progress Note / Discharge Summary
│   └── op_note.html                    # Outpatient IM Note (5 visit types)
│
└── ABIM Study Guides/                  # Board review module (separate index)
    ├── study_guides_index.html
    └── [19 specialty guides + audio companions]
```

---

## Build History

| Build | Date | Changes |
|---|---|---|
| BUILD #52.4 | 2026 | Core reference expansion — Body Atlas added; IM Guide, Drug Reference, ID Guide, Lab Values, Dx Framework, Renal Dosing all updated |
| BUILD #38 | 2026-03-21 | ABX Companion — Cunha framework, IDSA/ATS/ESCMID content |
| BUILD #33 | 2026 | All consult note templates + clinical note templates (endo, neuro, inpatient, outpatient) |
| BUILD #30 | Feb 2026 | Unified versioning system — single source of truth in sw.js |
| BUILD #28 | Jan 2026 | PWA implementation — Service Worker offline caching, background updates, iPad home screen install |
| BUILD #27 and earlier | 2025–2026 | Clinical content development — 338 conditions, 280 medications, consult templates, specialty guides |

---

*This suite is intended as a clinical reference tool and does not replace clinical judgment. Always verify critical information against primary sources and institutional protocols.*
