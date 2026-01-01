# Clinical Reference Suite v2.1
## Internal Medicine Clinical Tools for iPad

**Author:** Dr. Michael Comstock, PGY-3 Internal Medicine  
**Institution:** Guthrie Lourdes Hospital  
**Last Updated:** January 2026  
**Build:** #3

---

## Overview

The Clinical Reference Suite is a comprehensive collection of evidence-based clinical tools optimized for iPad use at the bedside. All guides feature responsive design, dark mode support, collapsible sections, and cross-linking between resources.

---

## Core Components

### 1. Internal Medicine Clinical Reference Guide (IMCRG)
**File:** `im_guide.html`  
**Version:** v3.7 BUILD #28  
**Content:** 338 conditions

The flagship reference covering acute inpatient conditions with:
- Clinical presentations and diagnostic criteria
- Evidence-based treatment protocols
- Embedded calculators (CURB-65, Wells, MELD, CHA₂DS₂-VASc, etc.)
- Disposition criteria and complications
- Cross-links to Drug Reference Guide (81 unique drug targets)

**Specialty Coverage:**
- Cardiology (ACS, HF, AFib, HTN emergency, arrhythmias)
- Pulmonology (COPD, asthma, PE, pneumonia, ARDS)
- GI/Hepatology (GI bleed, cirrhosis, pancreatitis, SBP)
- Infectious Disease (sepsis, meningitis, endocarditis, HIV)
- Nephrology (AKI, CKD, electrolyte disorders, RRT)
- Neurology (stroke, seizure, meningitis, delirium)
- Hematology/Oncology (DIC, TTP, neutropenic fever, SCD)
- Endocrinology (DKA, HHS, thyroid storm, adrenal crisis)
- Rheumatology (gout, lupus flare, vasculitis)
- Toxicology (overdoses, withdrawal syndromes)

---

### 2. Drug Reference Guide (DRG)
**File:** `drug_reference_guide.html`  
**Version:** v1.2 BUILD #4  
**Content:** 230 medications across 49 categories

Comprehensive drug monographs featuring:
- Mechanism of action
- Evidence-based indications
- Dosing tables (including renal/hepatic adjustments)
- Adverse effects and monitoring
- Black box warnings
- Clinical pearls
- Cross-links back to IMCRG conditions

**Drug Categories:**
| Category | Count | Key Drugs |
|----------|-------|-----------|
| Antibiotics | 45+ | Penicillins, cephalosporins, carbapenems, fluoroquinolones, vancomycin |
| Anticoagulants | 12 | UFH, enoxaparin, warfarin, apixaban, rivaroxaban, dabigatran, edoxaban |
| Antiplatelets | 4 | Aspirin, clopidogrel, ticagrelor, prasugrel |
| Antiarrhythmics | 8 | Amiodarone, flecainide, sotalol, dofetilide, ibutilide, digoxin |
| Vasopressors | 6 | Norepinephrine, vasopressin, phenylephrine, dopamine, milrinone |
| HTN Emergency | 5 | Nicardipine, clevidipine, labetalol, esmolol, hydralazine |
| HF GDMT | 10 | Empagliflozin, dapagliflozin, sacubitril-valsartan, eplerenone, ivabradine |
| Anticonvulsants | 6 | Levetiracetam, phenytoin, lacosamide, phenobarbital, carbamazepine |
| Toxicology | 8 | Naloxone, flumazenil, NAC, fomepizole, physostigmine, lipid emulsion |
| Aminoglycosides | 3 | Gentamicin, tobramycin, amikacin |

---

### 3. Infectious Disease Guide
**File:** `id_guide.html`  
**Version:** BUILD #6  

Antimicrobial stewardship resource with:
- Empiric therapy by infection site
- Organism-specific coverage
- Antibiotic spectra charts
- Dosing adjustments
- De-escalation guidance

---

### 4. Diagnostic Framework
**File:** `dx_framework.html`  
**Version:** BUILD #2

Systematic approach to common presentations:
- Chief complaint-based differentials
- Red flags and "can't miss" diagnoses
- Diagnostic algorithms
- Pre-test probability assessment

---

### 5. Lab Values Reference
**File:** `lab_values.html`  
**Version:** BUILD #2

Complete laboratory reference with:
- Normal ranges
- Critical values
- Interpretation pearls
- Reflex testing guidance

---

### 6. Drug Interactions Guide
**File:** `drug_interactions.html`  
**Version:** BUILD #2

High-yield drug interactions for:
- Anticoagulants
- QT-prolonging agents
- CYP450 interactions
- Renal/hepatic considerations

---

### 7. High-Value Care Guide
**File:** `high_value_care.html`  
**Version:** BUILD #2

Evidence-based recommendations for:
- Appropriate testing
- Choosing Wisely initiatives
- Cost-effective care
- Avoiding low-value interventions

---

### 8. Procedures Guide
**File:** `procedures_guide.html`  
**Version:** BUILD #2

Step-by-step guidance for common procedures:
- Indications/contraindications
- Equipment and setup
- Technique with images
- Complications and management

---

## Subspecialty Study Guides

Comprehensive board-style review guides optimized for IM-ITE and ABIM preparation:

| Guide | File | Content |
|-------|------|---------|
| Cardiology | `cardio_study_guide.html` | ECG, HF, CAD, valvular, arrhythmias |
| Pulmonology | `pulmonology_study_guide.html` | PFTs, COPD, ILD, sleep, critical care |
| GI/Hepatology | `gi_study_guide.html` | Liver disease, IBD, pancreatitis, GI bleed |
| Nephrology | `nephrology_study_guide1.html` | AKI, CKD, electrolytes, acid-base, RRT |
| Infectious Disease | `id_study_guide.html` | Organisms, antimicrobials, syndromes |
| Endocrinology | `endocrinology_study_guide.html` | Diabetes, thyroid, adrenal, pituitary |
| Heme/Onc | `heme_onc_study_guide.html` | Anemias, coagulopathies, malignancies |
| Neurology | `neurology_study_guide.html` | Stroke, seizure, MS, movement disorders |
| Rheumatology | `rheumatology_study_guide.html` | RA, SLE, vasculitis, crystal arthropathies |
| Allergy/Immunology | `allergy_immunology_study_guide.html` | Hypersensitivity, immunodeficiency |
| Geriatrics | `geriatrics_study_guide.html` | Polypharmacy, falls, dementia, goals of care |
| Psychiatry | `psychiatry_study_guide.html` | Depression, anxiety, psychosis, substance use |
| General IM | `general_im_study_guide.html` | Preventive care, perioperative, ethics |

**Study Guides Index:** `study_guides_index.html`

---

## Additional Resources

| Resource | File | Description |
|----------|------|-------------|
| Board Pearls | `board_pearls.html` | High-yield facts for boards |
| Rheumatology Extended | `rheumatology_study_guide4.html` | Advanced rheum topics |

---

## Technical Features

### iPad Optimization
- Responsive design for all screen sizes
- Touch-friendly collapsible sections
- Large tap targets for navigation
- Landscape and portrait support

### Dark Mode
- System preference detection
- Manual toggle available
- Optimized contrast ratios

### Search & Navigation
- Real-time search filtering
- Alphabetical and categorical views
- Specialty-based quick access
- Cross-document linking

### Offline Access
- All files are standalone HTML
- No server dependency
- Works without internet connection

---

## File Structure

```
Clinical Reference Suite/
├── index.html                    # Main landing page
├── README.md                     # This file
│
├── Core References/
│   ├── im_guide.html            # IMCRG (338 conditions)
│   ├── drug_reference_guide.html # DRG (230 medications)
│   ├── id_guide.html            # ID/Antimicrobial guide
│   ├── dx_framework.html        # Diagnostic framework
│   ├── lab_values.html          # Lab reference
│   ├── drug_interactions.html   # Drug interactions
│   ├── high_value_care.html     # High-value care
│   └── procedures_guide.html    # Procedures
│
└── Study Guides/
    ├── study_guides_index.html  # Study guide hub
    ├── cardio_study_guide.html
    ├── pulmonology_study_guide.html
    ├── gi_study_guide.html
    ├── nephrology_study_guide1.html
    ├── id_study_guide.html
    ├── endocrinology_study_guide.html
    ├── heme_onc_study_guide.html
    ├── neurology_study_guide.html
    ├── rheumatology_study_guide.html
    ├── allergy_immunology_study_guide.html
    ├── geriatrics_study_guide.html
    ├── psychiatry_study_guide.html
    ├── general_im_study_guide.html
    └── board_pearls.html
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v2.1 BUILD #3 | Jan 2026 | DRG BUILD #4 (+27 drugs to 230), IMCRG BUILD #28 (81 cross-links) |
| v2.0 BUILD #2 | Dec 2025 | DRG BUILD #3, SGLT2i, HF GDMT additions |
| v1.0 | Dec 2025 | Initial release |

---

## Usage Notes

1. **Start at index.html** — Central hub with links to all resources
2. **Use cross-links** — Click purple 💊 links in IMCRG to jump to drug monographs
3. **Search functionality** — Type to filter conditions/drugs in real-time
4. **Collapse sections** — Tap headers to expand/collapse content
5. **Dark mode** — Respects system settings or use manual toggle

---

## Evidence Sources

- UpToDate
- Harrison's Principles of Internal Medicine
- NEJM, JAMA, Lancet
- IDSA Guidelines
- ACC/AHA Guidelines
- Surviving Sepsis Campaign
- ATS/IDSA CAP Guidelines
- KDIGO Guidelines
- ACR Guidelines

---

## Contact

For questions, corrections, or suggestions:  
**Michael Comstock, MD**  
PGY-3 Internal Medicine  
Guthrie Lourdes Hospital

---

*This suite is intended as a clinical reference tool and does not replace clinical judgment. Always verify critical information with primary sources.*
