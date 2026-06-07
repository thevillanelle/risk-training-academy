# KB_11 — Client: Provisional Case Review
### Risk Intelligence Procedure — CP003
Last Updated: December 2025

---

> **This document is self-contained.** Follow it when working cases from the Provisional Case Tracker.

---

## Quick Reference

| | |
|---|---|
| **Applies to** | Non-Regulated Program A + Program B pending cases |
| **CMS Instance** | Non-Regulated: https://acm-nonregulated.g.vilecorp.com |
| **Required first note** | `2025 CI ONBOARDING PENDING CASE REVIEW` |
| **Can't clear + escalating** | Note: `ESCALATED HOLD` |
| **DOB clear without PII** | Use "Not a Sanction Match" (NOT "Cleared by DOB") |
| **25+ Matched Data Hits** | Skip — no notes required |

---

## What Is a Provisional Case Review?

Non-regulated Program A and Program B cases are created in CMS **without PII attachments**. They remain in Provisional status until the Screened Entity uploads documentation, which moves the case to Open.

Provisional case reviews are conducted by investigators when the Open case queue is finished, or when instructed by a team lead. The purpose is to proactively review cases while they wait, flagging those that can be cleared or identifying those that will need escalation when they open.

---

## Step 1 — Access the Provisional Case Tracker

The **Provisional Case Tracker** is a collaborative Quip spreadsheet containing each non-regulated client's pending cases from the previous 7 days.

1. Open the Backlog Tracker Quip document
2. Find the group of cases with your name in the **"Investigator Name"** column
3. As each case is reviewed, mark an **X** in the 3rd column to prevent duplicate reviews

> ⚠️ **Do NOT download the tracker.** Edit only in-browser to preserve real-time updates for the whole team.

---

## Step 2 — Load Cases in CMS

1. Log into Non-Regulated CMS: https://acm-nonregulated.g.vilecorp.com
2. Change status to **CMS Classic**
3. Load TIDs using one of these methods:

### Query Builder
1. Click the magnifying glass (🔍) → **Advanced Search**
2. Click **Add Rule**
3. In **Select Field**, type or choose **Transaction ID**
4. Paste a TID from the tracker → click **Run Report**

### Basic Search
1. Choose **Sanctions** from the LOB dropdown
2. Paste a TID from the tracker into the basic search bar
3. Add a **comma** immediately after the TID (makes results return faster)

> **Tip:** Multiple TIDs can be searched at once — separate by commas in either method.

---

## Step 3 — Review Procedure

> **Every pending case note must begin with this required Typinator snippet:**
> ```
> 2025 CI ONBOARDING PENDING CASE REVIEW
> ```

### If the name appears complete AND is obviously different from Matched Data:

No additional research is required.
1. Complete Case Overview
2. Complete Summary notes
3. Action accordingly

**Example:**
```
2025 CI ONBOARDING PENDING CASE REVIEW

MATCHED ENTITY HIT: 1
IS THE ENTITY TYPE A MATCH? Match
IS THE NAME A MATCH?: Partial Match
IS THE DATE OF BIRTH A MATCH? Unknown
IS THE LOCATION A MATCH?: Unknown

SUMMARY: Partial name match. Screened Entity: Anthony Fern. Matched Data: Anthony Fernandez.
DECISION: CLEAR by name variance
```

### If you cannot clear by name variance alone:

Run a full case review:
1. Follow the **Compliance Tools Path of Progression**
2. Reference previously submitted PII from linked cases (note: `"PII found on TID: __________"`)
3. Conduct advanced research as needed (iCloud, MZ, LexisNexis, etc.)
4. Ask peers for best practices if needed

> **DOB clears without PII:** Use **"Not a Sanction Match"** — not "Cleared by DOB." That code is only for cases where customer-submitted PII was used.

---

## Step 4 — Notating DBA Name Cases

Cases with DBA names are reviewed according to Program B Review Guidelines.

If PII is available on a previous case but does **not** match the name being screened, this is a **"PII Name Does Not Match"** scenario — notate it as such and escalate accordingly.

---

## Step 5 — Advanced Research Tools

| Entity Type | Research Tools |
|---|---|
| **Individuals — US Only** | ID Verification Tool · LexisNexis Due Diligence Person Report |
| **Individuals — US + International** | Case Support Tool · iCloud Support Tool · Google (name + company) · UK Company Officer Search |
| **Companies — US Only** | LexisNexis Due Diligence Business Report |
| **Companies — Foreign & Domestic** | D&B WorldBase (in LexisNexis) or DNB.com · Public Sources for Company Data (KB_06) · Google |
| **Apps/Games/Media** | Apple App Store (often shows developer info for published apps) · Google |

**To attach web evidence as PDF:**
1. Navigate to the page in Safari
2. **File → Export as PDF** → save to Downloads
3. In CMS: **Attach File → Upload → Apply**

> ⚠️ End of every day: move all downloaded files to Trash and empty it.

---

## Step 6 — Direct Escalation Scenarios (Escalated Hold)

Do **not** conduct research for these cases. Simply add the required notes and mark as Escalated Hold.

**If a case meets any criteria below:**
1. Leave the `2025 CI ONBOARDING PENDING CASE REVIEW` note
2. Notate the direct escalation reason
3. Notate `ESCALATED HOLD`

```
2025 CI ONBOARDING PENDING CASE REVIEW
[Reason]
ESCALATED HOLD
```

### Direct Escalation Reasons

| Reason | Notes |
|---|---|
| **No full name given** | Screened Entity submitted a partial name or nickname |
| **Inclusion Term** | Matched Data shows inclusion list words |
| **Gibberish/Scripted Account** | New iCloud account + wallet links "mingzi xing" or "ZhuJu Mao" with ties to Turkey/China/USA; or new account in Pakistan with China IP + gmx.com/hotmail.com/outlook.com domain + gibberish handle |
| **Embargoed Country** | Most recent case for this Screened Entity company was **rejected** for doing business in embargoed countries; OR prior submitted PII is from a sanctioned country. **Exception:** If a clear FOLLOWED the rejection, review as normal. |
| **Full Name Match** | Screened Entity name is a full match to **any** Matched Data name — including AKAs, spelling variations, and primary name |
| **2/3 Name + Country Match** | Screened Entity's full name matches 2 of 3 components of Matched Data name (individuals only). Check MZ account age: if aged (>30 days) + different country → can **Clear**. If new or no location variance → **ESCALATED HOLD** |

> ⚠️ **Multiple hits:** If any single hit requires direct escalation, you do not need to work each hit. Add the escalation note and hold.

---

## Reasons to Escalated Hold (Non-Direct)

In addition to the direct escalation criteria, use **ESCALATED HOLD** for these scenarios:

- Full review complete + not enough location/DOB/name info to make a decision
- Most recent case for a Screened Entity **company** was rejected for ownership issues
- **Location is the only variance** — not enough to clear; hold instead
- The Screened Entity is a potential sanctions match to the Matched Data Hit

See [Decisioning Matrix](KB_05_Decisioning_Matrix.md) for further guidance.

---

## Other General Guidelines

- **25+ Matched Data Hits:** Skip these cases entirely — no notes required. Move to your next case.

---

## Typinator Forms

Use these codes to auto-expand notes for pending case reviews:

### Case Overview Snippet
```
2025 CI ONBOARDING PENDING CASE REVIEW
SCREENED ENTITY DATA
SCREENING DATE: [date]
CLIENT & EVENT: [client, event]
ENTITY TYPE: [Individual/Company/Vendor/Developer]
SCREENED ENTITY NAME: [full name]
SCREENED ENTITY LOCATION: [city, region, country]
[IP LOCATION: [location] | Screenshot: Ekata.png — if applicable]
```

### Direct Escalation Snippet
```
2025 CI ONBOARDING PENDING CASE REVIEW
[Select reason: No full name given | Inclusion term | Gibberish/Scripting pattern | Embargoed country rejection | Full name match | 2/3 name and country match]
ESCALATED HOLD
```

---

## Related Links
- [Client: Program A](KB_08_Client_Program A.md)
- [Client: Program B](KB_09_Client_Program B.md)
- [Core Procedures](KB_01_Core_Procedures.md)
- [Compliance Tools](KB_06_Tools.md)
- [Decisioning Matrix](KB_05_Decisioning_Matrix.md)
- [CMS User Guide](KB_07_CMS_Guide.md)
- [Understand Compliance Terms & Notations](KB_02_Glossary.md)
