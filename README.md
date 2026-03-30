# Clinical Reference Suite
### Internal Medicine Point-of-Care Reference — iPad Optimized

**Author:** Dr. David Comstock, Internal Medicine  
**Institution:** Guthrie Lourdes Hospital  
**Current Build:** BUILD #49  
**Live URL:** https://comstocd.github.io/Clinical-Reference-Suite/

---

## Overview

The Clinical Reference Suite is a Progressive Web App (PWA) providing evidence-based clinical decision support at the bedside. It runs fully offline after the first load and automatically updates in the background when internet connectivity is available.

---

## Components

### Core References

| File | Tool | Content | Build |
|---|---|---|---|
| `im_guide.html` | IM Clinical Reference Guide | 338 conditions with evidence-based workups, treatment protocols, embedded calculators, ICU escalation and discharge criteria call-out boxes | v3.7 |
| `drug_reference_guide.html` | Drug Reference Guide | 280 medications — MOA, dosing, adverse effects, black box warnings, clinical pearls | v1.4 |
| `id_guide.html` | Infectious Disease Guide | Fully restructured — organ system grid navigation, 6-step clinical flow, 200+ collapsible panels, SSC 2026 sepsis, ATS 2025 CAP, IDSA 2025 UTI, call-out boxes for reconsider/escalate/de-escalate | v4.0 |
| `lab_values.html` | Laboratory Values Reference | 134 tests — normal ranges, critical values, interpretation pearls, reflex testing | |
| `dx_framework.html` | Diagnostic Framework | Presentation-based differentials, red flags, diagnostic algorithms | |
| `drug_interactions.html` | Drug Interactions Reference | Warfarin, DOACs, CYP450, QT prolongation, serotonin syndrome | |
| `procedures_guide.html` | Procedures Quick Reference | Paracentesis, thoracentesis, lumbar puncture, arthrocentesis with fluid interpretation | |

### Practical Tools

| File | Tool | Content |
|---|---|---|
| `antimicrobial_stewardship_guide.html` | Antimicrobial Stewardship | Empiric therapy by syndrome, de-escalation pathways, IV-to-PO conversion, culture stewardship |
| `renal_dosing_reference.html` | Renal Dosing Reference | Drug adjustments by CrCl, HD supplementation, drugs to avoid in CKD |
| `abx-companion.html` | ABX Companion | Antibiotic spectra, dosing, organism coverage at a glance |
| `pathogen-index.html` | Pathogen Index | Organism-first lookup — search by pathogen, get condition-level links and treatment pearls |
| `body-atlas.html` | Body Atlas | Visual anatomic reference |
| `audio-companion.html` | Audio Companion | Audio learning companion |

### Consult Note Templates (AI-powered)

All consult templates use the Anthropic API (Claude Sonnet) for AI auto-fill — enter a diagnosis and receive evidence-based recommendations, dosing, workup, and monitoring protocols.

| File | Tool | Content |
|---|---|---|
| `cardiology_consult.html` | Cardiology Consult | HFpEF diagnostic algorithms (H₂FPEF, HFA-PEFF, ABA scores), echo interpretation, GDMT optimization |
| `id_consult.html` | ID Consult | Culture review, MDR risk assessment, source control, duration guidance, one-click note generation |
| `nephrology_consult.html` | Nephrology Consult | KDIGO staging, urinalysis interpretation, FENa reference, AEIOU dialysis indications |
| `rheumatology_consult.html` | Rheumatology Consult | Joint pattern recognition, autoantibody interpretation, synovial fluid analysis, classification criteria |
| `endo_consult.html` | Endocrinology Consult | Diabetes management, thyroid, adrenal, pituitary |
| `neuro_consult.html` | Neurology Consult | Stroke, seizure, altered mental status protocols |
| `inpatient_note.html` | Inpatient Note | Structured inpatient progress note template |
| `op_note.html` | Outpatient Note | Outpatient encounter note template |

---

## ID Guide — v4.0 (BUILD #49)

The Infectious Disease Guide was comprehensively rebuilt in March 2026.

### Navigation
- **Organ system grid** at the top (identical pattern to IM guide) — 11 columns with condition-level links, urgent conditions marked with red dot, direct scroll-and-open to specific panels
- **Real-time search** filters the organ grid as you type
- **6-step clinical flow nav strip** (fixed below header): Recognize → Empiric → Cultures → Syndromes → Populations → Stewardship
- Step nav highlights active section on scroll

### Content (202 collapsible panels)
- **Urgency ordering** within each anatomy group: time-critical conditions first (red header), routine conditions below divider
- **Call-out boxes** on all major high-yield syndromes: 🔄 Reconsider diagnosis/antibiotic · 🚨 Escalate/surgical consultation · ✓ Step down/de-escalate
- **Anatomy groups:** Endovascular · CNS · Respiratory · GI/Hepatobiliary · GU & STI · MSK & Spinal · Skin & SSTI · Perioperative · Travel & Vectors
- **Special populations (Step 5):** Neutropenic fever · SOT infections by time post-transplant · Biologic therapy infection risks · HIV/OIs · Fungal · Viral
- **Reference sections:** Pregnancy antibiotic/antifungal/antiviral safety · ID drug interactions (azoles, rifampin, QT) · Serologic testing interpretation (HBV, HIV, CMV, EBV) · Resistance mechanisms (ESBL, KPC, MBL, MCR)

### Conditions added in v4.0 (selected)
Fournier's gangrene · Mycotic aneurysm · Vascular graft infection · VP shunt/EVD infection · Subdural empyema · Neurocysticercosis · Psoas abscess · Septic bursitis · Reactive arthritis · Renal/perinephric abscess · Endometritis/chorioamnionitis · Infected pancreatic necrosis · Splenic abscess · Amebiasis · Hepatitis B/C (inpatient) · Epiglottitis · Orbital cellulitis · Deep neck space infections · Human/animal bites · Pyomyositis · Erysipelas · Melioidosis · Q fever/Scrub typhus · Zika · Chikungunya · Endophthalmitis

### Guidelines updated in v4.0
- **Sepsis:** Surviving Sepsis Campaign **2026** — stratified antibiotic timing framework, qSOFA downgraded for screening, peripheral vasopressors, MAP 60–65 mmHg in elderly, anaerobic coverage guidance, ICU admission within 6h
- **CAP:** ATS **2025** update noted (IDSA did not endorse two recommendations); 2019 ATS/IDSA joint guideline remains primary reference
- **Complicated UTI:** IDSA **2025** — new classification framework, now includes men, 4-step empiric approach

---

## Home Screen — index.html (BUILD #49)

Restructured in March 2026:
- **Global search bar** — filters 75+ conditions and tools
- **Organ system browser** — 12-column grid matching IM guide pattern, direct launch to any tool section
- **Quick launch strip** — 6 buttons (IM · ID · ABX · LAB · Rx · PROC)
- **Reference Library accordion** — all 13 reference tools
- **Notes & Templates accordion** — all 8 consult templates

---

## Technical Architecture

### PWA / Offline Functionality
The suite operates as a Progressive Web App using a Service Worker (`sw.js`) for offline caching. All files are pre-cached on first load and served locally thereafter.

**Cache strategy:** Stale-while-revalidate — content served from cache instantly, with background revalidation when online.

**Install on iPad:** Open in Safari → Share → Add to Home Screen. Opens full-screen with no browser UI.

### Versioning
Version controlled by a single source of truth in `sw.js`:

```javascript
const DISPLAY_VERSION = 'BUILD #49';
const CACHE_VERSION   = 'crs-v6.5-build49';
```

Increment both lines on every push. The PWA cache invalidates automatically on next WiFi connection.

### Architecture
- **Shell:** `index.html` — iframe-based tool loader; all tools load inside the shell
- **Service Worker:** `sw.js` — offline caching, background updates, version display
- **Cross-tool navigation:** `suiteNav` helper injected into all tool files, routes through `window.parent.switchTool()` when inside the iframe shell
- **AI auto-fill:** Anthropic API (Claude Sonnet) — consult note templates generate evidence-based content from diagnosis input

---

## Update Workflow

To push a clinical content update:

1. Edit the relevant HTML file(s)
2. Open `sw.js` and increment both version strings
3. Commit all changed files together
4. Open the site once in Safari on WiFi — update downloads in background
5. All version displays throughout the app update automatically

To add a new tool:
1. Add the HTML file to the repo
2. Add an entry to `index.html` (tool card + iframe routing)
3. Add the file path to `PRECACHE_URLS` in `sw.js`
4. Increment the build number and push

---

## Evidence Sources

Content is aligned with current guidelines from:

- **Surviving Sepsis Campaign 2026** (SSC/SCCM/ESICM)
- **ATS 2025** CAP guideline update; **ATS/IDSA 2019** joint CAP guideline
- **IDSA 2025** Complicated UTI guidelines
- **ACC/AHA** Guidelines (ACS 2023, HF 2022, Valvular 2021, Perioperative 2022)
- **IDSA** Guidelines (Candidiasis 2016, Endocarditis, MRSA 2011, Lyme 2020, C. diff SHEA/IDSA 2021)
- **ASHP/IDSA/SIDP** Vancomycin Consensus Guidelines 2020 (AUC-guided monitoring)
- **ADA** Standards of Care 2025
- **KDIGO** Guidelines (AKI 2012, CKD 2024)
- **ACR, ATS, ASH** Guidelines
- **UpToDate, Harrison's Principles of Internal Medicine, NEJM, JAMA, Lancet**
- Key trials: OVIVA, MERINO, STOP-IT, ZEPHyR, SMART, BaSICS, PLUS, ARDS Net, PROSEVA, PLATO, EMPEROR-Preserved, DELIVER, SOAP II, NICE-SUGAR, PEPTIC, STEP-UP, POET, PRORATA

---

## File Structure

```
Clinical-Reference-Suite/
├── index.html                         # Main hub — organ system browser, search, PWA shell
├── sw.js                              # Service Worker — versioning, caching, updates
├── manifest.json                      # PWA manifest — home screen install, icons
├── README.md                          # This file
│
├── Core References
│   ├── im_guide.html                  # IM Clinical Reference Guide (338 conditions)
│   ├── drug_reference_guide.html      # Drug Reference Guide (280 medications)
│   ├── id_guide.html                  # Infectious Disease Guide v4.0 (202 panels)
│   ├── lab_values.html                # Laboratory Values (134 tests)
│   ├── dx_framework.html              # Diagnostic Framework
│   ├── drug_interactions.html         # Drug Interactions Reference
│   └── procedures_guide.html          # Procedures Quick Reference
│
├── Practical Tools
│   ├── antimicrobial_stewardship_guide.html
│   ├── renal_dosing_reference.html
│   ├── abx-companion.html
│   ├── pathogen-index.html
│   ├── body-atlas.html
│   └── audio-companion.html
│
└── Consult Templates (AI-powered)
    ├── cardiology_consult.html
    ├── id_consult.html
    ├── nephrology_consult.html
    ├── rheumatology_consult.html
    ├── endo_consult.html
    ├── neuro_consult.html
    ├── inpatient_note.html
    └── op_note.html
```

---

## Build History

| Build | Date | Changes |
|---|---|---|
| **BUILD #49** | March 2026 | ID guide v4.0 complete rebuild — organ system grid, 6-step nav, urgency ordering, call-out boxes (reconsider/escalate/de-escalate) on 20 high-yield conditions, 26+ new condition cards, SSC 2026/ATS 2025/IDSA 2025 guideline updates, reference sections (pregnancy safety, ID DDI, serology, resistance mechanisms), transplant & biologics populations section. Index.html home screen restructure |
| BUILD #47–48 | March 2026 | ID guide development — tickborne expansions, viral encephalitis expansions, content audit and gap analysis |
| BUILD #30 | Feb 2026 | Unified versioning system — single source of truth in sw.js |
| BUILD #29 | Feb 2026 | Sepsis section updated to SSC 2021 |
| BUILD #28 | Jan 2026 | PWA implementation — Service Worker offline caching, background updates, iPad home screen install |
| BUILD #27 and earlier | 2025–2026 | Clinical content development — 338 conditions, 280 medications, consult templates, specialty guides |

---

*This suite is intended as a clinical reference tool and does not replace clinical judgment. Always verify critical information against primary sources and institutional protocols.*
