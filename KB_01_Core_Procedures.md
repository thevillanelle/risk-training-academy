# KB_01 — Core Procedures
### Shared Steps, Templates & Guidelines
Last Updated: May 2026

---

This document contains every procedure that is **identical across all clients**. Client procedure docs reference this document rather than repeat it. If you are working a case and need deeper detail on any shared step, this is your source.

---

## Table of Contents
1. [Accessing CMS](#accessing-hcm)
2. [CMS Status Options](#hcm-status-options)
3. [Notation Templates](#notation-templates)
   - Case Overview
   - Screened Entity Research
   - Summary & Decision
4. [PII Documentation Steps](#pii-documentation-steps)
5. [Direct Escalation: Standard Procedure](#direct-escalation-standard-procedure)
6. [Reason Codes](#reason-codes)
7. [Sanctioned Countries & Regions](#sanctioned-countries--regions)
8. [Shared Case Scenarios](#shared-case-scenarios) *(Non-Regulated: Program Alpha & Program Beta)*
   - 25+ Matched Data Hits
   - Linked Cases
   - Doing Business As (DBA) Scenarios
   - Ownership Percentages
   - Case Created by the Business
9. [Data Hygiene & Privacy](#data-hygiene--privacy)

---

## Accessing CMS

| Instance | URL | Use For |
|---|---|---|
| Non-Regulated | https://acm-nonregulated.g.vilecorp.com | Program Alpha, Program Beta, Program Gamma |
| Regulated | https://acm-regulated.g.vilecorp.com | API |

1. Navigate to the appropriate URL above.
2. Log in with your AppleConnect credentials. Two-step verification may be required.
3. Ensure **Sanctions** is selected from the Lines of Business.

---

## CMS Status Options

Set your status from the dropdown in the CMS dashboard.

| Status | Behavior |
|---|---|
| **Ready** | CMS starts a 10-second countdown, then automatically assigns you the next case matching your skilling. You can click **Next Case** to skip the timer and get a case immediately. |
| **CMS Classic** | No timer. Cases are only assigned when you click **Next Case**. |
| **Not Ready** | Default status at login. No cases are assigned. Dashboard widgets are not clickable. |

---

## Notation Templates

All notes must follow the approved templates below. These templates are also available via Typinator keyboard shortcuts and the built-in CMS User Note feature.

> **Why this matters:** Apple may be audited to verify that due diligence was performed. Your notes are the evidence. When in doubt, document more — not less.

---

### Case Overview Notation

Complete this at the start of every case. Copy data directly from CMS case header and Screened Entity details.

```
Screening Date:        [found in Case Header — "Screen Date"]
Client & Event:        [found in Case Header]
Entity Type:           [found in Screened Entity details — "Entity Label"]
Screened Entity Name:  [copy as shown in CMS; include English translation if needed: Original/English]
Screened Entity Location: [city, state, country — translate if non-English]
PII attached:          [PII is attached and has been reviewed / No PII attached]
```

> **Program Beta only:** Also capture:
> ```
> IP Location:    [found in Ekata]
> Screenshot:     EKATA.PNG
> ```

> **Translation note:** Any name or location not in English must be translated. You may include both original text and English translation, or just the English translation alone.

---

### Screened Entity Research Notation

Use this template when documenting research findings. Only record information that is **not already present in CMS**. If nothing new is found in a tool, write `No new data`.

```
SCREENED ENTITY RESEARCH

Date of Birth:
LexID:
Names:
Locations:
Emails:
Phone Numbers:
Screenshots:  [e.g., LexisNexis.png, MZ.png, Ekata.png]
```

> **Screenshot naming convention:** Name all screenshots with the source tool (e.g., `LexisNexis.png`, `MZ.png`, `Ekata.png`, `ACM.png`). Reference the screenshot name in your notes.

---

### Summary & Decision Notation

Complete one summary block per Matched Data Hit. Use the guiding questions first, then write open-ended notes explaining your specific variances.

```
Matched Entity Hit:             [Hit number: 1, 2, 3…]
Is the entity type a match?     [Match / Mismatch]
Is the name a match?            [Full Match / Partial Match / False Positive]
Is the date of birth a match?   [Match / Mismatch / Unknown]
Is the location a match?        [Match / Mismatch / Unknown]
———————
SUMMARY:
[Write specific comparisons here. Call out exact variances used in your decision.
 Examples:
   "Partial name match. Screened Entity: John Smith. Matched Data: John Smithers."
   "DOB mismatch. Screened Entity: 1975. Matched Data: 1946."
   "Location mismatch. Screened Entity: USA. Matched Data: SWE."]
———————
DECISION: [Clear by name/DOB/location variance | Suspend | Escalate]
```

> **If escalating:** You must also include a recommendation for next steps.
> ```
> RECOMMENDATION: [What additional research or info is needed to resolve the case]
> Example: "Clear based on location variance. Further research required to confirm DOB."
> ```

> **If direct escalating:** Do not write a full summary. Instead, create a manual note using the format:
> ```
> T2 Escalation Required: [Reason from approved dropdown or text expansion tool]
> ```

> **Consistency check:** Your open-ended summary notes must match your guiding question answers. Reviewers read both.

---

## PII Documentation Steps

After reviewing a PII attachment, document findings in CMS as follows.

### For Individuals

Enter the following in the appropriate CMS fields. Clicking outside a field auto-saves.

| Field | Instructions |
|---|---|
| City of Birth | Enter from System Notes. Translate non-romanized characters before entry. If incorrect or unavailable, leave blank. |
| Country of Birth | Enter as 3-digit ISO country code. |
| Date of Birth | Enter as `YYYY-MM-DD`. |
| National ID Number | Enter if ID was submitted. Value will encrypt upon saving. |
| Passport Number | Enter if passport was submitted. Value will encrypt upon saving. |

### For Companies

Do **not** enter data into CMS fields. Instead, create a manual note with:
- Date of registration (if available on the PII)
- Company ID number (if available)

> If the date of registration and/or company number are unavailable, the PII may still be used — simply skip this step.

---

## Direct Escalation: Standard Procedure

Some cases must be escalated immediately without a full summary, due to compliance concerns. If a case meets any direct escalation criteria:

1. **Complete Case Overview** as normal.
   - Exception: `batch_type_b_registrant` (Program Alpha) does not require a Case Overview.
2. **Create a manual note** using the format: `T2 Escalation Required: [reason]`
   - Select the appropriate reason from the Typinator text expansion tool or CMS User Note dropdown.
   - If selecting "Invalid or Expired PII," you **must** add specific context explaining why (e.g., `"ID is too blurry to read"` or `"Passport expired 2024"`).
3. **Resolve the case:** Click **Resolve → Escalate** and select the appropriate reason code.

---

## Reason Codes

### Clear Reason Codes

| Code | When to Use |
|---|---|
| **Cleared by DOB** | A date of birth mismatch was used in your decision. Only use this when customer-submitted PII supported the DOB. For pending case reviews, use Not a Sanction Match when clearing by DOB without PII. |
| **Not a Sanction Match** | All other clear reasons (entity type mismatch, name variance, location variance, etc.). |

### Escalation Reason Codes

| Code | When to Use |
|---|---|
| **Potential Sanction Match** | The Screened Entity's name AND location are a full match to the Matched Data. |
| **Invalid Customer Submitted Info** | The PII submitted is invalid or unacceptable. |
| **Unable to Waive Compliance Concerns** | All other escalation reasons. |

> ⚠️ **If you have multiple Matched Data Hits:** If any single hit requires escalation, the **entire case** must be escalated.

> ⚠️ **Errors:** If a case is cleared, rejected, or suspended in error, notify your team manager immediately with: the Transaction ID, date of the action, a summary of what happened, and the intended action.

---

## Sanctioned Countries & Regions

Any connection to the following countries or regions is a **direct escalation** regardless of client.

**Countries:**
- Cuba (CUB)
- Iran (IRN)
- North Korea (PRK)

**Regions in Ukraine:**
- Crimea
- Donetsk People's Republic
- Luhansk People's Republic
- Kherson region
- Zaporizhzhia region

A "connection" includes: doing business with an entity there, providing documentation issued there, or having an address there.

---

## Shared Case Scenarios

The following scenarios apply to **Program Alpha and Program Beta** (Non-Regulated) cases. They are documented here once and referenced in both client procedure docs.

---

### 25+ Matched Data Hits

When a case has more than 25 Matched Data Hits, CMS does not display information for hits beyond 25.

1. Complete Case Overview as normal.
2. Complete Summary notes for Matched Data Hits 1–25.
3. Add a new note: `Escalation Required: 25+ Matched Data Hits`
4. Resolve: **Escalate → Unable to Waive Compliance Concerns**

> **Pending cases only:** If you encounter a pending case with 25+ hits, skip it — no notes required.

---

### Linked Cases

Linked cases appear in the case header as multiple Transaction IDs. They may show status of Open, In Progress, or Pending.

- Your assigned case is marked **In Progress**.
- Open cases are also assigned to you.
- Pending cases are not assigned and **must not be actioned**.

**How to work linked cases:**
1. Work each case individually — information may differ case to case.
2. All applicable notes (Case Overview, Research, Summary) must be made on **each individual case**.
3. When actioning, confirm you are selecting the correct case(s) if actions differ.

---

### Doing Business As (DBA) Scenarios

Some Screened Entity names appear in the format: `[Name] ; [DBA Name]`

The first half may be a legal name (individual or company). The second half is the operating name. **Only the half triggering the sanctions review is being screened.**

1. Complete Case Overview as normal.
2. Open System Notes and click the attachment to view uploaded PII.
   - If the PII matches the name being screened → review as normal.
   - If the PII matches the half of the name **not** being screened → **direct escalate as Invalid PII**.
3. Document relevant findings (fill individual CMS fields, or create a company note, as appropriate).
4. Compare Screened Entity details against each Matched Data Hit.
5. Your Summary notes should focus only on the part of the name being screened.
6. If you can definitively clear → **Clear**. If not → **Escalate**.

**Example:**
> Screened Entity: `GG Technologies Inc ; StayTouch`
> Matched Data: `3D Technologies LLC`
> Since the names suggest "GG Technologies Inc" is the entity under review, your Summary compares GG Technologies Inc to 3D Technologies LLC only.

---

### Ownership Percentages

Ownership percentages appear in System Notes if the customer listed co-owners in their application. If the total ownership percentage of the Screened Entity is **less than 100%**, the remaining owner(s) have not been screened.

- **These are not direct escalations.** Complete the full case review first.
- Your final action will always be **Escalate** with the reason: `Unable to Waive Compliance Concerns`
- In your decision notes, state: `"Escalate due to ownership percentages listed."`

---

### Case Created by the Business

When CMS displays `"Case created at the request of the business"` in place of Matched Data information, the original case has expired and been auto-regenerated.

1. Locate the **core case** — the original case — by searching the Transaction ID prefix (the part before the underscore `_`) in the CMS search bar.
2. Use the Matched Data Hit information from the core case to evaluate the current case.
3. Action the case based on that research.

> **Program Gamma note:** If the core case Screened Entity name is completely different from the current case name, compare your current Screened Entity to the core case Matched Data, and clear by name and/or DOB variance if applicable.

---

## Data Hygiene & Privacy

- **End of every day:** Move all downloaded PII and company documents to Trash. Empty the Trash. Do not store sensitive information on your device overnight.
- **Screenshots:** Only capture information relevant to the individual being researched. Do not include unrelated records.
- **iCloud Support Tool:** Screenshots are **not permitted** from this tool for security reasons. Most of the same data is available in MZ Support, where screenshots are encouraged.
- **Attachments in CMS:** Once uploaded, files are stored securely. Attachments in `.jpg`, `.jpeg`, `.pdf`, `.html`, and `.txt` formats can be viewed directly in CMS without downloading.
