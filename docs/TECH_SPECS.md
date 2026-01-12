# Technical Specifications

## Stack
* **Frontend:** HTML5 + Tailwind CSS (via CDN for MVP).
* **Hosting:** Firebase Hosting.
* **Logic:** Vanilla JS (inline for MVP) -> migrating to React Native later.

## Data Strategy (The "Invisible" Auth)
* **Auth:** Phone Number based (OTP). No Email/Password.
* **Database (Future):** Firestore.
* **Key Entities:**
    * `Team` (Name, Age, Skill Level, CoachPhone).
    * `Slot` (Time, Location, Status).
    * `Challenge` (Status: Pending, Accepted, Live).

## UI/UX Rules
1.  **Mobile First:** 100% of users are on iPhone/Android.
2.  **Dark Mode Default:** The app lives in the evening (under floodlights).
3.  **One Action Per Screen:** Don't overwhelm the user.
4.  **Tactical Feedback:** Buttons should feel "heavy" (haptic visual cues, instant s
