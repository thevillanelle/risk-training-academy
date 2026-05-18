# KB_04 — Match Determination & Acceptable PII Criteria
### How to Evaluate Matches and Validate PII
Last Updated: April 2026

---

## Overview

When reviewing a compliance case, you compare the Screened Entity against each Matched Data Hit across four dimensions: **entity type, name, date of birth,** and **location**. This document defines each match type and explains when to clear, escalate, or investigate further. It also outlines what makes submitted PII acceptable.

---

## Table of Contents
1. [Defining Matches](#defining-matches)
2. [Match Determination — Individuals](#match-determination--individuals)
3. [Match Determination — Companies](#match-determination--companies)
4. [Special Case: China Company Naming Convention](#special-case-china-company-naming-convention)
5. [Acceptable PII Criteria — Individuals](#acceptable-pii-criteria--individuals)
6. [Acceptable PII Criteria — Companies](#acceptable-pii-criteria--companies)

---

## Defining Matches

### Entity Type

| Result | Definition | Example |
|---|---|---|
| **Match** | Both Screened Entity and Matched Data are individuals, or both are businesses. | Individual vs. Individual |
| **Mismatch** | They are different entity types. | Zhao Wei (individual) vs. Zhao Wei LLC (company) |

> An entity type mismatch means the Matched Data Hit **cannot** be a true match. Clear the case.

---

### Name

| Result | Definition | Example |
|---|---|---|
| **Full Match** | The entire name matches. | Timothy Apple vs. Timothy Apple |
| **Partial Match** | One of the Screened Entity names matches any of the Matched Data names (including AKAs). | John Smith vs. John Smithers |
| **False Positive** | None of the names match. | John Smith vs. Johnson Smithy |

> **Important:** Check both the Primary Name and all AKA names. Also review both Romanized and native script versions.

---

### Date of Birth

| Result | Definition |
|---|---|
| **Match** | Full date (day/month/year) matches. |
| **Mismatch** | Any variance in day, month, or year. |
| **Unknown** | Not enough information available for the Screened Entity and/or Matched Data. |

---

### Location

| Result | Definition |
|---|---|
| **Match** | Full address matches (street, city, state/province, country). |
| **Mismatch** | Any variance in country, state, city, province, oblast, etc. |
| **Unknown** | Not enough information to determine a variance or match. |

---

### 2/3 Name Match *(Program Gamma only — without PII)*

Applies when:
- The case is Program Gamma
- No PII has been submitted
- The Screened Entity's **full name matches 2 of 3 names** in the Matched Data name

This is classified as a **partial match**.

**Examples:**

| Screened Entity | Matched Data | Result |
|---|---|---|
| John Smith | John Jacob Smith | 2/3 match (partial) |
| Aleksandr Muskov | Aleksandr Muskov Sergeevich | 2/3 match (partial) |
| John Allen Smith | John Jacob Smith | Regular partial match (different middle name; can be cleared) |
| Aleksandr Vladimirovich Muskov | Aleksandr Muskov Sergeevich | Regular partial match (can be cleared) |

> If both individuals have full first/middle/last names and one component differs, that is a standard partial match — not a 2/3 match.

---

### Close Name Match *(Companies)*

A company name often has two parts:
- **Brand name** — the unique identifier (e.g., "Apple" in Apple Inc.)
- **Legal identifier** — the business type suffix (e.g., "Inc.," "LLC," "GmbH")

A **close name match** is when the brand name is the same but the legal identifier differs.

**Examples:**

| Screened Entity | Matched Data | Result |
|---|---|---|
| Biotech | Biotech LLC | Close match (partial) |
| Cheer Flyer Company Unlimited | Cheer Flyer Company | Close match (partial) |

> Translate legal identifiers when researching: LLC (US) = GmbH (Germany) = OOO (Russia)

---

## Match Determination — Individuals

Compare entity type, name, DOB, and location/place of birth.

| Factor | Finding | Action |
|---|---|---|
| **Entity Type** | Mismatch | **Clear** — Not a Sanction Match |
| **Name** | Not a full match to any Primary Name or AKA | **Clear** — Not a Sanction Match |
| **Date of Birth** | DOB differs from Matched Data | **Clear** — Cleared by DOB |
| **Location** | Citizenship/residency/address is not a match to any Matched Data location **AND** name is not a full match | **Clear** — Not a Sanction Match |

> ⚠️ Before clearing on location: If the Screened Entity address is a **full match** (street, city, state, country) to the Matched Data, **escalate** with reason Potential Sanction Match.

---

## Match Determination — Companies

Compare entity type, name, and location.

| Factor | Finding | Action |
|---|---|---|
| **Entity Type** | Mismatch | **Clear** — Not a Sanction Match |
| **Name** | Full match to any Matched Data name | **Escalate** — Unable to Waive Compliance Concerns |
| **Name** | Close match AND countries match | **Escalate** — Unable to Waive Compliance Concerns |
| **Name** | Not a close match and not a full match | **Clear** — Not a Sanction Match |
| **Location** | Not a full match to any Matched Data location **AND** name is not a full match | **Clear** — Not a Sanction Match |

> ⚠️ Before clearing on location: If the Screened Entity address is a **full match** (street, city, state, country) to the Matched Data, **escalate** with reason Potential Sanction Match.

---

## Special Case: China Company Naming Convention

Chinese company names follow a required structure: **Registered Area + Brand Name + Industry Type + Organizational Form**.

Because registered area and industry type are required components, two companies with the same brand name but different registered areas (e.g., Beijing Huawei vs. Shanghai Huawei) are likely the **same company** operating in different locations.

**Rule:** If the **brand names match**, escalate — even if the registered areas differ.

> Only the Chinese name is legally recognized. English names are for marketing/international use and do not appear on official documents.

---

## Acceptable PII Criteria — Individuals

1. **Name match:** The name on the ID must match the Screened Entity name in CMS. If it doesn't, escalate.
   - Nicknames and initials alone are **not accepted**.
   - The Screened Entity must submit at least one first name and one last name.
   - If the full name appears on a single line with no clear first/last separation, accept any combination of at least 2 names.
   - If a comma is present in the name, treat it as a line break.
   - If the Screened Entity legitimately has no surname (as is common in some regions), and the PII also shows no surname, the attachment is still acceptable as long as the names match.
2. **Expiration:** If the ID is expired **more than one year**, escalate.
3. **Date of Birth:** Must be visible on the ID. If no DOB is present, escalate.
4. **ID Number:** Enter the passport or national ID number in CMS if visible. If the number is obscured or unreadable but the name and DOB are clear, the PII may still be used — omit the ID number from CMS fields.
5. **Document integrity:** If the ID appears modified, doctored, or is illegible due to blurriness, escalate.
6. **Partial ID:** If only the back of the ID was submitted, or the name/DOB is obscured, escalate.

---

## Acceptable PII Criteria — Companies

1. **Issuing authority:** The document must be an official document showing the issuing authority.
2. **Name match:** The name on the registration must match the Screened Entity name. If it doesn't, escalate.
3. **Date of Registration / Company Number:** If available, note these in CMS. If unavailable, the PII may still be used.
4. **Expiration:** Expired PII is acceptable for companies regardless of how long it has been expired.
5. **Document integrity:** If the document appears modified or illegible, escalate.
6. **Not accepted:**
   - Bank statements
   - A list of requested corporate documents (not the documents themselves)

> Any government-issued document — including IRS Employer Identification Number (EIN) letters — is acceptable.

---

## Related Resources
- [Decisioning Matrix](KB_05_Decisioning_Matrix.md)
- [Compliance Review Model](KB_03_Review_Model.md)
- OFAC Name Match FAQ: https://ofac.treasury.gov/faqs/5
- OFAC Weak Alias Guidance: https://ofac.treasury.gov/faqs/topic/1646
