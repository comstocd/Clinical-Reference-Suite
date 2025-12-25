# 🏥 Clinical Reference Suite

A comprehensive, iPad-optimized clinical reference system designed for Internal Medicine residents and hospitalists. Built for rapid bedside access with touch-friendly navigation, offline capability, and extensive cross-referencing.

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

---

## 📱 Features

- **Offline-First**: All HTML files work without internet connection
- **iPad Optimized**: Touch-friendly controls, appropriate tap targets, responsive layouts
- **Cross-Referenced**: Bidirectional linking between guides for seamless navigation
- **Evidence-Based**: Content sourced from UpToDate, Harrison's, IDSA guidelines, ACC/AHA guidelines
- **Search & Filter**: Real-time search across all conditions, drugs, and lab values
- **Clinical Calculators**: Integrated HEART, PERC, Wells, qSOFA, GRACE, FENa, CrCl, and more

---

## 📂 Suite Contents

| File | Description | Build | Size |
|------|-------------|-------|------|
| `index.html` | Suite launcher/home page | #3 | 37 KB |
| `im_guide.html` | Internal Medicine Clinical Reference Guide | #21 | 2.5 MB |
| `id_guide.html` | Antibiotic & Infection Guide | #6 | 244 KB |
| `drug_reference_guide.html` | Comprehensive Drug Reference | #1 | 625 KB |
| `dx_framework.html` | Presentation-Based Diagnostic Framework | #2 | 171 KB |
| `lab_values.html` | Laboratory Values Reference | #2 | 156 KB |
| `procedures_guide.html` | Bedside Procedures Quick Reference | #2 | 42 KB |
| `drug_interactions.html` | High-Yield Drug Interactions | #2 | 44 KB |
| `nephrology_study_guide1.html` | Nephrology Reference | — | 55 KB |
| `rheumatology_study_guide4.html` | Rheumatology Reference | — | 123 KB |

**Total Suite Size**: ~4.1 MB

---

## 📖 Guide Details

### Internal Medicine Clinical Reference Guide (`im_guide.html`)
- **170 conditions** across 15 organ systems
- Complete workup, treatment protocols, and disposition criteria
- Integrated clinical calculators (HEART, Wells, qSOFA, GRACE, etc.)
- Teaching pearls and board-style review points
- Cross-links to Drug Reference, ID Guide, and Lab Values

### Drug Reference Guide (`drug_reference_guide.html`)
- **172 medications** with comprehensive coverage
- Organized by specialty with anatomical subsections
- For each drug: mechanism, dosing, side effects, black box warnings, clinical pearls
- **45 adjunct therapy recommendations** (e.g., folic acid with methotrexate)
- Bidirectional links to condition guides

### Antibiotic & Infection Guide (`id_guide.html`)
- **Interactive ID Differential Generator** (68 syndromes)
- Empiric therapy by site and syndrome
- Pathogen-specific guidance with resistance patterns
- Renal dosing adjustments, IV-to-PO conversion
- Duration of therapy tables, OPAT guidance

### Diagnostic Framework (`dx_framework.html`)
- **8 chief complaints**: Chest pain, Dyspnea, AMS, Fever, Hypotension, Abdominal pain, AKI, Hyponatremia
- Click-to-filter differential narrowing
- Real-time condition matching based on clinical criteria
- Direct links to full condition pages in IM Guide

### Laboratory Values Reference (`lab_values.html`)
- **134 laboratory tests** with clinical interpretation
- High/low differential diagnoses
- Critical values highlighted
- Filterable by category and clinical significance

### Procedures Guide (`procedures_guide.html`)
- Paracentesis, Thoracentesis, Lumbar Puncture, Arthrocentesis, Central Line
- Step-by-step technique with anatomical landmarks
- Contraindications, complications, fluid analysis interpretation
- Links to relevant ID and IM Guide sections

---

## 🔗 Cross-Reference Architecture

The suite features **bidirectional cross-linking** for seamless navigation:

```
┌─────────────────────────────────────────────────────────────┐
│                      index.html                              │
│                    (Suite Launcher)                          │
└─────────────────────┬───────────────────────────────────────┘
                      │
    ┌─────────────────┼─────────────────┐
    │                 │                 │
    ▼                 ▼                 ▼
┌─────────┐    ┌─────────────┐    ┌──────────────┐
│im_guide │◄──►│drug_reference│◄──►│   id_guide   │
│(170 cond)│    │ (172 drugs) │    │(ID/Antibx)   │
└────┬────┘    └──────┬──────┘    └──────┬───────┘
     │                │                   │
     │    ┌───────────┼───────────┐      │
     │    │           │           │      │
     ▼    ▼           ▼           ▼      ▼
┌─────────┐    ┌───────────┐    ┌────────────┐
│lab_values│    │dx_framework│    │procedures  │
└─────────┘    └───────────┘    └────────────┘
```

**Link Counts:**
- drug_reference_guide → im_guide: 103 links
- drug_reference_guide → id_guide: 29 links
- im_guide → drug_reference_guide: 27 conditions linked
- id_guide → drug_reference_guide: 14 sections linked
- dx_framework → im_guide: 138 condition links

---

## 🚀 Usage

### Local Use (Recommended)
1. Download all HTML files to a single folder
2. Open `index.html` in any modern browser
3. Add to home screen on iPad for app-like experience

### GitHub Pages Deployment
1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Access at `https://[username].github.io/[repo-name]/`

### iPad Tips
- Add to Home Screen for fullscreen experience
- Works offline once cached
- Use Safari Reader Mode for printing specific sections

---

## 🛠 Technical Details

- **Pure HTML/CSS/JavaScript** — no build tools or dependencies required
- **No external CDN calls** — fully self-contained for offline use
- **Responsive design** — works on phone, tablet, and desktop
- **Dark mode support** — respects system preferences where implemented
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation

---

## 📋 Version History

| Date | Changes |
|------|---------|
| 2025-12-25 | Drug Reference Guide v1: 172 drugs, anatomical navigation, adjunct therapy boxes |
| 2025-12-25 | Suite-wide cross-reference validation and bidirectional linking |
| 2025-12-25 | Build number standardization across all guides |

---

## ⚠️ Disclaimer

**This reference is intended for educational purposes and clinical decision support only.**

- Not a substitute for clinical judgment or institutional protocols
- Verify all drug dosing with pharmacy/institutional resources before prescribing
- Content reflects evidence available at time of creation; guidelines evolve
- Always consult primary sources (UpToDate, package inserts, specialty guidelines) for critical decisions

**Do not use for direct patient care without verification.**

---

## 📄 License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](https://creativecommons.org/licenses/by-nc/4.0/).

- ✅ Free to use for personal education and non-commercial purposes
- ✅ May be modified and redistributed with attribution
- ❌ Commercial use prohibited without permission

---

## 🤝 Contributing

Contributions welcome! Please:
1. Open an issue describing the proposed change
2. Reference evidence sources for clinical content changes
3. Maintain cross-reference integrity when adding/modifying content
4. Test on iPad Safari before submitting PRs

---

## 👨‍⚕️ Author

Created by a PGY-3 Internal Medicine resident for bedside clinical use.

*Built with the goal of having everything you need for 90% of inpatient encounters in one offline-capable reference.*
