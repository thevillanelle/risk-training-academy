# KB_10 — Client: Identity Management Services (Program Gamma)
### SDS Compliance Procedure — CP000
Last Updated: May 2026

---

> **This document is self-contained.** You can work an entire Program Gamma case from this doc alone.

---

## Quick Reference

| | |
|---|---|
| **CMS Instance** | Non-Regulated: https://acm-nonregulated.g.vilecorp.com |
| **SLA** | 48 hours |
| **Suspend PCD** | **14 days** |
| **Sanctioned Countries** | Cuba (CUB) · Iran (IRN) · North Korea (PRK) + Ukrainian regions |
| **Clear: DOB/YOB mismatch from PII** | Cleared by DOB |
| **Clear: all other** | Not a Sanction Match |
| **Escalate: full name + location match** | Potential Sanction Match |
| **Escalate: invalid PII** | Invalid Customer Submitted Info |
| **Escalate: all other** | Unable to Waive Compliance Concerns |
| **Reject (T2 only)** | Invalid Customer Submitted Info · Sanctioned Country/Region |

---

## What Is Program Gamma?

Identity Management Services provides authentication and authorization for all Apple identities. The Program Gamma compliance client screens Apple IDs when customers in **high-risk countries** add a payment method to their Apple Wallet. Phase 1 covers **35 high-risk countries**.

When a customer's name is a potential match to a sanctions list entry, their account is temporarily restricted and a case is created in CMS. If confirmed as a true sanctions match, the account is deactivated.

---

## Lifecycle of an Program Gamma Case

Understanding the full case lifecycle ensures you apply the right action at the right stage.

```
1. Customer in high-risk country adds payment to Apple Wallet
         ↓
2. Name matches sanctions list → CMS case created → Tier 1 review
         ↓
3a. Can clear? → CLEAR → Customer account unrestricted
3b. Can't clear → SUSPEND (triggers PII request to customer; PCD = 14 days)
         ↓
4. Customer submits PII → case reopens for Tier 1 review
         ↓
5a. Can clear with PII? → CLEAR
5b. PII meets escalation criteria, or can't clear → ESCALATE to Tier 2
         ↓
6. Tier 2: clear, reject (invalid PII), or escalate to Tier 3
         ↓
7. Customer rejected → can resubmit. More than 2 rejections → must escalate to Tier 3.
         ↓
8. Confirmed true match → account deactivated
```

> ⚠️ **Never double-suspend.** Each suspend triggers a customer notification (text + email + in-app). Double-suspending creates poor customer experience and reflects on the Compliance team. If PII has been submitted and you can't clear, escalate — never suspend again.

> **When suspended:** The customer receives a link to upload PII. The link deactivates after the image is saved and cannot be reused. Any attempt to re-upload results in an error message.

---

## Step 1 — Log In and Assign a Case

1. Navigate to https://acm-nonregulated.g.vilecorp.com
2. Log in with AppleConnect credentials
3. Confirm **Sanctions** is selected from Lines of Business
4. Set your status:

| Status | Behavior |
|---|---|
| **Ready** | 10-second countdown, then auto-assigns the next case. Click **Next Case** to skip. |
| **CMS Classic** | Cases assigned only when you click **Next Case**. |
| **Not Ready** | Default at login. No cases assigned. |

---

## Step 2 — Case Overview

1. Review Case Details and confirm **client type** and **event**
2. Complete Case Overview notation:

```
Screening Date:           [from Case Header — "Screen Date"]
Client & Event:           [e.g., idms, batch_accounts]
Entity Type:              [from Screened Entity — "Entity Label"]
Screened Entity Name:     [copy exactly as shown in CMS]
Screened Entity Location: [city, state, country/region — if no city/state, enter country only]
PII attached:             [PII is attached and has been reviewed / No PII attached]
```

> **Translation:** Any names or locations not in English must be translated. You may include original + English, or just English.

**Example:**
```
Screening Date: 2026-01-13
Client & Event: idms, batch_accounts
Entity Type: Individual
Screened Entity Name: Johnny Appleseed
Screened Entity Location: BRA
PII attached: PII is attached and has been reviewed
```

---

## Step 3 — Research and Document

### Vessels, Ships, and Aircraft — Immediate Clear

If the **Matched Data Hit** is a vessel, ship, or aircraft → **Clear immediately. No research needed.**

This applies regardless of whether the Screened Entity name is valid or invalid. Note: if there is any *other* entity type mismatch (not a vessel), follow normal individual/company guidance below.

---

### Individuals — Valid Name Submitted

**Step 3a: Entity type check**
- Matched Data is a different entity type? → **Clear → Not a Sanction Match**

**Step 3b: Year of Birth shortcut** *(Program Gamma-specific)*
- The Screened Entity's **Year of Birth (YOB)** is visible in the CMS Screened Entity panel
- If the YOB **differs** from the Matched Data YOB → **Clear → Not a Sanction Match** (no external research needed)

**Step 3c: Name check (if can't clear by YOB)**

| Scenario | Action |
|---|---|
| Full name match to any Matched Data name | **Suspend** — set PCD to 14 days |
| Name obviously different / not a 2/3 match | **Clear** — no further research needed |
| Partial match (not 2/3) | Continue with Tools Path of Progression |

**Step 3d: 2/3 Name Match scenario**

A 2/3 Name Match = Screened Entity's full name matches 2 of 3 name components in the Matched Data name.
*Example: "John Smith" vs "John Jacob Smith" = 2/3 match.*

1. Check the MZ account age (found in MZ Support → General tab → account creation date)
2. If MZ account is **aged (created over 30 days ago)** AND **different country from Matched Data** → **Clear → Not a Sanction Match**
3. If MZ account is **new (under 30 days)** or no location variance found → **Suspend** — set PCD to 14 days

**Step 3e: Full research (Tools Path of Progression)**

If no shortcut clears the case, run the full path:
1. LexisNexis (if U.S. address listed — check DOB here first)
2. Case Support Tool
3. ASO ACM
4. Ekata
5. iCloud Support Tool

Document all new findings using the Screened Entity Research template:
```
SCREENED ENTITY RESEARCH
DATE OF BIRTH:
LEXID:
NAMES:
LOCATIONS:
EMAILS:
PHONE NUMBERS:
Screenshots: LexisNexis.png, MZ.png, Ekata.png
```

> **LexisNexis Matched Data tip:** If the Matched Data Hit has a U.S. street address but no DOB, search the *Matched Data hit itself* in LexisNexis — you may find a DOB usable for decisioning. Screenshot and note the source in your summary.

> ⚠️ Screenshots from iCloud Support Tool are **not permitted**.

---

### Individuals — Invalid Name Submitted

An invalid name = insufficient to identify the person (e.g., single character, "test", "N/A").

1. Search **MZ Support** for a full valid name in billing infos
2. **Full valid name found:**
   - Entity type mismatch to Matched Data → **Clear**
   - Entity type match → **Suspend** (set PCD to 14 days)
3. **No valid name found:**
   - Complete full research documenting all new info (Tools Path of Progression)
   - **Suspend** to request PII

---

### Individuals — Inclusion Term

If the Screened Entity is an **individual** with an inclusion term:
1. Search **MZ** for the billing name in the wallet
2. Attach a screenshot
3. Create summary note:
   ```
   MZ Billing Name: [Name on card]
   Clear inclusion term
   Screenshot: MZ.png
   ```
4. **Clear** the case

---

### Companies

Use LexisNexis, DNB, or Google to verify the company exists.

- **Evidence found + enough to clear** → Clear by name and location variance; attach findings
- **Full name match to Matched Data** → **Escalate**; cannot clear by location variance alone
- **No evidence company exists:**
  ```
  DECISION: Escalate per GESC guidance
  RECOMMENDATION: Further review needed
  ```
  Action: Escalate → Unable to Waive Compliance Concerns

> If companies are a full name match (including Primary Name or AKA, in Romanized and native script), the case must be escalated. Location variance alone is not enough.

---

### When PII Has Been Submitted

1. Open the PII attachment and validate against Acceptable PII Criteria → [Match Determination & PII Criteria](KB_04_Match_Determination.md)

> ⚠️ Previously submitted PII from a related case may **only** be used if the previous case was also an Program Gamma case.

---

## Step 4 — Summary and Decision

For every Matched Data Hit, complete a summary:

```
Matched Entity Hit:           [hit number]
Is the entity type a match?   [Match / Mismatch]
Is the name a match?          [Full Match / Partial Match / False Positive]
Is the date of birth a match? [Match / Mismatch / Unknown]
Is the location a match?      [Match / Mismatch / Unknown]
———————
SUMMARY: [Specific variances — exact names, DOBs, locations]
———————
DECISION: [Clear / Suspend / Escalate + reason]
```

If escalating, add:
```
RECOMMENDATION: [Specific guidance for Tier 2]
```

> **If the only remaining Matched Data datapoint is a deceased date or sanctioning date only** → Escalate. Not enough to clear.

**Example — Matched Data DOB found in LexisNexis:**
```
Matched Entity Hit: 1
Is the entity type a match? Match
Is the name a match?: Partial Match
Is the date of birth a match? Mismatch
Is the location a match?: Mismatch

SUMMARY: Partial name match. Screened Entity: Satish Sham. Matched Data: Satish Shah.
DOBs do not match. Screened Entity: 1981. Matched Data: 1976 (DOB found in LexisNexis).
Locations do not match. Screened Entity: India. Matched Data: USA.

DECISION: Clear by name, DOB, location variance
```

---

## Step 5 — Action the Case

1. Click **Resolve**
2. Select **Clear**, **Escalate**, or **Suspend**

> ⚠️ If ANY Matched Data Hit requires escalation, the **entire case** must be escalated.

### Clear
| Reason Code | When |
|---|---|
| **Cleared by DOB** | DOB mismatch used, and customer PII was submitted |
| **Not a Sanction Match** | All other clears (entity type, name variance, location, YOB variance without PII) |

### Suspend
- Set **PCD to 14 days**
- Use when: reviewed without PII AND cannot clear after due diligence
- Do **NOT** suspend when PII is already attached — escalate instead

### Escalate
| Reason Code | When |
|---|---|
| **Potential Sanction Match** | Full name AND location match |
| **Invalid Customer Submitted Info** | Invalid PII |
| **Unable to Waive Compliance Concerns** | All other reasons |

### Reject *(Tier 2 only)*
- **Invalid Customer Submitted Info** or **Sanctioned Country/Region**
- All other reject reason codes are Tier 3 only
- If a case is rejected in error: notify manager immediately with TID, date, summary, and intended action

---

## Other Guidelines

### Direct Escalation Scenarios

1. **Complete Case Overview** normally
2. **Create manual note:** `T2 Escalation Required: [reason]`
3. **Resolve → Escalate → Unable to Waive Compliance Concerns** (or Invalid Customer Submitted Info for PII issues)

**Direct Escalation Reasons:**

| Reason |
|---|
| Partial ID: back of ID submitted, or name/DOB obscured |
| Names Do Not Match: PII name ≠ Screened Entity name |
| Invalid PII: non-ID document, altered, or illegible |
| Unable to Translate ID |
| Sanctioned Country: Iran, Cuba, North Korea + Ukrainian sanctioned regions |
| Inclusion Term: company entity name contains Apple corporate compliance inclusion list term |

> For PII-related reasons: always add specific context to your note (e.g., `"ID is too blurry to read"`).

### Case Created by the Business

When CMS shows `"Case created at the request of the business"` instead of Matched Data:

1. Search the TID prefix (everything before `_`) in CMS search bar
2. Use the core case's Matched Data to evaluate the current case
3. If the core case Screened Entity name is **completely different** from the current case name: compare current Screened Entity to core case Matched Data; clear by name and/or DOB variance if applicable

---

## Related Links
- [Core Procedures](KB_01_Core_Procedures.md)
- [Compliance Review Model](KB_03_Review_Model.md)
- [Match Determination & PII Criteria](KB_04_Match_Determination.md)
- [Decisioning Matrix](KB_05_Decisioning_Matrix.md)
- [Compliance Tools](KB_06_Tools.md)
- [CMS User Guide](KB_07_CMS_Guide.md)
