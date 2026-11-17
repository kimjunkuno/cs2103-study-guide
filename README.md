# CS2103/T study guide

[Open study guide](https://kimjunkuno.github.io/cs2103-study-guide/) · [Practise flashcards](https://kimjunkuno.github.io/cs2103-study-guide/flashcards.html) · [Practise questions](https://kimjunkuno.github.io/cs2103-study-guide/questions.html)

An independent study aid for NUS CS2103/T AY 2026/27 Semester 1. It is not an official NUS website.

Key theory keeps the main content’s bold or highlighted fragments visible. A small chevron beside a point reveals nearby source context; these disclosures start collapsed and support touch, Enter and Space. Points without additional context remain plain bold text. Switching reading modes closes context disclosures. The source wording is unchanged apart from whitespace normalization. Examples, dimmed material, supplementary panels and diagrams remain in Full text. Topics without core emphasis point to Full text.

The guide contains 321 topic cards from the weekly Topics pages, with the course's wording, search, week/section filters, examples, diagrams, recall and printing. Weeks 12–13 have no assigned topics.

## Run locally

No installation or build is required:

```sh
python3 -m http.server 8000 --directory site
```

Open `http://localhost:8000/`. Run validation with:

```sh
python3 -m unittest discover -s tests -v
for f in site/*.js; do node --check "$f"; done
node --test tests/*.test.cjs
```

After editing `QUESTION_BANK.md`, regenerate the Questions data with `python3 tools/build_questions.py`. A test fails if `site/questions-data.js` is out of date.

## Publishing

GitHub Pages deploys only `site/` after checks pass on `main`. In repository Settings → Pages, select GitHub Actions. Enable HTTPS. Relative paths support a project URL under the repository name. Failed releases can be rolled back by reverting the relevant commit and rerunning deployment.

## Content and attribution

The frozen snapshot was retrieved on 11 November 2026 from the [course Topics pages](https://nus-cs2103-ay2627-s1.github.io/website/schedule/week1/topics.html). Source links and attribution appear in each topic and the guide notes. See `CONTENT_SOURCES.json` and `THIRD_PARTY_NOTICES.md`.

The underlying textbook declares an MIT licence. Third-party works retain their own rights and attributions; this project does not claim ownership or relicence them. Formatting is adapted. External lessons, interactive quizzes and tooltip explanations may still require the original site. Two unavailable illustrative photos remain source links.

This is a snapshot, not an automatic content mirror. No remote course scripts are executed in this repository or deployment workflow. Content updates must be reviewed against the original site and committed deliberately.

## Privacy and security

The application has no accounts, backend, API keys, runtime AI, analytics or outbound API calls. Only public static assets and source links are included. Flashcard, diagram and question revisit lists stay in browser local storage; exports are downloaded locally. Do not place sensitive information in backups. GitHub Pages logs visitor IP addresses for hosting security; see [GitHub's documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection).

A restrictive meta Content Security Policy and safe rendering limit executable content. Header-only protections such as CSP `frame-ancestors` are not claimed. Browser storage is not an authentication or confidentiality boundary. Clearing storage or switching browsers can lose progress; export backups first. The original offline guide and hosted site use separate storage.

To report a security issue, provide a minimal reproduction without secrets or personal data. Never post credentials in issues. Public repository files and commit metadata are public.

## Implementation stages

See `PLAN.txt`. Stage 1 publishes the guide. Stage 2 adds random source-backed flashcards with reveal, filters and a local revisit list; no scheduling or automatic grading. The Questions tab adds automatically marked MCQ/MRQ practice from a fixed bank.

## Flashcards

Open Practise flashcards for random questions with reveal, week/topic filters, optional random repeats and a saved revisit list. The condensed deck contains 417 short questions, reduced from 721. It uses only bold or highlighted statements from the main topic content, excluding dimmed text, examples and nested supplementary panels. Source statements are limited to 35 words without truncating longer statements; the median prompt is 12 words. Each cloze question hides a term or phrase; its answer restores the emphasized source wording, normalising whitespace only. Source evidence stays collapsed after reveal. CORE_STATEMENTS.json records the reviewed emphasis inventory. No live generation, scraping or AI service is used. FLASHCARD_COVERAGE.json records per-topic question counts and exclusions. This is a practice pool, not a guarantee of exam coverage or exhaustive theory coverage.

Click the card to reveal, then choose Got it right or Got it wrong. Skip & save and wrong answers enter the browser-local revisit list; correct removes the flag. Revisit only filters to saved questions. Uncheck random repeats for one appearance per question per session. Repeat this card explicitly retries the current card. Changing filters restarts the session but retains saved flags. Export/import moves the revisit list between browsers. The Guide has no confidence or progress tracking.

Run flashcard tests with `node --test tests/flashcards.test.cjs`. Both test suites run before deployment.

## Textbook navigation

Browse by Textbook to select category, chapter and topic in the online book's order, or by Week to show week/topic controls. Revisited topics share a selector entry with their original week IDs. IDs and saved progress are unchanged. The guide also provides a collapsible chapter sidebar on larger screens. Existing Git course links are grouped under Supplementary; no external lesson content is imported.

## Spot the mistake

`diagrams.html` provides 36 cards built from the course website’s own diagrams across the six required diagram types. Original image pixels are preserved. A viewport focuses individual panels in some worksheets; full multi-panel figures name the diagram to inspect. DIAGRAM_SOURCES.json records source URLs, hashes and dimensions. PNG copies contain no embedded metadata. The course’s activity examples retain their rounded action rectangles, control nodes and full flows.

Filter by diagram type, decide whether the notation fits the stated view, then tap to reveal. Correct diagram answers are green and incorrect ones red; self-assessment buttons use green for Got it right and red for Got it wrong. Source links, the original figure and reference examples are available after reveal. A reference illustrates the rule and is not necessarily a corrected copy of the same scenario.

Got it wrong and Skip & save enter a browser-local revisit list; Got it right removes the flag. Next leaves saved status unchanged. Revealing alone does not grade an answer. With repeats off, each card appears once per selection. More provides Repeat card, Restart and backups. This replacement course-image deck uses its own storage key; the previous drawn-diagram data is left untouched rather than applied to different questions.

Diagrams use passive local image assets inside SVG viewports. No generated diagram geometry or external rendering service remains. Enlarge supports detailed inspection, and card reveal supports touch and keyboard. Original course images can have limited resolution; no missing detail is invented.

## Compact phone and tablet layout

All three pages share compact headings and navigation. Textbook controls reveal chapter and topic choices progressively; Week mode shows the week selector. Compatible selected topics survive switching browse modes. The chapter sidebar is used on desktop, while phones and tablets use the main dropdowns.

Flashcards show Skip before reveal and Correct/Wrong/Next afterwards. Repeat, restart and backup actions are under More. Source details and help remain available but collapsed. Diagrams have internal scrolling, a single card reveal and an enlarged dialog; browser zoom remains enabled. Small single-box diagrams and empty vertical canvas space are fitted without changing model geometry.

Browser viewport checks cover 320px phones, 390px phones, 768px tablets, 1024px tablets and landscape. These checks use the local browser, not physical iOS/Android devices. Feature branches do not deploy; only validated changes on main deploy to Pages.

Guide confidence selectors, progress summaries, filters and backups have been removed. The Guide no longer reads or writes progress storage. Existing browser data is left untouched; saved/skipped practice cards remain available in their separate revisit lists.

The Guide keeps topic search visible while scrolling. A floating back-to-top button appears after scrolling down and returns to the heading immediately. Search keeps keyboard focus while filtered results come into view. Sticky offsets follow the phone/tablet header height, and these controls are omitted from print output.

## Questions

Open Practise questions for one multiple-choice question at a time, marked automatically. The bank has 1422 questions: 1256 MCQ (four options, exactly one correct, answered with radio buttons) and 166 MRQ (three to five options, two or more correct, answered with checkboxes). 84 questions apply a topic to the AddressBook-Level3 (AB3) code base at commit `56d1ffb` and link to the files they rely on. Every topic group with text in the 11 November 2026 snapshot has questions; 11 groups that only link to external lessons (Git, GitHub, some IDE topics and Java streams) have none, and Weeks 12–13 have no topics.

**The questions are unreviewed drafts.** They were written for this guide from the course Topics pages and checked by script for structure, source topics and AB3 paths, but answers and wording have not yet been read by a person. They are study questions, not official exam questions.

The first 540 questions were written from the 11 November 2026 Topics snapshot. A further 882 were added on 17 November 2026 after a section-by-section comparison of the online textbook (`se-book-adapted`) with the bank. They fill topics that had no questions (UML notation, OOP associations, code comments, defensive 1-to-1 associations and others), add depth to long topics (Debugging, Secure Software Engineering, Architecture, Test Case Design) and include questions on the textbook's nested UML panels. Each cites the Guide topic it rests on. Textbook sections that are not part of any week's topics (mostly introductory Java) have no questions. These additions were checked by script and spot-checked against the source, but have not been fully reviewed either.

- `QUESTION_BANK.md` is the source of truth. `tools/build_questions.py` parses and validates it (option counts, answer keys against the ✅ marks, source topics, AB3 paths in `AB3_FILES.txt`, explanations that never name an option letter, the summary counts) and writes `site/questions-data.js`. It refuses to write if any question is malformed. The site needs no build to run.
- Filters: the shared Textbook/Week selector, Type (All, MCQ, MRQ), Scope (All, Theory only, AB3 only), Allow random repeats and Revisit only.
- Options are shuffled each time a question is shown. MCQ and MRQ are both all-or-nothing; feedback marks each option as correct, missed or a wrong choice with text as well as colour, then shows the explanation and collapsed links to the Guide topics, the original course pages and any AB3 files.
- A wrong answer saves the question for revisiting, Skip saves it as skipped (never downgrading incorrect) and a correct answer clears it. Try again reshuffles the same question. The session score resets on Restart or any filter change and is not stored.
- Progress is stored under `cs2103-questions-v1`, separate from flashcards and diagrams, with validated export/import (2 MB cap, unknown IDs ignored) and sync between open tabs.
- Bank text is rendered with `textContent`; backticks become `<code>` and fenced blocks become `<pre>` through DOM nodes, never `innerHTML`.
