# LiveFire Development Roadmap

## Phase 1: The "Digital Cardboard" (The MVP)
*Goal: A deployable link that captures a phone number. No backend database yet.*
- [ ] **1.1 Scaffold:** Create `index.html` with Tailwind CSS via CDN.
- [ ] **1.2 Hero Card:** Build the "Joint Training Invite" UI (Dark mode, intense visuals).
- [ ] **1.3 The Hook:** Implement the `acceptInvite()` JS function to trigger a browser `prompt()` for the phone number.
- [ ] **1.4 Feedback:** Create the visual "Success State" (Button turns green, Confetti, or "Slot Locked").
- [ ] **1.5 Deployment:** Deploy to Firebase Hosting (`livefire-mvp.web.app`).

## Phase 2: The "Wizard of Oz" (Data Capture)
*Goal: Actually save the phone numbers so we don't lose leads.*
- [ ] **2.1 Firestore Setup:** Initialize Firebase SDK in `index.html`.
- [ ] **2.2 Data Structure:** Create a `leads` collection.
- [ ] **2.3 writeData Function:** Connect the "Claim" button to send `{ name, phone, timestamp }` to Firestore.
- [ ] **2.4 Confirmation:** Replace the browser alert with a nice modal: "We will text you the field map."

## Phase 3: The "Trojan Horse" (Viral Loop)
*Goal: Make the page dynamic so we can change the "Team Name" via URL.*
- [ ] **3.1 URL Params:** Add logic to read `?team=Sparta` from the URL.
- [ ] **3.2 Dynamic Injection:** Update the "VS" text to show the opponent's name automatically based on the link.
- [ ] **3.3 The "Forward" Feature:** Add a "Share with Parents" button that copies the link.

## Phase 4: The "App" Wrapper (Future)
- [ ] **4.1 PWA:** Add `manifest.json` to make it installable on home screens.
- [ ] **4.2 Auth:** Replace simple phone capture with Firebase Phone Auth (SMS OTP)
