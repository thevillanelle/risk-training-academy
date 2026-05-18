# KB_07 — CMS User Guide
### Case Management System System Reference
Last Updated: April 2025

---

## Overview

Case Management System (CMS) is the primary tool for reviewing and actioning compliance cases. It matches and assigns cases to investigators based on their skill set and tier, and provides a workspace for documenting research, uploading evidence, and resolving cases.

**Non-Regulated (Program Alpha, Program Beta, Program Gamma):** https://acm-nonregulated.g.vilecorp.com
**Regulated (API):** https://acm-regulated.g.vilecorp.com

---

## Table of Contents
1. [Logging In](#logging-in)
2. [Display Settings](#display-settings)
3. [Dashboard Overview](#dashboard-overview)
4. [Case Volume Widget](#case-volume-widget)
5. [My Metrics Widget](#my-metrics-widget)
6. [User Menu](#user-menu)
7. [Case Header Details](#case-header-details)
8. [Case Details Panel](#case-details-panel)
9. [Resolving a Case](#resolving-a-case)
10. [Case Priority & SLA](#case-priority--sla)
11. [Working a Case — Tips](#working-a-case--tips)
12. [Logging Notes](#logging-notes)
13. [Attaching Files](#attaching-files)

---

## Logging In

1. Navigate to the appropriate URL above
2. Enter your AppleConnect credentials
3. Two-step verification may be required
4. Confirm **Sanctions** is selected from the Lines of Business

---

## Display Settings

CMS displays information in multiple widgets that rearrange based on your Safari window size and zoom level.

- **Stretch the window** or use **⌘+** / **⌘−** to zoom in and out
- Arrange the display to your preference — recommended: zoom out enough to see all key widgets in one view

---

## Dashboard Overview

| Element | Description |
|---|---|
| **ACM button** | Returns to the dashboard from anywhere in CMS |
| **Availability Status** | Dropdown to set your current status (Ready / CMS Classic / Not Ready) |
| **Next Case** | Assigns you the next case based on your tier, skilling, and SLA priority. Availability varies by status. |
| **Case Volume** | Shows open case counts, SLA misses, suspended and in-progress cases per client |
| **Yesterday / Today / Week** | Toggle to view your metrics for different time periods |
| **My Metrics** | Breakdown of your previously actioned cases |
| **User Menu** | Click your name or silhouette to access settings |
| **Advanced Search** (🔍) | Click the magnifying glass icon to search cases by TID, name, or other criteria |
| **Basic Search** | Search by billing, bank, or developer names and addresses directly from the dashboard |

---

## Case Volume Widget

Displays open cases across all clients you are provisioned for.

| Column | Description |
|---|---|
| **Client** | Source application where the case originated |
| **Open Total** | Total open cases in the queue for this client |
| **Tier** | Breakdown of cases by support tier |
| **Suspended** | Number of suspended cases for this client |
| **In Progress** | Cases currently assigned and in review |
| **Pending** | Cases awaiting PII submission from the customer |
| **Missed SLA** | Cases that have exceeded their SLA deadline |

---

## My Metrics Widget

Toggle **Yesterday / Today / Week** to view actioned case counts by time period. If provisioned for multiple lines of business, metrics are displayed per LOB.

---

## User Menu

Click your name or silhouette icon to access:

| Option | Description |
|---|---|
| **Info** | Your Person ID, Role, and contact information |
| **Logging** | Leave as Default |
| **Recent Cases** | List of recently worked cases — useful for quickly returning to a case |
| **Color Scheme** | Changes CMS's color theme |
| **Mass Action Cases** | Action multiple cases simultaneously |
| **Logout** | Logs you out of CMS |

---

## Case Header Details

The Case Header contains the key context for a compliance review. All of these fields should be captured in your Case Overview notation.

| Field | Description |
|---|---|
| **SLA** | Target Service Level Agreement deadline — appears at top of screen |
| **Screen Date** | Date and time (Pacific Time) the compliance screening occurred |
| **Transaction ID (TID)** | The unique ID CMS assigns to this case |
| **Client** | The application where the case data originated |
| **Event** | The process or interaction that created the case (e.g., enrollment, agreement) |
| **Risk Score** | Numerical score (0–100) assigned by CMS based on triggered screening rules |
| **Risk Category** | Visual indicator of risk: Low (0.0 or 72.0–79.9), Medium (80.0–89.9), High (90.0–100.0). Note: Inclusion Terms score 0.0 but are still classified Low. |
| **Product** | Apple financing product associated with the case (Breakout/API only) |
| **Case Status** | Open / In Review / Clear / Pending / Rejected |
| **PCD** | Pending Cancel Date — the date a suspended case will auto-cancel |
| **Assigned To** | The investigator currently assigned to this case |
| **Last Actioned By** | Name of investigator who last took an action |
| **Last Action Date** | Date of the most recent action |

---

## Case Details Panel

Displays each entity on the case. Layout varies based on event type, screened entity type, and number of entities.

### Always Present

| Section | Description |
|---|---|
| **Screened Entity** | The customer/developer/vendor whose name triggered the potential sanctions match. May appear as: Customer, Customer Best Match, Individual, Company, Bank, Vendor, or Developer. |
| **Matched Data** | Data from sanctions lists showing all potential matches (Matched Data Hits) for the Screened Entity |
| **Notes** | View existing notes or add new ones; includes file attachment option |

### May Also Be Present

| Section | Description |
|---|---|
| **Related Case Icons (Binocs)** | Small icons next to fields indicating related cases with the same data. The number shows how many related cases exist; the color indicates previous actions taken. |
| **Drilldown** | Clicking a Binoc icon opens a drilldown showing previous cases with matching information |
| **Notification Ribbon** | A yellow ribbon at the top indicates an order update — click to refresh |

---

## Resolving a Case

Click **Resolve** at the bottom of the case to action it. A popup window appears showing only the actions available to your tier.

**Available actions by tier:**

| Action | Tier 1 | Tier 2 |
|---|---|---|
| Clear | ✅ | ✅ |
| Escalate | ✅ | ✅ |
| Suspend | ✅ (Program Gamma, Program Alpha batch_free_dev) | ✅ |
| Reject | ❌ | ✅ (Program Gamma only) |

See [Core Procedures — Reason Codes](KB_01_Core_Procedures.md#reason-codes) for the correct reason code to select.

> ⚠️ **Errors:** If you action a case incorrectly, notify your team manager immediately with the TID, date of action, what happened, and the intended action. For API cases: a reject in error triggers a real-time alert to business partners.

---

## Case Priority & SLA

CMS automatically assigns the highest-priority case based on your tier, skilling, and SLA deadlines.

**All current clients have a 48-hour SLA.**

To begin receiving cases:
1. From the dashboard, change status from **Not Ready** to **Ready**
2. A countdown appears — a new case loads automatically when the timer ends
3. Click **Next Case** to skip the timer and receive a case immediately

---

## Working a Case — Tips

### Checking Related Cases

Related case icons (Binocs) appear next to data fields with matching information from previous cases.

1. Check for Binoc icons next to data points in the Screened Entity section
2. Click a Binoc to open the drilldown and view previous cases with that same data
3. Review previously cleared or rejected cases for context before working the current one

### Viewing Previous Notes and Attachments

CMS defaults to displaying previous notes on the case. Use the **View Notes Only** dropdown to toggle between:
- Notes only
- Combined view (notes + attached files + action history)

**Viewable in-browser** (no download needed): `.jpg`, `.jpeg`, `.pdf`, `.html`, `.txt`

> ⚠️ Some PII types require downloading. Delete any downloaded files from your Mac after reviewing.

### Advanced Search

1. Click the magnifying glass (🔍) icon on the dashboard
2. Click **Advanced Search**
3. Use **Query Builder** → click **Add Rule** → select a field → enter value → **Run Report**
4. Multiple TIDs can be loaded at once using commas

### Basic Search

Available directly from the dashboard. Search by name, billing info, bank name, or developer. Paste a TID followed by a comma for faster single-case retrieval.

---

## Logging Notes

As you research, record your findings in the **Add a Note** field.

1. Type notes in the **Add a Note** field
2. Click **Apply** to save — notes are only visible within CMS
3. Only the most recently applied note can be edited
4. To correct an earlier note: save a new note clearly labeled as a correction

> See [Core Procedures — Notation Templates](KB_01_Core_Procedures.md#notation-templates) for approved note formats.

---

## Attaching Files

CMS provides secure, case-specific storage for research evidence. Attachments are critical for demonstrating due diligence.

1. Save the file with the appropriate filename (use approved naming conventions)
2. Type associated notes in the **Add a Note** field
3. Click **Attach File** → select file using Clipboard or Drag and Drop
4. Click **Apply** → refresh the case to confirm the file and notes were saved
5. Delete the file from your Mac after confirming upload

> See [Compliance Tools — Attaching Web Evidence](KB_06_Tools.md#attaching-web-evidence-to-hcm) for saving web pages as PDFs.
