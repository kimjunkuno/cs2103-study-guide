# CS2103/T study guide

[Open study guide](https://kimjunkuno.github.io/cs2103-study-guide/) · [Practise flashcards](https://kimjunkuno.github.io/cs2103-study-guide/flashcards.html)

An independent study aid for NUS CS2103/T AY 2026/27 Semester 1. It is not an official NUS website.

The guide contains 321 topic cards from the weekly Topics pages, with the course's wording, search, week/section filters, examples, diagrams, recall and printing. Weeks 12–13 have no assigned topics.

## Run locally

No installation or build is required:

```sh
python3 -m http.server 8000 --directory site
```

Open `http://localhost:8000/`. Run validation with:

```sh
python3 -m unittest discover -s tests -v
node --check site/app.js
```

## Publishing

GitHub Pages deploys only `site/` after checks pass on `main`. In repository Settings → Pages, select GitHub Actions. Enable HTTPS. Relative paths support a project URL under the repository name. Failed releases can be rolled back by reverting the relevant commit and rerunning deployment.

## Content and attribution

The frozen snapshot was retrieved on 11 November 2026 from the [course Topics pages](https://nus-cs2103-ay2627-s1.github.io/website/schedule/week1/topics.html). Source links and attribution appear in each topic and the guide notes. See `CONTENT_SOURCES.json` and `THIRD_PARTY_NOTICES.md`.

The underlying textbook declares an MIT licence. Third-party works retain their own rights and attributions; this project does not claim ownership or relicence them. Formatting is adapted. External lessons, interactive quizzes and tooltip explanations may still require the original site. Two unavailable illustrative photos remain source links.

This is a snapshot, not an automatic content mirror. No remote course scripts are executed in this repository or deployment workflow. Content updates must be reviewed against the original site and committed deliberately.

## Privacy and security

The application has no accounts, backend, API keys, runtime AI, analytics or outbound API calls. Only public static assets and source links are included. Progress stays in browser local storage; exports are downloaded locally. Do not place sensitive information in backups. GitHub Pages logs visitor IP addresses for hosting security; see [GitHub's documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection).

A restrictive meta Content Security Policy and safe rendering limit executable content. Header-only protections such as CSP `frame-ancestors` are not claimed. Browser storage is not an authentication or confidentiality boundary. Clearing storage or switching browsers can lose progress; export backups first. The original offline guide and hosted site use separate storage.

To report a security issue, provide a minimal reproduction without secrets or personal data. Never post credentials in issues. Public repository files and commit metadata are public.

## Implementation stages

See `PLAN.txt`. Stage 1 publishes the guide. Stage 2 adds random source-backed flashcards with reveal, filters and a local revisit list; no scheduling or automatic grading.

## Flashcards

Open Practise flashcards for random questions with reveal, week/topic filters, optional random repeats and a saved revisit list. The condensed deck contains 417 short questions, reduced from 721. It uses only bold or highlighted statements from the main topic content, excluding dimmed text, examples and nested supplementary panels. Source statements are limited to 35 words without truncating longer statements; the median prompt is 12 words. Each cloze question hides a term or phrase; its answer restores the emphasized source wording, normalising whitespace only. Source evidence stays collapsed after reveal. CORE_STATEMENTS.json records the reviewed emphasis inventory. No live generation, scraping or AI service is used. FLASHCARD_COVERAGE.json records per-topic question counts and exclusions. This is a practice pool, not a guarantee of exam coverage or exhaustive theory coverage.

Click the card to reveal, then choose Got it right or Got it wrong. Skip & save and wrong answers enter the browser-local revisit list; correct removes the flag. Revisit only filters to saved questions. Uncheck random repeats for one appearance per question per session. Repeat this card explicitly retries the current card. Changing filters restarts the session but retains saved flags. Export/import moves the revisit list between browsers. Guide confidence is independent.

Run flashcard tests with `node --test tests/flashcards.test.cjs`. Both test suites run before deployment.
