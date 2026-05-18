# KB_08 — Client: Apple Media Products (Program Alpha)
### SDS Compliance Procedure — CP002
Last Updated: May 2026

---

> **This document is self-contained.** You can work an entire Program Alpha case from this doc alone. Cross-references point to deeper detail in shared docs — but you won't need them for standard cases.

---

## Quick Reference

| | |
|---|---|
| **CMS Instance** | Non-Regulated: https://acm-nonregulated.g.vilecorp.com |
| **SLA** | 48 hours |
| **Suspend PCD** | 30 days (`batch_type_a_registrant` only) |
| **Sanctioned Countries** | Cuba (CUB) · Iran (IRN) · North Korea (PRK) + Ukrainian regions |
| **Clear: DOB mismatch** | Cleared by DOB |
| **Clear: all other** | Not a Sanction Match |
| **Escalate: full name + location match** | Potential Sanction Match |
| **Escalate: invalid PII** | Invalid Customer Submitted Info |
| **Escalate: all other** | Unable to Waive Compliance Concerns |

---

## What Is Program Alpha?

Apple Media Products manages iTunes, the Apple App Store, and Apple Services. Compliance screens anyone with access to iTunes Connect — the platform used to distribute media. This includes content providers, vendors, banks, bank account holders, and free app developers.

**CMS Non-Regulated** cases include business activity not strictly controlled by law. Doing business with a sanctioned entity will result in an OFAC violation, including fines and publication.

---

## Clients & Events

Program Alpha has two client types. **Client and Event must be notated in every Case Overview.**

### `amp-itc-users`

| Event | Population |
|---|---|
| `rt_user_invitation` | Newly added individual team members / employees of content providers |
| `batch_user` | Same as `rt_user_invitation`, plus developers enrolled from Program Beta |

### `amp-itc-atb`

| Event | Population |
|---|---|
| `rt_agreement` | Content providers signing PaidApp Agreement for the first time, and existing vendors with changes to legal entity structure |
| `rt_bank_account_holder` | Same population as `rt_agreement` |
| `batch_bank_account_holder` | First batch screening of a bank account holder after real-time screening + nightly batch screenings |
| `batch_vendor_master` | First batch screening for legal entity from previous real-time screening + nightly batch screenings |
| `batch_type_b_registrant` | Updates on a bank from the Accuity list + nightly screenings on existing banks. **Always a direct escalation.** |
| `batch_vendor_extra_info` | Vendor extra information batch |
| `batch_type_a_registrant` | Free app developer screening — has its own extended research and suspend workflow |

---

## Step 1 — Log In and Assign a Case

1. Navigate to https://acm-nonregulated.g.vilecorp.com
2. Log in with AppleConnect credentials (two-step verification may be required)
3. Confirm **Sanctions** is selected from the Lines of Business
4. Set your status:

| Status | Behavior |
|---|---|
| **Ready** | CMS starts a 10-second countdown, then auto-assigns the next case. Click **Next Case** to skip the timer. |
| **CMS Classic** | Cases assigned only when you click **Next Case**. No countdown. |
| **Not Ready** | Default at login. No cases assigned. |

5. Wait for the countdown or click **Next Case** to receive your first case.

---

## Step 2 — Case Overview

A Case Overview is a high-level walkthrough to capture key case details before researching.

1. Review the Case Header Details and confirm **client type** and **event**
2. Complete the Case Overview notation using the approved template:

```
Screening Date:           [from Case Header — "Screen Date"]
Client & Event:           [from Case Header — e.g., amp-itc-users, batch_user]
Entity Type:              [from Screened Entity — "Entity Label"]
Screened Entity Name:     [copy exactly as shown in CMS]
Screened Entity Location: [city, state, country]
PII attached:             [PII is attached and has been reviewed / No PII attached]
```

> **Translation:** Any names or locations not in English must be translated. You may include the original text + English translation on the same line (e.g., `Original Name / English Translation`), or just the English translation.

**Example:**
```
Screening Date: 2026-01-13
Client & Event: amp-itc-users, batch_user
Entity Type: Individual
Screened Entity Name: Johnny Appleseed
Screened Entity Location: Cupertino, CA, USA
PII attached: PII is attached and has been reviewed
```

---

## Step 3 — Review PII and Document

1. In the **Notes** section, locate the PII entry and click the attachment to view
2. Some attachments require downloading — delete from your Downloads folder at end of day
3. Validate the PII against the Acceptable PII Criteria → See [Match Determination & PII Criteria](KB_04_Match_Determination.md)
4. If valid PII is submitted, document in CMS:

### Individuals — Enter in CMS Fields

| Field | Instructions |
|---|---|
| **City of Birth** | From System Notes. Translate non-romanized characters. If incorrect or unavailable, leave blank. |
| **Country of Birth** | 3-digit ISO country code. Hit Tab to save. |
| **Date of Birth** | Format: `YYYY-MM-DD`. Hit Tab to save. |
| **National ID Number** | Enter if ID type submitted. Encrypts on save. |
| **Passport Number** | Enter if passport submitted. Encrypts on save. |

> Clicking outside any field also auto-saves.

### Companies — Create a Manual Note

Do **not** enter data into CMS fields. Create a manual note with:
- Date of registration (if available on PII)
- Company ID number (if available)

---

## Step 4 — Research & Document (`batch_type_a_registrant` only)

When an Program Alpha case for the `batch_type_a_registrant` event is created, communication is automatically sent to the developer company requesting documentation. Cases can be assigned **before** documentation is submitted, requiring due diligence from the investigator.

> **For all other Program Alpha events:** If PII has been submitted, proceed directly to Step 5. No additional research is required beyond validating PII.

### Companies

Use public sources, DNB.com, or Google to verify that a company exists before using LexisNexis.

> **Note:** If the Screened Entity is or has any affiliation with Apple Inc., complete research and summary normally, then escalate.

| Scenario | Action |
|---|---|
| No PII + full name match + **country mismatch** | **Suspend** — set PCD to 30 days |
| No PII + close name match + **same country** | **Suspend** — set PCD to 30 days |
| PII submitted + still can't clear | **Escalate** → Unable to Waive. Do NOT suspend when PII is attached. |
| True sanctions match found | **Escalate** → Potential Sanction Match. Do not request PII. |
| DUNS returns a **different** company name | **Suspend** — set PCD to 30 days. Attach your research findings. |
| No evidence company exists | Escalate with DECISION + RECOMMENDATION notation (see example below) |

**Example notation when company can't be found:**
```
MATCHED ENTITY HIT: 1
IS THE ENTITY TYPE A MATCH? Match
IS THE NAME A MATCH?: Partial Match
IS THE DATE OF REGISTRATION A MATCH? Unknown
IS THE LOCATION A MATCH?: Mismatch

SUMMARY: Partial name match. Screened Entity: Apply Inc. Matched Data: Apple Inc.
No location match. Screened Entity: NZL. Matched Data: USA.

DECISION: Escalate - unable to verify company
RECOMMENDATION: Conduct further research to find Screened Entity
```

> **Previously suspended cases:** If a case was previously suspended and the PCD expired without documentation, do **not** suspend again. Escalate with: `"T2 Escalation Required: Previously suspended - no new information"` → Decision: Escalate.

### Individuals (`batch_type_a_registrant`)

- If the Screened Entity name appears to belong to an individual (not a company) → **Suspend**, set PCD to 30 days
- Once PII is uploaded: if still can't clear → **Escalate**. Do NOT suspend when PII is attached.
- Previously suspended + PCD expired with no docs → **Escalate** ("Previously suspended - no new information")

### Reviewing Previously Submitted PII

Previously submitted PII may be used **only if the previous case was also an Program Alpha case.**
1. Open the PII attachment and confirm it meets eligibility criteria
2. If referencing prior PII, screenshot or download it, attach to current case, and note: `"PII found on TID: __________"`

---

## Step 5 — Advanced Research (`batch_type_a_registrant` only)

| Screened Entity Type | Research Tools |
|---|---|
| **Individuals — US only** | ID Verification Tool · LexisNexis Phone Finder · LexisNexis Due Diligence Person Report |
| **Individuals — US + International** | Case Support Tool · iCloud Support Tool · Google (name + company) · UK Company Officer Search |
| **Companies — US only** | LexisNexis Due Diligence Business Report *(last resort)* |
| **Companies — Foreign & Domestic** | DNB.com Business Directory · Public Sources for Company Data (KB_06) · Google · D&B WorldBase in LexisNexis *(last resort)* |

**To attach web evidence as PDF:**
1. Navigate to the page in Safari
2. **File → Export as PDF** → save to Downloads
3. In CMS: **Attach File → Upload → Apply**

> ⚠️ End of every day: move all downloaded PII and company files to Trash and empty it.

---

## Step 6 — Summary and Decision

For every Matched Data Hit, complete a summary using the approved template:

```
Matched Entity Hit:           [hit number]
Is the entity type a match?   [Match / Mismatch]
Is the name a match?          [Full Match / Partial Match / False Positive]
Is the date of birth a match? [Match / Mismatch / Unknown]
Is the location a match?      [Match / Mismatch / Unknown]
———————
SUMMARY: [Specific variances — exact names, DOBs, locations compared]
———————
DECISION: [Clear / Suspend / Escalate + brief reason]
```

If escalating, add:
```
RECOMMENDATION: [Specific guidance for Tier 2]
```

**Example — Individual:**
```
Matched Entity Hit: 1
Is the entity type a match? Match
Is the name a match?: Partial Match
Is the date of birth a match? Mismatch
Is the location a match?: Mismatch

SUMMARY: Partial name match. Screened Entity: Ibrahim Yasar. Matched Data: Yasser Hussein Ibrahim.
DOBs do not match. Screened Entity: 2003. Matched Data: 1983.
Locations do not match. Screened Entity: TUR. Matched Data: SYR.

DECISION: Clear based on name, DOB, location variance
```

See [Decisioning Matrix](KB_05_Decisioning_Matrix.md) for guidance on when to clear, suspend, or escalate.

---

## Step 7 — Action the Case

1. Click **Resolve** at the bottom of the case
2. Select **Clear**, **Suspend**, or **Escalate**

> ⚠️ If ANY Matched Data Hit requires escalation, the **entire case** must be escalated.

### Clear
| Reason Code | When |
|---|---|
| **Cleared by DOB** | DOB mismatch was used in the decision |
| **Not a Sanction Match** | All other clear reasons |

### Suspend (`batch_type_a_registrant` only)
- Set **PCD to 30 days**
- Used when: full name match + country mismatch (no PII), close name match + same country (no PII), individual name instead of company, DUNS name mismatch

### Escalate
| Reason Code | When |
|---|---|
| **Potential Sanction Match** | Full name AND location match to Matched Data |
| **Invalid Customer Submitted Info** | Invalid PII submitted |
| **Unable to Waive Compliance Concerns** | All other escalation reasons |

3. After resolving, wait for CMS to auto-assign the next case, or click **Next Case**.

---

## Other Guidelines

### Direct Escalation Scenarios

If a case meets any of the criteria below, escalate immediately — no full summary required:

1. **Complete Case Overview** (except `batch_type_b_registrant` — no overview needed)
2. **Create manual note:** `T2 Escalation Required: [reason]`
   - For Invalid/Expired PII: add specific context (e.g., `"Passport expired 2024"`)
3. **Resolve → Escalate → Unable to Waive Compliance Concerns**

**Direct Escalation Reasons:**

| Reason | Notes |
|---|---|
| `batch_type_b_registrant` event | The only direct escalation for this event type |
| Inclusion Term | `"Case created because name contains Apple corporate compliance inclusion list words."` This is the **only** direct escalation reason for `batch_type_a_registrant`. |
| Sanctioned Country | Screened Entity does business with, or submits PII from: Cuba, Iran, North Korea, or sanctioned Ukrainian regions |
| Names Do Not Match | ID/registration name ≠ Screened Entity name |
| Partial ID | Back of ID submitted, or name/DOB is obscured |
| Invalid PII | Non-ID document, altered, illegible, or modified in bad faith |
| Unable to Translate ID | PII cannot be successfully translated |

> **Multiple hits with inclusion term:** If one hit is an inclusion term but others aren't, complete research/summaries for the non-inclusion-term hits normally. Still direct escalate for the inclusion term hit.

### More than 25 Matched Data Hits

1. Complete Case Overview normally
2. Write Summary notes for Matched Data Hits 1–25
3. Add note: `"Escalation Required: 25+ Matched Data Hits"`
4. Resolve → **Escalate → Unable to Waive Compliance Concerns**

### Linked Cases

Linked cases show as multiple TIDs in the case header.
- Your case = **In Progress**
- Open cases = also assigned to you
- Pending cases = **do not action**

Work each case individually. All notes (Overview, Research, Summary) on each individual case. Confirm correct case is selected when actioning.

### Doing Business As (DBA) Scenarios

Names show as `[Name] ; [DBA Name]`. Only the portion triggering the sanctions review is being screened.

1. Complete Case Overview
2. View PII from System Notes attachment:
   - PII matches screened name → review normally
   - PII matches non-screened name → direct escalate as **Invalid PII**
3. Summary notes focus only on the screened name portion

**Example:**
```
Screened Entity: GG Technologies Inc ; StayTouch
→ "GG Technologies Inc" is the screened portion.

MATCHED ENTITY HIT: 1
IS THE NAME A MATCH?: Partial Match
IS THERE A LOCATION MATCH?: Mismatch

SUMMARY: Partial name match. Screened Entity: GG Technologies Inc. Matched Data: 3D Technologies LLC.
No location match. Screened Entity: USA. Matched Data: RUS.
CLEAR based on name and location variances.
```

### Ownership Percentages

If System Notes show ownership percentage < 100% for the Screened Entity, the remaining owner(s) are unscreened.

- **NOT a direct escalation** — complete the full case review first
- Final action: **Escalate → Unable to Waive Compliance Concerns**
- Decision note: `"Escalate due to ownership percentages listed."`

### Case Created by the Business

When CMS shows `"Case created at the request of the business"` instead of Matched Data:

1. Search the TID prefix (everything before `_`) in the CMS search bar to find the core case
2. Use the Matched Data from the core case to evaluate the current case
3. Action accordingly

---

## Other Escalation Reasons for `batch_type_a_registrant`

*(These are not direct escalations — complete full research and summaries first)*

- Full review complete + not enough location/DOB/name info to make a decision
- Full name match to any Matched Data name (primary or AKA, including Romanized and native script)
- Location is the **only** variance — not sufficient to clear; escalate
- Full review + connection found to an embargoed country/region

---

## Related Links
- [Core Procedures](KB_01_Core_Procedures.md)
- [Compliance Review Model](KB_03_Review_Model.md)
- [Match Determination & PII Criteria](KB_04_Match_Determination.md)
- [Decisioning Matrix](KB_05_Decisioning_Matrix.md)
- [Compliance Tools](KB_06_Tools.md)
- [CMS User Guide](KB_07_CMS_Guide.md)
- [Understand Compliance Terms & Notations](KB_02_Glossary.md)
