# LiveFire Project Blueprint

## 1. Project Overview

**Purpose:** A web application to facilitate the scheduling of joint training sessions for sports teams. The initial view is an invitation card for a coach to claim an open slot for a training session.

**Core Technologies:**
- **Frontend:** HTML, CSS, JavaScript (ES Modules)
- **Styling:** Tailwind CSS
- **Components:** Web Components for reusable UI elements.
- **Build Tool:** Vite (via npm scripts)
- **Deployment:** Firebase Hosting

## 2. Implemented Features & Design

### Visual Design
- **Color Palette:**
  - Background: `black`
  - Icons & Primary Actions: `gold`
  - Text: `white`
- **Typography:** `Inter` font family.
- **Layout:** A centered card-based UI.
- **Style:** Dark mode, with glowing effects on primary buttons and a "lifted" card appearance.

### Core Components
- **Invitation Card:** A detailed card showing training session information (Date, Time, Location, Format).
- **Team Matchup:** A visual representation of the host team vs. an open slot.
- **"Claim Slot" Button:** The primary call-to-action.

### Functionality
- **`acceptInvite()`:** A JavaScript function triggered by the main button that simulates claiming a slot by using a `prompt()` to ask for a phone number and then provides a confirmation alert.

### UI Enhancements
-   **"Heating Up" Button Effect:**
    -   **Description:** When a user hovers over the "CLAIM TRAINING SLOT" button, a dynamic flame animation appears, giving a "heating up" sensation.
    -   **Implementation:**
        -   A `flame-button` class was added to the button element in `src/index.html`.
        -   `src/flames.css` was created to define the CSS animations for the flames. It uses a `radial-gradient` to create the flame effect and a `@keyframes` animation to make it rise and fade in.
        -   `src/flames.js` was created to dynamically add and remove flame elements to the button on `mouseenter` and `mouseleave` events, creating a more dynamic and random flame effect.
        -   The new CSS and JS files were linked in `src/index.html`.

## 3. Current Plan: Awaiting Next User Request

**Goal:** The project structure has been refactored, and the "heating up" button effect has been implemented. I am now waiting for the next set of instructions from the user.
