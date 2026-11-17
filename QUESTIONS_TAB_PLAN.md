# Plan: Questions tab (MCQ and MRQ practice)

Status: **implemented** in `site/questions.html` with every §10 decision as planned. The questions in `QUESTION_BANK.md` are still unreviewed drafts.

## 1. What the tab is

A fourth page, **Questions**, beside Guide, Flashcards and Spot the mistake. It shows one question at a time from a fixed, reviewed bank:

- **MCQ** — four options, exactly one correct, answered with radio buttons.
- **MRQ** — three to five options, two or more correct, answered with checkboxes.

It follows the same rules as the rest of the site: static files only, no build step at runtime, no accounts, no backend, no runtime AI, no network calls, progress in browser local storage.

The one deliberate difference from Flashcards: the page **marks the answer itself**, because an MCQ/MRQ has a definite key. Flashcards stay self-assessed.

## 2. Files

New:

| File | Purpose |
|---|---|
| `site/questions.html` | Page shell, same layout/sidebar/CSP as `flashcards.html` |
| `site/questions-data.js` | `globalThis.COURSE_QUESTIONS = {...}` — the bank (generated, see §4) |
| `site/questions-core.js` | Pure logic shared by page and tests: filter, pick, shuffle, grade, restore |
| `site/questions.js` | DOM wiring only |
| `site/questions.css` | Option list, marking colours, explanation panel |
| `tools/build_questions.py` | Converts `QUESTION_BANK.md` → `site/questions-data.js` |
| `tests/questions.test.cjs` | Unit tests for `questions-core.js` |
| `QUESTION_BANK.md` | Reviewed source of truth for the questions (already drafted) |

Changed:

| File | Change |
|---|---|
| `site/index.html`, `flashcards.html`, `diagrams.html` | Add `<a href="./questions.html">Questions</a>` to the `page-links` nav |
| `tests/test_site.py` | Allow `questions.html` in the internal-link pattern; add bank checks (§8) |
| `README.md`, `PLAN.txt` | Describe the tab and its limits |

No change to `navigation.js`, `course-topics.js`, `flashcards*.js` or `diagrams*.js`. The existing workflow already syntax-checks every `site/*.js` and runs every `tests/*.test.cjs`, so `pages.yml` needs no edit.

## 3. Data shape

One record per question in `questions-data.js`:

```js
{
  id: "W7.4-03",                 // stable; never reused after a question is deleted
  type: "MCQ",                   // "MCQ" | "MRQ"
  week: 7,
  topic: "[W7.4] Design: Fundamentals",
  topicId: "W7.4c",              // first Source ID; drives the shared Textbook/Week filter
  sources: ["W7.4c", "W7.4d"],   // Guide topics backing the answer
  subtopic: "Coupling",
  basis: "bold",                 // "bold" | "body" | "panel"
  ab3: [],                       // repo-relative AB3 paths; empty for theory-only
  stem: "…",                     // plain text; `inline code` and ``` fenced blocks allowed
  options: [{key: "A", text: "…", correct: false}, …],
  explanation: "…",
  optional: false                // true for OPTIONAL course topics
}
```

Top level: `version`, `snapshot: "2026-11-11"`, `ab3Commit: "56d1ffb"`, `questions: [...]`.

Because each record carries `topicId`, the existing `CourseNavigation.mount()` works unchanged, exactly as it does for flashcards.

## 4. From `QUESTION_BANK.md` to the site

`QUESTION_BANK.md` stays the file people review and edit. `tools/build_questions.py` parses it and writes `questions-data.js`; it refuses to write if any question is malformed. A test rebuilds in memory and fails if the committed data file is out of date, so the two cannot drift. The site itself still needs no build to run.

Stems and options are rendered with `textContent` and DOM nodes only (a tiny tokenizer turns backticks into `<code>` and fences into `<pre>`); no `innerHTML`, so bank text can never become markup.

## 5. Page layout

Top to bottom, matching Flashcards so the page feels familiar:

1. **Header** — "Questions" / "Pick an answer, then check."
2. **Filters**
   - Shared Textbook / Week selector (category → chapter → topic, or week → topic).
   - Type: All · MCQ · MRQ.
   - Scope: All · Theory only · AB3 only.
   - Toggles: Allow random repeats · Revisit only.
3. **Status line** — "42 questions · 37 left" and session score "Score 6 / 8"; **More** menu with Restart, Export saved, Import saved, Clear saved.
4. **Question card**
   - Context line: `W7.4c · [W7.4] Design: Fundamentals`, plus an `AB3` tag when applicable, and "Read topic ↗".
   - Type badge: **MCQ · choose one** or **MRQ · select all that apply**.
   - Stem.
   - Options as a `<fieldset>` of radio buttons (MCQ) or checkboxes (MRQ); whole row is the tap target.
5. **Actions before checking** — Check answer (disabled until something is selected) · Skip.
6. **After checking** (options lock)
   - Each option marked: correct and chosen (green tick), correct but missed (green outline, "missed"), wrong and chosen (red cross). Text labels accompany colour so it is not colour-only.
   - Result line: "Correct" or "Not quite — 1 missed, 1 wrong choice".
   - Explanation.
   - Collapsed **Source & links**: Guide topic links for every Source ID, original course page link, and for AB3 questions a link to each file on GitHub pinned to the commit.
   - Actions: Next · Try again.
7. **Empty states** — nothing matches / everything seen / no saved questions, reusing the Flashcards wording.
8. **Help & privacy** — collapsed, same style as Flashcards.

Phone and tablet: single column, full-width option rows (min 44px), actions wrap; same breakpoints as `flashcards.css`. Print: filters and buttons hidden; stem and options printed.

## 6. Behaviour

- **Picking** — random from the filtered pool; with repeats off each question appears once per session (same `pick` rule as Flashcards).
- **Option order** — shuffled each time a question is shown; letters A–E are assigned after shuffling. Explanations in the bank never refer to option letters, so this is safe.
- **Marking**
  - MCQ: correct if the chosen option is the key.
  - MRQ: correct only if the selection equals the key set exactly (no partial credit); the feedback still shows what was missed and what was wrongly chosen.
- **Revisit list** — wrong answer saves the question as `incorrect`; Skip saves it as `skipped` (never downgrades `incorrect`); a correct answer removes it. Revisit only filters to saved questions.
- **Session score** — correct / attempted since the last restart or filter change; shown, not stored.
- **Storage** — key `cs2103-questions-v1`, `{version: 1, flags: {id: "skipped" | "incorrect"}}`. Separate from Flashcards and diagram data. Export/import validated like Flashcards (unknown IDs and other values rejected or ignored, 2 MB cap, prototype-safe). Other tabs sync through the `storage` event.
- **Keyboard** — Tab/arrow keys through options, Space to select, Enter to check, then Enter for Next. Result announced in a live region.

## 7. `questions-core.js` functions

| Function | Does |
|---|---|
| `filtered(questions, {type, scope, revisitOnly}, flags)` | Type / scope / revisit filtering (course filter comes from `CourseNavigation`) |
| `pick(pool, seen, allowRepeats, previousId, random)` | Same contract as `FlashcardCore.pick` |
| `shuffle(options, random)` | Fisher–Yates on a copy; relabels A–E |
| `grade(question, selectedKeys)` | Returns `{correct, missed, wrong}` |
| `restore(text, knownIds)` | Validates a backup or stored value |

## 8. Tests

`tests/questions.test.cjs`:
- MCQ grading right/wrong; MRQ exact match, subset (missed), superset (wrong), empty selection.
- Shuffle keeps every option and its `correct` flag; deterministic with an injected random.
- Filters combine (type × scope × revisit); pick exhausts the pool once without repeats.
- Backup round trip; unknown IDs, bad values, future versions and prototype keys rejected.

`tests/test_site.py` (new `QuestionBankTests`):
- IDs unique and match `W<week>.<n>-<nn>`.
- MCQ has exactly 4 options and 1 key; MRQ has 3–5 options and at least 2 keys; no duplicate option text.
- `week`, `topic` and every `sources` ID exist in `CONTENT_SOURCES.json` and agree with each other.
- Every non-stub topic group has at least one question; the stub groups have none.
- Explanations never mention an option letter.
- `questions-data.js` equals a fresh build of `QUESTION_BANK.md`.
- `questions.html` loads only local scripts/styles, has the CSP, no inline handlers.
- AB3 paths match an allow-list file (`AB3_FILES.txt`, the file list at the pinned commit), so tests need no network.

Manual/browser checks before merge: 320px, 390px, 768px, 1024px and landscape; keyboard-only run-through; print preview; reload keeps the revisit list.

## 9. Order of work (three reviewable PRs)

1. **Question bank** — review and correct `QUESTION_BANK.md`; add `tools/build_questions.py`, `questions-data.js`, bank tests. No visible site change.
2. **Questions page** — `questions.html`, core, UI, CSS, unit tests; nav link on all pages.
3. **Polish** — responsive and print checks, help text, README/PLAN updates.

Deployment follows merge to `main`, as now. Rollback is reverting the relevant commit.

## 10. Decisions to confirm before building

1. **MRQ marking** — all-or-nothing (planned) or partial credit?
2. **Automatic marking and saving** — wrong answers enter the revisit list automatically (planned), or keep Flashcards-style "Got it right / wrong" buttons?
3. **Shuffled options** — shuffle every time (planned) or keep the order written in the bank?
4. **AB3 questions** — mixed into the same deck with a Scope filter (planned) or a separate section?
5. **Topics with no content** — Git, GitHub and some IDE topics are only links to external lessons in the snapshot, so they have no questions. Leave empty (planned), or write questions from the external lessons as a separate, clearly labelled set?
6. **Session length** — endless random practice (planned), or also a fixed "quiz of N questions" mode with a score summary at the end?
