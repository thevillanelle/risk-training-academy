# KB_06 — Compliance Tools
### Research Tools & Path of Progression
Last Updated: March 2026

---

## Overview

This document covers every research tool available to Compliance Investigators, when and how to use each one, and the order in which they should be used (the Path of Progression).

---

## Table of Contents
1. [Path of Progression — When It Applies](#path-of-progression--when-it-applies)
2. [The Path: Tool Order](#the-path-tool-order)
3. [Primary Tools](#primary-tools)
   - LexisNexis
   - MZ Support
   - ASO ACM
   - Ekata
4. [Other Tools](#other-tools)
   - Typinator
   - iCloud Support Tool
   - D&B Business Directory
5. [Public Sources for Company Data](#public-sources-for-company-data)
6. [Attaching Web Evidence to CMS](#attaching-web-evidence-to-hcm)

---

## Path of Progression — When It Applies

The Tools Path of Progression is used **only on cases without PII**. It provides a structured order for building a Screened Entity profile when no customer-submitted identification is available.

**Applies to:** API, Program Gamma (before PII is submitted)
**Also used for:** Program Alpha `batch_type_a_registrant` and Pending Case reviews

**Does NOT apply when:** PII has already been submitted. In that case, validate the PII instead. → See [Match Determination & PII Criteria](KB_04_Match_Determination.md)

---

## The Path: Tool Order

Use tools in this order. You can stop early if you find a clear decisive datapoint (e.g., a DOB mismatch in LexisNexis).

```
1. LexisNexis
2. Case Support Tool
3. ASO ACM
4. Ekata
5. Secondary Tools (iCloud Support Tool, DNB, Google, etc.)
```

**Early exit shortcuts:**
- **Entity type mismatch found** → Clear immediately, no further research needed
- **DOB found in LexisNexis that differs from Matched Data** → Clear on DOB; document LexID, names, locations found; stop here
- **Program Gamma only — Year of Birth in CMS panel differs from Matched Data** → Clear on YOB; no external research needed at all

---

## Primary Tools

### 1. LexisNexis
**URL:** https://riskmanagement.lexisnexis.com/
**Contains:** Public records, DOB (US only), addresses, foreign and domestic company information

**Tier 1 usage:**
1. Log in and complete multi-factor authentication
2. Use **Find a Person** to search by address or phone number
3. Document: DOB, LexID, new names, new locations (city, state, country)
4. Screenshot any new information → attach to CMS in the appropriate field

**Tier 2 additional tools:**
- **Due Diligence Person Report** (USA only) — search address/phone
- **Due Diligence Business Report** (USA only) — search company names (including DBA), executives, addresses
- **D&B WorldBase** (foreign and domestic) — search DUNS number or company name + country

**For Escalations and Pending Cases (T2):** Download full records containing new information → upload in CMS via Attach File.

> ⚠️ **Privacy:** Screenshots must only contain information relevant to the individual being researched. Do not include unrelated records.

> 💡 **Tip:** If a Matched Data Hit has a U.S. street address but no DOB, you can search LexisNexis for the *Matched Data* hit itself to find a DOB. Screenshot and attach findings; note the source in your summary.

---

### 2. MZ Support
**URL:** https://mzsupport.vilecorp.com/WebObjects/MZSupport.woa
**Contains:** iTunes and Program Alpha purchases, registered devices, storefronts, payment methods, billing information

1. Search by DSID, email, or phone number
2. Click **Display Full Address** under Full Details → reveals current billing info including address and phone
3. Check **Family Sharing** → document any additional names and email addresses
4. If a **Billing Infos** link appears under Current Billing Information, click it
5. Document: new names, locations, email addresses, phone numbers
6. Screenshot new information → attach to CMS

> 💡 **Program Gamma tip:** The MZ account creation date matters. An account aged over 30 days is considered reliable for location data. A new account (<30 days) should not be used as a location datapoint alone.

---

### 3. ASO ACM
**URL:** https://acm-nonregulated.g.vilecorp.com/ui-service/home/lobs/AOS
**Contains:** Finished goods order history, payment, billing & shipping history

1. From CMS dashboard, change availability status to **CMS Classic**
2. Select **ASO** from the Lines of Business on the dashboard
3. Click the magnifying glass → **Advanced Search**
4. In Query Builder, add a rule for DSID, email, and/or phone number
5. Document: new names, locations, email addresses, phone numbers (from billing, shipping, and pickup contact sections)
6. Screenshot new information → attach to CMS

---

### 4. Ekata
**URL:** https://app.ekata.com/search
**Contains:** Public records, IP address data, digital identity information

1. Click the **SILPH icon** next to the Screened Entity name in CMS → Ekata opens automatically with pre-filled data
2. Review results for DOB, names, locations, phone numbers
3. Screenshot any new information → attach to CMS

> **Program Beta note:** Always capture the IP Location and Ekata screenshot for Program Beta cases and include in the Case Overview notation.

---

## Other Tools

### Typinator
**URL:** https://istweb.vilecorp.com/scv/en/typinator
Manages investigator notation templates and keyboard shortcuts. All approved case note templates are available as Typinator snippets. Also accessible via the built-in CMS User Note feature.

---

### iCloud Support Tool
**URL:** https://support.icloud.vilecorp.com/support/client/index.html?lang=en-us
**Contains:** Apple Account profile information — address, phone number, alternate email addresses

> ⚠️ **Screenshots are NOT permitted** from this tool for security reasons. Most data available here can also be found in MZ Support, where screenshots are encouraged.

1. Search by email, DSID, first/last name, or phone number
   - If searching by email or DSID: every result is relevant to the Screened Entity — document all new data
   - If searching by name or phone: results may not all relate to the same person — only document relevant accounts
2. **Identity tab:** address, phone, Apple ID information
3. **Security tab:** expand *Two-Factor Authentication Trusted Devices* for additional phone/location info; expand *Enrollment Device* for additional location info
4. **General tab:** *Apple Account Creation Date* — used to determine account age

---

### D&B Business Directory
**URL:** https://www.dnb.com/business-directory.html
**Contains:** Public records for foreign and domestic companies

Searchable by DUNS number and company name. Use for T1 company research (Program Alpha `batch_type_a_registrant`, Pending Cases). D&B WorldBase in LexisNexis is available for T2.

> If a DUNS search returns a different company name than the Screened Entity → Suspend, set PCD to 30 days; attach findings.

---

## Public Sources for Company Data

Use these official government registries to verify company existence for `batch_type_a_registrant` and Pending Case reviews.

### United States (by State)

| State | URL |
|---|---|
| Alabama | https://arc-sos.state.al.us/CGI/CORPNAME.MBR/INPUT |
| Alaska | https://www.commerce.alaska.gov/cbp/main/search/entities |
| Arizona | https://apps.azsos.gov/apps/tntp/se.html |
| Arkansas | https://www.ark.org/corp-search/index.php |
| California | https://bizfileonline.sos.ca.gov/search/business |
| Colorado | https://www.sos.state.co.us/biz/BusinessEntityCriteriaExt.do |
| Connecticut | https://service.ct.gov/business/s/onlinebusinesssearch |
| Delaware | https://icis.corp.delaware.gov/Ecorp/EntitySearch/NameSearch.aspx |
| Florida | https://search.sunbiz.org/Inquiry/CorporationSearch/ByName |
| Georgia | https://ecorp.sos.ga.gov/BusinessSearch |
| Hawaii | https://hbe.ehawaii.gov/documents/search.html |
| Idaho | https://sosbiz.idaho.gov/search/business |
| Illinois | https://www.ilsos.gov/departments/business_services/business_searches.html |
| Indiana | https://bsd.sos.in.gov/publicbusinesssearch |
| Iowa | https://sos.iowa.gov/search/business/search.aspx |
| Kansas | https://www.sos.ks.gov/eforms/BusinessEntity/Search.aspx |
| Kentucky | https://web.sos.ky.gov/bussearchnprofile/search.aspx |
| Louisiana | https://coraweb.sos.la.gov/commercialsearch/commercialsearch.aspx |
| Maine | https://apps3.web.maine.gov/nei-sos-icrs/ICRS |
| Maryland | https://mblsportal.sos.state.mn.us/Business/Search |
| Massachusetts | https://corp.sos.ms.gov/corp/portal/c/page/corpBusinessIdSearch |
| Michigan | https://bsd.sos.mo.gov/BusinessEntity/BESearch.aspx |
| Minnesota | https://biz.sosmt.gov/search/business |
| Mississippi | https://corp.sos.ms.gov/corp/portal/c/page/corpBusinessIdSearch |
| Missouri | https://bsd.sos.mo.gov/BusinessEntity/BESearch.aspx |
| Montana | https://biz.sosmt.gov/search/business |
| Nebraska | https://www.nebraska.gov/sos/corp/corpsearch.cgi |
| Nevada | https://www.nvsos.gov/sos/businesses |
| New Hampshire | https://quickstart.sos.nh.gov/online/BusinessInquire |
| New Jersey | https://www.njportal.com/DOR/businessrecords |
| New Mexico | https://enterprise.sos.nm.gov/search/business |
| New York | https://apps.dos.ny.gov/publicInquiry/ |
| North Carolina | https://www.sosnc.gov/search/index/corp |
| North Dakota | https://firststop.sos.nd.gov/search/business |
| Ohio | https://businesssearch.ohiosos.gov/ |
| Oklahoma | https://www.sos.ok.gov/corp/corpinquiryfind.aspx |
| Oregon | https://egov.sos.state.or.us/br/pkg_web_name_srch_inq.login |
| Pennsylvania | https://file.dos.pa.gov/search/business |
| Rhode Island | https://business.sos.ri.gov/CorpWeb/CorpSearch/CorpSearch.aspx |
| South Carolina | https://businessfilings.sc.gov/BusinessFiling/Entity/Search |
| South Dakota | https://sosenterprise.sd.gov/BusinessServices/Business/FilingSearch.aspx |
| Tennessee | https://tnbear.tn.gov/Ecommerce/FilingSearch.aspx |
| Texas | https://mycpa.cpa.state.tx.us/coa/ |
| Utah | https://secure.utah.gov/bes/index.html |
| Vermont | https://bizfilings.vermont.gov/online/BusinessInquire/ |
| Virginia | https://cis.scc.virginia.gov/EntitySearch/Index |
| Washington | https://ccfs.sos.wa.gov/ |
| West Virginia | https://apps.wv.gov/SOS/BusinessEntitySearch/ |
| Wisconsin | https://onestop.wi.gov/DFIAnnualReports/SearchBusiness |

### International

| Country | URL |
|---|---|
| Australia | https://abr.business.gov.au/ |
| Austria | https://www.companydata.at/ |
| Belgium | https://belgianregistry.org/ |
| Bulgaria | https://portal.registryagency.bg/en/ |
| Canada | https://ised-isde.canada.ca/cc/lgcy/fdrlCrpSrch.html |
| Chile | https://lookuptax.com/docs/how-to-verify/rut-verification-chile |
| China | https://www.registrationchina.com/china-company-search/ |
| Croatia | https://sudreg.pravosudje.hr |
| Cyprus | https://www.companies.gov.cy/en/ |
| Czechia | https://or.justice.cz/ias/ui/rejstrik |
| Denmark | https://datacvr.virk.dk/ |
| Estonia | https://ariregister.rik.ee/eng |
| Finland | https://www.prh.fi/en/ |
| France | https://www.infogreffe.fr/ |
| Germany | https://www.unternehmensregister.de/ |
| Great Britain | https://find-and-update.company-information.service.gov.uk |
| Greece | http://www.businessportal.gr/ |
| Hong Kong | https://www.e-services.cr.gov.hk/ |
| Hungary | https://occsz.e-cegjegyzek.hu/ |
| Iceland | https://www.rsk.is/english/ |
| Ireland | https://www.cro.ie/ |
| Israel | https://www.kycisrael.com/companies/ |
| Italy | https://italianbusinessregister.it |
| Japan | https://www.global-gw.com/to-japan/ |
| Korea | https://englishdart.fss.or.kr/ |
| Latvia | https://www.ur.gov.lv/en/ |
| Lithuania | https://www.registrucentras.lt |
| Luxembourg | https://www.lbr.lu |
| Malta | https://mbr.mt/ |
| Netherlands | https://www.kvk.nl/english/ |
| New Zealand | https://companies-register.companiesoffice.govt.nz/ |
| Ontario, Canada | https://www.appmybizaccount.gov.on.ca/ |
| Poland | https://ekrs.ms.gov.pl/ |
| Portugal | https://irn.justica.gov.pt/ |
| Romania | https://www.onrc.ro/index.php/en |
| Singapore | https://www.tis.bizfile.gov.sg/ |
| Slovakia | http://www.orsr.sk/Default.asp?lan=en |
| Spain | https://www.registradores.org/ |
| Sweden | http://www.bolagsverket.se/en |
| Turkey | https://mersis.ticaret.gov.tr/ |

---

## Attaching Web Evidence to CMS

To save a web page as evidence and attach it to a case:

1. Navigate to the page you want to save
2. In Safari: **File → Export as PDF**
3. Save the file to your Downloads folder
4. In CMS, click **Attach File** on the case
5. Choose the file → click **Upload** → click **Apply**

> **LexisNexis shortcut:** LexisNexis has a built-in PDF download button. If multiple records are shown, check only the relevant record(s) before downloading to exclude unrelated results.

> ⚠️ **End of day:** Move all downloaded PII and company documents to Trash and empty it. Do not leave sensitive information on your device.
