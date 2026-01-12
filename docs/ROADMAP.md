# LiveFire Roadmap

## Phase 1: The Hook (MVP)
* **Goal:** Capture a lead.
* **Features:** A single, deployable webpage (`livefire-mvp.web.app`) that presents a "Joint Training Invite." A coach can enter their phone number to "Accept" the invite. This is a frontend-only prototype to validate the core user interaction.
* **Metric:** # of phone numbers captured.

## Phase 2: The Viral Loop
* **Goal:** Create a network effect.
* **Features:** Integrate Twilio/Firebase Auth for OTP (One-Time Password) phone verification. When a coach accepts an invite, it generates a unique URL they can send to another coach. This creates a simple, shareable loop.
* **Metric:** # of invites sent and accepted.

## Phase 3: The Marketplace
* **Goal:** Build liquidity.
* **Features:** Implement Firestore database to create a browsable list of available "Slots." Coaches can now see all open training opportunities, claim them, or post their own.
* **Metric:** # of open slots filled.

## Phase 4: The PWA
* **Goal:** Deepen engagement.
* **Features:** Add a `manifest.json` file and a Service Worker to make the web app installable on a user's home screen. Implement offline capabilities (viewing cached slots) and push notifications for new challenges.
* **Metric:** # of app installs and notification CTR.

## Phase 5: The Native Shell (Conditional)
* **Goal:** Address specific, high-demand needs that a PWA cannot fulfill.
* **Trigger:** This phase will only be initiated if the product requires deep hardware integration (e.g., Bluetooth, NFC), hits extreme performance ceilings (e.g., 3D graphics), or if the primary business strategy shifts to an app-store-first model. See `docs/TECH_SPECS.md` for details.
* **Features:** Wrap the existing web application in a native shell or migrate to a framework like React Native to access required native-only features.
