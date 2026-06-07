# KB_09 — Client: DevConnect (Program B)
### Risk Intelligence Procedure — CP001
Last Updated: May 2026

---

> **This document is self-contained.** You can work an entire Program B case from this doc alone.

---

## Quick Reference

| | |
|---|---|
| **CMS Instance** | Non-Regulated: https://acm-nonregulated.g.vilecorp.com |
| **SLA** | 48 hours |
| **Suspend** | Not available for Program B — Clear or Escalate only |
| **Sanctioned Countries** | Cuba (CUB) · Iran (IRN) · North Korea (PRK) + Ukrainian regions |
| **Clear: DOB mismatch** | Cleared by DOB |
| **Clear: all other** | Not a Sanction Match |
| **Escalate: full name + location match** | Potential Sanction Match |
| **Escalate: invalid PII** | Invalid Customer Submitted Info |
| **Escalate: all other** | Unable to Waive Compliance Concerns |

---

## What Is Program B?

DevConnect is the Apple team supporting developers globally. The Program B compliance client screens developer enrollments into the Apple Developer Program. These cases screen anyone enrolling — both individuals at the precheck stage, and the organization at the final enrollment stage.

**CMS Non-Regulated** cases include business activity not strictly controlled by law. Doing business with a sanctioned entity will result in an OFAC violation, including fines and publication.

---

## Events

Program B has two event types. **Both must be notated in every Case Overview.**

| Event | Description |
|---|---|
| `enrollment_pre_check` | All applicants enrolling into the Apple Developer Program at an individual level. This is the **first** screening. |
| `rt_enrollment_final` | After passing precheck, the applicant provides information for the final check on the **entity**. If cleared, the organization's enrollment is complete. |

---

## Step 1 — Log In and Assign a Case

1. Navigate to https://acm-nonregulated.g.vilecorp.com
2. Log in with AppleConnect credentials (two-step verification may be required)
3. Confirm **Sanctions** is selected from the Lines of Business
4. Set your status:

| Status | Behavior |
|---|---|
| **Ready** | 10-second countdown, then auto-assigns the next case. Click **Next Case** to skip. |
| **CMS Classic** | Assign only when you click **Next Case**. No countdown. |
| **Not Ready** | Default at login. No cases assigned. |

5. Wait for countdown or click **Next Case**.

---

## Step 2 — Case Overview

1. Review Case Details and confirm **client type** and **event**
2. Complete Case Overview notation:

```
Screening Date:           [from Case Header — "Screen Date"]
Client & Event:           [e.g., Program B, enrollment_pre_check]
Entity Type:              [from Screened Entity — "Entity Label"]
Screened Entity Name:     [copy exactly as shown in CMS]
Screened Entity Location: [city, state, country]
IP Location:              [from Ekata]
Screenshot:               EKATA.PNG
PII attached:             [PII is attached and has been reviewed / No PII attached]
```

> ⚠️ **IP Location and Ekata screenshot are required for all Program B cases.** Click the SILPH icon next to the Screened Entity name in CMS to auto-open Ekata with pre-filled data. Screenshot and save as `EKATA.PNG`.

> **Translation:** Any names or locations not in English must be translated. You may include original + English, or just English.

**Example:**
```
Screening Date: 2026-01-13
Client & Event: Program B, enrollment_pre_check
Entity Type: Individual
Screened Entity Name: Johnny Appleseed
Screened Entity Location: Cupertino, USA
IP Location: San Francisco, CA, USA
Screenshot: EKATA.PNG
PII attached: PII is attached and has been reviewed
```

---

## Step 3 — Review PII and Document

1. In the Notes section, locate the **Program B_PII** entry and click the attachment
2. Some attachments require downloading — delete from Downloads at end of day
3. Validate PII against Acceptable PII Criteria → See [Match Determination & PII Criteria](KB_04_Match_Determination.md)
4. If valid PII submitted, document in CMS:

### Companies — Create a Manual Note
Do **not** enter data into CMS fields. Create a manual note with:
- Date of registration (if available)
- Company ID number (if available)

### Individuals — Enter in CMS Fields

| Field | Instructions |
|---|---|
| **City of Birth** | From System Notes. Translate non-romanized characters. Leave blank if incorrect or unavailable. |
| **Country of Birth** | 3-digit ISO country code. Hit Tab to save. |
| **Date of Birth** | Format: `YYYY-MM-DD`. Hit Tab to save. |
| **National ID Number** | Enter if ID submitted. Encrypts on save. |
| **Passport Number** | Enter if passport submitted. Encrypts on save. |

> Clicking outside any field also auto-saves.

---

## Step 4 — Summary and Decision

Use evidence collected during research to make a decision on each Matched Data Hit.

Compare the Screened Entity to each Matched Data Hit — entity types, names, dates of birth (individuals), dates of registration (companies), and locations.

Complete one Summary block per Matched Data Hit:

```
Matched Entity Hit:           [hit number]
Is the entity type a match?   [Match / Mismatch]
Is the name a match?          [Full Match / Partial Match / False Positive]
Is the date of birth a match? [Match / Mismatch / Unknown]
Is the location a match?      [Match / Mismatch / Unknown]
———————
SUMMARY: [Specific variances — exact names, DOBs, locations compared]
———————
DECISION: [Clear / Escalate + brief reason]
```

If escalating, also add:
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
Locations do not match. Screened Entity: Turkey. Matched Data: Syria.

DECISION: Clear based on name, DOB, location variance
```

See [Decisioning Matrix](KB_05_Decisioning_Matrix.md) for full guidance.

---

## Step 5 — Action the Case

1. Click **Resolve** at the bottom of the case
2. Select **Clear** or **Escalate**

> ⚠️ **Program B has no Suspend option.** If you cannot clear, escalate.

> ⚠️ If ANY Matched Data Hit requires escalation, the **entire case** must be escalated.

### Clear
| Reason Code | When |
|---|---|
| **Cleared by DOB** | DOB mismatch was used in the decision |
| **Not a Sanction Match** | All other clear reasons |

### Escalate
| Reason Code | When |
|---|---|
| **Potential Sanction Match** | Full name AND location match to Matched Data |
| **Invalid Customer Submitted Info** | Invalid PII submitted |
| **Unable to Waive Compliance Concerns** | All other escalation reasons |

3. After resolving, wait for CMS to auto-assign the next case or click **Next Case**.

---

## Other Guidelines

### Direct Escalation Scenarios

If a case meets any criteria below, escalate immediately — no full summary required:

1. **Complete Case Overview** as normal
2. **Create manual note:** `T2 Escalation Required: [reason]`
   - For Invalid/Expired PII: add specific context (e.g., `"ID too blurry"` or `"Passport expired 2024"`)
3. **Resolve → Escalate → Unable to Waive Compliance Concerns**

**Direct Escalation Reasons:**

| Reason |
|---|
| Inclusion Term: `"Case created because name contains Apple corporate compliance inclusion list words."` |
| Sanctioned Countries: Cuba (CUB), Iran (IRN), North Korea (PRK), or connection to sanctioned Ukrainian regions |
| Names Do Not Match: ID/registration name ≠ Screened Entity name |
| Partial ID: back of ID submitted, or name/DOB is obscured |
| Invalid PII: non-ID document, altered, or illegible |
| Unable to Translate ID |

### More than 25 Matched Data Hits

1. Complete Case Overview normally
2. Write Summary notes for Matched Data Hits 1–25
3. Add note: `"Escalation Required: 25+ Matched Data Hits"`
4. Resolve → **Escalate → Unable to Waive Compliance Concerns**

### Linked Cases

Linked cases appear as multiple TIDs in the case header.
- Your case = **In Progress**
- Open cases = also assigned to you
- Provisional cases = **do not action**

Work each case individually. All notes must appear on each case. Confirm correct case before actioning.

### Doing Business As (DBA) Scenarios

Names appear as `[Name] ; [DBA Name]`. Only the screened portion is evaluated.

1. Complete Case Overview
2. View PII from System Notes:
   - PII matches screened name → review normally
   - PII matches non-screened DBA name → **direct escalate as Invalid PII**
3. Summary notes focus only on the screened name

**Example:**
```
Screened Entity: GG Technologies Inc ; StayTouch
→ "GG Technologies Inc" is the screened portion.
```

**DBA Case Overview example:**
```
Screening Date: 2026-01-01
Client & Event: Program B, rt_enrollment_final
Entity Type: Company
Screened Entity Full Name: GG Technologies Inc ; StayTouch
Screened Entity Location: Worcester, NA, USA
IP Location: Worcester, MA, USA
Screenshot: EKATA.PNG
PII attached: PII is attached and has been reviewed
```

**DBA Summary example:**
```
MATCHED ENTITY HIT: 1
IS THE ENTITY TYPE A MATCH? Match
IS THE NAME A MATCH?: Partial Match
IS THERE A LOCATION MATCH?: Mismatch

SUMMARY: Partial name match. Screened Entity: GG Technologies Inc. Matched Data: 3D Technologies LLC.
No location match. Screened Entity: USA. Matched Data: RUS.
CLEAR based on name and location variances.
```

### Ownership Percentages

If System Notes show ownership percentage < 100% for the Screened Entity:
- **NOT a direct escalation** — complete full case review first
- Final action: **Escalate → Unable to Waive Compliance Concerns**
- Decision note: `"Escalate due to ownership percentages listed."`

### Case Created by the Business

When CMS shows `"Case created at the request of the business"` instead of Matched Data:

1. Search TID prefix (everything before `_`) in CMS search bar to find the core case
2. Use Matched Data from the core case to evaluate the current case
3. Action accordingly

---

## Related Links
- [Core Procedures](KB_01_Core_Procedures.md)
- [Compliance Review Model](KB_03_Review_Model.md)
- [Match Determination & PII Criteria](KB_04_Match_Determination.md)
- [Decisioning Matrix](KB_05_Decisioning_Matrix.md)
- [Compliance Tools](KB_06_Tools.md)
- [CMS User Guide](KB_07_CMS_Guide.md)
