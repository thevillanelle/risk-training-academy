# KB_03 — Compliance Review Model
### The 4-Step Framework for All Case Reviews
Last Updated: April 2026

---

## Overview

The Compliance Review Model is the framework used for every case review across all clients. Following it ensures investigations are **thorough, efficient, and consistent** — and that your documentation will hold up to audit.

Every case moves through four steps, in order:

```
1. Complete Case Overview
       ↓
2. Research and Document
       ↓
3. Summary and Decision
       ↓
4. Action
```

---

## Step 1 — Complete Case Overview

A high-level walkthrough of the case to identify key indicators before diving into research.

**Ask yourself:**
- What type of case is this? (Client, event, entity type)
- Why is this case under review? (What triggered it?)

**Complete the Case Overview notation** using the approved template. → See [Core Procedures: Case Overview Notation](KB_01_Core_Procedures.md#notation-templates)

> **Note:** For client-specific Case Overview requirements (e.g., IP Location for Program Beta), see your client procedure doc.

---

## Step 2 — Research and Document

Use available tools and information to build a comprehensive profile of the Screened Entity. **Document as you go** — do not wait until research is finished.

### Cases Without PII

When no PII has been submitted by the customer, follow the **Tools Path of Progression** to build the Screened Entity profile. → See [Compliance Tools](KB_06_Tools.md)

**Shortcuts before running a full path of progression:**
- **Entity type mismatch:** If the Matched Data Hit is a fundamentally different entity type (e.g., company vs. individual), you can clear without further research.
- **DOB variance (via LexisNexis):** If you locate a DOB for the Screened Entity and it differs from the Matched Data DOB, no further research is needed. Document the DOB, LexID, names, and locations found.
- **Program Gamma only — Year of Birth variance:** If the Screened Entity's year of birth (visible in the CMS Screened Entity panel) differs from the Matched Data year of birth, no external research is needed. → See [Program Gamma Client Procedure](KB_10_Client_Program Gamma.md)

For all other situations, complete the full path of progression to capture all names, DOBs, addresses, phone numbers, emails, and Apple interaction history.

### Cases With PII

Customer-uploaded PII is used to determine if the Screened Entity is a true match.

1. **Validate the PII** against the Acceptable PII Criteria. → See [Match Determination & PII Criteria](KB_04_Match_Determination.md)
2. **Document PII findings** in the appropriate CMS fields. → See [Core Procedures: PII Documentation Steps](KB_01_Core_Procedures.md#pii-documentation-steps)
3. The following scenarios require **immediate escalation to Tier 3** — no further research needed:

| Scenario | Action |
|---|---|
| Name on PII does not match Screened Entity name | Direct Escalate |
| Event type `batch_type_b_registrant` | Direct Escalate |
| Incomplete ID (name and/or DOB not visible) | Direct Escalate |
| PII from a sanctioned country or region | Direct Escalate |
| Invalid PII (doctored, non-ID document, illegible) | Direct Escalate |
| Apple corporate compliance inclusion term | Direct Escalate |
| Unable to translate PII | Direct Escalate |

### Evaluating Match Quality

After researching, evaluate each Matched Data Hit:

1. **Entity type:** If the hit is a different entity type than the Screened Entity (e.g., company vs. individual), it cannot be a true match. Clear.
2. **Name comparison:** Compare all names — primary and AKA. Look for full matches, partial matches, and false positives.
3. **DOB / Date of Registration:** Compare dates if available.
4. **Locations:** Compare all known locations.
5. **Weak aliases:** If the hit was triggered by a weak alias or partial match with no other corroborating data, it can be cleared. For OFAC guidance on assessing matches: https://ofac.treasury.gov/faqs/5

> **Multiple hits:** Evaluate each Matched Data Hit individually against all research findings.

### Document Everything

Ensure complete notes with supporting screenshots are uploaded in CMS.
→ See [Core Procedures: Notation Templates](KB_01_Core_Procedures.md#notation-templates) for templates and naming conventions.

> ⚠️ Privacy: Any files saved to your Mac during research must be deleted after completing the case.

---

## Step 3 — Summary and Decision

Write a detailed summary comparing the Screened Entity to every Matched Data Hit. Use the approved Summary & Decision template for each hit.
→ See [Core Procedures: Summary & Decision Notation](KB_01_Core_Procedures.md#notation-templates)

Your decision determines which action you'll take in Step 4:

| Decision | Condition |
|---|---|
| **Clear** | You have definitive evidence that the Screened Entity is not the sanctioned party. |
| **Suspend** | Criteria met to request PII (Program Gamma) or extend the pending cancel date (Program Alpha batch_type_a_registrant). → See client procedure docs for suspend criteria. |
| **Escalate** | Insufficient evidence to clear; further review needed by a higher tier. |
| **Reject** | Tier 2 only; Program Gamma cases only. Used for invalid PII or sanctioned country. |

---

## Step 4 — Action

Click **Resolve** in CMS and select the appropriate action.

### Clear
Choose the correct reason code:
- **Cleared by DOB** — if a DOB mismatch was part of the decision
- **Not a Sanction Match** — all other reasons

### Escalate
Escalate when:
- The case meets a direct escalation criterion
- There is insufficient data to determine if the Screened Entity is a true match
- Further research requires Tier 2/3 tools (due to 25+ hits, ownership info, etc.)
- A potential true match is found requiring Tier 3 review

Choose the correct reason code:
- **Potential Sanction Match** — full name AND location match
- **Invalid Customer Submitted Info** — invalid PII
- **Unable to Waive Compliance Concerns** — all other reasons

### Suspend
Only available for:
- **Program Gamma** — case was reviewed without PII and cannot be cleared; set PCD to **14 days**
- **Program Alpha, batch_type_a_registrant** — specific criteria met; set PCD to **30 days**
→ See client procedure docs for detailed suspend criteria.

### Reject
Only for Tier 2 agents on Program Gamma cases.
- **Invalid Customer Submitted Info** or **Sanctioned Country/Region**

> ⚠️ **Multiple hits:** If any single Matched Data Hit requires escalation, the entire case must be escalated.

> ⚠️ **If you action a case in error** (clear, suspend, reject when you shouldn't have): Notify your team manager immediately with the TID, date, summary of what happened, and the intended action.

---

## Quick Reference: All Clients — SLA

All current clients have a **48-hour SLA**.

| Client | SLA |
|---|---|
| Program Alpha (`amp-itc-users`) | 48 hours |
| Program Alpha (`amp-itc-atb`) | 48 hours |
| Program Beta (`wwdr`) | 48 hours |
| Program Gamma (`idms`) | 48 hours |
| API (`applepaymentsinc`) | 48 hours |
