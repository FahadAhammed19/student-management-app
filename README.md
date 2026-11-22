# Classroom — Student Management App

A responsive React student directory built by Fahad Ahammed for the Module 29 assignment. The PDF requests React, despite Django appearing in its filename.

## Features
- Add students with name, email, phone, and department.
- View all four fields in a student table.
- Search by name, ignoring case.
- Delete students with a confirmation dialog.
- Edit existing students, with cancellation.
- Total student count and filtered result count.
- LocalStorage persistence after refreshing the page.
- Required-field validation, email validation, phone validation, and duplicate-email protection.
- Responsive layout, accessible labels, keyboard focus, empty states, and storage-failure messages.

## Run locally
Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

```sh
npm test
npm run build
npm run preview
```

## Technology
React 19, React hooks, Vite, plain CSS, and the browser LocalStorage API. No backend or database is required by the assignment.

## Structure
`main.jsx`: UI and add/edit/delete flows. `students.js`: validation, name search, and saved-data reader. `styles.css`: responsive styles. `students.test.js`: validation/search/storage tests.

## Storage and privacy
Records are stored only in the browser and origin where they are entered. They do not sync across devices or users. Clearing browser storage removes them. This educational demo has no authentication; use fictional student data when demonstrating it. Initial records are empty. If saved data cannot be read, it is not silently overwritten; enabling saving explicitly replaces it with current records.

## Manual verification
1. Add a fictional student and confirm all four fields appear.
2. Submit empty/invalid values and a duplicate email; check errors.
3. Search using a partial name and different casing; clear the search.
4. Edit a student, save, then try canceling another edit.
5. Reload and confirm saved records remain.
6. Cancel a deletion, then confirm a deletion and check the count.
7. Check narrow screens and keyboard-only navigation.

## Deployment and submission
Import this repository into Netlify, run `npm run build`, and publish `dist`. Deployment is optional; the assignment requires submitting the public GitHub repository URL. Do not upload `node_modules`.
