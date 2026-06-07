// kb-data.js — Compliance Knowledge Base Content
// Three types: glossary (Dictionary tab), original (source docs), edit (tech edits)
// docType: 'original' | 'edit' | undefined (for glossary)

const KB = [

// ══════════════════════════════════════════════
// DICTIONARY — individual term definitions
// ══════════════════════════════════════════════


{id:"d-pep", cat:"glossary", title:"PEP — Politically Exposed Person", body:"An individual who holds or has held a prominent public position — including heads of state, senior government officials, senior executives of state-owned enterprises, judicial officials, and military commanders. PEPs carry elevated money laundering and corruption risk due to their access to public funds. Many screening programs require enhanced due diligence for PEPs and their close associates.", tags:["pep","politically exposed","public official","enhanced due diligence","corruption"]},
{id:"d-adverse-media", cat:"glossary", title:"Adverse Media / Negative News", body:"Negative news coverage or publicly available information linking an entity to financial crime, fraud, corruption, sanctions violations, or other regulatory concerns. Adverse media screening is a key component of enhanced due diligence for high-risk customers. Sources include news databases, government publications, NGO reports, and legal filings.", tags:["adverse media","negative news","negative screening","financial crime","edd"]},
{id:"d-beneficial-owner", cat:"glossary", title:"Beneficial Owner", body:"The natural person(s) who ultimately own or control a legal entity, either directly or through a chain of ownership or control. Regulators typically define beneficial ownership as holding 25% or more equity interest, though some programs use lower thresholds (10% or 5%). Identifying the beneficial owner is critical for corporate entity screening — the screened company must be traced back to real individuals.", tags:["beneficial owner","ubo","ultimate beneficial owner","ownership","control","25%","corporate","shell company"]},
{id:"d-cdd", cat:"glossary", title:"CDD — Customer Due Diligence", body:"The process of verifying customer identity, understanding the nature of a customer's business, and assessing the risk they pose. CDD is a core requirement of KYC/AML programs. Standard CDD collects: name, date of birth, address, and ID number. Ongoing CDD involves monitoring customer activity for changes in risk profile.", tags:["cdd","customer due diligence","kyc","aml","verification","risk profile"]},
{id:"d-fuzzy-match", cat:"glossary", title:"Fuzzy Matching / Phonetic Matching", body:"Algorithmic name-matching techniques that identify potential sanctions matches even when spellings differ due to transliteration, transcription errors, or aliases. Common algorithms include Jaro-Winkler, Levenshtein distance, Soundex, and Metaphone. A higher fuzzy match threshold produces more potential hits (and more false positives); a lower threshold produces fewer hits but increases true match risk.", tags:["fuzzy match","phonetic","transliteration","algorithm","name matching","jaro","levenshtein","false positive"]},
{id:"d-derisking", cat:"glossary", title:"De-risking", body:"The practice of financial institutions exiting or restricting relationships with entire categories of customers deemed high-risk — such as money service businesses, cryptocurrency exchanges, or entities in certain jurisdictions — rather than managing risk on a case-by-case basis. De-risking can have significant financial inclusion consequences for affected populations.", tags:["de-risking","correspondent banking","high risk","financial inclusion","exit","terminate"]},
{id:"d-typology", cat:"glossary", title:"Typology", body:"A documented pattern or method of financial crime. Typology reports — published by bodies like FATF, OFAC, and FinCEN — describe how criminal actors structure transactions, use shell companies, exploit loopholes, or layer funds to avoid detection. Familiarity with common typologies improves an analyst's ability to spot suspicious patterns beyond simple name matches.", tags:["typology","financial crime","pattern","money laundering","fatf","fincen","structuring","layering"]},
{id:"d-correspondent", cat:"glossary", title:"Correspondent Banking", body:"A relationship where one bank (the correspondent) provides services to another bank (the respondent), typically to enable cross-border transactions. Correspondent banking relationships are a major focus of AML regulation because they can be exploited to move funds across jurisdictions. Banks must conduct enhanced due diligence on respondent banks, including their AML controls and customer base.", tags:["correspondent banking","respondent","cross-border","wire transfer","nostro","aml","de-risking"]},
{id:"d-aml-layering", cat:"glossary", title:"Money Laundering Stages", body:"Money laundering typically occurs in three stages:\n\n1. **Placement** — Introducing illicit funds into the financial system (e.g., cash deposits, structuring).\n2. **Layering** — Creating distance between the funds and their source through complex transactions (e.g., wire transfers, shell companies, crypto conversions).\n3. **Integration** — Reintroducing laundered funds into the legitimate economy (e.g., real estate purchases, business investments).\n\nSanctions screening primarily targets placement and layering stages.", tags:["money laundering","placement","layering","integration","three stages","financial crime","structuring"]},
{id:"d-screening-list", cat:"glossary", title:"Sanctions Screening Lists", body:"Major sanctions lists used in global compliance screening:\n\n• **OFAC SDN List** — U.S. Specially Designated Nationals (Treasury)\n• **OFAC Non-SDN Lists** — Foreign Sanctions Evaders, Sectoral Sanctions, etc.\n• **UN Consolidated List** — United Nations Security Council\n• **EU Consolidated List** — European Union\n• **UK HMT/OFSI List** — His Majesty's Treasury\n• **DFAT List** — Australia\n• **OSFI List** — Canada\n\nGlobal compliance programs typically screen against multiple lists simultaneously.", tags:["sanctions list","sdn","ofac","un","eu","uk","hmt","ofsi","dfat","osfi","screening"]},
{id:"d-aml",       cat:"glossary", title:"AML — Anti-Money Laundering",          body:"Legal controls requiring institutions and entities to prevent, detect, and report money laundering activities.", tags:["aml","financial crime","legal"]},
{id:"d-amp",       cat:"glossary", title:"Media Platform Client",            body:"Manages iTunes, the Apple App Store, and Apple Services. Compliance screens anyone with access to iTunes Connect, which allows a person or company to distribute media. Vendors, Banks, and Bank Account Holders receive funding from those sales.", tags:["amp","client","itunes","app store"]},
{id:"d-api",       cat:"glossary", title:"API — Application Programming Interface",             body:"A subsidiary of Apple Inc. that supports the disbursement platform covering daily cash rebates to customers from Apple Card and allows for Direct Bill Payment by customers from Apple Cash to Apple Card.", tags:["api","payments","apple card","client"]},
{id:"d-cip",       cat:"glossary", title:"CIP — Customer Identification Program", body:"A United States requirement for financial institutions to verify a customer's identity.", tags:["cip","kyc","identity","us"]},
{id:"d-client",    cat:"glossary", title:"Client",                                body:"The application or program from which the screened case data originated. Current clients: Media Platform, Developer Program, API, Digital ID Program.", tags:["client","amp","wwdr","api","idms"]},
{id:"d-common",    cat:"glossary", title:"Common Name",                           body:"A popular name many individuals have, or a generic name used by many companies. Common names often cause false positives in sanctions screening.", tags:["common name","false positive"]},
{id:"d-core",      cat:"glossary", title:"Core Case",                             body:"The first Transaction ID in a sequence of cases. Contains the original screened name (including any DBA names) and Matched Data hits. To find it: search the TID prefix — everything before the underscore — in the the system search bar.", tags:["core case","tid","transaction id","underscore"]},
{id:"d-dba",       cat:"glossary", title:"DBA — Doing Business As",              body:"A trade name, assumed name, or fictitious business name — a registered name under which a business operates that is different from its official legal name. In CMS, DBA names appear as: [Name] ; [DBA Name]. Only the portion triggering the sanctions review is being screened.", tags:["dba","trade name","fictitious","semicolon"]},
{id:"d-dd",        cat:"glossary", title:"Due Diligence",                         body:"Taking every possible precaution and conducting thorough investigation to identify businesses or persons subject to sanctions. Apple may be audited to verify due diligence was performed — your documentation is the proof.", tags:["due diligence","audit","investigation","documentation"]},
{id:"d-duns",      cat:"glossary", title:"DUNS Number",                           body:"A unique nine-digit number that identifies a business, issued by Dun & Bradstreet. If a DUNS search returns a different company name than the Screened Entity, suspend and set PCD to 30 days (batch registrant).", tags:["duns","dun bradstreet","dnb","business identifier"]},
{id:"d-edd",       cat:"glossary", title:"Enhanced Due Diligence",               body:"Extra investigative measures taken because of elevated risk that a business or person may be subject to sanctions.", tags:["enhanced due diligence","high risk"]},
{id:"d-entity",    cat:"glossary", title:"Entity",                                body:"An individual, organization, business, or company that has the legal capacity to enter a contract or agreement. The 'Entity Label' field in CMS tells you whether a case involves an individual or company.", tags:["entity","individual","company","entity label"]},
{id:"d-event",     cat:"glossary", title:"Event",                                 body:"The interaction, transaction, enrollment, or account update that triggered CMS to open a case. Must be noted in every Case Overview. Examples: enrollment_check, batch registrant, enrollment check.", tags:["event","enrollment","trigger","event type"]},
{id:"d-fp",        cat:"glossary", title:"False Positive / False Hit",           body:"A system-identified potential match that is NOT a true sanctions match — caused by a common name, missing information, a weak alias, or partial name similarity.", tags:["false positive","false hit","common name","partial match"]},
{id:"d-full",      cat:"glossary", title:"Full Match",                            body:"The entire name of the Screened Entity matches the name from the sanctions list (Primary Name or AKA). A full name match generally requires escalation unless a clear DOB or location variance can be established.", tags:["full match","name match","entire name","sanctions"]},
{id:"d-idms",      cat:"glossary", title:"Digital ID Program Client",  body:"Provides authentication and authorization services and is the repository for all Apple identities. The Digital ID Program compliance client screens Apple IDs when customers in high-risk countries add a payment method to their Apple Wallet. Phase 1: 35 high-risk countries. If confirmed as a true sanctions match, the account is deactivated.", tags:["idms","identity management","apple id","wallet","payment","high risk"]},
{id:"d-inclusion", cat:"glossary", title:"Inclusion Term",                        body:"A trigger created when a Screened Entity name contains a word on the organization's watch-term list. Always a direct escalation for every client. For batch registrant: the ONLY direct escalation reason.", tags:["inclusion term","direct escalation","apple compliance"]},
{id:"d-ip",        cat:"glossary", title:"IP Address",                            body:"A numerical code that identifies the geographical location of a computer accessing the internet. Captured via Ekata for Developer Program cases and included in the Case Overview notation.", tags:["ip","ip address","ekata","location","wwdr"]},
{id:"d-kyc",       cat:"glossary", title:"KYC — Know Your Customer",             body:"A business process of verifying customer identity. Part of the broader AML compliance framework.", tags:["kyc","know your customer","identity","verification"]},
{id:"d-lexid",     cat:"glossary", title:"LexID",                                 body:"A unique identifier assigned to individuals by LexisNexis. Document in your research notation when found.", tags:["lexid","lexisnexis","identifier"]},
{id:"d-mdhit",     cat:"glossary", title:"Matched Data Hit",                      body:"A specific entry on a sanctions list that the system has identified as a potential match to the Screened Entity. A single case may have multiple Matched Data Hits — each must be individually evaluated.", tags:["matched data","matched data hit","potential match","sanctions list"]},
{id:"d-ofac",      cat:"glossary", title:"OFAC",                                  body:"The Office of Foreign Assets Control. A U.S. Department of the Treasury agency that administers and enforces economic and trade sanctions. Violations result in fines and publication. Name match guidance: https://ofac.treasury.gov/faqs/5", tags:["ofac","treasury","sanctions","violation","fines"]},
{id:"d-ofaclist",  cat:"glossary", title:"OFAC List / SDN List",                 body:"The Specially Designated Nationals and Blocked Persons List. Maintained by OFAC. Lists terrorists, narcotics traffickers, and other entities that U.S. persons are generally prohibited from dealing with.", tags:["sdn","specially designated nationals","ofac list","blocked persons"]},
{id:"d-ownership", cat:"glossary", title:"Ownership",                             body:"The structure of who ultimately controls and benefits from a company, whether directly or indirectly. If owner percentage is less than 100% to the Screened Entity, the case must be escalated so the other owner(s) may be screened.", tags:["ownership","co-owner","percentage","escalate"]},
{id:"d-partial",   cat:"glossary", title:"Partial Match",                         body:"One of the Screened Entity names matches any of the Matched Data names (Primary or AKA), but not the complete name.", tags:["partial match","name match","aka"]},
{id:"d-pcd",       cat:"glossary", title:"PCD — Provisional Cancel Date",            body:"The date on which a suspended case automatically cancels if no action is taken. Digital ID Program: 14 days. Media Platform batch registrant: 30 days. After cancellation, a new case auto-generates with the same TID plus a suffix (_1, _2, etc.).", tags:["pcd","pending cancel date","suspend","cancel","14 days","30 days"]},
{id:"d-pii",       cat:"glossary", title:"PII — Personally Identifiable Information", body:"Information that identifies a specific individual — passport, national ID, date of birth, ID number. Customer-submitted PII must meet Acceptable PII Criteria before it can be used to clear a case.", tags:["pii","personally identifiable","passport","national id","identification"]},
{id:"d-risk-cat",  cat:"glossary", title:"Risk Category",                         body:"A rating of Low, Medium, or High based on the Risk Score. Low: 0.0 (Inclusion Terms) or 72.0–79.9. Medium: 80.0–89.9. High: 90.0–100.0.", tags:["risk category","low","medium","high","risk score"]},
{id:"d-risk-sc",   cat:"glossary", title:"Risk Score",                            body:"A numerical score (0–100) calculated by the screening system based on the similarity of the Screened Entity to the Matched Data hit. Higher similarity = higher risk.", tags:["risk score","hcm","numerical","similarity"]},
{id:"d-sar",       cat:"glossary", title:"SAR — Suspicious Activity Report",      body:"A document filed with the Financial Crimes Enforcement Network (FinCEN) after a suspected incident of financial crime or money laundering.", tags:["sar","suspicious activity","fincen","financial crime"]},
{id:"d-se",        cat:"glossary", title:"Screened Entity",                       body:"The individual or entity whose name triggered a potential match on a sanctions list. In CMS, may be labeled as: Customer, Individual, Company, Bank, Vendor, or Developer.", tags:["screened entity","customer","individual","company","potential match"]},
{id:"d-sla",       cat:"glossary", title:"SLA — Service Level Agreement",         body:"The target timeframe within which a case must be reviewed and resolved. All current clients (Media Platform, Developer Program, Digital ID Program, API) have a 48-hour SLA.", tags:["sla","48 hours","service level","deadline"]},
{id:"d-tid",       cat:"glossary", title:"TID — Transaction ID",                  body:"The unique ID number CMS assigns to each case. When a case expires and is auto-regenerated, the new TID shares the same prefix plus a suffix (_1, _2, _3…).", tags:["tid","transaction id","case id","regenerated"]},
{id:"d-truematch", cat:"glossary", title:"True Match",                             body:"When research confirms the Screened Entity is the same individual or company as the sanctioned party on the Matched Data list. Requires escalation.", tags:["true match","confirmed","sanctions","escalate"]},
{id:"d-weak",      cat:"glossary", title:"Weak Alias / Low Quality AKA",          body:"A generic or common nickname that alone is insufficient to establish a true sanctions match. OFAC guidance: https://ofac.treasury.gov/faqs/topic/1646", tags:["weak alias","low quality","aka","nickname","insufficient"]},
{id:"d-wwdr",      cat:"glossary", title:"Developer Program — DevConnect",  body:"The Apple team supporting developers globally. The Developer Program compliance client screens developer enrollments into the Apple Developer Program. Events: enrollment check (individual level, first screening) and rt_enrollment_final (entity level, completion).", tags:["wwdr","worldwide developer relations","developer","enrollment","precheck","final"]},
{id:"d-23match",   cat:"glossary", title:"2/3 Name Match (Digital ID Program Only)",            body:"Digital ID Program cases only, without PII: the Screened Entity's full name matches 2 of 3 name components in the Matched Data name. Classified as a partial match.\n\nExamples:\n• John Smith vs John Jacob Smith → 2/3 match (first + last match; middle missing)\n• Aleksandr Muskov vs Aleksandr Muskov Sergeevich → 2/3 match\n\nNOT a 2/3 match (regular partial match, can clear):\n• John Allen Smith vs John Jacob Smith — different middle names\n• Aleksandr Vladimirovich Muskov vs Aleksandr Muskov Sergeevich", tags:["2/3 name match","two thirds","idms","partial match","name criteria"]},
{id:"d-close",     cat:"glossary", title:"Close Name Match (Companies)",          body:"When a company's brand name is the same as the Matched Data but the legal identifier differs (e.g., LLC vs. GmbH). Classified as a partial match.\n\nExamples:\n• Biotech vs. Biotech LLC → close match\n• Cheer Flyer Company Unlimited vs. Cheer Flyer Company → close match\n\nEquivalent legal identifiers: LLC (US) = GmbH (Germany) = OOO (Russia)", tags:["close name match","brand name","legal identifier","llc","gmbh","ooo","company"]},
{id:"d-sanctioned",cat:"glossary", title:"Sanctioned Countries & Regions",       body:"Any connection to these countries or regions is a direct escalation for ALL clients, regardless of the Matched Data comparison.\n\nSanctioned Countries:\n• Cuba (CUB)\n• Iran (IRN)\n• North Korea (PRK)\n\nSanctioned Regions in Ukraine:\n• Crimea\n• Donetsk People's Republic\n• Luhansk People's Republic\n• Kherson region\n• Zaporizhzhia region\n\nA 'connection' includes: doing business with, PII issued by, or address in any of the above.", tags:["sanctioned countries","cuba","iran","north korea","ukraine","crimea","donetsk","luhansk","kherson","zaporizhzhia","direct escalation"]},

// ══════════════════════════════════════════════
// ORIGINALS — full source text from procedure sites
// ══════════════════════════════════════════════

{id:"orig-cp002", cat:"amp", docType:"original", title:"SC-02 — Media Platform Review Guidelines (Original)",
tags:["amp","batch registrant","batch bank record","rt_agreement","pii","escalate","suspend","dba","ownership","25+ hits","linked cases"],
body:`Compliance Operations Procedure - SC-02 | Updated 5/7/2026

OVERVIEW
This document serves as a step by step guide to manually reviewing a case for the NovaPay (Media Platform) client in CMS Non-Regulated.

DEFINING CMS NON-REGULATED
Cases in CMS Non-Regulated include business activity that is not strictly controlled by laws. These cases screen developer enrollment and digital content distributed in the Apple ecosystem. Doing business with a sanctioned entity will result in an OFAC violation, including fines and publication.

CLIENTS AND EVENTS

amp-itc-users:
• enrollment_check — Newly added individual team members/employees of the content providers.
• batch_user — Same population as enrollment_check, plus developers enrolled from Developer Program program.

amp-itc-atb:
• rt_agreement — Content providers who sign PaidApp Agreement for the first time, and existing vendors with changes to the structure of legal entity.
• rt_bank_account_holder — Content providers who sign PaidApp Agreement for the first time, and existing vendors with changes to the structure of legal entity.
• batch_bank_account_holder — First batch screening of a bank account holder of the legal entity after a real-time screening, and nightly batch screening of existing bank account holders.
• batch_vendor_master — First time batch screening for legal entity from previous real-time screening, updates on existing legal entity, and nightly batch screening of existing vendors.
• batch bank record — Updates on a bank with list provided from Accuity and nightly screenings on existing banks.
• batch_vendor_extra_info
• batch registrant

LOGGING IN AND ASSIGNING A CASE
1. Log into non-regulated CMS: https://acm-nonregulated.g.vilecorp.com
2. Locate the Status dropdown and choose the appropriate option:
   Ready — CMS starts a 10 second timer before it automatically assigns a case. The Next Case button will also appear and be clickable to bypass the 10 second timer.
   CMS Classic — The Next Case button appears with no 10 second timer. Cases are only assigned to the user when the button is clicked.
   Not Ready — Default status when logging into CMS. Cases cannot be assigned to the user while in Not Ready status. Dashboard widgets are not clickable.
3. Wait for the 10 second timer to run out, or click the Next Case button.

CASE OVERVIEW
A case overview is a high level walkthrough of the case to observe valuable indicators.
1. Review case details header and confirm client type and event.
2. Complete case overview notation using data from the Case Header Details and Screened Entity data.
Note: Any Screened Entity names and locations that are not in English must be translated in the case overview step. You may include both the original text and the English translation, or just the English translation alone.

Example:
Screening Date: 2026-01-13
Client & Event: amp-itc-users, batch_accounts
Entity Type: Individual
Screened Entity Name: Johnny Appleseed
Screened Entity Location: Cupertino, CA, USA
PII attached: PII is attached and has been reviewed

REVIEW PII AND DOCUMENT
1. In the Notes section, locate the PII entry and click on the attachment to view the PII that was uploaded.
   Note: Some attachments may require downloading from CMS and will need to be removed after reviewed from the downloads folder at the end of each day.
2. Review the attached PII and use the Acceptable PII Criteria matrix for guidance.
3. If valid PII has been submitted:

Individuals — Enter in CMS fields (clicking outside auto-saves):
• City of Birth: Input the city of birth found in System Notes and hit tab. Translate non-romanized characters. If incorrect, leave blank.
• Country of Birth: Input using the 3-digit ISO country code format and hit tab.
• Date of Birth: Input from the identification using format YYYY-MM-DD and hit tab.
• National ID number: Input if received. Encrypts upon saving.
• Passport number: Input if received. Encrypts upon saving.

Companies:
Create a manual note including date of registration and/or company ID number if available. Do not input data into CMS fields.

RESEARCH AND DOCUMENT (batch registrant only)
When an Media Platform case for the Free App Developer event is created, communication is automatically sent to the developer company making them aware that they need to upload documentation. Cases can be assigned for manual review prior to document submission.

Note: If the Screened Entity is or has any affiliation to Apple Inc., please complete research and summary as normal, then escalate the case.
Note: Use Public Sources for Company Data, Dun & Bradstreet business directory search, or Google to validate a business prior to conducting a LexisNexis search.

Companies:
• No PII + full name match + country mismatch → SUSPEND, PCD 30 days.
  Note: Name matches include Primary Name, AKAs, and spelling variations. Romanized name and native script should be reviewed.
• No PII + close name match + country match → SUSPEND, PCD 30 days.
• PII uploaded + can't clear → ESCALATE, reason: "Unable to waive compliance concerns." Do not suspend when PII is already attached.
• True sanctions match → ESCALATE, reason: "Potential sanction match." Do not request PII.
• No evidence company exists → Complete full summaries, ESCALATE with recommendation.
  Example:
  MATCHED ENTITY HIT: 1
  IS THE ENTITY TYPE A MATCH? Match
  IS THE NAME A MATCH?: Partial Match
  IS THE DATE OF REGISTRATION A MATCH? Unknown
  IS THE LOCATION A MATCH?: Mismatch
  SUMMARY: Partial name match. Screened Entity: Apply Inc. Matched Data: Apple Inc.
  No location match. Screened Entity: NZL. Matched Data: USA.
  DECISION: Escalate - unable to verify company
  RECOMMENDATION: Conduct further research to find Screened Entity

• DUNS returns different company name → SUSPEND, PCD 30 days. Attach research results.
  Example:
  DECISION: SUSPEND
  [Full summary included in original notation]

• Previously suspended + PCD expired + no docs → Do NOT suspend again. ESCALATE.
  Notate: T2 Escalation Required: Previously suspended - no new information | Decision: Escalate

Individuals (batch registrant):
• Name appears to be an individual rather than a company → SUSPEND, PCD 30 days.
• PII uploaded + still can't clear → ESCALATE. Do not suspend when PII is already attached.
• Previously suspended + PCD expired → Do NOT suspend again. ESCALATE.
  Notate: T2 Escalation Required: Previously suspended - no new information | Decision: Escalate

Reviewing a Case When PII is Available:
Previously submitted PII may only be used if the previous case was also an Media Platform case.
Note: If referencing previously submitted PII, screenshot or download it and attach to current case, along with: "PII found on TID: __________".

ADVANCED RESEARCH (batch registrant only)
Individuals — US Only: ID Verification Tool, LexisNexis Phone Finder, LexisNexis Due Diligence Person Report
Individuals — US and International: Case Support Tool, iCloud Support Tool, Google (name + company), UK Company Officer Search
Companies — US Only: LexisNexis Due Diligence Business Report (last resort)
Companies — Foreign and Domestic: dnb.com Business Directory, Public Sources for Company Data, Google, D&B WorldBase in LexisNexis (last resort)

To attach web evidence: Safari → File → Export as PDF → Attach File in CMS.
NOTE: At the end of each day, move all downloaded PII and company information to Trash and empty trash.

SUMMARY AND DECISION
Compare the details of the Screened Entity and each Matched Data Hit, including entity types, names, dates of birth, and locations.
• Enough evidence to clear → CLEAR
• No PII + full name match + location variance → SUSPEND
• All other cases → ESCALATE
See Decisioning Matrix for guidance.

Decision notes must include action + reason phrase.
Example: "Decision: Clear based on name, DOB and location variances."
If escalating, add recommendation: "Recommendation: clear due to name variance. Further research required due to ownership percentages listed."

Example:
Matched Entity Hit: 1
Is the entity type a match? Match
Is the name a match?: Partial Match
Is the date of birth a match? Mismatch
Is the location a match?: Mismatch
SUMMARY: Partial name match. Screened Entity: Ibrahim Yasar. Matched Data: Yasser Hussein Ibrahim.
DOB's do not match. Screened Entity: 2003. Matched Data: 1983.
Locations do not match. Screened Entity: TUR. Matched Data: SYR.
DECISION: Clear based on name, DOB, location variance

ACTIONING A CASE
1. Select Resolve.
2. Select Clear, Suspend or Escalate.
NOTE: If ANY Matched Data Hit requires escalation, the entire case must be escalated.

Clear: "Cleared by DOB" if DOB mismatch used; "Not a sanction match" for all other reasons.
Suspend: Set PCD to 30 days.
Escalate: "Potential sanction match" (full match to Matched Data); "Invalid Customer Submitted Info" (invalid PII); "Unable to waive compliance concerns" (all other reasons).

DIRECT ESCALATION SCENARIOS
1. Complete Case Overview as normal. (batch bank record: no overview required.)
2. Create manual note: "T2 Escalation Required: [reason]"
   If reason is Invalid/Expired PII: add specific context (e.g., "ID is too blurry to read" or "Passport expired 2024").
3. Resolve → Escalate → "Unable to waive compliance concerns."

Direct Escalation Reasons:
• batch bank record event type.
• Inclusion Term: "Case created because name contains Apple corporate compliance inclusion list words." (Only direct escalation reason for batch registrant. For cases with multiple hits where only one is an inclusion term: complete research and summary for the other hits normally.)
• Sanctioned Countries: Cuba (CUB), Iran (IRN), North Korea (PRK), or sanctioned Ukrainian regions.
• Names Do Not Match: ID/registration name ≠ Screened Entity name.
• Partial ID: Back of ID submitted, or name/DOB obscured.
• Invalid PII: Non-ID document, altered, or illegible.
• Unable to translate ID.

Other Escalation Reasons for batch registrant (not direct — complete full review first):
• Full review + not enough location/DOB/name info to decide.
• Full name match to any Matched Data name (primary or AKA). Romanized name and native script should be reviewed.
• Location is the ONLY variance → not enough to clear; escalate.
• Full review + connection found to embargoed country/region.

MORE THAN 25 MATCHED DATA HITS
1. Complete Case Overview normally.
2. Complete summary notes for hits 1–25.
3. Add note: "Escalation Required: 25+ Matched Data Hits".
4. Resolve → Escalate → "Unable to waive compliance concerns."

LINKED CASES
Linked cases appear as multiple TIDs in the case header (status: Open, In Progress, or Provisional).
Your case = In Progress. Open cases are also yours. Provisional cases must NOT be actioned.
1. Work each case individually — info may differ.
2. All notes (Overview, Research, Summary) on each individual case.
3. Confirm correct case(s) selected when actioning.

CASE CREATED BY THE BUSINESS
"Case created at the request of the business" = original case expired, auto-regenerated.
1. Search TID prefix (before the underscore) in the system search bar to find the core case.
2. Use core case Matched Data to evaluate the current case.
3. Action case.

DBA SCENARIOS
Names appear as "[Name] ; [DBA Name]". Only the portion triggering the review is screened.
1. Complete Case Overview.
2. View PII in System Notes:
   • PII matches screened name → review normally.
   • PII matches non-screened name → directly escalate as Invalid PII.
3. Document findings (fill CMS fields for individuals; manual note for companies).
4. Compare Screened Entity to each Matched Data Hit.
5. Enough evidence to clear → CLEAR. Otherwise → ESCALATE.

Example summary focuses only on screened name:
MATCHED ENTITY HIT: 1
IS THE ENTITY TYPE A MATCH? Match
IS THE NAME A MATCH?: Partial Match
IS THERE A LOCATION MATCH?: Mismatch
SUMMARY: Partial name match. Screened Entity: GG Technologies Inc. Matched Data: 3D Technologies LLC.
No location match. Screened Entity: USA. Matched Data: RUS.
CLEAR based on name and location variances.

OWNERSHIP PERCENTAGES
If owner percentage < 100% to the Screened Entity, the case must be escalated so the other owner(s) may be screened.
NOT a direct escalation — complete full case review first.
Final action: Escalate. Note: "Escalate due to ownership percentages listed."`},

{id:"orig-cp001", cat:"wwdr", docType:"original", title:"SC-01 — Developer Program Review Guidelines (Original)",
tags:["wwdr","enrollment check","rt_enrollment_final","ip location","ekata","pii","direct escalation","dba","ownership"],
body:`Compliance Operations Procedure - SC-01 | Updated 5/7/2026

OVERVIEW
This document serves as a step by step guide to manually reviewing a case for the DevConnect (Developer Program) client in CMS Non-Regulated.

DEFINING CMS NON-REGULATED
Cases in CMS Non-Regulated include business activity that is not strictly controlled by laws. These cases screen developer enrollment and digital content distributed in the Apple ecosystem. Doing business with a sanctioned entity will result in an OFAC violation, including fines and publication.

EVENTS
enrollment check — All applicants enrolling into the Apple Developer Program at an individual level. This is the first screening.
rt_enrollment_final — After passing the precheck, the applicant provides information for the final check, this time on the entity. If cleared, the organization's enrollment is complete.

LOGGING IN AND ASSIGNING A CASE
1. Log into non-regulated CMS: https://acm-nonregulated.g.vilecorp.com
2. Locate the Status drop-down:
   Ready — 10-second timer, then auto-assigns case. Next Case button bypasses.
   CMS Classic — Next Case button only, no timer.
   Not Ready — Default at login. No cases assigned.
3. Wait for timer or click Next Case.

CASE OVERVIEW
1. Review Case Details and confirm client type and event.
2. Complete case overview notation.
3. Capture IP Location and Screenshot.

Example:
Screening Date: 2026-01-13
Client & Event: Developer Program, enrollment check
Entity Type: Individual
Screened Entity Name: Johnny Appleseed
Screened Entity Location: Cupertino, USA
IP Location: San Francisco, CA, USA
Screenshot: EKATA.PNG
PII attached: PII is attached and has been reviewed

REVIEW PII AND DOCUMENT
1. In Notes section, locate the Developer Program_PII entry and click attachment.
   Note: Some attachments require downloading. Remove from downloads folder at end of each day.
2. Review against Acceptable PII Criteria.
3. If valid PII submitted:

Companies: Create a manual note with date of registration and/or company ID number. Do not input data into CMS fields.

Individuals:
• City of Birth: Input from System Notes, hit tab. Translate non-romanized characters. Leave blank if incorrect.
• Country of Birth: 3-digit ISO country code. Hit tab.
• Date of Birth: YYYY-MM-DD format. Hit tab.
• National ID number: If received. Encrypts upon saving.
• Passport number: If received. Encrypts upon saving.
Note: Clicking outside any field also auto-saves.

SUMMARY AND DECISION
Compare the Screened Entity to each Matched Data Hit: entity types, names, dates of birth (where applicable), dates of registration (where applicable), and locations.

• Enough evidence to definitively clear → CLEAR.
• Not enough evidence to clear → ESCALATE.
See Decisioning Matrix for guidance.

Decision notes include action + reason phrase.
Example: "Decision: Clear based on name, DOB and location variances."
If escalating, add recommendation.

Example:
Matched Entity Hit: 1
Is the entity type a match? Match
Is the name a match?: Partial Match
Is the date of birth a match? Mismatch
Is the location a match?: Mismatch
SUMMARY: Partial name match. Screened Entity: Ibrahim Yasar. Matched Data: Yasser Hussein Ibrahim.
DOB's do not match. Screened Entity: 2003. Matched Data: 1983.
Locations do not match. Screened Entity: Turkey. Matched Data: Syria.
DECISION: Clear based on name, DOB, location variance

ACTIONING A CASE
1. Select Resolve.
2. Select Clear or Escalate. (No Suspend option for Developer Program.)
Note: If ANY hit requires escalation, the entire case escalates.

Clear: "Cleared by DOB" (DOB mismatch used) or "Not a sanction match" (all other reasons).
Escalate: "Potential sanction match" (full name + location match); "Invalid Customer Submitted Info" (invalid PII); "Unable to waive compliance concerns" (all other reasons).

DIRECT ESCALATION SCENARIOS
1. Complete Case Overview.
2. Create manual note: "T2 Escalation Required: [reason]"
3. Resolve → Escalate → "Unable to waive compliance concerns."

Direct Escalation Reasons:
• Inclusion Term: Matched Data shows inclusion list words.
• Sanctioned Countries: Cuba (CUB), Iran (IRN), North Korea (PRK), or sanctioned Ukrainian regions.
• Names Do Not Match: ID/registration ≠ Screened Entity name.
• Partial ID: Back of ID submitted, or name/DOB obscured.
• Invalid PII: Non-ID document, altered, or illegible.
• Unable to translate ID.

MORE THAN 25 MATCHED DATA HITS
1. Case Overview normally.
2. Summary notes for hits 1–25.
3. Note: "Escalation Required: 25+ Matched Data Hits".
4. Resolve → Escalate → "Unable to waive compliance concerns."

LINKED CASES
Multiple TIDs in header. Your case = In Progress. Open cases = also yours. Provisional = do NOT action.
1. Work each case individually.
2. All notes on each individual case.
3. Confirm correct case(s) when actioning.

CASE CREATED BY THE BUSINESS
Search TID prefix in CMS to find core case. Use core case Matched Data. Action accordingly.

DBA SCENARIOS
"[Name] ; [DBA Name]" — only screened portion matters.
1. Case Overview normally.
2. View PII: matches screened name → review normally. Matches non-screened name → direct escalate as Invalid PII.
3. Document findings. Compare to Matched Data.
4. Clear if enough evidence; escalate otherwise.

OWNERSHIP PERCENTAGES
Owner percentage < 100% → escalate so other owner(s) can be screened.
NOT a direct escalation — complete full case review first.
Final action: Escalate. Note: "Escalate due to ownership percentages listed."`},

{id:"orig-cp000", cat:"idms", docType:"original", title:"SC-00 — Digital ID Program Review Guidelines (Original)",
tags:["idms","lifecycle","suspend","pcd","14 days","year of birth","yob","2/3 name match","mz account age","vessel","inclusion term","double suspend","direct escalation"],
body:`Compliance Operations Procedure - SC-00 | Updated 5/7/26

OVERVIEW
The IdentityCore (Digital ID Program) case review procedure serves as a step by step guide to manually reviewing a case. In this line of business, we are screening Apple IDs. When a customer adds a form of payment to their Apple wallet, they must be screened to ensure they are not a sanctioned party. Phase 1 is limited to customers in 35 high risk countries. Payment restriction is applied when a person is a possible match. If confirmed as a true sanctions match, their account is deactivated.

THE LIFECYCLE OF AN IDMS CASE
1. Customer in high-risk country adds payment to Apple account → name matches sanctions list → case created in CMS.
2. Case reviewed by Tier 1 investigator prior to collecting PII.
3. Cannot clear without PII → investigator suspends or escalates based on criteria.
   The Suspend action triggers an alert to the customer to verify their identity via PII. Customer receives a text, email, and in-settings notification. They are sent a link to a portal where they upload their PII attachment, which is no longer functional after the image is saved. Any attempt to re-upload results in an error message.
4. Customer submits PII → case moves back into Open status for Tier 1 review. Previous case notes are visible.
5. PII meets escalation criteria OR still cannot clear → Tier 1 escalates to Tier 2.
   Can clear → Tier 1 clears.
6. Tier 2 may clear, reject (invalid PII), or escalate to Tier 3.
7. Rejection → customer alerted to upload eligible PII. No submission within 14 calendar days → account remains restricted.
   Customer exceeds 2 rejections → must escalate to Tier 3.

Note: The PII upload portal is only reactivated when the case is rejected. If suspended after PII is submitted, the customer still receives notification blasts but cannot use the links. Double-suspends create a poor customer experience that is a direct reflection on the Compliance team.

LOGGING IN AND ASSIGNING A CASE
1. Log into Non-Regulated CMS: https://acm-nonregulated.g.vilecorp.com
2. Select status (Ready / CMS Classic / Not Ready).
3. Wait for timer or click Next Case.

CASE OVERVIEW
1. Review Case Details and confirm client type and event.
2. Complete case overview notation.
   NOTE: Location = city, state, country/region. If no city or state, enter only country/region.
   Translate any non-English names or locations. Include original text + English, or just English.

Example:
Screening Date: 2026-01-13
Client & Event: idms, batch_accounts
Entity Type: Individual
Screened Entity Name: Johnny Appleseed
Screened Entity Location: BRA
PII attached: PII is attached and has been reviewed

RESEARCH AND DOCUMENT

If Matched Data Hit is a vessel/ship/aircraft (valid or invalid name) → CLEAR without any research.
Note: This only applies if the Matched Data Hit itself is a vessel. Any other entity type mismatch: follow normal guidelines.

Individuals — Inclusion term:
1. Search MZ for the billing name in the wallet.
2. Attach screenshot of findings.
3. Summary note: "MZ Billing Name: [Name on card] | Clear inclusion term | Screenshot: MZ.png"

Individuals — Invalid name submitted:
1. Search MZ for a full valid name in billing infos.
2. Full valid name found:
   • Entity type mismatch to Matched Data → CLEAR.
   • Entity type match → SUSPEND.
   Note: If full name in billing infos is completely different from the Screened Entity name in CMS, you may clear if entity type mismatch. If entity type match, suspend.
3. No valid name found → full research + SUSPEND to request PII.

Individuals — Valid name:
1. Entity type mismatch → CLEAR.
2. Year of birth in Screened Entity panel differs from Matched Data YOB → CLEAR. No external research needed.
3. Cannot clear by YOB:
   • Full name match to Matched Data → SUSPEND.
   • Name obviously different from Matched Data → CLEAR.
   • Cannot clear by name and/or DOB → continue research.
   
Note: If 2/3 name match (as defined in Match Determination Guidelines): observe the MZ account details and location.
• MZ account aged (>30 days) + different country from Matched Data → CLEAR.
• Account new (<30 days) → SUSPEND due to 2/3 name match, YOB match and country match.

Companies:
Due diligence must be conducted to verify that a company exists.
• Evidence found + enough to clear → CLEAR by name and location variance. Attach findings.
• Full name match to Matched Data → ESCALATE. Cannot clear by location variance alone. (Includes Primary Name and AKA names. Review Romanized and native script.)
• No evidence company exists → complete full summaries (disregard "date of birth" in CMS):
  DECISION: Escalate per GESC guidance | RECOMMENDATION: Further review needed
  Action: Escalate → "Unable to waive compliance concerns."

Reviewing Without PII:
If CMS lists a US address → use LexisNexis first (reliable DOB data). If record found and enough to clear → no further research needed.
Not US → use MZ Support and iCloud Support Tool.
Click Quick-Launch Research Button to open Ekata (auto-fills from CMS).
Fill Screened Entity Research template with new names, locations, emails, phone numbers not already in CMS. "No new data" if nothing found.
Take screenshots and attach in CMS.
Note: Screenshots from iCloud Support Tool are not permitted.

SCREENED ENTITY RESEARCH TEMPLATE:
SCREENED ENTITY RESEARCH
DATE OF BIRTH:
LEXID:
NAMES:
LOCATIONS:
EMAILS:
PHONE NUMBERS:
Screenshots: LexisNexis.png, MZ.png, Ekata.png

Reviewing With PII:
Open attachment and validate against Matching Determination Guidelines & Acceptable PII Criteria.
NOTE: Previously submitted PII may only be used if the previous case was also an IDMS case.

SUMMARY AND DECISION
Compare Screened Entity to each Matched Data Hit: entity types, names, DOBs, and locations.
Note: If the only remaining Matched Data datapoint is a deceased date and/or sanctioning date → ESCALATE.

In some instances your Matched Data may have a US address but no DOB. Use LexisNexis to research the Matched Data Hit itself. If DOB found: reliable datapoint for decisioning. Screenshot and attach in CMS. Note the source in summary.

Example with LexisNexis Matched Data DOB:
Matched Entity Hit: 1
Is the entity type a match? Match
Is the name a match?: Partial Match
Is the date of birth a match? Mismatch
Is the location a match?: Mismatch
SUMMARY: Partial name match. Screened Entity: Satish Sham. Matched Data: Satish Shah.
DOBs do not match. Screened Entity: 1981. Matched Data: 1976 (DOB found in LexisNexis).
Locations do not match. Screened Entity: India. Matched Data: USA.
DECISION: Clear by name, DOB, location variance

• Enough evidence → CLEAR.
• No PII + cannot clear by name/location → SUSPEND. Set PCD to 14 days.
• PII attached + does not meet eligibility criteria, or other outstanding factors → ESCALATE.

Example:
Matched Entity Hit: 1
Is the entity type a match? Match
Is the name a match?: Partial Match
Is the date of birth a match? Mismatch
Is the location a match?: Mismatch
SUMMARY: Partial name match. Screened Entity: Timothy Apple AKA Tim Apple. Matched Data: Timothy Snapple AKA Tim Snapple.
DOBs do not match. Screened Entity: 2003. Matched Data: 2001.
Locations do not match. Screened Entity: India. Matched Data: Russia.
DECISION: Clear based on name, DOB, location variance

ACTIONING A CASE
1. Select Resolve.
2. Select Clear, Escalate, or Suspend.
NOTE: If ANY hit requires escalation, entire case escalates.

Clear: "Not a sanction match" (entity type or name/location variance); "Cleared by DOB" (DOB differs from Matched Data's DOB).
Escalate: "Potential sanction match" (full name + location match); "Invalid Customer Submitted Info" (invalid PII); "Unable to waive compliance concerns" (all other reasons).
Suspend: Set PCD to 14 days.

DIRECT ESCALATION SCENARIOS
1. Complete Case Overview.
2. Create manual note: "T2 Escalation Required: [reason]"
3. Resolve → Escalate → "Invalid Customer Submitted Info" (invalid PII) or "Unable to waive compliance concerns" (all other).

Direct Escalation Reasons:
• Partial ID: Back of ID submitted, or name/DOB obscured.
• Names Do Not Match: PII name ≠ Screened Entity name.
• Invalid PII: Non-ID document, altered, or illegible.
• Unable to translate ID.
• Sanctioned Country: Iran, Cuba, North Korea, or sanctioned Ukrainian regions.
• Inclusion Term: Company entity name contains Apple corporate compliance inclusion term.

CASE CREATED AT THE REQUEST OF THE BUSINESS
Search TID prefix in CMS to find core case. Use core case Matched Data.
Special scenario: If core case Screened Entity name is completely different from current case → compare current Screened Entity to original Matched Data, and clear by name and/or DOB variance.`},

{id:"orig-cp003", cat:"pending", docType:"original", title:"SC-03 — Provisional Case Review Guidelines (Original)",
tags:["pending","pending case tracker","quip","escalated hold","gibberish","scripted account","full name match","2/3 name match","load tids","query builder","typinator","2025 CI onboarding"],
body:`Compliance Operations Procedure - SC-03 | Updated 12/22/25

OVERVIEW
Non-regulated Media Platform and Developer Program cases are created in CMS without PII attachments. Cases remain in Provisional status until the Screened Entity uploads PII or company documentation, which changes the case status to Open. Reviews of Provisional cases are conducted by investigators when Open case volume is finished or when otherwise instructed.

ACCESSING THE PENDING CASE TRACKER
The Provisional Case Tracker is a spreadsheet with each Non-Regulated client's pending cases from the previous 7 days. The document is collaborative so each investigator only reviews the cases assigned to them within the spreadsheet.
1. Go to the Backlog Tracker Quip.
2. Find the group of cases that has your name in the "Investigator Name" column next to it.
3. As each case is reviewed, put an X in the 3rd column to further avoid duplicate reviews.
NOTE: Do not download the document to edit it as this will prevent real-time edits from showing.

LOADING TIDS IN CMS FOR REVIEW
1. Log into non-regulated CMS: https://acm-nonregulated.g.vilecorp.com
2. Change status to CMS Classic.
3. Load each Transaction ID (TID) using one of the following methods:

Query Builder:
a. Click the magnifying glass → Advanced Search.
b. Click Add Rule.
c. In Select Field, type or choose "Transaction ID."
d. Copy a TID from the backlog tracker and paste into "Enter Value."
e. Click Run Report.

Basic Search:
a. Choose Sanctions from the LOB drop-down.
b. Copy a TID from the tracker.
c. Paste the TID into the basic search bar immediately followed by a comma.

NOTE: Multiple cases can be searched at once separated by commas. Inserting a comma after a single TID in basic search makes results return faster.

REVIEW PROCEDURE
Cases reviewed while in Provisional status are identified by the note "2025 CI ONBOARDING PENDING CASE REVIEW." This note is mandatory and automatically populates with the approved Typinator snippet.

As long as the Screened Entity name appears to be complete (at least one first and one last), if it is obviously different from the Matched Data name(s), no additional research is required. Complete the Case Overview and Summary notes, and action accordingly.

Example:
MATCHED ENTITY HIT: 1
IS THE ENTITY TYPE A MATCH? Match
IS THE NAME A MATCH?: Partial Match
IS THE DATE OF BIRTH A MATCH? Unknown
IS THE LOCATION A MATCH?: Unknown
SUMMARY: Partial name match. Screened Entity: Anthony Fern. Matched Data: Anthony Fernandez.
DECISION: CLEAR by name variance

If the case cannot be cleared by name variance, perform a full case review:
• Utilize notes from previous linked cases.
• Reference previously submitted PII when available. (If referencing prior PII: screenshot or download, attach to current case, note: "PII found on TID: __________")
• Conduct advanced research (iCloud, MZ, LexisNexis, etc.).

The "Cleared by DOB" reason code is only chosen when customer PII is used to support the decision. Otherwise, choose "Not a Sanction Match" when clearing.

NOTATING DBA NAME CASES
Cases with DBA names are reviewed according to the Developer Program Review Guidelines. If PII is available on a previous case but does not match the name being screened, this counts as a "PII Name Does Not Match" scenario and should be notated as such.

ADVANCED RESEARCH
Individuals — US Only: ID Verification Tool, LexisNexis Due Diligence Person Report
Individuals — US and International: Case Support Tool, iCloud Support Tool, Google (name + company), UK Company Officer Search
Companies — US Only: LexisNexis Due Diligence Business Report
Companies — Foreign and Domestic: D&B WorldBase (in LexisNexis) or dnb.com, Public Sources for Company Data, Google, Apple App Store (for app developer info), Google

To attach web evidence: Safari → File → Export as PDF → Attach File in CMS.
LexisNexis tip: Use the PDF download button. If multiple records, check only relevant records before downloading.
Matched Data hits with US street address and no DOB → search LexisNexis for the missing date details.
NOTE: At the end of each day, move all downloaded PII and company information to Trash and empty trash.

DIRECT ESCALATION SCENARIOS
No research required for these. Leave the "2025 CI ONBOARDING PENDING CASE REVIEW" note, notate the reason, and notate "ESCALATED HOLD."

Example:
2025 CI ONBOARDING PENDING CASE REVIEW
Inclusion term
ESCALATED HOLD

NOTE: If multiple Matched Data Hits with any one requiring direct escalation → do not need to work each hit. Add the required escalation note above.

Direct Escalation Criteria:
• No full name given: Screened Entity submitted a partial name or nickname.
• Inclusion Term: Matched Data shows inclusion list words.
• Gibberish/Scripted Account: DSID/iCloud account matches the "Gibberish/Scripted accounts" trend:
  - New IC account, wallet links "mingzi xing" or "ZhuJu Mao" with ties to Turkey, China, USA
  - New IC in Pakistan with IP in China, email domain gmx.com, hotmail.com or outlook.com with gibberish handle
• Embargoed Countries: Most recent case for this Screened Entity company was rejected for doing business in embargoed countries; OR previously submitted PII is from a sanctioned country.
  NOTE: If there was a reject FOLLOWED by a clear, the new pending case can be reviewed and cleared per normal review guidelines.
• Full Name Match: Screened Entity name is a full match to any Matched Data names (AKAs, spelling variations, and primary name).
• 2/3 Name + Country Match: Screened Entity's FULL name matches 2 of 3 names in the Matched Data name — primary, AKA, or spelling variations (individuals only).
  Example: John Smith vs John Jacob Smith / Aleksandr Muskov vs Aleksandr Muskov Sergeevich.
  NOTE: If both individuals show full names and one is different → partial match → can CLEAR.
  Example: John Allen Smith vs John Jacob Smith / Aleksandr Vladimirovich Muskov vs Aleksandr Muskov Sergeevich.
  NOTE: If MZ account is aged (>30 days), can use to determine location. If not, and no other research to verify location → ESCALATE HOLD.

REASONS TO "ESCALATED HOLD"
• Full review + not enough location/DOB/name info to make a decision.
• Most recent case for Screened Entity company was rejected for ownership.
• Location is the ONLY variance → not enough to clear → ESCALATED HOLD.
• Screened Entity is a potential sanction match to the Matched Data Hit.

OTHER GENERAL GUIDELINES
If a case has more than 25 Matched Data Hits → skip it. No notes required. Move on to your next case.

TYPINATOR FORMS
Case Overview:
2025 CI ONBOARDING PENDING CASE REVIEW
SCREENED ENTITY DATA
SCREENING DATE: [date]
CLIENT & EVENT: [client, event]
ENTITY TYPE: [Individual/Company/Vendor/Developer]
SCREENED ENTITY NAME: [full name]
SCREENED ENTITY LOCATION: [city, region, country]
[IP LOCATION: [location] — if applicable]

Direct Escalation:
2025 CI ONBOARDING PENDING CASE REVIEW
[Select reason: No full name given / Inclusion term / Gibberish/Scripting pattern / Previous case rejected for doing business in embargoed country / Full name match / 2/3 name and country match]
ESCALATED HOLD`},

{id:"orig-cr005", cat:"ref", docType:"original", title:"RC-05 — Compliance Terms and Notations (Original)",
tags:["terms","notation","templates","case overview template","research template","summary template","glossary","aml","ofac","pii","screened entity"],
body:`Compliance Operations Reference - RC-05 | Updated 5/7/2026

OVERVIEW
Discover common terms used in compliance investigation along with proper notation techniques to utilize.

COMMON TERMS GLOSSARY
AML: Anti Money Laundering - Legal controls requiring institutions and entities to prevent, detect, and report money laundering activities.
Apple Developer Program: A program for customers around the world to access beta software, advanced app capabilities, extensive beta testing tools, and app analytics.
NovaPay (Media Platform): Manages the iTunes, Apple App Store, and Apple Services. Compliance screens anyone with access to those accounts on iTunes Connect which allows a person or company to distribute media. Vendors, Banks, and Bank Account Holders receive funding from those sales.
applepaymentsinc (API): Apple Payments Inc - a subsidiary of Apple Inc. that supports the disbursement platform covering daily cash rebates to customers from Apple Card and allows for Direct Bill Payment by customers from Apple Cash to Apple Card.
CIP: The Customer Identification Program, a United States requirement for financial institutions to verify a customers identity.
Client: The application or program from which the screened case data originated.
Compliance: Being in accordance with established guidelines or specifications, or the process of becoming so.
Common name: A popular name many individuals have, or a generic name used by many companies.
Core case: The first Transaction ID in a sequence of cases that shows the original screened name (including any DBA names) and Matched Data hits for the original screened name.
Developer agreement: Agreement granting customers access to developer conferences, technical talks, tools, events, and services.
Delta list updates: The updates made to a sanctions list when entities are added or removed.
Disbursement agreement: An agreement between Apple and a customer, for receiving daily cash from Apple Card.
Due Diligence: Taking every possible precaution, conducting thorough investigation and analysis to identify businesses or persons subject to sanctions.
Doing Business As (DBA): Also known as a trade name, assumed name, or fictitious business name; a registered name under which a business operates that is different from its official legal name.
DOW Jones: Provider of sanctions screening data and sanctions control/ownership research to help businesses comply with sanctions regulations.
DUNS or duns number: A unique nine-digit number that identifies a business.
Enhanced Due Diligence: Extra measures taken because of increased risk that businesses or persons subject.
Entity: May refer to an individual, organization, business, or company that has the legal capacity to enter a contract or agreement.
Event: The interaction, transaction, enrollment, or account update that triggered CMS to open a case.
False hit or false positive: A system identified potential match caused by a common name, missing information, or reason other than a true match.
Full Match: The entire name of the Screened Entity matches the name from the sanctions list.
IDMS: IdentityCore. Provides authentication and authorization services and is the repository for all Apple identities.
IP: A numerical code that identified the geographical location of a computer accessing the internet.
KYC: Know Your Customer program for businesses, a process of verifying the identity of a customer.
Matched Data Hit: The potential match to the Screened Entity on a sanctions list.
OFAC: The Office of Foreign Assets Control (OFAC) of the US Department of the Treasury administers and enforces economic and trade sanctions based on US foreign policy and national security goals against targeted foreign countries and regimes, terrorists, international narcotics traffickers, those engaged in activities related to the proliferation of weapons of mass destruction, and other threats to the national security, foreign policy, or economy of the United States.
OFAC list: Office of Foreign Asset Control list of Specially Designated Nationals and Blocked persons.
Ownership: The structure of who ultimately controls and benefits from a company, whether directly or indirectly.
Partial Match: Only a portion of information matches but not the entire line of information.
PII: Personally Identifiable Information, or information that can be used to find a specific individual such as an email or social security number.
Risk Category: Low, Medium, or High rating based on the Risk Score.
Risk Score: A score calculated from the similarity of the Screened Entity to the Matched Data hit, where more similarity indicates higher risk.
Reverse: To search for related information using an initial starting piece of evidence.
Sanctions list: A list of sanctioned entities, individuals, and banks.
SAR: Suspicious Activity Report - a document filed with the Financial Crimes Enforcement Network (FinCEN) after a suspected incident.
Screened Entity: Screened entity found to have a potential match on a sanctions list.
SDN: Specially Designated Nationals and Blocked Persons List (SDN).
TID: Transaction ID - The unique ID number CMS assigns to each case.
True Match: When research confirms the Screened Entity is the same as the sanctions list hit.
Weak Alias/Low Quality Aliases/AKA: A generic or common nickname that may be used in place of a legal or formal name.
Developer Program: World Wide Developer Relations - a team supporting Apple Developers.

NOTATIONS
The goal of the notation is to clearly document the evidence that supports the decision made on each Matched Data Hit. Documentation with supporting screenshots is critical because Apple may be audited to verify due diligence was performed in government compliance screenings.

Notation templates have been approved by Apple's Legal Team so we must adhere to the templates provided by Typinator or CMS User Note.

Screenshots of research results associated with notes must be saved and uploaded to CMS. Include screenshot names in the notes template for the tool from which it was captured.

NOTATION TYPES

Case Overview:
Template:
Screening Date:
Client & Event:
Entity Type:
Screened Entity Name:
Screened Entity Location:
**IP Location: [Developer Program only]
**Screenshot: EKATA.PNG [Developer Program only]
PII attached:

Research:
Use the built-in CMS template "Regulated Research" tab or the approved Typinator snippet. Only record new information not already present in CMS. If no new information is found, indicate "N/A" or "No new data."

Research Typinator Template:
SCREENED ENTITY RESEARCH
Date of Birth:
LexID:
NAMES:
LOCATION:
EMAILS:
PHONE NUMBERS:
Screenshots:

Summary and Decision:
Use the built-in CMS template "Summary" tab or the approved Typinator snippet.

Guiding Questions:
Matched Entity Hit: (Insert hit number)
Is the entity type a match?: Match/Mismatch
Is the name a match?: Full Match/Partial Match/False Positive
Is the Date of birth a match?: Match/Mismatch/Unknown
Is the location a match?: Match/Mismatch/Unknown

Decision examples:
Decision: Clear by name, DOB and location variance
Decision: Suspend due to 2/3 name, YOB and location match
Decision: Escalate per GESC guidance - invalid name

If escalating, add recommendation:
Recommendation: Clear based on location variance
Recommendation: Company name and location match, need further research to clear.

For direct escalation scenarios: create a manual note using "T2 Escalation Required:" and select the appropriate drop down.

Summary Template:
Matched Entity Hit:
Is the entity type a match?
Is the name a match?
Is the date of birth a match?
Is the location a match?
———————
SUMMARY:
———————
DECISION:

ADDITIONAL NOTES TIPS
• New information should be accompanied by a screenshot showing where it was found.
• Summary notes should be detailed enough that another person can understand the logic without opening research attachments.
• Summary notes should be cohesive and consistent — open-ended notes should match the guiding questions.
• For "Invalid or expired PII" reason: additional context is needed. Example: "T2 Escalation Required: Invalid PII - ID is too blurry to read"
• Translate any foreign languages into English.

NOTES EXMedia PlatformLES

Individual Entity:
Screened Entity Data:
Screening Date: 2026-01-13
Client & Event: amp-itc-users, batch_accounts
Entity Type: Individual
Screened Entity Full Name: Johnny Appleseed
Screened Entity Location: Cupertino, CA, USA
IP Location: San Francisco, CA, USA
Screenshot: EKATA.PNG
PII attached: PII is attached and has been reviewed

Screened Entity Research:
Date of Birth: 1975-12-18 | LEX ID: 0000-1111-2222
Names: Johnny Appleseed, John Appleseed, Jonathan Appleseed
Locations: Austin TX USA / Raleigh NC USA / Elk Grove CA USA
Emails: No new data | Phone: No new data
Screenshots: LexisNexis.png, MZ.png, ACM.png

Matched Data Summary — Hit 1:
Is the entity type a match? Match | Is the name a match? Partial Match
Is the DOB a match? Mismatch | Is the location a match? Mismatch
SUMMARY: Partial name match. SE: Johnny Appleseed. MD: Johnson Appleseed.
DOBs don't match. SE: 1975. MD: 1946.
Locations don't match. SE: USA. MD: SWE.
DECISION: Clear by name, DOB, location variance

Business Entity:
Screened Entity Data:
Screening Date: 2026-01-13 | Client & Event: amp-itc-atb, rt_agreement
Entity Type: Company | Screened Entity Full Name: American Broadcasting Company ; ABC
Screened Entity Location: Burbank, CA, USA | PII attached: PII is attached and has been reviewed

Matched Data Hit 1:
Is the entity type a match? Match | Is the name a match? Partial Match
Is the date of registration a match? Unknown | Is the location a match? Mismatch
Summary: Partial name match. SE: American Broadcasting Company ; ABC. MD: Arab Banking Corporation ; ABC.
Locations don't match. SE: USA. MD: Bahrain.
Decision: Clear based on name and location variance.`},

{id:"orig-cr003", cat:"ref", docType:"original", title:"RC-03 — Compliance Review Model (Original)",
tags:["review model","4 steps","case overview","research","summary","action","clear","escalate","suspend","reject","pcd","direct escalation"],
body:`Compliance Operations Reference - RC-03 | Updated 4/22/26

OVERVIEW
The compliance Review Model is a framework to help guide the process of manually reviewing a case for compliance concerns. The model will ensure investigations are thorough, efficient, and consistent.

COMPLIANCE REVIEW MODEL WORKFLOW
1. Complete Case Overview: A high-level walkthrough of the case to observe valuable indicators.
2. Research and Document: Use tools and available information to investigate and document key points.
3. Summary and Decision: Use evidence collected during research to make a final determination on each Matched Data hit.
4. Action: Based upon the decisions made on the matches of a case, proceed to Clear or Escalate and select the corresponding sub-reason code in ACM.

COMPLETE CASE OVERVIEW
During this step, review case details to answer:
• What type of case is this?
• Why is the case under review?

RESEARCH AND DOCUMENT

Research the Screened Entity: Without PII
• If the Screened Entity is an entity type variance from the Matched Data Hit(s) → clear the case.
• If a DOB is available for the Matched Data, and we are able to locate a DOB for the Screened Entity in LexisNexis, no further research is needed. Document DOB, LexID, new names and locations. Attach screenshots.
• If research is inconclusive or there is a DOB match → proceed with full path of progression.
• (Digital ID Program only) If the year of birth for the Screened Entity (with a valid name) differs from the year of birth for the Matched Data Hit(s) → no external research needed.
• For full research: follow the Tools Path of Progression to capture all names, dates of birth, addresses, phone numbers, emails, and Apple interaction history. Capture and attach screenshots.

Research the Screened Entity: With PII
1. Review PII attachments to ensure PII is valid per Match Determination Guidelines & Acceptable PII Criteria.
2. If PII matches for individuals: fill in City of Birth, Country of Birth, Date of Birth, and Passport/National ID number (if available).
3. For businesses: leave provided fields blank but create a note with date of registration and/or company ID number if available in PII.

The below scenarios require escalation to Tier 3 — no research needed:
• Name in CMS does not match submitted PII attachment.
• Event type batch bank record.
• Incomplete Identification (no name and/or DOB visible).
• Sanctioned country or region (CUB, PRK, IRN or sanctioned Ukrainian regions).
• Invalid PII submitted (photos that do not include ID documents, doctored PII).
• Apple Corporate Compliance Inclusion term.
• Unable to translate ID.

Evaluate the Quality of the Hit:
• Evaluate if the Matched Data Hit is the same type of entity as the Screened Entity. If the Matched Data Hit is a business and the Screened Entity is an individual → cannot be a true match.
• If same entity type → compare complete names, dates of birth or registration, and locations.
• Look for indicators the hit is a false positive: partial match, weak alias.
• For OFAC guidelines on determining a true match: https://ofac.treasury.gov/faqs/5
• For weak alias guidance: https://ofac.treasury.gov/faqs/topic/1646

If established as a false positive → clear the hit.
If not enough evidence to clear → escalate to Tier 2 with reason and recommendation.

Document: Documentation with supporting screenshots is critical for audit purposes. Ensure complete notes with screenshots or attachments are uploaded in CMS.
Note: For privacy compliance, any screenshots, downloads, or documents saved to your Mac must be deleted after completing the case.

SUMMARY AND DECISION
The summary consists of detailed comparisons between the Screened Entity and every Matched Data Hit's names, dates of birth (where applicable), known locations, and entity types. For companies: compare names, locations, and entity types.
The decision section includes action to be taken and a short phrase explaining the reason.
If the decision is to Escalate: include a recommendation for next steps.

ACTION

Clear:
• "Cleared by DOB" if a DOB was used to make the decision on any Matched Data comparison.
• "Not a Sanction Match" for all other reasons.

Escalate when:
• A case meets the direct escalation criteria.
• The case cannot be cleared due to insufficient data.
• Further research is required using tools only accessible by Tiers 2 and 3.
• A potential true match is found and needs additional Tier 3 research.

Select:
• "Potential sanction match" if full name and location match.
• "Invalid Customer Submitted Info" for invalid PII.
• "Unable to waive compliance concerns" for all other reasons.

Suspend:
Reserved for Digital ID Program and Media Platform batch registrant:

Digital ID Program:
• Assigned without PII AND decision cannot be made after due diligence.
• NOTE: If PII uploaded but decision cannot be reached → Escalate, not Suspend.
• Set PCD to 14 days.

Media Platform, batch registrant:
• DUNS number results in a different company name.
• Screened Entity name belongs to an individual instead of a company.
• Full name match to Matched Data Hit but country variance.
• Set PCD to 30 days.

Reject (Tier 2 only, Digital ID Program only):
• "Invalid Customer Submitted Info" or "Sanctioned Country / Region."
• All other reason codes are for Tier 3 use only.

If a case is cleared, rejected, or suspended in error → immediately notify team manager with: TID, date, summary of what happened, intended action.`},

{id:"orig-cp007", cat:"ref", docType:"original", title:"SC-07 — Match Determination & Acceptable PII Criteria (Original)",
tags:["match determination","entity type","full match","partial match","false positive","date of birth","location","2/3 name match","close name match","china","acceptable pii","expired pii","individuals","companies"],
body:`Compliance Operations Reference - SC-07 | Updated 04/21/26

OVERVIEW
When reviewing a Compliance Case, matching determination guidelines depend on whether the Screened Entity is an individual or company.

DEFINING MATCHES

Entity Type:
• Match: Both Screened Entity and Matched Data Hit are individuals, or both are businesses.
• Mismatch: Different entity types (e.g., individual vs. company/vessel).
  Example: Zhao Wei (individual) vs Zhao Wei LLC (company)

Names:
• Full Match: Both share the same full name.
  Examples: Timothy Apple vs. Timothy Apple / Apple Inc. vs. Apple Inc.
• Partial Match: One of the Screened Entity names matches with any of the Matched Data Hit's names (including AKAs).
  Examples: John Smith vs. John Smithers / RT Solutions vs. RS Solutions
• False Positive: None of the screened entity names match with any of the Matched Data Hit's names.
  Examples: John Smith vs. Johnson Smithy / Capex Inc. vs Apex Co. Ltd.

Note: Notate whether the name matches the primary name or an AKA.

Individuals — 2/3 Name Match Criteria:
Applies only to Digital ID Program cases where Screened Entity has no previously submitted PII, and FULL name matches 2 of 3 names in the Matched Data name. Classified as a partial match.
Examples: John Smith vs John Jacob Smith / Aleksandr Muskov vs Aleksandr Muskov Sergeevich.
Note: If both individuals show first, middle, and last names and one is different → CLEARED as regular partial match.
Examples: John Allen Smith vs John Jacob Smith / Aleksandr Vladimirovich Muskov vs Aleksandr Muskov Sergeevich.

Companies — Close Name Match:
Brand name is the same but legal identifier differs. Classified as a partial match.
Examples: LLC (US) = GmbH (Germany) = OOO (Russia).
Examples: Biotech vs. Biotech LLC / Cheer Flyer Company Unlimited vs. Cheer Flyer Company.

Date of Birth:
• Match: Full date of birth match (day/month/year).
• Mismatch: Any variance in day/month/year.
• Unknown: Not enough information available.

Location:
• Match: Full address match (street number/name, city, state and country).
• Mismatch: A variance in location (country/state/city/province/oblast etc.).
• Unknown: Not enough information to determine.

MATCH DETERMINATION GUIDELINES FOR INDIVIDUALS
• Entity Type mismatch → clear: "Not a Sanction Match."
• Name not a full match to any Matched Data names (primary or AKA) → clear: "Not a Sanction Match."
• DOB different from Matched Data → clear: "Clear by DOB."
• Citizenship/residency/address not a match to any Matched Data locations AND names are not a full match → clear: "Not a Sanction Match."
Note: Before choosing Clear, review address information provided. If the address is a complete match, Escalate: "Potential Sanction Match."

MATCH DETERMINATION GUIDELINES FOR COMPANIES
• Entity Type mismatch → clear: "Not a Sanction Match."
• Full name match to any Matched Data associated names → escalate: "Unable to waive compliance concerns."
• Close match to any Matched Data associated names AND countries match → escalate: "Unable to waive compliance concerns."
• Not a close or full match → clear: "Not a Sanction Match."
• Location not a full match to any Matched Data locations AND names are not a full match → clear: "Not a Sanction Match."
Note: If the address is a complete match, Escalate: "Potential Sanction Match."

CHINA COMPANY NAMING CONVENTION
In China, company names are structured as: Registered Area + Brand Name + Industry Type + Organizational Form.
Only the Chinese name is legally recognized and appears on the business license. English names are for marketing only.
Escalate if the brand names are a match, even if the registered areas differ.
Example: Beijing Huawei vs. Shanghai Huawei → escalate (same brand name, likely same company).

ACCEPTABLE PII CRITERIA — COMPANIES
• Must be an official document with the issuing authority shown.
• Name on registration must match the Screened Entity name. If different → escalate.
• If date of registration or company number is available → notate in CMS. If unavailable → PII may still be used.
• Expired PII is acceptable for businesses regardless of how long expired.
• If the identification appears modified → escalate (includes blurry/illegible images).
• NOT accepted: Bank statements / List of requested corporate documents.
• Any government issued document, including EIN letters from the IRS, are acceptable.

ACCEPTABLE PII CRITERIA — INDIVIDUALS
1. Name on ID must match Screened Entity name. If different → escalate.
   • Nicknames and initials are not accepted.
   • Must submit at least one first name and one last name.
   • If no clear separation and full name is on a single line → accept any combination of at least 2 names.
   • If a comma is present → treat as a line break.
   • Note: Some regions do not list a surname or show only an initial. If Screened Entity also has no surname in CMS → can accept as long as names match.
2. If ID is expired past one year → escalate.
3. DOB must be visible. If no DOB → escalate. Notate in appropriate CMS field.
4. Locate Passport Number or National ID number. Notate in CMS. If unobtainable but name and DOB are clearly visible → PII may still be used (omit ID number from CMS fields).
5. If identification appears modified → escalate (includes blurry/illegible images).`},

{id:"orig-cr004", cat:"ref", docType:"original", title:"RC-04 — Compliance Tools (Original)",
tags:["lexisnexis","mz support","aso acm","ekata","typinator","icloud support","dun bradstreet","path of progression","tools","research","no pii"],
body:`Compliance Operations Reference - RC-04 | Updated 03/31/26

OVERVIEW
This document outlines the tools available for Compliance Investigators that assist with the steps of the Compliance Review Model for support tiers 1 and 2.

DEFINING PATH OF PROGRESSION
The tools path of progression is only to be used on cases that do not have PII attachments uploaded by a customer (or documentation from a company) in CMS.

Path of progression:
1. LexisNexis
2. Case Support Tool
3. Apple Store Online (ASO) ACM
4. Ekata
5. Secondary Tools

PRIMARY COMPLIANCE TOOLS

LexisNexis
URL: https://riskmanagement.lexisnexis.com/
Contains: Public records data, including DOB (US Only), addresses, and foreign and domestic company information.

Tier 1 Support:
1. Log in and complete multi-factor authentication.
2. Use Find a Person to search address and/or phone number.
3. Document DOB, LexID, names, new locations (city, state, and country).
4. Screenshot any new information and attach to the case in CMS.

Tier 2 Support:
• Use Due Diligence Person Report (USA Only) to search address and/or phone number.
• Use Due Diligence Business Report (USA Only) to search company names (including DBA), executives, and street addresses.
• Use D&B WorldBase (foreign and domestic) to search DUNS Number or company name with country.
• For API: document DOB, LexID, names, new locations, screenshot new info.
• For Escalations and Provisional Cases: download records with new information and upload in CMS via Attach File.
Note: Screenshots must contain only information relevant to the individual being researched.

MZ Support
URL: https://mzsupport.vilecorp.com/WebObjects/MZSupport.woa
Contains: iTunes and Media Platform purchases, registered devices, storefronts, payment methods and billing information.

1. Search DSID, email or phone number.
2. Click "Display Full Address" to reveal current billing information.
3. Look under Family Sharing and document any other family members.
4. If Billing Infos link appears under Current Billing Information, click the link.
5. Document any new names, locations, email addresses or phone numbers.
6. Screenshot any new information and attach to the case in CMS.

ASO ACM
URL: https://acm-nonregulated.g.vilecorp.com/ui-service/home/lobs/AOS
Contains: Finished goods order history, payment, and billing & shipping history.

1. From CMS dashboard, change availability status to CMS Classic.
2. Choose ASO from available lines of business.
3. Click the magnifying glass → Advanced Search.
4. From Query Builder Search Criteria, add rule for DSID, email and/or phone number.
5. Document any new names, locations, email addresses or phone numbers.
6. Screenshot any new information and attach to the case in CMS.

Ekata
URL: https://app.ekata.com/search
Contains: Public records, IP address and digital identity data.

1. Click the Quick-Launch Research Button in CMS (located by the Screened Entity name) to open Ekata.
2. The information from the Screened Entity details will auto-fill in Ekata.
3. Document DOB, names, locations, phone numbers.
4. Screenshot any new information and attach to the case in CMS.

OTHER TOOLS

Typinator
URL: https://istweb.vilecorp.com/scv/en/typinator
Manages Investigator templates and keyboard shortcuts for case notes.

iCloud Support Tool
URL: https://support.icloud.vilecorp.com/support/client/index.html?lang=en-us
Provides profile information for an Apple Account including address, phone number, and alternate email addresses.
NOTE: We are not permitted to screenshot the iCloud Support Tool for security reasons.

1. Enter email, DSID, first and last name, or phone number in its respective search field.
   If searched by email or DSID: every result is relevant, all new data must be notated.
   If searched by names and phone numbers: results may not all be related to the same individual.
2. Click Identity tab to view address, phone number, and Apple ID information.
3. If available, click Security tab → expand "Two-Factor Authentication Trusted Devices" for additional phone/location info.
4. If available, expand "Enrollment Device" for additional location information.
5. To determine account age: General tab → "Apple Account Creation Date."

Dun & Bradstreet Business Directory
URL: https://www.dnb.com/business-directory.html
Public records for foreign and domestic companies. Search by DUNS number and company names.`},

{id:"orig-cr002", cat:"ref", docType:"original", title:"RC-02 — CMS User Guide (Original)",
tags:["hcm","hermes","dashboard","case header","case details","resolve","sla","binocs","related cases","attach file","logging notes","availability status"],
body:`Compliance Operations Reference - RC-02 | Updated 4/24/25

OVERVIEW
Case Management System (CMS) streamlines the process of comparing individuals, banks, and business entities against potential matches on lists of sanctioned parties.

ACCESS CMS
• Non-Regulated (Media Platform, Developer Program, Digital ID Program): https://acm-nonregulated.g.vilecorp.com
• Regulated (API): https://acm-regulated.g.vilecorp.com
Log in with AppleConnect credentials. Two-Step verification may be required. Ensure Sanctions is selected from the lines of business.

DISPLAY SETTINGS
Information is displayed in several widgets. Zoom with Command + or Command - in Safari.

CMS DASHBOARD
• ACM button: Returns to dashboard from anywhere.
• Availability Status: Dropdown to select a different status.
• Next Case: Automatically assigns the next case. Availability depends on ACM Availability status.
• Case Volume: Displays client, total open cases, Max Age, and Suspended/In Progress counts.
• Yesterday/Today/Week: Toggle to view metrics for different time periods.
• My Metrics: Breakdown of previously actioned cases.
• User Menu: Click name/silhouette to access control settings.
• Advanced Search: Click magnifying glass for Advanced Search, Recent Searches, Favorite Searches.
• Basic Search: Search using billing, bank, or developer names and addresses.

CASE VOLUME WIDGET
Client / Open Total / Tier / Suspended / In Progress / Provisional / Missed SLA

MY METRICS
Toggle Yesterday/Today/Week. Metrics displayed per LOB if provisioned for multiple.

USER MENU
• Info: Person ID, Role, contact information.
• Logging: Leave as Default.
• Recent Cases: List of recent cases worked.
• Color Scheme: Changes CMS color.
• Mass Action Cases: Action multiple transactions simultaneously.
• Logout.

CASE HEADER DETAILS
• SLA: Target Service Level Agreement at the top of the screen.
• Screen Date: Date and time (PT) of compliance screening.
• Transaction ID: Unique ID CMS assigns to each case.
• Client: Application where information was screened.
• Event: Process or interaction that created the case.
• Risk Score: Numerical score assigned by HDS, based on triggered rules.
• Risk Category: Low (0.0 or 72.0-79.9), Medium (80.0-89.9), or High (90.0-100).
• Product: Apple financing product associated with the case (Breakout only).
• Case Status: Open, In Review, Clear, Provisional, or Rejected.
• PCD: Provisional Cancel Date.
• Assigned To: Investigator the case is currently assigned to.
• VIP: Not currently a functioning service.
• Last Actioned By: Name of the Investigator who last actioned the case.
• Last Action Date: Date of the last action.

CASE DETAILS
Always present:
• Screened Entity: Entity that triggered the case review.
• Matched Data: Data from sanctions lists displayed to the right of the Screened Entity.
• Notes: Review existing notes or add a new note. Includes option to attach a file.

May be present:
• Related Cases Icons (Binocs): Icons next to fields with matching information from previous cases. Number indicates how many cases; color indicates previous actions.
• Drilldown: Clicking a Binoc icon opens a drilldown showing previous cases with matching information.
• Notification ribbon: Yellow ribbon indicating an update — click to refresh.

RESOLVE
Use the Resolve button to action a case. A popup window will appear with only actions available to the Investigator's tier.

CASE PRIORITY & SLA
CMS automatically assigns the highest priority case based on tier, skilling, and SLA deadlines.
All current clients: 48-hour SLA.

Begin Review: Change status from Not Ready to Ready. Case loads automatically when countdown ends.

RELATED CASES AND CASE HISTORY
Binoc icons appear next to data points with related information. Click to open drilldown.
Use binocs to review previous cases that have been cleared or rejected.

VIEW PREVIOUS NOTES
CMS defaults to displaying previous notes. Use "View Notes Only" dropdown to change view.
File types viewable in CMS: jpg, jpeg, pdf, html, and txt.
Note: Some PII types may require download. Delete any downloads after completing the case.

LOGGING NOTES
1. Type notes in the Add a Note field.
2. Click Apply to save.
3. Only the most recent applied note can be edited. To correct an earlier note → save a new one identifying it as a correction.

ATTACH A FILE
1. Save the file with the appropriate file name.
2. In Add a Note, type notes related to the file.
3. Click Attach File → select file using Clipboard or Drag and Drop.
4. Click Apply.
5. Refresh the case to confirm files and notes were saved.
6. Delete all applicable files containing PII from your Mac.`},

{id:"orig-cr0007", cat:"ref", docType:"original", title:"RC-007 — Decisioning Matrix (Original)",
tags:["decisioning matrix","with pii","idms no pii","companies","batch free developer","clear","escalate","suspend","2/3 name match","pcd","entity type mismatch"],
body:`Compliance Operations Reference - RC-007 | Updated 4/13/26

OVERVIEW
This document serves as a guideline for making a decision on a Compliance case. Note: If you are unsure of what your decision should be after reviewing this document, escalate.

Any entity type mismatch will be cleared as that inherently means that your Screened Entity cannot be the same as your Matched Data Hit(s).

DECISIONING MATRIX — WITH PII (Individuals)

Name: False Positive | DOB: Any | Location: Any → CLEAR (Not a Sanction Match)
Name: Partial Match | DOB: Mismatch | Location: Any → CLEAR (Cleared by DOB)
Name: Partial Match | DOB: Match or Unknown | Location: Mismatch → CLEAR (Not a Sanction Match)
Name: Partial Match | DOB: Match or Unknown | Location: Match or Unknown → ESCALATE (Unable to Waive)
Name: Full Match | DOB: Mismatch | Location: Any → CLEAR (Cleared by DOB)
Name: Full Match | DOB: Match or Unknown | Location: Mismatch → CLEAR (Not a Sanction Match)
Name: Full Match | DOB: Match or Unknown | Location: Match or Unknown → ESCALATE (Potential Sanction Match)

DECISIONING MATRIX — IDMS WITHOUT PII
Refer to Match Determination Guidelines for information on the 2/3 Name Match criteria.

Name: Clearly different / False Positive | YOB: Any | Country: Any | MZ Age: Any → CLEAR
Name: 2/3 Match | YOB: Mismatch | Country: Any | MZ Age: Any → CLEAR
Name: 2/3 Match | YOB: Match or Unknown | Country: Different | MZ Age: Aged (>30 days) → CLEAR
Name: 2/3 Match | YOB: Match or Unknown | Country: Different | MZ Age: New (<30 days) → SUSPEND (14 days)
Name: 2/3 Match | YOB: Match or Unknown | Country: Same | MZ Age: Any → SUSPEND (14 days)
Name: Full Match | YOB: Any | Country: Any | MZ Age: Any → SUSPEND (14 days)

DECISIONING MATRIX — COMPANIES
Note: If the Screened Entity address is a full match (street, city, state, country) to the Matched Data Hit → escalate.

Name: False Positive (not close/full) | Country: Any → CLEAR (Not a Sanction Match)
Name: Close Match | Country: Different → CLEAR (Not a Sanction Match)
Name: Close Match | Country: Same → ESCALATE (Unable to Waive)
Name: Close Match | Country: Unknown → ESCALATE (Unable to Waive)
Name: Full Match | Country: Any → ESCALATE (Unable to Waive)

DECISIONING MATRIX — BATCH FREE DEVELOPER
Note: If the Screened Entity address is a full match (street, city, state, country) → escalate.

Screened Entity: Individual (name appears to be a person) → SUSPEND (30 days)
Company | No PII | False Positive → CLEAR
Company | No PII | Full Match | Country Mismatch → SUSPEND (30 days)
Company | No PII | Full Match | Same or Unknown Country → ESCALATE (Unable to Waive)
Company | No PII | Close Match | Different Country → CLEAR
Company | No PII | Close Match | Same Country → SUSPEND (30 days)
Company | PII submitted | Can clear → CLEAR
Company | PII submitted | Cannot clear → ESCALATE (Unable to Waive)

Note: Do NOT suspend when PII is already attached — escalate instead.
Note: Previously suspended + PCD expired + no new docs → do NOT suspend again → ESCALATE with "Previously suspended - no new information."`},

// ══════════════════════════════════════════════
// TECH EDITS — clean, restructured rewrites
// ══════════════════════════════════════════════

{id:"edit-cp002", cat:"amp", docType:"edit", title:"SC-02 — Media Platform Review Guidelines (Tech Edit)",
tags:["amp","batch registrant","batch bank record","rt_agreement","pii","escalate","suspend","dba","ownership"],
body:`Media Platform Review Guidelines | Tech Edit | May 2026

WHAT IS Media Platform?
NovaPay manages iTunes, the App Store, and Apple Services. Compliance screens developers, vendors, banks, and bank account holders who access iTunes Connect to distribute media.

BEFORE YOU BEGIN — QUICK REFERENCE

CMS URL: https://acm-nonregulated.g.vilecorp.com
Suspend PCD: 30 days (batch registrant only)
No suspend option: All other Media Platform events use Clear or Escalate only.

CLIENTS & EVENTS

amp-itc-users events:
• enrollment_check — New individual team members of content providers
• batch_user — Same as above + developers from Developer Program

amp-itc-atb events:
• rt_agreement — PaidApp Agreement signers (first-time or legal entity changes)
• rt_bank_account_holder — Same population as rt_agreement
• batch_bank_account_holder — First batch + nightly screening of bank account holders
• batch_vendor_master — First batch + nightly screening of vendors/legal entities
• batch bank record — Bank updates from Accuity + nightly bank screenings [ALWAYS DIRECT ESCALATE]
• batch_vendor_extra_info — Additional vendor info batch
• batch registrant — Free app developer screening [has extended workflow below]

REASON CODES AT A GLANCE
Clear — Cleared by DOB: Use when DOB mismatch drove the decision AND customer PII was submitted.
Clear — Not a Sanction Match: All other clear reasons.
Escalate — Potential Sanction Match: Full name AND full location match to Matched Data.
Escalate — Invalid Customer Submitted Info: Invalid or unacceptable PII.
Escalate — Unable to Waive Compliance Concerns: All other escalation reasons.
Suspend: Set PCD to 30 days. batch registrant only.

STEP 1 — LOG IN AND GET A CASE
1. Go to https://acm-nonregulated.g.vilecorp.com and log in.
2. Set status:
   Ready → auto-assigns after 10 seconds (or click Next Case to skip)
   CMS Classic → assigns only when you click Next Case
   Not Ready → no cases assigned (default on login)

STEP 2 — CASE OVERVIEW
Capture from Case Header and Screened Entity panel. Translate any non-English names or locations.

Template:
Screening Date: [from Case Header]
Client & Event: [e.g., amp-itc-users, batch_user]
Entity Type: [from Entity Label field]
Screened Entity Name: [copy as shown; add English translation if needed]
Screened Entity Location: [city, state, country]
PII attached: [PII is attached and has been reviewed / No PII attached]

STEP 3 — REVIEW PII AND DOCUMENT

For Individuals — enter in CMS fields (tab or click outside to save):
Field / Source / Format / Notes
City of Birth / System Notes / Text / Translate non-romanized; leave blank if incorrect
Country of Birth / System Notes / 3-digit ISO code / e.g., USA, GBR, DEU
Date of Birth / Identification / YYYY-MM-DD / Required — see PII criteria
National ID Number / Identification / Free text / Encrypts on save; omit if unreadable (if name+DOB clear)
Passport Number / Identification / Free text / Encrypts on save

For Companies — do NOT use CMS fields. Create a manual note with:
• Date of registration (if available)
• Company ID number (if available)
Omit if unavailable — PII can still be used.

STEP 4 — RESEARCH (batch registrant only)
Research is required when no documentation has been uploaded yet.

Company research path:
Scenario → Action
Full name match + country mismatch + no PII → Suspend (PCD 30 days)
Close name match + same country + no PII → Suspend (PCD 30 days)
PII uploaded + still can't clear → Escalate — Unable to Waive (do NOT suspend)
True sanctions match → Escalate — Potential Sanction Match (do not request PII)
DUNS returns different company name → Suspend (PCD 30 days); attach findings
No evidence company exists → Escalate with recommendation
Previously suspended + PCD expired + no new docs → Escalate only; note: "Previously suspended - no new information"

[Note: If researching — use DNB.com or Public Sources before LexisNexis]
[Note: If Screened Entity has any affiliation with Apple Inc. → complete research and summary, then escalate]

Individual name (batch registrant):
If the name appears to be a person rather than a company → Suspend (PCD 30 days).
Once PII is uploaded and you still can't clear → Escalate (do NOT suspend).
Previously suspended + PCD expired → Escalate only.

Using previously submitted PII:
Only usable if the previous case was also Media Platform. Screenshot or download it, attach to current case, add note: "PII found on TID: ___"

Advanced research tools (batch registrant):
Individuals (US): ID Verification Tool, Phone Finder, Due Diligence Person Report
Individuals (US + International): MZ Support, iCloud Support Tool, Google, UK Company Officer Search
Companies (US): LexisNexis Due Diligence Business Report [last resort]
Companies (all): DNB.com, Public Sources for Company Data, Google, D&B WorldBase [last resort]

To save web pages as evidence: Safari → File → Export as PDF → Attach in CMS.
End of day: Delete all downloaded PII/company files. Empty Trash.

STEP 5 — SUMMARY AND DECISION
For each Matched Data Hit, complete the notation:

Matched Entity Hit: [number]
Is the entity type a match? [Match / Mismatch]
Is the name a match? [Full Match / Partial Match / False Positive]
Is the date of birth a match? [Match / Mismatch / Unknown]
Is the location a match? [Match / Mismatch / Unknown]
———————
SUMMARY: [Specific variances — use exact names, DOBs, locations]
———————
DECISION: [Clear/Suspend/Escalate + brief reason]
RECOMMENDATION: [Required if escalating — next steps for Tier 2]

Decision guide:
• Enough evidence to clear → CLEAR
• No PII + full name match + location variance → SUSPEND
• All other cases → ESCALATE
→ See Decisioning Matrix for full guidance.

⚠️ If ANY single Matched Data Hit requires escalation → the entire case escalates.

STEP 6 — ACTION THE CASE
1. Click Resolve.
2. Select Clear, Suspend, or Escalate.
3. Wait for next case or click Next Case.

OTHER GUIDELINES

Direct Escalation (no full summary needed — just overview + note + action):
1. Complete Case Overview (skip for batch bank record)
2. Create note: "T2 Escalation Required: [reason]"
   For Invalid/Expired PII → add context: e.g., "ID too blurry to read" or "Passport expired 2024"
3. Resolve → Escalate → Unable to Waive Compliance Concerns

Direct Escalation Reasons:
• batch bank record event
• Inclusion Term (the ONLY direct escalation for batch registrant; for multiple hits where only one is inclusion term — work the others normally)
• Sanctioned country/region connection (Cuba/Iran/North Korea/Ukrainian sanctioned regions)
• Names Do Not Match (ID name ≠ Screened Entity name)
• Partial ID (back of ID submitted, or name/DOB obscured)
• Invalid PII (non-ID doc, altered, or illegible)
• Unable to translate ID

Non-direct escalation (for batch registrant — full review required first):
• Full review + not enough name/DOB/location info to decide
• Full name match to any Matched Data name (including AKAs; check Romanized + native script)
• Location is the ONLY variance → not enough to clear
• Connection found to embargoed country/region

25+ Matched Data Hits:
1. Case Overview normally.
2. Summary notes for hits 1–25.
3. Add note: "Escalation Required: 25+ Matched Data Hits"
4. Resolve → Escalate → Unable to Waive.

Linked Cases:
Your case = In Progress. Open cases = also assigned to you. Provisional cases = do NOT action.
Work each case individually. All notes on each case. Confirm correct case(s) when actioning.

DBA Scenarios ("[Name] ; [DBA Name]"):
Only the screened portion is evaluated.
PII matches screened name → review normally.
PII matches non-screened name → direct escalate as Invalid PII.
Summary notes focus only on the screened name.

Case Created by the Business:
"Case created at the request of the business" = original expired, auto-regenerated.
Find core case: search TID prefix (everything before _) in CMS search.
Use core case Matched Data to evaluate. Action accordingly.

Ownership Percentages:
Owner < 100% → other owner(s) unscreened → must escalate.
NOT a direct escalation — complete full review first.
Final action: always Escalate → Unable to Waive. Note: "Escalate due to ownership percentages listed."`},

{id:"edit-cp001", cat:"wwdr", docType:"edit", title:"SC-01 — Developer Program Review Guidelines (Tech Edit)",
tags:["wwdr","enrollment check","rt_enrollment_final","ip location","ekata","pii","direct escalation","dba","ownership"],
body:`Developer Program Review Guidelines | Tech Edit | May 2026

WHAT IS Developer Program?
DevConnect screens developer enrollments into the Apple Developer Program. Two events:
• enrollment check — Individual-level screening (first check)
• rt_enrollment_final — Entity-level screening (completes enrollment if cleared)

BEFORE YOU BEGIN

CMS URL: https://acm-nonregulated.g.vilecorp.com
Available actions: Clear or Escalate ONLY (no Suspend for Developer Program)
IP Location + Ekata screenshot: Required for ALL Developer Program cases — capture in Case Overview

STEP 1 — LOG IN AND GET A CASE
1. Go to https://acm-nonregulated.g.vilecorp.com and log in.
2. Set status (Ready / CMS Classic / Not Ready). Wait for case assignment.

STEP 2 — CASE OVERVIEW
Capture IP Location from Ekata (click Quick-Launch Research Button next to Screened Entity name). Translate any non-English names or locations.

Template:
Screening Date: [from Case Header]
Client & Event: [e.g., Developer Program, enrollment check]
Entity Type: [from Entity Label field]
Screened Entity Name: [copy as shown; add English translation if needed]
Screened Entity Location: [city, state, country]
IP Location: [from Ekata]
Screenshot: EKATA.PNG
PII attached: [PII is attached and has been reviewed / No PII attached]

STEP 3 — REVIEW PII AND DOCUMENT

For Individuals — enter in CMS fields (tab or click outside to save):
• City of Birth: From System Notes. Translate non-romanized characters. Leave blank if incorrect.
• Country of Birth: 3-digit ISO country code.
• Date of Birth: YYYY-MM-DD.
• National ID Number: If submitted. Encrypts on save.
• Passport Number: If submitted. Encrypts on save.

For Companies — create manual note with date of registration and/or company ID number. Do NOT enter in CMS fields.

STEP 4 — SUMMARY AND DECISION
Compare Screened Entity to each Matched Data Hit: entity types, names, dates of birth, dates of registration, and locations.

Use the notation template for each hit:

Matched Entity Hit: [number]
Is the entity type a match? [Match / Mismatch]
Is the name a match? [Full Match / Partial Match / False Positive]
Is the date of birth a match? [Match / Mismatch / Unknown]
Is the location a match? [Match / Mismatch / Unknown]
———————
SUMMARY: [Specific variances with exact names, DOBs, locations]
———————
DECISION: [Clear / Escalate + reason]
RECOMMENDATION: [Required if escalating]

Decision guide:
• Enough evidence to clear → CLEAR
• Not enough → ESCALATE
→ See Decisioning Matrix for guidance.

⚠️ If ANY Matched Data Hit requires escalation → the entire case escalates.

STEP 5 — ACTION
1. Click Resolve → Clear or Escalate (no Suspend option).
2. Wait for next case or click Next Case.

Clear reason codes:
Cleared by DOB — DOB mismatch used in the decision.
Not a Sanction Match — all other clear reasons.

Escalate reason codes:
Potential Sanction Match — full name AND location match.
Invalid Customer Submitted Info — invalid PII.
Unable to Waive Compliance Concerns — all other reasons.

OTHER GUIDELINES

Direct Escalation (overview + note + action only):
1. Complete Case Overview.
2. Note: "T2 Escalation Required: [reason]" (for Invalid/Expired PII, add specific context)
3. Resolve → Escalate → Unable to Waive Compliance Concerns.

Direct Escalation Reasons:
• Inclusion Term in Matched Data
• Sanctioned country/region connection
• Names Do Not Match
• Partial ID
• Invalid PII
• Unable to translate ID

25+ Matched Data Hits: Summary notes for 1–25, then note "Escalation Required: 25+ Matched Data Hits" → Escalate.
Linked Cases: Work each individually. All notes on each. Do not action pending cases.
Case Created by the Business: Find core case by searching TID prefix. Use core case Matched Data.
DBA Scenarios: PII matches screened name → review normally. PII matches non-screened name → direct escalate.
Ownership Percentages: < 100% ownership → escalate. NOT direct — complete full review first.`},

{id:"edit-cp000", cat:"idms", docType:"edit", title:"SC-00 — Digital ID Program Review Guidelines (Tech Edit)",
tags:["idms","lifecycle","suspend","pcd","14 days","year of birth","yob","2/3 name match","vessel","double suspend","direct escalation"],
body:`Digital ID Program Review Guidelines | Tech Edit | May 2026

WHAT IS IDMS?
IdentityCore screens Apple IDs when customers in high-risk countries (Phase 1: 35 countries) add a payment method to Apple Wallet. A potential match creates a case in CMS. Confirmed true matches → account deactivated.

BEFORE YOU BEGIN

CMS URL: https://acm-nonregulated.g.vilecorp.com
Suspend PCD: 14 days
⚠️ NEVER double-suspend. Each suspension sends the customer a text, email, and in-app notification. If suspended after PII is already submitted, the notification fires but the upload link doesn't work — poor customer experience.

LIFECYCLE SUMMARY
1. Customer adds payment → name matches sanctions list → case created
2. Tier 1 reviews (no PII yet)
3. Can't clear → Suspend (sends PII request; PCD = 14 days) OR Direct Escalate
4. Customer submits PII → case reopens for Tier 1
5. Still can't clear or PII meets escalation criteria → Escalate to Tier 2
6. Tier 2: clear, reject (invalid PII), or escalate to Tier 3
7. Rejection → customer can resubmit; >2 rejections → must go to Tier 3
   Customer doesn't submit within 14 days → account remains restricted

STEP 1 — LOG IN AND GET A CASE
1. Go to https://acm-nonregulated.g.vilecorp.com and log in.
2. Set status (Ready / CMS Classic). Wait for case.

STEP 2 — CASE OVERVIEW
Location format: city, state, country/region. If no city or state → country/region only.
Translate non-English names and locations.

Template:
Screening Date: [date]
Client & Event: [e.g., idms, batch_accounts]
Entity Type: [from Entity Label]
Screened Entity Name: [as shown in CMS]
Screened Entity Location: [city/state/country or country only]
PII attached: [PII is attached and has been reviewed / No PII attached]

STEP 3 — RESEARCH: QUICK DECISIONS FIRST

Before doing full research, check these shortcuts in order:

1. Is the Matched Data Hit a vessel, ship, or aircraft?
   YES → CLEAR immediately. No research needed. (Only applies when Matched Data itself is the vessel.)

2. Is there an entity type mismatch?
   YES → CLEAR.

3. Does the Screened Entity's Year of Birth (visible in CMS Screened Entity panel) differ from the Matched Data YOB?
   YES → CLEAR. No external research needed. Use "Not a Sanction Match."

4. Is this an inclusion term case (individual)?
   YES → Search MZ for billing name in wallet. Screenshot. Note: "MZ Billing Name: [name] | Clear inclusion term | Screenshot: MZ.png" → CLEAR.

If none of the above shortcuts apply → continue to full research below.

STEP 3A — FULL RESEARCH: BY SCENARIO

Valid name, no PII:
Full name match to Matched Data → SUSPEND (PCD 14 days)
Name obviously different → CLEAR
2/3 name match:
  MZ account aged (>30 days) + different country from Matched Data → CLEAR
  New account (<30 days) or same/unknown country → SUSPEND (PCD 14 days)
None of the above → run full Tools Path of Progression

Invalid name submitted:
1. Search MZ for a full valid name in billing infos.
2. Valid name found + entity type mismatch → CLEAR
   Valid name found + entity type match → SUSPEND
3. No valid name found → full research + SUSPEND (to request PII)

PII has been submitted:
Validate PII against Acceptable PII Criteria.
Note: Previously submitted PII can only be used if it's from another Digital ID Program case.

Researching without PII (when full research is required):
• US address listed → start with LexisNexis (reliable DOB data)
• Non-US → use MZ Support + iCloud Support Tool
• Click Quick-Launch Research Button → Ekata auto-fills from CMS
• Research template:
  SCREENED ENTITY RESEARCH
  DATE OF BIRTH: | LEXID: | NAMES: | LOCATIONS: | EMAILS: | PHONE NUMBERS:
  Screenshots: LexisNexis.png, MZ.png, Ekata.png
• Note: Screenshots NOT permitted from iCloud Support Tool.
• If Matched Data has US address but no DOB → search Matched Data in LexisNexis too.

Companies:
Use LexisNexis, DNB, or Google to verify company exists.
Evidence found + enough to clear → CLEAR (attach findings)
Full name match to Matched Data → ESCALATE (location variance alone not enough)
No evidence company exists → ESCALATE with: "DECISION: Escalate per GESC guidance | RECOMMENDATION: Further review needed"

STEP 4 — SUMMARY AND DECISION
Notation template per hit:

Matched Entity Hit: [number]
Is the entity type a match? [Match / Mismatch]
Is the name a match? [Full / Partial / False Positive]
Is the date of birth a match? [Match / Mismatch / Unknown]
Is the location a match? [Match / Mismatch / Unknown]
———————
SUMMARY: [Exact variances — names, DOBs, locations with specific values]
———————
DECISION: [Clear / Suspend / Escalate + reason]
RECOMMENDATION: [Required if escalating]

Special case — Matched Data has no DOB but US address: Search Matched Data hit in LexisNexis. If DOB found → use it. Screenshot and note the source.

Note: If the ONLY remaining Matched Data datapoint is a deceased date or sanctioning date → ESCALATE.

STEP 5 — ACTION
1. Click Resolve.
2. Select Clear, Suspend, or Escalate.
⚠️ If ANY hit requires escalation → entire case escalates.

Clear: "Not a Sanction Match" (entity type, name/location variance, YOB without PII)
       "Cleared by DOB" (DOB differs and customer submitted PII)
Suspend: Set PCD to 14 days. Only when no PII and can't clear after due diligence. Do NOT suspend if PII is already attached.
Escalate: "Potential Sanction Match" | "Invalid Customer Submitted Info" | "Unable to Waive Compliance Concerns"

DIRECT ESCALATION SCENARIOS
1. Complete Case Overview.
2. Note: "T2 Escalation Required: [reason]" (add specific context for PII-related reasons)
3. Resolve → Escalate.

Direct Escalation Reasons:
• Partial ID (back of ID or name/DOB obscured)
• Names Do Not Match
• Invalid PII
• Unable to translate ID
• Sanctioned Country (Iran / Cuba / North Korea / Ukrainian sanctioned regions)
• Inclusion Term (company entity with inclusion term in name)

Case Created at the Request of the Business:
Find core case (search TID prefix). Use core case Matched Data.
If core case SE name is completely different → compare current SE to original Matched Data → clear by name/DOB variance if applicable.`},

{id:"edit-cp003", cat:"pending", docType:"edit", title:"SC-03 — Provisional Case Review Guidelines (Tech Edit)",
tags:["pending","pending case tracker","quip","escalated hold","gibberish","full name match","2/3 name match","typinator","2025 CI onboarding"],
body:`Provisional Case Review | Tech Edit | December 2025

WHAT IS A PENDING CASE REVIEW?
Media Platform and Developer Program (non-regulated) cases start in Provisional status because no PII is attached yet. The Provisional Case Tracker (Quip) lists cases from the past 7 days that have not yet moved to Open. Review these when your Open queue is finished, or when instructed.

BEFORE YOU BEGIN
⚠️ Do NOT download the Quip tracker. Edit in-browser only — downloading blocks real-time updates.
Required first note on every case: "2025 CI ONBOARDING PENDING CASE REVIEW" (use Typinator snippet)

STEP 1 — OPEN THE TRACKER
1. Open the Backlog Tracker Quip.
2. Find cases with your name in the "Investigator Name" column.
3. Mark an X in the 3rd column as you complete each case.

STEP 2 — LOAD CASES IN CMS
1. Log in to https://acm-nonregulated.g.vilecorp.com
2. Set status to CMS Classic.
3. Load TIDs using one of these methods:

Method A — Query Builder:
Magnifying glass → Advanced Search → Add Rule → Transaction ID → paste TID → Run Report.

Method B — Basic Search:
Sanctions dropdown → paste TID + comma (comma speeds up results).

Tip: Load multiple TIDs at once by separating with commas in either method.

STEP 3 — REVIEW EACH CASE

Decision tree:

1. Is this a direct escalation scenario? (see criteria below)
   YES → Note the reason + "ESCALATED HOLD". No research needed.
   NO → continue.

2. Is the name complete (at least one first and one last name) AND obviously different from all Matched Data names?
   YES → Complete Case Overview + Summary. Clear by name variance.
   NO → continue.

3. Full research required:
   → Run Tools Path of Progression
   → Reference linked case notes and previously submitted PII ("PII found on TID: ___")
   → Advanced research as needed (MZ, iCloud, LexisNexis, etc.)

DOB clears without customer PII: Use "Not a Sanction Match" — NOT "Cleared by DOB."

NOTATING DBA CASES
Review per Developer Program Review Guidelines. If prior PII doesn't match the screened name → "PII Name Does Not Match" scenario.

RESEARCH TOOLS
Individuals (US): ID Verification Tool, Due Diligence Person Report
Individuals (US + International): MZ Support, iCloud Support Tool, Google, UK Company Officer Search
Companies (US): LexisNexis Due Diligence Business Report
Companies (all): D&B WorldBase / DNB.com, Public Sources for Company Data, Google, Apple App Store (for published app developer info)

To save web evidence: Safari → File → Export as PDF → Attach in CMS.
Matched Data with US address + no DOB → search LexisNexis for the missing date.
End of day: Delete all downloaded files. Empty Trash.

DIRECT ESCALATION & ESCALATED HOLD CRITERIA
Mark these cases as: note reason → "ESCALATED HOLD". No further research.

Reason / Description:
No full name given / Partial name or nickname submitted
Inclusion Term / Matched Data contains Apple compliance inclusion list words
Gibberish/Scripted Account / New iCloud + wallet links "mingzi xing" or "ZhuJu Mao" (Turkey/China/USA ties) OR new Pakistan IC + China IP + gmx/hotmail/outlook domain + gibberish handle
Embargoed Country (reject) / Most recent actioned case for this company was rejected for embargoed country — OR prior PII is from sanctioned country (exception: if a clear FOLLOWED the reject → review normally)
Full Name Match / SE name is a full match to any MD name (primary, AKA, spelling variations)
2/3 Name + Country Match / SE full name matches 2 of 3 MD name components (individuals only) — see note below
Insufficient info / Full review completed + not enough location/DOB/name to decide
Ownership reject / Most recent case for this company was rejected for ownership
Location only / Location is the ONLY variance between SE and MD hit

For 2/3 Name + Country Match: Check MZ account age.
MZ account aged (>30 days) + different country from Matched Data → can CLEAR instead.
New account (<30 days) or can't verify location → ESCALATED HOLD.

NOT a 2/3 match (regular partial match → can CLEAR): John Allen Smith vs John Jacob Smith.

25+ Matched Data Hits in pending cases: Skip entirely. No notes required.

TYPINATOR SNIPPETS

Case Overview snippet expands to:
2025 CI ONBOARDING PENDING CASE REVIEW
SCREENED ENTITY DATA
SCREENING DATE: [date]
CLIENT & EVENT: [client, event]
ENTITY TYPE: [Individual/Company/Vendor/Developer]
SCREENED ENTITY NAME: [full name]
SCREENED ENTITY LOCATION: [city, region, country]
[IP LOCATION: [location] — if applicable]

Direct Escalation snippet expands to:
2025 CI ONBOARDING PENDING CASE REVIEW
[Selected reason]
ESCALATED HOLD`},

{id:"edit-cr005", cat:"ref", docType:"edit", title:"RC-05 — Compliance Terms and Notations (Tech Edit)",
tags:["terms","notation","templates","case overview template","research template","summary template"],
body:`Compliance Terms and Notations | Tech Edit | May 2026

See the Dictionary tab for all term definitions.

NOTATION PRINCIPLES
• Document only what is NEW — information not already in CMS.
• Screenshots must accompany any new finding. Reference screenshot names in your notes.
• Summary notes must be self-contained — a reviewer should understand your decision without opening attachments.
• All summary guiding questions must align with your open-ended explanation.
• Translate all non-English content into English before documenting.
• For "Invalid or Expired PII" escalation reason: always add specifics — e.g., "ID too blurry to read" or "Passport expired 2024."
• Screenshot naming convention: name the file after the tool — LexisNexis.png, MZ.png, Ekata.png, ACM.png.

NOTATION TEMPLATES

1. CASE OVERVIEW
Use for every case before beginning research.

Screening Date:
Client & Event:
Entity Type:
Screened Entity Name:       [translate if non-English; format: Original / English Translation]
Screened Entity Location:   [city, state, country; translate if non-English]
IP Location:                [Developer Program cases only — from Ekata]
Screenshot:                 [EKATA.PNG — Developer Program only]
PII attached:               [PII is attached and has been reviewed]

2. SCREENED ENTITY RESEARCH
Use when documenting research findings. Write "No new data" if nothing new found in a tool.

SCREENED ENTITY RESEARCH
Date of Birth:
LexID:
NAMES:
LOCATION:
EMAILS:
PHONE NUMBERS:
Screenshots: [e.g., LexisNexis.png, MZ.png, Ekata.png]

3. SUMMARY AND DECISION
Complete one block per Matched Data Hit.

Matched Entity Hit:              [1, 2, 3…]
Is the entity type a match?      [Match / Mismatch]
Is the name a match?             [Full Match / Partial Match / False Positive]
Is the date of birth a match?    [Match / Mismatch / Unknown]
Is the location a match?         [Match / Mismatch / Unknown]
———————
SUMMARY:
[Write the specific variances. Identify exact values:
 "Screened Entity: John Smith. Matched Data: John Jacob Smith."
 "DOBs do not match. Screened Entity: 1990. Matched Data: 1965."
 "Locations do not match. Screened Entity: USA. Matched Data: RUS."]
———————
DECISION: [Clear / Suspend / Escalate + specific reason phrase]
RECOMMENDATION: [Required if escalating — what Tier 2 should do next]

4. DIRECT ESCALATION NOTE
Use instead of a full summary when a direct escalation criterion is met.

T2 Escalation Required: [reason]
[Add specifics if reason is "Invalid or Expired PII"]

FULL NOTATION EXMedia PlatformLES

Individual with multiple hits:
Screening Date: 2026-01-13
Client & Event: amp-itc-users, batch_accounts
Entity Type: Individual
Screened Entity Name: Johnny Appleseed
Screened Entity Location: Cupertino, CA, USA
IP Location: San Francisco, CA, USA | Screenshot: EKATA.PNG
PII attached: PII is attached and has been reviewed

SCREENED ENTITY RESEARCH
Date of Birth: 1975-12-18 | LexID: 0000-1111-2222
NAMES: Johnny Appleseed / John Appleseed / Jonathan Appleseed
LOCATION: Austin TX USA / Raleigh NC USA / Elk Grove CA USA
EMAILS: No new data | PHONE NUMBERS: No new data
Screenshots: LexisNexis.png, MZ.png, ACM.png

Hit 1:
Entity type: Match | Name: Partial Match | DOB: Mismatch | Location: Mismatch
SUMMARY: Partial name match. SE: Johnny Appleseed. MD: Johnson Appleseed.
DOBs differ — SE: 1975, MD: 1946. Locations differ — SE: USA, MD: SWE.
DECISION: Clear by name, DOB, location variance

Hit 4 (escalation example):
Entity type: Match | Name: Full Match | DOB: Unknown | Location: Unknown
SUMMARY: Full name match. SE: Johnny Appleseed. MD: Johnny Appleseed.
No DOB available for Matched Data. Both link to USA — insufficient to establish location variance.
DECISION: Escalate due to full name match with no DOB or location variance.
RECOMMENDATION: Locate Matched Data Hit's full DOB to clear.

Business entity:
Screening Date: 2026-01-13 | Client & Event: amp-itc-atb, rt_agreement
Entity Type: Company | Screened Entity: American Broadcasting Company ; ABC | Location: Burbank, CA, USA
PII attached: PII is attached and has been reviewed

Hit 1:
Entity type: Match | Name: Partial Match | Date of registration: Unknown | Location: Mismatch
SUMMARY: Partial name match. SE: American Broadcasting Company ; ABC. MD: Arab Banking Corporation ; ABC.
Locations differ — SE: USA, MD: Bahrain.
DECISION: Clear based on name and location variance.`},

{id:"edit-cr003", cat:"ref", docType:"edit", title:"RC-03 — Compliance Review Model (Tech Edit)",
tags:["review model","4 steps","case overview","research","summary","action","clear","escalate","suspend","reject"],
body:`Compliance Review Model | Tech Edit | April 2026

OVERVIEW
Every compliance case follows four steps in order. The model ensures investigations are thorough, consistent, and defensible in the event of an audit.

THE FOUR STEPS
1. Case Overview → 2. Research & Document → 3. Summary & Decision → 4. Action

STEP 1 — CASE OVERVIEW
Ask: What type of case is this? Why is it under review?
Capture: Screening Date, Client & Event, Entity Type, Screened Entity Name/Location, PII status.
Developer Program additionally: IP Location + Ekata screenshot.
Translate any non-English names or locations.

STEP 2 — RESEARCH & DOCUMENT

Without PII — take these shortcuts first (stop when you can decide):
• Entity type mismatch → CLEAR. No further research needed.
• DOB found in LexisNexis differs from Matched Data DOB → CLEAR. Document DOB + LexID only.
• Digital ID Program only: Year of Birth in CMS Screened Entity panel differs from Matched Data YOB → CLEAR. No external research needed.
• If no shortcut applies → run the full Tools Path of Progression:
  LexisNexis → MZ Support → ASO ACM → Ekata → Secondary tools

With PII — validate, then document:
• Is the PII valid? See Match Determination Guidelines & Acceptable PII Criteria.
• Individuals: fill CMS fields (City of Birth, Country of Birth, DOB, ID/Passport numbers).
• Companies: create manual note with date of registration and/or company ID number.

Direct escalation triggers (no research needed — just overview + note + action):
• PII name ≠ Screened Entity name
• batch bank record event
• Incomplete ID (no visible name or DOB)
• Sanctioned country/region (Cuba, Iran, North Korea, Ukrainian sanctioned regions)
• Invalid PII (non-ID doc, doctored, illegible)
• Apple Corporate Compliance Inclusion Term
• Unable to translate ID

Evaluating each Matched Data Hit:
• Different entity type? → Clear.
• Same entity type: compare names (primary + all AKAs), DOBs, locations, registration dates.
• Is it a false positive? Partial match only? Weak alias? → Clear.
• Still can't clear? → Escalate to Tier 2 with a specific recommendation.

Document as you go. Save screenshots. Delete any files from your Mac after the case.

STEP 3 — SUMMARY & DECISION
Write one Summary block per Matched Data Hit using the approved template.
The open-ended notes must match the guiding question answers.
Decision must include a reason phrase.
If escalating: include a recommendation for next steps.

STEP 4 — ACTION

Clear:
"Cleared by DOB" — DOB mismatch used in the decision.
"Not a Sanction Match" — all other clear reasons.

Escalate when any of these apply:
• Direct escalation criterion met
• Insufficient data to decide
• Needs Tier 2/3 tools (25+ hits, ownership info, etc.)
• Potential true match needs Tier 3 review

Escalate reason codes:
"Potential Sanction Match" — full name + full location match.
"Invalid Customer Submitted Info" — invalid PII.
"Unable to Waive Compliance Concerns" — all other reasons.

Suspend — Digital ID Program only (PCD = 14 days):
• Reviewed without PII AND can't clear after due diligence.
• Do NOT suspend if PII is already attached — escalate instead.

Suspend — Media Platform batch registrant (PCD = 30 days):
• DUNS returns a different company name
• SE name belongs to an individual, not a company
• Full name match but country variance

Reject — Tier 2 only, Digital ID Program only:
"Invalid Customer Submitted Info" or "Sanctioned Country/Region."
All other reject codes: Tier 3 only.

⚠️ If a case is actioned in error: notify your team manager immediately with TID, date, what happened, and intended action.`},

{id:"edit-cp007", cat:"ref", docType:"edit", title:"SC-07 — Match Determination & PII Criteria (Tech Edit)",
tags:["match determination","entity type","full match","partial match","close name match","china","acceptable pii","individuals","companies"],
body:`Match Determination & Acceptable PII Criteria | Tech Edit | April 2026

MATCH TYPES — QUICK REFERENCE

ENTITY TYPE
Match: Both are individuals OR both are companies.
Mismatch: Different types (e.g., individual vs. company/vessel). → Always CLEAR.

NAME
Full Match: Entire name matches (Primary Name or AKA).
Partial Match: Part of the name matches, or matches an AKA. Needs further investigation.
False Positive: No names match at all. → CLEAR.
Note: Always check Primary Name AND all AKAs. Review Romanized AND native script versions.

DATE OF BIRTH
Match: Day, month, AND year all match.
Mismatch: Any variance in day, month, or year. → Can clear (with PII: "Cleared by DOB").
Unknown: Insufficient information for one or both parties.

LOCATION
Match: Full address match (street, city, state, country).
Mismatch: Any variance (country, state, city, province, etc.). → May clear depending on name match.
Unknown: Insufficient location information.

SPECIAL CASES

2/3 Name Match (Digital ID Program without PII only):
Definition: Full name matches 2 of 3 name components in the Matched Data name.
Classified as: Partial match.
Examples (2/3 match): "John Smith" vs "John Jacob Smith" / "Aleksandr Muskov" vs "Aleksandr Muskov Sergeevich"
NOT a 2/3 match (different middle name = regular partial → can clear): "John Allen Smith" vs "John Jacob Smith"
For 2/3 match scenarios: See Decisioning Matrix.

Close Name Match (Companies only):
Definition: Brand name is the same, legal identifier differs (LLC vs. GmbH vs. OOO).
Classified as: Partial match.
Examples: Biotech vs. Biotech LLC / Cheer Flyer Company Unlimited vs. Cheer Flyer Company
Translate legal identifiers: LLC (US) = GmbH (Germany) = OOO (Russia).

China Company Exception:
Chinese company names follow: Registered Area + Brand Name + Industry Type + Organizational Form.
Rule: If brand names match → ESCALATE, even if the registered areas (cities) differ.
Example: "Beijing Huawei" vs "Shanghai Huawei" → same brand name → Escalate.
Why: Only the Chinese name is legally recognized; English names are for marketing only.

DECISION GUIDELINES

For Individuals:
Factor / Clear / Escalate
Entity type mismatch / ✅ Clear (Not a Sanction Match) / —
Name: not a full match / ✅ Clear (Not a Sanction Match) / —
Name: full match / Investigate DOB + Location / See below
DOB mismatch / ✅ Clear (Cleared by DOB — if PII used) / —
Location mismatch + name not full match / ✅ Clear (Not a Sanction Match) / —
Full name match + unknown DOB + unknown location / — / 🔺 Escalate (Unable to Waive)
Full address match (all 4 components) / — / 🔺 Escalate (Potential Sanction Match)

For Companies:
Factor / Clear / Escalate
Entity type mismatch / ✅ Clear / —
Not a close or full name match / ✅ Clear / —
Close match + different countries / ✅ Clear / —
Close match + same country or unknown / — / 🔺 Escalate (Unable to Waive)
Full name match / — / 🔺 Escalate (Unable to Waive)
Full address match / — / 🔺 Escalate (Potential Sanction Match)

⚠️ Before clearing on location: verify the full street address is NOT a complete match. If it is → escalate.

ACCEPTABLE PII — INDIVIDUALS
✅ Accept when:
• Name on ID matches Screened Entity name (at least one first + one last name)
• ID not expired more than 1 year
• DOB is clearly visible
• Document is unaltered and legible

❌ Escalate when:
• Name on ID ≠ Screened Entity name
• ID expired more than 1 year
• No DOB visible
• Partial ID (back only, or name/DOB obscured)
• Document appears modified, doctored, or illegible

Special name rules:
• No surname on PII is OK if Screened Entity also has no surname (regional convention)
• Names on single line with no separator: accept any 2+ name combination
• Comma in name field = treat as line break

ID Number:
• Enter if visible
• If unreadable but name + DOB are clear → PII still usable (omit ID number from CMS)

ACCEPTABLE PII — COMPANIES
✅ Accept when:
• Official document with issuing authority shown
• Name matches Screened Entity name
• Expired PII is OK regardless of how long expired (unlike individuals)
• EIN letters from the IRS and other government docs are acceptable

❌ Escalate when:
• Name on doc ≠ Screened Entity name
• Document appears modified or is illegible

❌ Not accepted:
• Bank statements
• Lists of requested corporate documents (not the documents themselves)

DOR/Company number: Note in CMS if available. If unavailable, PII can still be used.`},

{id:"edit-cr004", cat:"ref", docType:"edit", title:"RC-04 — Compliance Tools (Tech Edit)",
tags:["lexisnexis","mz support","aso acm","ekata","typinator","icloud support","dun bradstreet","path of progression"],
body:`Compliance Tools | Tech Edit | March 2026

WHEN TO USE THE PATH OF PROGRESSION
Use the Tools Path of Progression ONLY on cases with no customer-submitted PII or company documentation. When PII is present, validate it per the Match Determination Guidelines instead.

PATH OF PROGRESSION — ORDER
1. LexisNexis
2. MZ Support
3. ASO ACM
4. Ekata
5. Secondary tools (iCloud Support, D&B, Google)

Stop early if you find a decisive datapoint:
• Entity type mismatch → CLEAR (no tools needed)
• DOB found in LexisNexis differs from Matched Data → CLEAR, stop research
• Digital ID Program: YOB in CMS panel differs from Matched Data YOB → CLEAR, no tools needed

TOOL QUICK REFERENCE

LexisNexis
URL: https://riskmanagement.lexisnexis.com/
What it has: Public records, DOB (US only), addresses, company info
Login: Required + multi-factor authentication
Tier 1 use: Find a Person → document DOB, LexID, names, new locations → screenshot
Tier 2 also uses: Due Diligence Person Report (US), Due Diligence Business Report (US), D&B WorldBase (global)
Privacy: Screenshot ONLY info relevant to the individual being researched.
Tip: If Matched Data has a US address but no DOB → search the Matched Data hit itself in LexisNexis.

MZ Support
URL: https://mzsupport.vilecorp.com/WebObjects/MZSupport.woa
What it has: iTunes/Media Platform purchases, devices, storefronts, payment methods, billing info
Search by: DSID, email, or phone
Steps: Search → click "Display Full Address" → check Family Sharing → click Billing Infos link if present → document new names, locations, emails, phones → screenshot
Account age note (Digital ID Program): Accounts >30 days old = reliable location data.

ASO ACM
URL: https://acm-nonregulated.g.vilecorp.com/ui-service/home/lobs/AOS
What it has: Order history, payment, billing, shipping
How to access: CMS dashboard → CMS Classic status → ASO line of business → magnifying glass → Advanced Search → Query Builder: add DSID/email/phone rule → document new info → screenshot

Ekata
URL: https://app.ekata.com/search
What it has: Public records, IP address, digital identity
How to access: Click Quick-Launch Research Button next to Screened Entity name in CMS → auto-fills from case data → document DOB, names, locations, phones → screenshot
Developer Program: Always capture IP Location from Ekata and include in Case Overview.

Typinator
URL: https://istweb.vilecorp.com/scv/en/typinator
Use for: Keyboard shortcuts that expand to approved case note templates.
Also available as: Built-in CMS User Note feature.

iCloud Support Tool
URL: https://support.icloud.vilecorp.com/support/client/index.html
⚠️ NO SCREENSHOTS PERMITTED (security restriction). Use MZ Support for screenshots instead.
What it has: Apple Account address, phone, alternate emails
Search by: Email, DSID, name, or phone
Note on search scope: Email/DSID searches return all relevant results. Name/phone searches may include unrelated accounts.
Tabs: Identity (address/phone/Apple ID), Security (2FA devices + enrollment device location), General (account creation date for age determination)

D&B Business Directory
URL: https://www.dnb.com/business-directory.html
Use for: T1 company research (batch registrant, Provisional Cases)
Search by: DUNS number or company name
Note: If DUNS returns a different company name → Suspend (PCD 30 days), attach findings.

ATTACHING WEB EVIDENCE TO CMS
Safari → File → Export as PDF → Attach File in CMS → Upload → Apply.
LexisNexis: Use the built-in PDF download button. If multiple records shown → check only relevant records before downloading.
End of day: Delete all downloaded files. Empty Trash.`},

{id:"edit-cr002", cat:"ref", docType:"edit", title:"RC-02 — CMS User Guide (Tech Edit)",
tags:["hcm","hermes","dashboard","case header","sla","binocs","attach file","logging notes","availability status"],
body:`CMS User Guide | Tech Edit | April 2025

ACCESSING CMS
Non-Regulated (Media Platform, Developer Program, Digital ID Program): https://acm-nonregulated.g.vilecorp.com
Regulated (API): https://acm-regulated.g.vilecorp.com
Login: AppleConnect credentials + Two-Step verification. Select Sanctions from Lines of Business.
Display tip: Zoom out in Safari (Command –) until all key widgets are visible on one screen.

AVAILABILITY STATUS
Status / Behavior
Ready / 10-second countdown → auto-assigns next case. Click "Next Case" to skip timer.
CMS Classic / No timer. Cases assigned only when you click "Next Case."
Not Ready / Default at login. No cases assigned. Dashboard widgets inactive.

SLA DEADLINES
All clients (Media Platform, Developer Program, Digital ID Program, API): 48 hours.
CMS auto-assigns the highest-priority case based on your tier, skilling, and SLA deadlines.

CASE HEADER — FIELD REFERENCE
Field / Description
SLA / Target completion deadline (displayed at top)
Screen Date / Date & time (PT) the compliance screening ran
Transaction ID (TID) / Unique case ID assigned by CMS
Client / App/program that originated the case
Event / Action that created the case (enrollment, agreement, etc.)
Risk Score / 0–100 numerical score from HDS screening rules
Risk Category / Low (0.0 or 72–79.9), Medium (80–89.9), High (90–100)
Case Status / Open / In Review / Clear / Provisional / Rejected
PCD / Provisional Cancel Date — when a Suspended case auto-cancels
Assigned To / Investigator currently assigned

CASE DETAILS — WHAT YOU'LL SEE
Always present:
• Screened Entity — the customer/developer whose name triggered the potential match.
• Matched Data — all potential sanctions list matches (Matched Data Hits).
• Notes — existing notes + option to add new ones + file attachment.

Sometimes present:
• Related Cases (Binocs) — icon appears next to fields with matches in previous cases. Number = how many cases; color = previous actions taken. Click to open a drilldown of related case history.
• Notification ribbon — yellow bar at top = order update. Click to refresh.

WORKING A CASE

Before you start: Review previous notes (CMS defaults to showing them). Use the "View Notes Only" dropdown to toggle between notes-only, or combined (notes + files + action history).

Viewing attachments: .jpg, .jpeg, .pdf, .html, and .txt files open in a new tab within CMS (not downloaded). Some PII types may require download — delete those files from your Mac after reviewing.

Adding notes:
1. Type in the Add a Note field.
2. Click Apply (notes are CMS-only — not visible externally).
3. Only the most recent note can be edited. To correct an earlier note → save a new one and flag it as a correction.

Attaching files:
1. Save the file with the correct name.
2. In Add a Note, type notes about what you're attaching.
3. Click Attach File → Clipboard or Drag and Drop.
4. Click Apply. Refresh to confirm.
5. Delete the file from your Mac.

RESOLVE
Click Resolve to action a case. A popup shows only the actions available for your tier.

SEARCH
Advanced Search: Magnifying glass → Advanced Search → Add Rule → select field → enter value → Run Report.
Basic Search: From dashboard, choose Sanctions from LOB dropdown → type name/address/billing info.
Multiple TIDs: Separate with commas in either search method.`},

{id:"edit-cr0007", cat:"ref", docType:"edit", title:"RC-007 — Decisioning Matrix (Tech Edit)",
tags:["decisioning matrix","with pii","idms no pii","companies","batch free developer","clear","escalate","suspend","pcd"],
body:`Decisioning Matrix | Tech Edit | April 2026

When in doubt → ESCALATE.
Entity type mismatch → CLEAR in all matrices (a company cannot be the same sanctioned party as an individual).

MATRIX 1 — WITH PII (Individuals)

Name | DOB | Location | Action | Reason Code
False Positive | Any | Any | ✅ CLEAR | Not a Sanction Match
Partial | Mismatch | Any | ✅ CLEAR | Cleared by DOB
Partial | Match/Unknown | Mismatch | ✅ CLEAR | Not a Sanction Match
Partial | Match/Unknown | Match/Unknown | 🔺 ESCALATE | Unable to Waive Compliance Concerns
Full | Mismatch | Any | ✅ CLEAR | Cleared by DOB
Full | Match/Unknown | Mismatch | ✅ CLEAR | Not a Sanction Match
Full | Match/Unknown | Match/Unknown | 🔺 ESCALATE | Potential Sanction Match
Any | Any | Full address match | 🔺 ESCALATE | Potential Sanction Match

"Full address match" = street number, street name, city, state, AND country all match.

MATRIX 2 — IDMS WITHOUT PII

Name | YOB | Country | MZ Account Age | Action
Clearly different / False Positive | Any | Any | Any | ✅ CLEAR
Regular partial (not 2/3) | Any | Any | Any | ✅ CLEAR
2/3 Match | Mismatch | Any | Any | ✅ CLEAR
2/3 Match | Match/Unknown | Different | Aged (>30 days) | ✅ CLEAR
2/3 Match | Match/Unknown | Different | New (<30 days) | ⏸ SUSPEND (14 days)
2/3 Match | Match/Unknown | Same | Any | ⏸ SUSPEND (14 days)
Full Match | Any | Any | Any | ⏸ SUSPEND (14 days)

2/3 Name Match = SE's full name matches 2 of 3 components of the Matched Data name.
"Aged" = MZ account created more than 30 days ago (reliable location signal).

MATRIX 3 — COMPANIES

Name | Country | Action | Reason Code
Not close or full match | Any | ✅ CLEAR | Not a Sanction Match
Close Match | Different | ✅ CLEAR | Not a Sanction Match
Close Match | Same or Unknown | 🔺 ESCALATE | Unable to Waive Compliance Concerns
Full Match | Any | 🔺 ESCALATE | Unable to Waive Compliance Concerns
Any | Full address match | 🔺 ESCALATE | Potential Sanction Match

China exception: Same brand name in different Chinese cities → ESCALATE (likely same company).

MATRIX 4 — BATCH FREE DEVELOPER (Media Platform)

Screened Entity | Docs Uploaded? | Name | Country | Action
Individual (name = person) | N/A | Any | Any | ⏸ SUSPEND (30 days)
Company | No | Not a match | Any | ✅ CLEAR
Company | No | Full match | Different | ⏸ SUSPEND (30 days)
Company | No | Full match | Same/Unknown | 🔺 ESCALATE
Company | No | Close match | Different | ✅ CLEAR
Company | No | Close match | Same | ⏸ SUSPEND (30 days)
Company | Yes | Can clear | Any | ✅ CLEAR
Company | Yes | Cannot clear | Any | 🔺 ESCALATE
Any | Any | Full address match | Any | 🔺 ESCALATE

Key rules:
• Do NOT suspend when docs are already attached → escalate instead.
• Previously suspended + PCD expired + no new docs → do NOT suspend again → ESCALATE with note: "T2 Escalation Required: Previously suspended - no new information"
• DUNS search returns different company name → SUSPEND (PCD 30 days), attach findings.`},

];
