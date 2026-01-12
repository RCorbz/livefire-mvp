# Technical Specifications

## Stack
* **Frontend:** HTML5 + Tailwind CSS (via CDN for MVP).
* **Hosting:** Firebase Hosting.
* **Logic:** Vanilla JS, evolving into a Progressive Web App (PWA).

## Data Strategy (The "Invisible" Auth)
* **Auth:** Phone Number based (OTP via Firebase Auth). No Email/Password.
* **Database (Future):** Firestore.
* **Key Entities:**
    * `Team` (Name, Age, Skill Level, CoachPhone).
    * `Slot` (Time, Location, Status).
    * `Challenge` (Status: Pending, Accepted, Live).

## UI/UX Rules
1.  **Mobile First:** 100% of users are on iPhone/Android.
2.  **Dark Mode Default:** The app lives in the evening (under floodlights).
3.  **One Action Per Screen:** Don't overwhelm the user.
4.  **Tactical Feedback:** Buttons should feel "heavy" (haptic visual cues, instant state changes).

## Future: Native App Migration Triggers

A migration to a native framework like React Native will only be considered if the following conditions are met:

1.  **Deep Hardware Integration:** The app requires access to native-only APIs like Bluetooth, advanced NFC, or specific background processing modes.
2.  **Extreme Performance Demands:** The app evolves to include features like real-time 3D rendering or on-device video processing that exceed browser capabilities.
3.  **App Store Channel Strategy:** The primary user acquisition model shifts from viral links to discovery and marketing within the official app stores.
