# KB_05 — Decisioning Matrix
### Quick-Reference Decision Guide for All Case Types
Last Updated: April 2026

> **When in doubt, escalate.** If you've reviewed this matrix and still aren't certain of your decision, escalate the case.

---

## Overview

There are four decisioning matrices, each covering a specific case scenario. Always start with **entity type** — a mismatch clears automatically in all matrices.

| Matrix | Use When |
|---|---|
| [With PII — Individuals](#matrix-1-with-pii--individuals) | PII has been submitted; Screened Entity is an individual (Program Alpha, Program Beta, Program Gamma) |
| [Program Gamma — Without PII](#matrix-2-idms--without-pii) | Program Gamma case; no PII attached; Screened Entity is an individual |
| [Companies](#matrix-3-companies) | Screened Entity is a company (Program Alpha, Program Beta) |
| [Batch Free Developer](#matrix-4-batch-free-developer) | Program Alpha `batch_type_a_registrant` event; company cases |

> ⚠️ **Full address match rule:** In all matrices — if the Screened Entity's full street address (street number, street name, city, state, country) is a complete match to the Matched Data, **escalate** with reason *Potential Sanction Match*, regardless of what the matrix says about name/DOB/location.

---

## Matrix 1: With PII — Individuals

*Entity type mismatch → Clear (Not a Sanction Match) in all cases.*

| Name Match | DOB | Location | Action | Reason Code |
|---|---|---|---|---|
| False Positive | Any | Any | **Clear** | Not a Sanction Match |
| Partial Match | Mismatch | Any | **Clear** | Cleared by DOB |
| Partial Match | Match or Unknown | Mismatch | **Clear** | Not a Sanction Match |
| Partial Match | Match or Unknown | Match or Unknown | **Escalate** | Unable to Waive Compliance Concerns |
| Full Match | Mismatch | Any | **Clear** | Cleared by DOB |
| Full Match | Match or Unknown | Mismatch | **Clear** | Not a Sanction Match |
| Full Match | Match or Unknown | Match or Unknown | **Escalate** | Potential Sanction Match |

---

## Matrix 2: Program Gamma — Without PII

*Entity type mismatch → Clear. Vessel/ship/aircraft Matched Data → Clear immediately, no research needed.*

| Name Match | Year of Birth (CMS Panel) | Country | MZ Account Age | Action | Reason Code |
|---|---|---|---|---|---|
| Clearly different / False Positive | Any | Any | Any | **Clear** | Not a Sanction Match |
| Partial (not 2/3) | Any | Any | Any | **Clear** | Not a Sanction Match |
| 2/3 Name Match | Mismatch | Any | Any | **Clear** | Not a Sanction Match |
| 2/3 Name Match | Match or Unknown | Different country | Aged (>30 days) | **Clear** | Not a Sanction Match |
| 2/3 Name Match | Match or Unknown | Different country | New (<30 days) | **Suspend** | PCD = 14 days |
| 2/3 Name Match | Match or Unknown | Same country | Any | **Suspend** | PCD = 14 days |
| Full Match | Any | Any | Any | **Suspend** | PCD = 14 days |

> **2/3 Name Match definition:** The Screened Entity's full name matches 2 of 3 name components in the Matched Data name. Example: "John Smith" vs "John Jacob Smith" (matches first + last = 2/3). See [Match Determination & PII Criteria](KB_04_Match_Determination.md) for full definition.

> **Note:** If PII has been submitted on an Program Gamma case, use the **With PII** matrix instead.

---

## Matrix 3: Companies

*Entity type mismatch → Clear. Applies to Program Alpha and Program Beta company cases with PII.*

| Name Match | Country | Action | Reason Code |
|---|---|---|---|
| False Positive (not close, not full) | Any | **Clear** | Not a Sanction Match |
| Close Match | Different countries | **Clear** | Not a Sanction Match |
| Close Match | Same country | **Escalate** | Unable to Waive Compliance Concerns |
| Close Match | Unknown | **Escalate** | Unable to Waive Compliance Concerns |
| Full Match | Any | **Escalate** | Unable to Waive Compliance Concerns |

> **Close Name Match:** The brand name is the same but the legal identifier differs (e.g., "Biotech" vs. "Biotech LLC"). See [Match Determination & PII Criteria](KB_04_Match_Determination.md).

> **China Exception:** If both companies are Chinese and share the same brand name, escalate even if the registered area (city) differs. Beijing Huawei ≠ Shanghai Huawei for purposes of this matrix — they are likely the same company.

---

## Matrix 4: Batch Free Developer

*Program Alpha `batch_type_a_registrant` event only. Entity type mismatch → Clear.*

| Screened Entity Type | PII Uploaded | Name Match | Country | Action | Reason Code |
|---|---|---|---|---|---|
| Individual (name belongs to a person) | N/A | N/A | N/A | **Suspend** | PCD = 30 days |
| Company | No | False Positive | Any | **Clear** | Not a Sanction Match |
| Company | No | Full Match | Mismatch | **Suspend** | PCD = 30 days |
| Company | No | Full Match | Match or Unknown | **Escalate** | Unable to Waive Compliance Concerns |
| Company | No | Close Match | Different country | **Clear** | Not a Sanction Match |
| Company | No | Close Match | Same country | **Suspend** | PCD = 30 days |
| Company | Yes | Can clear | Any | **Clear** | Not a Sanction Match |
| Company | Yes | Cannot clear | Any | **Escalate** | Unable to Waive Compliance Concerns |

> ⚠️ **Do NOT suspend when PII is already attached.** If documentation has been submitted and you still can't clear, escalate.

> ⚠️ **Previously suspended cases:** If a case was previously suspended, the PCD expired, and no documentation was submitted — do NOT suspend again. Escalate with reason: *Unable to Waive Compliance Concerns*. Note: "T2 Escalation Required: Previously suspended - no new information."

---

## DUNS Number Edge Case (batch_type_a_registrant)

If a DUNS number search returns a **different company name** than the Screened Entity:
- **Action:** Suspend, set PCD to 30 days
- Attach your research findings in CMS
- Document the DUNS discrepancy in your summary notes

---

## Related Links
- [Match Determination & PII Criteria](KB_04_Match_Determination.md)
- [Core Procedures — Reason Codes](KB_01_Core_Procedures.md#reason-codes)
- [Client: Program Alpha](KB_08_Client_Program Alpha.md)
- [Client: Program Beta](KB_09_Client_Program Beta.md)
- [Client: Program Gamma](KB_10_Client_Program Gamma.md)
- Interactive Decision Matrix → CMS Web App (The Oracle)
