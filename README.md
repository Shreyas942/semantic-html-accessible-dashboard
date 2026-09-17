# Semantic HTML5 & Accessible Component Architecture

## Project Overview

This project demonstrates an accessible enterprise dashboard built using semantic HTML5 and WCAG 2.1 accessibility principles.

## Features

- Semantic HTML5 structure
- Accessible navigation header
- Sidebar navigation
- Dashboard sections and articles
- Accessible data tables
- Accessible forms
- Form validation attributes
- Accessible modal dialog
- Keyboard-friendly interface
- Responsive layout
- Multi-page dashboard

## Project Structure

```text
semantic-html-accessible-dashboard/
├── index.html
├── users.html
├── style.css
├── app.js
└── screenshots/
    ├── index-validation.png
    └── users-validation.png
```

## Semantic HTML5 Elements

The project uses:

- `<header>` for the dashboard header
- `<nav>` for navigation
- `<aside>` for the sidebar
- `<main>` for primary content
- `<section>` for content sections
- `<article>` for dashboard information
- `<table>` for structured data
- `<form>` and `<fieldset>` for accessible forms
- `<dialog>` for the modal
- `<footer>` for footer content

## Accessibility Features

- Proper heading hierarchy
- Descriptive navigation labels
- Form labels connected to controls
- Required and validation attributes
- Table captions and column scopes
- Visible keyboard focus
- Accessible modal dialog
- `aria-current` for current navigation page
- `role="status"` for dynamic messages

## Local Setup

1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Use the navigation to access the Users page.
4. Test the forms, modal, and keyboard navigation.

## W3C Validation

Both HTML pages were validated using the W3C Markup Validation Service.

- `index.html` — **0 errors, 0 warnings**
- `users.html` — **0 errors, 0 warnings**

Validation screenshots are available in the `screenshots` folder.

## First Feature

The first implemented feature is an accessible user-management dashboard.

Users can be added through the form, and the new user is displayed in the dashboard using browser local storage.

## Technologies

- HTML5
- CSS3
- JavaScript
- WCAG 2.1 accessibility principles
- W3C HTML validation
