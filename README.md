# Rick and Morty Character Browser

A small practice project using the free [Rick and Morty API](https://rickandmortyapi.com/documentation) (no signup or API key required).

## Requirements

### Part 1: Setup & Skeleton (~15 min)

- Create `index.html`, `style.css`, and `script.js` in one folder.
- Link `style.css` in the `<head>` and `script.js` (with `defer`) near the end of `<body>`.
- Build two sections directly in `index.html`:
  - `#home-view` — contains an empty `<ul id="characters"></ul>`
  - `#detail-view` — contains empty placeholder elements for name, image, species, and status, plus a `<button id="back">Back</button>`
- Add a `.hidden { display: none; }` class in your CSS, and apply it to `#detail-view` by default so only the home view shows on load.

### Part 2: JavaScript & Core Functionality (~45-60 min)

- Create a `state` object with a `selectedCharacter` property (starts as `null`).
- Fetch the character list from `https://rickandmortyapi.com/api/character`.
  - The response is shaped like `{ results: [...] }` — an array of character objects (`id`, `name`, `image`, `species`, `status`).
- Render each character's name as an `<li>` inside `#characters`, storing each one's `id` as a `data-id` attribute.
- Add a click listener on `#characters` (event delegation — one listener on the `<ul>`, not on each `<li>`).
  - On click, read the clicked item's `id`.
  - Fetch that single character from `https://rickandmortyapi.com/api/character/{id}`.
  - Save the result to `state.selectedCharacter`.
  - Render its name, image, species, and status into `#detail-view`.
  - Hide `#home-view` and show `#detail-view`.
- Add a click listener on the back button that hides `#detail-view` and shows `#home-view` again (no fetch needed).
- Wrap both fetch calls in `try...catch`, with a fallback message shown if either fails.

### Part 3: CSS Polish (~15-20 min)

- Center content on the page (flexbox works well).
- Style the detail view like a card — padding, rounded corners, background color.
- Make the character name and image stand out visually.
- (Optional, if time allows) Style the status text differently depending on its value (e.g. "Alive" vs "Dead").

## Notes

- No API key or signup needed — the API is free and open.
- Mirrors the structure of a typical list → detail → back navigation exam question: one piece of state, a list fetch, a single-item fetch on click, and toggling visibility between two views instead of full page navigation.
