# Psjb

BREACH//13.52 ALT



COMPLETE WEBSITE DEVELOPMENT SPECIFICATION



Build a complete, polished PlayStation 4 utility dashboard called:



BREACH//13.52 ALT



This is a continuation of an existing PS4 research project based on the RAW GAME source files and previous static analysis.



The website must be designed primarily for the PlayStation 4 Slim, with firmware 13.52 as the initial research target.



It must also work on:



- PlayStation 4 browser.

- Android phones.

- Desktop computers.

- Modern Chromium-based browsers.



The website must be a real, functional frontend application, not just a static mockup.



Do not invent exploit functionality, pretend unimplemented features work, or report successful console operations that have not actually happened.



---



1. BRANDING AND VISUAL DESIGN



Project name:



BREACH//13.52 ALT



Design a dark, futuristic PlayStation utility interface.



Visual direction:



- Black backgrounds.

- Dark charcoal panels.

- Red accent lighting.

- Subtle gradients.

- Clean technical typography.

- Sharp dashboard cards.

- Professional console utility aesthetic.

- Clear status indicators.

- Minimal visual clutter.



The interface should feel like a custom PlayStation system utility.



Include:



- BREACH logo and branding.

- Main navigation.

- Dashboard cards.

- Status indicators.

- Firmware information.

- Activity history.

- Settings.

- Responsive layouts.



Use subtle animations in Modern Mode, but avoid excessive animation.



The website should look polished without sacrificing performance.



---



2. TWO COMPLETELY SEPARATE INTERFACE MODES



BREACH must have two interface modes.



MODERN MODE



Designed for:



- Android.

- Desktop.

- Modern browsers.



Features:



- Full dashboard.

- Expandable cards.

- Detailed system information.

- Animated status indicators.

- Modern navigation.

- Responsive layouts.

- Detailed diagnostic panels.

- Advanced visual presentation.



LEGACY PS4 MODE



Designed specifically for the older PlayStation 4 browser.



THIS IS ONE OF THE MOST IMPORTANT REQUIREMENTS.



Create a separate lightweight interface that does not depend on the modern application bundle.



Legacy Mode must prioritize:



- Low memory usage.

- Fast loading.

- Simple navigation.

- Browser compatibility.

- Controller navigation.

- Minimal JavaScript.

- Minimal CSS complexity.

- Reliable page rendering.



Legacy browser optimization requirements



Avoid:



- Heavy animations.

- WebGL.

- Background videos.

- Large image assets.

- Enormous Base64 images.

- Unnecessary external libraries.

- Excessive DOM elements.

- Large JavaScript bundles.

- Unnecessary network requests.

- Complex CSS effects.

- Features requiring modern browser APIs.

- JavaScript modules in the legacy entry point.

- Unnecessary browser storage operations.



Prefer:



- Simple HTML.

- Lightweight CSS.

- Conservative JavaScript.

- ES5-compatible JavaScript.

- Simple CSS layouts.

- Small icons.

- Local assets.

- Feature detection.

- Graceful fallbacks.

- Short pages.

- Simple navigation.



Controller support



Make the interface comfortable to use with a PS4 controller.



Requirements:



- Large clickable buttons.

- Clear focus indicators.

- Predictable navigation order.

- Visible selected states.

- No tiny controls.

- No hover-only interactions.

- Keyboard-compatible navigation.

- Appropriate focus management.



Legacy Mode behavior



Create a dedicated entry point, such as:



/legacy/index.html



It must load independently from the modern interface.



Include:



- Lightweight dashboard.

- Firmware information.

- Status panels.

- Navigation.

- Settings.

- Basic diagnostics.

- Source research information.



Automatically detect whether the browser appears to be a PS4 browser, but always allow manual switching.



Do not assume user-agent detection proves firmware compatibility.



If a feature is unsupported, show a clear unavailable message rather than crashing.



Include a visible switch:



MODERN MODE | LEGACY PS4 MODE



Remember the user's preferred interface mode when supported.



---



3. MAIN DASHBOARD



Create a complete dashboard with these sections:



1. System Overview

2. Firmware Information

3. Jailbreak Status

4. GoldHEN Status

5. Payload Library

6. Homebrew Library

7. File Manager

8. FTP Manager

9. BREACH//FAN

10. Recovery Centre

11. Source Analysis Centre

12. Activity Log

13. Settings



Each section must have its own page or functional panel.



The dashboard should show:



- Project name.

- Current interface mode.

- Detected browser.

- Firmware detection state.

- Jailbreak confirmation state.

- GoldHEN confirmation state.

- Available features.

- Unavailable features.

- Recent activity.



Never show fake success messages.



---



4. FIRMWARE DETECTION



Create a firmware detection section.



Display:



- Browser user agent.

- Detected platform.

- Detected firmware, if available.

- Detection confidence.

- Firmware compatibility table.

- Detection errors.

- Unknown firmware warning.



Initial research targets:



- 13.02

- 13.04

- 13.50

- 13.52



Important:

These are research targets, not independently verified compatibility claims.



If firmware detection fails, show:



UNKNOWN



Do not guess the firmware based on an incomplete browser string.



Clearly separate:



- Detected firmware.

- Advertised compatibility.

- Independently verified compatibility.

- Unknown compatibility.



Include a refresh detection button.



---



5. JAILBREAK STATUS



Create a dedicated jailbreak status panel.



Possible states:



- NOT CONFIRMED

- USER-CONFIRMED ACTIVE

- USER-CONFIRMED INACTIVE

- UNKNOWN



Include:



- Current status.

- Manual confirmation.

- Last status update.

- Explanatory information.



Do not claim that pressing a button actually jailbreaks the console.



Do not execute the RAW GAME exploit scripts.



This section is currently a status and research interface.



Never display successful jailbreak status unless supported by a genuine detection mechanism or explicitly confirmed by the user.



---



6. GOLDHEN INTEGRATION



Create a GoldHEN information panel.



Display:



- GoldHEN status.

- User-confirmed active/inactive state.

- Version field.

- Integration status.

- Compatibility notes.

- Last confirmation time.



Allow manual status confirmation.



Do not pretend to automatically detect GoldHEN if no real detection mechanism exists.



Clearly distinguish manual confirmation from automatic detection.



---



7. PAYLOAD LIBRARY



Create a dedicated payload library.



Include these five reference filenames:



- payload2.bin

- goldhen.bin

- 1302.bin

- 1350.bin

- 1352.bin



Display for each file:



- Filename.

- File size.

- SHA-256 hash.

- File type.

- Description.

- Verification status.

- Research notes.



Current reported file sizes:



Filename| Reported size

payload2.bin| 293 KB

goldhen.bin| 293 KB

1302.bin| 632 KB

1350.bin| 632 KB

1352.bin| 632 KB



IMPORTANT:

These sizes are user-reported and have not yet been independently verified.



Matching file sizes do not prove identical file contents.



The source research has identified a discrepancy:



- The 13.52 configuration references goldhen.bin.

- Its status comments mention payload2.bin.

- The cache manifest displays the same hash string for payload2.bin and goldhen.bin.



Do not resolve this discrepancy by guessing.



Display the verification state as:



NOT INDEPENDENTLY VERIFIED



Do not execute binaries.



Do not claim compatibility based on filenames or file sizes.



---



8. HOMEBREW LIBRARY



Create a homebrew library interface.



Include:



- Application name.

- Description.

- Version.

- Compatibility information.

- Installation status.

- Application category.

- Search.

- Filtering.



For now, create the library and metadata interface.



Do not pretend to install applications.



Do not fabricate application compatibility.



---



9. FILE MANAGER



Create a file manager interface.



Features:



- File list.

- Filename.

- File size.

- File type.

- Folder navigation.

- Search.

- Refresh.

- File metadata panel.



Important:

A normal website cannot automatically access the entire PS4 filesystem.



Clearly distinguish:



- Website-local files.

- User-provided files.

- Files from a genuinely connected external service.



Never pretend the console filesystem is connected when it is not.



---



10. FTP MANAGER



Create a dedicated FTP manager interface.



Include:



- Host address field.

- Port field.

- Connection status.

- File listing panel.

- Transfer history.

- Refresh button.

- Connection information.



Only show CONNECTED when an actual connection has been established through a supported implementation.



Never display fake connection success.



For Legacy PS4 Mode, explain when the browser cannot provide the required networking functionality.



Do not pretend a normal browser page has unrestricted FTP access.



---



11. BREACH//FAN



Create a dedicated temperature and fan information dashboard.



Include:



- CPU/APU temperature.

- Fan RPM.

- Fan profile.

- Temperature graph.

- Temperature warnings.

- Current sensor availability.

- Integration status.



Fan profiles:



- QUIET

- BALANCED

- COOLING

- AUTOMATIC



Important:

A normal website cannot directly read PS4 temperature or control its physical fan.



Display UNAVAILABLE until a genuine compatible integration exists.



Never invent temperature readings.



Never invent RPM values.



Never claim fan control is working when it is not.



Never override console thermal protections.



The dashboard should still have a polished interface while waiting for real compatible sensor integration.



---



12. RECOVERY CENTRE



Create a safe diagnostic interface.



Include:



- Browser compatibility check.

- Firmware information.

- Storage information when genuinely available.

- Network status.

- Application status.

- Diagnostic history.

- Error explanations.

- Browser support information.



Include educational Safe Mode information.



Do not execute dangerous recovery operations.



Do not pretend to repair the console.



Clearly identify which checks are real and which are unavailable.



---



13. SOURCE ANALYSIS CENTRE



Create a complete research section dedicated to RAW GAME.



Reference files:



- index.html

- jb.html

- jb.js

- core.js

- mem.js

- int64.js

- ps4_offsets.js

- rpc_worker.js

- cache.appcache



Keep original reference files unchanged.



Do not import or execute exploit-oriented source code inside the live website.



Use static documentation and metadata only.



Existing source findings



INDEX.HTML:



- Performs firmware detection.

- Uses the browser user agent.

- Displays firmware compatibility information.

- Redirects to jb.html.

- Uses the legacy Application Cache mechanism.



JB.HTML:



- Displays the RAW GAME interface.

- Loads jb.js.

- Shows progress and status messages.

- Does not itself prove exploit functionality.



JB.JS:



- Main orchestration script.

- Tracks multiple status flags.

- Selects firmware configuration.

- Handles the overall process.

- Contains cleanup behavior that does not guarantee all modified state is restored.



CORE.JS:



- Contains browser-side memory primitive logic.

- Performs browser structure validation.

- Includes checks that do not independently establish firmware compatibility.



MEM.JS:



- Contains memory access and carrier-management logic.

- Includes validation and rollback behavior.

- Rollback success is not guaranteed in every failure case.



INT64.JS:



- Provides 64-bit integer utilities.



RPC_WORKER.JS:



- Contains worker-side memory and control logic.

- Includes operations that can interfere with worker responsiveness.

- Restoration is not guaranteed if exceptions interrupt certain operations.



PS4_OFFSETS.JS:



- Contains firmware-specific configuration.

- Includes 13.50 and 13.52 entries.

- The 13.52 entry inherits from 13.50 and overrides selected fields.

- Its comments contain claims that have not been independently verified.



CACHE.APPcache:



- Uses legacy Application Cache.

- Lists the reference scripts and binary files.

- Includes firmware patch references.



Known inconsistencies



1. The landing page advertises 13.02, 13.04, 13.50, and 13.52.



2. The cache manifest lists patch files for 13.02, 13.50, and 13.52, but no 13.04 patch file was listed.



3. The 13.52 configuration inherits from 13.50.



4. The 13.52 payload configuration references goldhen.bin.



5. Its status comments mention payload2.bin.



6. The manifest displays the same hash string for payload2.bin and goldhen.bin.



7. The actual original file hashes have not yet been independently verified.



8. The reported binary file sizes are:

   

   - payload2.bin: 293 KB

   - goldhen.bin: 293 KB

   - 1302.bin: 632 KB

   - 1350.bin: 632 KB

   - 1352.bin: 632 KB



9. The reported file sizes are not proof that the files are identical.



Research interface



Display:



- Source filename.

- File description.

- Research findings.

- Known inconsistencies.

- Verification state.

- Notes.



Clearly distinguish:



- Verified source observations.

- Source comments and claims.

- Unverified assumptions.

- Missing information.



---



14. ACTIVITY LOG



Create an activity log.



Record harmless interface events such as:



- Dashboard opened.

- Interface mode changed.

- Firmware detection attempted.

- Firmware detection completed.

- Status manually confirmed.

- Source file metadata viewed.

- Diagnostic check performed.

- Settings changed.



Include:



- Event name.

- Date.

- Time.

- Event details.



Store harmless interface preferences locally when supported.



Do not fabricate console activity.



---



15. SETTINGS



Create a complete settings section.



Include:



Appearance



- Dark theme.

- Accent color.

- Compact mode.

- Animation toggle.



Interface



- Modern Mode.

- Legacy PS4 Mode.

- Automatic browser detection.



Performance



- Reduce animations.

- Lightweight interface.

- Disable unnecessary visual effects.

- Reduce interface refresh activity.



Information



- Project version.

- Build information.

- Browser information.

- Credits.



Reset



- Reset interface preferences.

- Clear harmless locally stored interface settings.



Make sure settings do not claim to change actual PS4 system configuration.



---



16. TECHNICAL ARCHITECTURE



Use a modular application architecture.



Modern interface



Use:



- React.

- TypeScript.

- Tailwind CSS.

- Lucide icons.



Keep components modular.



Avoid unnecessarily large dependencies.



Legacy interface



Create a separate lightweight HTML entry point.



Suggested structure:



/legacy/index.html

/legacy/style.css

/legacy/app.js



Requirements:



- Conservative HTML.

- Lightweight CSS.

- ES5-compatible JavaScript.

- No mandatory JavaScript modules.

- No mandatory React runtime.

- No mandatory modern browser APIs.

- Small local assets.

- Simple navigation.

- Graceful feature fallbacks.



The legacy interface must not need to load the entire modern application.



Shared project structure



Organize the project into logical folders:



/src

/src/components

/src/pages

/src/modules

/src/styles

/src/data

/public

/public/assets

/legacy

/reference/raw-game



Keep original reference files in:



/reference/raw-game/



Do not modify original reference files.



---



17. PERFORMANCE OPTIMIZATION



Performance is a major priority.



For Modern Mode:



- Lazy-load nonessential sections.

- Avoid unnecessary rerenders.

- Optimize images.

- Minimize unnecessary dependencies.

- Keep animations lightweight.



For Legacy PS4 Mode:



- Minimize total JavaScript.

- Minimize total CSS.

- Avoid large assets.

- Avoid unnecessary DOM updates.

- Avoid frequent timers.

- Avoid continuous background activity.

- Avoid excessive local storage access.

- Avoid unnecessary requests.

- Use simple navigation.

- Keep the dashboard lightweight.



Make the first page load as quickly as reasonably possible.



Provide graceful behavior if JavaScript features are unavailable.



Do not sacrifice basic navigation for visual effects.



---



18. ERROR HANDLING



Create clear error states.



Examples:



- Firmware could not be detected.

- Browser feature unavailable.

- File metadata unavailable.

- FTP connection unavailable.

- GoldHEN status unknown.

- Temperature sensor unavailable.

- Feature not implemented.

- Unsupported browser feature.



Do not crash the entire interface because one feature fails.



Each section should fail independently.



Provide a way to return to the dashboard.



---



19. FUTURE EXPANSION



Design the application so additional research files and modules can be added later.



Future additions may include:



- Additional firmware metadata.

- More source files.

- Binary metadata.

- Additional homebrew information.

- Verified compatibility information.

- Additional diagnostic modules.

- Genuine compatible integrations.



Do not build fake future functionality.



Use modular components so new features can be added without rebuilding the entire interface.



---



20. FINAL BUILD REQUIREMENTS



Build the actual working website.



Do not simply create a screenshot or describe the proposed design.



The finished website must include:



- Modern Mode.

- Legacy PS4 Mode.

- Dashboard.

- Firmware detector.

- Jailbreak status.

- GoldHEN information.

- Payload library.

- Homebrew library.

- File manager interface.

- FTP manager interface.

- BREACH//FAN.

- Recovery Centre.

- Source Analysis Centre.

- Activity Log.

- Settings.

- Performance optimization.

- Error handling.



Every navigation item must work.



Every button must perform its stated interface action or clearly indicate that the feature is not implemented.



Do not fabricate:



- Jailbreak success.

- GoldHEN detection.

- Fan readings.

- FTP connections.

- Firmware compatibility.

- Payload execution.

- Console filesystem access.



The website must be honest about which features are implemented.



---



PROJECT IDENTITY



PROJECT:

BREACH//13.52 ALT



INITIAL TARGET:

PlayStation 4 Slim CUH-2216B.



INITIAL FIRMWARE RESEARCH TARGET:

13.52.



PRIMARY DESIGN PRIORITY:

Excellent performance and compatibility with the older PS4 browser.



SECONDARY DESIGN PRIORITY:

A polished modern interface for Android and desktop.



MOST IMPORTANT TECHNICAL REQUIREMENT:

The Legacy PS4 interface must be a separate lightweight implementation and must not depend on loading the full modern application.



Build the complete project now.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://psjb.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a8f87c74-bdca-4314-b636-e74f0d8fdf64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
