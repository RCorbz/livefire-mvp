# LiveFire Blueprint

## 1. Project Overview & Vision

**Core Philosophy:** LiveFire is a High-Performance Logistics Network for youth sports, replacing low-ROI practices with high-intensity "Joint Training" sessions. Our goal is to sell "Game Speed," not just schedule matches.

**North Star Metrics:**
1.  **Intensity:** All interactions must feel urgent, tactical, and high-stakes.
2.  **Speed:** Zero friction, no logins, "Magic Links" only.
3.  **Hyper-Local:** Focused on a specific geographic area to build network density.

**Brand Identity:**
*   **Voice:** Tactical, Professional, Direct.
*   **Visuals:** Dark Mode, Burnt Orange (`#FF4D00`), High Contrast.

## 2. Personas

*   **The Grunt (Coach Mike):** Our primary user. Needs big, simple buttons for use on the field. Wants to easily set up high-quality training.
*   **The Whale (Director Dave):** Needs oversight and control. Wants a dashboard to see his teams' activities.
*   **The Skeptic (The Parent):** The end-consumer of information. Will *never* download an app. Needs immediate access to "Where?" and "When?" via a web link.

## 3. Design, Features & Style

*   **UI/UX:** Mobile First, Dark Mode Default, One Action Per Screen, Heavy/Tactical feedback on interactions.
*   **Stack:** HTML5, Tailwind CSS (via CDN), Vanilla JavaScript.
*   **Data:** No user accounts or passwords. Phone number is the key identifier. Data stored in Firestore.

## 4. Current Plan: Phase 1 (The MVP)

*Goal: A deployable link that captures a phone number. No backend database yet.*

*   [ ] **1.1 Scaffold:** Create `index.html` with Tailwind CSS via CDN.
*   [ ] **1.2 Hero Card:** Build the "Joint Training Invite" UI (Dark mode, intense visuals).
*   [ ] **1.3 The Hook:** Implement the `acceptInvite()` JS function to trigger a browser `prompt()` for the phone number.
*   [ ] **1.4 Feedback:** Create the visual "Success State" (Button turns green, Confetti, or "Slot Locked").
*   [ ] **1.5 Deployment:** Deploy to Firebase Hosting (`livefire-mvp.web.app`).
